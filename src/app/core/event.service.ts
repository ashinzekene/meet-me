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
  
  constructor(private afs: AngularFirestore) { }

  create(event: Partial<MEvent>): Promise<void> {
    return this.afs.collection('events').doc<Partial<MEvent>>(event.name.replace(' ', '-')).set(event)
  }

  get(id: string) {
    return this.afs.collection('events').doc<MEvent>(id).valueChanges()
  }

  update(id: string, event: Partial<MEvent>): Promise<void> {
    return this.afs.collection('events').doc(id).update(event)
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
