import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule, routingComponents } from "./app-routing.module";
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TalentsComponent } from './components/talents/talents.component';
import { TalentCardComponent } from './components/talent-card/talent-card.component';
import { HttpClientModule } from '@angular/common/http';
import { TalentService } from './service/talent.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    routingComponents,
    TalentsComponent,
    TalentCardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [TalentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
