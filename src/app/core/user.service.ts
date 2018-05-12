import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { MUser } from '../types/m-user';
import { Observable } from '@firebase/util';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private UsersCollection: AngularFirestoreCollection<MUser>
  users: Observable<MUser[]>
  user: Observable<MUser>
  
  constructor(private afs: AngularFirestore) {
    this.afs.firestore.settings({timestampsInSnapshots: true})
  }

  create(user: Partial<MUser>): Promise<void> {
    return this.afs.collection('users').doc(user.uid).set(user)
  }

  get(uid: string) {
    return this.afs.collection('users').doc<MUser>(uid).valueChanges()
  }

  update(uid: string, user: Partial<MUser>): Promise<void> {
    return this.afs.collection('users').doc<MUser>(uid).update(user)
  }
  
  delete(uid: string): Promise<void> {
    return this.afs.collection('users').doc<MUser>(uid).delete()
  }
  
}
