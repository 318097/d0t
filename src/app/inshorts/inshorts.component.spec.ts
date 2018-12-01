import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InshortsComponent } from './inshorts.component';

describe('InshortsComponent', () => {
  let component: InshortsComponent;
  let fixture: ComponentFixture<InshortsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InshortsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InshortsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
