// javascript
const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles =document.querySelectorAll('.circle')

let currentActive = 1;
//next ით იზრდება 4 მდე
next.addEventListener('click', () => {
    currentActive++;
    // ამით 4 ს აღარ გაცდება 
    if(currentActive > circles.length) {
        currentActive = circles.length;
    }
    update();
})
//prev ით მცირდება 1 ით და 1 ს არ ჩაცდება
prev.addEventListener('click', () => {
    currentActive--;
    // ამით 1 ს აღარ გაცდება 
    if(currentActive < 1) {
        currentActive = 1;
    }
    update();
})
    
function update() {
    circles.forEach((circle, idx) => {
        if(idx < currentActive) {
            circle.classList.add('active');
        }else{
            circle.classList.remove('active');
        }
    })

    const actives = document.querySelectorAll('.active');
    // console.log(actives.length, circles.length);// ეს გვიჩვენებს რამდენია აქტიური რამდენიდან
    //Goal:progress class ის გამოვიყენოთ და გაალურჯოს ხაზი.
    progress.style.width = (actives.length -1) / (circles.length -1) * 100 + '%';
    // parenthesis თითოეულს და -1 დავუწერეთ იმიტომ რომ ასე ზუსტად ზომაზე დაჯდება ხაზის სიგრძე
    if(currentActive === 1) {
        prev.disabled = true
    }else if(currentActive === circles.length) {
        next.disabled = true;
    } else {
        prev.disabled = false;
        next.disabled = false;
    }
}


// //javascript