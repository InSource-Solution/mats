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

  constructor(private sanitizer: DomSanitizer){}

  ngOnInit(): void {
    this.iframeSrc = this.sanitizer.bypassSecurityTrustResourceUrl('https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3618.0571425999738!2d67.0687035!3d24.930123199999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33f03da43bd75%3A0x54b7c34c6ec61368!2sMATS%20Towing%20%26%20Transport!5e0!3m2!1sen!2s!4v1729808322419!5m2!1sen!2s');
  }

  onEmailChange(){
    if(!this?.userModel?.email?.includes('@gmail.com')){
      this.userModel.isError = true;
    } else {
      this.userModel.isError = false;
    }
  }

}
