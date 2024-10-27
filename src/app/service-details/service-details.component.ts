import { Component, Inject } from '@angular/core';
import { MaterialModule } from '../material.module';
import { CommonModule } from '@angular/common';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-service-details',
  standalone: true,
  imports: [MaterialModule, CommonModule],
  templateUrl: './service-details.component.html',
  styleUrl: './service-details.component.scss'
})

export class ServiceDetailsComponent {

  constructor(public _dialogRef: MatDialogRef<ServiceDetailsComponent>, @Inject(MAT_DIALOG_DATA) public _dialogData: any){
    console.log(this._dialogData);
  }

  onClose(){
    this._dialogRef.close();
  }
}
