import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { StarComponent } from "./star.component";

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        StarComponent
    ],
    exports: [
        StarComponent,
        CommonModule,
        FormsModule
    ]
})

export class SharedModule { }