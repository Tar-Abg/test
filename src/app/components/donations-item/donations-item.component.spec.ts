import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DonationsItemComponent } from './donations-item.component';

describe('DonationsItemComponent', () => {
  let component: DonationsItemComponent;
  let fixture: ComponentFixture<DonationsItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonationsItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DonationsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
