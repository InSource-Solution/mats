import { Component, OnInit } from '@angular/core';
import { MaterialModule } from '../material.module';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-mats-home',
  templateUrl: './mats-home.component.html',
  styleUrl: './mats-home.component.scss',
  imports: [MaterialModule, CommonModule],
  standalone: true
})
export class MatsHomeComponent implements OnInit {

  userModel: any = {};
  iframeSrc: SafeResourceUrl | undefined;
  offersData = [
    { icon: 'done_all', desc: 'MORE THAN 10 YEARS OF EXPERIENCE' },
    { icon: 'done_all', desc: 'SHORT ARRIVAL TIME OF 20 MINUTES OR LESS' },
    { icon: 'done_all', desc: 'HONEST COMPETITIVE PRICES - ZERO HIDDEN FEES' },
    { icon: 'done_all', desc: 'FRIENDLY AND PROFESSIONAL SERVICE' },
    { icon: 'done_all', desc: 'AVAILABLE 24 HOURS A DAY, 7 DAYS A WEEK' },
    { icon: 'done_all', desc: 'PACKAGING AND STORAGE, OR DOOR-TO-DOOR DELIVERY' },
  ];

  constructor(private sanitizer: DomSanitizer){

  }

  ngOnInit(): void {
    this.userModel['name'] = "Umair";
    this.iframeSrc = this.sanitizer.bypassSecurityTrustResourceUrl('https://www.google.com/maps/place/MATS+Towing+%26+Transport/@24.930128,67.0661286,17z/data=!3m1!4b1!4m6!3m5!1s0x3eb33f03da43bd75:0x54b7c34c6ec61368!8m2!3d24.9301232!4d67.0687035!16s%2Fg%2F11kbxcmkmm?entry=ttu&g_ep=EgoyMDI0MTAyMS4xIKXMDSoASAFQAw%3D%3D');
  }

  onEmailChange(){
    if(!this?.userModel?.email?.includes('@gmail.com')){
      this.userModel.isError = true;
    } else {
      this.userModel.isError = false;
    }
  }

}
