const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min

export const moveInput = (squirtingInput) => {
  const viewportWidth = window.innerWidth
  const viewportHeight = window.innerHeight
  const inputWidth = squirtingInput.offsetWidth
  const inputHeight = squirtingInput.offsetHeight
  const inputRect = squirtingInput.getBoundingClientRect()

  let x, y
  do {
    x = getRandomInt(0, viewportWidth - inputWidth)
    y = getRandomInt(0, viewportHeight - inputHeight)
  } while (
    Math.abs(x - inputRect.left) < inputWidth * 0.5 &&
    Math.abs(y - inputRect.top) < inputHeight * 0.5
  )

  squirtingInput.style.setProperty('--tx', `${x - inputRect.left}px`)
  squirtingInput.style.setProperty('--ty', `${y - inputRect.top}px`)

  squirtingInput.classList.add('squirt')
}

export const onInputFocus = (squirtingInput) => (e) => {
  e.preventDefault()

  moveInput(squirtingInput)

  setTimeout(() => {
    squirtingInput.blur()
    squirtingInput.style.transform = `translate3d(${squirtingInput.style.getPropertyValue(
      '--tx'
    )}, ${squirtingInput.style.getPropertyValue('--ty')}, 0)`
  }, 50)
}
