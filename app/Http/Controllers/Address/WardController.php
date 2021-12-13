<?php

namespace App\Http\Controllers\Address;

use App\Http\Controllers\Controller;
use App\Models\Ward;
use Illuminate\Http\Request;

class WardController extends Controller
{
    public function index(Request $request)
    {
        return response()->json(Ward::all()->where('districts_id', '=', $request->value));
    }
}
