import { WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Server } from 'socket.io';
import {
  ConnectedSocket,
  MessageBody,
  SubscribeMessage,
} from '@nestjs/websockets';
import { Socket } from 'socket.io';
import { NewMessage } from './chat-channel.type';
import { ChatChannelService } from './chat-channel.service';

function channelIdRoom(id: string | number) {
  return 'ch_' + id;
}

@WebSocketGateway({
  cors: {
    origin: '*',
  },
})
export class ChatChannelGateway {
  @WebSocketServer()
  server: Server;
  constructor(private chatChannelService: ChatChannelService) {}

  @SubscribeMessage('connected_on_channel')
  connectToChannel(
    @ConnectedSocket() socket: Socket,
    @MessageBody() channelId: string,
  ) {
    socket.join(channelIdRoom(channelId));
  }

  @SubscribeMessage('new_message')
  async newMessage(
    @ConnectedSocket() socket: Socket,
    @MessageBody() message: NewMessage,
  ) {
    const newMessage = await this.chatChannelService.create({
      ...message,
      seenByUsersIds: [message.senderId],
    });
    this.server
      .to(channelIdRoom(message.channelId))
      .emit('new_message', newMessage);
  }
}
