import { Component, OnInit, } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Router, ActivatedRoute } from '@angular/router';
import { ControlDataService } from './controldata.service'
@Component({
    selector: 'fb-control-configuration',
    templateUrl: './control-configuration.component.html',
    styleUrls: ['./control-configuration.component.css']
})
export class ControlConfigurationComponent implements OnInit {
    controltypeactive1: string = "--Select--";
    controltypeactive2: string = "--Select--";
    controltypeactive3: string = "--Select--";
    currentTypevalue;
    currentSelectboxid

    controltype: string[] = ["--Select--", "Textbox", "Number", "Dropdown", "Checkbox", "Textarea"]
    pushingArray = [];
    configObject = {};
    labellist = [];
    typelist = [];
    listtArray = [];
    temporaryvariableTopush;
    currentTextvalue;
    formfields = {};
    formfieldsarray = [];
    formjson = {};


    constructor(private router: Router, private control: ControlDataService) {
    }

    ngOnInit() {
    }
    getcontrollabelValue(currentTextvalue) { //Method used to get the value of labelname field  and push into localstorage.
        if (this.currentTextvalue !== "") {
            this.currentTextvalue = currentTextvalue;

            this.temporaryvariableTopush = { 'Label': this.currentTextvalue };
            this.pushingArray.push(this.temporaryvariableTopush);
            localStorage.setItem("Control-details", JSON.stringify(this.pushingArray));
        }
    }
    getcontroltypeValue(currentTypevalue, currentSelectboxid) { //Method used to get the value of controltype field  and push into localstorage.
        if (this.currentTypevalue !== "--Select--") {
            this.currentTypevalue = currentTypevalue;
            this.temporaryvariableTopush = { 'Type': this.currentTypevalue };
            this.pushingArray = JSON.parse(localStorage.getItem('Control-details'));
            this.pushingArray.push(this.temporaryvariableTopush);
            localStorage.setItem("Control-details", JSON.stringify(this.pushingArray));
        }
    }
    getcontrolSpecification(formname: string): void { //Taking the date from localstorage
        this.listtArray = JSON.parse(localStorage.getItem('Control-details'));
        console.log(formname);
        console.log(this.listtArray);

        //converting to JSON
        for (var i = 0; i < this.listtArray.length; i++) {
            if (i % 2 == 0) {
                this.labellist.push(this.listtArray[i].Label);
                console.log(this.listtArray[i].Label);
            }
            else {
                this.typelist.push(this.listtArray[i].Type);
                console.log(this.listtArray[i].Type);
            }
            // this.listtArray[i]; 
        }
        console.log(this.labellist);
        console.log(this.typelist);
        for (var i = 0; i < (this.listtArray.length) / 2; i++) {
            this.formfields = { "label": this.labellist[i], "type": this.typelist[i] }
            this.formfieldsarray.push(this.formfields);
        }
        console.log(this.formfieldsarray);
        this.formjson = {
            "formname": formname,
            "formdetails": this.formfieldsarray
        };
        //console.log(this.formjson);
        localStorage.setItem("data", JSON.stringify(this.formjson));
        //this.router.navigate(['/render-controls']);
        var response = this.control.Register(this.formjson).subscribe(
            (data) => {
                if (data.Valid == true) {
                    this.router.navigate(['/render-controls']);
                    alert(data.Message)
                }
                if (data.Valid == false) {
                    alert(data.Message);
                }
                this.router.navigate(['/render-controls']);
            });
        //   this.router.navigate(['/render-controls']);
    }

}
