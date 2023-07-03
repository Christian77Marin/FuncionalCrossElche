import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "./component/home/home.component";
import { InstalacionesComponent } from "./component/instalaciones/instalaciones.component";
import { EntrenadorpersonalComponent } from "./component/entrenadorpersonal/entrenadorpersonal.component";
import { ContactoComponent } from "./component/contacto/contacto.component";

const appRoutes : Routes = [
    {path:'', component: HomeComponent},
    {path:'Inicio', component: HomeComponent},
    {path:'Instalaciones-Servicios', component: InstalacionesComponent},
    {path:'EntrenadorPersonal', component: EntrenadorpersonalComponent},
    {path:'Contacto', component: ContactoComponent},
];

export const appRoutingProviders : any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);

