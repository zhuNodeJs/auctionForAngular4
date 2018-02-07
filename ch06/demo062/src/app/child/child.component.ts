import {Component, DoCheck, Input, OnChanges, OnInit, SimpleChange} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, OnChanges, DoCheck {

  @Input()
  private greeting: string;
  @Input()
  private user: {name: string};
  private message: string = '初始化消息';

  private oldUserName: string;
  private changeDetected: boolean = false;
  private noChangeCount: number = 0;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChange): void {
    // console.log(JSON.stringify(changes, null, 2));
  }

  ngDoCheck (): void {
    if(this.user.name != this.oldUserName) {
      this.changeDetected = true;
      // console.log('DoCheck:user.name从'+this.oldUserName+'变为：'+this.user.name);
      this.oldUserName = this.user.name;
    }

    if (this.changeDetected) {
      this.noChangeCount = 0;
    } else {
      this.noChangeCount = this.noChangeCount + 1;
      // console.log('DoCheck:user.name没变化时ngDoCheck方法已经被调用'+this.noChangeCount);
    }

    this.changeDetected = false;
  }


}
