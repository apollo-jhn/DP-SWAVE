"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// Constants
const appElement = document.getElementById("app");
const PAGES_PATH = "pages/";
const PAGES_EXTENSION = ".html";
let currentPageIndex = null;
const PAGES = {
    1: "homepage",
    2: "buy_water",
    3: "deposit_bottle",
    4: "about",
    5: "pricing",
    6: "stats",
    7: "conclusion",
};
// Onload
window.onload = () => __awaiter(void 0, void 0, void 0, function* () {
    console.log("Hello world");
    yield loadToAppByIndex(3); // Change default homepage
});
// Load HTML page to App by Index
function loadToAppByIndex(index) {
    return __awaiter(this, void 0, void 0, function* () {
        const pageName = PAGES[index];
        if (!pageName) {
            console.error(`Page with index ${index} not found!`);
            return;
        }
        if (!appElement) {
            console.error("App container not found!");
            return;
        }
        yield loadPage(appElement, pageName); // Load the page according to index.
    });
}
// Load pages Function
function loadPage(targetElement, pageName, pagePath = PAGES_PATH, pageFileExtension = PAGES_EXTENSION) {
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
