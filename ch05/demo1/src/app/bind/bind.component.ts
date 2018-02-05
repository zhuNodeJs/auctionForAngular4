import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bind',
  templateUrl: './bind.component.html',
  styleUrls: ['./bind.component.css']
})
export class BindComponent implements OnInit {

  private imgUrl = 'http://placehold.it/400x200';
  private divClass: string;
  private showNg: any = {
    a: false,
    b: false,
    c: false
  };
  private isD = false;
  private isFontChange = false;
  private div2Style: any = {
    color: 'red',
    background: 'yellow'
  };
  private pi = 3.1415926;
  private ss = 5;
  private isBig: boolean = false;
  constructor () {
    setTimeout(() => {
      this.divClass = 'a b c';
      this.isBig = true;
      this.showNg = {
        a: true,
        b: true,
        c: true
      };
      this.isD = true;
      this.isFontChange = true;
      this.div2Style = {
        color: 'yellow',
        background: 'red'
      };
    }, 3000);
  }

  ngOnInit() {
    }

  showEvent(event: any) {
    console.log(event);
  }

}
