import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { UserFormComponent } from './user-form/user-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RestApiComponent } from './rest-api/rest-api.component';
import { HttpClientModule } from '@angular/common/http';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './parent/child/child.component';
<<<<<<< HEAD
=======
import { NgclassComponent } from './ngclass/ngclass.component';
import { FitlerComponent } from './fitler/fitler.component';
import { FilterPipe } from './fitler/filter.pipe';

>>>>>>> 08e5178295db544457d55370eb96dd6d354a7a42

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    UserFormComponent,
    RestApiComponent,
    ParentComponent,
    ChildComponent,
<<<<<<< HEAD
=======
    NgclassComponent,
    FitlerComponent,
    FilterPipe
>>>>>>> 08e5178295db544457d55370eb96dd6d354a7a42
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
