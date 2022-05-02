pages = [
    "https://www.google.com/",
    "https://www.bing.com/",
    "https://search.yahoo.com/",
    "https://duckduckgo.com/",
    "https://www.ecosia.org/"
]

const random = Math.floor(Math.random() * pages.length);
console.log(random, pages[random]);

chrome.tabs.update({url: pages[random]});