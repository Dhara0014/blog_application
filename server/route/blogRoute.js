const express = require('express');
const Blog = require('../schema/blogSchema');

const router = express.Router();

router.post('/blog', async(req,res) => {
    const {title, description, category} = req.body;
    try {
        const article = await Blog.createArticle({
            title,description, category
        });

        const {status, message, result} = article;
        if(!status){
            return res.send({
                status: 'Fail',
                message
            })
        }
        return res.send({
            status: 'Success',
            message,
            result
        })
    } catch (error) {
        return res.send({
            status: 'Server Error',
            message: "Something wen't wrong!"
        })
    }
});

router.post('/blog/getArticle' , async(req,res) => {
    const {data, date} = req.body;
    try {
        const article = await Blog.getAllArticle({data, date});
        const {status,message, result} = article;
        if(!status){
            return res.send({
                status: 'Fail',
                message
            })
        }
        return res.send({
            status: 'Success',
            message,
            result
        })
        
    } catch (error) {
        return res.send({
            status: 'Server Error',
            message: "Something wen't wrong!"
        })
    }
})

router.post('/blog/delete', async(req,res) => {
    const {id} = req.body;
    try {        
        const deleteArticle = await Blog.deleteArticle({id});
        const {status, message} = deleteArticle;
        if(!status){
            return res.send({
                status: 'Fail',
                message
            })
        }
        return res.send({
            status: 'Success',
            message,
        })

    } catch (error) {
        return res.send({
            status: 'Server Error',
            message: "Something wen't wrong!"
        })
    }
});

router.post('/blog/update' , async(req,res) => {
    const {id, title, description, category} = req.body;
    try {
        const updateArticle = await Blog.editArticle({id, title, description, category});
        const {status,message, result} = updateArticle;

        if(!status){
            return res.send({
                status: 'Fail',
                message
            })
        }
        return res.send({
            status: 'Success',
            message,
            result
        })
        
    } catch (error) {
        return res.send({
            status: 'Server Error',
            message: "Something wen't wrong!"
        })
    }
})

router.post('/blog/edit', async(req,res) => {
    const {id} = req.body;
    try {
        const article = await Blog.getAllArticleById({id});
        const {status,message, result} = article;
        if(!status){
            return res.send({
                status: 'Fail',
                message
            })
        }
        return res.send({
            status: 'Success',
            message,
            result
        })
        
    } catch (error) {
        return res.send({
            status: 'Server Error',
            message: "Something wen't wrong!"
        })
    }
})

module.exports = router;