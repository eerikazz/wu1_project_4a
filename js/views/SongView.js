//
// SongView.js
//
// Created by Erikas Janusauskas on 2025-03-12
// Copyright 2025, All rights reserved.
//

import Component from "/js/component.js"

class SongView extends Component {
    template() {
        const name = this.props.params.name
        const song = window.AppData.find(item => item.name.toLowerCase() === name?.toLowerCase())

        return `
            <div class="container mainSongContainer">
                <header class="wrapper">
                    <img id="headerImg" src="/assets/${song.img}.jpg" alt="${song.name}">

                    <div class="container headerBody">
                        <div class="container">
                            <h3>${song.name}</h3>
                            <div class="wrapper">
                                <p>${song.artist}</p>
                                <p>${song.year}</p>
                            </div>
                        </div>

                        <div class="wrapper">
                            <a href="">Music app</a>
                        </div>
                    </div>
                </header>
            </div>
        `
    }
}

export default SongView
