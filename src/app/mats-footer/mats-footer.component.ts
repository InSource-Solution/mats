import { Component } from '@angular/core';
import { MaterialModule } from '../material.module';

@Component({
  selector: 'mats-footer',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './mats-footer.component.html',
  styleUrl: './mats-footer.component.scss',
})
export class MatsFooterComponent {
  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
