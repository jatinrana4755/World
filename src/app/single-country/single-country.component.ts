import { Component, OnInit } from '@angular/core';
import { ApiHttpService } from '../api-http.service';
import { ActivatedRoute, Router } from "@angular/router";
import { Location } from '@angular/common';

@Component({
  selector: 'app-single-country',
  templateUrl: './single-country.component.html',
  styleUrls: ['./single-country.component.css']
})
export class SingleCountryComponent implements OnInit {

  public singleCountry;

  constructor(private _route: ActivatedRoute, private router: Router, public apiHttpService: ApiHttpService, private location: Location) { }

  ngOnInit() {
    let country = this._route.snapshot.paramMap.get("country");

    console.log(country);


    //handling observables response.

    this.apiHttpService.getCountry(country).subscribe(

      data => {
        console.log("logging data");
        console.log(data);
        this.singleCountry = data;

      },
      error => {
        console.log("some error occured");
        console.log(error.errorMessage);
      }


    )


  }
  public goBackToPreviousPage(): any {
    this.location.back();
  }

}  