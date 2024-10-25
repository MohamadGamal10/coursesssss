<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Course;
use Illuminate\Http\Request;

class CourseController extends Controller
{
    public function CourseView(){
        $result = Course::all();
        return $result;
    }


    public function LastFourCourses(){
        $result = Course::limit(4)->get();
        return $result;
    }


    public function CourseDetails($id){
        $result = Course::where('id' , $id)->get();
        return $result;
    }
}
