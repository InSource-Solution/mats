import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
  declarations: [],
  imports: [
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatTabsModule,
  ],
  exports: [
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatTabsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MaterialModule { }
