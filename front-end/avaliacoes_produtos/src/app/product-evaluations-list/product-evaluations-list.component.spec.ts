import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductEvaluationsListComponent } from './product-evaluations-list.component';

describe('ProductEvaluationsListComponent', () => {
  let component: ProductEvaluationsListComponent;
  let fixture: ComponentFixture<ProductEvaluationsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductEvaluationsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductEvaluationsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
