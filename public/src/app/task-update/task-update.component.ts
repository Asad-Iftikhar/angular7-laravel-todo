import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService } from '../service/task.service';

@Component({
  selector: 'app-task-update',
  templateUrl: './task-update.component.html',
  styleUrls: ['./task-update.component.css']
})

export class TaskUpdateComponent implements OnInit {
  id = this.actRoute.snapshot.params['id'];
  taskData: any = {};

  constructor(
    public restApi: TaskService,
    public actRoute: ActivatedRoute,
    public router: Router
  ) { 
  }

  ngOnInit() { 
    this.restApi.getTask(this.id).subscribe((data: {}) => {
      this.taskData = data;
    })
  }

  // Update task data
  updateTask() {
    if(window.confirm('Are you sure, you want to update?')){
      this.restApi.updateTask(this.id, this.taskData).subscribe(data => {
        this.router.navigate(['/task-list'])
      })
    }
  }

}