import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todos',
  imports: [FormsModule],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css',
})
export class TodosComponent {
  newTask: string = '';
  tasks: string[] = [];
  addTask() {
    this.tasks.push(this.newTask);
    this.newTask = '';
  }

  removeTask(taskIndex: number) {
    this.tasks = this.tasks.filter((task, index) => index != taskIndex);
  }
}
