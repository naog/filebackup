var FindProxyForURL = function(init, profiles) {
    return function(url, host) {
        "use strict";
        var result = init, scheme = url.substr(0, url.indexOf(":"));
        do {
            result = profiles[result];
            if (typeof result === "function") result = result(url, host, scheme);
        } while (typeof result !== "string" || result.charCodeAt(0) === 43);
        return result;
    };
}("+\u81ea\u52a8", {
    "+\u81ea\u52a8": "+__ruleListOf_\u81ea\u52a8",
    "+__ruleListOf_\u81ea\u52a8": function(url, host, scheme) {
        "use strict";
        if (/(?:^|\.)binance\.com$/.test(host)) return "+7890";
        if (/(?:^|\.)binance\.cloud$/.test(host)) return "+7890";
        if (/(?:^|\.)binance\.me$/.test(host)) return "+7890";
        if (/(?:^|\.)binancezh\.info$/.test(host)) return "+7890";
        if (/(?:^|\.)binancezh\.jp$/.test(host)) return "+7890";
        if (/(?:^|\.)binancezh\.io$/.test(host)) return "+7890";
        if (/(?:^|\.)binancezh\.top$/.test(host)) return "+7890";
        if (/(?:^|\.)bnbstatic\.com$/.test(host)) return "+7890";
        if (/(?:^|\.)bntrace\.com$/.test(host)) return "+7890";
        if (/(?:^|\.)mokexapp\.cloud$/.test(host)) return "+7890";
        if (/(?:^|\.)saasexch\.com$/.test(host)) return "+7890";
        if (/(?:^|\.)saasexch\.cc$/.test(host)) return "+7890";
        if (/(?:^|\.)okx\.com$/.test(host)) return "+7890";
        if (/(?:^|\.)bycbe\.com$/.test(host)) return "+7890";
        if (/(?:^|\.)byapis\.com$/.test(host)) return "+7890";
        if (/(?:^|\.)bybit\.com$/.test(host)) return "+7890";
        if (/(?:^|\.)kraken\.com$/.test(host)) return "+7890";
        if (/(?:^|\.)bitfinex\.com$/.test(host)) return "+7890";
        if (/(?:^|\.)bitget\.com$/.test(host)) return "+7890";
        if (/(?:^|\.)mexc\.com$/.test(host)) return "+7890";
        if (/(?:^|\.)gate\.io$/.test(host)) return "+7890";
        if (/(?:^|\.)primexbt\.com$/.test(host)) return "+7890";
        if (/(?:^|\.)pionex\.com$/.test(host)) return "+7890";
        if (/(?:^|\.)pionex\.cc$/.test(host)) return "+7890";
        if (/(?:^|\.)exness\.com$/.test(host)) return "+7890";
        if (/(?:^|\.)coinglass\.com$/.test(host)) return "+7890";
        if (/(?:^|\.)tradingview\.com$/.test(host)) return "+7890";
        if (/(?:^|\.)coinzillatag\.com$/.test(host)) return "+7890";
        if (/(?:^|\.)googletagmanager\.com$/.test(host)) return "+7890";
        if (/(?:^|\.)bulianglin\.com$/.test(host)) return "+7890";
        return "DIRECT";
    },
    "+7890": function(url, host, scheme) {
        "use strict";
        if (/^127\.0\.0\.1$/.test(host) || /^::1$/.test(host) || /^localhost$/.test(host)) return "DIRECT";
        return "SOCKS5 127.0.0.1:7890; SOCKS 127.0.0.1:7890";
    }
});