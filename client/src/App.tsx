import { Suspense, useState } from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import Main from './components/Main';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Table from './pages/Table';
import ViewBuilder from './pages/Builder/Builder';
import { Provider } from 'react-redux';
import { store } from './store/store';

function App() {
  return (
    <div className="flex">
      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <Provider store={store}>
            <Sidebar />
            <Main>
              <Routes>
                <Route index element={<Table />} />
                <Route path="/view-builder" element={<ViewBuilder />} />
              </Routes>
            </Main>
          </Provider>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
