import {Component, Input, OnInit, Output, EventEmitter, OnChanges} from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnInit, OnChanges {
  @Input()
  private rating: number;
  private stars: boolean[];
  @Input()
  private readonly: boolean = true;
  @Output()
  private ratingChange: EventEmitter<number> = new EventEmitter(); // ratingChange的名字格式是固定的;

  constructor() { }

  ngOnInit() {
  }

  clickStars(index: number) {
     if (!this.readonly) {
      this.rating = index + 1;
      this.ratingChange.emit(this.rating);
     }
  }

  ngOnChanges() {
    this.stars = [];
    for ( let i = 1; i <= 5; i++) {
      this.stars.push(i > this.rating);
    }
  }

}
