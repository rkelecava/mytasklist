import { Component } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Task } from '../../../task';
@Component({
  moduleId: module.id,
  selector: 'tasks',
  templateUrl: 'tasks.component.html'
})
export class TasksComponent {
  tasks: Task[];
  title: string;

  constructor(private taskService:TaskService) {
    this.taskService.getTasks()
      .subscribe(tasks => {
        this.tasks = tasks;
      });
  }

  addTask(event){
    event.preventDefault();
    var newTask = {
      title: this.title,
      isDone: false
    }

    this.taskService.addTask(newTask)
      .subscribe(task => {
        this.tasks.push(task);
        this.title = '';
      });
  }

  deleteTask(id) {
    var tasks = this.tasks;

    this.taskService.deleteTask(id).subscribe(err => {
      for(var i = 0;i < tasks.length;i++){
        if(tasks[i]._id == id){
          tasks.splice(i, 1);
        }
      }
    });
    //console.log('working');
  }
}
