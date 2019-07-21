import { People } from './../../models/people.model';
import { Component, OnInit, Inject } from '@angular/core';
import { Validators, FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { PeopleService } from '../../services/people.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-edit-people',
  templateUrl: './edit-people.component.html',
  styleUrls: ['./edit-people.component.css']
})
export class EditPeopleComponent implements OnInit {
  formEnviar: FormGroup;
  title: string;

  constructor(public dialogRef: MatDialogRef<EditPeopleComponent>,
              @Inject(MAT_DIALOG_DATA) public people: People,
              public peopleService: PeopleService) { }

  ngOnInit() {
    this.formEnviar = new FormGroup({
      'id': new FormControl(null),
      'firstName': new FormControl(null, Validators.required),
      'lastName': new FormControl(null, Validators.required),
      'age': new FormControl(null, Validators.required),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'profession': new FormControl(null, Validators.required),
      'aboutMe': new FormControl(null, Validators.required)
    });
    this.title = this.people.id === undefined ? 'Add person' : 'Edit person';
  }

  onSubmit(event: Event) {
    event.preventDefault();

    if (this.people.id === undefined || this.people.id === 0) {
      this.peopleService.create(this.people).subscribe(
        (data: People) => {
          this.dialogRef.close();
        },
        (err: HttpErrorResponse) => {
          alert(err.error.message);
        }
      );
    } else {
      this.peopleService.update(this.people).subscribe(
        (data: People) => {
          this.dialogRef.close();
        },
        (err: HttpErrorResponse) => {
          alert(err.error.message);
        }
      );
    }
  }
}
