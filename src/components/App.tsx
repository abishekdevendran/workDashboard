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
import AddNewUser from './AddNewUser';
import TasksView from './TasksView';
import EmployeesView from './EmployeesView';

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
                                    <AddNewUser />
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
                            path="/employeesView"
                            element={
                                <ProtectedRoute>
                                    <EmployeesView/>
                                </ProtectedRoute>
                            }
                        />
                        <Route path="/" element={<Home />} />
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
