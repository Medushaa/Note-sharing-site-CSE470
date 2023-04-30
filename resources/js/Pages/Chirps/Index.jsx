import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Chirp from '@/Components/Chirp';
import InputError from '@/Components/InputError';
import PrimaryButton from '@/Components/PrimaryButton';
import { useForm, Head } from '@inertiajs/react';


var Allchirps = [];


 
export default function Index({ auth, chirps }) {
    const { data, setData, post, processing, reset, errors } = useForm({
        title: '', //extra
        message: '',
        pdf_file: null,
    });

    Allchirps = chirps;
 
    const submit = (e) => {
        e.preventDefault();
        post(route('chirps.store'), { onSuccess: () => reset() });
    };



    var i, total_likes = 0;
    for(i=0; i < chirps.length; i++){
        if (chirps[i].user.id === auth.user.id){
            total_likes += chirps[i].likes - 1;
        } 
    }


    return (
        <AuthenticatedLayout auth={auth}>
            <Head title="Post Note" />
 
            <div className="max-w-2xl mx-auto p-4 sm:p-6 lg:p-8">
                <form onSubmit={submit} enctype="multipart/form-data"> 
                   
                    <input type="text" name="title" placeholder="Title" className="block w-full border-gray-400 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"
                    onChange={e => setData('title', e.target.value)}
                    /> 

                    <textarea
                        value={data.message}
                        name="message"
                        placeholder="Have a note to share?"
                        className="block w-full pb-8 border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"
                        onChange={e => setData('message', e.target.value)}
                    ></textarea>
                    <InputError message={errors.message} className="mt-2" />

                    <input type="file" class="relative m-0 pt-2 pb-2 block w-full min-w-0 flex-auto border border-solid border-neutral-200 bg-clip-padding px-3 py-[0.32rem] text-base text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-gray-300 file:rounded file:px-3 file:py-[0.32rem] file:text-gray-800 hover:file:text-gray-100 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-gray-600 focus:border-primary focus:text-gray-100 focus:shadow-te-primary focus:outline-none "
                        onChange={e => setData('pdf_file', e.target.files[0])}
                    />


                    <div><PrimaryButton className="mt-4" disabled={processing}>Post Note</PrimaryButton></div>
                </form>

                <div className= 'pt-6 px-6 text-2xl flex justify-center items-center underline '>My posts:</div>
                <div className= 'text-right font-medium '>Total likes Achieved: {total_likes}</div>

                <div className="mt-6 bg-white shadow-sm rounded-lg divide-y-4">
                {/* filter(chirp => chirp.user.id == auth.user.id) */}
                    {chirps.filter(chirp => chirp.user.id == auth.user.id).map(chirp =>
                        <Chirp key={chirp.id} chirp={chirp} />
                    )}
                </div>

                <div className= 'pt-12 px-6 text-2xl flex justify-center items-center underline '>Other's posts:</div>
                <div className= 'text-right font-medium '>Total no. of posts (all): {chirps.length}</div>
                <div className="mt-6 bg-white shadow-sm rounded-lg divide-y-4">
                {/* filter(chirp => chirp.user.id == auth.user.id) */} 
                    {chirps.filter(chirp => chirp.user.id !== auth.user.id).map(chirp =>
                        <Chirp key={chirp.id} chirp={chirp} />
                    )}
                </div>
                
                <div className= 'p-6 pt-10 text-2xl flex justify-center items-center '>(You reached the bottom)</div>


            </div>
            
        </AuthenticatedLayout>
    );
}
export { Allchirps };