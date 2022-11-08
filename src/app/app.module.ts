import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';

import 'hammerjs';

// Decorator @NgModule: Modifies the use of JS classes
// This decorator module is essentially AppModule
// Within NgModule contains meta-data for defining AppModule
@NgModule({
  declarations: [
    AppComponent // Declaration props declares the view classes that belong to this module
  ],
  imports: [
    BrowserModule, // This NgModule depends on BrowserModule
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatToolbarModule
  ],
  providers: [], // Providers specifies the services this module needs
  bootstrap: [AppComponent] // To boostrap this Angular app, we need to bootstrap AppComponent
})
export class AppModule { }

// 'declarations' key: They can be components, pipes or directives