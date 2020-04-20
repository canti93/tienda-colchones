import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListColchonComponent } from './colchon/list-colchon/list-colchon.component';
import { LoginComponent } from './login/login.component';
import { ListSomierComponent } from './somier/list-somier/list-somier.component';
import { CreateColchonComponent } from './colchon/create-colchon/create-colchon.component';
import { CreateSomierComponent } from './somier/create-somier/create-somier.component';
import { AuthGuard } from './guard/auth.guard';


const routes: Routes = [{
  path: '',
  component: ListColchonComponent,
  pathMatch: 'full'
},{
  path: 'login',
  component: LoginComponent
},{
  path: 'colchones',
  component: ListColchonComponent,
  canActivate: [AuthGuard]
},{
  path: 'somieres',
  component: ListSomierComponent,
  canActivate: [AuthGuard]
},{
  path: 'createColchones',
  component: CreateColchonComponent,
  canActivate: [AuthGuard]
},{
  path: 'createSomieres',
  component: CreateSomierComponent,
  canActivate: [AuthGuard]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
