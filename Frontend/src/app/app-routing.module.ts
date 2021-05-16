import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouteGuardService } from './../route-guard.service';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { MainNavComponent } from './components/main-nav/main-nav.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { 
    path: 'login', 
    component: LoginComponent,
    // canActivate: [RouteGuardService],
    // data: { type: 1 }
  },
  {
    path: 'main',
    component: MainNavComponent,
    canActivate: [RouteGuardService]
  }
]

@NgModule({ 
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
