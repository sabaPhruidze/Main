
// const buttons = document.querySelectorAll(".faq-toggle");
// // console.log(buttons);

// buttons.forEach((button) => {
//     // console.log(button)
//     button.addEventListener("click", () => {
//         button.parentNode.classList.toggle("active")
//         // parentNode is class faq in this condition
//     });
// })
$(".faq-toggle").each((index, button) => {
    button.addEventListener("click", () => {
        button.parentNode.classList.toggle("active");
        localStorage.opened = index
    });
});