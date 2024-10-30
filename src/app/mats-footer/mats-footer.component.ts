import { Component } from '@angular/core';
import { MaterialModule } from '../material.module';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'mats-footer',
  standalone: true,
  imports: [MaterialModule, CommonModule],
  templateUrl: './mats-footer.component.html',
  styleUrl: './mats-footer.component.scss',
})

export class MatsFooterComponent {

  socialIcons: any[] = [
    { icon: '../../assets/facebook.png', toolTip: 'Open Facebook'  },
    { icon: '../../assets/instagram (1).png', toolTip: 'Open Instagram' },
    { icon: '../../assets/gmail (1).png', toolTip: 'Open Gmail' },
    { icon: '../../assets/linkedin.png', toolTip: 'Open Linkedin'},
  ];

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

}