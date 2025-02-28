import { Component } from '@angular/core';

@Component({
  selector: 'app-test-one-way-binding',
  imports: [],
  templateUrl: './test-one-way-binding.component.html',
  styleUrl: './test-one-way-binding.component.css',
})
export class TestOneWayBindingComponent {
  trackName: string = 'Front End';
  flag: boolean = true;
  imgSrc1: string = '2.jpg';
  imgSrc2: string = '3.jpg';

  clickHandler() {
    this.trackName = 'Open Source';
  }
}
