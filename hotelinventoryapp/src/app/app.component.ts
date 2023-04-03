import { Component, ViewChild, ViewContainerRef, OnInit, AfterViewInit, ElementRef, Optional, Inject } from '@angular/core';
import { RoomsComponent } from './rooms/rooms.component';
import { LoggerService } from './logger.service';
import { LocalStorageToken } from './localstorage.token';
@Component({
  selector: 'app-root',
 templateUrl: './app.component.html',
//  template: `<h1>Hello world from inline Template</h1>
//  <p>Angular is fine</p>`
//  ,
  styleUrls: ['./app.component.scss']
  //styles: [`h1 {color: red;}`]
})
export class AppComponent implements OnInit{

  title = 'hotelinventoryapp';
  role = "Admn";

  @ViewChild('name',{static: true}) name!:ElementRef;

  constructor(@Optional() private loggerService: LoggerService,
  @Inject(LocalStorageToken) private localStorage: Storage){



  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

    this.loggerService?.Log("AppComponent.ngOnInit()");
    console.log(this.name.nativeElement.innerText = "Hilton Hotel");
    this.localStorage.setItem('name', 'Hilton Hotel');

  }

// @ViewChild('user',{read: ViewContainerRef}) vcr!: ViewContainerRef;
// ngAfterViewInit(): void {
//   const componentRef = this.vcr.createComponent(RoomsComponent);
//   componentRef.instance.numberOfRooms = 50;
//}
}


