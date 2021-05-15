import { Component } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: `./app.component.html`,
  providers: [NgbCarouselConfig]
})
export class AppComponent {
  title = 'MeuProjeto';

}

