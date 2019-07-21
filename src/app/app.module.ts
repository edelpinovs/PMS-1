import { HomeComponent } from './components/home/home.component' ;
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';

// Angular modules.
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Forms.
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// HttpClient for Api connections.
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// Angular Material modules.
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatFormFieldModule } from '@angular/material/form-field'; // Used to store controls and apply common styles.
import { MatInputModule } from '@angular/material/input';

// Table.
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';

import { NotFoundComponent } from './components/not-found/not-found.component';

// Interceptors.
import { PeopleComponent } from './peoples/components/list-people/peoples.component';

import { PeopleService } from './peoples/services/people.service';

import { routes } from './routes';
import { MatIconModule } from '@angular/material/icon';
import { EditPeopleComponent } from './peoples/components/edit-people/edit-people.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    NotFoundComponent,
    PeopleComponent,
    EditPeopleComponent
  ],
  entryComponents: [
    EditPeopleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    RouterModule.forRoot(routes),

    // Angular Material.
    BrowserAnimationsModule,
    MatButtonModule,
    MatMenuModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatIconModule,
    MatDialogModule
  ],
  providers: [
    PeopleService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
