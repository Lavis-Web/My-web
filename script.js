/* =========================================================
   DEMON SLAYER — FINAL JAVASCRIPT
   Matches index.html + style.css EXACTLY
========================================================= */


/* =========================================================
   CHARACTER DATA
========================================================= */

const characters = [

    {
        name: "Tanjiro Kamado",
        role: "DEMON SLAYER",
        type: "slayer",
        title: "The Kind-Hearted Swordsman",
        style: "Water / Hinokami Kagura",
        kanji: "炭",
        aura: "#48a8ff",

        image:
        "https://demonslayer-anime.com/eda/assets/img/character/thumb/thumb_tanjirou.png",

        description:
        "A determined Demon Slayer who fights to protect others and find a way to restore Nezuko."
    },

    {
        name: "Nezuko Kamado",
        role: "DEMON",
        type: "demon",
        title: "The Demon Who Protects Humans",
        style: "Blood Demon Art",
        kanji: "禰",
        aura: "#ff668c",

        image:
        "https://demonslayer-anime.com/eda/assets/img/character/thumb/thumb_nezuko.png",

        description:
        "Tanjiro's younger sister who becomes a demon while retaining her determination to protect humans."
    },

    {
        name: "Zenitsu Agatsuma",
        role: "DEMON SLAYER",
        type: "slayer",
        title: "Thunder Breathing Swordsman",
        style: "Thunder Breathing",
        kanji: "雷",
        aura: "#ffd83d",

        image:
        "https://demonslayer-anime.com/eda/assets/img/character/thumb/thumb_zenitsu.png",

        description:
        "A swordsman whose fear hides extraordinary speed and precision."
    },

    {
        name: "Inosuke Hashibira",
        role: "DEMON SLAYER",
        type: "slayer",
        title: "The Beast Swordsman",
        style: "Beast Breathing",
        kanji: "獣",
        aura: "#b7b7b7",

        image:
        "https://demonslayer-anime.com/eda/assets/img/character/thumb/thumb_inosuke.png",

        description:
        "A wild and competitive Demon Slayer raised in the mountains."
    },

    {
        name: "Tengen Uzui",
        role: "HASHIRA",
        type: "hashira",
        title: "The Sound Hashira",
        style: "Sound Breathing",
        kanji: "音",
        aura: "#c78cff",

        image:
        "https://demonslayer-anime.com/eda/assets/img/character/thumb/thumb_tengen.png",

        description:
        "The Sound Hashira known for his flashy personality and exceptional combat ability."
    },

    {
        name: "Kyojuro Rengoku",
        role: "HASHIRA",
        type: "hashira",
        title: "The Flame Hashira",
        style: "Flame Breathing",
        kanji: "炎",
        aura: "#ff6038",

        image:
        "https://demonslayer-anime.com/eda/assets/img/character/thumb/thumb_kyoujurou.png",

        description:
        "The Flame Hashira whose powerful spirit and sense of duty inspire those around him."
    },

    {
        name: "Giyu Tomioka",
        role: "HASHIRA",
        type: "hashira",
        title: "The Water Hashira",
        style: "Water Breathing",
        kanji: "水",
        aura: "#4da6ff",

        image:
        "https://demonslayer-anime.com/eda/assets/img/character/thumb/thumb_giyuu.png",

        description:
        "A quiet and highly skilled Water Hashira who becomes one of Tanjiro's earliest allies."
    },

    {
        name: "Muichiro Tokito",
        role: "HASHIRA",
        type: "hashira",
        title: "The Mist Hashira",
        style: "Mist Breathing",
        kanji: "霞",
        aura: "#a8ddff",

        image:
        "https://demonslayer-anime.com/eda/assets/img/character/thumb/thumb_muchirou.png",

        description:
        "The exceptionally talented Mist Hashira who reached the rank at a remarkably young age."
    },

    {
        name: "Shinobu Kocho",
        role: "HASHIRA",
        type: "hashira",
        title: "The Insect Hashira",
        style: "Insect Breathing",
        kanji: "蟲",
        aura: "#c888ff",

        image:
        "https://demonslayer-anime.com/eda/assets/img/character/thumb/thumb_shinobu.png",

        description:
        "The Insect Hashira who relies on agility, intelligence and specialized techniques."
    },

    {
        name: "Mitsuri Kanroji",
        role: "HASHIRA",
        type: "hashira",
        title: "The Love Hashira",
        style: "Love Breathing",
        kanji: "恋",
        aura: "#ff83b5",

        image:
        "https://demonslayer-anime.com/eda/assets/img/character/thumb/thumb_mitsuri.png",

        description:
        "The Love Hashira known for her extraordinary physical abilities and warm personality."
    },

    {
        name: "Muzan Kibutsuji",
        role: "DEMON",
        type: "demon",
        title: "The Demon King",
        style: "Demon Blood Art",
        kanji: "無",
        aura: "#e51e35",

        image: "",

        description:
        "The origin of the demon threat and the central antagonist of the story."
    },

    {
        name: "Akaza",
        role: "DEMON",
        type: "demon",
        title: "Upper Rank Three",
        style: "Destructive Death",
        kanji: "猗",
        aura: "#e66b9b",

        image:
        "https://demonslayer-anime.com/mugentrain/assets/img/character/thumb/thumb_akaza.png",

        description:
        "An Upper Rank demon with immense combat ability and a fixation on strength."
    }

];


