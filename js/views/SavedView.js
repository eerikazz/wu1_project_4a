import Component from "/js/component.js"

class HomeView extends Component {
    template() {
        let savedSongs = JSON.parse(localStorage.getItem("savedSongs")) || []

        return `
            ${savedSongs.map(song =>`
                <a class="container card isClickable" href="/#/${song.name}">
                    <img class="cardImgBlur" src="/assets/blur/${song.img}.webp" alt="${song.name}">
                    <img class="img cardImg" src="/assets/${song.img}.jpg" alt="${song.name}">
                    <div class="container cardFooter">
                        <h3>${song.name}</h3>
                        <p class="regular caption">${song.artist}</p>
                    </div>
                </a>
            `).join("")}
        `
    }
}

export default HomeView