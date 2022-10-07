import { Toaster } from 'react-hot-toast';
import { QueryClientProvider, QueryClient } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { UserContextProvider } from '../contexts/userContext';
import AntiProtectedRoute from './AntiProtectedRoute';
import Dashboard from './Dashboard';
import Home from './Home';
import Login from './Login';
import ProtectedRoute from './ProtectedRoute';
import Register from './Register';

const queryClient = new QueryClient();

const App = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <UserContextProvider>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route
                            path="/login"
                            element={
                                <AntiProtectedRoute>
                                    <Login />
                                </AntiProtectedRoute>
                            }
                        />
                        <Route
                            path="/signup"
                            element={
                                <AntiProtectedRoute>
                                    <Register />
                                </AntiProtectedRoute>
                            }
                        />
                        <Route
                            path="/dashboard"
                            element={
                                <ProtectedRoute>
                                    <Dashboard />
                                </ProtectedRoute>
                            }
                        />
                    </Routes>
                </BrowserRouter>
            </UserContextProvider>
            <Toaster
                toastOptions={{
                    className: 'rounded-full'
                }}
            />
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    );
};

export default App;
