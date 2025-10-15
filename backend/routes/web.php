<?php
use App\Http\Controllers\Api\InputEmissionController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\DevicesController;

Route::get('/inputemission', [InputEmissionController::class, 'index']);



Route::apiResource('users', UserController::class);
Route::apiResource('devices', DevicesController::class);
