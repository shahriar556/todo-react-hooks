import  {createContext} from 'react';

const {Provider, Consumer} = createContext();

export {Consumer as AuthConsumer, Provider as AuthProvider};