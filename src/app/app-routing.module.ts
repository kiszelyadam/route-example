import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseComponent } from './core/components/base/base.component';

const routes: Routes = [
  {
    path: '',
    component: BaseComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        loadChildren: () => import('./first/first.modules').then((f) => f.FirstModule)
      },
      {
        path: 'fourth',
        loadChildren: () => import('./fourth/fourth.module').then((f) => f.FourthModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
