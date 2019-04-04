import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { GetDataService } from './Services/get-data.service';
import { PostDataService}  from './Services/post-data.service';
import { PrivateRoutingModule } from './private/private-routing.module';
import { PrivateModule } from './private/private.module';
import { AuthGuard } from './auth.guard';
import { AuthService } from './Services/auth.service';
import { ConfirmPasswordDirective } from './register/check.directive';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ConfirmPasswordDirective
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    PrivateRoutingModule,
    PrivateModule,
    
  ],
  providers: [GetDataService,PostDataService, AuthGuard,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
