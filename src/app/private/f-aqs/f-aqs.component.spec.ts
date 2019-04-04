import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FAQsComponent } from './f-aqs.component';

describe('FAQsComponent', () => {
  let component: FAQsComponent;
  let fixture: ComponentFixture<FAQsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FAQsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FAQsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
