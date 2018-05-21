import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {MatButtonModule, MatCheckboxModule, MatSidenavModule} from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { FooterComponent } from './footer/footer.component';
import { SidenavDisableCloseExample } from './sidenav/sidenav.component';

import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    FooterComponent,
    SidenavDisableCloseExample
  ],
  imports: [
    NgbModule.forRoot(),
    MatButtonModule, MatCheckboxModule, MatSidenavModule,
    BrowserModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAPaPN3YRGFnn9jLLGujur3d2QZzjvvROA'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
