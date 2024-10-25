<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Project;
use Illuminate\Http\Request;

class ProjectController extends Controller
{
    public function ProjectView(){
        $result = Project::all();
        return $result;
    }

    public function LastThreeProjects(){
        $result = Project::limit(3)->get();
        return $result;
    }

    public function ProjectDetails($id){
        $result = Project::where('id' , $id)->get();
        return $result;
    }
}
