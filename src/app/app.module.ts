import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {PhotoLibraryModule} from "./features/photo-library/photo-library.module";
import {WildcardRoutingModule} from "./wildcard-routing.module";
import {MatButtonModule} from '@angular/material/button';
import {NavigationModule} from "./features/navigation/navigation.module";
import {SpinnerModule} from "./features/spinner/spinner.module";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NoopAnimationsModule,
    NavigationModule,
    SpinnerModule,
    PhotoLibraryModule,
    MatButtonModule,
    WildcardRoutingModule
  ],
  providers: [],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
