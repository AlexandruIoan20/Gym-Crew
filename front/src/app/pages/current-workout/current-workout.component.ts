import { Component } from '@angular/core';
import { HeaderComponent } from '../../layout/header/header.component';
import { FooterComponent } from '../../layout/footer/footer.component';

@Component({
  selector: 'app-current-workout',
  imports: [ HeaderComponent, FooterComponent ],
  templateUrl: './current-workout.component.html',
  styleUrl: './current-workout.component.css'
})
export class CurrentWorkoutComponent {

}
