import { NgModule } from "@angular/core";
import { FirstComponent } from "./components/first/first.component";
import { RouterModule } from "@angular/router";
import { FirstRoutingModule } from "./first-rounting.module";

@NgModule({
    declarations: [FirstComponent],
    imports: [RouterModule, FirstRoutingModule]
})

export class FirstModule {}