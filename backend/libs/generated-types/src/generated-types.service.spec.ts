import { Test, TestingModule } from '@nestjs/testing';
import { GeneratedTypesService } from './generated-types.service';

describe('GeneratedTypesService', () => {
  let service: GeneratedTypesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GeneratedTypesService],
    }).compile();

    service = module.get<GeneratedTypesService>(GeneratedTypesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
