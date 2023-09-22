const express = require('express')
const favicon = require('serve-favicon');
const mongoose = require('mongoose')

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
app.use(express.static('public'))

app.get('/', (req, res) => {
    // res.sendFile('./views/home.html', { root: __dirname })
    const blogs = [
        { title: 'Dont overthink', description: 'Drawbacks of Overthinking', content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'},
        { title: 'Athlete Psychlogy', description: 'How Athletes think?', content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'},
        { title: 'Mental preparation', description: 'How to prepare mentally?', content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'},
    ]
    res.render('home', { title: 'Home', blogs })
})

app.get('/about', (req, res) => {
    res.render('about', { title: 'About'})
    // res.sendFile('./views/about.html', { root: __dirname })
})

app.get('/blog/create', (req, res) => {
    res.render('createBlog', { title: 'Create new Blog'})
})

//redirects
app.get('/about-me', (req, res) => {
    res.redirect('/about')
})

//404 page
app.use((req, res) => {
    res.status(404).render('404', { title: '404'})
    // res.status(404).sendFile('./views/404.html', { root: __dirname })
})