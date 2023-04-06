"use strict";
const startScreen = document.getElementById("start_screen");
const select = document.querySelectorAll(".freeCell");
const selectNum = document.querySelectorAll(".numfreeCell");
const startGameBTN = document.getElementById('startbtn');
let gameTheme = 'numbers';
let gridsize = '4';

let arrayFour = [1, 2, 3, 4, 5, 6, 7, 8, 8, 7, 6, 5, 4, 3, 2, 1];
let arraySix = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];

let arrayIconsFour = [
    'fire-extinguisher-solid.svg',
    'rectangle-xmark-solid.svg',
    'laptop-code-solid.svg',
    'window-maximize-solid.svg',
    'barcode-solid.svg',
    'bars-solid.svg',
    'code-solid.svg',
    'code-compare-solid.svg',
    'fire-extinguisher-solid.svg',
    'rectangle-xmark-solid.svg',
    'laptop-code-solid.svg',
    'window-maximize-solid.svg',
    'barcode-solid.svg',
    'bars-solid.svg',
    'code-solid.svg',
    'code-compare-solid.svg'
];

let arrayIconsSix = [
    'fire-extinguisher-solid.svg',
    'rectangle-xmark-solid.svg',
    'laptop-code-solid.svg',
    'window-maximize-solid.svg',
    'barcode-solid.svg',
    'bars-solid.svg',
    'code-solid.svg',
    'code-compare-solid.svg',
    'mug-saucer-solid.svg',
    'sitemap-solid.svg',
    'font-awesome-solid.svg',
    'bug-slash-solid.svg',
    'gear-solid.svg',
    'shield-halved-solid.svg',
    'bath-solid.svg',
    'user-secret-solid.svg',
    'microchip-solid.svg',
    'shield-solid.svg',
    'fire-extinguisher-solid.svg',
    'rectangle-xmark-solid.svg',
    'laptop-code-solid.svg',
    'window-maximize-solid.svg',
    'barcode-solid.svg',
    'bars-solid.svg',
    'code-solid.svg',
    'code-compare-solid.svg',
    'mug-saucer-solid.svg',
    'sitemap-solid.svg',
    'font-awesome-solid.svg',
    'bug-slash-solid.svg',
    'gear-solid.svg',
    'shield-halved-solid.svg',
    'bath-solid.svg',
    'user-secret-solid.svg',
    'microchip-solid.svg',
    'shield-solid.svg'
];

const theme = (mark) => {
    if (mark === "numbers") {
        select[0].classList.add('markedCell');
        select[1].classList.remove('markedCell');
        gameTheme = 'numbers';
    } else if (mark === "icons") {
        select[0].classList.remove('markedCell');
        select[1].classList.add('markedCell');
        gameTheme = 'icons';
    }
};

const playersNum = (num) => {
    if (num == '1') {
        selectNum[0].classList.add('markedCell');
        selectNum[1].classList.remove('markedCell');
        selectNum[2].classList.remove('markedCell');
        selectNum[3].classList.remove('markedCell');
        players = '1';
    } else if (num == '2') {
        selectNum[0].classList.remove('markedCell');
        selectNum[1].classList.add('markedCell');
        selectNum[2].classList.remove('markedCell');
        selectNum[3].classList.remove('markedCell');
        players = '2';
    } else if (num == '3') {
        selectNum[0].classList.remove('markedCell');
        selectNum[1].classList.remove('markedCell');
        selectNum[2].classList.add('markedCell');
        selectNum[3].classList.remove('markedCell');
        players = '3';
    } else if (num == '4') {
        selectNum[0].classList.remove('markedCell');
        selectNum[1].classList.remove('markedCell');
        selectNum[2].classList.remove('markedCell');
        selectNum[3].classList.add('markedCell');
        players = '4';
    }
}

const grid = (size) => {
    if (size === '4') {
        select[2].classList.add('markedCell');
        select[3].classList.remove('markedCell');
        gridsize = '4';
    } else if (size === '6') {
        select[2].classList.remove('markedCell');
        select[3].classList.add('markedCell');
        gridsize = '6';
    }
}
const grid_area = document.querySelectorAll('.circles');
const game_board = document.getElementById('game_area');
const points = document.querySelectorAll('.points');

