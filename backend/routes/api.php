<?php

namespace backend\routes;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\SensorController;
use App\Models\SensorReading;

Route::get('sensors/latest', [SensorController::class, 'latest']);
Route::get('sensors', [SensorController::class, 'index']);

Route::get('/sensors', function () {
    return SensorReading::latest()->take(50)->get();
});
