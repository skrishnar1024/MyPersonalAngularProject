import { Component, ViewChild, ViewContainerRef, OnInit, AfterViewInit, ElementRef } from '@angular/core';
import { RoomsComponent } from './rooms/rooms.component';

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


  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    
    console.log(this.name.nativeElement.innerText = "Hotel")
  }

// @ViewChild('user',{read: ViewContainerRef}) vcr!: ViewContainerRef;


// ngAfterViewInit(): void {
//   const componentRef = this.vcr.createComponent(RoomsComponent);
//   componentRef.instance.numberOfRooms = 50;

//}


}
