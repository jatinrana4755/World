import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AllCountriesComponent } from './all-countries/all-countries.component';
import { RouterModule, Routes } from '@angular/router';
import { ApiHttpService } from './api-http.service';
import { HttpClientModule } from '@angular/common/http';
import { SingleCountryComponent } from './single-country/single-country.component';
import { FilterPipe } from './filter.pipe';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AllCountriesComponent,
    SingleCountryComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,





    RouterModule.forRoot([

      { path: 'home', component: HomeComponent },
      { path: 'all-countries/:region', component: AllCountriesComponent },
      { "path": "allCountries/:code", component: AllCountriesComponent },

      { path: 'single-country/:country', component: SingleCountryComponent },


      { path: '', redirectTo: 'home', pathMatch: 'full' },


    ])
  ],

  providers: [ApiHttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
