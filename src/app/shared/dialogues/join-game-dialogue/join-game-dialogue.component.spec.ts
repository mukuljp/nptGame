import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinGameDialogueComponent } from './join-game-dialogue.component';

describe('JoinGameDialogueComponent', () => {
  let component: JoinGameDialogueComponent;
  let fixture: ComponentFixture<JoinGameDialogueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JoinGameDialogueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JoinGameDialogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
