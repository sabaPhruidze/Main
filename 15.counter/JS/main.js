const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {
    counter.innerText = '0';
    const updateCounter = () => {
        const target = +counter.getAttribute("data-target")
       //by writing + means that target becomes number
        // console.log(typeof target, target)
        const c = +counter.innerText
        const increment = target / 50
        // console.log(increment)
        if(c < target) {
            counter.innerText = `${Math.ceil(c + increment)}`
            // math ceil will round the number up
            setTimeout(updateCounter, 1)
        }else {
            counter.innerText = target
        }
    }
    updateCounter()
})
