import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LendingComponent } from './components/lending/lending.component';
import { GoalComponent } from './components/goal/goal.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { AboutComponent } from './components/about/about.component';
import { DonationsBoxComponent } from './components/donations-box/donations-box.component';
import { DonationsItemComponent } from './components/donations-item/donations-item.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LendingComponent,
    GoalComponent,
    NavBarComponent,
    AboutComponent,
    DonationsBoxComponent,
    DonationsItemComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
