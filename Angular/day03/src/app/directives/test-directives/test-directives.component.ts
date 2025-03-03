import { Component } from '@angular/core';
import { OurCardComponent } from '../our-card/our-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-test-directives',
  imports: [OurCardComponent, CommonModule],
  templateUrl: './test-directives.component.html',
  styleUrl: './test-directives.component.css',
})
export class TestDirectivesComponent {
  show: boolean = false;

  student: { id: number; name: string; age: Number } | undefined = {
    id: 1,
    name: 'Ali',
    age: 29,
  };

  color: string = 'green';
  itiTracks: { id: number; trackName: string; studentNumber: number }[] = [
    {
      id: 1,
      trackName: 'Open Source',
      studentNumber: 26,
    },
    {
      id: 2,
      trackName: 'PD',
      studentNumber: 30,
    },
    {
      id: 3,
      trackName: 'Dotnet',
      studentNumber: 45,
    },
  ];
  toggle() {
    this.show = !this.show;
  }
}
