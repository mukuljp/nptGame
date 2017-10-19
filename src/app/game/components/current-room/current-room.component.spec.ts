import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentRoomComponent } from './current-room.component';

describe('CurrentRoomComponent', () => {
  let component: CurrentRoomComponent;
  let fixture: ComponentFixture<CurrentRoomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentRoomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
