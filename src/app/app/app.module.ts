import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProgressReporterComponent } from './progress-reporter/progress-reporter.component';
import { AngularFirestoreModule } from '@angular/fire/firestore';

@NgModule({
  declarations: [AppComponent, ProgressReporterComponent],
  imports: [CommonModule, AppRoutingModule, AngularFirestoreModule],
})
export class AppModule {}
