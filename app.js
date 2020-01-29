const express = require('express');
const nunjucks = require('nunjucks');
const morgan = require('morgan');
const sequelize = require('./db')   
const {User, Page} = require('./models');
const path = require("path")
const app = express();

app.engine('html', nunjucks.render); // como renderear templates html
app.set('view engine', 'html'); // que extensiones de archivo tienen los templates
nunjucks.configure('views', { noCache: true }); // donde encontrar las views
app.use(express.urlencoded({extended:true}))


app.use(morgan("dev"))
app.get("/",function(req,res,next){
  res.redirect("/")
})

app.use(require('./routes/index'));
app.use(require('./routes/wiki'));
app.use(require('./routes/users'));

app.use(express.static(path.join(__dirname, '/public')))

sequelize.sync({force: false})
    .then(() => {
    console.log('Conectado a la base de datos');
    app.listen(3000);
    console.log('Servidor escuchando en el puerto 3000');
    })
    .catch(err => console.log(err));

