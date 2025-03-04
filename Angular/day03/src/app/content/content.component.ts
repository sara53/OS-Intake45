import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-content',
  imports: [],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css',
})
export class ContentComponent {
  @Input({ required: true }) dataFromParent: string = '';
  @Input({ required: true }) supName: string = '';
}