/* =========================================================
   DOM ELEMENTS
========================================================= */

const characterGrid =
    document.getElementById("characterGrid");

const characterSearch =
    document.getElementById("characterSearch");

const characterFilter =
    document.getElementById("characterFilter");

const characterModal =
    document.getElementById("characterModal");

const modalClose =
    document.getElementById("modalClose");

const modalImageBox =
    document.getElementById("modalImageBox");

const modalName =
    document.getElementById("modalName");

const modalRole =
    document.getElementById("modalRole");

const modalTitle =
    document.getElementById("modalTitle");

const modalDescription =
    document.getElementById("modalDescription");

const modalStyle =
    document.getElementById("modalStyle");

const spoilerButton =
    document.getElementById("spoilerButton");

const spoilerText =
    document.getElementById("spoilerText");

const themeButton =
    document.getElementById("themeButton");

const particles =
    document.getElementById("particles");

const sakura =
    document.getElementById("sakura");

const scrollProgress =
    document.getElementById("scrollProgress");

const preloader =
    document.getElementById("preloader");


/* =========================================================
   SAFE IMAGE FALLBACK
========================================================= */

function fallbackImage(character) {

    const canvas =
        document.createElement("canvas");

    canvas.width = 700;
    canvas.height = 800;

    const ctx =
        canvas.getContext("2d");

    const gradient =
        ctx.createLinearGradient(
            0,
            0,
            700,
            800
        );

    gradient.addColorStop(
        0,
        character.aura
    );

    gradient.addColorStop(
        1,
        "#080808"
    );

    ctx.fillStyle = gradient;
    ctx.fillRect(
        0,
        0,
        700,
        800
    );

    ctx.fillStyle =
        "rgba(0,0,0,0.45)";

    ctx.fillRect(
        0,
        0,
        700,
        800
    );

    ctx.fillStyle = "#ffffff";

    ctx.textAlign = "center";

    ctx.font = "100px serif";

    ctx.fillText(
        character.kanji,
        350,
        360
    );

    ctx.font = "bold 32px Arial";

    ctx.fillText(
        character.name.toUpperCase(),
        350,
        470
    );

    return canvas.toDataURL("image/png");
}


/* =========================================================
   RENDER CHARACTERS
========================================================= */

