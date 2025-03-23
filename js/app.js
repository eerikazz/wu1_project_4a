//
// app.js
//
// Created by Erikas Janusauskas on 2025-03-12
// Copyright 2025, All rights reserved.
//

import Router from "/js/router.js"
import HomeView from "/js/views/HomeView.js"
import SavedView from "/js/views/SavedView.js"
import TermsView from "/js/views/TermsView.js"
import PrivacyView from "/js/views/PrivacyView.js"
import SongView from "/js/views/SongView.js"

const routes = {
    "/": HomeView,
    "/saved": SavedView,
    "/terms": TermsView,
    "/privacy": PrivacyView,
    "/:name": SongView
}

const router = new Router(routes)
