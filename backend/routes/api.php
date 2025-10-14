<?php
use App\Http\Controllers\Api\InputEmissionController;
use App\Http\Controllers\AuthController;
use Illuminate\Support\Facades\Route;


Route::get('/inputemission', [InputEmissionController::class, 'index']);


Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);
