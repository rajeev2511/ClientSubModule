import { Component } from '@angular/core';
import { UserDto } from '@shared/models/user.dto';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  user: UserDto = { id: 1, name: 'John Doe' };
}
