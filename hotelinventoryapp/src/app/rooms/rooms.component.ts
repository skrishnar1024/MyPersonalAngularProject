import { Component, OnInit } from '@angular/core';
import { Room } from './room';
@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit {

hotelName = 'Hilton Hotel';
numberOfRooms = 10;

rooms : Room={
  totalRooms: 20,
  availableRooms: 10,
  bookedRooms: 5,
};

hideRooms = false;

constructor(){}

ngOnInit(): void{}

toggle()
{
  this.hideRooms = !this.hideRooms;
}

}
