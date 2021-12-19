<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'price',
        'reduce',
        'sale',
        'status',
        'image',
        'quantity',
        'categories_id',
        'manufacturers_id',
        'promotions_id'
    ];
}
