import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './Components/contact/contact.component';
import { CssCourseComponent } from './Components/css-course/css-course.component';
import { FooterComponent } from './Components/footer/footer.component';
import { ForumComponent } from './Components/forum/forum.component';
import { HomeComponent } from './Components/home/home.component';
import { HtmlCourseComponent } from './Components/html-course/html-course.component';
import { JavaScriptCourseComponent } from './Components/java-script-course/java-script-course.component';
import { LoginComponent } from './Components/login/login.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { ProfileAdminComponent } from './Components/profile-admin/profile-admin.component';
import { ProfileStudentComponent } from './Components/profile-student/profile-student.component';
import { RegisterComponent } from './Components/register/register.component';
import { ForumAnsComponent } from './Components/forum-ans/forum-ans.component';
import { AuthGuard } from './auth.guard';
import { NotFountComponent } from './not-fount/not-fount.component';
import { RoutGuardGuard } from './rout-guard.guard';


const routes: Routes = [
  { path: 'contact', component: ContactComponent },
  { path: 'login', component:  LoginComponent, canActivate:[RoutGuardGuard]},
  { path: 'register', component: RegisterComponent },
  { path: 'css-course', component: CssCourseComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'forum', component: ForumComponent },
  { path: 'home', component: HomeComponent },
  { path: 'html-course', component: HtmlCourseComponent },
  { path: 'java-script-course', component: JavaScriptCourseComponent },
  { path: 'navbar', component: NavbarComponent },
  { path: 'profile-student/:_id', 
  component: ProfileStudentComponent,
  canActivate:[AuthGuard]
},
  { path: 'forumAns/:id', component: ForumAnsComponent},
  { path: 'profile-admin', 
  component: ProfileAdminComponent,
  canActivate: [AuthGuard]
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: NotFountComponent }
  
];

@NgModule({

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
