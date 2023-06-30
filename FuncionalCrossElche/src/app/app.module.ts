import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing , appRoutingProviders } from './app.routing';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { FormsModule } from '@angular/forms';
import { InstalacionesComponent } from './component/instalaciones/instalaciones.component';
import { EntrenadorpersonalComponent } from './component/entrenadorpersonal/entrenadorpersonal.component';
import { ContactoComponent } from './component/contacto/contacto.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InstalacionesComponent,
    EntrenadorpersonalComponent,
    ContactoComponent,
    HeaderComponent,
    FooterComponent,

  ],
  imports: [
    BrowserModule,
    routing,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
