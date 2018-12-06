import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FnappsService } from '../../services/fnapps.service';
import { FnfunctionsService } from '../../services/fnfunctions.service';
import { FntriggersService } from '../../services/fntriggers.service';

@Component({
  selector: 'app-appdetails',
  templateUrl: './appdetails.component.html',
  styleUrls: ['./appdetails.component.css']
})
export class AppdetailsComponent implements OnInit {
  functionsData: any[];
  triggersData: any[];
  appName: string = "";
  functionFound: boolean = false;
  triggerFound: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fnAppService: FnappsService,
    private fnFunctionsService: FnfunctionsService,
    private fnTriggersService: FntriggersService) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    this.fnAppService.getAppDetails(id).subscribe(
        (res: any) => {
          if (res.name) {
            this.appName = res.name;
            localStorage.setItem('appName', res.name);
            localStorage.setItem('appId', id);
          }
        },
        error => {
          console.log("No name found on this server for this appId " + id);
        }
    );
    this.fnFunctionsService.loadFunctionsList(id).subscribe(
        (res: any) => {
          if (res.items) {
            this.functionsData = res.items;
            this.functionFound = true;
            localStorage.removeItem('fnId');
            localStorage.removeItem('fnName');
          }
        },
        error => {
          console.log("No function found on this server for this appId " + id);
        }
    );
    this.fnTriggersService.loadTriggersList(id).subscribe(
        (res: any) => {
          if (res.items) {
            this.triggersData = res.items;
            this.triggerFound = true;
            localStorage.removeItem('triggerId');
            localStorage.removeItem('triggerName');
          }
        },
        error => {
          console.log("No trigger found on this server for this appId " + id);
        }
    );
  }

}
