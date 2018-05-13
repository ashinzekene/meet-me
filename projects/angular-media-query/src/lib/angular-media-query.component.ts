import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-angular-media-query',
  template: `
   <ng-content></ng-content>
  `,
  styles: []
})
export class AngularMediaQueryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
