<?php

namespace App\Http\Controllers;

use App\Models\Cart;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class CartController extends Controller
{
    public function index(Request $request)
    {
        $products = DB::table('carts')->select('carts.id', 'carts.quantity', 'products.price', 'products.name', 'products.reduce', 'products.image')
            ->join('products', 'carts.products_id', '=', 'products.id')
            ->where('carts.users_id', '=', $request->id)
            ->get();
        return response()->json($products);
    }

    public function removeCart(Request $request)
    {
        Cart::destroy($request->id);
        return response()->json(['message' => 'Xóa sản phẩm thành công', 'id' => $request->id]);
    }

    public function changeQuantity(Request $request)
    {
        $cart = Cart::find($request->id);
        if ($request->action == 'minus') {
            $cart->quantity = $cart->quantity - 1;
            $cart->save();
            return response()->json(['message' => 'Giảm thành công', 'quantity' => $cart->quantity]);
        } else {
            $cart->quantity = $cart->quantity + 1;
            $cart->save();
            return response()->json(['message' => 'Tăng thành công', 'quantity' => $cart->quantity]);
        }
    }

    public function create(Request $request)
    {
        if (DB::table('carts')->where('products_id', '=', $request->id)->where('users_id', '=', $request->userId)->exists()) {
            $cartBefore = Cart::query()->where('products_id', '=', $request->id)
                ->where('users_id', '=', $request->userId)->first();
            if ($cartBefore->quantity >= 5) {
                return response()->json(['message' => 'Đã đạt giới hạn 5 sản phẩm', 'icon' => 'warning']);
            } else {
                Cart::query()->where('products_id', '=', $request->id)
                    ->where('users_id', '=', $request->userId)->update(['quantity' => $cartBefore->quantity + 1]);
                return response()->json(['message' => 'Thêm vào giỏ hàng thành công', 'icon' => 'success']);
            }
        } else {
            $cart = new Cart;
            $cart->quantity = 1;
            $cart->products_id = $request->id;
            $cart->users_id = $request->userId;
            $cart->save();
            return response()->json(['message' => 'Thêm vào giỏ hàng thành công', 'icon' => 'success']);
        }
    }
}
