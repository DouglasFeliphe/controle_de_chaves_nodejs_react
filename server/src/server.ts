import express from 'express';
import routes from './routes/keysRoutes';
import cors from 'cors';

const app = express()

app.use(cors())
app.use(express.json())
app.use(routes)

app.listen(process.env.PORT || 3333, function () {
    console.log(`Express server listening on port 3333 in ${app.settings.env} mode`)
})
