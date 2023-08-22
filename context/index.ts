import { createContext, useState } from 'react';


interface ContextPropsTypes {
  children: React.ReactNode;
}

export const MessageData = createContext(null);

function Context({ children }: ContextPropsTypes) {
  const [message, setMessage] = useState();

  // return (
  //   <Message_data.Provider value={{ message, setMessage }}>
  //     {children}
  //   </Message_data.Provider>
  // );
  return (
    <MessageData>
  )
}
