import {
  AngularFirestore,
  AngularFirestoreCollection,
  DocumentReference,
} from '@angular/fire/compat/firestore';
import { Injectable } from '@angular/core';

import IClip from '../models/clip.model';

@Injectable({
  providedIn: 'root',
})
export class ClipService {
  public clipsCollection: AngularFirestoreCollection<IClip>;

  constructor(private db: AngularFirestore) {
    this.clipsCollection = db.collection('clips');
  }

  createClip(data: IClip): Promise<DocumentReference<IClip>> {
    return this.clipsCollection.add(data);
  }
}
