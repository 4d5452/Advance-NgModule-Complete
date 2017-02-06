/** Modules: imports */
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
/** App Root */
import { AppComponent }  from './app.component';
/** Routing Module */
import { AppRoutingModule } from './app-routing.module';
/** Feature Modules */
import { ContactModule } from './contact/contact.module';
import { CoreModule } from './core/core.module';


@NgModule({
  imports: [ 
    BrowserModule,
    ContactModule,
    /* CoreModule */
    CoreModule.forRoot({userName: 'Jack Mac'}),
    AppRoutingModule,
  ],
  exports: [],
  declarations: [ AppComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
