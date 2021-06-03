var contextMenuItem = {
    "id": "jotIdea",
    "title": "Jot",
    "contexts": ["selection"]
};

chrome.runtime.onInstalled.addListener(function() {
    chrome.contextMenus.create(contextMenuItem)
});

chrome.contextMenus.onClicked.addListener(function(info) {
    if (info.menuItemId == "jotIdea") {
        console.log(info.selectionText)
    }
})