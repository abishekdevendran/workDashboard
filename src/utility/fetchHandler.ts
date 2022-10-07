import toast from 'react-hot-toast';
import { useQuery } from 'react-query';
import { useEffect, useState } from 'react';

const loginFetch = (formData: any) => {
    return toast.promise(
        fetch('api/login', {
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
        fetch('api/logout', {
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

const signupFetch = (formData: any) => {
    return toast.promise(
        fetch('api/register', {
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

const getUserFetch = () => {
    return fetch('api/user', {
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
    const signup = (formData: any) => {
        signupFetch(formData)
            .then((res) => {
                setUser(res.user);
            })
            .catch((err) => {
                console.error(err);
            });
    };
    return [user, login, logout, signup];
};

export default useUser;
