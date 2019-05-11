import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayMathComponent } from './play-math.component';

describe('PlayMathComponent', () => {
  let component: PlayMathComponent;
  let fixture: ComponentFixture<PlayMathComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayMathComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayMathComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
