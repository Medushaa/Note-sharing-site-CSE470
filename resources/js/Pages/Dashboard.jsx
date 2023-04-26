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
                        <div className="p-6 text-gray-900">Yey! You're logged in! <br></br> Now go look at some Note posts</div>
                    </div>
                </div>
                
            </div> 

        </AuthenticatedLayout>
    );
}

