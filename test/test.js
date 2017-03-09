const marked = require('marked-zm')
const markedKatex = require('../')

marked.use(markedKatex.inline)
marked.use(markedKatex.block)
const t =`

[TOC]

# 测试

## 1

## 2

## 3

### 4

`

const text = marked(t)
console.log(text)