function clearCells() {
    if (gameTheme === 'numbers') {
        if (gridsize == '4') {
            for (let i = 0; i < 16; i++) {
                grid_area[20 + i].classList.remove('circlesFour')
            }
        } else if (gridsize == '6') {
            for (let i = 0; i < 36; i++) {
                grid_area[i].classList.remove('circlesSix')
            }
        }
    } else if (gameTheme === 'icons') {
        if (gridsize == '4') {
            for (let i = 0; i < 16; i++) {
                grid_area[20 + i].removeChild(image);
                grid_area[20 + i].classList.remove('circlesFour');
            }
        } else if (gridsize == '6') {
            for (let i = 0; i < 36; i++) {
                grid_area[i].removeChild(image);
                grid_area[i].classList.remove('circlesSix')
            }
        }
    }
}

function fillCells() {
    if (gameTheme === 'numbers') {
        if (gridsize == '4') {
            for (let i = 0; i < 16; i++) {
                const randomIndex = Math.floor(Math.random() * arrayFour.length);
                grid_area[20 + i].innerHTML = arrayFour[randomIndex];
                arrayFour.splice(randomIndex, 1);
                grid_area[20 + i].classList.add('circlesFour')
            }
        } else if (gridsize == '6') {
            for (let i = 0; i < 36; i++) {
                const randomIndex = Math.floor(Math.random() * arraySix.length);
                grid_area[i].innerHTML = arraySix[randomIndex];
                arraySix.splice(randomIndex, 1);
                grid_area[i].classList.add('circlesSix')
            }
        }
    } else if (gameTheme === 'icons') {
        if (gridsize == '4') {
            for (let i = 0; i < 16; i++) {
                const randomIndex = Math.floor(Math.random() * arrayIconsFour.length);
                let image = document.createElement('img');
                image.src = `./assets/${arrayIconsFour[randomIndex]}`
                image.classList.add('imgsizefour');
                image.classList.remove('imgsizesix');
                grid_area[20 + i].appendChild(image);
                arrayIconsFour.splice(randomIndex, 1);
                grid_area[20 + i].classList.add('circlesFour');
            }
        } else if (gridsize == '6') {
            for (let i = 0; i < 36; i++) {
                const randomIndex = Math.floor(Math.random() * arrayIconsSix.length);
                let image = document.createElement('img');
                image.src = `./assets/${arrayIconsSix[randomIndex]}`
                image.classList.remove('imgsizefour');
                image.classList.add('imgsizesix');
                grid_area[i].appendChild(image);
                arrayIconsSix.splice(randomIndex, 1);
                grid_area[i].classList.add('circlesSix')
            }
        }
    }
}

const blocker = document.getElementById('blocker');
let check = 1;
let checker = '0';
let prevCircle;
let move = document.getElementById('timescoreforone');
let moves = 0;

let onlyplayer = 0;
let playerOneScore = 0;
let playerTwoScore = 0;
let playerThreeScore = 0;
let playerFourScore = 0;
let players = '1';
let playerTurn = 0;

const playerSeqBG = document.querySelectorAll('.mobile_players');
const playerSeqNames = document.querySelectorAll('.players_name');
const playerSeqScores = document.querySelectorAll('.points');

