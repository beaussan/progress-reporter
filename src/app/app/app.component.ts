import { Component, OnInit } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

export interface Progress {
  stepsDone: boolean[];
  uid: string;
  userName: string;
}

@Component({
  selector: 'app-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  stepsName = [
    'Introduction',
    'Create a project',
    'Hero Editor',
    'Display a list',
    'Create a feature component',
    'Add services',
    'Add in-app Navigation',
    'Get data from a Server',
  ];

  tpId = 'angular-init';
  private itemsCollection: AngularFirestoreCollection<Progress>;
  items: Observable<Progress[]>;
  userId: Observable<string>;

  constructor(
    private readonly afs: AngularFirestore,
    private readonly auth: AngularFireAuth,
  ) {
    this.itemsCollection = afs.collection(`/tp/${this.tpId}/progress`);
    this.items = this.itemsCollection.valueChanges();
    this.userId = auth.user.pipe(
      filter((value) => !!value),
      map((value) => value.uid),
    );
  }

  async updateForData(stepsDone: boolean[], progress: Progress) {
    await this.afs.doc(`/tp/${this.tpId}/progress/${progress.uid}`).update({
      stepsDone,
    });
  }

  ngOnInit(): void {}
}
