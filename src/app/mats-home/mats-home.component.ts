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
    { title: 'TRANSPORT', subTitle: "Transport Detail's", toolTip: "Open Transport Detail's", infoText: 'We at MATS provide the best Car & Motorcycle Towing services to our clients.', cardSrc: '../../assets/contact-us.jpeg', imgs: [{src: '../../assets/car.jpeg'}, {src: '../../assets/car.jpeg'}, {src: '../../assets/car.jpeg'}, {src: '../../assets/car.jpeg'}, {src: '../../assets/car.jpeg'}, {src: '../../assets/car.jpeg'}], desc: 'Easily transport your vehicle across Pakistan with MATS. With facilities in Lahore, Karachi, and Islamabad, we provide nationwide, daily towing services—both Terminal-to-Terminal and Door-to-Door. For added security, all transports include optional transit insurance, ensuring safe and affordable delivery every time.'},
    { title: 'TOWING', subTitle: "Towing Detail's", toolTip: "Open Towing Detail's", infoText: 'Smooth, Safe, and Reliable Vehicle Towing with MATS', cardSrc: '../../assets/location.jpeg', desc: 'MATS makes vehicle transport straightforward and dependable. Our dedicated team ensures your car, truck, or van arrives safely, whether you choose Door-to-Door or Terminal-to-Terminal service. With comprehensive coverage across Pakistan, we’re committed to delivering a hassle-free experience every time.'},
    { title: 'Quick Jump Start', subTitle: "Quick Jump Start Detail's", toolTip: "Open Quick Jump Start Detail's", infoText: 'Fast Jump Start Service - Get Moving with MATS', cardSrc: '../../assets/location.jpeg', desc: 'Don’t let a dead battery disrupt your day. MATS provides swift, reliable jump-start assistance to get you back on the road quickly. With skilled technicians and prompt response times, we’re ready whenever you need a boost.'},
    { title: 'Emergency Fuel Delivery', subTitle: "Emergency Fuel Delivery Detail's", toolTip: "Open Emergency Fuel Delivery Detail's", infoText: 'Emergency Fuel Delivery - MATS Keeps You Moving', cardSrc: '../../assets/location.jpeg', desc: 'Stranded with an empty tank? MATS offers rapid, on-demand fuel delivery to get you back on track. Our team brings fuel directly to your location, ensuring a safe and convenient solution for those unexpected moments. Count on us to keep you moving, wherever you are.'},
    { title: 'Goods Transportation', subTitle: "Goods Transportation Detail's", toolTip: "Open Goods Transportation Detail's", infoText: 'Seamless Goods Transportation - Trust MATS to Deliver', cardSrc: '../../assets/location.jpeg', desc: 'MATS offers secure and efficient goods transportation across Pakistan. From fragile items to bulk shipments, our experienced team ensures every delivery arrives safely and on time. With flexible service options and end-to-end tracking, MATS is your trusted partner for all freight needs.'},
    { title: 'Car Lock Out Services', subTitle: "Car Lock Out Services Detail's", toolTip: "Open Car Lock Out Services Detail's", infoText: 'Swift Car Lockout Services - MATS to the Rescue!', cardSrc: '../../assets/location.jpeg', desc: 'Locked out of your vehicle? Don’t worry! MATS provides fast and reliable car lockout services to get you back inside without the hassle. Our skilled technicians are just a call away, ready to help you regain access to your vehicle safely and efficiently. Trust MATS for quick solutions when you need them most!'},
  ];
  faqData = [
    { isPanelOpen: false, ques: 'How long does Mats Moving Specialist need for in-home estimates?', ans: 'Our in-home estimates usually take no more than one hour. A moving consultant will come out to your residence and survey your home and come up with an exact estimate based on volume of your shipment. The estimate is printed on-site so you and your moving consultant can go over any questions you may have about the estimate. Costa Logistics Packers & Movers is a global logistics company offering a wide range of international logistics services including: Import customs clearance and domestic forwarding, export freight forwarding, as well as freight audit and pay. Costa’s family of industry leading companies provides a complete suite of international services: Costa Logistics International is a licensed export freight forwarder managing exports to more than 100 companies. International Forwarders, provides export freight forwarding and customs brokerage services to companies worldwide'},
    { isPanelOpen: false, ques: 'What are our responsibilities?', ans: 'Be present during the packing of your belongings. Take personal responsibility for jewelry and other high value items. Check and sign the inventory of your belongings. Ensure that no prohibited items are packed. If packing yourself, make sure that you pack correctly.Costa Logistics Packers Movers takes very seriously its responsibility for safety in all aspects of its business and operations.  At all levels of the organization, we are committed to uphold the highest standards with regard to safety, health, the environment, and security. As a statement of our commitment, Costa has adopted the Corporate Policy.'},
    { isPanelOpen: false, ques: 'How long will Costa Movers Specialist take to pack my goods?', ans: 'Every home is different, but we can normally pack a home in 1 to 2 days.'},
    { isPanelOpen: false, ques: 'What about my car?', ans: 'We can arrange to have your car(s), truck transported with the rest of your belongings; in the trailer or shipped separately on a car carrier. However, we do not transport cars as part of a regular local move.'},
  ];

  constructor(private sanitizer: DomSanitizer, private _dialog: MatDialog){}

  ngOnInit(): void {
    this.iframeSrc = this.sanitizer.bypassSecurityTrustResourceUrl('https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3618.0571425999738!2d67.0687035!3d24.930123199999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33f03da43bd75%3A0x54b7c34c6ec61368!2sMATS%20Towing%20%26%20Transport!5e0!3m2!1sen!2s!4v1729808322419!5m2!1sen!2s');
  }

  openWhatsapp(contactNumber: number){
    if(!contactNumber) return;
    window.open(`https://api.whatsapp.com/send?phone=${contactNumber}`, '_blank');
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
