import React from 'react';
import { Delete, Notification } from 'bloomer';

export default function(props) {
  let { notification, hideNotification } = props;

  if (notification.message && notification.message.length === 0) return '';

  return (
    <Notification isHidden={!notification.message} isColor={notification.color}>
      <Delete onClick={hideNotification} />
      {notification.message}
    </Notification>
  );
}
