import React, { useState } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
//import { useSpring, animated } from 'react-spring';

import { usePage, Head } from '@inertiajs/react';

// import { Routes, Route, useParams } from 'react-router-dom';
// import { useHistory ,useLocation } from 'react-router-dom';
// var location = useLocation()
//var path = location.pathname
//var path = "hello"




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
                        <div className="p-6 text-gray-900"> Post number: {props.id} </div>

                        {/* <div className="p-6 text-gray-900"> Post number: <UserDetails userdetails={chirp.id} /> </div> */}

                        <div id="disqus_thread"></div>
                    </div>
                </div>
                
            </div> 

        </AuthenticatedLayout>
    );
}

