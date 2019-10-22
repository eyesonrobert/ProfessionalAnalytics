import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WelcomeComponent } from './welcome/welcome.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { CalendarComponent } from './calendar/calendar/calendar.component';
import { AuthGuard } from './auth/auth.guard';
import { ProfileComponent } from './profile/profile/profile.component';


const routes: Routes = [
    { path: '', component: WelcomeComponent },
    { path: 'calendar', component: CalendarComponent },
    { path: 'profile', component: ProfileComponent }

];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: [AuthGuard]
})
export class AppRoutingModule { }
