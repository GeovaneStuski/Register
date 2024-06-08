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

  function handleRemoveToast(id) {
    setMessages((PrevState) => PrevState.filter(
      (message) => message.id !== id,
    ));
  }
  return (
    <Container>
      {messages.map((message) => (
        <ToastMessage
          key={message.id}
          message={message}
          onRemoveToast={handleRemoveToast}
        />
      ))}
    </Container>
  );
}
