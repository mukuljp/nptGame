import { TestBed, inject } from '@angular/core/testing';

import { GameCommunicationService } from './game-communication.service';

describe('GameCommunicationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GameCommunicationService]
    });
  });

  it('should be created', inject([GameCommunicationService], (service: GameCommunicationService) => {
    expect(service).toBeTruthy();
  }));
});
