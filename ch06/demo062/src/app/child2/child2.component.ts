import {AfterViewChecked, AfterViewInit, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit, AfterViewInit, AfterViewChecked {

  constructor() {

  }

  ngOnInit() {
  }

  greeting(name: string) {
    console.log('Hello, '+ name);
  }

  ngAfterViewInit ():void {
    console.log('子组件的视图初始化完毕');
  }

  ngAfterViewChecked (): void {
    console.log('子组件的视图变更检测完毕');
  }

}
