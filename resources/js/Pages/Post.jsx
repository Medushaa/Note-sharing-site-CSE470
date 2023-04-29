import React, { useState } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

//import { useSpring, animated } from 'react-spring';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

import { usePage, Head, Link } from '@inertiajs/react';

//import all the chirps data from Index page
import { Allchirps } from '@/Pages/Chirps/Index';


import Disqus from "disqus-react"
dayjs.extend(relativeTime);



export default function Post({ auth}) {
    // let { $id } = useParams();

    var path = location.href 
    const { props } = usePage();

    const disqusShortname = "house-of-notes"
    const disqusConfig = {
      url: path, 
      identifier: props.id,
      title: props.id,
    }

    var title, message, created_at, author;
    var i;
    //post = Allchirps.find(chirp => chirp.id === props.id);
    for(i=0; i < Allchirps.length; i++){
        if (String(Allchirps[i].id) === props.id){
            title = Allchirps[i].title;
            message = Allchirps[i].message;
            created_at = Allchirps[i].created_at;
            author = Allchirps[i].user.name;
            break;
        } 
    }


    return (
        <AuthenticatedLayout auth={auth}>
            <Head title="Post" />

            
            <div className="py-10">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="pt-6 px-6 text-2xl flex justify-center items-center text-gray-900"> Title: {' '}<b className="underline"> {title}</b> </div>
                        <p className="px-6 text-gray-900 flex justify-center items-center "> Created at: {dayjs(created_at).fromNow()}</p>
                        <p className="px-6 text-gray-900 text-center "> Author: {author}</p>

                        <p className="p-6 text-xl text-gray-900"><div dangerouslySetInnerHTML={{__html: message}}/></p>
                        <p className="p-6 text-gray-900 text-center "> ⬇️ Comment section for Post no. {props.id} ⬇️</p>




                    </div>
                    {/* <Link className="font-semibold text-gray-600 dark:text-gray-100 dark:hover:text-grey focus:outline focus:outline-5 focus:rounded-sm focus:outline-blue-500"

                        href={route('chirps.index', props.id)} >
                        <button class="px-4 py-2 hover:bg-gray-900 text-gray-100 hover:bold bg-gray-700 br-5" style={{borderRadius: '5px'}}>

                        See Post

                        </button></Link> */}

                </div>
            </div> 

            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div className="p-10 bg-white overflow-hidden shadow-sm sm:rounded-lg">     
                    
                    {/* <div className="users"> {chirps.map((chirp) => (<div className="user">{chirp}</div> ))}</div> */}
                    <Disqus.DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
                
                </div>
            </div>
            

        </AuthenticatedLayout>
    );
}

