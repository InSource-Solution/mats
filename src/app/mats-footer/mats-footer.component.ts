import { Component } from '@angular/core';
import { MaterialModule } from '../material.module';
import { CommonModule } from '@angular/common';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'mats-footer',
  standalone: true,
  imports: [MaterialModule, CommonModule],
  templateUrl: './mats-footer.component.html',
  styleUrl: './mats-footer.component.scss',
})

export class MatsFooterComponent {

  socialIcons: any[] = [
    { icon: '../../assets/facebook.png', toolTip: 'Open Facebook', path: 'https://www.facebook.com/MATSOFFICIAL0' },
    { icon: '../../assets/instagram (1).png', toolTip: 'Open Instagram', path: 'https://www.instagram.com/matstowing' },
    { icon: '../../assets/gmail (1).png', toolTip: 'Open Gmail', path: 'https://mail.google.com/mail/u/0/#inbox?compose=CllgCJftvWVwplGHzZnvslpvxlzVdVqcczTXvLqxMvdcvwstfppdZjLgFpxszjDXCXLKpjrRNZL' },
    { icon: '../../assets/linkedin.png', toolTip: 'Open Linkedin', path: 'https://www.linkedin.com/in/mats-towing-and-transport-869121318'},
  ];
  isMobile: any;

  constructor(private _breakPoint: BreakpointObserver){}

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  routeToPage(path: string) {
    if(!path) return;
    window.open(path, '_blank');
  }

  ngOnInit(): void {
    this._breakPoint.observe(Breakpoints.Handset).subscribe(res => {
      if(res.matches){
        this.isMobile = true;
      } else {
        this.isMobile = false;
      }
    });
  }

}