import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateGameDialogueComponent } from './create-game-dialogue.component';

describe('CreateGameDialogueComponent', () => {
  let component: CreateGameDialogueComponent;
  let fixture: ComponentFixture<CreateGameDialogueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateGameDialogueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateGameDialogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
