import { Component, OnInit, OnDestroy } from '@angular/core';
import { ApiHttpService } from '../api-http.service';
import { ActivatedRoute, Router, Params } from "@angular/router";
import { Subscription } from 'rxjs/Subscription';
import { Location } from '@angular/common';


@Component({
  selector: 'app-all-countries',
  templateUrl: './all-countries.component.html',
  styleUrls: ['./all-countries.component.css'],

})
export class AllCountriesComponent implements OnInit {

  public title: string
  public region: string
  public currencyFilter: boolean = false
  public languageFilter: boolean = false
  public getCurrency: Subscription
  public regions;
  public currency;
  public langauge;

  constructor(private _route: ActivatedRoute, private router: Router, public apiHttpService: ApiHttpService, private location: Location) { }

  ngOnInit() {
    console.log("Home Component onInit is called");

    let region = this._route.snapshot.paramMap.get("region");
    console.log(region);

    //handling observables response.


    this.getCurrency = this._route.queryParams
      .subscribe(
        params => {
          if (params["currency"]) {
            this.currencyFilter = true
            this.filterCurrency(params["currency"])
            this.title = params["name"]
          } else if (params["language"]) {
            this.languageFilter = true
            this.filterLanguage(params["language"])
          
            this.title = params["name"]
          } else {
            this.currencyFilter = false
            this.region = this._route.snapshot.paramMap.get("region")
            this.title = this.region
            console.log(this.region)
            if (this.region) {

              this.apiHttpService.allregions(region).subscribe(

                data => {
                  console.log("logging data");
                  console.log(data);
                  this.regions = data;

                },
                error => {
                  console.log("some error occured");
                  console.log(error.errorMessage);
                }
              )
            }
          }
        });

  }
  public search=''

//filterCurrency method handling observable response.
  filterCurrency(currency) {
    this.apiHttpService.currency(currency)
      .subscribe(
        data => {
          this.regions = data
        }
      )
  }

  //filterLanguage method of handling observable response.
  filterLanguage(language) {
    this.apiHttpService.language(language)
      .subscribe(
        data => {
          this.regions = data
        }
      )
  }



  ngOnDestroy(): void {
    // getCurrency unsubscribe.
    this.getCurrency.unsubscribe()
  }
  public goBackToPreviousPage(): any {
    this.location.back();
  }

}













