import express, { Express, NextFunction, Request, Response, Router } from 'express'
import axios from 'axios'

// from 腾讯新闻疫情
const API_EPIDEMIC =
	'https://api.inews.qq.com/newsqa/v1/query/inner/publish/modules/list?modules=statisGradeCityDetail,diseaseh5Shelf'

const app: Express = express()
const router: Router = express.Router()

// 跨域
app.use('*', (req: Request, res: Response, next: NextFunction) => {
	res.header('Access-Control-Allow-Origin', '*')
	next()
})
app.use('/api', router)

router.get('/list', async (req: Request, res: Response) => {
	const result = await axios.post(API_EPIDEMIC)
	res.json({
		...result.data
	})
})

app.listen(3333, () => {
	console.log('server success on http://localhost:3333/')
})
