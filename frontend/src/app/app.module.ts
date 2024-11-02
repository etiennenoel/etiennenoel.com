import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {BrowserModule, provideClientHydration} from '@angular/platform-browser';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './components/header/header.component';
import {LayoutComponent} from './components/layout/layout.component';
import {RootComponent} from './components/root/root.component';
import {AppRoutingModule} from './app.routes';
import {HomeComponent} from './pages/home/home.component';
import {ContactMeComponent} from './pages/contact-me/contact-me.component';

@NgModule({
  declarations: [
    HeaderComponent,
    LayoutComponent,
    RootComponent,

    // Pages
    HomeComponent,
    ContactMeComponent,
  ],
  imports: [
    AppRoutingModule,
    CommonModule,
    BrowserModule,
    RouterModule,
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [RootComponent]
})
export class AppModule {
}
