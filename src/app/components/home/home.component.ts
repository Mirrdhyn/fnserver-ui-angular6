import { Component, OnInit } from '@angular/core';
import { FnappsService } from '../../services/fnapps.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  appsData: any[];
  appFound: boolean = false;
  constructor(private fnAppService: FnappsService) { }

  ngOnInit() {
    this.fnAppService.loadAppsList().subscribe(
        (res: any) => {
          if (res.items) {
            this.appsData = res.items;
            this.appFound = true;
            localStorage.clear();
          }
        },
        error => {
          console.log("No App found on this server");
        }
    );
  }

}
