import { Component } from '@angular/core';
import { TNavigation } from '../app-routing.module';
import { Location } from '@angular/common';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})


export class HeaderComponent {
  constructor(private location: Location) { }
  navigations:TNavigation[] = [
    {path : "", name : "Home"},
    {path : "/hero", name : "Heroes"},
    {path : "/poke", name : "Poke"}
  ]

  navigateBack():void{
    this.location.back();
  }

}
