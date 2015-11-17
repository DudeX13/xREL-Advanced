// ==UserScript==
// @name			xREL-Advanced
// @namespace		https://github.com/d3rMoB/xREL-Advanced
// @description		This Script adds some functions to xREL
// @autor			d3rMoB
// @email			der.mad.mob(at)gmail.com
// @include			*xrel.to*
// @exclude			http://api.xrel.to*
// @exclude			https://api.xrel.to*
// @require			http://code.jquery.com/jquery-latest.js
// @require			https://github.com/Krinkle/jquery-json/raw/master/dist/jquery.json.min.js
// @grant			GM_log
// @grant			GM_addStyle
// @grant			GM_getValue
// @grant			GM_setValue
// @grant			GM_xmlhttpRequest
// @icon			https://github.com/d3rMoB/xREL-Advanced/raw/master/xrel.png
// @updateURL		https://github.com/d3rMoB/xREL-Advanced/raw/master/xREL.to_Advanced.user.js
// @version			0.2.2
// ==/UserScript==

// release name search engines
var searchEngines = new Array();
var productNameSearchEngines = new Array();

// Release Name based search engines

// 3dl.tv
newEngine = new Object();
newEngine["id"] = "3dltv";
newEngine["title"] = "3dl.tv";
newEngine["baseUrl"] = "http://3dl.tv/?action=search&q=%s";
newEngine["icon"] = "data:image/x-icon;base64,AAABAAEAEBAAAAEAIABoBAAAFgAAACgAAAAQAAAAIAAAAAEAIAAAAAAAAAAAABMLAAATCwAAAAAAAAAAAAAAAAAAgZPrQIGT63+Bk+t/gZPrf4GT63+Bk+t/gZPrf4GT63+Bk+t/gZPrf4GT63+Bk+tQAAAAAAAAAAAAAAAAAAAAAIWJ8H9QVur/OkDn/zpA5/86QOf/OkDn/zpA5/86QOf/OkDn/zpA5/89Q+f/S1Dp/3V67r+FifAQAAAAAAAAAACGj/F/O0ro/yIz5f8iM+X/IjPl/yIz5f8iM+X/IjPl/yIz5f8iM+X/IjPl/yU25f86Sej/eILvvwAAAAAAAAAAhYvwf1pi6/9GT+n/Rk/p/0ZP6f9GT+n/Rk/p/0ZP6f9GT+n/QEno/zE65v8kLuT/JC7k/09X6v+Fi/AwAAAAAIWM8CCFjPBAhYzwQIWM8ECFjPBAhYzwQIWM8ECFjPBAhYzwQIWM8EBeZ+u/MDzm/yEu5P9BTOj/hYzwcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAdYDvUDZG6P8hM+X/RlXp/4WO8VAAAAAAAAAAAAAAAACFkvFghZLxf4WS8X+FkvF/hZLxf4WS8X+FkvF/d4bvf1Bj698tROf/L0Xn/2Z27e+FkvEQAAAAAAAAAAAAAAAAeozwv0Nc6v84U+n/OFPp/zhT6f84U+n/OFPp/zNO6P8pRef/I0Hm/0Jb6t+ElPEwAAAAAAAAAAAAAAAAAAAAAHqQ8b9CYuv/OFnq/zhZ6v84Wer/OFnq/zhZ6v8yVen/KEzo/yJH5/87XOr/g5jyYAAAAAAAAAAAAAAAAAAAAACDnPJgg5zyf4Oc8n+DnPJ/g5zyf4Oc8n+DnPJ/dZDwf01w7N8pU+j/JVDo/1d57f+DnPIgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABpi/BgMF/q/xxQ6P8/a+z/gp/yYAAAAAAAAAAAgqLzYIKi83+CovN/gqLzf4Ki83+CovN/gqLzf4Ki8390mPJ/THru3yhf6v8cVun/P3Ds/4Ki82AAAAAAAAAAAHie8r9Adu3/NW/s/zVv7P81b+z/NW/s/zVv7P81b+z/MGvr/yVj6v8dXen/IGDq/1KD7v+CpvMgAAAAAAAAAABnlvG/J2nr/xpg6v8aYOr/GmDq/xpg6v8aYOr/GmDq/xpg6v8aYOr/IGTr/z967f+BqPOPAAAAAAAAAAAAAAAAf6jzv0uF7/9Bfe7/QX3u/0F97v9Bfe7/QX3u/0F97v9Bfe7/Q3/u/1WL7/+BqfN/AAAAAAAAAAAAAAAAAAAAAIGp8zCBqfNAganzQIGp80CBqfNAganzQIGp80CBqfNAganzQIGp80CBqfMQAAAAAAAAAAAAAAAAgAcAAIABAACAAQAAgAAAAIAAAAD/4AAA4AAAAOABAADgAQAA4AAAAP/gAADAAAAAwAAAAMABAADAAwAAwAcAAA==";
newEngine["active"] = false;
searchEngines.push(newEngine);

// crawli.net
newEngine = new Object();
newEngine["id"] = "crawlinet";
newEngine["title"] = "crawli.net";
newEngine["baseUrl"] = "http://www.crawli.net/alles/%s";
newEngine["icon"] = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAAZiS0dEAP8A/wD/oL2nkwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAd0SU1FB9oMCwwNCjHhkd4AAAB2SURBVDjLY0xKSvrPQAFgYWBgYJg3bx5ZmpOSkhiYGCgELMic/4pvUSQZ7wtDGGfQfGnCCGcyoWtmvC8M14huIFwjkoEUe4G6YYDV/8gA5nRsYYAO/iu+HSJhwITuZ2SnYw0HfIGIUwNSoKGwB086SEpKItsAABeVI9/RqvTPAAAAAElFTkSuQmCC";
newEngine["active"] = false;
searchEngines.push(newEngine);

// ddl-search.biz
newEngine = new Object();
newEngine["id"] = "ddlsearchbiz";
newEngine["title"] = "ddl-search.biz";
newEngine["baseUrl"] = "http://ddl-search.biz/FremdSuche/?s=%s";
newEngine["icon"] = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAAZiS0dEAP8A/wD/oL2nkwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAd0SU1FB9kKBBIdEi9AAvsAAAJFSURBVDjLndFPSJNxHMfxz/N3zx4x3Rro8u+croYRogQNhgMjIkMiuoUeokN1qEOHLp46lJpzVlCgGCQNSaSDhIWQoNIfbfnnWWlLh+ac20hj6jbn9jzz1ymIkoW+T9/TCz58KfxRc4tdjERjlRxL6xPJ5JYipyZa790NIU3U7+P6jZtHV/y++rk5DwWKTlAUk9RmZ+eXmcpGu7o6e9ICZ+vOG7fj0Vt6vT7e7mhTqTj+Y4xn+x87BxTXQG9jJs9KfX29uyKM7qC2Qq3OrLWevBB4dP9OrShmBHhBNbjDcUFrVbmiMRxzfZ2arTcfKZZmZ2Yi/wCCOuuUxXbG7GhrLGBAfQbgk4EAA+QoQD6ydRylZBWs+dw705Lk/Rtgc/MKC83llTk8YAIwpQBBABUMQLMAOAbJQ0WlOlEUtbtNYLfj0XWGSWkUACxgTAEqAqQAUAkAGxGkdAcEUywWe7ErsOLzDg8P9pouXq6v2SJYVatRItKADGB5HWB3kOGZfjW27A+8T/fOgqZWu+TdIGT8ByHvQoR8CBHyZY2QT9Is6ezoeBIOhzXpAAiCqvRcXe0zZ9/rn0Pjfrn/zUT06rUrL/P0uZfaHzxc9szNTyaS8mH8J4qh6aIMUX2c51kjAAYADEZjQ4vdQcZcEyuEkBrspxMWy21nz3PiXVgMb0Yip/djMDabzT4y+pZsRqOrC4vfqyenJHbPirW6utnzbZ4kZdkfDIWamL0CvqWlIbfbLQSCAa67++kItZ8tgiBUFRsMJRTg+gXC7u1GcQ6o1QAAAABJRU5ErkJggg=="
newEngine["active"] = false;
//searchEngines[1]["modifyReleaseName"] = function(relName) { return relName.replace(/\./g, " "); };
searchEngines.push(newEngine);

