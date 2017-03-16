const katex = require('katex')
require('katex/dist/katex.css')

module.exports = function katexPlugin() {
    const blockReg = /^ *\${2}(.*?)\${2} *(\n+|$)/
    const inlineReg = /^\$(.*?)\$/
    const type = 'katex'
    return {
        type,
        block(state) {
            const cap = blockReg.exec(state.src)
            if (cap) {
                const offsetLen = cap[0].length
                const offsetStart = state.offset
                const offsetEnd = offsetStart + offsetLen
                state.src = state.src.substring(offsetLen)
                state.tokens.push({
                    type,
                    text: cap[1],
                    start: offsetStart,
                    end: offsetEnd
                })
                state.offset = offsetEnd
                return true
            }
            return false
        },
        parser() {
            return this.renderer.paragraph(katex.renderToString(this.token.text))
        },
        inline(state) {
            const cap = inlineReg.exec(state.src)
            if (cap) {
                const offsetLen = cap[0].length
                state.src = state.src.substring(offsetLen)
                state.out += katex.renderToString(cap[1])
            }
        }
    }
}
