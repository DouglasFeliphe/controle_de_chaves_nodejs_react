import express from 'express';
import adminsRoutes from './routes/adminsRoutes';
import keysRoutes from './routes/keysRoutes';
import usersRoutes from './routes/usersRoutes';
import reservationsRoutes from './routes/reservationsRoutes';
import cors from 'cors';

const app = express()

app.use(cors())
app.use(express.json())
app.use(keysRoutes)
app.use(usersRoutes)
app.use(reservationsRoutes)
app.use(adminsRoutes)

app.listen(process.env.PORT || 3333, function () {
    console.log(`Express server listening on port 3333 in ${app.settings.env} mode`)
})
