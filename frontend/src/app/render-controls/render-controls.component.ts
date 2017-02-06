import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { RenderserviceService } from './renderservice.service';
@Component({
    selector: 'fb-render-controls',
    templateUrl: './render-controls.component.html',
    styleUrls: ['./render-controls.component.css']
})
export class RenderControlsComponent implements OnInit {
    getParseddata;
    returnid = {};
    labelvalue;
    typevalue;
    formdetails = [];
    formlist = [];
    formlabel = {};
    formtype = {};
    t;
    arrayforLabel = [];
    arrayforType = [];
    listofforms = [];
    DirectoryList = [{ Id: 1, Name: 'ashith' }, { Id: 2, Name: 'shine' }, { Id: 3, Name: 'joe' }];
    constructor(private router: Router, private loginService: RenderserviceService) { }

    onChange(value) {
        console.log(value);
        this.returnid = { formid: value };
        console.log(this.returnid);
        var response = this.loginService.ReturnForm(this.returnid).subscribe(
            (data) => {
                console.log(data);
                this.formdetails = data;
            });
        this.formlist = [];
        for (var i = 0; i < this.formdetails.length; i++) {

            this.formlabel = { "Label": this.formdetails[i].Label };
            this.formtype = { "Type": this.formdetails[i].Type };
            this.formlist.push(this.formlabel);
            this.formlist.push(this.formtype);
        }

        console.log(this.formlist);
        localStorage.setItem("Control-details", JSON.stringify(this.formlist));//storing it in the wrong formate

        this.createControls();
    }
    ngOnInit() {



        this.loginService.Login().subscribe(
            (data) => {

                console.log(data);
                alert("Wrong passwo");
                this.listofforms = data;


            });
        // this.createControls();

    }
    createControls() { //Method used to get the values of the control elements from localstorage.
        console.log(this.listofforms);
        this.getParseddata = JSON.parse(localStorage.getItem('Control-details'));
        for (var i = 0; i < this.getParseddata.length; i++) {
            this.labelvalue = this.getParseddata[i].Label;
            this.arrayforLabel.push(this.labelvalue);
            this.typevalue = this.getParseddata[i].Type;
            this.arrayforType.push(this.typevalue);
        }

    }

}
