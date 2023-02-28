//GOAL: to change the loading-text while decrasing blur
const loadText = document.querySelector('.loading-text');
const bg = document.querySelector('.bg');

let load =80;
// the function blurring will work in every 30 miliseconds
let int = setInterval(blurring, 30)
function blurring() {
    load++;
    if(load > 99) {
        clearInterval(int);
        // int ჩავწერეთ რომ ამ ცვლადი ინტერვალი გაეჩერებინა
    }
    // console.log(load);
    loadText.innerText = `${load}%`;
    // opacity უნდა გაქრეს ისე როგორც load იზრდება
    loadText.style.opacity = scale(load, 80, 100, 1, 0);
    bg.style.filter = `blur(${scale(load, 80, 100, 30, 0)}px)`;
}
// ამით ვაქრობ loadtext ს როდესაც 100მდე ადის
function scale (number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}
// map-a-range-of-numbers-to-another-range-of-numbers
// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers