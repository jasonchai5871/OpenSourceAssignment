var storage = chrome.storage.local;

storage.get({
    'TranslateTozhCN': 'zh-CN',
    'TranslateToEN': 'en'
}, function (items) {
    var zh_CN = items.TranslateTozhCN,
        en = items.TranslateToEN;

    chrome.contextMenus.create({
        id: 'Translate_To_zh_CH',
        title: chrome.i18n.getMessage('contextMenuTitleTranslate', zh_CN),
        contexts: ['selection']
    });
    chrome.contextMenus.create({
        id: 'Translate_To_en',
        title: chrome.i18n.getMessage('contextMenuTitleTranslate', en),
        contexts: ['selection']
    });

});

chrome.contextMenus.onClicked.addListener(function (info, tab) {
    var highlightedText = info.selectionText;

    if (info.menuItemId == 'Translate_To_zh_CH') {
        storage.get({
            'GoogletranslateURL': 'https://translate.google.com/#auto/zh-CN/'
        }, function (item) {
            chrome.windows.create({
                url: item.GoogletranslateURL + encodeURIComponent(highlightedText),
            });
        });
    }
    if (info.menuItemId == 'Translate_To_en') {
        storage.get({
            'GoogletranslateURL': 'https://translate.google.com/#auto/en/'
        }, function (item) {
            chrome.windows.create({
                url: item.GoogletranslateURL + encodeURIComponent(highlightedText),
            });
        });
    }

});
