import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProjectCardComponent } from './project-card/project-card.component';
import { CanvasComponent } from './canvas/canvas.component';
import { CanvaCardComponent } from './canva-card/canva-card.component';
import { BmcComponent } from './bmc/bmc.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { SteperComponent } from './steper/steper.component';
import { NavbarComponent } from './navbar/navbar.component';
import {MatStepperModule} from '@angular/material/stepper';



@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    ProjectCardComponent,
    CanvasComponent,
    CanvaCardComponent,
    BmcComponent,
    SteperComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatProgressBarModule,
    MatGridListModule,
    MatStepperModule
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