function checkCells() {
    const cells = document.querySelectorAll('.circles');
    for (let i = 0; i < cells.length; i++) {
        cells[i].addEventListener("click", function () {
            if (checker === '0') {
                startTimer();
            }
            if (this.classList.contains('flipped')) {
                return;
            }
            if (check === 1) {
                this.classList.add("flipped");
                checker = this.innerHTML;
                prevCircle = this;
                check++;
            } else if (check === 2 && this !== prevCircle) {
                moves += 1;
                move.textContent = moves;
                this.classList.add("flipped");
                const prevCircle2 = this.innerHTML;
                if (checker === prevCircle2) {
                    blocker.style.display = "block";
                    prevCircle.classList.add('winner');
                    this.classList.add('winner');
                    if (players == '1') {
                        onlyplayer++;
                    }
                    if (players == '2' && playerTurn % 2 == 0) {
                        playerOneScore++;
                        points[0].innerHTML = playerOneScore;
                    }
                    if (players == '2' && playerTurn % 2 != 0) {
                        playerTwoScore++;
                        points[1].innerHTML = playerTwoScore;
                    }
                    if (players == '3' && playerTurn === 0) {
                        playerOneScore++;
                        points[0].innerHTML = playerOneScore;
                    }
                    if (players == '3' && playerTurn === 1) {
                        playerTwoScore++;
                        points[1].innerHTML = playerTwoScore;
                    }
                    if (players == '3' && playerTurn === 2) {
                        playerThreeScore++;
                        points[2].innerHTML = playerThreeScore;
                    }
                    if (players == '4' && playerTurn === 0) {
                        playerOneScore++;
                        points[0].innerHTML = playerOneScore;
                    }
                    if (players == '4' && playerTurn === 1) {
                        playerTwoScore++;
                        points[1].innerHTML = playerTwoScore;
                    }
                    if (players == '4' && playerTurn === 2) {
                        playerThreeScore++;
                        points[2].innerHTML = playerThreeScore;
                    }
                    if (players == '4' && playerTurn === 3) {
                        playerFourScore++;
                        points[3].innerHTML = playerFourScore;
                    }
                    setTimeout(function removeWinner() {
                        prevCircle.classList.remove('winner');
                        this.classList.remove('winner');
                        blocker.style.display = "none";
                    }.bind(this), 1400);
                    setTimeout(function end() {
                        if (players == '1' && onlyplayer == 8) {
                            resultScreen();
                        }
                    }, 1000);
                    setTimeout(function endMulti() {
                        if ((playerOneScore + playerTwoScore + playerThreeScore + playerFourScore) === 8 && gridsize === '4') {
                            multiplayerResult();
                        } else if ((playerOneScore + playerTwoScore + playerThreeScore + playerFourScore) === 18 && gridsize === '6') {
                            multiplayerResult();
                        }
                    }, 1000)

                } else {
                    blocker.style.display = "block";
                    if (players === '2') {
                        playerTurn++;
                        if (playerTurn % 2 != 0) {
                            setTimeout(function changeTurn() {
                                playerSeqBG[1].classList.add('mobile_active');
                                playerSeqNames[1].classList.add('player_name_active');
                                playerSeqScores[1].classList.add('points_active');
                                playerSeqBG[0].classList.remove('mobile_active');
                                playerSeqNames[0].classList.remove('player_name_active');
                                playerSeqScores[0].classList.remove('points_active');
                            }, 1000);
                        } else {
                            setTimeout(function changeTurn() {
                                playerSeqBG[1].classList.remove('mobile_active');
                                playerSeqNames[1].classList.remove('player_name_active');
                                playerSeqScores[1].classList.remove('points_active');
                                playerSeqBG[0].classList.add('mobile_active');
                                playerSeqNames[0].classList.add('player_name_active');
                                playerSeqScores[0].classList.add('points_active');
                            }, 1000);
                        }
                    } else if (players === '3') {
                        playerTurn++;
                        if (playerTurn === 1) {
                            setTimeout(function changeTurn() {
                                playerSeqBG[1].classList.add('mobile_active');
                                playerSeqNames[1].classList.add('player_name_active');
                                playerSeqScores[1].classList.add('points_active');
                                playerSeqBG[0].classList.remove('mobile_active');
                                playerSeqNames[0].classList.remove('player_name_active');
                                playerSeqScores[0].classList.remove('points_active');
                            }, 1000);
                        } else if (playerTurn === 2) {
                            setTimeout(function changeTurn() {
                                playerSeqBG[1].classList.remove('mobile_active');
                                playerSeqNames[1].classList.remove('player_name_active');
                                playerSeqScores[1].classList.remove('points_active');
                                playerSeqBG[0].classList.remove('mobile_active');
                                playerSeqNames[0].classList.remove('player_name_active');
                                playerSeqScores[0].classList.remove('points_active');
                                playerSeqBG[2].classList.add('mobile_active');
                                playerSeqNames[2].classList.add('player_name_active');
                                playerSeqScores[2].classList.add('points_active');
                            }, 1000);
                        } else if (playerTurn === 3) {
                            setTimeout(function changeTurn() {
                                playerSeqBG[1].classList.remove('mobile_active');
                                playerSeqNames[1].classList.remove('player_name_active');
                                playerSeqScores[1].classList.remove('points_active');
                                playerSeqBG[0].classList.add('mobile_active');
                                playerSeqNames[0].classList.add('player_name_active');
                                playerSeqScores[0].classList.add('points_active');
                                playerSeqBG[2].classList.remove('mobile_active');
                                playerSeqNames[2].classList.remove('player_name_active');
                                playerSeqScores[2].classList.remove('points_active');
                            }, 1000);
                        }
                        if (playerTurn > 2) {
                            playerTurn = 0;
                        }
                    } else if (players === '4') {
                        playerTurn++;
                        if (playerTurn === 1) {
                            setTimeout(function changeTurn() {
                                playerSeqBG[1].classList.add('mobile_active');
                                playerSeqNames[1].classList.add('player_name_active');
                                playerSeqScores[1].classList.add('points_active');
                                playerSeqBG[0].classList.remove('mobile_active');
                                playerSeqNames[0].classList.remove('player_name_active');
                                playerSeqScores[0].classList.remove('points_active');
                            }, 1000);
                        } else if (playerTurn === 2) {
                            setTimeout(function changeTurn() {
                                playerSeqBG[1].classList.remove('mobile_active');
                                playerSeqNames[1].classList.remove('player_name_active');
                                playerSeqScores[1].classList.remove('points_active');
                                playerSeqBG[0].classList.remove('mobile_active');
                                playerSeqNames[0].classList.remove('player_name_active');
                                playerSeqScores[0].classList.remove('points_active');
                                playerSeqBG[2].classList.add('mobile_active');
                                playerSeqNames[2].classList.add('player_name_active');
                                playerSeqScores[2].classList.add('points_active');
                            }, 1000);
                        } else if (playerTurn === 3) {
                            setTimeout(function changeTurn() {
                                playerSeqBG[1].classList.remove('mobile_active');
                                playerSeqNames[1].classList.remove('player_name_active');
                                playerSeqScores[1].classList.remove('points_active');
                                playerSeqBG[0].classList.remove('mobile_active');
                                playerSeqNames[0].classList.remove('player_name_active');
                                playerSeqScores[0].classList.remove('points_active');
                                playerSeqBG[2].classList.remove('mobile_active');
                                playerSeqNames[2].classList.remove('player_name_active');
                                playerSeqScores[2].classList.remove('points_active');
                                playerSeqBG[3].classList.add('mobile_active');
                                playerSeqNames[3].classList.add('player_name_active');
                                playerSeqScores[3].classList.add('points_active');
                            }, 1000);
                        }
                        else if (playerTurn === 4) {
                            setTimeout(function changeTurn() {
                                playerSeqBG[1].classList.remove('mobile_active');
                                playerSeqNames[1].classList.remove('player_name_active');
                                playerSeqScores[1].classList.remove('points_active');
                                playerSeqBG[0].classList.add('mobile_active');
                                playerSeqNames[0].classList.add('player_name_active');
                                playerSeqScores[0].classList.add('points_active');
                                playerSeqBG[2].classList.remove('mobile_active');
                                playerSeqNames[2].classList.remove('player_name_active');
                                playerSeqScores[2].classList.remove('points_active');
                                playerSeqBG[3].classList.remove('mobile_active');
                                playerSeqNames[3].classList.remove('player_name_active');
                                playerSeqScores[3].classList.remove('points_active');
                            }, 1000);
                        }
                        if (playerTurn > 3) {
                            playerTurn = 0;
                        }
                    }
                    setTimeout(() => {
                        prevCircle.classList.remove('flipped');
                        this.classList.remove('flipped');
                        blocker.style.display = "none";
                    }, 1300);
                }
                check = 1;
            }
        });
    }
}

