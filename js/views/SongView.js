//
// SongView.js
//
// Created by Erikas Janusauskas on 2025-03-12
// Copyright 2025, All rights reserved.
//

import Component from "/wu1_project_4a/js/component.js"

class SongView extends Component {
    template() {
        const name = this.props.params.name;
        const song = window.AppData.find(item => item.name.toLowerCase() === name?.toLowerCase());
        const isSaved = this.isSongSaved(song);

        return `
            <div class="container mainContentContainer">
                <header class="gapLarge">
                    <img class="img blurredImg" src="/wu1_project_4a/assets/${song.img}.jpg" alt="${song.name}">
                    <img class="img" id="headerImg" src="/wu1_project_4a/assets/${song.img}.jpg" alt="${song.name}">

                    <div class="container gapLarge headerBody">
                        <div class="wrapper gapLarge">
                            <div class="container gapSmall grow">
                                <h2 class="title songTitle">${song.name}</h2>

                                <div class="wrapper gapSmall">
                                    <p class="regular footnote">${song.artist}</p>
                                    <p class="regular footnote">${song.year}</p>
                                </div>
                            </div>

                            <button class="saveBtn isClickable" id="saveBtn">
                                <img class="saveBtnIcon" src="/wu1_project_4a/assets/icons/${isSaved ? "isSaved.svg" : "save.svg"}" alt="Save">
                            </button>
                        </div>

                        <div class="wrapper gapSmall">
                            ${song.links.map(link =>`
                                <a class="musicAppLinkBtn regular isClickable" href="${link.url}" target="_blank">
                                    <img class="musicAppLogo" src="/wu1_project_4a/assets/logos/${link.service}.svg" alt="${link.service}">
                                    <span class="regular">${link.service}</span>
                                </a>
                            `).join("")}
                        </div>
                    </div>
                </header>

                ${song.lyrics.map(lyric =>`
                    <section class="container gapSmall lyricContainer">
                        <h3 class="lyricType regular">${lyric.type}</h3>

                        ${lyric.lines.map(line =>`
                            <p class="lyric regular">${line}</p>
                        `).join("")}
                    </section>
                `).join("")}
            </div>
        `;
    }

    setup() {
        const name = this.props.params.name;
        const song = window.AppData.find(item => item.name.toLowerCase() === name?.toLowerCase());
        const saveBtn = document.querySelector("#saveBtn");

        if (!song || !saveBtn) return;

        const updateButtonIcon = () => {
            const isSaved = this.isSongSaved(song);
            saveBtn.querySelector(".saveBtnIcon").src = `/wu1_project_4a/assets/icons/${isSaved ? "isSaved.svg" : "save.svg"}`;
        };

        saveBtn.addEventListener("click", () => {
            if (this.isSongSaved(song)) {
                this.removeSong(song);
            } else {
                this.saveSong(song);
            }
            updateButtonIcon();
        });

        updateButtonIcon(); // Set initial state
    }

    isSongSaved(song) {
        const savedSongs = JSON.parse(localStorage.getItem("savedSongs")) || [];
        return savedSongs.some(saved => saved.name === song.name);
    }

    saveSong(song) {
        let savedSongs = JSON.parse(localStorage.getItem("savedSongs")) || [];
        savedSongs.push(song);
        localStorage.setItem("savedSongs", JSON.stringify(savedSongs));
    }

    removeSong(song) {
        let savedSongs = JSON.parse(localStorage.getItem("savedSongs")) || [];
        savedSongs = savedSongs.filter(saved => saved.name !== song.name);
        localStorage.setItem("savedSongs", JSON.stringify(savedSongs));
    }
}

export default SongView;
