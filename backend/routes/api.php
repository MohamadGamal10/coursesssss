<?php

use App\Http\Controllers\Admin\AboutController;
use App\Http\Controllers\Admin\ChartController;
use App\Http\Controllers\Admin\ContactController;
use App\Http\Controllers\Admin\CourseController;
use App\Http\Controllers\Admin\FooterController;
use App\Http\Controllers\Admin\HomeController;
use App\Http\Controllers\Admin\ProjectController;
use App\Http\Controllers\Admin\ServiceController;
use App\Http\Controllers\Admin\TeamController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/services' , [ServiceController::class , 'ServiceView']);

Route::get('/AllProjects' , [ProjectController::class , 'ProjectView']);
Route::get('/ThreeProjects' , [ProjectController::class , 'LastThreeProjects']);
Route::get('ProjectDetails/{id}' , [ProjectController::class , 'ProjectDetails']);


Route::get('/AllCourses' , [CourseController::class , 'CourseView']);
Route::get('/HomeCourses' , [CourseController::class , 'LastFourCourses']);
Route::get('CourseDetails/{id}' , [CourseController::class , 'CourseDetails']);


Route::get('/footer' , [FooterController::class , 'FooterView']);


Route::get('/Chart' , [ChartController::class , 'ChartView']);


Route::get('/Team' , [TeamController::class , 'TeamView']);

Route::get('/About' , [AboutController::class , 'AboutView']);

Route::get('/About' , [AboutController::class , 'AboutView']);

Route::get('/Home' , [HomeController::class , 'HomeView']);

Route::post('/Contact' , [ContactController::class , 'contact']);


