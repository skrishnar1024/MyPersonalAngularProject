import { Injectable, Inject } from '@angular/core';
import { RoomList } from '../room';
import { APP_SERVICE_CONFIG } from '../../AppConfig/appconfig.service';
import { AppConfig } from '../../AppConfig/appconfig.interface';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {

  constructor( @Inject(APP_SERVICE_CONFIG) private config: AppConfig) {

    console.log(this.config.apiEndpoint);
    console.log('Rooms Service Initialized..');
   }

  getRooms() {
    return this.roomList;
  }
  
  roomList: RoomList[] = [{
    roomNumber: 1,
    roomType: 'Deluxe Room',
    amenities: 'AC, TV, WI-FI',
    price: 500,
    photos: 'https://img2.10bestmedia.com/Images/Photos/378649/Park-Hyatt-New-York-Manhattan-Sky-Suite-Master-Bedroom-low-res_54_990x660.jpg',
    checkinTime: new Date('27-March-2023'),
    checkoutTime: new Date('28-March-2023'),
    rating: 4.5
  },
  {
    roomNumber: 2,
    roomType: 'Deluxe Room A',
    amenities: 'AC, TV, WI-FI, Kitchen',
    price: 1000,
    photos: 'https://img2.10bestmedia.com/Images/Photos/378649/Park-Hyatt-New-York-Manhattan-Sky-Suite-Master-Bedroom-low-res_54_990x660.jpg',
    checkinTime: new Date('27-March-2023'),
    checkoutTime: new Date('28-March-2023'),
    rating: 4.2,

  },
  {
    roomNumber: 3,
    roomType: 'Deluxe Room Suit',
    amenities: 'AC, TV, WI-FI, Kitchen, Bath',
    price: 1500,
    photos: 'https://img2.10bestmedia.com/Images/Photos/378649/Park-Hyatt-New-York-Manhattan-Sky-Suite-Master-Bedroom-low-res_54_990x660.jpg',
    checkinTime: new Date('27-March-2023'),
    checkoutTime: new Date('28-March-2023'),
    rating: 5
  }];
}
