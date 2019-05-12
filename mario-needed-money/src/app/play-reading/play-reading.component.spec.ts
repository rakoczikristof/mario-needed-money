import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayReadingComponent } from './play-reading.component';

describe('PlayReadingComponent', () => {
  let component: PlayReadingComponent;
  let fixture: ComponentFixture<PlayReadingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayReadingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayReadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
