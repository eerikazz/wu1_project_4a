//
// app.js
//
// Created by Erikas Janusauskas on 2025-03-12
// Copyright 2025, All rights reserved.
//

import Router from "/js/router.js"
import HomeView from "/js/views/HomeView.js"
import SongView from "/js/views/SongView.js"

const routes = {
    "/": HomeView,
    "/:name": SongView
}

const router = new Router(routes)

document.addEventListener("DOMContentLoaded", function () {
    function setBodyHeight() {
        document.body.style.height = `${window.innerHeight}px`;
    }
    
    window.addEventListener("load", setBodyHeight);
    window.addEventListener("resize", setBodyHeight);
})
