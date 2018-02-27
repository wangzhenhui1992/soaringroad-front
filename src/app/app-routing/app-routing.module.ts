import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticlepageComponent } from '../page/articlepage/articlepage.component';
import { HomepageComponent } from '../page/homepage/homepage.component';
import { ErrorpageComponent } from '../page/errorpage/errorpage.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'article/id/:id', component: ArticlepageComponent },
  { path: 'home', component: HomepageComponent },
  { path: 'search' , component : HomepageComponent , outlet: 'popup'},
  { path: 'error', component: ErrorpageComponent },
  { path: '**' , redirectTo: 'error' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
