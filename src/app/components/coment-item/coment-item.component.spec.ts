import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComentItemComponent } from './coment-item.component';

describe('ComentItemComponent', () => {
  let component: ComentItemComponent;
  let fixture: ComponentFixture<ComentItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComentItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComentItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
