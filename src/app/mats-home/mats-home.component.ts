import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MaterialModule } from '../material.module';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ServiceDetailsComponent } from '../service-details/service-details.component';
import { MatsFooterComponent } from "../mats-footer/mats-footer.component";

@Component({
  selector: 'app-mats-home',
  templateUrl: './mats-home.component.html',
  styleUrl: './mats-home.component.scss',
  imports: [MaterialModule, CommonModule, MatsFooterComponent],
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
  serviceData = [
    { title: 'TRANSPORT', subTitle: "Transport Detail's", toolTip: "Open Transport Detail's", infoText: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', cardSrc: '../../assets/contact-us.jpeg', imgs: [{src: '../../assets/car.jpeg'}, {src: '../../assets/car.jpeg'}, {src: '../../assets/car.jpeg'}, {src: '../../assets/car.jpeg'}, {src: '../../assets/car.jpeg'}, {src: '../../assets/car.jpeg'}], desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel asperiores illo non dolore hic libero accusantium odio iste modi commodi eos sed at molestias ipsum nulla inventore iure recusandae, culpa nesciunt. Quam omnis molestiae voluptatem, officiis aperiam autem hic adipisci deserunt voluptas a voluptatibus atque temporibus qui eius? Et at incidunt distinctio, optio corrupti molestias officia commodi provident dicta minus earum placeat saepe harum unde illum. Nisi, vel in. In quaerat, voluptates ipsum similique facere pariatur corporis doloremque, dolor nostrum harum, possimus laudantium et adipisci minus dolores eligendi! Ducimus, odit deserunt modi at eaque odio magnam dicta quibusdam? Expedita, provident?'},
    { title: 'TOWING', subTitle: "Towing Detail's", toolTip: "Open Towing Detail's", infoText: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', cardSrc: '../../assets/location.jpeg', desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel asperiores illo non dolore hic libero accusantium odio iste modi commodi eos sed at molestias ipsum nulla inventore iure recusandae, culpa nesciunt. Quam omnis molestiae voluptatem, officiis aperiam autem hic adipisci deserunt voluptas a voluptatibus atque temporibus qui eius? Et at incidunt distinctio, optio corrupti molestias officia commodi provident dicta minus earum placeat saepe harum unde illum. Nisi, vel in. In quaerat, voluptates ipsum similique facere pariatur corporis doloremque, dolor nostrum harum, possimus laudantium et adipisci minus dolores eligendi! Ducimus, odit deserunt modi at eaque odio magnam dicta quibusdam? Expedita, provident?'},
    { title: 'TOWING', subTitle: "Towing Detail's", toolTip: "Open Towing Detail's", infoText: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', cardSrc: '../../assets/location.jpeg', desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel asperiores illo non dolore hic libero accusantium odio iste modi commodi eos sed at molestias ipsum nulla inventore iure recusandae, culpa nesciunt. Quam omnis molestiae voluptatem, officiis aperiam autem hic adipisci deserunt voluptas a voluptatibus atque temporibus qui eius? Et at incidunt distinctio, optio corrupti molestias officia commodi provident dicta minus earum placeat saepe harum unde illum. Nisi, vel in. In quaerat, voluptates ipsum similique facere pariatur corporis doloremque, dolor nostrum harum, possimus laudantium et adipisci minus dolores eligendi! Ducimus, odit deserunt modi at eaque odio magnam dicta quibusdam? Expedita, provident?'},
    { title: 'TOWING', subTitle: "Towing Detail's", toolTip: "Open Towing Detail's", infoText: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', cardSrc: '../../assets/location.jpeg', desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel asperiores illo non dolore hic libero accusantium odio iste modi commodi eos sed at molestias ipsum nulla inventore iure recusandae, culpa nesciunt. Quam omnis molestiae voluptatem, officiis aperiam autem hic adipisci deserunt voluptas a voluptatibus atque temporibus qui eius? Et at incidunt distinctio, optio corrupti molestias officia commodi provident dicta minus earum placeat saepe harum unde illum. Nisi, vel in. In quaerat, voluptates ipsum similique facere pariatur corporis doloremque, dolor nostrum harum, possimus laudantium et adipisci minus dolores eligendi! Ducimus, odit deserunt modi at eaque odio magnam dicta quibusdam? Expedita, provident?'},
    { title: 'TOWING', subTitle: "Towing Detail's", toolTip: "Open Towing Detail's", infoText: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', cardSrc: '../../assets/location.jpeg', desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel asperiores illo non dolore hic libero accusantium odio iste modi commodi eos sed at molestias ipsum nulla inventore iure recusandae, culpa nesciunt. Quam omnis molestiae voluptatem, officiis aperiam autem hic adipisci deserunt voluptas a voluptatibus atque temporibus qui eius? Et at incidunt distinctio, optio corrupti molestias officia commodi provident dicta minus earum placeat saepe harum unde illum. Nisi, vel in. In quaerat, voluptates ipsum similique facere pariatur corporis doloremque, dolor nostrum harum, possimus laudantium et adipisci minus dolores eligendi! Ducimus, odit deserunt modi at eaque odio magnam dicta quibusdam? Expedita, provident?'},
    { title: 'TOWING', subTitle: "Towing Detail's", toolTip: "Open Towing Detail's", infoText: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', cardSrc: '../../assets/location.jpeg', desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel asperiores illo non dolore hic libero accusantium odio iste modi commodi eos sed at molestias ipsum nulla inventore iure recusandae, culpa nesciunt. Quam omnis molestiae voluptatem, officiis aperiam autem hic adipisci deserunt voluptas a voluptatibus atque temporibus qui eius? Et at incidunt distinctio, optio corrupti molestias officia commodi provident dicta minus earum placeat saepe harum unde illum. Nisi, vel in. In quaerat, voluptates ipsum similique facere pariatur corporis doloremque, dolor nostrum harum, possimus laudantium et adipisci minus dolores eligendi! Ducimus, odit deserunt modi at eaque odio magnam dicta quibusdam? Expedita, provident?'},
  ];

  constructor(private sanitizer: DomSanitizer, private _dialog: MatDialog){}

  ngOnInit(): void {
    this.iframeSrc = this.sanitizer.bypassSecurityTrustResourceUrl('https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3618.0571425999738!2d67.0687035!3d24.930123199999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33f03da43bd75%3A0x54b7c34c6ec61368!2sMATS%20Towing%20%26%20Transport!5e0!3m2!1sen!2s!4v1729808322419!5m2!1sen!2s');
  }

  openWhatsapp(contactNumber: number){
    if(!contactNumber) return;
    window.open(`https://api.whatsapp.com/send?phone=${contactNumber}`, '_blank');
    window.open('https://api.whatsapp.com/send?phone=923242887495', '_blank');    
  }

  onEmailChange(){
    if(!this?.userModel?.email?.includes('@gmail.com')){
      this.userModel.isError = true;
    } else {
      this.userModel.isError = false;
    }
  }

  onOpenDetail(element: any){
    if(!element) return;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '60vw';
    dialogConfig.data = element;
    dialogConfig.disableClose = true;
    this._dialog.open(ServiceDetailsComponent, dialogConfig);
  }

}
