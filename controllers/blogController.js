// blog_index, blog_post, blog_create_index, blog_details, blog_delete

const Blog = require('../models/blog')

const blog_index = (req, res) => {
    try {
        const result = Blog.find().sort({ createdAt: -1 })
        result
        .then((response) => {
            res.render('index', { title: 'Home', blogs: response })
        })
        .catch((error) => {
            console.log(error);
        })
    }
    catch (error) {
        console.log(error);
    }
}

const blog_post = async (req, res) => {
    try {
        const blog = new Blog (req.body)
        await blog.save()
        res.redirect('/blogs')
    }
    catch (error) {
        console.log(error);
    }
}

const blog_create_index = (req, res) => {
    res.render('create', { title: 'Create new Blog' })
}

const blog_details = (req, res) => {
    try {
        const id = req.params.id
        Blog.findById(id)
        .then((response) => {
            res.render('view', { title: 'Detail', blog: response })
        })
        .catch((error) => {
            res.status(404).render('404', { title: '404'})
        })
    }
    catch (error) {
        console.log(error);
    }
}

const blog_delete = (req, res) => {
    try {
        const id = req.params.id
        Blog.findByIdAndDelete(id)
        .then(response => res.json({ redirect: '/blogs' }))
    }
    catch (error) {
        console.log(error);
    }
}

module.exports = {
    blog_index,
    blog_post,
    blog_create_index,
    blog_details,
    blog_delete
}