"use client"
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

type ErrorWithMessage = {
    message: string;
};


const ProfilePage = () => {
    const [user, setUser] = useState({ username: "", email: "" });
    const router = useRouter();

    useEffect(() => {
        const fetchProfile = async () => {
            const token = localStorage.getItem('access_token');

            try {
                const response = await fetch('http://127.0.0.1:8000/api/v1/users/me', {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                if (!response.ok) throw new Error('Unauthorized');

                const userData = await response.json();
                setUser(userData);
            } catch (err) {
                console.log((err as ErrorWithMessage).message);
                router.push('/login');
            }
        };

        fetchProfile();
    }, []);

    return (
        <div>
            {user && (
                <div>
                    <h1>Welcome {user.username}</h1>
                    <p>Email: {user.email}</p>
                </div>
            )}
        </div>
    );
};

export default ProfilePage