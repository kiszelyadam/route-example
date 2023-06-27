import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { FirstComponent } from "./components/first/first.component";

const firstRoutes: Routes = [
    {
        path: '',
        component: FirstComponent
    }
]

@NgModule({
    imports: [RouterModule.forChild(firstRoutes)],
    exports: [RouterModule]
  })
  
  export class FirstRoutingModule { }