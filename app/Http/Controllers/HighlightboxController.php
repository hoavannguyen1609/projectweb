<?php

namespace App\Http\Controllers;

use App\Models\Highlightbox;
use Illuminate\Http\Request;

class HighlightboxController extends Controller
{
    public function index()
    {
        return response()->json(Highlightbox::all()->where('status', '=', 1));
    }
}
