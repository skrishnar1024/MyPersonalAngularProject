import { Component, OnInit } from '@angular/core';
import { Room, RoomList } from './room';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})

export class RoomsComponent implements OnInit {

  hotelName = 'Hilton Hotel';
  numberOfRooms = 10;
  hideRooms = false;

  toggle() {
    this.hideRooms = !this.hideRooms;
  }


  room: Room = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5,
  };
  roomList: RoomList[] = [];
  constructor() { }

  ngOnInit(): void {
    this.roomList = [{
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
    }]
  }

}
