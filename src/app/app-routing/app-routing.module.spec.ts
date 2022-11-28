import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { AppRoutingModule } from './app-routing.module';
import { Location } from '@angular/common';
import { RouterTestingModule } from '@angular/router/testing';
import { Router, RouterLinkWithHref } from '@angular/router';
import { routes } from './routes';
import { baseURL } from '../shared/baseurl';
import { By } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';


import { DishService } from '../services/dish.service';
import { PromotionService } from '../services/promotion.service';
import { LeaderService } from '../services/leader.service';

import { HomeComponent } from '../home/home.component';
import { MenuComponent } from '../menu/menu.component';
import { DishdetailComponent } from '../dishdetail/dishdetail.component';
import { ContactComponent } from '../contact/contact.component';
import { AboutComponent } from '../about/about.component';

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
import { MatDialogModule, MatSelectModule, MatSlideToggleModule } from '@angular/material';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { routerNgProbeToken } from '@angular/router/src/router_module';


describe('AppRoutingModule', () => {
  let appRoutingModule: AppRoutingModule;

  beforeEach(() => {
    appRoutingModule = new AppRoutingModule();
  });

  it('should create an instance', () => {
    expect(appRoutingModule).toBeTruthy();
  });
});

describe('HomeComponent', ()=>{

  let homeComponent: HomeComponent;
  let homeFixture: ComponentFixture<HomeComponent>;

  let menuComponent: MenuComponent;
  let menuFixture: ComponentFixture<MenuComponent>;

  let objRouter: Router;
  let location: Location;

  beforeEach(async()=> {
    TestBed.configureTestingModule({
      declarations: [
        HomeComponent,
        MenuComponent,
        DishdetailComponent,
        ContactComponent,
        AboutComponent
      ],
      providers: [
        DishService,
        PromotionService,
        LeaderService,
        { provide: 'BaseURL', useValue: baseURL }
      ],
      imports: [
        AppRoutingModule,
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
        MatDialogModule,
        HttpClientModule,
        BrowserAnimationsModule
      ]
    })
  })

  beforeEach(()=>{
    objRouter = TestBed.get(Router);
    location = TestBed.get(Location);

    homeFixture = TestBed.createComponent(HomeComponent);
    homeComponent = homeFixture.componentInstance;
    homeFixture.detectChanges();

    menuFixture = TestBed.createComponent(MenuComponent);
    menuComponent = menuFixture.componentInstance;
    objRouter.initialNavigation();

  });

  it('Default path should redirection should be Home Component', async(()=>{
    homeFixture.detectChanges();
    homeFixture.whenStable().then(()=>{
      expect(location.path()).toEqual('/home')
    })
  }));

  it('Navigate to Home redirects you to /home', async(()=>{
    
    objRouter.navigate(["/home"]).then(()=>{
      expect(location.path()).toEqual('/home')
    })

  }));

  it('Navigate to Menu redirects you to /menu', async(()=>{
    
    objRouter.navigate(["/menu"]).then(()=>{
      expect(location.path()).toEqual('/menu')
    })

  }));

  it('Navigate to About redirects you to /aboutus', async(()=>{
    
    objRouter.navigate(["/aboutus"]).then(()=>{
      expect(location.path()).toEqual('/aboutus')
    })

  }));

  it('Navigate to Contact redirects you to /contact', async(()=>{
    
    objRouter.navigate(["/contactus"]).then(()=>{
      expect(location.path()).toEqual('/contactus')
    })

  }));

  it('Navigate to Dish Detail with Dish ID 0 redirects you to /dishdetail/0', async(()=>{
    
    objRouter.navigate(["/dishdetail/0"]).then(()=>{
      expect(location.path()).toEqual('/dishdetail/0')
    })

  }));

  it('Navigate to Dish Detail with Dish ID 1 redirects you to /dishdetail/1', async(()=>{
    
    objRouter.navigate(["/dishdetail/1"]).then(()=>{
      expect(location.path()).toEqual('/dishdetail/1')
    })

  }));
  
  it('Navigate to Dish Detail with Dish ID 2 redirects you to /dishdetail/2', async(()=>{
    
    objRouter.navigate(["/dishdetail/2"]).then(()=>{
      expect(location.path()).toEqual('/dishdetail/2')
    })

  }));

  it('Navigate to Dish Detail with Dish ID 3 redirects you to /dishdetail/3', async(()=>{
    
    objRouter.navigate(["/dishdetail/3"]).then(()=>{
      expect(location.path()).toEqual('/dishdetail/3')
    })

  }));

  it('Navigate to Dish Detail with Dish ID 4 redirects you to /dishdetail/4', async(()=>{
    
    objRouter.navigate(["/dishdetail/4"]).then(()=>{
      expect(location.path()).toEqual('/dishdetail/4')
    })

  }));

  it('Navigate to Dish Detail with Dish ID 5 redirects you to /dishdetail/5', async(()=>{
    
    objRouter.navigate(["/dishdetail/5"]).then(()=>{
      expect(location.path()).toEqual('/dishdetail/5')
    })

  }));



})