// ddl-warez.to
newEngine = new Object();
newEngine["id"] = "ddlwarezto";
newEngine["title"] = "ddl-warez.to";
newEngine["baseUrl"] = "http://ddl-warez.to/?search=%s";
newEngine["icon"] = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAADaElEQVR42m2S3U/aZxiG2cGy7G9quizb0p24j2zLmsV1jUm7udq1M0rrOjWlVkUtgqgERSbFD6pYhPhN1CrqkKoogvCjKoiAqIiIaNWD5dov3UEP1oM7efIk9/Xed55XArz3LqmHhz8oq1dfftSkrZDWKkcKquqC+RV1qduV9XvFderlSq3OpNQbCyTvMtfq2i8/UKj778jrM0UNWmQGE4q+ARptY6hto29m2dMe7jfr+R+gsLJOml8hz9xr1qG0DNLpmKff7WXIF2Q0sMmYqOG1V1jcPowO11tAS0vL+4+aNHU/V9Qi7zTTMe1kYFVgfDOGPbLHaDTJ1M4h4/EU47EkM7E9JkOxt4CSGpX0pqz6H8UzK91ON7ZAiKGtPfpFoymSxLydomsrRW/kAPPWPhZxNx47+A/QaOi8dKP8cfqxsZe/Zl5i8m3SF05gjaXo2D5gcv+Y+NkFnaLJnT5hMZlB5Y3QLogJenv//rBIruj/XalBOTxJ29IapvU4z7eTWHfSGMWXJ/azbL8+RxVMMHeQZXb3CNnSOg2rISTKtrZLeWVV2T8MPdS/cGFcC9ET3uW5GM+WSNMc2sccSxM8OacqkGAqmcWxm6ZcBKg8IqC0vrEyV1bLnz2DNDs96HxhNGvbaIJxngg7FK1EMYjdhdMLKoQEkyJgInHI3Tk/JbNeJNdKHo7kytU8tNppcK6iWAxgFLZpCURR+qMogruM7B0jnFxQ5k9gF2eXWKNuJUSNy4/kym1p8LqiBZltgmqHG8VLP/50Fv/RCf7MKYHjMzZOz1k4eo3UE8USO2Qje4bv8ATvQQbJR78WpX5StlLab6fGsUTxmJPfhuYonFimaGaNYtc6xYshChfD3HSuc2tO4O60lzujCxTYHG8AiVwxwb2+EUpHZvmlx47G5UPv2aTNF0EvxNGLNVS+KHmTHspdAq3eMNqlIJp5H5JPCqTL38ubKDQNkt89yDVdHyOBMC/CO0yKGhd/4Yp494X9I34ccNLtj+BPZbBvRLELYSRXS2SmL8qfcOuphTyDha8ajOQ0dPCl1szXeitXdFYqp93MxZN82zWK0fOK7mWBz1SdfK5oR3JfqSn4tFjGdU0XP2i6uap9xjcaUa1mvmu38rGqiweDU0xv7ZAj7vXzHgzOFS5Xa8lp7OBfJdgIkg/awOAAAAAASUVORK5CYII=";
newEngine["active"] = true;
searchEngines.push(newEngine);

// dnmedia.biz
newEngine = new Object();
newEngine["id"] = "dnmediabiz";
newEngine["title"] = "dnmedia.biz";
newEngine["baseUrl"] = "http://dnmedia.biz/search_gcse?q=%s"
newEngine["icon"] = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAadEVYdFNvZnR3YXJlAFBhaW50Lk5FVCB2My41LjEwMPRyoQAAAb9JREFUOE+FUmtLAkEU9a9qLwqzDNc0Q8uwh/klKDTNTW1Ns4eRli2lhQa+3dTKfKxamglCHwv61N0dXaWyYBhm786595wzh7c1IEXLPDhNTM47JJod0RxX/HngtUsCzDauoqO3zUK5ksgcKFZNAuxXWC9AWUlmg7irHEuHLPtGvuQvgImPnWjWYYITWyzcxC83bKZ/AAIs6vImj0kAPFH3Lrm2TUkgZQ7sjiosJRAgVNIRyrti8OuJu4vQ9sgMXIJfllGFXbxgFSrBCbtYDXUGANMRn73p5XwoTq7hiA/sAQPxVnuNOE7oKFVNZp3SJQaAD8uTbjJ3FY4f+iivH7qi9qA7sGn/fP+AejmehuEMJWhzqjU0Hoov98XE0fmOSMWxh0bps6u3ejMfjJUiKWJiHn7xoJl1bHZ3aoGYVOPDMs5+OIAB1dQdrMYjnXCTaCwS3TWB854VYC+FU3Qs3arUgAUS1nm4TkA6Dw/CZFkyGHF6njO5Rq7E5KVr67fb7OfBrK6ezZ/pjK1qnfL40e0+E1hVGd/16yMNADDau6yHKPQHQHKHILlqCC8+IodQmodknLY+GuDVUBZQNHo4fwElCLB7fxp5DwAAAABJRU5ErkJggg==";
newEngine["active"] = false;
searchEngines.push(newEngine);

// gload.cc
newEngine = new Object();
newEngine["id"] = "gloadcc";
newEngine["title"] = "gload.cc";
newEngine["baseUrl"] = "http://gload.cc/?unonce=e1e78b3aae&uformid=13&s=uwpsfsearchtrg&taxo%5B0%5D%5Bname%5D=category&taxo%5B0%5D%5Bopt%5D=&taxo%5B0%5D%5Bterm%5D=uwpqsftaxoall&cmf%5B0%5D%5Bmetakey%5D=Genre&cmf%5B0%5D%5Bcompare%5D=1&cmf%5B0%5D%5Bvalue%5D=uwpqsfcmfall&skeyword=%s"
newEngine["icon"] = "data:image/x-icon;base64,AAABAAEAEBAAAAAAIABoBAAAFgAAACgAAAAQAAAAIAAAAAEAIAAAAAAAQAQAAAAAAAAAAAAAAAAAAAAAAAD///8B////Af///wH///8B////Af///wH///8B////Af///wH///8B////AQAAAAf///8B////Af///wH///8B////Af///wH///8BAAAAIQAAADsAAABJAAAAYQAAAH0oKCifPDo5sygpKJcAAABxAAAATQAAACH///8B////Af///wH///8BAAAARQAAAF0AAABpKykqq1pWVf/PxMP/4tHQ/5OGhP+dkJD/q6am/0JBQL0AAABd////Af///wH///8BAAAAYwAAAGcLEA1vdG9w/5KFg/9tZGL/mYqH/29kY/9hVlf/YFZY/1lNUf+Wio//jI6J9////wH///8BAAAAMQAAAI8OEhFpZV1d/0s/RP9jWFn/WFBS/2xgYv9kWlz/ZVpb/2xiYf9RSEr/DgEI/6OdnP9OUFB5////AQAAABkAAAAVXV1ZnT0wN/8iDxz/e3Z3/1pPVP9PP0P/mZOK/x4VHv8JAAP/OC0y/0Q7Pv8fCxf/WlhZ/0NFRA3///8B////AX55ecMYABX/UUJD/1RKS/+ZmJX/CQAH/5qPiP9DNjz/CgAE/y0fKP84MDT/IRgf/7Czs2////8B////Af///wGGf3//MBUn/y4fJv8AAAD/rKGa/29oaP9LP0P/QTM5/xoBEv8rHSb/QTk8/0tLSzP///8B////Af///wEAAAA/SExI/2VZYP8RAAv/AAAA/1NHSf+9uK7/KyEl/zstMv8hCxb/Jxch/0I5Pv9BP0Cd////Af///wH///8BAAAAMQAAAEsyNDM/bHRvgRoCE/8TAAv/sKyg/x4XGf8xJSv/JBIa/yUTHf8xJS3/ZWVh/////wH///8B////Af///wH///8B////Af///wE8Ljb/AAAA/8HDuP8iEhr/JhMf/yMSGv8hCxj/GQAT/04/R/82NTV/////Af///wH///8B////Af///wH///8BOC005QAAAP+wpZ7/U0VJ/wAAAP8uHCb/MiIo/y8gKP87MTf/TEdI/ywsK2f///8B////Af///wH///8B////AUI1QLsAAAD/rp+b/87DvP9sYWD/fnBu/0Y+P/8vLS7/Dw8P/1VTU/+Li4tf////Af///wH///8B////Af///wElHCHpAAAA/0k/Q/9WS0//RTo8/0E9O/9NSUj/Yl1b/2lmZ3////8B////Af///wH///8B////Af///wH///8Bg4ODbxkTFf8DAQf/AAAA50RARb1cWVl9RkdEH////wH///8B////Af///wH///8B////Af///wH///8B////Af///wG3u7ZjrbCvVf///wH///8B////Af///wH///8B////Af///wH///8BAAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//w==";
newEngine["active"] = false;
searchEngines.push(newEngine);

