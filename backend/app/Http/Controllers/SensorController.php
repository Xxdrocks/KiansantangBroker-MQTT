<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\SensorReading;

class SensorController extends Controller
{
    public function index()
    {
        $data = SensorReading::latest()->paginate(50);
        return response()->json($data);
    }

    public function latest()
    {
        $data = SensorReading::latest()->first();
        return response()->json($data);
    }
}
