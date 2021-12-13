<?php

use App\Http\Controllers\Address\DistrictController;
use App\Http\Controllers\Address\ProvinceController;
use App\Http\Controllers\Address\WardController;
use App\Http\Controllers\CartController;
use App\Http\Controllers\HighlightboxController;
use App\Http\Controllers\HotsaleController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\SlideController;
use App\Http\Controllers\User\UserController;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });

// Route::middleware('auth:sanctum')->post('deletecart', [CartController::class, 'remove']);

Route::post('checkAdmin', [UserController::class, 'checkAdmin']);

Route::get('slide', [SlideController::class, 'index']);

Route::get('highlightbox', [HighlightboxController::class, 'index']);

Route::get('hotsale', [HotsaleController::class, 'index']);

Route::get('phone', [ProductController::class, 'getPhone']);

Route::get('laptop', [ProductController::class, 'getLaptop']);

Route::get('tablet', [ProductController::class, 'getTablet']);

Route::get('watch', [ProductController::class, 'getWatch']);

Route::get('speak', [ProductController::class, 'getSpeak']);

Route::post('search', [ProductController::class, 'search']);

Route::post('productDetail', [ProductController::class, 'productDetail']);

Route::post('signin', [UserController::class, 'signin']);
Route::post('signup', [UserController::class, 'signup']);

Route::get('province', [ProvinceController::class, 'index']);
Route::post('district', [DistrictController::class, 'index']);
Route::post('ward', [WardController::class, 'index']);


Route::prefix('cart')->group(function () {
    Route::post('/addCart', [CartController::class, 'create']);
    Route::post('/getcart', [CartController::class, 'index']);
    Route::post('/removeCart', [CartController::class, 'removeCart']);
    Route::post('/changeQuantity', [CartController::class, 'changeQuantity']);
});

Route::prefix('admin')->group(function () {
    Route::get('products', [ProductController::class, 'getProducts']);
    Route::post('removeProduct', [ProductController::class, 'removeProduct']);
    Route::post('formupdateProduct', [ProductController::class, 'formupdateProduct']);
});