let elapsedTime = 0;
let startTime;
let timerInterval;
const timer = document.getElementById("timecounter");
function updateTimer() {
    const sec = Math.floor(elapsedTime / 1000) % 60;
    const min = Math.floor(elapsedTime / 60000) % 60;
    timer.innerHTML = `${min.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')}`;
}
function startTimer() {
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(function () {
        elapsedTime = Date.now() - startTime;
        updateTimer();
    }
        , 10);
}
function stopTimer() {
    clearInterval(timerInterval);
}

function gameMode() {
    if (gridsize === '4') {
        for (let i = 0; i < 16; i++) {
            grid_area[i].classList.add('hide')
        }
        for (let k = 0; k < 32; k++) {
            grid_area[k].classList.remove('biggrid')
        }
    } else if (gridsize === '6') {
        for (let i = 0; i < 32; i++) {
            grid_area[i].classList.remove('hide')
        }
        for (let k = 0; k < 36; k++) {
            grid_area[k].classList.add('biggrid')
        }
    }
};

const onePlayer = document.getElementById('oneplayer');
const multiPlayer = document.querySelectorAll('.mobile_players')

function checkPlayers() {
    if (players === '1') {
        onePlayer.style.display = 'flex';
    } else if (players === '2') {
        onePlayer.style.display = 'none';
        multiPlayer[0].classList.add('visible', 'fortwo');
        multiPlayer[0].classList.remove('forthree');
        multiPlayer[1].classList.add('visible', 'fortwo');
        multiPlayer[0].classList.remove('forthree');
    } else if (players === '3') {
        onePlayer.style.display = 'none';
        multiPlayer[0].classList.add('visible', 'forthree');
        multiPlayer[0].classList.remove('fortwo');
        multiPlayer[1].classList.add('visible', 'forthree');
        multiPlayer[0].classList.remove('fortwo');
        multiPlayer[2].classList.add('visible', 'forthree');
        multiPlayer[0].classList.remove('fortwo');
    }
    else if (players === '4') {
        onePlayer.style.display = 'none';
        multiPlayer[0].classList.add('visible');
        multiPlayer[0].classList.remove('fortwo', 'forthree');
        multiPlayer[1].classList.add('visible');
        multiPlayer[1].classList.remove('fortwo', 'forthree');
        multiPlayer[2].classList.add('visible');
        multiPlayer[2].classList.remove('fortwo', 'forthree');
        multiPlayer[3].classList.add('visible');
        multiPlayer[2].classList.remove('fortwo', 'forthree');
    }
}
const menuBTN = document.getElementById('restart_screen');
const resumeBTN = document.querySelectorAll('restart_button');

