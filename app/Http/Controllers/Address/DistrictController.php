<?php

namespace App\Http\Controllers\Address;

use App\Http\Controllers\Controller;
use App\Models\District;
use Illuminate\Http\Request;

class DistrictController extends Controller
{
    public function index(Request $request)
    {
        return response()->json(District::all()->where('provinces_id', '=', $request->value));
    }
}
