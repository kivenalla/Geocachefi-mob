import { Test, TestingModule } from '@nestjs/testing';
import { GeocachesController } from './geocaches.controller';
import { GeocachesService } from '../geocaches.service';
import { UnauthorizedException } from '@nestjs/common';

describe('GeocachesController', () => {
  let controller: GeocachesController;
  let service: GeocachesService;

  const mockGeocachesService = {
    getGeocache: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GeocachesController],
      providers: [
        {
          provide: GeocachesService,
          useValue: mockGeocachesService,
        },
      ],
    }).compile();

    controller = module.get<GeocachesController>(GeocachesController);
    service = module.get<GeocachesService>(GeocachesService);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('getGeocache', () => {
    const mockGeocache = {
      referenceCode: 'GC12345',
      name: 'Test Cache',
      geocacheType: { id: 2, name: 'Traditional Cache' },
    };

    it('should return a geocache when access token is in user object', async () => {
      const mockRequest = {
        user: { geocachingAccessToken: 'valid-token' },
      } as any;

      mockGeocachesService.getGeocache.mockResolvedValue(mockGeocache);

      const result = await controller.getGeocache('GC12345', mockRequest);

      expect(result).toEqual(mockGeocache);
      expect(service.getGeocache).toHaveBeenCalledWith('valid-token', 'GC12345', undefined, undefined);
    });

    it('should return a geocache when access token is in cookies', async () => {
      const mockRequest = {
        user: {},
        cookies: { gc_at: 'cookie-token' },
      } as any;

      mockGeocachesService.getGeocache.mockResolvedValue(mockGeocache);

      const result = await controller.getGeocache('GC12345', mockRequest);

      expect(result).toEqual(mockGeocache);
      expect(service.getGeocache).toHaveBeenCalledWith('cookie-token', 'GC12345', undefined, undefined);
    });

    it('should throw UnauthorizedException when no access token is found', async () => {
      const mockRequest = {
        user: {},
        cookies: {},
      } as any;

      await expect(
        controller.getGeocache('GC12345', mockRequest)
      ).rejects.toThrow(UnauthorizedException);

      expect(service.getGeocache).not.toHaveBeenCalled();
    });

    it('should prioritize user token over cookie token', async () => {
      const mockRequest = {
        user: { geocachingAccessToken: 'user-token' },
        cookies: { gc_at: 'cookie-token' },
      } as any;

      mockGeocachesService.getGeocache.mockResolvedValue(mockGeocache);

      await controller.getGeocache('GC12345', mockRequest);

      expect(service.getGeocache).toHaveBeenCalledWith('user-token', 'GC12345', undefined, undefined);
    });

    it('should pass fields and expand parameters to service', async () => {
      const mockRequest = {
        user: { geocachingAccessToken: 'valid-token' },
      } as any;

      mockGeocachesService.getGeocache.mockResolvedValue(mockGeocache);

      await controller.getGeocache('GC12345', mockRequest, 'name,difficulty', 'images,trackables');

      expect(service.getGeocache).toHaveBeenCalledWith(
        'valid-token',
        'GC12345',
        ['name', 'difficulty'],
        ['images', 'trackables']
      );
    });
  });
});