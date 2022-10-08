import toast from 'react-hot-toast';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { useState } from 'react';

const loginFetch = (formData: any) => {
    return toast.promise(
        fetch('/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include',
            body: JSON.stringify(formData)
        })
            .then((res) => {
                if (res.status === 404) {
                    throw Error('404 Not Found');
                } else if (res.status === 500) {
                    throw Error('500 Internal Server Error');
                } else if (res.status === 503) {
                    throw Error('503 Service Unavailable');
                } else if (!res.ok) {
                    throw Error('An unknown error occured');
                }
                return res.json();
            })
            .then((res) => {
                if (res.message === 'Success') {
                    return res;
                } else {
                    throw Error(res.message);
                }
            }),
        {
            loading: 'Logging in...',
            success: 'Logged in successfully!',
            error: (err) => err.message
        }
    );
};

const logoutFetch = () => {
    return toast.promise(
        fetch('/api/logout', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include'
        })
            .then((res) => {
                if (res.status === 404) {
                    throw Error('404 Not Found');
                } else if (res.status === 500) {
                    throw Error('500 Internal Server Error');
                } else if (res.status === 503) {
                    throw Error('503 Service Unavailable');
                } else if (!res.ok) {
                    throw Error('An unknown error occured');
                }
                return res.json();
            })
            .then((res) => {
                if (res.message === 'Success') {
                    return res;
                } else {
                    throw Error(res.message);
                }
            }),
        {
            loading: 'Logging out...',
            success: 'Logged out successfully!',
            error: (err) => err.message
        }
    );
};

const employeeRegister = (formData: any) => {
    return toast.promise(
        fetch('/api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include',
            body: JSON.stringify(formData)
        })
            .then((res) => {
                if (res.status === 404) {
                    throw Error('404 Not Found');
                } else if (res.status === 500) {
                    throw Error('500 Internal Server Error');
                } else if (res.status === 503) {
                    throw Error('503 Service Unavailable');
                } else if (!res.ok) {
                    throw Error('An unknown error occured');
                }
                return res.json();
            })
            .then((res) => {
                if (res.message === 'Success') {
                    return res;
                } else {
                    throw Error(res.message);
                }
            }),
        {
            loading: 'Signing up...',
            success: 'Signed up successfully!',
            error: (err) => err.message
        }
    );
};

const employeeFetch = () => {
    return fetch('/api/employees/all', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        credentials: 'include'
    })
        .then((res) => {
            if (res.status === 404) {
                throw Error('404 Not Found');
            } else if (res.status === 500) {
                throw Error('500 Internal Server Error');
            } else if (res.status === 503) {
                throw Error('503 Service Unavailable');
            } else if (!res.ok) {
                throw Error('An unknown error occured');
            }
            return res.json();
        })
        .then((res) => {
            if (res.message === 'Success') {
                return res;
            } else {
                throw Error(res.message);
            }
        });
};

const employeeDelete = (id: string) => {
    return toast.promise(
        fetch('/api/employees/delete', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: id
            }),
            credentials: 'include'
        })
            .then((res) => {
                if (res.status === 404) {
                    throw Error('404 Not Found');
                } else if (res.status === 500) {
                    throw Error('500 Internal Server Error');
                } else if (res.status === 503) {
                    throw Error('503 Service Unavailable');
                } else if (!res.ok) {
                    throw Error('An unknown error occured');
                }
                return res.json();
            })
            .then((res) => {
                if (res.message === 'Success') {
                    return res;
                } else {
                    throw Error(res.message);
                }
            }),
        {
            loading: 'Deleting employee...',
            success: 'Employee deleted...',
            error: (err) => err.message
        }
    );
};

const getUserFetch = () => {
    return fetch('/api/user', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        credentials: 'include'
    })
        .then((res) => {
            if (res.status === 404) {
                throw Error('404 Not Found');
            } else if (res.status === 500) {
                throw Error('500 Internal Server Error');
            } else if (res.status === 503) {
                throw Error('503 Service Unavailable');
            } else if (!res.ok) {
                throw Error('An unknown error occured');
            }
            return res.json();
        })
        .then((res) => {
            if (res.message === 'Success') {
                return res;
            } else {
                throw Error(res.message);
            }
        })
        .then((res) => {
            if (res?.user) {
                toast.success('Welcome back ' + res.user.username + '!');
            }
            return res;
        });
};

const tasksFetch = () => {
    return fetch('/api/tasks/', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        credentials: 'include'
    })
        .then((res) => {
            if (res.status === 404) {
                throw Error('404 Not Found');
            } else if (res.status === 500) {
                throw Error('500 Internal Server Error');
            } else if (res.status === 503) {
                throw Error('503 Service Unavailable');
            } else if (!res.ok) {
                throw Error('An unknown error occured');
            }
            return res.json();
        })
        .then((res) => {
            if (res.message === 'Success') {
                return res;
            } else {
                throw Error(res.message);
            }
        });
};

const tasksFetchId = (id: string) => {
    console.log(id);
    return toast.promise(
        fetch('/api/tasks/' + id, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include'
        })
            .then((res) => {
                if (res.status === 404) {
                    throw Error('404 Not Found');
                } else if (res.status === 500) {
                    throw Error('500 Internal Server Error');
                } else if (res.status === 503) {
                    throw Error('503 Service Unavailable');
                } else if (!res.ok) {
                    throw Error('An unknown error occured');
                }
                return res.json();
            })
            .then((res) => {
                if (res.message === 'Success') {
                    return res;
                } else {
                    throw Error(res.message);
                }
            }),
        {
            loading: 'Fetching tasks for user with id ' + id + '.',
            success: 'Done fetching!',
            error: (err) => err.message
        }
    );
};

