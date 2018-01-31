import {CanDeactivate} from "@angular/router";
import {ProductComponent} from "../product/product.component";
/**
 * Created by 357095 on 2018/1/31.
 */
export class UnsavedGuard implements CanDeactivate<ProductComponent> {
  canDeactivate(component: ProductComponent): boolean {
    return window.confirm('你还没有保存，确定要离开么？');
  }

}
