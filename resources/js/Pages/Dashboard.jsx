import React, { useState } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { useSpring, animated } from 'react-spring';
import { Allchirps } from '@/Pages/Chirps/Index';

import { useForm, Head } from '@inertiajs/react';



export default function Dashboard({ auth}) {

    return (
        <AuthenticatedLayout auth={auth}>
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">Heellloooo, <b className="hover:text-blue-600">{auth.user.name}</b> 👋. <br /> 
                        I see you have sucessfully logged in!! ✨ <br /> Now go look at some Note posts. <br />
                        Since there's not that many posts, just use Ctrl+F to search for posts and authors. <br /> Hope you like it. 💙</div>
                    </div>
                </div>
                {/* <div className="mt-6 bg-white shadow-sm rounded-lg divide-y-4">
                    {chirps.map(chirp =>
                        <Chirp key={chirp.id} chirp={chirp} />
                    )}
                </div> */}
                
            </div> 

        </AuthenticatedLayout>
    );
}

