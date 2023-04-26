import React, { useState } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { useSpring, animated } from 'react-spring';

import { useForm, Head } from '@inertiajs/react';



export default function Dashboard({ auth, chirps }) {

    return (
        <AuthenticatedLayout auth={auth}>
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">Heellloooo, <b className="hover:text-blue-600">{auth.user.name}</b> 👋. <br /> I see, you have sucessfully logged in!! ✨ <br /> Now go look at some Note posts. Hope you like it. 💙</div>
                    </div>
                </div>
                
            </div> 

        </AuthenticatedLayout>
    );
}

