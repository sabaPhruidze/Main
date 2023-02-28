const labels = document.querySelectorAll('.form-control label');

labels.forEach(label => {
    label.innerHTML = label.innerText// ამით მივიღე ტექსტი
    .split('') //ასოებათ დავაშორე
    .map((letter, idx) => `<span style="transition-delay:${idx * 80}ms">${letter}</span>`) //array იდ გადააქცევს. letter არის ასოები , idx - index. 
    //რომ შევაჯამო map ით მოგვცემს თითოეულ ასოს span ში ცალ-ცალკე.
    .join('');
    // check the result from the console of browser

})