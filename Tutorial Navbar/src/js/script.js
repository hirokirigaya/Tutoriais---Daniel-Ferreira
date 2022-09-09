const btn = document.getElementById("btn-menu")
const nav = document.getElementById("nav")

const navLinks = [
  {name:'Home',url:'/'},
  {name:'Products',url:'/products'},
  {name:'About',url:'/about'},
  {name:'Contact',url:'/contact'},
]

btn.addEventListener("click", () => {
  nav.classList.toggle("off")
  animateLinks() 
})

const ul = document.createElement('ul')

navLinks.map((item) => {
  const li = document.createElement('li')
  const a = document.createElement('a')

  a.innerText = item.name
  a.href = item.url
  li.style.opacity = 0
  
  if(item.name == 'Home'){
    a.style.color = "#000"
  }

  ul.appendChild(li)
  li.appendChild(a)
})

nav.appendChild(ul)

function animateLinks() {
  const links = document.querySelectorAll('#nav ul li')
  
  links.forEach((link,index) => {
    link.style.animation
      ? (link.style.animation = '') 
      : (link.style.animation = `navLinkAnimation ${index / 3 + 0.5}s ease forwards ${index / 3 + 0.3}s`)
  })
}