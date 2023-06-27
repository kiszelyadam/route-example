import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FourthComponent } from "./components/fourth/fourth.component";
import { FifthComponent } from "./components/fifth/fifth.component";
import { SixthComponent } from "./components/sixth/sixth.component";

const fourthRoutes: Routes = [
  {
    path: '',
    component: FourthComponent,
    children: [
      {
        path: 'fifth',
        component: FifthComponent
      },
      {
        path: 'sixth',
        component: SixthComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(fourthRoutes)],
  exports: [RouterModule]
})

export class FourthRoutingModule { }