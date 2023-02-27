let homeScore = 0;
let guestScore = 0;
let homeScoreEl = document.getElementById('home-score-el');
let guestScoreEl = document.getElementById('guest-score-el');

function homeAdd1(){
    result = homeScore += 1;
    homeScoreEl.textContent = result;
}

function homeAdd2(){
    result = homeScore += 2;
    homeScoreEl.textContent = result;
}

function homeAdd3(){
    result = homeScore += 3;
    homeScoreEl.textContent = result;
}

function guestAdd1(){
    result = guestScore += 1;
    guestScoreEl.textContent = result;
}

function guestAdd2(){
    result = guestScore += 2;
    guestScoreEl.textContent = result;
}

function guestAdd3(){
    result = guestScore += 3;
    guestScoreEl.textContent = result;
}
