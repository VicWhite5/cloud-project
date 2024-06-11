import { Test } from '@nestjs/testing';
import { CreateRamanDto } from '../../src/ramen/dto/create-raman.dto';
import { RamenController } from '../../src/ramen/ramen.controller';
import { RamenService } from '../../src/ramen/ramen.service';
import { UpdateRamanDto } from '../../src/ramen/dto/update-raman.dto';

describe('RamenController', () => {
  let controller: RamenController;
  let service: RamenService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      controllers: [RamenController],
      providers: [
        {
          provide: RamenService,
          useValue: {
            create: jest.fn(),
            findAll: jest.fn(),
            findOne: jest.fn(),
            update: jest.fn(),
            remove: jest.fn(),
          },
        },
      ],
    }).compile();

    controller = module.get<RamenController>(RamenController);
    service = module.get<RamenService>(RamenService);
  });

  it('should call the create method of the service with the correct parameters', async () => {
    const dto = new CreateRamanDto();
    await controller.create(dto);
    expect(service.create).toHaveBeenCalledWith(dto);
  });

  it('should call the find all method of the service with the correct parameters', async () => {
    await controller.findAll();
    expect(service.findAll).toHaveBeenCalled();
  });

  it('should call the find method of the service with the correct parameters', async () => {
    const id: string = 'test-id';
    await controller.findOne(id);
    expect(service.findOne).toHaveBeenCalledWith(id);
  });

  it('should call the update method of the service with the correct parameters', async () => {
    const id = 'test-id';
    const dto = new UpdateRamanDto();
    await controller.update(id, dto);
    expect(service.update).toHaveBeenCalledWith(id, dto);
  });

  it('should call the remove method of the service with the correct parameters', async () => {
    const id = 'test-id';
    await controller.remove(id);
    expect(service.remove).toHaveBeenCalledWith(id);
  });
});
