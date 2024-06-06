import { useEffect, useState } from 'react';
import Container from './styles';
import ToastMessage from '../ToastMessage';

import { toastEventManager } from '../../../../utils/toast';

export default function ToastContainer() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    function handleAddToast({ type, text }) {
      setMessages((PrevState) => [...PrevState, {
        id: Math.random(), type, text,
      }]);
    }

    toastEventManager.on('addtoast', handleAddToast);

    return () => {
      toastEventManager.removeListeners('addtoast', handleAddToast);
    };
  }, []);

  return (
    <Container>
      {messages.map((message) => (
        <ToastMessage
          message={message}
        />
      ))}
    </Container>
  );
}
