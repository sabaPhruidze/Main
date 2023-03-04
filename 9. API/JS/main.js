// https://icanhazdadjoke.com/api
// API is an aplication programming interfece
const jokeEl = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn');
//USING ASYNC AWAIT
generateJoke();
jokeBtn.addEventListener('click', generateJoke)
//addEventListener ში მეორეს რომ ფუნქციას ვწერ მაგას არუნდა გავუკეთო() 
//შესაძლოა მაგის გამო არ იმუშაოს პროგრამამ
function generateJoke() {
const config = {
    headers: {
        "Accept":"application/json"
    }
}
    fetch('https://icanhazdadjoke.com', config)
    .then(res => res.json())
    .then((data) => {
        jokeEl.innerHTML = data.joke;
    })
    //აქამდე რაც გავაკეთე ამის გამოყენებით ყოველ ხელახლა შესვლაზე ან დარეფრეშებაზე
    //ახალ ხუმრობას ამომიგდებს
}
