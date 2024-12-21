import { Component, OnInit } from '@angular/core';
import { MaterialModule } from '../material.module';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { MatsFooterComponent } from '../mats-footer/mats-footer.component';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-mats-home',
  templateUrl: './mats-home.component.html',
  styleUrl: './mats-home.component.scss',
  imports: [MaterialModule, CommonModule, MatsFooterComponent],
  standalone: true,
})
export class MatsHomeComponent implements OnInit {
  userModel: any = {};
  iframeSrc: SafeResourceUrl | undefined;
  serviceData = [
    {
      title: 'Car Carrier',
      isFlipped: false,
      subTitle: "Car Carrier Detail",
      imgSrc: "../../assets/car-carrier.png",
      toolTip: "Click for Car Carrier Detail",
      infoText: 'We at MATS provide the best Car & Motorcycle Towing services to our clients.',
      desc: 'Ship your car between Lahore, Karachi, Faisalabad,Peshawar and Islamabad at market competitive rates through our wide network of trusted partners.',
    },
    {
      title: 'Premium Towing Service',
      isFlipped:  false,
      subTitle: "Premium Towing Detail",
      imgSrc: "../../assets/towing.png",
      toolTip: "Click for Premium Towing Detail",
      infoText: 'Smooth, Safe, and Reliable Vehicle Towing with MATS',
      desc: "Specialized 20Ft Containerized Towing Service to move your Premium SUV's and Sports Cars with full safety between Lahore, Karachi and Islamabad.",
    },
    {
      title: 'Tow Truck',
      isFlipped: false,
      subTitle: "Tow Truck Detail",
      imgSrc: "../../assets/tow-truck.png",
      toolTip: "Click for Tow Truck Detail",
      infoText: 'Fast Tow Truck Service - Get Moving with MATS',
      desc: 'Mobilize a Tow Truck in Lahore, Islamabad and Karachi within minutes to service your broken down vehicle.',
    },
  ];
  faqData = [
    {
      isPanelOpen: false,
      ques: 'How long does Mats Moving Specialist need for in-home estimates?',
      ans: 'Our in-home estimates usually take no more than one hour. A moving consultant will come out to your residence and survey your home and come up with an exact estimate based on volume of your shipment. The estimate is printed on-site so you and your moving consultant can go over any questions you may have about the estimate. Costa Logistics Packers & Movers is a global logistics company offering a wide range of international logistics services including: Import customs clearance and domestic forwarding, export freight forwarding, as well as freight audit and pay. Costa’s family of industry leading companies provides a complete suite of international services: Costa Logistics International is a licensed export freight forwarder managing exports to more than 100 companies. International Forwarders, provides export freight forwarding and customs brokerage services to companies worldwide',
    },
    {
      isPanelOpen: false,
      ques: 'What are our responsibilities?',
      ans: 'Be present during the packing of your belongings. Take personal responsibility for jewelry and other high value items. Check and sign the inventory of your belongings. Ensure that no prohibited items are packed. If packing yourself, make sure that you pack correctly.Costa Logistics Packers Movers takes very seriously its responsibility for safety in all aspects of its business and operations.  At all levels of the organization, we are committed to uphold the highest standards with regard to safety, health, the environment, and security. As a statement of our commitment, Costa has adopted the Corporate Policy.',
    },
    {
      isPanelOpen: false,
      ques: 'How long will Costa Movers Specialist take to pack my goods?',
      ans: 'Every home is different, but we can normally pack a home in 1 to 2 days.',
    },
    {
      isPanelOpen: false,
      ques: 'What about my car?',
      ans: 'We can arrange to have your car(s), truck transported with the rest of your belongings; in the trailer or shipped separately on a car carrier. However, we do not transport cars as part of a regular local move.',
    },
  ];
  customerImgLst = [
    { src: '../../assets/customer2.png' },
    { src: '../../assets/customer1.png' },
    { src: '../../assets/customer3.png' },
  ];
  isMobile: any;
  isLoading: boolean = false;

  constructor(private sanitizer: DomSanitizer, private _http: HttpClient, private _breakPoint: BreakpointObserver, private _snackBar: MatSnackBar){}

  flipCard(currentService: any = {}) {
    event?.stopImmediatePropagation();
    currentService['isFlipped'] = !currentService['isFlipped'];
  }

  ngOnInit(): void {
    this._breakPoint.observe(Breakpoints.Handset).subscribe(res => {
      if(res.matches){
        this.isMobile = true;
      } else {
        this.isMobile = false;
      }
    });
    this.iframeSrc = this.sanitizer.bypassSecurityTrustResourceUrl('https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3618.0571425999738!2d67.0687035!3d24.930123199999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33f03da43bd75%3A0x54b7c34c6ec61368!2sMATS%20Towing%20%26%20Transport!5e0!3m2!1sen!2s!4v1729808322419!5m2!1sen!2s');
  }

  openWhatsapp(contactNumber: number) {
    if (!contactNumber) return;
    window.open(`https://api.whatsapp.com/send?phone=${contactNumber}`, '_blank');
  }

  onEmailChange() {
    if (!this?.userModel?.email?.includes('@gmail.com')) {
      this.userModel.isError = true;
    } else {
      this.userModel.isError = false;
    }
  }

  async sendData(){
    if(!this.userModel.name)
      return this.showError("Required Name...!");

    if(!this.userModel.email)
      return this.showError("Required Email...!");

    if(!this.userModel.text)
      return this.showError("Required Message...!");

    this.isLoading = true;
    delete this.userModel.isError;
    const res = await this._http.post<any>(`api/formsubmission`, this.userModel);
    this.isLoading = false;
    res.subscribe((response) => {
      if(response){
        this.showError("Email Successfully Sent...!");
      }
    },
    (error) => {
      this.showError("Email Not Sent...!");
    })
  }

  showError(msg: string){
    this._snackBar.open(msg, "Ok", {
      duration: 5000,
      panelClass: 'overwrite-snack-bar'
    });
  }
} 