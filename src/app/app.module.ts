import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { CardComponent } from './component/card/card.component';
import { HomepageComponent } from './page/homepage/homepage.component';
import { ErrorpageComponent } from './page/errorpage/errorpage.component';
import { ArticlepageComponent } from './page/articlepage/articlepage.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { BsDropdownModule , TooltipModule , ModalModule ,
   ButtonsModule , CollapseModule , CarouselModule } from 'ngx-bootstrap';
import { SearchModalComponent } from './component/search-modal/search-modal.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CardComponent,
    HomepageComponent,
    ErrorpageComponent,
    ArticlepageComponent,
    SearchModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    ButtonsModule.forRoot(),
    CollapseModule.forRoot(),
    CarouselModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
