import { Toaster } from 'react-hot-toast';
import { QueryClientProvider, QueryClient } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { UserContextProvider } from '../contexts/userContext';
// import { EmployeeContextProvider } from '../contexts/employeeContext';
import AntiProtectedRoute from './AntiProtectedRoute';
import Dashboard from './Dashboard';
import Home from './Home';
import Login from './Login';
import ProtectedRoute from './ProtectedRoute';
import TasksView from './TasksView';
import EmployeesView from './EmployeesView';
import Register from './Register';
import EmployeeView from './EmployeeView';
import CatchAll from './CatchAll';

const queryClient = new QueryClient();

const App = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <UserContextProvider>
                {/* <EmployeeContextProvider> */}
                <BrowserRouter>
                    <Routes>
                        <Route
                            path="/login"
                            element={
                                <AntiProtectedRoute>
                                    <Login />
                                </AntiProtectedRoute>
                            }
                        />
                        <Route
                            path="/register"
                            element={
                                <ProtectedRoute>
                                    <Register />
                                </ProtectedRoute>
                            }
                        />
                        <Route
                            path="/taskview"
                            element={
                                <ProtectedRoute>
                                    <TasksView />
                                </ProtectedRoute>
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
                        <Route
                            path="/employeesView">
                            <Route
                                path=":id"
                                element={
                                    <ProtectedRoute>
                                        <EmployeeView />
                                    </ProtectedRoute>
                                }
                            />
                            <Route
                            path=""
                            element={
                                <ProtectedRoute>
                                    <EmployeesView />
                                </ProtectedRoute>
                            }></Route>
                        </Route>
                        <Route
                            path="/"
                            element={
                                <AntiProtectedRoute>
                                    <Home />
                                </AntiProtectedRoute>
                            }
                        />
                        {/* catchall route */}
                        <Route path="*" element={<CatchAll />} />
                    </Routes>
                </BrowserRouter>
                {/* </EmployeeContextProvider> */}
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
