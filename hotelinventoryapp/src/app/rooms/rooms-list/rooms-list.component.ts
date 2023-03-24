import { Component,OnInit, Input } from '@angular/core';
import { RoomsList} from './rooms';
@Component({
  selector: 'app-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.scss']
})
export class RoomsListComponent implements OnInit {

@Input() rooms: RoomsList[] = [];
constructor(){}
ngOnInit() : void{}
}