function resume() {
    menuBTN.style.display = 'none';
    game_board.style.opacity = '1'
    document.body.style.background = '#FCFCFC';
    game_board.style.background = '#FCFCFC';
}


function restartBTN() {
    result2.style.display = 'none';
    menuBTN.style.display = 'none';
    document.body.style.background = '#FCFCFC';
    game_board.style.background = '#FCFCFC';
    game_board.style.opacity = '1'
    playerOneScore = 0;
    playerTwoScore = 0;
    playerThreeScore = 0;
    playerFourScore = 0;
    stopTimer();
    checker = '0';
    elapsedTime = 0;
    arrayFour = [1, 2, 3, 4, 5, 6, 7, 8, 8, 7, 6, 5, 4, 3, 2, 1];
    arraySix = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];
    arrayIconsFour = [
        'fire-extinguisher-solid.svg',
        'rectangle-xmark-solid.svg',
        'laptop-code-solid.svg',
        'window-maximize-solid.svg',
        'barcode-solid.svg',
        'bars-solid.svg',
        'code-solid.svg',
        'code-compare-solid.svg',
        'fire-extinguisher-solid.svg',
        'rectangle-xmark-solid.svg',
        'laptop-code-solid.svg',
        'window-maximize-solid.svg',
        'barcode-solid.svg',
        'bars-solid.svg',
        'code-solid.svg',
        'code-compare-solid.svg'
    ];
    arrayIconsSix = [
        'fire-extinguisher-solid.svg',
        'rectangle-xmark-solid.svg',
        'laptop-code-solid.svg',
        'window-maximize-solid.svg',
        'barcode-solid.svg',
        'bars-solid.svg',
        'code-solid.svg',
        'code-compare-solid.svg',
        'mug-saucer-solid.svg',
        'sitemap-solid.svg',
        'font-awesome-solid.svg',
        'bug-slash-solid.svg',
        'gear-solid.svg',
        'shield-halved-solid.svg',
        'bath-solid.svg',
        'user-secret-solid.svg',
        'microchip-solid.svg',
        'shield-solid.svg',
        'fire-extinguisher-solid.svg',
        'rectangle-xmark-solid.svg',
        'laptop-code-solid.svg',
        'window-maximize-solid.svg',
        'barcode-solid.svg',
        'bars-solid.svg',
        'code-solid.svg',
        'code-compare-solid.svg',
        'mug-saucer-solid.svg',
        'sitemap-solid.svg',
        'font-awesome-solid.svg',
        'bug-slash-solid.svg',
        'gear-solid.svg',
        'shield-halved-solid.svg',
        'bath-solid.svg',
        'user-secret-solid.svg',
        'microchip-solid.svg',
        'shield-solid.svg'
    ];
    playerTurn = 0;
    moves = 0;
    prevCircle = undefined;
    startTime = undefined;
    timerInterval = undefined;
    timer.innerHTML = "00:00";
    move.textContent = moves;
    points[0].innerHTML = 0;
    points[1].innerHTML = 0;
    points[2].innerHTML = 0;
    points[3].innerHTML = 0;
    for (let i = 0; i < 36; i++) {
        grid_area[i].classList.remove('flipped');
    }
    for (let i = 0; i < 4; i++) {
        playerSeqBG[i].classList.remove('mobile_active');
        playerSeqNames[i].classList.remove('player_name_active');
        playerSeqScores[i].classList.remove('points_active');
    }
    playerSeqBG[0].classList.add('mobile_active');
    playerSeqNames[0].classList.add('player_name_active');
    playerSeqScores[0].classList.add('points_active');
    clearCells();
    gameMode();
    checkPlayers();
    fillCells();
    checkCells();
}


