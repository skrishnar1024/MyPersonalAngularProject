import { Component } from '@angular/core';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit{

hotelName = 'Hilton Hotel';

constructor(){}

ngOnInit(): void{
}


}
