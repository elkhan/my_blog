const originalTitle = document.title
console.log(originalTitle)
document.title = 'New page title'
document.write(`<strong>${new Date().toString()}</strong>`)
// window.onload = function() {
//   document.write("Hello World");
// };

// var colors = document.getElementsByTagName('ul')[0];
// colors.addEventListener('click', (e) => {
//   console.log(e.target.innerText);
// })
