import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-test-two-way-binding',
  imports: [FormsModule],
  templateUrl: './test-two-way-binding.component.html',
  styleUrl: './test-two-way-binding.component.css',
})
export class TestTwoWayBindingComponent {
  studentName: string = '';
  studentAge: string = '';

  login() {
    console.log(this.studentName);
    console.log(this.studentAge);
  }
  // inputValue: string = '';
  // getInputValue(e: Event) {
  //   let target = e.target as HTMLInputElement;
  //   this.inputValue = target.value;
  // }
}
