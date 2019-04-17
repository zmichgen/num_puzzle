import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FishkaComponent } from './fishka.component';

describe('FishkaComponent', () => {
  let component: FishkaComponent;
  let fixture: ComponentFixture<FishkaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FishkaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FishkaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
