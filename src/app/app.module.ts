import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { AppComponent } from './app.component';

import 'hammerjs';
import { MenuComponent } from './menu/menu.component';
import { DishdetailComponent } from './dishdetail/dishdetail.component';
import { DishService } from './services/dish.service';

// Decorator @NgModule: Modifies the use of JS classes
// This decorator module is essentially AppModule
// Within NgModule contains meta-data for defining AppModule
@NgModule({

  // Declaration props declares the view classes (or Components) that belong to this module
  declarations: [
    AppComponent,
    MenuComponent,
    DishdetailComponent 
  ],

  // This are the imports needed for this module (AppModule)
  imports: [
    BrowserModule, 
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule
  ],

  providers: [
    DishService
  ], // Providers specifies the services this module needs

  bootstrap: [AppComponent] // To boostrap this Angular app, we need to bootstrap AppComponent
})

export class AppModule { }

// 'declarations' key: They can be components, pipes or directives