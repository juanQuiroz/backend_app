import app from './app'
import './database'

//configure port
app.set('port', process.env.PORT || 3000);

app.listen(app.get('port'))
console.log('server listen on port', app.get('port'))