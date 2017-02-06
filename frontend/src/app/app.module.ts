import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ControlConfigurationComponent } from './control-configuration/control-configuration.component';
import { RenderControlsComponent } from './render-controls/render-controls.component';
import { RouterModule, Routes } from '@angular/router';
import {Router,ActivatedRoute} from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LoginService } from './login/login.service';
import { ControlDataService} from './control-configuration/controldata.service';
import { RenderserviceService} from './render-controls/renderservice.service';


const appRoutes: Routes = [
	//{ path: '', redirectTo: '/login', pathMatch: 'full' },
	   { path: '', component: LoginComponent },
	   
    { path: 'main', component: ControlConfigurationComponent },
	{ path: 'render-controls', component: RenderControlsComponent }

];

@NgModule({
	declarations: [
		AppComponent,
		ControlConfigurationComponent,
		RenderControlsComponent,
		LoginComponent
	],
	imports: [
		RouterModule.forRoot(appRoutes),
		BrowserModule,
		FormsModule,
		HttpModule
	],
	providers: [LoginService, ControlDataService, RenderserviceService],
	bootstrap: [AppComponent]
})
export class AppModule { }
