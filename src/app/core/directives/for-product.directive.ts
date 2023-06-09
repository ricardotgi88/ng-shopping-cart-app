import { Directive, TemplateRef, Input } from '@angular/core';
import { Product } from '../interfaces/product.interface';

interface ProductContext {
  $implicit: Product;
}

@Directive({
  selector: '[forProduct]',
})
export class ForProductDirective {
  constructor(
    public template: TemplateRef<ProductContext>,
  ) {
  }

  @Input() forProductOfType = 'default';
}
