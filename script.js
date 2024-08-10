function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")
  // O toggle também poderia ser construido da seguinte maneira:
  // if(html.classList.contains('light')) {
  //   html.classList.remove('light')
  // }else {
  //   html.classList.add('light')
  // }
 

  // pegar a tag img
  const img = document.querySelector("#profile img")

  // substituir a imagem
  if(html.classList.contains("light")) {
    // se tiver light mode, adicionar a imagem light
    img.setAttribute("src", "./assets/assets/AvatarLight.png")
  }else {
    // se tiver sem light mode, manter a imagem normal
    img.setAttribute("src", "./assets/assets/AvatarJeh.png")
  }

  // substituir o texto descritivo da imagem
  if(html.classList.contains("light")) {
    // se tiver light mode, adicionar o texto descritivo da imagem light
    img.setAttribute("alt", "Foto de Jeferson Cruz sorrindo, usando boné, camiseta preta, barba e um fundo azul e branco.")
  }else {
    // se tiver sem light mode, manter o texto descritivo da imagem light normal
    img.setAttribute("alt", "Foto em preto e branco de Jeferson Cruz com uma expressçao introspectiva, usando moleton com toca preta, barba cheia e cabelo ondulado volumoso.")
  }
  
}