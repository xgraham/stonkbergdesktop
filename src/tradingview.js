(() => {
    "use strict"; (() => {
        function t(t = location.host) { return -1 !== ["i18n.tradingview.com", "partial.tradingview.com", "www.tradingview.com", "wwwcn.tradingview.com"].indexOf(t) || -1 !== ["d33t3vvu2t2yu5.cloudfront.net", "dwq4do82y8xi7.cloudfront.net", "s.tradingview.com", "s3.tradingview.com"].indexOf(t) || t.match(/^[a-z]{2}\.tradingview\.com/) || t.match(/prod-[^.]+.tradingview.com/) ? "battle" : t.includes("tradingview.com") || t.includes("staging") ? "staging" : t.match(/webcharts/) ? "staging_local" : (t.match(/^localhost(:\d+)?$/), "local") } const e = { "color-gull-gray": "#9db2bd", "color-brand": "#2962FF", "color-brand-hover": "#1E53E5", "color-brand-active": "#1848CC" }; function i(t) { const e = new URL(t, document.baseURI); return { host: e.host, pathname: e.pathname, href: e.href } } const r = JSON.parse('{"crypto-mkt-screener":{"width":1000,"height":490,"defaultColumn":"overview","market":"crypto","screener_type":"crypto_mkt","displayCurrency":"USD","isTransparent":false},"events":{"width":510,"height":600,"isTransparent":false,"hideImportanceIndicator":false,"autosize":false},"forex-cross-rates":{"width":770,"height":400,"isTransparent":false,"currencies":["EUR","USD","JPY","GBP","CHF","AUD","CAD","NZD","CNY"],"frameElementId":null,"autosize":false},"forex-heat-map":{"width":770,"height":400,"isTransparent":false,"currencies":["EUR","USD","JPY","GBP","CHF","AUD","CAD","NZD","CNY"],"frameElementId":null,"autosize":false},"hotlists":{"width":400,"height":600,"isTransparent":false,"dateRange":"12M","showSymbolLogo":false},"market-overview":{"width":400,"height":650,"isTransparent":false,"dateRange":"12M","showSymbolLogo":true},"market-quotes":{"width":770,"height":450,"isTransparent":false,"showSymbolLogo":false},"mini-symbol-overview":{"width":350,"height":220,"symbol":"FX:EURUSD","dateRange":"12M","trendLineColor":"rgba(41, 98, 255, 1)","underLineColor":"rgba(41, 98, 255, 0.3)","underLineBottomColor":"rgba(41, 98, 255, 0)","isTransparent":false,"autosize":false,"largeChartUrl":""},"screener":{"width":1100,"height":523,"defaultColumn":"overview","defaultScreen":"general","market":"forex","showToolbar":true,"isTransparent":false},"single-quote":{"width":350,"symbol":"FX:EURUSD","isTransparent":false},"symbol-profile":{"width":480,"height":650,"symbol":"NASDAQ:AAPL","isTransparent":false},"symbol-info":{"width":1000,"symbol":"NASDAQ:AAPL","isTransparent":false},"technical-analysis":{"interval":"1m","width":425,"isTransparent":false,"height":450,"symbol":"NASDAQ:AAPL","showIntervalTabs":true},"ticker-tape":{"isTransparent":false,"displayMode":"adaptive","showSymbolLogo":false},"tickers":{"isTransparent":false,"showSymbolLogo":false},"financials":{"width":480,"height":830,"autosize":false,"symbol":"NASDAQ:AAPL","isTransparent":false,"displayMode":"regular","largeChartUrl":""},"timeline":{"width":480,"height":830,"autosize":false,"isTransparent":false,"displayMode":"regular","feedMode":"all_symbols"}}'); var n, s; !function (t) { let e; !function (t) { t.SetSymbol = "set-symbol", t.SetInterval = "set-interval" }(e = t.Names || (t.Names = {})) }(n || (n = {})), function (t) {
            let e; !function (t) {
                t.SymbolClick = "tv-widget-symbol-click", t.WidgetLoad = "tv-widget-load", t.ResizeIframe = "tv-widget-resize-iframe", t.NoData = "tv-widget-no-data"
            }(e = t.Names || (t.Names = {}))
        }(s || (s = {})); const o = ["locale", "symbol", "market"]; const a = ["customer", "symbol", "dateRange", "trendLineColor", "underLineColor", "underLineBottomColor", "width", "height", "locale", "colorTheme", "isTransparent", "noTimeScale", "chartOnly", "autosize", "largeChartUrl"]; new class extends class {
            constructor() { this._getScriptsInfo().forEach((t => { this._replaceScript(t) })) } get widgetId() { throw new Error("Method must be overridden") } get widgetUtmName() { return this.widgetId } get defaultSettings() { return r[this.widgetId] } get propertiesToWorkWith() { return [] } get useWidgetHostForProduction() { return !1 } filterRawSettings(t) { const e = {}; return Object.keys(t).forEach((i => { -1 !== this.propertiesToWorkWith.indexOf(i) && (e[i] = t[i]) })), e } get propertiesToSkipInHash() { return ["customer", "locale"] } get propertiesToAddToGetParams() { return ["locale"] } _getScriptsInfo() { const e = document.currentScript ? document.currentScript.src : null; if (!e) return console.error("Could not self-replace the script, widget embedding has been aborted"), []; const { host: r, href: n } = i(e), s = document.getElementsByTagName("script"), o = []; for (let t = 0; t < s.length; t++) { const e = s.item(t); e.src && i(e.src).href === n && o.push(e) } const a = t(r); return o.map((t => ({ scriptHost: r, scriptEnv: a, scriptElement: t }))) } _replaceScript(t) {
                const { scriptEnv: i, scriptHost: r, scriptElement: n } = t; this.script = n; const o = this._scriptContentToJSON(), a = function (t) { if (null === t) return null; const e = t.querySelector("#tradingview-copyright"), i = t.querySelector("#tradingview-quotes"), r = e || i; return r && t.removeChild(r), r }(this.script.parentNode), l = !!this.script.parentNode.querySelector(".tradingview-widget-copyright"); this.hasCopyright = a || l, o && (this.settings = this.filterRawSettings(o)), o && this._isValidSettings() || (console.error("Invalid settings provided, fall back to defaults"), this.settings = this.filterRawSettings(this.defaultSettings)); const c = "32px", h = isNaN(this.settings.height) ? this.settings.height : this.settings.height + "px", d = isNaN(this.settings.width) ? this.settings.width : this.settings.width + "px", g = this.script.parentNode.classList.contains("tradingview-widget-container"); this.script.parentNode && g ? this.iframeContainer = this.script.parentNode : this.iframeContainer = document.createElement("div"), this.iframeContainer.style.width = d, this.iframeContainer.style.height = h, this.iframeContainer.appendChild(function () {
                    const t = document.createElement("style")
                        ; return t.innerHTML = `\n\t.tradingview-widget-copyright {\n\t\tfont-size: 13px !important;\n\t\tline-height: 32px !important;\n\t\ttext-align: center !important;\n\t\tvertical-align: middle !important;\n\t\t/* @mixin sf-pro-display-font; */\n\t\tfont-family: -apple-system, BlinkMacSystemFont, 'Trebuchet MS', Roboto, Ubuntu, sans-serif !important;\n\t\tcolor: ${e["color-gull-gray"]} !important;\n\t}\n\n\t.tradingview-widget-copyright .blue-text {\n\t\tcolor: ${e["color-brand"]} !important;\n\t}\n\n\t.tradingview-widget-copyright a {\n\t\ttext-decoration: none !important;\n\t\tcolor: ${e["color-gull-gray"]} !important;\n\t}\n\n\t.tradingview-widget-copyright a:visited {\n\t\tcolor: ${e["color-gull-gray"]} !important;\n\t}\n\n\t.tradingview-widget-copyright a:hover .blue-text {\n\t\tcolor: ${e["color-brand-hover"]} !important;\n\t}\n\n\t.tradingview-widget-copyright a:active .blue-text {\n\t\tcolor: ${e["color-brand-active"]} !important;\n\t}\n\n\t.tradingview-widget-copyright a:visited .blue-text {\n\t\tcolor: ${e["color-brand"]} !important;\n\t}\n\t`, t
                }()); const p = a && !this.settings.whitelabel, m = this.hasCopyright ? `calc(${h} - 32px)` : h; this.settings.utm_source = location.hostname, this.settings.utm_medium = l ? "widget_new" : "widget", this.settings.utm_campaign = this.widgetUtmName, this.iframe = this._createIframe(m, d, r, i, n.id); const u = this.iframeContainer.querySelector(".tradingview-widget-container__widget"); if (u ? (this.script.parentNode.replaceChild(this.iframe, u), this.script.parentNode.removeChild(this.script)) : g ? (this.iframeContainer.appendChild(this.iframe), this.script.parentNode.removeChild(this.script)) : (this.iframeContainer.appendChild(this.iframe), this.script.parentNode.replaceChild(this.iframeContainer, this.script)), function (t, e, i) { const r = e.contentWindow; if (!r) return console.error("Cannot listen to the event from the provided iframe, contentWindow is not available"), () => { }; function n(e) { e.source && e.source === r && e.data && e.data.name && e.data.name === t && i(e.data.data) } window.addEventListener("message", n, !1) }(s.Names.ResizeIframe, this.iframe, (t => { t.width && (this.iframe.style.width = t.width + "px", this.iframeContainer.style.width = t.width + "px"), this.iframe.style.height = t.height + "px", this.iframeContainer.style.height = t.height + (this.hasCopyright ? 32 : 0) + "px" })), p) { const t = document.createElement("div"); t.style.height = c, t.style.lineHeight = c, t.style.width = d, t.style.textAlign = "center", t.style.verticalAlign = "middle", t.innerHTML = a.innerHTML, this.iframeContainer.appendChild(t) }
            } _iframeSrcBase(t, e) { const i = "https://www.tradingview-widget.com"; let r = this.useWidgetHostForProduction ? i : "https://s.tradingview.com"; return this.settings.useWidgetHost ? r = i : "local" === e ? r = `http://${t}` : "staging" === e && (r = -1 !== t.indexOf("beta.tradingview.com") ? "https://betacdn.tradingview.com" : `https://${t}`), r += `/embed-widget/${this.widgetId}/`, this.settings.customer && -1 !== this.propertiesToSkipInHash.indexOf("customer") && (r += `${this.settings.customer}/`), r } _isValidSettings() {
                const t = function (t) {
                    if (void 0 === t) return !0; const e = parseInt(t) + "%" == t + ""
                        ; return parseInt(t) + "" == t + "" || e || "auto" === t
                }; return t(this.settings.width) && t(this.settings.height)
            } _buildGetQueryString() { const t = this.propertiesToAddToGetParams.filter((t => -1 !== o.indexOf(t))); return 0 === t.length ? "" : "?" + function (t) { const e = []; for (const i in t) t.hasOwnProperty(i) && null != t[i] && e.push({ key: i, pair: encodeURIComponent(i) + "=" + encodeURIComponent(t[i]) }); return e.sort(((t, e) => t.key > e.key ? 1 : t.key < e.key ? -1 : 0)).map((t => t.pair)).join("&") }(function (t, e) { const i = Object.create(Object.getPrototypeOf(t)); for (const r of e) Object.prototype.hasOwnProperty.call(t, r) && (i[r] = t[r]); return i }(this.settings, t)) } _buildHashString(t) { const e = {}; t && (e.frameElementId = t), Object.keys(this.settings).forEach((t => { -1 === this.propertiesToSkipInHash.indexOf(t) && (e[t] = this.settings[t]) })); return Object.keys(e).length > 0 ? "#" + encodeURIComponent(JSON.stringify(e)) : "" } _scriptContentToJSON() { const t = this.script.innerHTML.trim(); try { return JSON.parse(t) } catch (t) { return console.error(`Widget settings parse error: ${t}`), null } } _createIframe(t, e, i, r, n) { const s = document.createElement("iframe"); n && (s.id = n), this.settings.enableScrolling || s.setAttribute("scrolling", "no"), s.setAttribute("allowtransparency", !0), s.setAttribute("frameborder", 0), s.style.boxSizing = "border-box", s.style.height = t, s.style.width = e; const o = this._iframeSrcBase(i, r) + this._buildGetQueryString() + this._buildHashString(n); return s.setAttribute("src", o), s }
        }{ get widgetId() { return "mini-symbol-overview" } get propertiesToWorkWith() { return [...a, "useWidgetHost"] } }
    })()
})();