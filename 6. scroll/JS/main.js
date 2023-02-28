
// The window object represents an open window in a browser.
const boxes = document.querySelectorAll('.box');

// ესეეგი html ის ბრაუზერში scroll_ვისას განახორციელებს checkbox
window.addEventListener('scroll',checkBoxes);

checkBoxes();

function checkBoxes () {
    // console.log(window.innerHeight);
    // ამით HTML ის ბრაუზერში რა სიმაღლეც ჩანს იმ სიმაღლეს დააფიქსირებს
    const triggerBottom = window.innerHeight / 10 * 9;
    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top;
        // getBoundingClientRect() აბრუნებს ზომას და მის პოზიციას viewport ზე
        //და შეგვიძლია გავიგოთ კონკრეტულად x,y,width,height,top,right,bottom,left ამ ელემენტის 
        if(boxTop < triggerBottom){
            box.classList.add('show');
        }else{
            box.classList.remove('show');
        }
    })
}