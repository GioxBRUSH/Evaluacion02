<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Http\Requests\StoreProductRequest;
use App\Http\Requests\UpdateProductRequest;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $products = Product::all();
        return $products;
    }
    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreProductRequest $request)
    {
       $product = new Product();
       $product->name = $request->name;
       $product->price = $request->price;
       $product->description = $request->description;
       $product->image = $request->image;
       

       $product->save();
    }

    /**
     * Display the specified resource.
     */
    public function show(Product $product)
    {
        $product = Product::find($product->id);
        return $product;
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateProductRequest $request, Product $product)
    {
        $product = Product::findOrFail($request->id);
        $product->name = $request->name;
        $product->price = $request->price;
        $product->description = $request->description;
        $product->image = $request->image;
        $product->save();
        return $product;
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Product $product)
    {
        $product = Product::destroy($product->id);
       return $product;
    }
}
