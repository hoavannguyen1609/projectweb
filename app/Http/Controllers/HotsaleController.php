<?php

namespace App\Http\Controllers;

use App\Models\Hotsale;
use Illuminate\Http\Request;

class HotsaleController extends Controller
{
    public function index()
    {
        return response()->json(Hotsale::query()->where('sale', '=', 1)->where('status', '=', 1)->get());
    }
}
