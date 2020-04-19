import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { ListColchonComponent } from './colchon/list-colchon/list-colchon.component';
import { CreateColchonComponent } from './colchon/create-colchon/create-colchon.component';
import { ListSomierComponent } from './somier/list-somier/list-somier.component';
import { CreateSomierComponent } from './somier/create-somier/create-somier.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    ListColchonComponent,
    CreateColchonComponent,
    ListSomierComponent,
    CreateSomierComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