// kraftwerk.to
newEngine = new Object();
newEngine["id"] = "kraftwerkto";
newEngine["title"] = "kraftwerk.to";
newEngine["baseUrl"] = "http://kraftwerk.to/search.html?q=%s&search="
newEngine["icon"] = "data:image/x-icon;base64,AAABAAIAEBAAAAAAIABoBAAAJgAAACAgAAAAACAAqBAAAI4EAAAoAAAAEAAAACAAAAABACAAAAAAAEAEAAAAAAAAAAAAAAAAAAAAAAAA////Af///wH///8B////Af///wH///8B////Af///wH///8B////Af///wH///8B////Af///wH///8B////Ac7OzkXJyclFxMTERdXV1UXl5eVF4uLiReDg4EXd3d1F29vbRcPDw0WqqqpFqampRaenp0WmpqZFt7e3RcrKykXAuLL/eVA0/2VCKf/Ozcz/4+Pj/+Dg4P/e3t7/29vb/9nZ2f+po5//cUov/2lAJP9uSC3/mpWS/769vf/Kysr/1dDN/5dgOv90Nw3/pp2Y/+Dg4P/e3t7/29vb/9fX1/+3tLP/gFEy/4I+Dv+GRRf/k35v/8PDw//Jycn/ysrK/9XT0v+ecE//fDsO/5WGfP/e3t7/29vb/9jY2P+5uLf/h2NK/4E+D/+GRBb/j3Fc/7GxsP/Jycn/ysrK/8rKyv/c3Nz/qINq/4VBEv9/Z1X/1NTU/9ra2v/My8v/jXNh/38+Ef+FQhL/jGZK/6+trP/IyMj/yMjI/8nJyf/Kysr/5+fn/66Ugv+HRBb/dFA3/7++vv++vLv/mId7/30+E/+EQBD/ils6/66sq//Jycn/yMjI/8fHx//Jycn/ysrK/+jo6P+6qqD/i0od/3BAH/+nnJT/dkst/3o+Ff+DPw//iFQw/6KcmP/IyMj/ysrK/8jIyP/Hx8f/ycnJ/8rKyv/s7Oz/x763/5JXLv90PBb/n5OL/5pnQ/+MTSD/gj8R/3BQO/+uraz/zs7O/8zMzP/Kysr/ycnJ/8nJyf/Kysr/7e3t/8rHxP+XYj3/eDsQ/5aKg/+xpp//rp+U/6FyUv97PhT/Y0Ux/6qopv/Ozs7/zc3N/8zMzP/MzMz/zMzM/+/v7//b29v/o3dZ/389D/+Ne27/2tra/9PT0/+xqqb/pn9j/4VHG/9jPCL/nJaR/8vLy//R0dH/zs7O/8/Pz//w8PD/4+Pj/6yMdf+CPhD/gGNP/9vb2//g4OD/09PT/7ezsf+rinP/ik0i/2Y4Gf+Jfnf/z8/P/9TU1P/U1NT/8vLy/+bm5v+3oZH/hkMV/3dPNP/W1dX/5OTk/+Li4v/e3t7/wL69/66TgP+RVi3/bDYR/31uY//IyMj/2tra//T09P/y8vL/x7uz/5RZMP9+Ti3/x8PA/+jo6P/m5ub/5eXl/+Pj4//Ew8P/s6CS/5pkPv96RB//e2NS/7+7uf/19fWz9PT0s9TRz7PHuK6zvq2gs9PPzbPr6+uz6urqs+np6bPn5+ez4+Pjs8zMzLO9saqzu6yhs7Kej7Ozq6Wz////Af///wH///8B////Af///wH///8B////Af///wH///8B////Af///wH///8B////Af///wH///8B////AQAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8oAAAAIAAAAEAAAAABACAAAAAAAIAQAAAAAAAAAAAAAAAAAAAAAAAA////Af///wH///8B////Af///wH///8B////Af///wH///8B////Af///wH///8B////Af///wH///8B////Af///wH///8B////Af///wH///8B////Af///wH///8B////Af///wH///8B////Af///wH///8B////Af///wH///8B////Af///wH///8B////Af///wH///8B////Af///wH///8B////Af///wH///8B////Af///wH///8B////Af///wH///8B////Af///wH///8B////Af///wH///8B////Af///wH///8B////Af///wH///8B////Af///wH///8B////Af///wH///8B////Af///wH///8B////Af///wH///8B////Af///wH///8B////Af///wH///8B////Af///wH///8B////Af///wH///8B////Af///wH///8B////Af///wH///8B////Af///wH///8Bz8/Pi83NzYvKysqLx8fHi8XFxYvCwsKLw8PDi+bm5ovl5eWL5OTki+Pj44vi4uKL4eHhi9/f34ve3t6L3d3di9zc3Ivb29uL2dnZi62trYurq6uLqqqqi6mpqYupqamLqKioi6enp4umpqaLpqami62trYvBwcGLysrKi8rKyovMy8r/rZ2S/3lcSP9mUkT/ZVFE/2dVSf++vbz/5ubm/+Tk5P/j4+P/4uLi/+Dg4P/f39//3t7e/93d3f/c3Nz/2tra/9nZ2f+/v7//p6Wk/31q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J/+DPxD/cjYM/1MtFf9vYFb/r62s/87Ozv/b29v/29vb//X19f/z8/P/8vLy//Dw8P/Y2Nj/spaC/5ZcM/+EPw//djgN/3ZWQP+vqqb/39/f/+fn5//n5+f/5ubm/+Xl5f/k5OT/4+Pj/+Pj4//e3t7/vr6+/7SxsP+zoJT/roVp/5ZbMv+GQhP/dTgN/1guEf9nU0b/nJeU/8zLy//X19f/9fX1//T09P/z8/P/8vLy/9ra2v+5pJf/pHJP/5RZMP+LUiv/gFg8/66jnP/h4eH/6enp/+jo6P/o6Oj/5+fn/+bm5v/l5eX/5eXl/+Tk5P/d3d3/wsLC/7W0sv+0pZv/sYxy/51mQP+TWC//iVMu/29FKf96XEf/o5WM/7a1tP/29vb/9fX1//T09P/z8/P/3Nzc/8jAu//FsqT/wqye/76nl/+zmYf/vrWu/+Pj4//r6+v/6urq/+rq6v/p6en/6Ojo/+jo6P/n5+f/5+fn/+bm5v/e3t7/0NDQ/7++vf+7sKj/vKia/7qllv+6pJb/tZyL/6aFbv+lkIL/ube1//b29mf19fVn9PT0Z/T09Gfd3d1n0dHRZ8/Pz2fOzs5nzc3NZ8vLy2fKyspn5OTkZ+zs7Gfr6+tn6+vrZ+rq6mfq6upn6urqZ+np6Wfo6Ohn6OjoZ+fn52fn5+dnzc3NZ7+/v2e+vr5nvr6+Z76+vme+vr5nvr6+Z76+vme+vr5n////Af///wH///8B////Af///wH///8B////Af///wH///8B////Af///wH///8B////Af///wH///8B////Af///wH///8B////Af///wH///8B////Af///wH///8B////Af///wH///8B////Af///wH///8B////Af///wH///8B////Af///wH///8B////Af///wH///8B////Af///wH///8B////Af///wH///8B////Af///wH///8B////Af///wH///8B////Af///wH///8B////Af///wH///8B////Af///wH///8B////Af///wH///8B////AQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA";
newEngine["active"] = false;
searchEngines.push(newEngine);

