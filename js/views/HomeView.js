//
// HomeView.js
//
// Created by Erikas Janusauskas on 2025-03-12
// Copyright 2025, All rights reserved.
//

import Component from "/js/component.js"

class HomeView extends Component {
    template() {
        return `
            ${AppData.map(song =>`
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

export default HomeView
