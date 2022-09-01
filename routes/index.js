// 引用 Express 與 Express 路由器
const express = require('express')

// 準備引入路由模組
const router = express.Router()
const home = require('./modules/home')
const todos = require('./modules/todos')
const users = require('./modules/user')
const auth = require('./modules/auth')

const { authenticator } = require('../middleware/auth')  // 掛載 middleware

router.use('/todos', authenticator, todos) // 加入驗證程序
router.use('/users', users)
router.use('/auth', auth)
router.use('/', authenticator, home) // 加入驗證程序

// 匯出路由器
module.exports = router