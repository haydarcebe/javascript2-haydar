const button = document.getElementById('btn')
const songList = document.getElementById('songList')
const inp = document.getElementById('songInput')

button.addEventListener('click', () => {
  const input = inp.value.trim() 

  const lijst = document.createElement('li')
  lijst.textContent = input

  const verwijderKnop = document.createElement('button')
  verwijderKnop.textContent = "verwijder"

  verwijderKnop.addEventListener('click', () => {
    lijst.remove()
  })

  lijst.appendChild(verwijderKnop)
  songList.appendChild(lijst)

  inp.value = ''
})