import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { WaitingComponent } from './home/waiting/waiting.component';
import { SucceedComponent } from './home/succeed/succeed.component';
import { TaskPage } from './addtask/task/task.page';
import { HomePage } from './home/home.page';

const routes: Routes = [
  { path: 'home', component: HomePage},
  { path: 'task/:type', loadChildren : './addtask/task/task.module#TaskPageModule'},
  {path: '',
    redirectTo: '/home',
    pathMatch: 'full'}

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
