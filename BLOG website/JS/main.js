

let item =  document.querySelectorAll('.accordion-item')
// console.log(item)
let headers = document.querySelectorAll('.accordion-header');
// console.log(headers)
headers.forEach((header, idx) => {
  header.addEventListener("click", function() {
    item.forEach((item, idx1) => {
      if(idx == idx1) {
       item.classList.toggle('active');
      }
    })
  })
})