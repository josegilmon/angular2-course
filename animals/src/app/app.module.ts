import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { AppComponent } from './app.component';
import { AnimalComponent } from './shared/animal/animal.component';
import { AnimalFormComponent } from "./shared/animal-form/animal-form.component";
import { AnimalFormReactiveComponent } from "./shared/animal-form-reactive/animal-form-reactive.component";

import { HighLightDirective } from './shared/highlight.direcive';

import { LimitTextPipe } from "./shared/limit-text.pipe";

@NgModule({
    declarations: [
        AppComponent,
        AnimalComponent,
        AnimalFormComponent,
        AnimalFormReactiveComponent,
        HighLightDirective,
        LimitTextPipe
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        NgbModule.forRoot()
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
