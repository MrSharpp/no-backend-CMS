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

function App() {
  return (
    <div className="flex">
      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <MantineProvider>
            <ModalsProvider>
              <Provider store={store}>
                <Sidebar />
                <Main>
                  <Routes>
                    <Route index element={<Table />} />
                    <Route path="/table/:view" element={<Table />} />
                    <Route path="/view-builder" element={<ViewBuilder />} />
                  </Routes>
                </Main>
              </Provider>
            </ModalsProvider>
          </MantineProvider>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
