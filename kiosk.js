/**
 * @author Logee, Quinn
 * @version 0.01
 *@summary rates, averages ratings, and sorts movies
 * @todo nothing
 */

"use strict";
const PROMPT = require(`readline-sync`);
const IO = require('fs');

let continueResponse;
let menuChoice, HDDRating, CPRating, TURating, title, NMRating, HDDAvg, CPAvg, TUAvg;
const MIN_RATING = 1, MAX_RATING = 5;

/**
 * @method
 * @desc The dispatch method for the program
 * @return (null)
 */
function  main(){
    setContinueResponse();
    while (continueResponse === 1) {
        setMenuChoice();
        switch (menuChoice) {
            case 1:setHappyDeathDay();
                break;
            case 2: setColdPursuit();
                break;
            case 3:  setTheUpside();
                break;
            case 4: setNewMovie();
                break;
            case 5:  rankMovies();
                break;
            default: console.log(`! ERROR !`);
        }
        setContinueResponse();
    }
}

main();

/**
 * @method
 * @desc continue Response mutator
 * @returns null
 */
function setContinueResponse() {
    if (continueResponse === 1 || continueResponse === 0) {
        continueResponse = Number(PROMPT.question(`\nDo you want to continue? (0=no, 1=yes): `));
        while (continueResponse !== 0 && continueResponse !== 1) {
            console.log(`${continueResponse} is an incorrect value. Please try again.`);
            continueResponse = Number(PROMPT.question(`\nDo you want to continue? (0=no, 1=yes): `));
        }
    } else {
        continueResponse = 1;
    }
}

/**
 * @method
 * @desc presents a menu to the customer
 * @returns null
 */
function setMenuChoice() {
    menuChoice = -1;
    while (menuChoice !== 1 && menuChoice !== 2 && menuChoice !== 3 && menuChoice !== 4 && menuChoice !== 5) {
        menuChoice = Number(PROMPT.question(
            `\tWhat would you like to do?
            \t\t1) Rate: Happy Death Day 2U
            \t\t2) Rate: Cold Pursuit
            \t\t3) Rate: The Upside
            \t\t4) Choose a new movie
            \t\t5) Rank Movies `
        ));
    }
}

/**
 * @method
 * @desc allows the customer to rate our first movie
 * @returns null
 */
function setHappyDeathDay() {
    let HDDNum = 0, HDDTotal = 0;
    console.log(typeof HDDRating);
    if(typeof HDDRating === "undefined") {
        HDDRating = 0; HDDAvg = 0;
        console.log(typeof HDDRating);
    }
        HDDRating = Number(PROMPT.question(`Please enter a rating for Happy Death Day 2U (1-5): `));
    console.log(typeof HDDRating);


    while (HDDRating !== null && HDDRating < MIN_RATING || HDDRating > MAX_RATING) {
        console.log(`${HDDRating} is invalid. Please try again.`);
        HDDRating = Number(PROMPT.question(`Please enter a rating for Happy Death Day 2U (1-5): `));
    }
    HDDNum++;
    HDDTotal += HDDRating;
    HDDAvg = HDDTotal / HDDNum;
    console.log(`${HDDNum}`);
    console.log(`${HDDTotal}`);
    console.log(`${HDDAvg}`);
}

/**
 * @method
 * @desc allows the customer to rate our second movie
 * @returns null
 */
function setColdPursuit() {
    let CPNum, CPTotal;
    if(typeof CPRating === "undefined") {
        CPRating = 0;CPNum = 0;CPTotal = 0; CPAvg = 0;
    }
        CPRating = Number(PROMPT.question(`Please enter a rating for Cold Pursuit (1-5): `));

    while (CPRating !== null && CPRating < MIN_RATING || CPRating > MAX_RATING) {
        console.log(`${CPRating} is invalid. Please try again.`);
        CPRating = Number(PROMPT.question(`Please enter a rating for Cold Pursuit (1-5): `));
    }
    CPNum++;
    CPTotal += CPRating;
    CPAvg = CPTotal / CPNum;
}

/**
 * @method
 * @desc allows the customer to rate our third movie
 * @returns null
 */
function setTheUpside() {
    let TUNum, TUTotal;
    if(typeof TURating === "undefined") {
        TURating = 0;TUNum = 0;TUTotal = 0; TUAvg = 0;
    }
        TURating = Number(PROMPT.question(`Please enter a rating for The Upside (1-5): `));

    while (TURating !== null && TURating < MIN_RATING ||TURating > MAX_RATING) {
        console.log(`${TURating} is invalid. Please try again.`);
        TURating = Number(PROMPT.question(`Please enter a rating for The Upside (1-5): `));
    }
    TUNum++;
    TUTotal += TURating;
    TUAvg = TUTotal / TUNum;
}

/**
 * @method
 * @desc allows the customer to enter a new movie, and rate that movie
 * @returns null
 */
function setNewMovie() {
    let NMNum;
    if(typeof NMRating === "undefined") {
        NMRating = 0;NMNum = 0;
    }
    title = PROMPT.question(`\nPlease enter a movie title: `);
    NMRating = Number(PROMPT.question(`\nPlease enter a rating for ${title} (1-5): `));

    while (NMRating !== null && NMRating < MIN_RATING ||NMRating > MAX_RATING) {
        console.log(`${NMRating} is invalid. Please try again.`);
        NMRating = Number(PROMPT.question(`Please enter a rating for The Upside (1-5): `));
    }
    NMNum++;
}

/**
 * @method
 * @desc ranks the movies from highest avg to lowest avg
 * @returns null
 */
function rankMovies() {
    if (HDDAvg > CPAvg && CPAvg > TUAvg){
        console.log(`\nHappy Death Day 2U- Avg: ${HDDAvg()}\nCold Pursuit- Avg: ${CPAvg()}\nThe Upside- Avg ${TUAvg()}`);
    }
    else if (HDDAvg > TUAvg && TUAvg > CPAvg) {
        console.log(`\nHappy Death Day 2U- Avg: ${HDDAvg}\nThe Upside- Avg ${TUAvg}\nCold Pursuit- Avg: ${CPAvg}`);
    }
    else if (CPAvg > HDDAvg && HDDAvg > TUAvg){
        console.log(`\nCold Pursuit- Avg: ${CPAvg}\nHappy Death Day 2U- Avg: ${HDDAvg}\nThe Upside- Avg ${TUAvg}`);
    }
    else if (CPAvg > TUAvg && TUAvg > HDDAvg){
        console.log(`\nCold Pursuit- Avg: ${CPAvg()}\nThe Upside- Avg ${TUAvg()}\nHappy Death Day 2U- Avg: ${HDDAvg()}`);
    }
    else if (TUAvg > CPAvg && CPAvg > HDDAvg){
        console.log(`\nThe Upside- Avg: ${TUAvg}\nCold Pursuit- Avg: ${CPAvg}\nHappy Death Day 2U- Avg: ${HDDAvg}`);
    }
    else {
        console.log(`\nThe Upside- Avg: ${TUAvg}\nHappy Death Day 2U- Avg: ${HDDAvg}\nCold Pursuit- Avg: ${CPAvg}`);
    }
}
