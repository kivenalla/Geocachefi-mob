import { Test, TestingModule } from '@nestjs/testing';
import { GeocachingApiService } from './geocaching-api.service';

describe('GeocachingApiService', () => {
  let service: GeocachingApiService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GeocachingApiService],
    }).compile();

    service = module.get<GeocachingApiService>(GeocachingApiService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
