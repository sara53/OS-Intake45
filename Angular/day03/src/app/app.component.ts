import { Component } from '@angular/core';
import { TestDirectivesComponent } from './directives/test-directives/test-directives.component';
import { AttributeDirectivesComponent } from './directives/attribute-directives/attribute-directives.component';
import { TodosComponent } from './todos/todos.component';
import { ContentComponent } from './content/content.component';
import { LoginComponent } from './login/login.component';

@Component({
  selector: 'app-root',
  imports: [
    TestDirectivesComponent,
    AttributeDirectivesComponent,
    TodosComponent,
    ContentComponent,
    LoginComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  trackName: string = 'Open Source';
  mySupName: string = '';

  getData(data: any) {
    this.mySupName = data;
  }
}
