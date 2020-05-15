import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// import { routing } from './app.routing';
import { AppRoutingModule } from './app.routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { CursosModule } from './cursos/cursos.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    CursosModule,
    AppRoutingModule
    // routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
