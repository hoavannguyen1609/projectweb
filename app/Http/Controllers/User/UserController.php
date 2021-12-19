<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Validator;

class UserController extends Controller
{
    public function signin(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'email' => 'required|email',
            'password' => 'required'
        ], [
            'email.required' => 'Vui lòng nhập email',
            'email.email' => 'Vui lòng nhập đúng định dang email',
            'password.required' => 'Vui lòng nhập mật khẩu'
        ]);

        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors(), 'status' => 201]);
        } else {
            $user = User::where('email', $request->email)->first();
            if (!$user || !Hash::check($request->password, $user->password)) {
                return response()->json([
                    'status' => 401,
                    'message' => 'Thông tin tài khoản hoặc mật khẩu không chính xác',
                ]);
            } else {
                if ($user->rules == 2) {
                    $postion = DB::table('admins')->select('positions_id')->where('users_id', '=', $user->id)->get();
                    return response()->json([
                        'message' => 'Đăng nhập thàng công',
                        'token' => $user->createToken($user->email . '_token')->plainTextToken,
                        'status' => 200,
                        'rules' => $user->rules,
                        'name' => $user->name,
                        'image' => $user->image,
                        'id' => $user->id,
                        'position' => $postion
                    ]);
                } else {
                    return response()->json([
                        'message' => 'Đăng nhập thàng công',
                        'token' => $user->createToken($user->email . '_token')->plainTextToken,
                        'status' => 200,
                        'rules' => $user->rules,
                        'name' => $user->name,
                        'image' => $user->image,
                        'id' => $user->id
                    ]);
                }
            }
        }
    }

    public function signup(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|max:255',
            'birthday' => 'required',
            'phone' => 'required|max:10|unique:users,phone',
            'address' => 'required|max:255',
            'email' => 'required|unique:users,email',
            'password' => 'required|min:8|max:255',
            // 'profile' => 'required'
        ], [
            'email.unique' => 'Email đã được đăng ký',
            'phone.unique' => 'Số điện thoại đã được đăng ký'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => 201,
                'error' => $validator->errors()
            ]);
        } else {

            // $extension = $request->file('profile')->getClientOriginalExtension();

            //     $fileName = time() . '.' . $extension;

            // $request->file('profile')->move('uploads/customer', $fileName);
            if ($request->gender == 0) {
                $fileName = '/avatarDefaultMail.jpg';
            } elseif ($request->gender == 1) {
                $fileName = '/avatarDefaultFermail.jpg';
            } else {
                $fileName = '/avatarDefault.png';
            }

            $user = new User;
            $user->name = $request->name;
            $user->birthday = $request->birthday;
            $user->image = '/uploads/customer' . $fileName;
            $user->phone = $request->phone;
            $user->address = $request->address;
            $user->email = $request->email;
            $user->password = Hash::make($request->password);
            $user->gender = $request->gender;

            $user->save();

            return response()->json([
                'status' => 200,
                'message' => 'Đăng ký thành công'
            ]);
        }
    }

    public function signout(Request $request)
    {
        $request->user()->currentAccessToken()->delete();
        return response()->json(['status' => 200, 'message' => 'Đăng xuất thành công']);
    }

    public function confirmEmail(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'email' => 'required|email'
        ], [
            'email.required' => 'Vui lòng nhập email',
            'emai.email' => 'Vui lòng nhập đúng định dạng email'
        ]);

        if ($validator->fails()) {
            return response()->json(['status' => 201, 'error' => $validator->errors()]);
        } else {
            $user = User::where('email', $request->email)->first();

            if (!$user) {
                return response()->json(['status' => 201, 'message' => 'Tài khoản không tồn tại']);
            } else {
                $otp = rand(100000, 999999);
                $user->otp = $otp;
                $user->save();

                $name = $user->name;

                $email = $request->email;

                Mail::send('emails.Users.SendOtp', compact('otp'), function ($mail) use ($name, $email) {
                    $mail->subject('Mã xác nhận quên mật khẩu');
                    $mail->to($email, $name);
                });

                return response()->json(['status' => 200, 'message' => 'Vui lòng kiểm tra email để lấy mã OTP']);
            }
        }
    }

    public function confirmOtp(Request $request)
    {
        $user = User::where('email', $request->email)->first();
        if ($user) {
            if ($user->otp != $request->otp) {
                return response()->json(['status' => 201, 'error' => 'Mã OTP không hợp lệ']);
            } else {
                return response()->json(['status' => 200, 'message' => 'Xác nhận thành công']);
            }
        }
    }

    public function setagainPassword(Request $request)
    {
        $user = User::where('email', $request->email)->first();

        $user->password = Hash::make($request->password);

        return response()->json(['status' => 200, 'message' => 'Mật khẩu thay đổi thành công']);
    }

    public function checkAdmin(Request $request)
    {
        $user = User::find($request->id);
        if ($user->rules == 2 && $user->name == $request->userName) {
            return response()->json(['status' => 200]);
        } else {
            return response()->json(['status' => 201, 'rules' => $user->rules]);
        }
    }
}
