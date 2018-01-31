import {CanActivate} from "@angular/router";
/**
 * Created by 357095 on 2018/1/31.
 */
export class LoginGuard implements CanActivate {
    canActivate() {
      let loggedIn: boolean = Math.random() < 0.5;
      if (!loggedIn) {
        console.log('用户未登录');
      }
      return loggedIn;
    }
}
