import { Component, OnInit } from '@angular/core';
import { TaskService } from '../service/task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  Task: any = [];

  constructor(
    public restApi: TaskService
  ) { }

  ngOnInit() {
    this.loadTasks()
  }

  // Get tasks list
  loadTasks() {
    return this.restApi.getTasks().subscribe((data: {}) => {
      this.Task = data;
    })
  }

  // Delete task
  deleteTask(id) {
    if (window.confirm('Are you sure, you want to delete?')){
      this.restApi.deleteTask(id).subscribe(data => {
        this.loadTasks()
      })
    }
  }  

}