import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";

import { ProductsListComponent } from "./products-list.component";

import { Component, OnInit } from "@angular/core";
import { ForProductDirective } from "../../core/directives/for-product.directive";

import { By } from "@angular/platform-browser";
import { ComponentsModule } from "../components.module";

@Component({
  template: `
    <products-list>
      <ng-container *forProduct="let product; ofType: 'default'">
        <span class="test-product">{{ product.name }} DEFAULT OVERRIDE</span>
      </ng-container>
      <ng-container *forProduct="let product; ofType: 'test'">
        <span class="test-product">{{ product.name }} TEST TEMPLATE</span>
      </ng-container>
    </products-list>
  `,
})
export class TestComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}

describe("ProductsListComponent", () => {
  let component: ProductsListComponent;
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProductsListComponent, TestComponent, ForProductDirective],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    // fixture.elementRef.nativeElement;
    component = fixture.debugElement.query(
      By.directive(ProductsListComponent)
    ).componentInstance;
    fixture.detectChanges();
  });

  it("should be created", () => {
    expect(component).toBeTruthy();
  });

  it("should render products", () => {
    component.products = [
      { id: 123, name: "Test 123", price: 150 },
      { id: 124, name: "Test 124", price: 1500 },
    ];
    fixture.detectChanges();
    expect(
      fixture.debugElement.queryAll(By.css(".list-group-item")).length
    ).toEqual(component.products.length);
  });

  it("should render custom product types with custom template", () => {
    component.products = [
      { id: 124, name: "Test 124", price: 200, type: "test" },
    ];
    fixture.detectChanges();
    expect(
      fixture.debugElement.query(By.css(".test-product")).nativeElement
        .textContent
    ).toContain("TEST TEMPLATE");
  });

  it("should render default template provided type has no template", () => {
    component.products = [
      { id: 124, name: "Test 124", price: 150, type: "outlet" },
    ];
    fixture.detectChanges();
    expect(
      fixture.debugElement.query(By.css(".test-product")).nativeElement
        .textContent
    ).toContain("DEFAULT OVERRIDE");
  });

  it("should render overriden default template if provided", () => {
    component.products = [{ id: 124, name: "Test 124", price: 150 }];
    fixture.detectChanges();
    expect(
      fixture.debugElement.query(By.css(".test-product")).nativeElement
        .textContent
    ).toContain("DEFAULT OVERRIDE");
  });
});
