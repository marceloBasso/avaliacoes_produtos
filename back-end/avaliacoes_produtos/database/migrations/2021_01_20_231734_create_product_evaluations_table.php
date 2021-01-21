<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateProductEvaluationsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('product_evaluations', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('product_id')->unsigned();
            $table->string('name', 255);
            $table->decimal('grade', 2, 1);
            $table->string('comment');
            $table->timestamps();
            $table->foreign('product_id')->references('id')->on('products')->onUpdate('cascade')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('product_evaluations', function (Blueprint $table) {
            $table->dropForeign('product_evaluations_product_id_foreing');
        });

        Schema::dropIfExists('product_evaluations');
    }
}
