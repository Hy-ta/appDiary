<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Providers\RouteServiceProvider;
use Illuminate\Http\Request;
use App\Models\Diary;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

class DiaryController extends Controller
{
    public function create(Request $request)
    {
        $title = $request->title;
        $description = $request->description;

        $validatedData = $request->validate([
            'title' => 'required',
            'description' => 'required',
            ]);

        $diary = Diary::create([
            'title' => $validatedData['title'],
            'description' => $validatedData['description'],
            'void_flg' => false
        ]);
            return $diary->toJson();
    }

    public function Index()
    {
        $diaries = Diary::where('void_flg', false)
                                ->orderBy('created_at', 'desc')
                                ->get();
        return $diaries->toJson();
    }

    public function search(Request $request)
    {
        $title = $request->title;

        $searchData = Diary::where('title', 'like', '%' . $title . '%')
                            ->orderBy('created_at', 'DESC')->limit(5)->get();
        return $searchData->toJson();
    }

    public function delete(Request $request)
    {
        $id = $request->id;

        $voidRequest = Diary::where('void_flg', false && 'title', '===', '%' . $id . '%')
                                ->get();
        $voidRequest->delete();
        return response()->json(['status' => 'success'] ,200);
    }

    public function show($id)
    {
        $diary = DB::Table('diaries')->find($id);
        
        if(!is_null($diary)){
            return response()->json($diary, 200);
            return response()->json(['status' => ' success', $diary], 200);
        }
    }
}

