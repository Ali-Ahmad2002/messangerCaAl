import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire/compat';

// AUTH
import { AuthService } from './shared/services/auth.service';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
// AUT END

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from '../environments/environment';

// MATERIAL
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
// MATERIAL END

// SIGN IN
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SignInComponent } from './components/signing/sign-in/sign-in.component';
import { SignUpComponent } from './components/signing/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './components/signing/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './components/signing/verify-email/verify-email.component';
import { FormsModule } from '@angular/forms';
// SIGN IN END



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SignInComponent,
    SignUpComponent,
    ForgotPasswordComponent,
    VerifyEmailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireStorageModule,
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    MatInputModule,
    MatSidenavModule,
    MatDialogModule,
    FormsModule,
    MatIconModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