function restart() {
    location.reload();
}
function menu() {
    menuBTN.style.display = 'flex';
    document.body.style.background = 'rgba(0, 0, 0, 0.5)';
    game_board.style.background = 'transparent';
    game_board.style.opacity = '0.5'
}

const result = document.getElementById('one_result_screen');
const resultTime = document.getElementById('timeresult');
const resultmoves = document.getElementById('movescount');
const result2 = document.getElementById('multiplayer_result');
const winwindow = document.getElementById('windiv1');
const winwindow1 = document.getElementById('windiv2');
const winwindow2 = document.getElementById('windiv3');
const winwindow3 = document.getElementById('windiv4');

function resultScreen() {
    result.style.display = 'flex';
    document.body.style.background = 'rgba(0, 0, 0, 0.5)';
    game_board.style.background = 'transparent';
    game_board.style.opacity = '0.5';
    const sec = Math.floor(elapsedTime / 1000) % 60;
    const min = Math.floor(elapsedTime / 60000) % 60;
    resultTime.innerHTML = `${min.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')}`;
    resultmoves.innerHTML = `${moves} Moves`;
    stopTimer();
}
const playerText = document.querySelectorAll('.wthree');
const playerScore = document.querySelectorAll('.wfour');
const resulttitle = document.getElementById('wone');
function multiplayerResult() {
    result2.style.display = 'flex';
    document.body.style.background = 'rgba(0, 0, 0, 0.5)';
    game_board.style.background = 'transparent';
    game_board.style.opacity = '0.5';
    if (players === '2') {
        if (playerOneScore === playerTwoScore) {
            winwindow.style.background = '#152938';
            winwindow1.style.background = '#152938';
            playerText[2].style.color = '#FCFCFC';
            playerText[3].style.color = '#FCFCFC';
            resulttitle.innerHTML = 'It’s a tie!';
            playerScore[2].style.color = '#FCFCFC';
            playerScore[2].innerHTML = `${playerOneScore} Pairs`;
            playerScore[3].style.color = '#FCFCFC';
            playerScore[3].innerHTML = `${playerTwoScore} Pairs`;
        } else if (playerOneScore > playerTwoScore) {
            winwindow.style.background = '#152938';
            playerText[2].style.color = '#FCFCFC';
            playerText[2].innerHTML = 'Player 1 (Winner!)';
            playerScore[2].style.color = '#FCFCFC';
            resulttitle.innerHTML = 'Player 1 Wins!';
            playerScore[2].innerHTML = `${playerOneScore} Pairs`;
            playerScore[3].innerHTML = `${playerTwoScore} Pairs`;
        } else if (playerOneScore < playerTwoScore) {
            winwindow.style.background = '#152938';
            playerText[2].style.color = '#FCFCFC';
            playerText[2].innerHTML = 'Player 2 (Winner!)';
            playerText[3].innerHTML = 'Player 1';
            playerScore[2].style.color = '#FCFCFC';
            resulttitle.innerHTML = 'Player 2 Wins!';
            playerScore[3].innerHTML = `${playerOneScore} Pairs`;
            playerScore[2].innerHTML = `${playerTwoScore} Pairs`;
        }
        winwindow.style.display = 'flex';
        winwindow1.style.display = 'flex';
        winwindow2.style.display = 'none';
        winwindow3.style.display = 'none';
    } else if (players === '3') {
        const arr = [];
        arr.push(playerOneScore);
        arr.push(playerTwoScore);
        arr.push(playerThreeScore);
        arr.sort(function (a, b) {
            return b - a;
        });
        playerScore[2].innerHTML = `${arr[0]} Pairs`;
        playerScore[3].innerHTML = `${arr[1]} Pairs`;
        playerScore[4].innerHTML = `${arr[2]} Pairs`;
        if (arr[0] == arr[1] && arr[1] != arr[2]) {
            resulttitle.innerHTML = 'It’s a tie!';
            playerText[2].style.color = '#FCFCFC';
            playerScore[2].style.color = '#FCFCFC';
            winwindow.style.background = '#152938';
            playerText[3].style.color = '#FCFCFC';
            playerScore[3].style.color = '#FCFCFC';
            winwindow1.style.background = '#152938';
            if (playerOneScore == playerTwoScore) {
                playerText[2].innerHTML = 'Player 1 (Winner!)';
                playerText[3].innerHTML = 'Player 2 (Winner!)';
            } else if (playerTwoScore == playerThreeScore) {
                playerText[2].innerHTML = 'Player 2 (Winner!)';
                playerText[3].innerHTML = 'Player 3 (Winner!)';
                playerText[4].innerHTML = 'Player 1';
            } else if (playerOneScore == playerThreeScore) {
                playerText[2].innerHTML = 'Player 1 (Winner!)';
                playerText[3].innerHTML = 'Player 3 (Winner!)';
                playerText[4].innerHTML = 'Player 2';
            }
        }
        else if (arr[0] == arr[1] && arr[1] == arr[2]) {
            resulttitle.innerHTML = 'It’s a tie!';
            playerText[2].style.color = '#FCFCFC';
            playerScore[2].style.color = '#FCFCFC';
            winwindow.style.background = '#152938';
            playerText[3].style.color = '#FCFCFC';
            playerScore[3].style.color = '#FCFCFC';
            winwindow1.style.background = '#152938';
            playerText[4].style.color = '#FCFCFC';
            playerScore[4].style.color = '#FCFCFC';
            winwindow2.style.background = '#152938';
        }
        else {
            playerText[2].style.color = '#FCFCFC';
            playerScore[2].style.color = '#FCFCFC';
            winwindow.style.background = '#152938';
            if (playerOneScore > playerTwoScore && playerOneScore > playerThreeScore) {
                resulttitle.innerHTML = 'Player 1 Wins!';
                playerText[2].innerHTML = 'Player 1 (Winner!)';
                if (playerTwoScore < playerThreeScore) {
                    playerText[3].innerHTML = 'Player 3';
                    playerText[4].innerHTML = 'Player 2';
                } else {
                    playerText[3].innerHTML = 'Player 2';
                    playerText[4].innerHTML = 'Player 3';
                }
            } else if (playerTwoScore > playerOneScore && playerTwoScore > playerThreeScore) {
                resulttitle.innerHTML = 'Player 2 Wins!';
                playerText[2].innerHTML = 'Player 2 (Winner!)';
                if (playerOneScore < playerThreeScore) {
                    playerText[3].innerHTML = 'Player 3';
                    playerText[4].innerHTML = 'Player 1';
                } else {
                    playerText[3].innerHTML = 'Player 1';
                    playerText[4].innerHTML = 'Player 3';
                }
            } else if (playerThreeScore > playerOneScore && playerThreeScore > playerTwoScore) {
                resulttitle.innerHTML = 'Player 3 Wins!';
                playerText[2].innerHTML = 'Player 3 (Winner!)';
                if (playerOneScore < playerTwoScore) {
                    playerText[3].innerHTML = 'Player 2';
                    playerText[4].innerHTML = 'Player 1';
                } else {
                    playerText[3].innerHTML = 'Player 1';
                    playerText[4].innerHTML = 'Player 2';
                }
            }
        }
        winwindow.style.display = 'flex';
        winwindow1.style.display = 'flex';
        winwindow2.style.display = 'flex';
        winwindow3.style.display = 'none';
    } else if (players === '4') {
        winwindow.style.display = 'flex';
        winwindow1.style.display = 'flex';
        winwindow2.style.display = 'flex';
        winwindow3.style.display = 'flex';
        let playerebi = [
            { name: "Player 1", score: playerOneScore },
            { name: "Player 2", score: playerTwoScore },
            { name: "Player 3", score: playerThreeScore },
            { name: "Player 4", score: playerFourScore }
        ];
        playerebi.sort((a, b) => b.score - a.score);
        playerText[2].style.color = '#FCFCFC';
        playerScore[2].style.color = '#FCFCFC';
        winwindow.style.background = '#152938';
        playerText[2].innerHTML = `${playerebi[0].name} (Winner!)`;
        playerScore[2].innerHTML = `${playerebi[0].score} Pairs`;
        playerText[3].innerHTML = `${playerebi[1].name}`;
        playerScore[3].innerHTML = `${playerebi[1].score} Pairs`;
        playerText[4].innerHTML = `${playerebi[2].name}`;
        playerScore[4].innerHTML = `${playerebi[2].score} Pairs`;
        playerText[5].innerHTML = `${playerebi[3].name}`;
        playerScore[5].innerHTML = `${playerebi[3].score} Pairs`;
        if (playerebi[0].score == playerebi[1].score) {
            playerText[3].style.color = '#FCFCFC';
            playerScore[3].style.color = '#FCFCFC';
            winwindow1.style.background = '#152938';
            playerText[3].innerHTML = `${playerebi[1].name} (Winner!)`;
            resulttitle.innerHTML = 'It’s a tie!';
            if (playerebi[1].score == playerebi[2].score) {
                playerText[4].style.color = '#FCFCFC';
                playerScore[4].style.color = '#FCFCFC';
                winwindow2.style.background = '#152938';
                playerText[4].innerHTML = `${playerebi[2].name} (Winner!)`;
                if (playerebi[2].score == playerebi[3].score) {
                    playerText[5].style.color = '#FCFCFC';
                    playerScore[5].style.color = '#FCFCFC';
                    winwindow3.style.background = '#152938';
                    playerText[5].innerHTML = `${playerebi[3].name} (Winner!)`;
                }
            }
        }
        resulttitle.innerHTML = `${playerebi[0].name} Wins!`;
    }
}

startGameBTN.addEventListener('click', function startGame() {
    startScreen.style.display = 'none';
    game_board.style.display = 'flex';
    document.body.style.background = '#FCFCFC';
    gameMode();
    checkPlayers();
    fillCells();
    checkCells();
})