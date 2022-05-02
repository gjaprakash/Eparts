import { Component, NgModule } from '@angular/core';
import { Router, Routes, RouterModule } from '@angular/router';
import { ForgotPassComponent } from './login/forgot-pass/forgot-pass.component';
import { UserLogComponent } from './login/user-log/user-log.component';

const routes: Routes = [
    {path: 'user-log', component: UserLogComponent },
    {path: 'forgot-pass', component: ForgotPassComponent}
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRouting { }
export const routingComponents = [UserLogComponent, ForgotPassComponent]
