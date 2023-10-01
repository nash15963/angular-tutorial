import { Component } from '@angular/core';
import { TNavigation } from '../app-routing.module';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {
  navigations : TNavigation[] = [
    {path : "", name : "Home"},
    {path : "/hero", name : "Heroes"},
    {path : "/poke", name : "Poke"}
  ]

  samePageClick():void{
    console.log("Same Page Clicked");
    alert("Same Page Clicked");
  }

}
