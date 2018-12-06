import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FnappsService } from '../../services/fnapps.service';
import { FnfunctionsService } from '../../services/fnfunctions.service';
import { Function } from '../../class/function';

@Component({
  selector: 'app-functiondetails',
  templateUrl: './functiondetails.component.html',
  styleUrls: ['./functiondetails.component.css']
})
export class FunctiondetailsComponent implements OnInit {
  functionForm: FormGroup;
  functionDetailsData: Function;
  appName: string = "";
  appId: string = "";
  fnId: string = "";
  functionDetailsFound: boolean = false;
  displayError: boolean = false;
  displayUpdate: boolean = false;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private fnFunctionsService: FnfunctionsService) {
      this.functionForm = this.fb.group({
          id: ['', Validators.required],
          name: ['', Validators.required],
          image: ['', Validators.required],
          memory: ['', Validators.required],
          timeout: ['', Validators.required],
          idle_timeout: ['', Validators.required]
      });
    }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    this.appName = localStorage.getItem('appName');
    this.appId = localStorage.getItem('appId');
    this.fnId = id;

    this.fnFunctionsService.getFunctionDetails(id).subscribe(
        (res: any) => {
          if (res.id) {
            this.functionDetailsData = res;
            this.functionDetailsFound = true;
            localStorage.setItem('fnId', id);
            localStorage.setItem('fnName', res.name);
          }
        },
        error => {
          console.log("No function details found on this server for this appId " + id);
        }
    );
  }

  updateFunction() {
    let val = new Function(this.functionForm.value);

    this.fnFunctionsService.updateFunctionDetails(this.fnId, val).subscribe(
      (res: any) => {
        if (res.id) {
          this.functionDetailsData = res;
          this.functionDetailsFound = true;
          this.displayUpdate = true;
        }
      },
      error => {
        console.log("Error when updating function...");
        this.displayError = true;
      }
    );
    setTimeout (() => {
         this.displayUpdate = false;
         this.displayError = false;
      }, 3000);
  }

}
