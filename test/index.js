const katexPlugin = require('../src/marked-katex')
const marked = require('marked-zm')
marked.use(katexPlugin)

require('katex/dist/katex.css')

const texStr = '可以创建行内公式，例如 $\\Gamma(n) = (n-1)!\\quad\\forall n\\in\\mathbb N$。或者块级:\n\n$$  x = \\dfrac{-b \\pm \\sqrt{b^2 - 4ac}}{2a} $$'
document.addEventListener("DOMContentLoaded", function Loaded(){
    const myView = document.getElementById('myView')
    const myEditor = document.getElementById('myEditor')
    myEditor.value = texStr
    myEditor.addEventListener("input", function(){
        myView.innerHTML = marked(this.value?this.value:"", { sanitize: true })
    })
    myView.innerHTML = marked(myEditor.value)
    document.removeEventListener("DOMContentLoaded", Loaded)
})

