# marked-zm-katex

## Install

$npm i github:zeromake/marked-zm-katex -S

## Simple

``` javascript
const marked = require('marked-zm')
const katexPlugin = require('marked-zm-katex')
require('katex/dist/katex.css')

marked.use(katexPlugin)
const texStr = 'You can create inline formulas, for example $\\Gamma(n) = (n-1)!\\quad\\forall n\\in\\mathbb N$.Or block:\n\n$$  x = \\dfrac{-b \\pm \\sqrt{b^2 - 4ac}}{2a} $$'

marked(texStr)

```

## test
$git clone https://github.com/zeromake/marked-zm-katex
$cd marked-zm-katex
$npm i
$npm run test

open test/index.html on Browser
