import { Component } from '@angular/core';
import { MaterialModule } from '../material.module';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mats-home',
  templateUrl: './mats-home.component.html',
  styleUrl: './mats-home.component.scss',
  imports: [MaterialModule, CommonModule],
  standalone: true
})
export class MatsHomeComponent {

  offersData = [
    { icon: 'done_all', desc: 'MORE THAN 10 YEARS OF EXPERIENCE' },
    { icon: 'done_all', desc: 'SHORT ARRIVAL TIME OF 20 MINUTES OR LESS' },
    { icon: 'done_all', desc: 'HONEST COMPETITIVE PRICES - ZERO HIDDEN FEES' },
    { icon: 'done_all', desc: 'FRIENDLY AND PROFESSIONAL SERVICE' },
    { icon: 'done_all', desc: 'AVAILABLE 24 HOURS A DAY, 7 DAYS A WEEK' },
    { icon: 'done_all', desc: 'PACKAGING AND STORAGE, OR DOOR-TO-DOOR DELIVERY' },
  ];

}
