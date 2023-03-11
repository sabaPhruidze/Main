

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

function sendContact() {
axios.post('https://coding-world.com/back/public/api/fake-contact/add', {
  name: nameInput.value,
  email:email.value,
  text:text.value,
})
.then(function (response) {
  console.log(response);
})
.catch(function (error) {
  console.log(error);
});
alert("თქვენი შეტყობინება წარმატებით გაიგზავნა")
}