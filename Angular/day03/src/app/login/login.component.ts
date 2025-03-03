import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  superName: string = 'ahmed ali';
  @Output() myEvent = new EventEmitter();

  sendData() {
    this.myEvent.emit(this.superName);
  }
}
