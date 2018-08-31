import { NgModule } from '@angular/core';
import { ArticlepageComponent } from '../page/articlepage/articlepage.component';
import { HomepageComponent } from '../page/homepage/homepage.component';
import { ErrorpageComponent } from '../page/errorpage/errorpage.component';
import { RouterModule, Routes } from '@angular/router';
import { EditorpageComponent } from '../page/editorpage/editorpage.component';
import { LoginpageComponent } from '../page/loginpage/loginpage.component';
import { ResultpageComponent } from '../page/resultpage/resultpage.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'article/:id', component: ArticlepageComponent },
  { path: 'home', component: HomepageComponent },
  { path: 'search' , component : HomepageComponent , outlet: 'popup'},
  { path: 'error', component: ErrorpageComponent },
  { path: 'editor', component: EditorpageComponent},
  { path: 'editor/:id', component: EditorpageComponent},
  { path: 'result/:class/:key', component: ResultpageComponent},
  { path: 'login', component: LoginpageComponent},
  { path: '**' , redirectTo: 'error' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
