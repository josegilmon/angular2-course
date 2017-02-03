import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { StoreModule } from '@ngrx/store';
import { RouterStoreModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { AnimalComponent } from './shared/animal/animal.component';
import { AnimalFormComponent } from "./shared/animal-form/animal-form.component";
import { AnimalFormReactiveComponent } from "./shared/animal-form-reactive/animal-form-reactive.component";
import { AnimalListComponent } from './pages/animal/list/animal-list.component';
import { AnimalCreateComponent } from './pages/animal/create/animal-create.component';
import { NotAuthorizedComponent } from './shared/not-authorized/not-authorized.component';

import { HighLightDirective } from './shared/highlight.direcive';

import { LimitTextPipe } from "./shared/limit-text.pipe";

import { AuthGuard } from './guards/auth.guard';
import { ExitCanDeactivateGuard } from './guards/exit.guard';
import { AuthService } from './services/auth.service';
import { AnimalService } from "./services/animal.service";

import { reducer } from './reducers/index';

import { API_URL_OPAQUE } from "./config";
import { AnimalAction } from './actions/animal.action';

const appRoutes: Routes = [
    { path: '', redirectTo: 'animal/list', pathMatch: 'full' },
    { path: 'animal', redirectTo: 'animal/list', pathMatch: 'full' },
    { path: 'animal/list', component: AnimalListComponent },
    { path: 'animal/create', component: AnimalCreateComponent, canActivate: [AuthGuard], canDeactivate: [ExitCanDeactivateGuard] },
    { path: 'animal/edit/:id', component: AnimalCreateComponent, canActivate: [AuthGuard], canDeactivate: [ExitCanDeactivateGuard] },
    { path: 'not-authorized', component: NotAuthorizedComponent },
    { path: '**', redirectTo: 'animal/list' }
];

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        AnimalComponent,
        AnimalFormComponent,
        AnimalFormReactiveComponent,
        AnimalCreateComponent,
        AnimalListComponent,
        NotAuthorizedComponent,
        HighLightDirective,
        LimitTextPipe
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        RouterModule.forRoot(appRoutes),
        NgbModule.forRoot(),
        StoreModule.provideStore(reducer),
        RouterStoreModule.connectRouter(),
        StoreDevtoolsModule.instrumentOnlyWithExtension()
    ],
    providers: [
        AuthGuard,
        ExitCanDeactivateGuard,
        AuthService,
        // There is three ways to declare a service
        AnimalService,
        //{ provide: AnimalService, useClass: AnimalService },    // Uses a new instance of AnimalService
        //{ provide: AnimalService, useExisting: AnimalService }, // Uses the same instance of AnimalService
        // In this way we can use interfaces to easily update our service definitions
        //{ provide: LoggerService, useClass: ConsoleLoggerService },
        //{ provide: LoggerService, useClass: FileLoggerService },
        { provide: API_URL_OPAQUE, useValue: 'http://45.32.235.206:3000/api' },
        AnimalAction
    ],
bootstrap: [AppComponent]
})
export class AppModule { }
