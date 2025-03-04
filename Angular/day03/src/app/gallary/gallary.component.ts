import { AfterContentInit, Component } from '@angular/core';

@Component({
  selector: 'app-gallary',
  imports: [],
  templateUrl: './gallary.component.html',
  styleUrl: './gallary.component.css',
})
export class GallaryComponent implements AfterContentInit {
  ngAfterContentInit(): void {
    console.log('After Content Init');
  }
}
