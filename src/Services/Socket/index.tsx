import { TUserProfile as userType } from '@/Types';
import React, { useState } from 'react';
import io from 'socket.io-client';
import { EventRegister } from 'react-native-event-listeners';
import { getStore } from '@/Redux/Store';
// import NotificationStorageActions from '@/ReduxManager/NotificationStorage/NotificationStorageActions';
// import ChatStorageActions from '@/ReduxManager/ChatStorage/ChatStorageActions';

export const useSocket = () => {
  const [socket, setSocket] = useState<any>();
  const store = getStore();

  const init = (TUserProfile: userType) => {
    const socket = io('https://socket.demomxh.work/');
    // let socket = io( 'https://2183-58-186-101-178.ngrok.io/')
    setSocket(socket);
    socket?.emit?.('setSocketId', `${TUserProfile?._id}`);
    socket?.emit?.('login', { userId: TUserProfile?._id });
    socket?.on?.('setSocketId', (msg: any) => {
      console.log('setSocket', msg);
    });
    socket?.on?.('user-online', msg => {
      console.log('socket userOnline  ', msg);
    });
    socket?.on?.('io_group_member_request', (msg: any) => {
      EventRegister.emit('reloadListNotiFy', msg);
      EventRegister.emit('group-manage', msg);
      //   store.dispatch(NotificationStorageActions.saveNotification(msg.count));
    });
    socket?.on?.('io_group_member_accept', (msg: any) => {
      EventRegister.emit('reloadListNotiFy', msg);
      //   store.dispatch(NotificationStorageActions.saveNotification(msg.count));
    });
    socket?.on?.('io_group_admin_invite_member', (msg: any) => {
      EventRegister.emit('reloadListNotiFy', msg);
      //   store.dispatch(NotificationStorageActions.saveNotification(msg.count));
    });
    socket?.on?.('io_group_admin_accept_member', (msg: any) => {
      EventRegister.emit('reloadListNotiFy', msg);
      //   store.dispatch(NotificationStorageActions.saveNotification(msg.count));
    });
    socket?.on?.('io_post_like', (msg: any) => {
      EventRegister.emit('reloadListNotiFy', msg);
      console.log(' socket msg like comment', msg);
      //   store.dispatch(NotificationStorageActions.saveNotification(msg.count));
    });
    socket?.on?.('io_post_comment', (msg: any) => {
      EventRegister.emit('reloadListNotiFy', msg);
      console.log('socket comment msg', msg);
      //   store.dispatch(NotificationStorageActions.saveNotification(msg.count));
    });
    socket?.on?.('io_account_login_duplicate', (msg: any) => {
      EventRegister.emit('my-event', msg);
    });
    socket?.on?.('io_conversion_create', (msg: any) => {
      EventRegister.emit('my-event', msg);
    });
    socket?.on?.('io_conversion_add_member', (msg: any) => {
      EventRegister.emit('my-event', msg);
    });
    socket?.on?.('io_conversion_leave', (msg: any) => {
      EventRegister.emit('my-event', msg);
    });
    socket?.on?.('io_conversion_remove_member', (msg: any) => {
      EventRegister.emit('my-event', msg);
    });
    socket?.on?.('join-room', (msg: any) => {
      EventRegister.emit('my-event', msg);
    });
    socket?.on?.('get_message', (msg: any) => {
      EventRegister.emit('get_message', msg);
      console.log('socket get ms chat', msg);
    });
    socket?.on?.('is_typing', (msg: any) => {
      EventRegister.emit('reloadListNotiFy', msg);
    });
    socket?.on?.('io_relationship_approve', (msg: any) => {
      EventRegister.emit('reloadListNotiFy', msg);
      //   store.dispatch(NotificationStorageActions.saveNotification(msg.count));
    });
    socket?.on?.('io_relationship_request', (msg: any) => {
      EventRegister.emit('reloadListNotiFy', msg);
      console.log('msg request friend', msg);
      //   store.dispatch(NotificationStorageActions.saveNotification(msg.count));
    });
    socket?.on?.('io_user_read_noti', (msg: any) => {
      console.log('read notify', msg);
    });
    socket?.on?.('io_user_send_message', (msg: any) => {
      console.log('listen to new message', msg);
      EventRegister.emit('io_user_send_message', msg);
      //   store.dispatch(ChatStorageActions.countUnreadChat(msg.countNotRead));
    });
  };

  const joinRoom = (user: any, roomId: number) => {
    console.log('join rooom', {
      user: user,
      roomId: roomId,
    });
    socket?.emit?.('joinRoom', {
      user: user,
      roomId: roomId,
    });
    socket?.on?.('userJoin', (msg: any) => {
      console.log('userJoin', msg);
    });
  };
  const likeShare = () => {
    socket?.on?.('io_post_action', (msg: any) => {
      console.log('io_post_action', msg);
    });
  };

  const socketOn = (key: string) => {
    socket?.on?.(key, (msg: any) => {
      console.log(key, msg);
    });
  };

  const socketEmit = (key: string, params: object) => {
    socket?.emit?.(key, params);
  };

  return {
    socket,
    init,
    joinRoom,
    likeShare,
    socketOn,
    socketEmit,
  };
};

export const SocketContext = React.createContext({});
