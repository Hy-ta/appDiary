<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;


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

// Route::get('/', function () {
//     return view('welcome');
// });
// Route::get('/{any}', function(){
//     return view('app');
// })->where('any', '.*');

// Route::view('/{path?}', 'app');

Route::get('/{any}', [UserController::class, 'index'])->where('any','.*');

// Route::group([
//     'middleware' => 'api',
//     'prefix' => 'user',
//     'namespace' => 'User',
// ], function($router) {
//     Route::get('index', [UserController::class, 'index']);
//     Route::post('create', [UserController::class, 'create']);
//     Route::post('login', [UserController::class, 'login']);
// });