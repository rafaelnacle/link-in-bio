window.addEventListener('DOMContentLoaded', () => {
  VANTA.NET({
    el: "#vanta",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    scale: 1.00,
    scaleMobile: 1.00,
    color: 0xff9805,
    backgroundColor: 0x0,
    points: 20.00,
    maxDistance: 1.00,
    spacing: 20.00,
    backgroundAlpha: 0.1
  })
})

setTimeout(() => {
  const main = document.querySelector('main')
  main.style.opacity = 1
  main.style.filter = 'blur(0px)'
}, 1000)


