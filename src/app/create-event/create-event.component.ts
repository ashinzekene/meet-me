import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { MEvent } from '../types/m-event';
import { EventService } from '../core/event.service';
import { MatSnackBar } from '@angular/material';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit, OnDestroy {
  newEvent: Partial<MEvent> = {}
  dateToday: Date = new Date()
  minEndDate: Date = new Date()
  startDateSubscription: any
  isCreating: boolean = false

  constructor(private eventDB: EventService, private snackbar: MatSnackBar, private router: Router) { }

  ngOnInit() {
    this.startDateSubscription = Observable.of(this.newEvent.startDate)
    .subscribe(dt => {
      this.minEndDate = dt || this.dateToday
    })
  }

  async createEvent() {
    this.isCreating = true
    try {
      await this.eventDB.create(this.newEvent)
      this.snackbar.open("Event Created successfully", "Done", {
        duration: 2000
      })
      this.router.navigate(['/events'])
    } catch (err) {
      this.snackbar.open("Could not create event", "Done", {
        duration: 2000
      })
    }
    this.isCreating = false
  }

  ngOnDestroy() {
    this.startDateSubscription.unsubscribe()
  }

}
