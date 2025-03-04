import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
  constructor() {
    console.log('1-Ctor');
  }
  superName: string = 'ahmed ali';
  @Output() myEvent = new EventEmitter();

  ngOnInit(): void {
    this.myEvent.emit(this.superName);
  }
}
