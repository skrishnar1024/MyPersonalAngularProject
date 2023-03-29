import { Component, OnInit, OnChanges, Input, Output, EventEmitter, ChangeDetectionStrategy, SimpleChanges, OnDestroy } from '@angular/core';
import { RoomList } from '../room';
@Component({
  selector: 'app-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.scss'],
 changeDetection: ChangeDetectionStrategy.OnPush
})
export class RoomsListComponent implements OnInit, OnChanges, OnDestroy {

@Input() rooms: RoomList[] = [];

@Input() title: string = '';

@Output() selectedRoom = new EventEmitter<RoomList>();

constructor(){}

ngOnChanges(changes: SimpleChanges): void {

    console.log(changes);
    if(changes['title']){
      this.title = changes['title'].currentValue.toUpperCase();
    }
  }


ngOnInit() : void{}

SelectRoom(room: RoomList){

  this.selectedRoom.emit(room);
}

ngOnDestroy(): void {
    console.log("onDestroy is called");
}

}