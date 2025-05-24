export function scrollToElement(element: string) {
  const elemento = document.getElementById(element);
  if (elemento) {
    elemento.scrollIntoView({ behavior: "smooth" });
  }
}