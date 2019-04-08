import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxCarouselModule } from 'ngx-carousel';
import { RouterModule, Routes } from '@angular/router';
import 'hammerjs';

import { AppComponent } from './app.component';
import { IntroComponent } from './intro/intro.component';
import { InstagramComponent } from './instagram/instagram.component';
import { ComentariosComponent } from './comentarios/comentarios.component';
import { FooterComponent } from './footer/footer.component';
import { QuienesSomosComponent } from './quienes-somos/quienes-somos.component';
import { ProntoDisponibleComponent } from './pronto-disponible/pronto-disponible.component';
import { FaqsComponent } from './faqs/faqs.component';
import { NewsComponent } from './news/news.component';
import { ShowNewsComponent } from './show-news/show-news.component';
import { IndexComponent } from './index/index.component';
import { TwitterComponent } from './twitter/twitter.component';

const appRoutes: Routes = [
  { path: '',  component: IndexComponent, pathMatch: 'full'},
  { path: 'showNews/:id',  component: ShowNewsComponent },
  { path: '**', redirectTo: ''}
];

@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    InstagramComponent,
    ComentariosComponent,
    FooterComponent,
    QuienesSomosComponent,
    ProntoDisponibleComponent,
    FaqsComponent,
    NewsComponent,
    ShowNewsComponent,
    IndexComponent,
    TwitterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgxCarouselModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes, {useHash: true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
