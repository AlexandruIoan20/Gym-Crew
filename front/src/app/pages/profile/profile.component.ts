import { Component } from '@angular/core';
import { HeaderComponent } from '../../layout/header/header.component';
import { FooterComponent } from '../../layout/footer/footer.component';
import { UserInfoComponent } from "../../components/user-info/user-info.component";
import { User } from '../../../../types';

@Component({
  selector: 'app-profile',
  imports: [HeaderComponent, FooterComponent, UserInfoComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
    user: User = { 
      name: "Alex", 
      email: "ialexmoraru@yahoo.ro", 
      password: "PIM", 
      image: "No image", 
    }
}
