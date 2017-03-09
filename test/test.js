const marked = require('marked-zm')
const markedKatex = require('../')

marked.use(markedKatex.inline)
marked.use(markedKatex.block)
const t =`
测试$\\Gamma(n) = (n-1)!\\quad\\forall n\\in\\mathbb N$ 还有师德师风
- dgdfgdf

## gg

$$x = \\dfrac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$$

- gg
- hhh
- ggg
`

const text = marked(t)
console.log(text)
