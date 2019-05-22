import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactComponent } from './pages/contact/contact.component';
import { MyCvComponent } from './pages/my-cv/my-cv.component';
import { RouterModule, Routes } from  '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    MyCvComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path: 'contact', component: ContactComponent},
      {path: 'my-cv', component: MyCvComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
