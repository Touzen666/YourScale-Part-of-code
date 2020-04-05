//Standards
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
//Standards

// used to create fake backend
import { fakeBackendProvider } from "./_helpers";

//Registration/Login/HTTP requests/respones
import { appRoutingModule } from "./app.routing";
import { JwtInterceptor, ErrorInterceptor } from "./_helpers";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home";
import { LoginComponent } from "./login";
import { RegisterComponent } from "./register";
import { AlertComponent } from "./_components";
//Registration/Login/HTTP requests/respones

// Head of
import { NavbarComponent } from "./Navbar/navbar.component";
import { GlownaComponent } from "./Glowna/glowna.component";
import { FooterComponent } from "./Footer/footer.component";
// Head of page

// Atentication pages\
// import { ZalogujComponent } from "./zaloguj/zaloguj.component";
// import { RejestracjaComponent } from "./Rejestracja/rejestracja.component";
// import { UstawieniaComponent } from "./ustawienia/ustawienia.component";
// Atentication pages

// Subpages of functionalities met
// import { LodowkaComponent } from "./Lodowka/lodowka.component";
// import { WarzenieComponent } from "./Warzenie/warzenie.component";
// import { ListaComponent } from "./Lista/lista.component";
// import { PrzepisyComponent } from "./Przepisy/przepisy.component";
// import { ListaUzytkownikaComponent } from "./lista-uzytkownika/lista-uzytkownika.component";
// import { SpolecznoscComponent } from "./spolecznosc/spolecznosc.component";
// Subpages of functionalities met

//Additional functionalities
// import { DodajPrzepisComponent } from "./dodaj-przepis/dodaj-przepis.component";
// import { DodajListeComponent } from "./dodaj-liste/dodaj-liste.component";
// import { ZaplanujDieteComponent } from "./zaplanuj-diete/zaplanuj-diete.component";
// import { SubskrybujComponent } from "./subskrybuj/subskrybuj.component";
//Additional functionalities

//Users' private pages
// import { ProfilComponent } from "./Profil/profil.component";
// import { CeleComponent } from "./Cele/cele.component";
// import { KontoComponent } from "./konto/konto.component";
//Users' private pages

// Contact section
// import { KontaktComponent } from "./kontakt/kontakt.component";
// import { EmailBoxComponent } from "./email-box/email-box.component";
// Contact section

//Politics
// import { PolitykaComponent } from "./polityka/polityka.component";
// import { CookiesComponent } from "./cookies/cookies.component";
//Politics

@NgModule({
  imports: [
    NgbModule,
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    appRoutingModule,
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    AlertComponent,

    GlownaComponent,
    NavbarComponent,
    FooterComponent,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

    // provider used to create fake backend
    fakeBackendProvider,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
