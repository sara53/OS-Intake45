import { Component } from '@angular/core';
import { TestOneWayBindingComponent } from './components/one way binding/test-one-way-binding.component';
import { TestTwoWayBindingComponent } from './components/two way binding/test-two-way-binding.component';

@Component({
  selector: 'app-root',
  imports: [TestOneWayBindingComponent, TestTwoWayBindingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}
