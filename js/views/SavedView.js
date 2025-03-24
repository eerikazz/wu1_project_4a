//
// SavedView.js
//
// Created by Erikas Janusauskas on 2025-03-12
// Copyright 2025, All rights reserved.
//

import Component from "/js/component.js"

class SavedView extends Component {
    template() {
        let savedSongs = JSON.parse(localStorage.getItem("savedSongs")) || []

        if(savedSongs.length === 0) {
            return `
                <div class="mainContentContainer gapMedium center cetnerHorizontally">
                    <h2 class="title">You have no saved songs</h2>
                    <p class="footnote regular">To save a song you can use the heart button when on a song page to save it!</p>
                </div>
            `
        }

        return `
            ${savedSongs.map(song =>`
                <a class="card isClickable" href="/#/${song.name}">
                    <img class="cardImgBlur" src="/assets/blur/${song.img}.webp" alt="${song.name}">

                    <div class="container gapSmall cardBody">
                        <img class="img cardImg" src="/assets/webp/${song.img}.webp" alt="${song.name}">
                        <div class="container cardFooter">
                            <h3>${song.name}</h3>
                            <p class="regular caption">${song.artist}</p>
                        </div>
                    </div>
                </a>
            `).join("")}
        `
    }
}

export default SavedView
