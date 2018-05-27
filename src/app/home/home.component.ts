import { Component, OnInit } from '@angular/core';
import { ApiHttpService } from '../api-http.service';
import { ActivatedRoute, Router } from "@angular/router";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public getRegion: any = ["Asia", "Africa", "Americas", "europe", "oceania"]
  public regions;

  constructor(private _route: ActivatedRoute, private router: Router, public apiHttpService: ApiHttpService) { }

  ngOnInit() {









  }

}
