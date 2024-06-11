import { Test } from '@nestjs/testing';
import { RamenService } from '../../src/ramen/ramen.service';
import { Model } from 'mongoose';
import { AuditService } from '../../src/audit/audit.service';
import { CreateRamanDto } from '../../src/ramen/dto/create-raman.dto';
import { UpdateRamanDto } from '../../src/ramen/dto/update-raman.dto';

describe('RamenService', () => {
  let service: RamenService;
  let model: Model<any>;
  let auditService: AuditService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        RamenService,
        {
          provide: 'RamanModel',
          useValue: {
            create: jest.fn().mockResolvedValue({}),
            find: jest.fn().mockResolvedValue([]),
            findOne: jest.fn().mockResolvedValue(
              {
                id: "test-id",
                name: 'Test Ramen',
                description: 'Delicious ramen',
                price: 10,
                spice_level: 5,
              },
            ),
            // findOne: jest.fn(),
            updateOne: jest.fn().mockResolvedValue(null),
          },
        },
        {
          provide: AuditService,
          useValue: {
            saveAudit: jest.fn().mockResolvedValue(null),
          },
        },
      ],
    }).compile();

    service = moduleRef.get<RamenService>(RamenService);
    model = moduleRef.get<Model<any>>('RamanModel');
    auditService = moduleRef.get<AuditService>(AuditService);
  });

  it('should create a ramen', async () => {
    const dto: CreateRamanDto = {
      name: 'Test Ramen',
      description: 'Delicious ramen',
      price: 10,
      spice_level: 5,
    };

    const result = await service.create(dto);

    expect(result).toEqual({
      statusCode: 201,
      msg: 'The ramen have been saved it !',
    });
    expect(model.create).toHaveBeenCalledWith({
      ...dto,
      id: expect.any(String),
    });
    expect(auditService.saveAudit).toHaveBeenCalledWith('Create Ramen', true);
  });

  it('should search for all ramens', async () => {
    const result = await service.findAll();

    expect(result).toEqual({
      statusCode: 200,
      data: { ramens: [] },
    });
    expect(model.find).toHaveBeenCalledWith({ isDeleted: false });
    expect(auditService.saveAudit).toHaveBeenCalledWith(
      'Find All Ramens',
      true,
    );
  });

  it('should find one ramen', async () => {
    const id = 'test-id';
    
    const result = await service.findOne(id);

    expect(result).toEqual({
      statusCode: 200,
      data: {
        ramen: {
          id: id,
          name: 'Test Ramen',
          description: 'Delicious ramen',
          price: 10,
          spice_level: 5,
        },
      },
    });
    expect(model.findOne).toHaveBeenCalledWith({ id: id, isDeleted: false });
    expect(auditService.saveAudit).toHaveBeenCalledWith('Find One Ramen', true);
  });

  // it('should update a ramen', async () => {
  //   const id = 'test-id';
  //   const dto: UpdateRamanDto = {
  //     name: 'Updated Ramen',
  //     description: 'Updated description',
  //     price: 15,
  //     spice_level: 7,
  //   };
  //   // model.findOne.mockResolvedValue({
  //   //   updateOne: jest.fn().mockResolvedValue(null),
  //   // });

  //   const result = await service.update(id, dto);

  //   expect(result).toEqual({
  //     statusCode: 200,
  //     msg: 'The ramen have been update it !',
  //   });
  //   expect(model.findOne).toHaveBeenCalledWith({ id: id, isDeleted: false });
  //   expect(auditService.saveAudit).toHaveBeenCalledWith('Update Ramen', true);
  // });

  // it('should remove a ramen', async () => {
  //   const id = 'test-id';
  //   // model.findOne.mockResolvedValue({
  //   //   isDeleted: false,
  //   //   updateOne: jest.fn().mockResolvedValue(null),
  //   // });

  //   const result = await service.remove(id);

  //   expect(result).toEqual({
  //     statusCode: 200,
  //     msg: 'The ramen have been delete it !',
  //   });
  //   expect(model.findOne).toHaveBeenCalledWith({ id: id, isDeleted: false });
  //   expect(auditService.saveAudit).toHaveBeenCalledWith('Remove Ramen', true);
  // });
});
