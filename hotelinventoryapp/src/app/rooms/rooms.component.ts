import { AfterViewChecked, AfterViewInit, Component, DoCheck, OnInit, QueryList, SkipSelf, ViewChild, ViewChildren } from '@angular/core';
import { Room, RoomList } from './room';
import { HeaderComponent } from '../header/header.component';
import { RoomsService } from './services/rooms.service';
import { Observable, Subject, Subscription, catchError, map, of } from 'rxjs';
import { UpdateRoomDto } from '../../../../hotelapi-main/src/rooms/dto/update-room.dto';
import { HttpEventType } from '@angular/common/http';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
//test-commit
export class RoomsComponent implements OnInit, DoCheck, AfterViewInit, AfterViewChecked {

  hotelName = 'Hilton Hotel';
  numberOfRooms = 10;
  hideRooms = true;

  selectedRoom!: RoomList;
  title = 'Room List';
  room: Room = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5,
  };
  roomList: RoomList[]  = [];

  stream = new Observable<string>((observer) => {

    observer.next('user1');
    observer.next('user2');
    observer.next('user3');
    observer.complete();
    //observer.error('Error');
  })

  @ViewChild(HeaderComponent) headerComponent!: HeaderComponent;

  @ViewChildren(HeaderComponent) headerChildrenComponent!: QueryList<HeaderComponent>;

  //roomService = new RoomsService();

  totalBytes = 0;

  subscription! : Subscription;

  error$: Subject<string> = new Subject<string>;

  getError$ = this.error$.asObservable();

  rooms$ = this.roomsService.getRooms$.pipe(
    catchError((err)=>{
      //console.log(err);
      this.error$.next(err.message);
      return of([]);
    })
  );

  roomsCount$ = this.roomsService.getRooms$.pipe(
    map((rooms) => rooms.length)
  )

  constructor(@SkipSelf() private roomsService: RoomsService) { }

  ngOnInit(): void {


    this.roomsService.getPhotos().subscribe((event) => {
     switch (event.type){
      case HttpEventType.Sent : {
        console.log('Request had been made');
        break;
      }
      case HttpEventType.ResponseHeader:{
        console.log('Request success!');
        break;
      }
      case HttpEventType.DownloadProgress:{
        this.totalBytes+= event.loaded;
        break;
      }
      case HttpEventType.Response:{
        console.log(event.body);
        break;
      }
     }
    })


    //console.log(this.headerComponent)
    this.stream.subscribe({
      next: (value) => console.log(value),
      complete: () => console.log('complete'),
      error: (err) => console.log(err)
    });
    this.stream.subscribe((data) => console.log(data));
    //  this.roomsService.getRooms$.subscribe(rooms => {
    //   this.roomList = rooms;
    // });
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

      //roomNumber: '4',
      roomType: "Delux Room",
      amenities: "AC, TV, Kitchen, 2Bed",
      price: 2000,
      photos: "https://img2.10bestmedia.com/Images/Photos/378649/Park-Hyatt-New-York-Manhattan-Sky-Suite-Master-Bedroom-low-res_54_990x660.jpg",
      checkinTime: new Date('27-Mar-2023'),
      checkoutTime: new Date('12-Nov-2023'),
      rating: 4.5,
    };

    // this.roomList.push(room);
    // this.roomList = [...this.roomList, room]

    this.roomsService.addRoom(room).subscribe((data) => {
      this.roomList = data;
    })
  }

  editRoom() {

    const room: RoomList = {

      roomNumber: '1',
      roomType: "Edited Room",
      amenities: "AC, TV, Kitchen, 2Bed",
      price: 2000,
      photos: "https://img2.10bestmedia.com/Images/Photos/378649/Park-Hyatt-New-York-Manhattan-Sky-Suite-Master-Bedroom-low-res_54_990x660.jpg",
      checkinTime: new Date('27-Mar-2023'),
      checkoutTime: new Date('12-Nov-2023'),
      rating: 4.5,
    };

    this.roomsService.editRoom(room).subscribe((data) => {
      this.roomList = data;
    })
    console.log(this.roomList);
  }

  deleteRoom() {
    //const lastRoom =(this.roomList[this.roomList.length -1]);
    
    this.roomsService.delete('a41c41b3-7217-4109-b697-f56e80a03d4b').subscribe((data) => {
      this.roomList = data;
    });
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    if(this.subscription)
    {
      this.subscription.unsubscribe();
    }
  }


  ngDoCheck(): void {

    console.log('On Change is called.')

  }

  ngAfterViewInit(): void {

    this.headerComponent.title = "Rooms View";

    this.headerChildrenComponent.last.title = "Last title";

    //this.headerChildrenComponent!.get(0)!.title = "First title";

  }

  ngAfterViewChecked(): void {
    //this.headerComponent.title = "Rooms View"
  }



}
