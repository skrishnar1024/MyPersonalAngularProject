import { AfterViewChecked, AfterViewInit, Component, DoCheck, OnInit, QueryList, SkipSelf, ViewChild, ViewChildren } from '@angular/core';
import { Room, RoomList } from './room';
import { HeaderComponent } from '../header/header.component';
import { RoomsService } from './services/rooms.service';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
//test-commit
export class RoomsComponent implements OnInit, DoCheck, AfterViewInit, AfterViewChecked {

  hotelName = 'Hilton Hotel';
  numberOfRooms = 10;
  hideRooms = false;

  selectedRoom!: RoomList;
  title = 'Room List';
  room: Room = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5,
  };
  roomList: RoomList[] = [];

  @ViewChild(HeaderComponent) headerComponent!: HeaderComponent;

  @ViewChildren(HeaderComponent) headerChildrenComponent!: QueryList<HeaderComponent>;

  //roomService = new RoomsService();

   constructor(@SkipSelf() private roomsService: RoomsService ) {}

  ngOnInit(): void {
    //console.log(this.headerComponent)
    this.roomList = this.roomsService.getRooms();
  }

  toggle() {
    this.hideRooms = !this.hideRooms;
    this.title = "Rooms List";
  }

  selectRoom(room: RoomList) {
    this.selectedRoom = room;
    console.log(room);
  }

  addRoom() {
    const room: RoomList = {

      roomNumber: 4,
      roomType: "Delux Room",
      amenities: "AC, TV, Kitchen, 2Bed",
      price: 2000,
      photos: "https://img2.10bestmedia.com/Images/Photos/378649/Park-Hyatt-New-York-Manhattan-Sky-Suite-Master-Bedroom-low-res_54_990x660.jpg",
      checkinTime: new Date('27-Mar-2023'),
      checkoutTime: new Date('12-Nov-2023'),
      rating: 4.5,
    };

    // this.roomList.push(room);
    this.roomList = [...this.roomList, room]
  }

  ngDoCheck(): void {

    console.log('On Change is called.')

  }

  ngAfterViewInit(): void {

this.headerComponent.title = "Rooms View";

 this.headerChildrenComponent.last.title ="Last title";

 //this.headerChildrenComponent!.get(0)!.title = "First title";

  }

  ngAfterViewChecked(): void {
   //this.headerComponent.title = "Rooms View"
  }



}
