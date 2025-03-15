// Constants
const appElement: HTMLElement | null = document.getElementById("app");
const PAGES_PATH: string = "pages/";
const PAGES_EXTENSION: string = ".html";
let currentPageIndex: number | null = null;
const PAGES: Record<number, string> = {
  1: "homepage",
  2: "buy_water",
  3: "deposit_bottle",
  4: "about",
  5: "pricing",
  6: "stats",
  7: "conclusion",
};

// Onload
window.onload = async () => {
  console.log("Hello world");
  await loadToAppByIndex(3) // Change default homepage
};

// Load HTML page to App by Index
async function loadToAppByIndex(index: number): Promise<void> {
  const pageName = PAGES[index];

  if (!pageName) {
    console.error(`Page with index ${index} not found!`);
    return;
  }

  if (!appElement) {
    console.error("App container not found!");
    return;
  }
  await loadPage(appElement, pageName); // Load the page according to index.
}

// Load pages Function
function loadPage(targetElement: HTMLElement, pageName: string, pagePath: string = PAGES_PATH, pageFileExtension: string = PAGES_EXTENSION): void {
  const path = `${pagePath}${pageName}${pageFileExtension}`;
  targetElement.innerHTML = "";

  fetch(path)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Failed to load ${path}`);
      }
      return response.text();
    })
    .then((data) => (targetElement.innerHTML = data))
    .catch((error) => console.error("Error loading content:", error));
}