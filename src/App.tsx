import React from 'react';
import { ReactQueryDevtools } from 'react-query/devtools'
import Dogs from './pages/Dogs';
import {
   QueryClient,
   QueryClientProvider,
 } from 'react-query'

const queryClient = new QueryClient()

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Dogs />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
