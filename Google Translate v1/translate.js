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

