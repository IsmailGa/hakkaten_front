"use client"
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

type ErrorWithMessage = {
    message: string;
};

const ProfilePage = () => {
    const [user, setUser] = useState({ username: "", email: "", full_name: "" });
    const router = useRouter();

    const handleLogout = async () => {
        try {
            await fetch('http://localhost:8000/api/v1/auth/logout', {
                method: 'POST',
                credentials: 'include',
            });
            localStorage.removeItem('access_token');
            router.push('/');
        } catch (error) {
            console.error('Logout failed:', error);
        }
    };

    useEffect(() => {
        const fetchProfile = async () => {
            const token = localStorage.getItem('access_token');

            try {
                const response = await fetch('http://localhost:8000/api/v1/me', {
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
    }, [router]);

    return (
        <div className="min-h-screen pt-20">
            {user && (
                <div className="max-w-2xl mx-auto p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
                    <h1 className="text-2xl font-bold mb-4 dark:text-white">Welcome {user.username}</h1>
                    <div className="space-y-2">
                        <p className="dark:text-gray-200"><span className="font-semibold">Username:</span> {user.username}</p>
                        <p className="dark:text-gray-200"><span className="font-semibold">Full Name:</span> {user.full_name}</p>
                        <p className="dark:text-gray-200"><span className="font-semibold">Email:</span> {user.email}</p>
                    </div>
                    <button
                        onClick={handleLogout}
                        className="mt-6 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors"
                    >
                        Log Out
                    </button>
                </div>
            )}
        </div>
    );
};

export default ProfilePage;