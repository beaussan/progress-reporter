import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Progress } from '../app.component';

@Component({
  selector: 'app-progress-reporter',
  templateUrl: './progress-reporter.component.html',
  styleUrls: ['./progress-reporter.component.scss'],
})
export class ProgressReporterComponent implements OnInit {
  @Input()
  item: Progress;

  @Input()
  tpId: string;

  @Input()
  labels: string[];

  @Input()
  authId: string;

  @Output()
  updateArray = new EventEmitter<boolean[]>();

  constructor() {}

  ngOnInit(): void {}

  updateToIdx(idx: number) {
    const items = new Array(this.labels.length).fill(false);
    for (let i = 0; i < idx + 1; i++) {
      items[i] = true;
    }
    this.updateArray.emit(items);
  }
}
