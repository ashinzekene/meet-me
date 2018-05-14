import { Injectable } from '@angular/core';
import { Router, Resolve, ParamMap, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { MEvent } from '../types/m-event';
import { Observable } from '@firebase/util';
import { EventService } from '../core/event.service';

@Injectable({
  providedIn: 'root'
})
export class EventResolverService implements Resolve<MEvent> {

  constructor(private eventDB: EventService, private router: Router) { }
  
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    let eventId = route.paramMap.get('id');
    return this.eventDB.get(eventId)
      .map((res: MEvent) => {
        if (res) return res
        
        this.router.navigate(['/events'])
        return null
      })
  }
  
}
