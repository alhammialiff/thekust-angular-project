import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuComponent } from './menu.component';

import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { Dish } from '../shared/dish';
import { DishService } from '../services/dish.service';
import { DISHES } from '../shared/dishes';
import { baseURL } from '../shared/baseurl';
import { Observable, of } from 'rxjs';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';


// This describes one set of test in Menu Component
describe('MenuComponent', () => {
  let component: MenuComponent;
  let fixture: ComponentFixture<MenuComponent>;

  // Wraps a test function in an asynchronous test zone. 
  // The test will automatically complete when all asynchronous calls within this zone are done. 
  beforeEach(async(() => {

    // DishService Mock with getDishes observable function that returns DISHES 
    let dishServiceStub = {
      getDishes: function (): Observable<Dish[]> {
        return of(DISHES);
      }
    };

    TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        FlexLayoutModule,
        RouterTestingModule.withRoutes([{ path: 'menu', component: MenuComponent }]),
        MatGridListModule,
        MatProgressSpinnerModule
      ],
      declarations: [MenuComponent],
      // dishServiceStub is created to mock our DishService instance 
      providers: [
        { provide: DishService, useValue: dishServiceStub },
        { provide: 'BaseURL', useValue: baseURL }
      ]
    })
      .compileComponents();

    // Declare dishservice to be used in test below
    const dishservice = TestBed.get(DishService);

  }));

  // What is beforeEach()? Wtv we declare in this function (like below),
  // it will be declared 'before each' test
  beforeEach(() => {
    // fixture: Create a testbed for Menu Component. Menu Component is needed as reference
    fixture = TestBed.createComponent(MenuComponent);
    // component: Gives access to the Menu Component we referenced in fixture for the test
    component = fixture.componentInstance;
    // detectChanges(): Test will only proceed forward if changes we have made in Menu Component are completed
    fixture.detectChanges();
  });

  it('should create', () => {

    // First test: The Menu Component Test Instance is expected to be true
    expect(component).toBeTruthy();
  });

  it('dishes items should be 4', () => {

    // Second test: Test the length of our dishes
    expect(component.dishes.length).toBe(4);
    expect(component.dishes[1].name).toBe('Zucchipakoda');
    expect(component.dishes[3].featured).toBeFalsy();

  });

  // This test serves to check HTML elements via DebugElement ad HTMLElement
  it('should use dishes in the template', () => {
    
    fixture.detectChanges();
    // Get access to the DOM
    let de: DebugElement;
    let el: HTMLElement;
    
    de = fixture.debugElement.query(By.css('h1'));
    el = de.nativeElement;

    // Third Test: Expect HTML H1 Element of first dish is caps UTHAPPIZZA 
    expect(el.textContent).toContain(DISHES[0].name.toUpperCase());

  });



});
