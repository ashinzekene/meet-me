import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {

  newEvent: any = {}

  firstFormGroup: FormGroup = new FormGroup({
    firstCtrl: new FormControl(),
    secondCtrl: new FormControl(),
  })
  
  constructor() { }

  ngOnInit() {
  }

}
