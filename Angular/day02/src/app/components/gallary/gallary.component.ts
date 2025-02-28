import { Component } from '@angular/core';
import { GallaryCardComponent } from './gallary-card/gallary-card.component';

@Component({
  selector: 'app-gallary',
  imports: [GallaryCardComponent],
  templateUrl: './gallary.component.html',
  styleUrl: './gallary.component.css',
})
export class GallaryComponent {}
