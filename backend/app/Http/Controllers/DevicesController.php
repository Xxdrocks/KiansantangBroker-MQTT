<?php

namespace App\Http\Controllers;

use App\Models\Devices;
use Illuminate\Http\Request;

class DevicesController
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return response()->json(Devices::all());
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
         $request->validate([
            'name' => 'required',
            'type' => 'required',
            'power' => 'required|numeric',
            'usage_hours' => 'required|numeric',
        ]);

        $device = Devices::create($request->all());
        return response()->json($device, 201);
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
         $device = Devices::find($id);
        if (!$device) {
            return response()->json(['message' => 'Device not found'], 404);
        }
        return response()->json($device);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Devices $devices)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $device = Devices::find($id);
        if (!$device) {
            return response()->json(['message' => 'Device not found'], 404);
        }
        $device->update($request->all());
        return response()->json($device);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
         $device = Devices::find($id);
        if (!$device) {
            return response()->json(['message' => 'Device not found'], 404);
        }
        $device->delete();
        return response()->json(['message' => 'Device deleted']);

    }
}
