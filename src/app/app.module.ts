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
import { EditorpageComponent } from './page/editorpage/editorpage.component';
import { FormsModule } from '../../node_modules/@angular/forms';
import { LoginpageComponent } from './page/loginpage/loginpage.component';
import { RequestService } from './service/common/request.service';
import { SocialComponent } from './component/social/social.component';
import { ResultpageComponent } from './page/resultpage/resultpage.component';
import { MarkdownService } from './service/common/markdown.service';
import { MyselfpageComponent } from './page/myselfpage/myselfpage.component';
import { AdsComponent } from './component/ads/ads.component';

@NgModule({
  declarations: [
    SearchModalComponent,
    CardComponent,
    NavbarComponent,
    HomepageComponent,
    ErrorpageComponent,
    ArticlepageComponent,
    EditorpageComponent,
    LoginpageComponent,
    AppComponent,
    SocialComponent,
    ResultpageComponent,
    MyselfpageComponent,
    AdsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    ButtonsModule.forRoot(),
    CollapseModule.forRoot(),
    CarouselModule.forRoot(),
  ],
  providers: [RequestService, MarkdownService],
  bootstrap: [AppComponent]
})
export class AppModule { }
