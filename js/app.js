//
// app.js
//
// Created by Erikas Janusauskas on 2025-03-12
// Copyright 2025, All rights reserved.
//

import Router from "/wu1_project_4a/js/router.js"
import HomeView from "/wu1_project_4a/js/views/HomeView.js"
import SavedView from "/wu1_project_4a/js/views/SavedView.js"
import TermsView from "/wu1_project_4a/js/views/TermsView.js"
import PrivacyView from "/wu1_project_4a/js/views/PrivacyView.js"
import SongView from "/wu1_project_4a/js/views/SongView.js"

const routes = {
    "/": HomeView,
    "/saved": SavedView,
    "/terms": TermsView,
    "/privacy": PrivacyView,
    "/:name": SongView
}

const router = new Router(routes)
