import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnInit {
  @Input()
  private rating: number;
  private stars: boolean[];
  @Input()
  private readonly: boolean = true;

  constructor() { }

  ngOnInit() {
    this.stars = [];
    for ( let i = 1; i <= 5; i++) {
      this.stars.push(i > this.rating);
    }
  }

  clickStars(index: number) {
     if (!this.readonly) {
      this.rating = index + 1;
      this.ngOnInit();
     }
  }

}
