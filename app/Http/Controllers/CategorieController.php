<?php

namespace App\Http\Controllers;

use App\Models\Categorie;
use Illuminate\Http\Request;

class CategorieController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $categories = Categorie::with('articles')->get();
        return $categories;
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $categorie = new Categorie([
            'nomcategorie' => $request->input('nomcategorie'),
            'imagecategorie' => $request->input('imagecategorie')
            ]);
            $categorie->save();
            return response()->json($categorie, 201);
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $categorie = Categorie::with('articles')->find($id);
        return response()->json($categorie);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $categorie = Categorie::find($id);
        return response()->json($categorie);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $categorie = Categorie::find($id);
        $categorie->delete();
        return response()->json('Catégorie supprimée !');
    }
    public function showArticleByCAT($idcat)
    {
        $Scategorie= categorie::where('categorieID', $idcat)->with('articles')->get();
        return response()->json($Scategorie);
    }
    public function getArticlesByCategory($categoryId)
    {
        try {
            // Find the category by ID with its articles
            $categorie = Categorie::with('articles')->find($categoryId);
            
            // Get articles belonging to the category
            $articles = $categorie->articles;
    
            // Return the articles in a JSON response
            return response()->json(['articles' => $articles]);
        } catch (\Exception $e) {
            // Handle exceptions (e.g., category not found, relation not defined, etc.)
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }
    
    
}

