import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { BrowsebooksComponent } from './components/browsebooks/browsebooks.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminbookComponent } from './components/adminbook/adminbook.component';
import { AdminnavComponent } from './components/adminnav/adminnav.component';
import { AdminviewbookComponent } from './components/adminviewbook/adminviewbook.component';
import { AdminviewfeedbackComponent } from './components/adminviewfeedback/adminviewfeedback.component';
import { AuthguardComponent } from './components/authguard/authguard.component';
import { ErrorComponent } from './components/error/error.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { UseraddfeedbackComponent } from './components/useraddfeedback/useraddfeedback.component';
import { UseraddrequestComponent } from './components/useraddrequest/useraddrequest.component';
import { UsernavComponent } from './components/usernav/usernav.component';
import { UserviewappliedrequestComponent } from './components/userviewappliedrequest/userviewappliedrequest.component';
import { UserviewbooksComponent } from './components/userviewbooks/userviewbooks.component';
import { UserviewfeedbackComponent } from './components/userviewfeedback/userviewfeedback.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminviewappliedrequestComponent } from './components/adminviewappliedrequest/adminviewappliedrequest.component';
import { UserhomepageComponent } from './components/userhomepage/userhomepage.component';
import { AdminhomepageComponent } from './components/adminhomepage/adminhomepage.component';
import { FooterComponent } from './components/footer/footer.component';
 
@NgModule({
  declarations: [
    AppComponent,
    AdminbookComponent,
    AdminnavComponent,
    AdminviewappliedrequestComponent,
    AdminviewbookComponent,
    AdminviewfeedbackComponent,
    // AuthguardComponent,
    BrowsebooksComponent,
    ErrorComponent,
    HomePageComponent,
    LoginComponent,
    SignupComponent,
    UseraddfeedbackComponent,
    UseraddrequestComponent,
    UsernavComponent,
    UserviewappliedrequestComponent,
    UserviewbooksComponent,
    UserviewfeedbackComponent,
    UserhomepageComponent,
    AdminhomepageComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }