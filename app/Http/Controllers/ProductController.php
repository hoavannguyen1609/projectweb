<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ProductController extends Controller
{

    public function getProductList($categoryId)
    {
        return response()->json(Product::query()->where('categories_id', '=', $categoryId)->where('sale', '!=', 1)->where('status', '=', 1)->get());
    }

    public function getPhone()
    {
        return $this->getProductList(1);
    }

    public function getLaptop()
    {
        return $this->getProductList(3);
    }

    public function getTablet()
    {
        return $this->getProductList(7);
    }

    public function getWatch()
    {
        return $this->getProductList(9);
    }

    public function getSpeak()
    {
        return $this->getProductList(13);
    }

    public function getLoudspeaker()
    {
        return $this->getProductList(11);
    }

    public function productGroup(Request $request)
    {
        return $this->getProductList($request->id);
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
            ->select('products.id', 'products.name', 'products.price', 'products.image', 'imageproducts.imageproduct', 'promotions.promotion_name', 'products.reduce')
            ->leftJoin('promotions', 'products.promotions_id', '=', 'promotions.id')
            ->leftJoin('imageproducts', 'products.id', '=', 'imageproducts.products_id')
            ->where('products.name', '=', $request->value)
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

    // public function removeProduct(Request $request)
    // {
    //     Product::destroy($request->id);
    //     return response()->json(['message' => 'Xóa sản phẩm thành công', 'id' => $request->id]);
    // }

    // public function formupdateProduct(Request $request)
    // {
    //     $products = Product::find($request->id);
    //     $category = DB::table('categories')->select('id', 'categorie_name')->get();
    //     $manu = DB::table('manufacturers')->select('id', 'manufacturer_name')->get();
    //     $promotion = DB::table('promotions')->select('id', 'promotion_name')->get();

    //     return response()->json(['products' => $products, 'category' => $category, 'manufacturer' => $manu, 'promotion' => $promotion]);
    // }

    public function changeProduct(Request $request)
    {
        $product = Product::find($request->id);
        switch ($request->type) {
            case 'changeSale':
                $product->sale == 1 ? $product->sale = 0 : $product->sale = 1;
                $product->save();
                return response()->json(['message' => 'Thay đổi thành công', 'sale' => $product->sale]);
            case 'changeStatus':
                $product->status == 1 ? $product->status = 0 : $product->status = 1;
                $product->save();
                return response()->json(['message' => 'Thay đổi thành công', 'status' => $product->status]);
            case 'remove':
                Product::destroy($request->id);
                return response()->json(['message' => 'Xóa thành công', 'id' => $request->id]);
            default:
                break;
        }
    }

    public function getChangeProduct(Request $request)
    {
        $products = Product::query()->where('id', '=', $request->id)->get();
        $category = DB::table('categories')->select('id', 'categorie_name')->orderBy('id')->get();
        $manu = DB::table('manufacturers')->select('id', 'manufacturer_name')->orderBy('id')->get();
        $promotion = DB::table('promotions')->select('id', 'promotion_name')->orderBy('id')->get();

        return response()->json(['products' => $products, 'category' => $category, 'manufacturer' => $manu, 'promotion' => $promotion]);
    }

    public function updateProduct(Request $request)
    {
        $product = Product::find($request->id);
        $product->name = $request->name;
        $product->quantity = $request->quantity;
        $product->reduce = $request->reduce;
        $product->price = $request->price;

        $product->save();
        return response()->json(['status' => 200, 'message' => 'Cập nhật thành công']);
    }
}
