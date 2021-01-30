<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Providers\RouteServiceProvider;
use App\Models\User;
use Illuminate\Foundation\Auth\RegistersUsers;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;

class UserController extends Controller
{

    private $status_code = 200;

    use RegistersUsers;
    /**
     * Where to redirect users after registration.
     *
     * @var string
     */
    protected $redirectTo = RouteServiceProvider::HOME;

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest');
    }

    /**
     * Get a validator for an incoming registration request.
     *
     * @param  array  $data
     * @return \Illuminate\Contracts\Validation\Validator
     */

    public function me()
    {
        return response()->json(auth()->user());
    }
    
    protected function validator(array $data)
    {
        return Validator::make($data, [
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
            'password' => ['required', 'string', 'min:8', 'confirmed'],
        ]);
    }

    /**
     * Create a new user instance after a valid registration.
     *
     * @param  array  $data
     * @return \App\User
     */

    // public function create(Request $request)
    // {
    //     return User::create([
    //         $name = $request->name,
    //         $email = $request->email,
    //         $password = Hash::make($request->password) 
    //     ], 
    //     response()->json(['status' => 'success'], 200));
    // }
    public function create(Request $request)
    {
        $validator = Validator::make($request->all(),
        [
            'name' => 'required',
            'email' => 'required|email',
            'password' => 'required',
        ]);
        
        if($validator->fails()){
            return response()->json([
                'status' => 'failed',
                'message' => 'validation_error',
                'errors' => $validator->errors()]);
            }

        $name = $request->name;
        $name = explode(" ", $name); // maybe double quotes '' -> "" ???
        // $first_name = $name[0];
        // $last_name = ""; 

        // if(isset($name[1])){
        //     $last_name = $name[1];
        // }

        $userDataArray = array(
            // 'first_name' => $first_name,
            // 'last_name' => $last_name,
            // 'full_name' => $request->name,
            'name' => $request->name,
            'email' => $request->email,
            'password' => md5($request->password),
        );

        $user_status = User::where('email', $request->email)->first();

        //check whether this email is already existed or not
        if(!is_null($user_status)){
            return response()->json(['status'=>'failed', 'success'=>false, 'message'=>'Whoops! email already registered']);
        }

        //create a user based on $userDataArray
        $user = User::create($userDataArray);

        if(!is_null($user)){
            return response()->json([
                'status'=>$this->status_code, 
                'success'=>true, 
                'message'=>"Registration completed successfully", 
                'data'=>$user
                ]);
        } else {
            return response()->json([
                'status'=>'failed', 
                'success'=>false, 
                'message'=>"failed to register"
            ]);
        }
    }

    public function index()
    {
        return view('app');
        return response()->json(['status' => 'success'], 200);
    }

    public function login(Request $request)
    {
        $validator = Validator::make($request->all(),
        [
            'email' => 'required|email',
            'password' => 'required',
        ]);

        if($validator->fails()){
            return response()->json([
                'status' => 'failed',
                'validation_error' => $validator->errors()
            ]);
        }

        $email_status = User::where('email', $request->email)->first();

        if(!is_null($email_status)){
            $password_status = User::where('email', $request->email)->where('password', md5($request->password))->first();

            if(!is_null($password_status)){
                $user = $this->userDetails($request->email);
                return response()->json(['status' => $this->status_code, 'success' => true, 'message' => 'You have logged in successfully', 'data' => $user]);
            } else {
                return response()->json(['status' => 'failed', 'success' => false, 'message' => 'Unable to Login. Incorrect password.']);
            }
            } else {
                return response()->json(['status' => 'failed', 'success' => false, 'message' => "Unable to login. Email doesn't exist."]);
            
        }
    }

    public function userDetails($email)
    {
        $user = array();
        if($email != ''){
            $user = User::where('email', $email)->first();
            return $user;
        } 
    }
}
