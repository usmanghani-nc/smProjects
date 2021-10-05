import { useState, useContext, createContext } from 'react';

const Context = createContext();

export const movieContext = () => useContext(Context);

export default function MyContext({ children }) {
  const [state, setState] = useState({
    data: [],
    ke2: 'is,amasa',
  });

  return <Context.Provider value={{ state, setState }}>{children}</Context.Provider>;
}
