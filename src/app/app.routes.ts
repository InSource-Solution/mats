import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatsHomeComponent } from './mats-home/mats-home.component';
import { MaterialModule } from './material.module';

export const routes: Routes = [
  { path: '', component: MatsHomeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes), MaterialModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
