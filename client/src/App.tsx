import { Suspense, useState } from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import Main from './components/Main';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Table from './pages/Table';
import ViewBuilder from './pages/Builder';

function App() {
  return (
    <div className="flex">
      <Sidebar />
      <Main>
        <BrowserRouter>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route index element={<Table />} />
              <Route path="/view-builder" element={<ViewBuilder />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </Main>
    </div>
  );
}

export default App;
