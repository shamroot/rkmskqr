// <!-- Menu Bar Click Action -->

const navBar = document.getElementById('nav');
const menuBar = document.getElementById('menu-bar');
menuBar.addEventListener('click', () => {
  navBar.classList.toggle('active');
})

// Floating Icon
const float_icon = document.querySelector('.floating-icon')
fetch('Secret/Floating_Icon.html')
  .then(response => response.text())
  .then(data => {
    float_icon.innerHTML = data;
  })

// Logo Header
const logo_header = document.querySelector('.logo-header')
fetch('Secret/Logo_header.html')
  .then(response => response.text())
  .then(data => {
    logo_header.innerHTML = data;
  })

// Navigation Bar
const navigation = document.querySelector('.nav')
fetch('Secret/Navigation.html')
  .then(response => response.text())
  .then(data => {
    navigation.innerHTML = data;
  })

  // Footer
const footer = document.querySelector('.footer')
fetch('Secret/Footer.html')
  .then(response => response.text())
  .then(data => {
    footer.innerHTML = data;
  })