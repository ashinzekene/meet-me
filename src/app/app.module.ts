import { BrowserModule } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { RoutingModule } from "./app-router.module";
import { AppComponent } from './app.component';
import { CoreModule } from "./core/core.module";
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { environment } from '../environments/environment';

import { HomeComponent } from './home/home.component';
import { CreateEventComponent } from './create-event/create-event.component';
import { EventsComponent } from './events/events.component';
import { ProfileComponent } from './profile/profile.component';
import { ExploreComponent } from './explore/explore.component';
import { EventComponent } from './event/event.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CreateEventComponent,
    EventsComponent,
    ProfileComponent,
    ExploreComponent,
    EventComponent,
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    NoopAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase, 'ashinzekene-meet-me'),
    AngularFireAuthModule,
    AngularFirestoreModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
