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
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    NavigationModule,
    SpinnerModule,
    PhotoLibraryModule,
    MatButtonModule,
    WildcardRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
