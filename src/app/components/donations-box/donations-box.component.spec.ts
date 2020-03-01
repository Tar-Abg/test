import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DonationsBoxComponent } from './donations-box.component';

describe('DonationsBoxComponent', () => {
  let component: DonationsBoxComponent;
  let fixture: ComponentFixture<DonationsBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonationsBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DonationsBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
