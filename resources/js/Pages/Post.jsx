import React, { useState } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
//import { useSpring, animated } from 'react-spring';

import { usePage, Head } from '@inertiajs/react';
import Chirp from '@/Components/Chirp';


import Disqus from "disqus-react"




export default function Post({ auth, chirps }) {
    // let { $id } = useParams();

    var path = location.href 
    const { props } = usePage();

    const disqusShortname = "house-of-notes"
    const disqusConfig = {
      url: path, 
      identifier: props.id,
      title: props.id,
    }


    return (
        <AuthenticatedLayout auth={auth}>
            <Head title="Post" />


            <div className="py-10">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-2xl flex justify-center items-center text-gray-900"> 💬 Comment section for the post no. <b className="underline">{props.id}</b> </div>
                    </div>
                </div>
            </div> 

            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="p-10 bg-white overflow-hidden shadow-sm sm:rounded-lg">            
                <Disqus.DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
                </div>
            </div>
            

        </AuthenticatedLayout>
    );
}

