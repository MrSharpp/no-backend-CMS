import { Suspense, useState } from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import Main from './components/Main';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Table from './pages/Table';
import ViewBuilder from './pages/Builder/Builder';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { MantineProvider } from '@mantine/core';
import { ModalsProvider } from '@mantine/modals';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { trpc } from './util/trpc';
import { httpBatchLink } from '@trpc/react-query';

function App() {
  const [queryClient] = useState(() => new QueryClient());
  const [trpcClient] = useState(() =>
    trpc.createClient({
      links: [
        httpBatchLink({
          url: 'http://localhost:4000/trpc',
        }),
      ],
    })
  );

  return (
    <div className="flex">
      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <MantineProvider>
            <ModalsProvider>
              <Provider store={store}>
                <trpc.Provider client={trpcClient} queryClient={queryClient}>
                  <QueryClientProvider client={queryClient}>
                    <Sidebar />
                    <Main>
                      <Routes>
                        <Route index element={<Table />} />
                        <Route path="/table/:view" element={<Table />} />
                        <Route path="/view-builder" element={<ViewBuilder />} />
                      </Routes>
                    </Main>
                  </QueryClientProvider>
                </trpc.Provider>
              </Provider>
            </ModalsProvider>
          </MantineProvider>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
function getAuthCookie(): string | string[] | undefined {
  throw new Error('Function not implemented.');
}
