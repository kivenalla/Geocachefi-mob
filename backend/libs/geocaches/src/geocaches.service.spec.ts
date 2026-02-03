import { Test, TestingModule } from '@nestjs/testing';
import { GeocachesService } from './geocaches.service';
import { GeocachingApiService } from '@app/geocaching-api/geocaching-api.service';
import { NotFoundException, InternalServerErrorException } from '@nestjs/common';
import axios from 'axios';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('GeocachesService', () => {
  let service: GeocachesService;
  let geocachingApiService: GeocachingApiService;

  const mockGeocachingApiService = {
    getBaseApiUrl: jest.fn().mockReturnValue('https://api.groundspeak.com'),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        GeocachesService,
        {
          provide: GeocachingApiService,
          useValue: mockGeocachingApiService,
        },
      ],
    }).compile();

    service = module.get<GeocachesService>(GeocachesService);
    geocachingApiService = module.get<GeocachingApiService>(GeocachingApiService);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('getGeocache', () => {
    const mockGeocache = {
      referenceCode: 'GC12345',
      name: 'Test Cache',
      geocacheType: { id: 2, name: 'Traditional Cache' },
    };

    it('should successfully fetch a geocache', async () => {
      mockedAxios.get.mockResolvedValue({ data: mockGeocache });

      const result = await service.getGeocache('valid-token', 'GC12345');

      expect(result).toEqual(mockGeocache);
      expect(mockedAxios.get).toHaveBeenCalledWith(
        'https://api.groundspeak.com/v1/geocaches/GC12345',
        {
          headers: {
            Authorization: 'Bearer valid-token',
            'Content-Type': 'application/json',
          },
        }
      );
      expect(geocachingApiService.getBaseApiUrl).toHaveBeenCalled();
    });

    it('should fetch a geocache with fields parameter', async () => {
      mockedAxios.get.mockResolvedValue({ data: mockGeocache });

      await service.getGeocache('valid-token', 'GC12345', ['name', 'difficulty']);

      expect(mockedAxios.get).toHaveBeenCalledWith(
        'https://api.groundspeak.com/v1/geocaches/GC12345?fields=name%2Cdifficulty',
        {
          headers: {
            Authorization: 'Bearer valid-token',
            'Content-Type': 'application/json',
          },
        }
      );
    });

    it('should fetch a geocache with expand parameter', async () => {
      mockedAxios.get.mockResolvedValue({ data: mockGeocache });

      await service.getGeocache('valid-token', 'GC12345', undefined, ['images', 'trackables']);

      expect(mockedAxios.get).toHaveBeenCalledWith(
        'https://api.groundspeak.com/v1/geocaches/GC12345?expand=images%2Ctrackables',
        {
          headers: {
            Authorization: 'Bearer valid-token',
            'Content-Type': 'application/json',
          },
        }
      );
    });

    it('should fetch a geocache with both fields and expand parameters', async () => {
      mockedAxios.get.mockResolvedValue({ data: mockGeocache });

      await service.getGeocache('valid-token', 'GC12345', ['name'], ['images']);

      expect(mockedAxios.get).toHaveBeenCalledWith(
        'https://api.groundspeak.com/v1/geocaches/GC12345?fields=name&expand=images',
        {
          headers: {
            Authorization: 'Bearer valid-token',
            'Content-Type': 'application/json',
          },
        }
      );
    });

    it('should throw NotFoundException when geocache is not found', async () => {
      mockedAxios.get.mockRejectedValue({
        isAxiosError: true,
        response: { status: 404, data: { message: 'Not found' } },
      });
      mockedAxios.isAxiosError.mockReturnValue(true);

      await expect(
        service.getGeocache('valid-token', 'GC99999')
      ).rejects.toThrow(NotFoundException);
    });

    it('should throw InternalServerErrorException on other errors', async () => {
      mockedAxios.get.mockRejectedValue({
        isAxiosError: true,
        response: { status: 500, data: { message: 'Server error' } },
        message: 'Request failed',
      });
      mockedAxios.isAxiosError.mockReturnValue(true);

      await expect(
        service.getGeocache('valid-token', 'GC12345')
      ).rejects.toThrow(InternalServerErrorException);
    });

    it('should throw InternalServerErrorException on network error', async () => {
      mockedAxios.get.mockRejectedValue(new Error('Network error'));
      mockedAxios.isAxiosError.mockReturnValue(false);

      await expect(
        service.getGeocache('valid-token', 'GC12345')
      ).rejects.toThrow(InternalServerErrorException);
    });
  });
});