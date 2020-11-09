import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ShowPokemonComponent } from './pages/show-pokemon/show-pokemon.component';
import { SinglePokemonComponent } from './pages/single-pokemon/single-pokemon.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ShowPokemonComponent,
    SinglePokemonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
