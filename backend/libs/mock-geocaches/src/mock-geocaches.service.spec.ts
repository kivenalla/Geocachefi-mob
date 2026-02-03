import { Test, TestingModule } from '@nestjs/testing';
import { MockGeocachesService } from './mock-geocaches.service';

describe('MockGeocachesService', () => {
  let service: MockGeocachesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MockGeocachesService],
    }).compile();

    service = module.get<MockGeocachesService>(MockGeocachesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
