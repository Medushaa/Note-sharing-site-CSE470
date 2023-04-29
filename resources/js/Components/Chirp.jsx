// TO show a single chirp

import React, { useState } from 'react';
import Dropdown from '@/Components/Dropdown';
import InputError from '@/Components/InputError';
import PrimaryButton from '@/Components/PrimaryButton';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { useForm, usePage, Link} from '@inertiajs/react';


dayjs.extend(relativeTime);

export default function Chirp({ chirp }) {

    //edit chirps
    const { auth } = usePage().props;
    const [editing, setEditing] = useState(false);
    // const [liking, setLiking] = useState(false);
    const { data, setData, patch, clearErrors, reset, errors } = useForm({
        message: chirp.message,
    });
    const submit = (e) => {
        e.preventDefault();
        patch(route('chirps.update', chirp.id), { onSuccess: () => setEditing(false) });
    };


    return (
        <div className="p-6 flex space-x-2">
            {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600 -scale-x-100" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg> */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" className="w-7 h-7 stroke-blue-500">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"/>
            </svg>
            <div className="flex-1">
                <div className="flex justify-between items-center">
                    <div>
                        <span className="text-gray-800">{chirp.user.name}</span>
                        <small className="ml-2 text-sm text-gray-600">{dayjs(chirp.created_at).fromNow()}</small>
                        {/* { chirp.created_at !== chirp.updated_at && <small className="text-sm text-gray-600"> &middot; edited</small>} */}
                    </div>
                    {chirp.user.id === auth.user.id &&

                        <Dropdown>
                            <Dropdown.Trigger>
                                <button>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                                    </svg>
                                </button>
                            </Dropdown.Trigger>
                            <Dropdown.Content>
                                <button className="block w-full px-4 py-2 text-left text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:bg-gray-100 transition duration-150 ease-in-out" onClick={() => setEditing(true)}>
                                    Edit
                                </button>
                                <Dropdown.Link as="button" href={route('chirps.destroy', chirp.id)} method="delete">
                                Delete
                                </Dropdown.Link>
                            </Dropdown.Content>
                        </Dropdown>

                    }
                </div>
                                {/* extra */}
                                
                <p className="mt-4 text-lg text-gray-900"><b>Post no. {chirp.id} : <u>{chirp.title}</u></b></p> 
                {/* <h className="mt-4 text-lg text-gray-900"><b></b>{chirp.message}</h> */}
                {editing
                    ? <form onSubmit={submit}>
                        <textarea value={data.message} onChange={e => setData('message', e.target.value)} className="mt-4 w-full text-gray-900 border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"></textarea>
                        <InputError message={errors.message} class="mt-2" />
                        <div className="space-x-2">
                            <PrimaryButton className="mt-4">Save</PrimaryButton>
                            <button className="mt-4" onClick={() => { setEditing(false); reset(); clearErrors(); }}>Cancel</button>
                        </div>
                    </form>
                    : <p className="mt-4 text-lg text-gray-900"><div dangerouslySetInnerHTML={{__html: chirp.message}}/></p>
                }
                <div>
                    <br />
                    <Link className="font-semibold text-gray-600 dark:text-gray-100 dark:hover:text-grey focus:outline focus:outline-5 focus:rounded-sm focus:outline-blue-500"
                            href={route('chirps.like', chirp.id)} 
                      >
                    <button 
                        class="px-4 py-2 hover:bg-blue-700 text-white bg-blue-500 br-5" style={{borderRadius: '5px'}}
                        href="https://mui.com/material-ui/react-button/">
                        {chirp.likes - 1} likes
                    </button></Link>
                    {' '}
                    <Link className="font-semibold text-gray-600 dark:text-gray-100 dark:hover:text-grey focus:outline focus:outline-5 focus:rounded-sm focus:outline-blue-500"

                            href={route('chirps.show', chirp.id)} >
                    <button class="px-4 py-2 hover:bg-gray-900 text-gray-100 hover:bold bg-gray-700 br-5" style={{borderRadius: '5px'}}>

                            Open Post
                        
                    </button></Link>


                </div>
            </div>
        </div>
    );
}