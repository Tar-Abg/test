import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WriteComentComponent } from './write-coment.component';

describe('WriteComentComponent', () => {
  let component: WriteComentComponent;
  let fixture: ComponentFixture<WriteComentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WriteComentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WriteComentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
