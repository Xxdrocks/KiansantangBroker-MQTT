Route::post('/auth/register',[AuthController::class,'register']);
Route::post('/auth/login',[AuthController::class,'login']);

Route::middleware('auth:sanctum')->group(function(){
    Route::post('/auth/logout',[AuthController::class,'logout']);
    Route::get('/overview/personal',[OverviewController::class,'personal']);
    Route::get('/overview/city',[OverviewController::class,'city']);

    Route::middleware('admin')->group(function(){
        Route::apiResource('admin/users', Admin\UserController::class);
        Route::apiResource('admin/devices', Admin\DeviceController::class);
    });
});
