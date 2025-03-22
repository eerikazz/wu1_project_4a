//
// app.js
//
// Created by Erikas Janusauskas on 2025-03-12
// Copyright 2025, All rights reserved.
//

import Router from "/js/router.js"
import HomeView from "/js/views/HomeView.js"
import SongView from "/js/views/SongView.js"
import SavedView from "/js/views/SavedView.js"

const routes = {
    "/": HomeView,
    "/saved": SavedView,
    "/:name": SongView
}

const router = new Router(routes)
