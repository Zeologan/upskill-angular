import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilterPipe } from './fitler/filter.pipe';
import { FitlerComponent } from './fitler/fitler.component';
import { FormComponent } from './form/form.component';
import { NgclassComponent } from './ngclass/ngclass.component';
import { ChildComponent } from './parent/child/child.component';
import { ParentComponent } from './parent/parent.component';
import { RestApiComponent } from './rest-api/rest-api.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { UserFormComponent } from './user-form/user-form.component';
import { ProductComponent } from './product/product.component';


@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    UserFormComponent,
    RestApiComponent,
    ParentComponent,
    ChildComponent,
    NgclassComponent,
    FitlerComponent,
    FilterPipe,
    FormComponent,
    ProductComponent
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
