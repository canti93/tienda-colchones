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

/* imports material design */
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatListModule} from '@angular/material/list';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptorService} from './service/token-interceptor.service';
import { AuthService } from './service/auth.service';
import { AuthGuard } from './guard/auth.guard';
import { ColchonService } from './service/colchon.service';
import { SomierService } from './service/somier.service';

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
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatExpansionModule,
    MatListModule
  ],
  providers: [AuthService, ColchonService, SomierService, AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
