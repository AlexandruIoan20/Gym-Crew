import { Component, Input } from '@angular/core';
import { User } from '../../../../types';

@Component({
  selector: 'app-user-info',
  imports: [],
  templateUrl: './user-info.component.html',
  styleUrl: './user-info.component.css'
})
export class UserInfoComponent {
  @Input() currentUser: User = {
    name: "", 
    email: "", 
    password: "", 
    image: "", 
  };   
} 
