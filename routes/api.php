<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\DiaryController;


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/


Route::group([
    'middleware' => 'api',
    'prefix' => 'user',
    'namespace' => 'User',
], function($router) {
    Route::post('create', [UserController::class, 'create']);
    Route::post('login', [UserController::class, 'login']);
});

Route::group([
    'middleware' => 'api',
    'prefix' => 'diary',
    'namespace' => 'Diary',
], function($router) {
    // Route::get('index', [UserController::class, 'index']);
    Route::get('index', [DiaryController::class, 'index']);
    Route::get('search', [DiaryController::class, 'search']);
    Route::get('{id}', [DiaryController::class, 'show']);
    Route::post('create', [DiaryController::class, 'create']);
    Route::post('delete', [DiaryController::class, 'delete']);
});