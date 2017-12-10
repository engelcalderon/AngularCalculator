import { Component } from '@angular/core';
import { NgModule } from '@angular/core/src/metadata/ng_module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  
  menuItems = [
    {menu:"Home", url: "/"},
    {menu:"Calculator", url: "calculator"},
  ];

}
