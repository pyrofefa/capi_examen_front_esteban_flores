import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TablaUsuarioComponent } from './components/tabla-usuario/tabla-usuario.component';
import { UsuariosModule } from './modules/usuarios/usuarios.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    TablaUsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UsuariosModule, 
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
