import { Component, Input } from '@angular/core';
import { UserService } from './user.service';

@Component({
  moduleId: module.id,
  selector: 'app-title',
  templateUrl: './title.component.html'
})
export class TitleComponent {
  @Input() subtitle = '';
  title = 'Angular Modules';
  titleHighlightColor = 'blue';
  user = '';

  constructor(userService: UserService){
    this.user = userService.userName;
  }
}