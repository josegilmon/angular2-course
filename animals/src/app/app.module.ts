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

import { AnimalService } from "./services/animal.service";
import { API_URL_OPAQUE } from "./config";

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
    providers: [
        // There is three ways to declare a service
        AnimalService,
        //{ provide: AnimalService, useClass: AnimalService },    // Uses a new instance of AnimalService
        //{ provide: AnimalService, useExisting: AnimalService }, // Uses the same instance of AnimalService
        // In this way we can use interfaces to easily update our service definitions
        //{ provide: LoggerService, useClass: ConsoleLoggerService },
        //{ provide: LoggerService, useClass: FileLoggerService },
        { provide: API_URL_OPAQUE, useValue: 'http://192.168.100.52:3000/api' },
    ],
bootstrap: [AppComponent]
})
export class AppModule { }
