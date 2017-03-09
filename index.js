const katex = require('katex')
// Inline
function katexInlinePlugin() {
    const reg = /^ *([^$]*)\$(?!\$)(.*)\$(.*)/
    const type = 'katex'
    return {
        regexp: function(src) {
            const cap = reg.exec(src)
            if (cap) {
                let text
                try {
                    text = cap[1] + katex.renderToString(cap[2]) + cap[3]
                } catch(e) {
                    return null
                }
                return {
                    sublen: cap[0].length,
                    token: {
                        type: 'text',
                        text
                    }
                }
            }
        }
    }
}
// Block
function katexBlockPlugin() {
    const reg = /^ *\${2}([^\$]*)\$\$ */
    const type = 'katex'
    return {
        type,
        renderer: function(text, renderer) {
            try {
                return katex.renderToString(text)
            } catch(e) {
                return text
            }
        },
        regexp: function(src) {
            const cap = reg.exec(src)
            if (cap) {
                return {
                    sublen: cap[0].length,
                    token: {
                        type,
                        text: cap[1]
                    }
                }
            }
        }
    }
}

module.exports = {
    inline: katexInlinePlugin,
    block: katexBlockPlugin
}
