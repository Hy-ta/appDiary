<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Providers\RouteServiceProvider;
use Illuminate\Http\Request;
use App\Models\Diary;
use App\Models\User;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

class DiaryController extends Controller
{
    public function create(Request $request)
    {
        $title = $request->title;
        $description = $request->description;
        $email = $request->email;

        $validatedData = $request->validate([
            'title' => 'required',
            'description' => 'required',
            'startDate' => 'required',
            'endDate' => 'required'
            ]);

        $diary = Diary::create([
            'title' => $validatedData['title'],
            'description' => $validatedData['description'],
            'startDate' => $validatedData['startDate'],
            'endDate' => $validatedData['endDate'],
            'email' => $email,
            'void_flg' => false
        ]);
            return $diary->toJson();
    }

    public function Index(Request $request)
    {
        $user_email = $request->email;

        $diaries = Diary::where('void_flg', false)->where('email', '=', $user_email)
                                ->orderBy('created_at', 'desc')
                                ->get();
        return $diaries->toJson();
    }

    public function search(Request $request)
    {
        $title = $request->title;
        $stDate = $request->startDate;
        $edDate = $request->endDate;
        $user_email = $request->email;

        if(!is_null($user_email)){
            $searchData = Diary::where('void_flg', false)->where('title', 'like', '%' . $title . '%')->where('email', '=', $user_email)
                                ->orderBy('created_at', 'DESC')->limit(5)->get();
            return $searchData->toJson();
        }
    }

    public function delete(Request $request)
    {
        $id = $request->id;
        $diary = Diary::find($id);

        if(!is_null($diary)){
            $diary->update(['void_flg' => true]);
            return response()->json(['status' => 'success'] ,200);
        } else {
            return response()->json([
                    'status' => 'failed',
                    'success' => false,
                    'message' => 'failed to delete'
                    ]);
        }
    }

    public function show($id)
    {
        $diary = DB::Table('diaries')->find($id);
        
        if(!is_null($diary)){
            return response()->json($diary, 200);
            return response()->json(['status' => ' success', $diary], 200);
        }
    }

    public function update(Request $request)
    {
        $id = $request->id;  
        $diary = Diary::where('id', '=', $id)->first();

        $diary->update($request->all());
        return response()->json(['status' => 'success', $diary], 200);  
    }
}

