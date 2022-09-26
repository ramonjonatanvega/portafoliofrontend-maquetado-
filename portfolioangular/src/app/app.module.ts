import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LoginComponent } from './modals/login/login.component';
import { RedesComponent } from './redes/redes.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ErrorComponent } from './error/error.component';
import { ButtonLogoutComponent } from './button-logout/button-logout.component';
import { IndexComponent } from './index/index.component';
import { ButtonloginComponent } from './buttonlogin/buttonlogin.component';
import { NavbarrComponent } from './dashboardd/navbarr/navbarr.component';
import { BannerrComponent } from './dashboardd/bannerr/bannerr.component';
import { NavbarComponent } from './indexx/navbar/navbar.component';
import { BannercarouselComponent } from './indexx/bannercarousel/bannercarousel.component';
import { AcercademiComponent } from './indexx/acercademi/acercademi.component';
import { ExperienciaComponent } from './indexx/experiencia/experiencia.component';
import { EducacionComponent } from './indexx/educacion/educacion.component';
import { HabilidadesComponent } from './indexx/habilidades/habilidades.component';
import { ProyectosComponent } from './indexx/proyectos/proyectos.component';





@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RedesComponent,
    DashboardComponent,
    ErrorComponent,
    ButtonLogoutComponent,
    IndexComponent,
    ButtonloginComponent,
    NavbarrComponent,
    BannerrComponent,
    NavbarComponent,
    BannercarouselComponent,
    AcercademiComponent,
    ExperienciaComponent,
    EducacionComponent,
    HabilidadesComponent,
    ProyectosComponent,

   
    


   
   
    


   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
