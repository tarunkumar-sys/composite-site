function page4Animation(){
    var elemC = document.querySelector("#elem-container")
var fixed = document.querySelector("#fixed-image")
elemC.addEventListener("mouseenter",function(){
   fixed.style.display ="block"
})
elemC.addEventListener("mouseleave",function(){
    fixed.style.display ="none"
 })

var elems = document.querySelectorAll(".elem")
elems.forEach(function(e){
    e.addEventListener("mouseenter",function(){
      var image = e.getAttribute("data-image")
      fixed.style.backgroundImage = `url(${image})`
    })
})
}
page4Animation()


const layers = document.querySelectorAll('.layer');
layers.forEach(layer => {
  layer.addEventListener('mouseover', () => {
    layer.style.border = '2px solid #555';
  });

  layer.addEventListener('mouseleave', () => {
    layer.style.border = 'none';
  });
});

// Add theme toggle functionality
const toggleThemeBtn = document.getElementById('toggle-theme-btn');
const body = document.body;

// Check for saved theme in localStorage
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  body.classList.add(savedTheme);
}

// Toggle theme on button click
toggleThemeBtn.addEventListener('click', () => {
  if (body.classList.contains('light-theme')) {
    body.classList.remove('light-theme');
    body.classList.add('dark-theme');
    localStorage.setItem('theme', 'dark-theme');
  } else {
    body.classList.remove('dark-theme');
    body.classList.add('light-theme');
    localStorage.setItem('theme', 'light-theme');
  }
});
