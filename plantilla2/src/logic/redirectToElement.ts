export function redirectToElement(element: string) {
  const elementElement = document.getElementById(element)
  if (elementElement) {
    elementElement.scrollIntoView({ behavior: 'smooth' })
  }
}