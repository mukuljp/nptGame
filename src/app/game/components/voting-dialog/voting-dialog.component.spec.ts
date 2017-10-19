import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VotingDialogComponent } from './voting-dialog.component';

describe('VotingDialogComponent', () => {
  let component: VotingDialogComponent;
  let fixture: ComponentFixture<VotingDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VotingDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VotingDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
