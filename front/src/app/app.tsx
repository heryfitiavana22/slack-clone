import { PropsWithChildren } from 'react';
import { RouterDom } from './router-dom';
import { ApolloClientProvider } from './components/apollo-client/apollo-client-provider';
import { AuthProvider } from './auth/auth-provider';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function App({}: AppProps) {
  return (
    <ApolloClientProvider>
      <AuthProvider>
        <RouterDom />
      </AuthProvider>
      <ToastContainer position='bottom-left'/>
    </ApolloClientProvider>
  );
}

type AppProps = PropsWithChildren<{}>;
