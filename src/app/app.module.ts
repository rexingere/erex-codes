import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { LandingComponent } from './landing/landing.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    LandingComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'admin', component: AdminComponent},
      {path: '', component: LandingComponent}
      //{path: 'heroes-list', component: HeroesListComponent},
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