// movie-blog.org
newEngine = new Object();
newEngine["id"] = "movieblogorg";
newEngine["title"] = "movie-blog.org";
newEngine["baseUrl"] = "http://www.movie-blog.org/index.php?s=%s";
newEngine["icon"] = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAAZiS0dEAP8A/wD/oL2nkwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAd0SU1FB9kKBg8xLofp7XoAAAL7SURBVDjLjZPLb1RVAMZ/5865c2fmTgu1M8p0KkgrNrZqtCiaroiJEtyQYmThK3Ghe/8CZYVxoRtMxI2aGFmYmKgxVcpDKaOQFiykCbbQp0OHgXmVmencx7nnuJEEN8bf6su3+K2+T/BvHCAPLN3T5eJxe/T+TGb34MBDT/T350fOX5guLy2vHjEwKQCEEPtyudyBsbGxZ3N9fUOfHD162HXd6p6nRw8ODz+6Z1tffxanm1ZgseELrpfusHDprFqZmRiVAOPj48c+PfbZjmymF4DhoV0ftn1FILtYqYRM3VQ0Ng2BFiAsEqkHSeVGJEwMSYDtOwfsbKaXxbUip385x+Wy4Ppti4bfwQgbgQ0mQloAGh1sYrtbsGR8UAIIGbc2lOLwx59ztZ4G2wUjAYWFQiBAGEBgb+kh3pMluNbCTnbttAC8MNRKxJCpLkLhoPwOkfKJoogwVARhSBCGmGSa+uN7uVNcJTICmejKWQDNZsfXMUG3myT02niBj5NM8Oo7b5DJ9uJ5PtpJ0d79As7MJK16BV9FYCd6JEC93mj7GtJugjC8RahAKUW5WOLQm68w9fssF53tOHMF6sVVDAYRMyBkWgLUapVqywM33Y1WAZu+YX29xNdfHOepZ55k6KWX2bWhWJwN8QIfY0DEQBsRlwDlG8X1+gYk090QhXi+RsYElhDs3fc8hbMnWKn7DL54gK0DjzD/8/eEQYDSkZYA63+t/nmjdJNE2gWj8LwQWwre/+A9pn+7wInvJjBAcW4WS8ZpewHa7xB1mm0J4G02/7h29Qrb8nksNEEQMDzyGCcnTjL50ykQAmPZeLcq4DegthSY6sIp2rc/kv/sfeZS4dfK/tfeykhLQKTRWnNu6jzaioMOoLEG1fllGivforzjwEWAu4LS9JkfTz+3/+ChuONAzOfK3AL4TWgsRVQXztAqfwX8ANTufV/sbmjWKq1E+r7XW8altDwPpZkia4UvqS++S9A+AlwGOvwHlpNKf7M1/3ABeBt4gP/B33UPYZAriBv5AAAAAElFTkSuQmCC";
newEngine["active"] = false;
searchEngines.push(newEngine);

// warez-world.org
newEngine = new Object();
newEngine["id"] = "warezworldorg";
newEngine["title"] = "warez-world.org";
newEngine["baseUrl"] = "http://warez-world.org/?s=%s";
newEngine["icon"] = "data:image/x-icon;base64,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";
newEngine["active"] = false;
searchEngines.push(newEngine);

// Google
newEngine = new Object();
newEngine["id"] = "Google";
newEngine["title"] = "Google.de";
newEngine["baseUrl"] = "http://www.google.de/search?as_q=%s";
newEngine["icon"] = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAAZiS0dEAP8A/wD/oL2nkwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAd0SU1FB9oMChIaNSwA0WoAAAMKSURBVDjLJdLLa5xVGMDh33vO900mk8ltMkkT2thoIg1KFm1EIUgDVtsuvIFSXKgtCOpWXXZbtRs3ipvWC25iEVFEEIMEhNp6wVtsjdEUEtKm0RjTmXRmMt+cy+ui/8GzeABwXvXHpVUdOT6jycMf6Gsfz2tQr1n1hp6fntLfBW0ZowE0YLQh6BYogPFO1Vo4dW6BlWYfcdfdnP7iX5bXG+Q6O5l8+yyljgI2RkQsSAQgkrBiUGMTCN5z+Z8IxW6itWzvpHz4/QpgyY/fRTZ1Px4hmoBHaKlFxaMRjEZIJGFXTx7TihgyjFguL3sQj1gInQUcFhshUYOVQEvBGUsi5hbpyESZC3+sk7T1EmOGMQkRi8lgY2GRtSHDjc5e0hYMVGr0bzucBpIrqxVGbyvx/NExZs5fZfHvKl3tkRPTexCEM7PvcOpIk6t37sdKjhAi7Q3H/is7PH5xFdn37Pv66on7eGJ6nErd8dlPa0yNdjM63Mvp2bOc/OEt7GA3RCXEABjECWpSpGaR/mPn1GU1DowUeGBykJNPHwRRvl76mUPvHiOODUA0ICCtFAB1HvEpeMGUbItiLs/FpSZvzPzFykYdVcsdpd2MjR6ArImJBhMSFI9ERUgRQE0L4yqb7GnPePSeMs8cHaeyHVCB4b4hLjx1hsPlg2ijRlQBtUS5NSgq4FJk5qtf9aHJCfp6Db66wNZ/SzS2rzM09iT5Yj8ueB776GW+XJ9Dc10QLMZFYrAQQDSo1jbnWfr2RXr5jSRtoJmh5sbZfehTukqjLG5c4973jnOz0MJ6iwYhegEPJot1/px7gduT79jb32Swq0C5p42yLLDxzUsohn3lvQx2DEDmCKLEAKlPEQ9Jq7pB0V8jn/Zws+YRb4kBCu0lQnMNcXV2TAfNWh0kxfgcURxBAxoV094zQlv/g9S3PNosoCFHIkXCjqVt6BE0V+TzX2a5Xl1HgkFChB1DbEWIOZI0MeJqm1qZH0arlxDXwCV52sYOk594jkury7zyyZuExGKyhICABiCF1+fkf8mQe5HVipVlAAAAAElFTkSuQmCC";
newEngine["active"] = true;
searchEngines.push(newEngine);

// product name based search engines
// [if the search of the page only works with product names, not release names!]

// 1load.in
newEngine = new Object();
newEngine["id"] = "1loadin";
newEngine["title"] = "1load.in";
newEngine["baseUrl"] = "http://1load.in/?Suche=%s";
newEngine["icon"] = "data:image/x-icon;base64,AAABAAEAEBAAAAAAIABoBAAAFgAAACgAAAAQAAAAIAAAAAEAIAAAAAAAQAQAAAAAAAAAAAAAAAAAAAAAAAD///8B////Af///wH///8B4fvsGY/ut11V5pmNQeSGnf///////////////////wH///8B////Af///wH///8B////Af///wH6/foDjO+7YQ/gZ8kAskv1AKJE/QCgQ/////////////////+E7bBl9Pv4B////wH///8B////Af///wHv+vQNQ+yToQCyU/8ArlH/AKpQ/wCjRf8AokT////////////+//3/AKBD/zPifafn+vET////Af///wHy+/YLRuuUoQDCX/8AvFj/ALZV/wCwUv8ArFD/AKZG/////////////////wCgQ/8AoEP/M+J9qe/88w3///8BiumwZQDSZ/8AzGT/AMZh/wC+Wf8AuFb/ALJT/wCsUP////////////////8AoEP/AKBD/wCgQ/9866tr////ARDgaNEA3Gz/ANZp/wDOZf8AyGL/AMBa/wC6V/8AslP/////////////////AKJE/wCgQ/8AoEP/Ddxlyf///wEAwlL/AON2/wDebf8A2Gr/ANJn/wDKY/8Awl//ALxY/////////////////wCmRv8AokT/AKBD/wCjRfuE7bBlAMJS/wDudf8A5nf/AOBz/wDaa/8A0mf/AMxk/wDGYf////////////////8ArFD/AKhP/wCjRf8AoEP/BttgzwC6Tv8A8n3/AO57/wDqc/8A4nT/s/zX////////////////////////////ALJT/wCuUf8AqlD/AKNF/wCiRP8AqkT/AOx0/wD2f/8A8Hz/AOx0/7T92P///////////////////////////wC8WP8AtlX/ALBS/wCsUP8Apkb/AKBA/wDKX/8A+oH/APZ//wDyff8k/5D/ffy//+z98/////////////////8AxmH/AL5Z/wC4Vv8AslP/AKxQ/wDSVNsApkL/AOBu/wD8gv8A+ID/APJ9/wDue/8i/ZP/7P3z///////q/fT/AM5l/wDIYv8AwFr/ALpX/wCyU/9456RxAKBA/wCqRP8A4m//APyC/wD4gP8A9n//APB8/23/tf+0/dj/RPmd/wDYav8A0mf/AMpj/wDCX/8AvFj/7PvyDyvccrMAoED/AKZC/wDOYP8A8n3/APqB/wD2f/8A8n3/AO51/wDmd/8A4HP/ANpr/wDSZ/8AzGT/AMZh/////wHg+ekZKdxxtQCgQP8AoED/AKxE/wDAUf8AzmD/ANJi/wDQYf8AzGD/AMhe/wDCUv8AvE//ALhN/wCyS/////8B////Aef67xNr5px9AMhQ4QCgQP8AoED/AKBA/wCgQP8Anj//AJ4//wCaPf8AmDz/AJM7/wCSOv8Ajjj/AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//w=="
newEngine["active"] = false;
productNameSearchEngines.push(newEngine);

