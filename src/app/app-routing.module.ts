import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProjectCardComponent } from './project-card/project-card.component';
import { CanvaCardComponent } from './canva-card/canva-card.component';
import { CanvasComponent } from './canvas/canvas.component';

const routes: Routes = [
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'home',component:HomeComponent},
  {path:'card',component:ProjectCardComponent},
  {path:'canva',component:CanvaCardComponent},
  {path:'canvas',component:CanvasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
