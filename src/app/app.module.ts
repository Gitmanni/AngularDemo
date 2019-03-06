import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import{HttpClientModule} from "@angular/common/http" 
 



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FatherComponent } from './father/father.component';
import { SonComponent } from './son/son.component';
import { DaughterComponent } from './daughter/daughter.component';
import { FordirectiveComponent } from './fordirective/fordirective.component';
import { TempletFormComponent } from './Forms/templet-form/templet-form.component';
import { ReactiveFormsComponent } from './Forms/reactive-forms/reactive-forms.component';
import { TaskManagerComponent } from './task/task-manager/task-manager.component';
import { FormTypeComponent } from './form-type/form-type.component';
import { LocalServiceComponent } from './consume/local-service/local-service.component';
import { ConsumeServiceComponent } from './consume/consume-service/consume-service.component';
import { RemoteServiceComponent } from './consume/remote-service/remote-service.component';
import { ViewuserDetailComponent } from './consume/viewuser-detail/viewuser-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    FatherComponent,
    SonComponent,
    DaughterComponent,
    FordirectiveComponent,   
    TempletFormComponent,
    ReactiveFormsComponent,
    TaskManagerComponent,
    FormTypeComponent,
    LocalServiceComponent,
    ConsumeServiceComponent,
    RemoteServiceComponent,
    ViewuserDetailComponent,        
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule, 
    HttpClientModule,    
    RouterModule.forRoot([
    {
    path:'',
    component:FatherComponent,
    pathMatch:'full'
    },
    {
    path:'father',
    component:FatherComponent,
    children: [
      { path: '', redirectTo: 'son', pathMatch: 'full' },
      { path: 'son', component: SonComponent },
      { path: 'daughter', component: DaughterComponent },
    ]
    },
    {
    path:'fordirective',
    component:FordirectiveComponent
    },
    {
    path:'templet-form',
    component:TempletFormComponent
    },
    {
    path:'reactive-form',
    component:ReactiveFormsComponent
    },
    {
      path:'TaskManager',
      component:TaskManagerComponent
      },
      {
        path:'local',
        component:LocalServiceComponent
        },
        {
          path:'remoteservice',
          component:RemoteServiceComponent
          },
          {
            path:'viewuser/:myid',
            component:ViewuserDetailComponent 
 

            },
         
        
      
    ]),
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
