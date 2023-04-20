import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Chirp from '@/Components/Chirp';
import InputError from '@/Components/InputError';
import PrimaryButton from '@/Components/PrimaryButton';
import { useForm, Head } from '@inertiajs/react';

export default function Dashboard({ auth, chirps }) {


    return (
        <AuthenticatedLayout
        auth={auth}
            // auth={props.auth}
            // errors={props.errors}
            // header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard" />

            

            {/* <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">Yey! You're logged in! <br></br> Now go look at some Note posts</div>
                    </div>
                </div>
                
            </div>  */}
            {/* <div className="max-w-2xl mx-auto p-4 sm:p-6 lg:p-8">
                    <div className="relative sm:flex sm:justify-center sm:items-center min-h-screen bg-dots-darker bg-center bg-gray-100 dark:bg-dots-lighter dark:bg-gray-900 selection:bg-red-500 selection:text-white">

                        <div className="mt-6 bg-white shadow-sm rounded-lg divide-y">
                            {chirps.map(chirp =>
                                <Chirp key={chirp.id} chirp={chirp} />
                            )}
                        </div>
                    </div> 
                </div> */}
        </AuthenticatedLayout>
    );
}

