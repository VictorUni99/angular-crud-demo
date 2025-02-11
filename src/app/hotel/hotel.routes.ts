import { Routes } from '@angular/router';
import { HotelListComponent } from './hotel-list/hotel-list.component';
import { HotelEditComponent } from './hotel-edit/hotel-edit.component';

export const HOTEL_ROUTES: Routes = [
  {
    path: '',
    component: HotelListComponent  // 🔹 Esto carga la lista de hoteles cuando entras a /hotels
  },
  {
    path: ':id',
    component: HotelEditComponent  // 🔹 Permite editar un hotel según su ID
  }
];