const tasksMutateAdd = (formData: any) => {
    return toast.promise(
        fetch('/api/tasks/new', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include',
            body: JSON.stringify(formData)
        })
            .then((res) => {
                if (res.status === 404) {
                    throw Error('404 Not Found');
                } else if (res.status === 500) {
                    throw Error('500 Internal Server Error');
                } else if (res.status === 503) {
                    throw Error('503 Service Unavailable');
                } else if (!res.ok) {
                    throw Error('An unknown error occured');
                }
                return res.json();
            })
            .then((res) => {
                if (res.message === 'Success') {
                    return res;
                } else {
                    throw Error(res.message);
                }
            }),
        {
            loading: 'Adding task...',
            success: 'Task created successfully!',
            error: (err) => err.message
        }
    );
};

const tasksMutateDelete = (taskId: number) => {
    return toast.promise(
        fetch(`/api/tasks/delete`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ id: taskId }),
            credentials: 'include'
        })
            .then((res) => {
                if (res.status === 404) {
                    throw Error('404 Not Found');
                } else if (res.status === 500) {
                    throw Error('500 Internal Server Error');
                } else if (res.status === 503) {
                    throw Error('503 Service Unavailable');
                } else if (!res.ok) {
                    throw Error('An unknown error occured');
                }
                return res.json();
            })
            .then((res) => {
                if (res.message === 'Success') {
                    return res;
                } else {
                    throw Error(res.message);
                }
            }),
        {
            loading: 'Deleting task...',
            success: 'Task deleted successfully!',
            error: (err) => err.message
        }
    );
};

const useUser = () => {
    const [user, setUser] = useState<any>(null);
    const { data, status } = useQuery(
        'user',
        () =>
            getUserFetch().then((res) => {
                if (res?.user) {
                    // console.log("error success lol");
                    setUser(res.user);
                }
            }),
        {
            retry: false,
            refetchOnWindowFocus: false,
            refetchInterval: false,
            refetchIntervalInBackground: false
        }
    );
    // useEffect(() => {
    //     const user = getUserFetch().then((res)=>{
    //         if(res.data){
    //             setUser(res.data);
    //         }
    //     }).catch((err)=>{
    //         console.error(err);
    //     });
    // }, [user]);
    const login = (formData: any) => {
        loginFetch(formData)
            .then((res) => {
                setUser(res.user);
            })
            .catch((err) => {
                console.error(err);
            });
    };
    const logout = () => {
        logoutFetch()
            .then((res) => {
                setUser(null);
            })
            .catch((err) => {
                console.error(err);
            });
    };
    return [user, login, logout];
};

const useRegister = () => {
    const [tempEmployee, setTempEmployee] = useState<any>(null);
    const queryClient = useQueryClient();
    const employeeQuery = useQuery('employee', employeeFetch);
    const employeeMutation = useMutation(
        (formData: any) => employeeRegister(formData),
        {
            onMutate: (formData) => {
                queryClient.setQueryData('employee', (oldData: any) => {
                    return {
                        message: 'Success',
                        employees: [...oldData.employees, formData]
                    };
                });
            },
            onError: (formData: any) => {
                queryClient.setQueryData('employee', (oldData: any) => {
                    return oldData.employees.filter(
                        (data: any) => data.username !== formData.username
                    );
                });
            }
        }
    );
    const employeeTermination = useMutation(
        (formData: any) => employeeDelete(formData),
        {
            onMutate: (formData: string) => {
                queryClient.setQueryData('employee', (oldData: any) => {
                    console.log('old data: ', oldData);
                    return {
                        ...oldData,
                        tasks: oldData.employees.filter((data: any) => {
                            setTempEmployee(data);
                            return data._id !== formData;
                        })
                    };
                });
            },
            onSuccess: () => {
                queryClient.invalidateQueries('employee');
            },
            onError: () => {
                queryClient.setQueryData('employee', (oldData: any) => {
                    return {
                        message: 'Success',
                        tasks: [...oldData.employees, tempEmployee]
                    };
                });
            }
        }
    );
    return { employeeQuery, employeeMutation, employeeTermination };
};

const useTasks = () => {
    const queryClient = useQueryClient();
    const [tempTask, setTempTask] = useState<any>(null);
    const tasksQuery = useQuery('tasks', tasksFetch);
    const tasksAdd = useMutation((formData: any) => tasksMutateAdd(formData), {
        //cant do optimistic update as we dont know the task ID yet.
        onSuccess: () => {
            queryClient.invalidateQueries('tasks');
        },
        onError: (formData: any) => {
            queryClient.setQueryData('tasks', (oldData: any) => {
                return oldData.tasks.filter((data: any) => data !== formData);
            });
        }
    });
    const tasksDelete = useMutation(
        (taskId: number) => tasksMutateDelete(taskId),
        {
            onMutate: (taskId: number) => {
                queryClient.setQueryData('tasks', (oldData: any) => {
                    return {
                        ...oldData,
                        tasks: oldData.tasks.filter((data: any) => {
                            setTempTask(data);
                            return data._id !== taskId;
                        })
                    };
                });
            },
            onError: () => {
                queryClient.setQueryData('tasks', (oldData: any) => {
                    return {
                        message: 'Success',
                        tasks: [...oldData.tasks, tempTask]
                    };
                });
            }
        }
    );
    return { tasksQuery, tasksAdd, tasksDelete };
};

const useAdminTasks = (id: string) => {
    const adminTasksQuery = useQuery(['admin-tasks', id], () =>
        tasksFetchId(id)
    );
    return adminTasksQuery;
};

export default useUser;
export { useRegister, useTasks, useAdminTasks };
