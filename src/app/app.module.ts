import { BrowserModule } from '@angular/platform-browser';
import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';

import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {CardsComponent} from './views/cards/cards.component';
import {UserService} from './shared/services/user.service';
import {
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule, DateAdapter, MatNativeDateModule, MatCheckboxModule
} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import {HeaderComponent} from './shared/components/header/header.component';
import { ChartComponent } from './views/chart/chart.component';
import {MDBBootstrapModule} from 'angular-bootstrap-md';
import { FormsComponent } from './views/forms/forms.component';
import {TrainingService} from './shared/services/training.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CommonDirectivesModule} from './directives/common/common-directives.module';
import {DataService} from './shared/services/data.service';
import { CalendarComponent } from './views/calendar/calendar.component';
import {adapterFactory} from 'angular-calendar/date-adapters/moment';
import {CalendarModule} from 'angular-calendar';





@NgModule({
  declarations: [
    AppComponent,
    CardsComponent,
    HeaderComponent,
    ChartComponent,
    FormsComponent,
    CalendarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatCardModule,
    MDBBootstrapModule.forRoot(),
    MatMenuModule,
    MatIconModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    CommonDirectivesModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    }),
    FormsModule,
    MatNativeDateModule,
    MatInputModule,
    MatButtonModule,
    FlexLayoutModule,
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [
      UserService,
      TrainingService,
      DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