function renderCharacters() {

    const searchValue =
        characterSearch.value
        .toLowerCase()
        .trim();

    const filterValue =
        characterFilter.value;


    const filtered =
        characters.filter(character => {

            const matchesSearch =
                character.name
                .toLowerCase()
                .includes(searchValue);

            const matchesFilter =
                filterValue === "all" ||
                character.type === filterValue;

            return matchesSearch && matchesFilter;
        });


    characterGrid.innerHTML = "";


    if (filtered.length === 0) {

        characterGrid.innerHTML = `
            <div class="no-results">
                NO CHARACTER FOUND.
            </div>
        `;

        return;
    }


    filtered.forEach((character, index) => {

        const card =
            document.createElement("article");

        card.className =
            "character-card";

        card.style.setProperty(
            "--aura",
            character.aura
        );


        card.innerHTML = `

            <div class="card-aura"></div>

            <img
                class="card-image"
                src="${character.image || fallbackImage(character)}"
                alt="${character.name}"
            >

            <div class="card-gradient"></div>

            <div class="card-kanji">
                ${character.kanji}
            </div>

            <div class="card-content">

                <div class="card-role">
                    ${character.role}
                </div>

                <h3>
                    ${character.name}
                </h3>

                <p>
                    ${character.title}
                </p>

                <span class="card-style">
                    ${character.style}
                </span>

            </div>
        `;


        const image =
            card.querySelector(".card-image");


        image.addEventListener(
            "error",
            () => {

                image.src =
                    fallbackImage(character);

            }
        );


        card.addEventListener(
            "click",
            () => {

                openCharacter(character);

            }
        );


        characterGrid.appendChild(card);

    });

}


/* =========================================================
   CHARACTER MODAL
========================================================= */

function openCharacter(character) {

    characterModal.classList.add("active");

    document.body.style.overflow = "hidden";


    modalName.textContent =
        character.name;

    modalRole.textContent =
        character.role;

    modalTitle.textContent =
        character.title;

    modalDescription.textContent =
        character.description;

    modalStyle.textContent =
        character.style;


    modalImageBox.innerHTML = "";

    const image =
        document.createElement("img");

    image.alt =
        character.name;

    image.src =
        character.image ||
        fallbackImage(character);


    image.onerror = () => {

        image.src =
            fallbackImage(character);

    };


    modalImageBox.appendChild(image);

}


function closeCharacter() {

    characterModal.classList.remove("active");

    document.body.style.overflow = "";

}


/* =========================================================
   SEARCH + FILTER
========================================================= */

characterSearch.addEventListener(
    "input",
    renderCharacters
);

characterFilter.addEventListener(
    "change",
    renderCharacters
);

modalClose.addEventListener(
    "click",
    closeCharacter
);

characterModal.addEventListener(
    "click",
    event => {

        if (
            event.target ===
            characterModal
        ) {

            closeCharacter();

        }

    }
);


/* =========================================================
   ESC KEY
========================================================= */

document.addEventListener(
    "keydown",
    event => {

        if (event.key === "Escape") {

            closeCharacter();

        }

    }
);


/* =========================================================
   PRELOADER
========================================================= */

window.addEventListener(
    "load",
    () => {

        setTimeout(() => {

            preloader.classList.add("hide");

        }, 700);

    }
);


/* =========================================================
   SCROLL PROGRESS
========================================================= */

window.addEventListener(
    "scroll",
    () => {

        const scrollTop =
            window.scrollY;

        const documentHeight =
            document.documentElement.scrollHeight -
            window.innerHeight;

        const percentage =
            (scrollTop / documentHeight) * 100;

        scrollProgress.style.width =
            percentage + "%";

    }
);


/* =========================================================
   PARTICLES
========================================================= */

function createParticles() {

    for (
        let i = 0;
        i < 80;
        i++
    ) {

        const particle =
            document.createElement("div");

        particle.className =
            "particle";

        particle.style.left =
            Math.random() * 100 + "%";

        particle.style.animationDuration =
            8 + Math.random() * 15 + "s";

        particle.style.animationDelay =
            Math.random() * 10 + "s";

        particles.appendChild(
            particle
        );

    }

}


/* =========================================================
   SAKURA
========================================================= */

