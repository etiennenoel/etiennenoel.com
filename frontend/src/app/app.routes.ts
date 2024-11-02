import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {RootComponent} from './components/root/root.component';
import {LayoutComponent} from './components/layout/layout.component';
import {HomeComponent} from './pages/home/home.component';
import {ContactMeComponent} from './pages/contact-me/contact-me.component';

export const routes: Routes = [
  {
    path: "",
    component: RootComponent,
    children: [
      {
        path: "",
        component: HomeComponent,
      },
      {
        path: "contact-me",
        component: ContactMeComponent,
      },
      {
        path: "",
        component: LayoutComponent,
        children: [
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {anchorScrolling: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
