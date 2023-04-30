<?php

// The HTTP controller that will take incoming requests and return responses.

namespace App\Http\Controllers;

use App\Models\Chirp;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\File;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class ChirpController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(): Response
    {
        return Inertia::render('Chirps/Index', [

            //to get the chirps of the logged in user to show 
            'chirps' => Chirp::with('user:id,name')->latest()->get(),

        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function getInfo($id)
    {
        $chirp = Chirp::where('id', $id)->first(); //first gets the first item that matches id
        return view('posts.show', compact('chirp'));
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request): RedirectResponse
    {

        $validated = $request->validate([
            'message' => 'required|string|max:255',
            'title' => 'required|string|max:69', //extra
            'pdf_file' => 'nullable|mimes:pdf|max:2048',
        ]);


        if($request->hasFile('pdf_file')){
            $pdf_file = $request->pdf_file;
            $pdf_file_name = time().'_'.$pdf_file->getClientOriginalName();
            $pdf_file->move(public_path('pdf'), $pdf_file_name);
            $pdf_file = $pdf_file_name;
        } else {
            $pdf_file = "not attached";
        }

        $validated['pdf_file'] = $pdf_file;



        $request->user()->chirps()->create($validated);

        return redirect(route('chirps.index'));
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        //[$id, $b, $c, $d, $e, $f, $g] = $info;
        return redirect()->route('post', $id);
    }


    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Chirp $chirp)
    {

    }

    //increase likes column of that chirp by one. route in web.php and called in chirp.jsx
    public function like($id)
    {
        $chirp = Chirp::findOrFail($id);
        $chirp->increment('likes');
        return redirect()->back();
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Chirp $chirp): RedirectResponse
    {
        $this->authorize('update', $chirp);
        $validated = $request->validate([
            'message' => 'required|string|max:255',
        ]);
        $chirp->update($validated);
        return redirect(route('chirps.index'));
    }

    // public function upload(Request $request){
    //     echo "<pre>";
    //     print_r($request->all());

    // }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Chirp $chirp): RedirectResponse
    {
        $this->authorize('delete', $chirp);
        
        $pdfFile = $chirp->pdf_file; 
        $file_path = public_path('pdf').'/'.$pdfFile;
        if (file_exists($file_path)) {
            unlink($file_path);
            //File has been deleted successfully
        } else {
            //File does not exist
        }

        $chirp->delete();
        return redirect(route('chirps.index'));
    }

}
