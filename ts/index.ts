// Constants
const _APP: HTMLElement | null = document.getElementById("app")
const PAGES_PATH: string = "pages/"
const PAGES_EXTENSION: string = ".html"
const PAGES = {
  1:"homepage",
  2:"buy_water",
  3:"deposit_bottle",
  4:"about",
  5:"pricing",
  6:"stats",
  7:"conclusion"
}

// Onload
window.onload = () => {
  console.log("Hello world")
}

// Load HTML page to App
function loadToApp () {

}

// Load pages Function
function loadPage (targetElement: HTMLElement, page_name: string, page_path: string = PAGES_PATH, page_fileExtention = PAGES_EXTENSION) {
  const path = page_path + page_name + page_fileExtention;
  targetElement.innerHTML = "";
  fetch(path)
      .then(response => response.text())
      .then(data => targetElement.innerHTML = data)
      .catch(error => console.error('Error loading content: ', error));
}