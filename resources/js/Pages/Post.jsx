import React, { useState } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
//import { useSpring, animated } from 'react-spring';

import { usePage, Head } from '@inertiajs/react';
import Chirp from '@/Components/Chirp';






export default function Post({ auth, chirps }) {
    // let { $id } = useParams();

    // var path = location.pathname
    const { props } = usePage();

    return (
        <AuthenticatedLayout auth={auth}>
            <Head title="Post" />


            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-2xl flex justify-center items-center text-gray-900"> 💬 Comment section for the post: <b className="underline">{props.id}</b> </div>
                    </div>
                </div>
            </div> 

            <div className="py-12">
            
                        <div className="p-6 text-2xl flex justify-center items-center text-gray-900"> put disqus here </div>
                        <div id="disqus_thread"></div>
            </div> 

        </AuthenticatedLayout>
    );
}

