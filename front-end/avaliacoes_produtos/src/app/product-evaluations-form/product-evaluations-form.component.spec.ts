import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductEvaluationsFormComponent } from './product-evaluations-form.component';

describe('ProductEvaluationsFormComponent', () => {
  let component: ProductEvaluationsFormComponent;
  let fixture: ComponentFixture<ProductEvaluationsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductEvaluationsFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductEvaluationsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
