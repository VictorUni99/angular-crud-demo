import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HotelListComponent } from './hotel-list/hotel-list.component';
import { HotelEditComponent } from './hotel-edit/hotel-edit.component';
import { HOTEL_ROUTES } from './hotel.routes';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,  
    RouterModule.forChild(HOTEL_ROUTES)  // 🔹 Usa `forChild`
  ],
  declarations: [
    HotelListComponent,
    HotelEditComponent
  ]
})
export class HotelModule { }
