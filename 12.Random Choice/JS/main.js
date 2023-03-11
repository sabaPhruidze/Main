const tagsEl = document.getElementById("tags");
const textarea = document.getElementById("textarea");

// in order to automatically make focus on the textArea when we 
//start the website
textarea.focus();

textarea.addEventListener("keyup", (e) => {
    createTags(e.target.value);

    if(e.key === "Enter") {
        setTimeout(() => {
            e.target.value = ''
        },100)

        randomSelect()
    }
});

function createTags(input) {
    // // in order to check if this function works write =>
    // console.log(input)
    // goal is to split the written text when we use comma
    const tags = input.split(",").filter(tag =>
        tag.trim() !== "").map(tag => tag.trim())

    //it will be written in array
    // The filter() method creates a new array filled with elements that pass a test provided by a function.
    //filter and map method was used in order to not add the spaces or if you add 2 or more coma like this 
    //,, it will not be added
    tagsEl.innerHTML = "";
    tags.forEach(tag => {
        const tagEl = document.createElement("span");
        tagEl.classList.add("tag");
        tagEl.innerText = tag;
        tagsEl.appendChild(tagEl)
    });
}

function randomSelect() {
    // console.log(123) //when you click enter it will start this function
    const times = 30 // how many times will it go to each one 
    const interval = setInterval(() => {
        const randomTag = pickRandomTag()

        highlightTag(randomTag)
        setTimeout(() => {
            unHighlightTag(randomTag);
        }, 100)
    },100);

    setTimeout(() => {
        clearInterval(interval)
        setTimeout(() => {
            const randomTag = pickRandomTag()

            highlightTag(randomTag)
        }, 100)
    }, times * 100)
}
function pickRandomTag() {
    const tags = document.querySelectorAll(".tag")
    return tags[Math.floor(Math.random() * tags.length)]
}
function highlightTag (tag) {
    tag.classList.add("highlight")
}
function unHighlightTag (tag) {
    tag.classList.remove("highlight")
}