import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { MEvent } from '../types/m-event';
import { Observable } from '@firebase/util';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private EventsCollection: AngularFirestoreCollection<MEvent>
  events: Observable<MEvent[]>
  event: Observable<MEvent>
  
  constructor(private afs: AngularFirestore) {
    this.afs.firestore.settings({timestampsInSnapshots: true})    
  }

  create(newEvent: Partial<MEvent>): Promise<void> {
    console.log("Event", newEvent)
    return this.afs.collection('events').doc<Partial<MEvent>>(newEvent.name.replace(' ', '-')).set(newEvent)
  }

  get(id: string) {
    return this.afs.collection('events').doc<MEvent>(id).valueChanges()
  }

  update(id: string, newEvent: Partial<MEvent>): Promise<void> {
    return this.afs.collection('events').doc(id).update(newEvent)
  }
  
  delete(id: string): Promise<void> {
    return this.afs.collection('events').doc<MEvent>(id).delete()
  }
  
  checkIn(userId: string) {
    console.log('not implemented')
  }

  checkOut(userId: string) {
    console.log('not implemented')
  }
  
}
