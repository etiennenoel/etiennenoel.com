import {AppComponent} from './app.component';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {BrowserModule} from '@angular/platform-browser';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './components/header/header.component';
import {LayoutComponent} from './components/layout/layout.component';
import {RootComponent} from './components/root/root.component';
import {AppRoutingModule} from './app.routes';
import {HomeComponent} from './pages/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LayoutComponent,
    RootComponent,

    // Pages
    HomeComponent,
  ],
  imports: [
    AppRoutingModule,
    CommonModule,
    BrowserModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
