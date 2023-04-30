<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ChirpController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;

use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');


Route::get('/comfy-zone', function () {
    return Inertia::render('comfy');
})->middleware(['auth', 'verified'])->name('comfy');

Route::get('/post/{id}', function ($id) {
    //[$a, $b, $c, $d, $e, $f, $g] = $info;
    return Inertia::render('Post', ['id' => $id]);
})->middleware(['auth', 'verified'])->name('post');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    Route::post('/profile', [ProfileController::class, 'show'])->name('profile.show');
});

Route::resource('chirps', ChirpController::class)
    ->only(['index', 'store', 'update', 'destroy','show','getInfo'])
    ->middleware(['auth', 'verified']);


Route::get('/chirps/{id}/like', [ChirpController::class, 'like'])->name('chirps.like');

// Route::get('/upload', function () {
//     return view('upload');
// });

require __DIR__.'/auth.php';
