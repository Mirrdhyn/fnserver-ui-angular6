import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FncallsService } from '../../services/fncalls.service';
import { Log } from '../../class/log';

@Component({
  selector: 'app-fnlogs',
  templateUrl: './fnlogs.component.html',
  styleUrls: ['./fnlogs.component.css']
})
export class FnlogsComponent implements OnInit {
  appName: string = "";
  appId: string = "";
  fnName: string = "";
  fnId: string = "";
  callId: string = "";
  functionLogsData: any[] = [];
  functionLogsFound: boolean = false;
  functionLogDetailsData: Log;
  functionLogDetailFound: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private fncallsService: FncallsService
  ) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    this.appName = localStorage.getItem('appName');
    this.appId = localStorage.getItem('appId');
    this.fnName = localStorage.getItem('fnName');
    this.fnId = localStorage.getItem('fnId');
    this.fncallsService.loadCallsList(id).subscribe(
        (res: any) => {
          if (res.items) {
            this.functionLogsData = res.items;
            this.functionLogsFound = true;
            //console.log(res.items);
          }
        },
        error => {
          console.log("No function logs found on this server for this fnId " + id);
        }
    );
  }

  showLog(getLogCallId) {
    this.fncallsService.getLogDetail(this.fnId,getLogCallId).subscribe(
        (res: any) => {
          if (res) {
            this.functionLogDetailsData = res;
            this.functionLogDetailFound = true;
            //console.log(res);
          }
        },
        error => {
          console.log("No log details found on this server for this callId " + getLogCallId);
        }
    );
  }

}
