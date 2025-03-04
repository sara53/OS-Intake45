import { Component, OnDestroy } from '@angular/core';
import { TestDirectivesComponent } from './directives/test-directives/test-directives.component';
import { AttributeDirectivesComponent } from './directives/attribute-directives/attribute-directives.component';
import { TodosComponent } from './todos/todos.component';
import { ContentComponent } from './content/content.component';
import { LoginComponent } from './login/login.component';
import { ProductComponent } from './product/product.component';
import { GallaryComponent } from './gallary/gallary.component';

@Component({
  selector: 'app-root',
  imports: [ProductComponent, GallaryComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  product: { id: number; name: string; price: number } = {
    id: 1,
    name: 'Book',
    price: 200,
  };
  trackName: string = 'Open Source';
  mySupName: string = '';

  getData(data: any) {
    this.mySupName = data;
  }
  getOffer() {
    // this.product.price = 100;
    this.product = { ...this.product, price: 100 };
  }
}