// 1load.sx
newEngine = new Object();
newEngine["id"] = "1loadsx";
newEngine["title"] = "1load.sx";
newEngine["baseUrl"] = "http://1load.sx/?s=%s";
newEngine["icon"] = "data:image/x-icon;base64,AAABAAEAEBAAAAEAIABoBAAAFgAAACgAAAAQAAAAIAAAAAEAIAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAD///8A////AP///wD///8A5/XwGKbZx1x3xaqNaL+gnP///////////////////wD///8A////AP///wD///8A////AP///wD7/fwDpNnHYECwickVnWz1C5dm/QqXZf////////////////+e1sJk9/v6B////wD///8A////AP///wDz+fcMbMaooROhcf8Rnm7/Dpxr/wyZaP8LmGb////////////+//7/Cpdl/167mqft9/QS////AP///wD1+vgKbsaooRqpe/8Xpnb/FKNz/xGfb/8PnWz/DZpp/////////////////wqXZf8Kl2X/XLqZqPP69wz///8AodTAZCKyhP8eroD/G6t8/xineP8VpHT/EqBw/xCdbf////////////////8Kl2X/Cpdl/wqXZf+W0r1r////AEGwiNAmt4r/I7OG/yCvgv8crH3/Gah5/xaldf8ToXH/////////////////C5hm/wqXZf8Kl2X/Pq2Fyf///wAcpnb/KruP/ye4i/8ktIf/IbGD/x2tf/8aqXv/F6Z2/////////////////w2aaf8LmGb/Cpdl/w2YZ/qe1sJkHad3/y7AlP8rvJH/KLmN/yW2if8isoT/Hq6A/xurfP////////////////8QnW3/DZtq/wyZZ/8Kl2X/OKqCzxiicP8xw5n/LsGV/yy+kv8puo7/xezg////////////////////////////E6Fx/xGebv8OnGv/DJlo/wuYZv8RmWX/Lr+T/zLEmf8vwZb/Lb+T/8bt4f///////////////////////////xemdv8Uo3P/EZ9v/w+dbP8Nmmn/DZRf/x+re/80x53/MsWa/zDCmP9Yzan/nODM//H69/////////////////8bq3z/GKd4/xWkdP8SoHD/EJ1t/y+jddsQl2P/KbiL/zXHnf8zxpv/McOZ/y7Blf9Wy6j/8fr3///////w+vf/IK+C/xysff8ZqHn/FqV1/xOhcf+SzrdxDZRf/xGZZv8quYz/Ncie/zPGnP8yxJn/L8GW/4/dxf/G7eH/b9Cy/yS0h/8hsYP/Ha1//xqpe/8Xpnb/8fn2DlW0jrMNlF//EJdk/yGtfv8wwpf/NMed/zLFmv8wwpj/LsCU/yu8kf8ouY3/JbaJ/yKyhP8eroD/G6t8/////wDm9O4ZU7ONtQ2UX/8NlF//Eppn/xumdf8hrn7/I7GB/yKugP8grH3/Hqp6/xymdv8ao3P/GKBw/xadbf////8A////AO338xKIyrB8KaBx4A2UX/8NlF//DZRf/w2UX/8Nkl7/DZFc/wyPWv8LjVn/C4pW/wqIVP8JhVH//B8AAPAfAADABwAAgAMAAIADAAAAAQAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAIAAAADAAAAA8AAAAA=="
newEngine["active"] = false;
productNameSearchEngines.push(newEngine);

// goldesel.to
newEngine = new Object();
newEngine["id"] = "goldeselto";
newEngine["title"] = "goldesel.to";
newEngine["baseUrl"] = "http://goldesel.to/suche/%s";
newEngine["icon"] = "data:image/x-icon;base64,AAABAAIAEBAAAAAAIABoBAAAJgAAACAgAAAAACAAqBAAAI4EAAAoAAAAEAAAACAAAAABACAAAAAAAEAEAAAAAAAAAAAAAAAAAAAAAAAA////Af///wH///8B////Af///wGNjY0HjY2NG42NjTmNjY09jY2NPY2NjSWNjY0L////Af///wH///8B////Af///wH///8B////Af///wGNjY0djY2NcXaMna9ki6u/ZIusvWyMpb2NjY2vjY2Ng42NjS2NjY0D////Af///wH///8B////Af///wGNjY0VVIy4nRyL4/ULi/D/C4vw/wuL8P8Li/D/E4vp9UuMv9uNjY2fjY2NJ////wH///8B////Af///wH///8BNY7PawuO8P8Nje3nEY3qW0+NuxONjY0NG43jUwuN78ULjvD/Q43F4Y2NjWeNjY0D////Af///wH///8B////AQuR7tULkO/zTI69RY2NjVeNjY2DjY2NiY2NjYWBjZVhEZDq3Q6R7P2BjZWPjY2NDf///wH///8B////Af///wGNjY0DjY2NMWWPqqc1ks7lJZPb6yKT3eUwktLfZ4+pwT+Rx9cLlO//XI+xq42NjRH///8B////Af///wH///8BjY2NGzSVz8ELmO//DJfu5wuX7pULl+9/C5fvywuY7/8YluTxC5jv/0+Su7WNjY0T////Af///wH///8B////ASqY14cLnO//FprmyTKW0RP///8B////Af///wELm+9vC5zv/wuc7/9KlL+3jY2NE////wH///8B////AY2NjQUPoOvpD5/r+26RpEn///8B////Af///wH///8B////AQug7rMLoO7/Spa/t42NjRP///8B////Af///wEbouEdC6Xu/yef2OmNjY0/////Af///wH///8B////Af///wEPpOpvC6Xu/0qZvreNjY0T////Af///wH///8BDKjsGwup7v8potfvjY2Na42NjQX///8B////Af///wH///8BH6TedQup7v9Km763jY2NE////wH///8B////Af///wELq+7lEKrq/YCPlrWNjY0/jY2NB////wH///8BjY2NHSGm3MMLrO7/Sp2+t42NjRP///8B////Af///wH///8BC6/tewuv7f8wpdHpjY2NsY2NjXONjY1DjY2NV1mas60Mr+v9C6/t/0qevreNjY0T////Af///wH///8B////AQuy7QULsu23C7Lt/x2t3+9TnbfTYZmswTamzeUMsuv9C7Lt/wuy7f9FocGrjY2NEf///wH///8B////Af///wH///8B////AQu07WcLtO3RC7Tt/wu07f8LtO3lC7TtmQy07IULtO3/GLDjaY2NjQP///8B////Af///wH///8B////Af///wH///8B////Af///wH///8B////Af///wH///8B////Af///wH///8B////AQAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8oAAAAIAAAAEAAAAABACAAAAAAAIAQAAAAAAAAAAAAAAAAAAAAAAAA////Af///wH///8B////Af///wH///8B////Af///wH///8B////Af///wH///8B////AY2NjQeNjY0TjY2NGY2NjRmNjY0ZjY2NGY2NjReNjY0NjY2NA////wH///8B////Af///wH///8B////Af///wH///8B////Af///wH///8B////Af///wH///8B////Af///wH///8B////Af///wH///8BjY2NB42NjReNjY0pjY2NP42NjVeNjY1jjY2NY42NjWONjY1jjY2NX42NjU2NjY01jY2NH42NjQ2NjY0D////Af///wH///8B////Af///wH///8B////Af///wH///8B////Af///wH///8B////Af///wH///8BjY2NA42NjRGNjY0zjY2NX42NjYWNjY2bjY2Nq42NjbGNjY2xjY2NsY2NjbGNjY2vjY2Np42NjZONjY1xjY2NR42NjR+NjY0H////Af///wH///8B////Af///wH///8B////Af///wH///8B////Af///wH///8B////AY2NjQONjY0XjY2NSY2NjYWNjY2tjY2NwUeLwt1Fi8TXQovGzUCLyMlAi8jJQYvHzWCMr8WNjY29jY2Nw42NjbmNjY2bjY2NZY2NjSuNjY0J////Af///wH///8B////Af///wH///8B////Af///wH///8B////Af///wH///8BjY2NE42NjUuNjY2TR4zD3RmL5vcLi/D/C4vw/wuL8P8Li/D/C4vw/wuL8P8Li/D/C4vw/wuL8P8xjNPZbIymy42NjcWNjY2pjY2Na42NjSeNjY0F////Af///wH///8B////Af///wH///8B////Af///wH///8B////AY2NjQmNjY01Y42tnxiM5vcLjPD/C4zw/wuM8P8LjPD/C4zw/wuM8P8LjPD/C4zw/wuM8P8LjPD/C4zw/wuM8P8LjPD/PYzK342NjceNjY2ljY2NWY2NjRf///8B////Af///wH///8B////Af///wH///8B////Af///wH///8BjY2NGVqNtIELjfD/C43w/wuN8P8LjfD/Do3u4w+N7XsLjfAj////Af///wH///8BC43wdwuN8KsLjfD/C43w/wuN8P8LjfD/No3P542NjcGNjY2HjY2NLY2NjQP///8B////Af///wH///8B////Af///wH///8B////Af///wFajrQrEo/r6wuP8P8Lj/D/C4/w/xyP452NjY0HjY2NBY2NjRGNjY0XjY2NGY2NjRmNjY0ZjY2NExeP5zkLj/DdC4/w/wuP8P8Lj/D/UY66342NjaGNjY1HjY2NC////wH///8B////Af///wH///8B////Af///wH///8B////ARGQ630LkPD/C5Dw/wuQ8P8ZkOWZjY2NF42NjR+NjY05jY2NU42NjWGNjY1jjY2NY42NjWONjY1XjY2NO0aPwz8NkO/hC5Dw/wuQ8P8ZkOX5jY2Nr42NjV+NjY0X////Af///wH///8B////Af///wH///8B////Af///wH///8BC5Lv3QuS7/8Lku//DJLvzY2NjR+NjY1HjY2NcY2NjZWNjY2pjY2NsY2NjbGNjY2xjY2NsY2NjauNjY2XjY2NdTKQ0ZMLku//C5Lv/wuS7/9rjqfDjY2Na42NjRv///8B////Af///wH///8B////Af///wH///8B////Af///wH///8B////AY2NjQmNjY0pjY2NY42NjZmNjY25UJC720aRwttDkcXRQZHGy0CRx8lBkcbNjY2Nr42NjbuNjY23f46XoQuU7/8LlO//C5Tv/0aRwtuNjY1zjY2NH////wH///8B////Af///wH///8B////Af///wH///8B////Af///wGNjY0HjY2NKY2NjWtpj6i5N5LO5wuV7/8Lle//C5Xv/wuV7/8Lle//C5Xv/wuV7/8Lle//JpPb12mPqLuNjY2/EpXq+wuV7/8Lle//PpLJ4Y2NjXuNjY0l////Af///wH///8B////Af///wH///8B////Af///wH///8BjY2NA42NjR2NjY1hQ5PF0QuX7/8Ll+//C5fv/wuX7/8Ll+//C5fv/wuX7/8Ll+//C5fv/wuX7/8Ll+//C5fv/zmTzNMZluX3C5fv/wuX7/82lM7ljY2Nf42NjSf///8B////Af///wH///8B////Af///wH///8B////Af///wGNjY0LjY2NQzCW09ULme//C5nv/wuZ7/8Lme//EpjqoQ2Z7lf///8B////Af///wELme93C5nvuwuZ7/8Lme//C5nv/wuZ7/8Lme//C5nv/yeW2u+NjY1/jY2NJ////wH///8B////Af///wH///8B////Af///wH///8B////AY2NjR02ls+xC5vv/wub7/8Lm+//EZrq6S2X1UWNjY0D////Af///wH///8B////Af///wH///8BC5vvZwub7/8Lm+//C5vv/wub7/8Lm+//J5ja742NjX+NjY0n////Af///wH///8B////Af///wH///8B////Af///wGNjY0DU5S5TQud7/8Lne//C53v/xWc6O9RlLpLjY2NA////wH///8B////Af///wH///8B////Af///wH///8BC53vVQud7/8Lne//C53v/wud7/8nmtrvjY2Nf42NjSf///8B////Af///wH///8B////Af///wH///8B////AY2NjQcenOGzC5/v/wuf7/8Ln+//UJW7k42NjRv///8B////Af///wH///8B////Af///wH///8B////Af///wH///8BDJ/umwuf7/8Ln+//C5/v/yeb2u+NjY1/jY2NJ////wH///8B////Af///wH///8B////Af///wH///8BjY2NDQ6i7PMLou7/C6Lu/x6f4O+NjY1fjY2NF////wH///8B////Af///wH///8B////Af///wH///8B////Af///wELou4zC6Lu/wui7v8Lou7/J53Z742NjX+NjY0n////Af///wH///8B////Af///wH///8B////Af///wEpn9gtC6Tu/wuk7v8LpO7/RJrD1Y2NjV+NjY0X////Af///wH///8B////Af///wH///8B////Af///wH///8B////Af///wENpO3xC6Tu/wuk7v8nn9nvjY2Nf42NjSf///8B////Af///wH///8B////Af///wH///8B////ARSk6EkLpu7/C6bu/wum7v9OmbzTjY2Na42NjRv///8B////Af///wH///8B////Af///wH///8B////Af///wH///8B////AROl6McLpu7/C6bu/yeh2e+NjY1/jY2NJ////wH///8B////Af///wH///8B////Af///wH///8BDajsRQuo7v8LqO7/C6ju/1Cau9mNjY2FjY2NL42NjQP///8B////Af///wH///8B////Af///wH///8B////Af///wGNjY0JFqbmzQuo7v8LqO7/J6LZ742NjX+NjY0n////Af///wH///8B////Af///wH///8B////Af///wELqu4jC6ru/wuq7v8Lqu7/SZzA442NjaeNjY1VjY2NE////wH///8B////Af///wH///8B////Af///wH///8BjY2NA42NjR0Xp+XhC6ru/wuq7v8npNnvjY2Nf42NjSf///8B////Af///wH///8B////Af///wH///8B////Af///wEMq+7vC6vu/wur7v8gpt71jY2Nv42NjYmNjY05jY2NC////wH///8B////Af///wH///8B////AY2NjQONjY0RcpOhUwur7v8Lq+7/C6vu/yel2e+NjY1/jY2NJ////wH///8B////Af///wH///8B////Af///wH///8B////AQyt7qsLre7/C63u/wut7v9kl6zXjY2NtY2NjXuNjY07jY2NE42NjQX///8B////Af///wGNjY0FjY2NG42NjUc8ocm/C63u/wut7v8Lre7/J6bZ742NjX+NjY0n////Af///wH///8B////Af///wH///8B////Af///wH///8BC6/tRQuv7f8Lr+3/C6/t/xis4/eNjY3HjY2NtY2NjYuNjY1bjY2NNY2NjR+NjY0ZjY2NIY2NjTeNjY1hcZShoxGt6PsLr+3/C6/t/wuv7f8nqNjvjY2Nf42NjSf///8B////Af///wH///8B////Af///wH///8B////Af///wH///8BC7Dtqwuw7f8LsO3/C7Dt/yWp2uuNjY3FjY2NwY2Nja2NjY2RjY2NcY2NjWWNjY11jY2Nk3WTn7sgqt7zC7Dt/wuw7f8LsO3/C7Dt/yeo2O+NjY1/jY2NJ////wH///8B////Af///wH///8B////Af///wH///8B////Af///wELsu0RC7Lt3Quy7f8Lsu3/C7Lt/xav5fFWnbXLjY2NwY2NjcONjY25jY2Ns42NjbtQnrrbEbDo+wuy7f8Lsu3/C7Lt/wuy7f8Lsu3/J6rY742NjX+NjY0n////Af///wH///8B////Af///wH///8B////Af///wH///8B////Af///wELs+0jC7Pt3Quz7f8Ls+3/C7Pt/wuz7f8Ls+3/P6THx0Ckxsk3pszPC7Pt/wuz7f8Ls+3/C7Pt/wuz7f8Ls+3/C7Pt/wuz7f8hrd3hjY2NX42NjR3///8B////Af///wH///8B////Af///wH///8B////Af///wH///8B////Af///wH///8BC7TtiQu07f8LtO3/C7Tt/wu07f8LtO3/C7Tt/wu07f8LtO3/C7Tt/wu07f8MtO3vEbLpWQy07d8LtO3/C7Tt/xSx58mNjY0fjY2NC////wH///8B////Af///wH///8B////Af///wH///8B////Af///wH///8B////Af///wH///8BC7XtEQu17XcLte3NC7Xt/wu17f8Lte3/C7Xt/wu17f8Lte2ZC7Xtd////wH///8BC7Xt3Qu17f8Lte3/C7Xtu////wH///8B////Af///wH///8B////Af///wH///8B////Af///wH///8B////Af///wH///8B////Af///wH///8B////Af///wH///8B////Af///wH///8B////Af///wH///8B////Af///wH///8B////Af///wH///8B////Af///wH///8B////Af///wH///8B////Af///wH///8B////Af///wH///8B////Af///wH///8B////Af///wH///8B////Af///wH///8B////Af///wH///8B////Af///wH///8B////Af///wH///8B////Af///wH///8B////Af///wH///8B////AQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"
newEngine["active"] = false;
productNameSearchEngines.push(newEngine);

// build defaultPersistConfigObj
var defaultPersistConfigObj = new Object();
var xrelSearchKey = "xrelsearch6";

function fillUpDefaultPersistConfigObj(sEngines) {
    for (var i = 0; i < sEngines.length; i++) {
        var engine = sEngines[i];
        defaultPersistConfigObj[engine.id] = engine.active;
    }
}

fillUpDefaultPersistConfigObj(productNameSearchEngines);
fillUpDefaultPersistConfigObj(searchEngines);


function fetchConfig() {
    var value = GM_getValue(xrelSearchKey, "__default") 
    if(value == "__default") {
        return defaultPersistConfigObj;
    }
    else {
        return $.evalJSON(value);   
    }
}

function saveConfig(config) {
    return GM_setValue(xrelSearchKey, $.toJSON(config));
}

// urlencode function
function urlencode(str) {
    // http://kevin.vanzonneveld.net
    // +   original by: Philip Peterson
    // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +      input by: AJ
    // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +   improved by: Brett Zamir (http://brett-zamir.me)
    // +   bugfixed by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +      input by: travc
    // +      input by: Brett Zamir (http://brett-zamir.me)
    // +   bugfixed by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +   improved by: Lars Fischer
    // +      input by: Ratheous
    // +      reimplemented by: Brett Zamir (http://brett-zamir.me)
    // %          note 1: This reflects PHP 5.3/6.0+ behavior
    // *     example 1: urlencode('Kevin van Zonneveld!');
    // *     returns 1: 'Kevin+van+Zonneveld%21'
    // *     example 2: urlencode('http://kevin.vanzonneveld.net/');
    // *     returns 2: 'http%3A%2F%2Fkevin.vanzonneveld.net%2F'
    // *     example 3: urlencode('http://www.google.nl/search?q=php.js&ie=utf-8&oe=utf-8&aq=t&rls=com.ubuntu:en-US:unofficial&client=firefox-a');
    // *     returns 3: 'http%3A%2F%2Fwww.google.nl%2Fsearch%3Fq%3Dphp.js%26ie%3Dutf-8%26oe%3Dutf-8%26aq%3Dt%26rls%3Dcom.ubuntu%3Aen-US%3Aunofficial%26client%3Dfirefox-a'
 
    var hexStr = function(dec) {
        return '%' + dec.toString(16).toUpperCase();
    };
 
    var ret = '',
            unreserved = /[\w.-]/; // A-Za-z0-9_.- // Tilde is not here for historical reasons; to preserve it, use rawurlencode instead
    str = (str+'').toString();
 
    for (var i = 0, dl = str.length; i < dl; i++) {
        var ch = str.charAt(i);
        if (unreserved.test(ch)) {
            ret += ch;
        }
        else {
            var code = str.charCodeAt(i);
            // Reserved assumed to be in UTF-8, as in PHP
            if (code === 32) {
                ret += '+'; // %20 in rawurlencode
            }
            else if (code < 128) { // 1 byte
                ret += hexStr(code);
            }
            else if (code >= 128 && code < 2048) { // 2 bytes
                ret += hexStr((code >> 6) | 0xC0);
                ret += hexStr((code & 0x3F) | 0x80);
            }
            else if (code >= 2048 && code < 65536) { // 3 bytes
                ret += hexStr((code >> 12) | 0xE0);
                ret += hexStr(((code >> 6) & 0x3F) | 0x80);
                ret += hexStr((code & 0x3F) | 0x80);
            }
            else if (code >= 65536) { // 4 bytes
                ret += hexStr((code >> 18) | 0xF0);
                ret += hexStr(((code >> 12) & 0x3F) | 0x80);
                ret += hexStr(((code >> 6) & 0x3F) | 0x80);
                ret += hexStr((code & 0x3F) | 0x80);
            }
        }
    }
    return ret;
}

// global vars
var configPanelInizialized = false;


$(document).ready(function() {
	
	// release list (add a collectr icon to the rel-list)
	$('div[class^=release_title] > a.sub_link > span').each( function (idx) {

		var titleSpan = $(this);
		var relName;

		if(titleSpan.hasClass("truncd") && titleSpan.attr("title") != "") {
			relName = titleSpan.attr("title");
		} else {
			relName = titleSpan.text();
		}

		titleSpan.parent().after( createIconWithLink(relName, searchEngines));
        // add product name based search engines
        var productLink = $("a", titleSpan.parent().parent()).eq(0);
        var productName = productLink.text();
        
        titleSpan.parent().after('<br />' + createIconWithLink(productName, productNameSearchEngines));

		return;
	});

	// nfo view (add a collectr icon to the nfo view title)
	$('div.nfo_title > div > span.sub').each( function(idx) {
        
        // get product name out of the "Produktinformationen" link in the sidebox
        var productLink = $('#release_tools_content a').eq(1).attr("href");
        var productName = productLink.replace(/.*\/(.+)\.html$/g, "$1").replace(/-/g, ' ');
        
		var relName = $(this).text();
		
		$(this).append( '&nbsp; ' + createIconWithLink(relName, searchEngines) );
		$(this).append( createIconWithLink(productName, productNameSearchEngines) );

	});

	
	// product name [header]
	var productName = $('#extinfo_title > h3').text();
	$('#extinfo_title > h3').append( '&nbsp; ' + createIconWithLink(productName, productNameSearchEngines) );
	

	// Helper: creates the icons with a links
	var xrelConfig = null; 
	function createIconWithLink(relName, sEngines) {
	
	    // fetch only one time [this function gets called often]
	    if(xrelConfig == null) {
	        xrelConfig = fetchConfig();
	    }
	
		var links = "";		

		for (var i = 0; i < sEngines.length; i++) {
		    var engine = sEngines[i];
		    var hidden = "";
		    if(!xrelConfig[engine.id]) {
		        hidden = "display: none;";
		    }
			
			if(engine.modifyReleaseName)
				relNameMod = engine.modifyReleaseName(relName);
			else
				relNameMod = relName;

			url = engine.baseUrl.replace(/%s/, relNameMod);

			links += '<span style="' + hidden + '" class="xrelSeToggle_' + engine.id + '"><a href="' + url + '" target="_blank" title="Suche auf ' + engine.title + ' (Neues Fenster)"><img border="0" src=' + engine.icon + ' alt="' + engine.title + '" width="13" height="13" /></a>&nbsp;</span>';
		}

		return links;
	}
	
	
	$('#xrelSeConfig').hover(function() { 
        initConfigPanel();
        showConfigPanel();
        
    }, function() {});
	
	// config panel	
	$("html body h1:contains('xREL')").parent().prepend("<div id='xrelSeConfig' style='text-align: left; -moz-box-shadow: 0 0 5px #888; -webkit-box-shadow: 0 0 5px #888; box-shadow: 0 0 5px #888; position: absolute; top:0px; left:-155px; padding: 10px; width: 150px; min-height: 50px; height: auto; background-color: rgba(255,255,255,0.9); z-index:1000;'><a href='#' id='xrelSeConfgiClose'>Close</a></div>")	
    //-moz-border-bottom-right-radius: 10px; border-bottom-right-radius: 10px;

    $('#xrelSeConfig').hover(function() { 
        initConfigPanel();
        showConfigPanel();
        
    }, function() {});
    
    $('#xrelSeConfgiClose').click(function() { hideConfigPanel(); });


    function showConfigPanel() {
        $('#xrelSeConfig').css('left', '0px'); 
    }
    
    function hideConfigPanel() {
        $('#xrelSeConfig').css('left', '-155px');
    }    


    function initConfigPanel() {
        if(configPanelInizialized)
            return;

        $('#xrelSeConfig').prepend( '<b>Product Name Based</b><br>' + buildEngineActivatorElements( productNameSearchEngines) );
        $('#xrelSeConfig').prepend( '<b>Release Name Based</b><br>' + buildEngineActivatorElements( searchEngines) );
        
        // set inital values
        var xrelConfig = fetchConfig();
           
        $('input.xrelSeCheckbox').each( function() {
                    
            var id = $(this).attr('value');
            //console.log("xrelConfig[id]: ", xrelConfig[id]);
            if(xrelConfig[id])
                $(this).attr('checked', true);
            else
                $(this).attr('checked', false);
        });


        // add events to elements
        $('input.xrelSeCheckbox').change( function() {
                
           var config = new Object();

           $('input.xrelSeCheckbox:not(checked)').each( function() {
             var id = $(this).attr('id');
             var plainId = $(this).attr('value');
             config[plainId] = false;
             $("span." + id).hide();
           });
           
           $('input.xrelSeCheckbox:checked').each( function() {
             var id = $(this).attr('id')
             var plainId = $(this).attr('value');
             config[plainId] = true;
             $("span." + id).show();
           });

           saveConfig(config);
                       
        } );
        
        configPanelInizialized = true;
    }

    function buildEngineActivatorElements(sEngines) {
        var text = "";
        for (var i = 0; i < sEngines.length; i++) {
        	var engine = sEngines[i];
            text += '<input class="xrelSeCheckbox" id="xrelSeToggle_' + engine.id + '" type="checkbox" name="' + engine.id + '" value="' + engine.id + '" /> ';
            text += ' <img border="0" src=' + engine.icon + ' alt="' + engine.title + '" width="13" height="13" /> ' + engine.title + '<br /> ';
        }
        return text;  
    }

	GM_addStyle(".getReleaseName {	cursor: pointer; } .release_options {	padding-top: 0px !important; } .release_options a img {	width:13px; } .release_options span img {	width:13px; getReleaseName} .nfo_title .getReleaseName { margin-left:5px; } .nfo_title .getReleaseName img { width:16px; vertical-align: sub; }");

    // Add Pictures to persons
    if (window.location.href.indexOf("/person/") > -1) {
		var actor = $(".headline2").html();
		var apiURL = "http://ajax.googleapis.com/ajax/services/search/images?v=1.0&q=site:themoviedb.org " + actor;
		$('#middle_spawn').after('<div id="middle_left"><div style="position: relative; left: 0pt; top: 0pt;" id="rightbox"><div><div class="box_title1">' + actor + '</div><div style="line-height: 15px;" id="release_info_box" class="box1"></div></div></div></div>');

		GM_xmlhttpRequest({
			method: "GET",
			url: apiURL,
			headers: {"Accept": "application/json"},
			onload: function(data) {
				var value = '';
				var myObject = jQuery.parseJSON(data.response)        
				for (var i = 0; i < myObject.responseData.results.length; i++) { 
					value = myObject.responseData.results[i].url;
					$("#release_info_box").append('<div class="box_content"><img src="' + value + '" title="' + actor + '" style="width:100%"></div>');
				}
			}
		});
    }
    
    // Expand the view of trailers / hide trailer navigation
    if (window.location.href.indexOf("entertainment-trailers") > -1) {
      if ($('.trailers_top').length != 0) {
        $('.trailers_top').css({
          height: 'auto'
        });
      }
      $('#trailers_top_pagination').hide();
    }
    
    // Make links open in a new tab
    $('a').each(function(){
        if($(this).attr('href')){
            var href = $(this).attr('href');
        	if(href.indexOf('derefer') != -1){
                $(this).attr('target', '_blank');
        	}
        }
    });
    $('area').each(function(){
        if($(this).attr('href')){
            var href = $(this).attr('href');
        	if(href.indexOf('derefer') != -1){
        	   $(this).attr('target', '_blank');
        	}
        }
    });

	// Create a copy button in the release options
	$('.release_item [class^="release_title"] .sub_link').each(function(){
		if($(this).children('span').hasClass('truncd')){
			var content = $(this).children('span').attr('title');
		}
		else {
			var content = $(this).children('span').html();
		}
		if(content == ''){
			var content = $(this).children('span').html();	
		}
		html = '<br><span class="getReleaseName" data-name="' + content + '"><img src="data:image/gif;base64,R0lGODlhEAAQAOZgAP////b5+pnb/83V3QBayABgyfX4/ABSxhij/7bByuDf4aGqsig0QKDh///++19ocniBi////QBkywBeyCczPu7y90pUX2RveSgzP2dyfW54hPP2+evx9+7z97O/yBik/2t1geXr8vX4+hyo/11nci04Qx2q/2Frdfb5+8zT3e/z+ABey+zw9GBreABYx+3y9uvw9wBdzPT2+e3n4+nw93eBiwBTxOrv9ElTXgBTxwBiz19rdvT4/N7e4ABUxv/++V5ocyYyPX2BhvH1+vH1+QBfymNve+7z+P///gBTyGRueO/z9/P3/ABOyABcyurw9QBUxQBRxXyAhfT4+wBWxe3x9fP1+ABUxPL2+fT3+/H0+PD1+mVwe3B4fo2GfwBayv///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAEAAGAALAAAAAAQABAAAAfWgGBgEgUThgUSgoqLBQ0Cjw0Fi5MrJggfCCNUBJycTjqCXgARSBEAp6inQhJFXz42UFERAbQBIhsAGo2PAg0uMwrBCj0OACAxlpgjVzkHzgdJTQAZUgA/DsWpqF0AFxoAMgEoKLW2uEYAJyAAWikD7/ApVgAtACQZAEtZBvwGU1hEOgDYAeDBBQAvPCRYmMBDhyosAHAJYuEEgCdMeKioUOHIkC03ACgRRAIADQgQOIQIwQFCDRgAgAh6cGrBglQ2Tz0QhAMDAzAlGFCgwKAEGAYYLAgKBAA7"></span>';
		$(this).parent().parent().find('.release_options').append(html);
	});


	// Make the created Icon clickable
	$('.getReleaseName').click(function(){
		var content = $(this).attr("data-name");
		window.prompt('Einfach STRG+C, schliessen mit ENTER',content); return false;
	});

});