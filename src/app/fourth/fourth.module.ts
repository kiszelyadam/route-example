import { NgModule } from "@angular/core";
import { FourthComponent } from "./components/fourth/fourth.component";
import { FifthComponent } from './components/fifth/fifth.component';
import { SixthComponent } from './components/sixth/sixth.component';
import { RouterModule } from "@angular/router";
import { FourthRoutingModule } from "./fourth-routing.module";


@NgModule({
    declarations: [
        FourthComponent,
        FifthComponent,
        SixthComponent
    ],
    imports: [ 
        FourthRoutingModule
    ]
})

export class FourthModule{}