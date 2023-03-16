import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from "@angular/material/button";
import {TopBarComponent} from "./components/top-bar/top-bar.component";
import {RouterLinkActive, RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    TopBarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
    RouterLinkActive
  ],
  exports: [
    TopBarComponent
  ]
})
export class NavigationModule { }
