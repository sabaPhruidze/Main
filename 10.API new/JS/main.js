const insert = document.getElementById("insert");

window.addEventListener("keydown", (event) => {
    insert.innerHTML = `
    <div class="key">
    ${event.key === ' ' ? 'Space' : event.key}
    <small>Event.key</small>
</div>
<div class="key">
    ${event.keyCode}
    <small>Event.keyCode</small>
</div>
<div class="key">
    ${event.code}
    <small>event.code</small>
</div>
    `
})

// window.addEventListener("keydown", (e) => {
//     console.log(e)
// })
// ამით ვიღებთ ყველა ასოს რომელსაც ვაჭერთ
 //code  //key  //keyCode
