import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Sensor } from './sensor.Dto';
@Injectable()
export class SensorService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return await this.prisma.sensor.findMany();
  }

  async insert(sensor: Sensor) {
    return await this.prisma.sensor.create({
      data: sensor,
    });
  }
}