function createSakura() {

    for (
        let i = 0;
        i < 18;
        i++
    ) {

        const petal =
            document.createElement("div");

        petal.className =
            "sakura-petal";

        petal.style.left =
            Math.random() * 100 + "%";

        petal.style.animationDuration =
            8 + Math.random() * 10 + "s";

        petal.style.animationDelay =
            Math.random() * 10 + "s";

        sakura.appendChild(
            petal
        );

    }

}


/* =========================================================
   THEME BUTTON
========================================================= */

themeButton.addEventListener(
    "click",
    () => {

        document.body.classList.toggle(
            "light-mode"
        );

        if (
            document.body.classList.contains(
                "light-mode"
            )
        ) {

            themeButton.textContent =
                "☀";

        } else {

            themeButton.textContent =
                "☾";

        }

    }
);


/* =========================================================
   SPOILER
========================================================= */

spoilerButton.addEventListener(
    "click",
    () => {

        spoilerText.classList.toggle(
            "visible"
        );


        if (
            spoilerText.classList.contains(
                "visible"
            )
        ) {

            spoilerButton.textContent =
                "HIDE";

        } else {

            spoilerButton.textContent =
                "REVEAL";

        }

    }
);


/* =========================================================
   HERO PARALLAX
========================================================= */

window.addEventListener(
    "mousemove",
    event => {

        const x =
            (event.clientX / window.innerWidth - 0.5);

        const y =
            (event.clientY / window.innerHeight - 0.5);


        const heroContent =
            document.querySelector(
                ".hero-content"
            );


        if (heroContent) {

            heroContent.style.transform =
                `translate(${x * 10}px, ${y * 10}px)`;

        }

    }
);


/* =========================================================
   CHARACTER CARD TILT
========================================================= */

function enableCardTilt() {

    document
        .querySelectorAll(".character-card")
        .forEach(card => {

            card.addEventListener(
                "mousemove",
                event => {

                    const rect =
                        card.getBoundingClientRect();

                    const x =
                        event.clientX - rect.left;

                    const y =
                        event.clientY - rect.top;

                    const rotateX =
                        ((y / rect.height) - 0.5) * -8;

                    const rotateY =
                        ((x / rect.width) - 0.5) * 8;


                    card.style.transform =
                        `perspective(800px)
                         rotateX(${rotateX}deg)
                         rotateY(${rotateY}deg)
                         translateY(-8px)`;

                }
            );


            card.addEventListener(
                "mouseleave",
                () => {

                    card.style.transform = "";

                }
            );

        });

}


/* =========================================================
   RE-ENABLE TILT AFTER SEARCH
========================================================= */

const originalRender =
    renderCharacters;

function refreshTilt() {

    setTimeout(
        enableCardTilt,
        50
    );

}

characterSearch.addEventListener(
    "input",
    refreshTilt
);

characterFilter.addEventListener(
    "change",
    refreshTilt
);


/* =========================================================
   INITIALIZE
========================================================= */

renderCharacters();

createParticles();

createSakura();

setTimeout(
    enableCardTilt,
    100
);


/* =========================================================
   NAVIGATION ACTIVE EFFECT
========================================================= */

const sections =
    document.querySelectorAll(
        "section[id]"
    );

const navLinks =
    document.querySelectorAll(
        ".nav-links a"
    );


window.addEventListener(
    "scroll",
    () => {

        let current = "";

        sections.forEach(section => {

            const sectionTop =
                section.offsetTop - 150;

            if (
                window.scrollY >=
                sectionTop
            ) {

                current =
                    section.getAttribute("id");

            }

        });


        navLinks.forEach(link => {

            link.style.color =
                link.getAttribute("href") ===
                "#" + current
                    ? "#ffffff"
                    : "";

        });

    }
);


/* =========================================================
   FINAL CONSOLE MESSAGE
========================================================= */

console.log(
    "%c鬼 DEMON SLAYER WEBSITE LOADED",
    "color:#d21e1e;font-size:18px;font-weight:bold;"
);

console.log(
    "%cMaximum aura protocol: ACTIVE.",
    "color:#888;font-size:12px;"
);