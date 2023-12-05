import { Injectable } from '@nestjs/common';
import * as mqtt from 'mqtt';
import { SocketService } from 'src/socket/socket.service';

interface STATE {
    temperature:String;
    density :String;
    dissolved_oxygen:String;
    turbidity: String;
    ph_level: String;
}

@Injectable()
export class MqttService {
  private client: mqtt.MqttClient;
  private data:STATE = {
    temperature:'',
    density :'',
    dissolved_oxygen:'',
    turbidity: '',
    ph_level: '',
  }

  constructor(
    private socketService: SocketService,
  ) {
    this.client = mqtt.connect('mqtt://test.mosquitto.org'),
    this.client.on('connect', this.onConnect.bind(this));
    this.client.on('message', this.onMessage.bind(this));
  }

  onConnect() {
    console.log('connected');
    this.client.subscribe('esp32/fish_project');
  }

  onMessage(topic: string, message: string) {
    console.log('message arrived');
    const payload =  message.toString().split(';')
    this.data.temperature = payload[0];
    this.data.density = payload[1];
    this.data.dissolved_oxygen = payload[2];
    this.data.turbidity = payload[3];
    this.data.ph_level = payload[4];
    this.socketService.send('fish_data',JSON.stringify(this.data));
  }
}
