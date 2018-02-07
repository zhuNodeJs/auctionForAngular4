import {AfterViewChecked, AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {Child2Component} from "./child2/child2.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit, AfterViewChecked{
  title = 'Tom';
  private greeting: string = 'Hello';
  private user: {name: string} = {name: 'Tom'};

  private message: string;

  @ViewChild('child1')
  child1: Child2Component;

  ngOnInit (): void {
    this.child1.greeting('Tom');
  }

  ngAfterViewInit ():void {
    console.log('主组件的视图初始化完毕');
    /**
     * 解决ngAfterViewInit ,
     * ngAfterViewChecked 无法改变模板中的属性的值的bug
     */
    setTimeout(() => {
      this.message = 'hello, success';
    }, 0);
  }

  ngAfterViewChecked (): void {
    console.log('主组件的视图变更检测完毕');
  }


}
