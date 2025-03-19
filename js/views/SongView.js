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
                <header class="wrapper gapMedium">
                    <img id="headerImg" src="/assets/${song.img}.jpg" alt="${song.name}">

                    <div class="container gapLarge headerBody">
                        <div class="container gapSmall">
                            <h2 class="title">${song.name}</h2>
                            <div class="wrapper gapSmall">
                                <p class="footnote">${song.artist}</p>
                                <p class="footnote">${song.year}</p>
                            </div>
                        </div>

                        <div class="wrapper gapSmall musicAppsWrapper">
                            ${song.links.map(link =>`
                                <a class="musicAppLinkBtn regular" href="${link.url}" target="_blank">${link.service}</a>
                            `).join("")}
                        </div>
                    </div>
                </header>

                ${song.lyrics.map(lyric =>`
                    <div class="container gapSmall lyricContainer">
                        <h3 class="lyricType regular">${lyric.type}</h3>

                        ${lyric.lines.map(line =>`
                            <p class="lyric regular">${line}</p>
                        `).join("")}
                    </div>
                `).join("")}
            </div>
        `
    }

    setup() {
        // Get references to the header and headerBody elements
        const header = this.element.querySelector('header');
        const headerBody = this.element.querySelector('.headerBody');

        // Function to update the header height
        const updateHeaderHeight = () => {
            const headerBodyHeight = headerBody.offsetHeight;
            header.style.height = `${headerBodyHeight}px`;
        };

        // Initial call to set the height
        updateHeaderHeight();

        // Optionally, you can add a resize observer to handle dynamic changes
        const resizeObserver = new ResizeObserver(updateHeaderHeight);
        resizeObserver.observe(headerBody);
    }
}

export default SongView
