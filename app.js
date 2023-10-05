const express = require('express')
const favicon = require('serve-favicon');
const mongoose = require('mongoose')
const blogRoutes = require('./routes/blogRoutes')

//express app
const app = express()

//connect to mongoDb
const dbURI = 'mongodb+srv://arunbharathijp:znVzvwZJ7coNPZ9f@blogapp01.qztqnor.mongodb.net/blog-app-01?retryWrites=true&w=majority'
try {
    mongoose.connect(dbURI)
    
    //listen to request
    app.listen(3000)
    console.log('connected to database');
}
catch (error) {

}

//register view engine
app.set('view engine', 'ejs')

//middleware and static files
app.use(favicon('public/favicon.png'));
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))

app.get('/', (req, res) => {
    // res.sendFile('./views/home.html', { root: __dirname })
    res.redirect('/blogs')
})

app.get('/about', (req, res) => {
    res.render('about', { title: 'About'})
    // res.sendFile('./views/about.html', { root: __dirname })
})

//redirects
app.get('/about-me', (req, res) => {
    res.redirect('/about')
})

//blog routes
app.use('/blogs', blogRoutes)

//404 page
app.use((req, res) => {
    res.status(404).render('404', { title: '404'})
    // res.status(404).sendFile('./views/404.html', { root: __dirname })
})