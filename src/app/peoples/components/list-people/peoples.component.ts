import { HttpErrorResponse } from '@angular/common/http';
import { People } from '../../models/people.model';
import { PeopleService } from '../../services/people.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource, PageEvent, MatDialog } from '@angular/material';
import { EditPeopleComponent } from '../edit-people/edit-people.component';

@Component({
  selector: 'app-bookmarks',
  templateUrl: './peoples.component.html',
  styleUrls: ['./peoples.component.css']
})
export class PeopleComponent implements OnInit {
  personas: Array<People>;
  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'age', 'email', 'profession', 'aboutMe', 'actions'];
  dataSource;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  // MatPaginator Inputs
  length = 50;
  pageSize = 5;
  pageSizeOptions = [ 5, 10, 25, 100 ];

  // MatPaginator Output
  pageEvent: PageEvent;

  constructor(public peopleService: PeopleService, public dialog: MatDialog) { }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }

  ngOnInit() {
    this.refresh();
  }

  refresh() {
    this.peopleService.getAll()
    .subscribe(
      (response: People[]) => {
        this.personas = response;
        this.dataSource = new MatTableDataSource<People>(this.personas);

        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  createPeople() {
    this.gestPeople(new People());
  }

  editPeople(people: People, event: Event) {
    this.gestPeople(people);
  }

  gestPeople(people: People) {
      const dialogRef = this.dialog.open(EditPeopleComponent, {
        data: people,
        height: '610px',
        width: '600px'
    });

    dialogRef.afterClosed().subscribe(result => {
      this.refresh();
    });
  }

  removePeople(people: People) {
    const result = confirm('Do you want to delete the people?');
    if (result) {
      this.peopleService.delete(people.id).subscribe(
        (data: number) => {
          this.refresh();
        },
        (err: HttpErrorResponse) => {
          alert(err.error.message);
        }
      );
    }
  }
}
