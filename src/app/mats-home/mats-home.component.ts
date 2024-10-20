import { Component } from '@angular/core';
import { MaterialModule } from '../material.module';

@Component({
  selector: 'app-mats-home',
  templateUrl: './mats-home.component.html',
  styleUrl: './mats-home.component.scss',
  imports: [MaterialModule],
  standalone: true
})
export class MatsHomeComponent {

  // constructor(){

  // }
}
