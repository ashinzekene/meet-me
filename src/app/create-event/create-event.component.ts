import { Component, OnInit } from '@angular/core';
import { MEvent } from '../types/m-event';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {
  newEvent: Partial<MEvent> = {}

  constructor() { }

  ngOnInit() {
  }

}
