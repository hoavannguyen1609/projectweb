<?php

use App\Http\Controllers\CartController;
use App\Http\Controllers\HighlightboxController;
use App\Http\Controllers\HotsaleController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\SlideController;
use App\Http\Controllers\User\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::post('search', [ProductController::class, 'search']);

Route::prefix('products')->group(function () {
    Route::get('slide', [SlideController::class, 'index']);
    Route::get('highlightbox', [HighlightboxController::class, 'index']);
    Route::get('hotsale', [HotsaleController::class, 'index']);
    Route::get('phoneHome', [ProductController::class, 'getPhone']);
    Route::get('laptopHome', [ProductController::class, 'getLaptop']);
    Route::get('tabletHome', [ProductController::class, 'getTablet']);
    Route::get('watchHome', [ProductController::class, 'getWatch']);
    Route::get('speakHome', [ProductController::class, 'getSpeak']);
    Route::get('loudspeakerHome', [ProductController::class, 'getLoudspeaker']);
    Route::post('productGroup', [ProductController::class, 'productGroup']);
    Route::post('productDetail', [ProductController::class, 'productDetail']);
});

Route::prefix('user')->group(function () {
    Route::post('signin', [UserController::class, 'signin']);
    Route::post('signup', [UserController::class, 'signup']);
    Route::post('confirmEmail', [UserController::class, 'confirmEmail']);
    Route::post('confirmOtp', [UserController::class, 'confirmOtp']);
    Route::post('setagainPassword', [UserController::class, 'setagainPassword']);
});

Route::middleware('auth:sanctum')->group(function () {
    Route::post('user/signout', [UserController::class, 'signout']);

    Route::prefix('cart')->group(function () {
        Route::post('/getcart', [CartController::class, 'index']);
        Route::post('/create', [CartController::class, 'create']);
        Route::post('/handleChange', [CartController::class, 'handleChange']);
    });

    Route::prefix('admin')->group(function () {
        Route::post('checkAdmin', [UserController::class, 'checkAdmin']);
        Route::get('getProducts', [ProductController::class, 'getProducts']);
        Route::post('changeIdProduct', [ProductController::class, 'getChangeProduct']);
        Route::post('updateProduct', [ProductController::class, 'updateProduct']);
        Route::post('changeProduct', [ProductController::class, 'changeProduct']);
    });
});
