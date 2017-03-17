const katex = require('katex')
// require('katex/dist/katex.css')

module.exports = function katexPlugin() {
    const blockReg = /^ *\${2}(.*?)\${2} *(\n+|$)/
    const inlineReg = /^\$(.*?)\$/
    const type = 'katex'
    return {
        type,
        block(state, env) {
            const cap = blockReg.exec(state.src)
            if (cap) {
                const offsetLen = cap[0].length
                const offsetStart = state.offset
                const offsetEnd = offsetStart + offsetLen
                state.src = state.src.substring(offsetLen)
                env.tokens.push({
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
        parser(env) {
            return env.renderer.paragraph(env.renderer[type](env.token.text))
        },
        inline(state, env) {
            const cap = inlineReg.exec(state.src)
            if (cap) {
                const offsetLen = cap[0].length
                state.src = state.src.substring(offsetLen)
                state.out += env.renderer[type](cap[1])
                return true
            }
            return false
        },
        renderer(code) {
            return katex.renderToString(code)
        }
    }
}
