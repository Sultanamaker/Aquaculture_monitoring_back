import { Module } from '@nestjs/common';
import { MqttService } from './mqtt.service';
import { SocketModule } from 'src/socket/socket.module';

@Module({
  imports:[SocketModule],
  providers: [MqttService]
})
export class MqttModule {}
