import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SocketModule } from './socket/socket.module';
import { PrismaModule } from './prisma/prisma.module';
import { EventModule } from './event/event.module';
import { SensorModule } from './sensor/sensor.module';
import { MqttModule } from './mqtt/mqtt.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    SocketModule,
    PrismaModule,
    EventModule,
    SensorModule,
    MqttModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
