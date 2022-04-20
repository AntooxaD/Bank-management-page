import './App.css';
import Calculator from './Components/Calculator/Calculator';
import AppBar from './Components/AppBar';
import { Route, Routes, Navigate } from 'react-router-dom';
import { Suspense } from 'react';
import { Skeleton } from '@mui/material';
import BanksView from './Components/BanksView/BanksView';

function App() {
    return (
        <>
            <AppBar />
            <Routes>
                <Route
                    path="/"
                    element={
                        <Suspense fallback={<Skeleton />}>
                            <BanksView />
                        </Suspense>
                    }
                />
                <Route
                    path="/calculator"
                    element={
                        <Suspense fallback={<Skeleton />}>
                            <Calculator />
                        </Suspense>
                    }
                />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </>
    );
}

export default App;
