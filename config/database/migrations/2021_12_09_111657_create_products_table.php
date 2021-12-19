<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProductsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->text('image');
            $table->string('name');
            $table->tinyInteger('quantity');
            $table->integer('price');
            $table->integer('reduce');
            $table->tinyInteger('sale')->default(0);
            $table->integer('categories_id');
            $table->integer('manufacturers_id');
            $table->integer('promotions_id');
            $table->tinyInteger('status')->default(1);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('products');
    }
}
