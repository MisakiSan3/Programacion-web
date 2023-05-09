import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NoFoundPagesComponent } from './not-found-pages/no-found-pages.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from './auth/auth.module';
import { PagesModule } from './pages/pages.module';
import { SharedModule } from './shared/shared.module';
import { PagesComponent } from './pages/pages.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { WebModule } from './web/web.module';

@NgModule({
  declarations: [AppComponent, PagesComponent, NoFoundPagesComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    PagesModule,
    WebModule,
    SharedModule,
    HttpClientModule
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent],
})
export class AppModule {}
