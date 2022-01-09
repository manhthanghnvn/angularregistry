import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import {FormsModule} from "@angular/forms";
import { WeatherComponent } from './weather/weather.component';
import {HttpClientModule} from "@angular/common/http";
import { HomeComponent } from './home/home.component';
HttpClientModule
@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    WeatherComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
