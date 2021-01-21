<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Database\Eloquent\ModelNotFoundException;

use App\Product;
use App\ProductEvaluation;

class ProductEvaluationController extends Controller
{
    
    public function index($product_id)
    {
        try {
            $product = Product::findOrFail($product_id);
            $evaluations = $product->evaluations()->get();
            return response()->json($evaluations, 200);
        } catch(ModelNotFoundException $e) {
            return response()->json(['message' => 'Produto não encontrado'], 404);
        }
    }
    public function show($product_id, $id)
    {
        try {
            $evaluation = ProductEvaluation::findOrFail($id);
        return response()->json($evaluation, 200);
        } catch(ModelNotFoundException $e){
            return response()->json(['message' => 'Avaliação não encontrada'], 404);
        }
    }
    public function create(Request $request, $product_id)
    {
        $rules = [
            'product_id' => 'required|exists:products,id',
            'name' => 'required',
            'grade' => 'required',
            'comment' => 'required'
        ];

        $messages = [
            'product_id.required' => 'O atributo product_id é obrigatório',
            'product_id.exists' => 'O atributo product_id deve conter um ID de produto válido',
            'name.required' => 'O atributo name é obrigatório',
            'grade.required' => 'O atributo grade é numeric',
            'comment.required' => 'O atributo comment é obrigatório',
        ];

        $this->validate($request, $rules, $messages);

        $evaluation = new ProductEvaluation();

        $evaluation->product_id = $request->input('product_id');
        $evaluation->name = $request->input('name');
        $evaluation->grade = $request->input('grade');
        $evaluation->comment = $request->input('comment');
        $evaluation->save();

        return response()->json(['message' => 'Avaliação cadastrada com sucesso'], 201);

    }
    public function update(Request $request, $id)
    {
        $rules = [
            'product_id' => 'required|exists:products,id',
            'name' => 'required',
            'grade' => 'required',
            'comment' => 'required'
        ];

        $messages = [
            'product_id.required' => 'O atributo product_id é obrigatório',
            'product_id.exists' => 'O atributo product_id deve conter um ID de produto válido',
            'name.required' => 'O atributo name é obrigatório',
            'grade.required' => 'O atributo grade é numeric',
            'comment.required' => 'O atributo comment é obrigatório',
        ];

        $this->validate($request, $rules, $messages);

        try{
            $evaluation = ProductEvaluation::findOrFail($id);

            $evaluation->product_id = $request->input('product_id');
            $evaluation->name = $request->input('name');
            $evaluation->grade = $request->input('grade');
            $evaluation->comment = $request->input('comment');
            $evaluation->save();
    
            return response()->json(['message' => 'Avaliação atualizada com sucesso'], 200);
        
        } catch(ModelNotFoundException $e){
            return response()->json(['message' => 'Avaliação não encontrado'], 404);
        }
    }
    
    public function destroy($id)
    {
        try{
            $evaluation = ProductEvaluation::findOrFail($id);
            $evaluation->delete();
            return response()->json(['message' => 'Avaliação removida com sucesso'], 200);
        } catch(ModelNotFoundException $e){
            return response()->json(['message' => 'Avaliação não encontrada'], 404);
        }
    }
}
