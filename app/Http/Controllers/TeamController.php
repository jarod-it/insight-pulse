<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class TeamController extends Controller
{
    public function index() {
        return Inertia::render('team/index');
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
