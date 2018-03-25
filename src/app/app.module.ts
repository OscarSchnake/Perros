import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { PerroLocalComponent } from './perrolocal/perrolocal.component';
import { PerroComponent } from './perro/perro.component';
import { routing, appRoutingProviders } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    PerroLocalComponent,
    PerroComponent
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
              PerroComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
