import React, { useState, useEffect } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import music from "@/assets/comfy-beats.mp3";
import { Head } from '@inertiajs/react';



export default function comfy({ auth}) {

    const [time, setTime] = useState(0);
    const [running, setRunning] = useState(false);

    useEffect(() => {
        const audio = new Audio(music);
        audio.loop = true;
        audio.play();
      }, []);
      
      

    useEffect(() => {
        let interval;
        if (running) {
            interval = setInterval(() => {
                setTime((prevTime) => prevTime + 10);
            }, 10);
        } else {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [running]);


    return (
        
        <AuthenticatedLayout auth={auth}>
            <Head title="Comfy zone" />

            <div className="relative p-12 h-screen bg-gradient-to-tr from-blue-400 to-white-100">

                {/* Background blobs */}
                <div class="absolute top-0 -left-20 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob"></div>
                <div class="absolute top-0 -right-20 w-72 h-72 bg-sky-300 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob animation-delay-2000"></div>
                <div class="absolute -top-5 left-40 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob animation-delay-4000"></div>


            <div className="relative flex flex-col items-center justify-center py-12">


                <h1 className='text-4xl pt-20 font-semibold  pb-4'>Study Timer</h1>
                <div className='text-9xl text-white drop-shadow-lg shadow-black font-semibold pb-2'>
                    <span>{("0" + Math.floor((time / 3600000) % 12)).slice(-2)}:</span>
                    <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
                    <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}</span>
                </div>
                <div className='py-4'>
                    {running ? (
                        <button class="px-4 py-2.5 text-white hover:bg-red-800/[.9] hover:bold rounded-lg bg-red-700/[.7] mr-2 mb-2 br-5" onClick={() => { setRunning(false) }}>Stop</button>
                    ) : (
                        <button class="px-4 py-2.5 text-white hover:bg-green-800/[.9] hover:bold rounded-lg bg-green-700/[.7] mr-2 mb-2 br-5" onClick={() => { setRunning(true) }}>Start</button>
                    )}
                    <button></button>
                    {'      '}
                    {/* <button class="px-4 py-2 hover:bg-gray-900 text-gray-100 hover:bold bg-gray-700 br-5" style={{borderRadius: '5px'}} onClick={() => { setTime(0) }}>Reset</button> */}
                    <button class="px-4 py-2.5 text-white hover:bg-gray-800/[.9] hover:bold rounded-lg bg-gray-700/[.7] mr-2 mb-2 br-5" onClick={() => { setTime(0) }}>Reset</button>

                </div>
            </div>
            {/* <div className="flex flex-col items-center justify-center py-12">
                <button type="button" class="text-grey-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-800 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-500" onClick={typeof(audio)}>Play comfy beats</button>

            </div> */}
            </div>


        </AuthenticatedLayout>
    );
}