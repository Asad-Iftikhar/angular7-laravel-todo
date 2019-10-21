import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskCreateComponent } from './task-create/task-create.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskUpdateComponent } from './task-update/task-update.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'create-task' },
  { path: 'create-task', component: TaskCreateComponent },
  { path: 'task-list', component: TaskListComponent },
  { path: 'task-edit/:id', component: TaskUpdateComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }