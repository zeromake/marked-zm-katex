# marked-zm-katex

## Install

$npm i github:zeromake/marked-zm-katex -S

## Simple

webpack:
``` javascript
const marked = require('marked-zm')
const katexPlugin = require('marked-zm-katex')
require('katex/dist/katex.css')

marked.use(katexPlugin)
const texStr = 'You can create inline formulas, for example $\\Gamma(n) = (n-1)!\\quad\\forall n\\in\\mathbb N$.Or block:\n\n$$  x = \\dfrac{-b \\pm \\sqrt{b^2 - 4ac}}{2a} $$'

marked(texStr)

```
browser:
require marked-zm , marked-zm-katex javascript and katex'css
``` html
<!DOCTYPE html>
<html lang="zh">
<head>
    <meta charset="UTF-8">
    <title>marked-test</title>
    <script type="text/javascript" src="https://zeromake.github.io/marked-zm/lib/marked.js"></script>
    <script type="text/javascript" src="https://zeromake.github.io/marked-zm-katex/lib/marked-katex.js"></script>
    <link href="https://khan.github.io/KaTeX/bower_components/katex/dist/katex.min.css" type="text/css" rel="stylesheet">
    </head>
<body>
<div id="myView" class="markdown-body"></div>
<script>
    marked.use(markedkatex)
    var texStr = '可以创建行内公式，例如 $\\Gamma(n) = (n-1)!\\quad\\forall n\\in\\mathbb N$。或者块级:\n\n$$  x = \\dfrac{-b \\pm \\sqrt{b^2 - 4ac}}{2a} $$';
    var myView = document.getElementById('myView');
    myView.innerHTML = marked(texStr)
</script>
</body>
</html>

```


## test
``` shell
$git clone https://github.com/zeromake/marked-zm-katex
$cd marked-zm-katex
$npm i
$npm run test
```
open test/index.html on Browser
