<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Goal;

class GoalController extends Controller
{
    public function __construct(private Request $request) {
        $this->request = $request;
    }

    public function index() {
        return Inertia::render('goal/index', [
            "goals" => Goal::paginate(25)
        ]);
    }

    public function create() {
        return;
    }

    public function store() {
        return;
    }

    public function show() {
        return;
    }

    public function edit() {
        return;
    }

    public function update() {
        return;
    }

    public function destroy() {
        return;
    }
}
