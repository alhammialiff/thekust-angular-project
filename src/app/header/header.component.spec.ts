import { async, ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { routes } from '../app-routing/routes';
import { Location } from '@angular/common';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSliderModule } from '@angular/material/slider';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';


import { AboutComponent } from '../about/about.component';
import { ContactComponent } from '../contact/contact.component';
import { MenuComponent } from '../menu/menu.component';
import { HomeComponent } from '../home/home.component';


import { HeaderComponent } from './header.component';
import { DishdetailComponent } from '../dishdetail/dishdetail.component';
import { Dish } from '../shared/dish';
import { MatDialogModule, MatSelectModule, MatSlideToggleModule } from '@angular/material';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  // Route testing configs
  let location: Location;
  let router: Router;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[
        RouterTestingModule.withRoutes(routes),
        MatToolbarModule,
        MatCardModule,
        MatProgressSpinnerModule,
        MatGridListModule,
        MatListModule,
        MatFormFieldModule,
        FormsModule,
        ReactiveFormsModule,
        MatSliderModule,
        MatSlideToggleModule,
        MatInputModule,
        MatCheckboxModule,
        MatSelectModule,
        MatDialogModule
      ],
      declarations: [ 
        HeaderComponent,
        HomeComponent,
        MenuComponent,
        DishdetailComponent,
        ContactComponent, 
        AboutComponent
       ]
    })
    .compileComponents();

  }));

  beforeEach(() => {
    // router = TestBed.get(Router);
    router = TestBed.get(Router);
    location = TestBed.get(Location);

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    router.initialNavigation();
    fixture.detectChanges();

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('navigate to "" redirects you to /home', fakeAsync(() => {
    router.navigate(['']);
    tick();
    expect(location.path()).toBe('/home');
  }));

});
