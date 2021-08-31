import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationformComponent } from './components/registrationform/registrationform.component';
import { LoginComponent } from './components/login/login.component';
const routes: Routes = [
{path:"registration",component:RegistrationformComponent},
{path:"Login",component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
