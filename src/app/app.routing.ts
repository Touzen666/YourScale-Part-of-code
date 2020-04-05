import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "./home";
import { LoginComponent } from "./login";
import { RegisterComponent } from "./register";
import { AuthGuard } from "./_helpers";

// Head of page
// import { NavbarComponent } from "./Navbar/navbar.component";
import { GlownaComponent } from "./Glowna/glowna.component";
// import { FooterComponent } from "./Footer/footer.component";
// Head of page

// Atentication pages\
// import { ZalogujComponent } from "./zaloguj/zaloguj.component";
// import { RejestracjaComponent } from "./Rejestracja/rejestracja.component";
import { UstawieniaComponent } from "./ustawienia/ustawienia.component";
// Atentication pages

// Subpages of functionalities met
import { LodowkaComponent } from "./Lodowka/lodowka.component";
import { WarzenieComponent } from "./Warzenie/warzenie.component";
import { ListaComponent } from "./Lista/lista.component";
import { PrzepisyComponent } from "./Przepisy/przepisy.component";
import { ListaUzytkownikaComponent } from "./lista-uzytkownika/lista-uzytkownika.component";
import { SpolecznoscComponent } from "./spolecznosc/spolecznosc.component";
// Subpages of functionalities met

//Additional functionalities
import { DodajPrzepisComponent } from "./dodaj-przepis/dodaj-przepis.component";
import { DodajListeComponent } from "./dodaj-liste/dodaj-liste.component";
import { ZaplanujDieteComponent } from "./zaplanuj-diete/zaplanuj-diete.component";
import { SubskrybujComponent } from "./subskrybuj/subskrybuj.component";
//Additional functionalities

//Users' private pages
import { ProfilComponent } from "./Profil/profil.component";
import { CeleComponent } from "./Cele/cele.component";
import { KontoComponent } from "./konto/konto.component";
//Users' private pages

// Contact section
import { KontaktComponent } from "./kontakt/kontakt.component";
import { EmailBoxComponent } from "./email-box/email-box.component";
// Contact section

//Politics
import { PolitykaComponent } from "./polityka/polityka.component";
import { CookiesComponent } from "./cookies/cookies.component";
//Politics

const routes: Routes = [
  { path: "", component: GlownaComponent, canActivate: [AuthGuard] },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  // Head of page
  // { path: "", component: GlownaComponent, canActivate: [AuthGuard] },

  // Head of page

  // Atentication pages
  // { path: "zaloguj", component: ZalogujComponent },
  // { path: "rejestracja", component: RejestracjaComponent },
  // { path: "ustawienia", component: UstawieniaComponent },
  {
    path: "ustawienia",
    component: UstawieniaComponent,
    canActivate: [AuthGuard],
  },
  // Atentication pages\

  // Subpages of functionalities met
  // { path: "lista", component: ListaComponent },
  { path: "lista", component: ListaComponent, canActivate: [AuthGuard] },
  // { path: "warzenie", component: WarzenieComponent },
  { path: "warzenie", component: WarzenieComponent, canActivate: [AuthGuard] },
  { path: "przepisy", component: PrzepisyComponent },
  { path: "lodowka", component: LodowkaComponent, canActivate: [AuthGuard] },
  // { path: "lodowka", component: LodowkaComponent },
  { path: "spolecznosc", component: SpolecznoscComponent },
  // Subpages of functionalities met

  //Additional functionalities
  // { path: "listaUzytkownika", component: ListaUzytkownikaComponent },
  {
    path: "listaUzytkownika",
    component: ListaUzytkownikaComponent,
    canActivate: [AuthGuard],
  },
  // { path: "dodajPrzepis", component: DodajPrzepisComponent },
  {
    path: "dodajPrzepis",
    component: DodajPrzepisComponent,
    canActivate: [AuthGuard],
  },
  // { path: "dodajListe", component: DodajListeComponent },
  {
    path: "dodajListe",
    component: DodajListeComponent,
    canActivate: [AuthGuard],
  },
  // { path: "zaplanujDiete", component: ZaplanujDieteComponent },
  {
    path: "zaplanujDiete",
    component: ZaplanujDieteComponent,
    canActivate: [AuthGuard],
  },
  // { path: "subskrybuj", component: SubskrybujComponent },
  {
    path: "subskrybuj",
    component: SubskrybujComponent,
    canActivate: [AuthGuard],
  },
  //Additional functionalities

  //Users' private pages
  // { path: "profil", component: ProfilComponent },
  { path: "profil", component: ProfilComponent, canActivate: [AuthGuard] },
  // { path: "konto", component: KontoComponent },
  { path: "konto", component: KontoComponent, canActivate: [AuthGuard] },
  // { path: "cele", component: CeleComponent },
  { path: "cele", component: CeleComponent, canActivate: [AuthGuard] },
  //Users' private pages

  // Contact section
  { path: "kontakt", component: KontaktComponent },
  { path: "emailBox", component: EmailBoxComponent },
  // Contact section

  //Politics
  { path: "politykaPrywatnosci", component: PolitykaComponent },
  { path: "plikiCookies", component: CookiesComponent },
  //Politics

  // otherwise redirect to home
  { path: "**", redirectTo: "" },
];

export const appRoutingModule = RouterModule.forRoot(routes);
