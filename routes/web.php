<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\DiaryController;



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
// Route::view('/{path?}', 'app');

Route::get('/{any}', [UserController::class, 'index'])->where('any','.*');
// Route::post('/list_diary', [DiaryController::class, 'delete']);
