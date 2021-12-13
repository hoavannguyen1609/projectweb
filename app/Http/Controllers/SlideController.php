<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Slide;

class SlideController extends Controller
{
    public function index()
    {
        return response()->json(Slide::all()->where('status', '=', 1));
    }
}
