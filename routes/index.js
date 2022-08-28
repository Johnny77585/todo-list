// 引用 Express 與 Express 路由器
const express = require('express')

// 準備引入路由模組
const router = express.Router()
const todos = require('./modules/todos')
const users = require('./modules/user')
const home = require('./modules/home')

// 將網址結構符合 / 字串的 request 導向模組 
router.use('/', home)
router.use('/todos', todos)
router.use('/users', users)

// 匯出路由器
module.exports = router