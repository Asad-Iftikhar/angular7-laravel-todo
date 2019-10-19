import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TaskCreateComponent } from './task-create/task-create.component';
import { AppRoutingModule } from './app-routing.module';
// Forms module
import { FormsModule } from '@angular/forms';

// HttpClient module for RESTful API
import { HttpClientModule } from '@angular/common/http';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskUpdateComponent } from './task-update/task-update.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskCreateComponent,
    TaskListComponent,
    TaskUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
