<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ProductController extends Controller
{
    public function getPhone()
    {
        return response()->json(Product::query()->where('categories_id', '=', 1)->where('sale', '!=', 1)->where('status', '=', 1)->get());
    }

    public function getLaptop()
    {
        return response()->json(Product::query()->where('categories_id', '=', 3)->where('sale', '!=', 1)->where('status', '=', 1)->get());
    }

    public function getTablet()
    {
        return response()->json(Product::query()->where('categories_id', '=', 7)->where('sale', '!=', 1)->where('status', '=', 1)->get());
    }

    public function getWatch()
    {
        return response()->json(Product::query()->where('categories_id', '=', 9)->where('sale', '!=', 1)->where('status', '=', 1)->get());
    }

    public function getSpeak()
    {
        return response()->json(Product::query()->where('categories_id', '=', 13)->where('sale', '!=', 1)->where('status', '=', 1)->get());
    }

    public function search(Request $request)
    {
        $products = Product::query()->where('name', 'LIKE', "%{$request->value}%")->orWhere('price', 'LIKE', "%{$request->value}%")->orWhere('reduce', 'LIKE', "%{$request->value}%")->get();
        if (!$products) {
            return response()->json([
                'status' => 201,
            ]);
        } else {
            return response()->json($products);
        }
    }

    public function productDetail(Request $request)
    {
        $products = DB::table('products')
            ->select('products.id', 'products.name', 'products.price', 'products.image', 'imageproducts.imageproduct', 'promotions.promotion_name')
            ->leftJoin('promotions', 'products.promotions_id', '=', 'promotions.id')
            ->leftJoin('imageproducts', 'products.id', '=', 'imageproducts.products_id')
            // ->join('')
            ->where('products.name', 'LIKE', "%{$request->value}%")
            ->where('products.status', '=', 1)
            ->get();
        return response()->json($products);
    }

    public function getProducts()
    {
        $products = DB::table('products')
            ->select('products.id', 'products.name', 'products.price', 'products.reduce', 'products.quantity', 'products.image', 'categories.categorie_name', 'promotions.promotion_name', 'manufacturers.manufacturer_name', 'products.sale', 'products.status')
            ->join('promotions', 'products.promotions_id', '=', 'promotions.id')
            ->join('manufacturers', 'products.manufacturers_id', '=', 'manufacturers.id')
            ->join('categories', 'products.categories_id', '=', 'categories.id')
            ->get();

        return response()->json($products);
        // $products = Product::all();
        // $category = DB::table('categories')->select('id', 'categorie_name')->get();
        // $manu = DB::table('manufacturers')->select('id', 'manufacturer_name')->get();
        // $promotion = DB::table('promotions')->select('id', 'promotion_name')->get();

        // return response()->json(['products' => $products, 'category' => $category, 'manufacturer' => $manu, 'promotion' => $promotion]);
    }

    public function removeProduct(Request $request)
    {
        Product::destroy($request->id);
        return response()->json(['message' => 'Xóa sản phẩm thành công', 'id' => $request->id]);
    }

    public function formupdateProduct(Request $request)
    {
        $products = Product::find($request->id);
        $category = DB::table('categories')->select('id', 'categorie_name')->get();
        $manu = DB::table('manufacturers')->select('id', 'manufacturer_name')->get();
        $promotion = DB::table('promotions')->select('id', 'promotion_name')->get();

        return response()->json(['products' => $products, 'category' => $category, 'manufacturer' => $manu, 'promotion' => $promotion]);
    }
}
