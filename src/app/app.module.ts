import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { PerroLocalComponent } from './perrolocal/perrolocal.component';
import { PersonComponent } from './person/person.component';
import {routing, appRoutingProviders} from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    PerroLocalComponent,
    PersonComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [appRoutingProviders,
              AppComponent,
              PerroLocalComponent,
              PersonComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
