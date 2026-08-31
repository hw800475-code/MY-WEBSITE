// ===============================
// PROFILE OPEN / CLOSE
// ===============================

function toggleProfile(profileId, button) {

    const profile = document.getElementById(profileId);

    if (profile.style.display === "block") {

        profile.style.display = "none";

        button.innerText = "VIEW PROFILE";

    } else {

        profile.style.display = "block";

        button.innerText = "HIDE PROFILE";

    }

}


// ===============================
// NAVIGATION
// ===============================

function scrollToSection(sectionId) {

    const section = document.getElementById(sectionId);

    if (section) {

        section.scrollIntoView({
            behavior: "smooth"
        });

    }

}


// ===============================
// JOIN BUTTON
// ===============================

function showMessage() {

    alert(
        "TEAM SINDH ESPORT\n\n" +
        "Ready to dominate?\n" +
        "Contact the team to join the squad!"
    );

}function toggleMusic() {

    const song = document.getElementById("teamSong");
    const button = document.getElementById("musicBtn");

    if (song.paused) {

        song.play();
        button.innerHTML = "⏸ PAUSE";

    } else {

        song.pause();
        button.innerHTML = "▶ PLAY";

    }
}