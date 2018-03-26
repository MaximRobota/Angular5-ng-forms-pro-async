import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { EmailValidationDirective } from './email-validation.directive';
import { AsyncValidatorDirective } from './async-validator.directive';

@NgModule({
  declarations: [
    AppComponent,
    AsyncValidatorDirective,
    EmailValidationDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
