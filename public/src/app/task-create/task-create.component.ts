import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { TaskService } from '../service/task.service';

@Component({
  selector: 'app-task-create',
  templateUrl: './task-create.component.html',
  styleUrls: ['./task-create.component.css']
})
export class TaskCreateComponent implements OnInit {

  @Input() task = { title: ''}

  constructor(
    public restApi: TaskService, 
    public router: Router
  ) { }

  ngOnInit() {
  }

  addTask(dataTask) {
    this.restApi.createTask(this.task).subscribe((data: {}) => {
      console.log("here");
      this.router.navigate(['/task-list'])
    })
  }
}