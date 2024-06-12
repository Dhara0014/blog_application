const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    title: {type: String, require: true},
    description: {type: String, require: true},
    category: {type: String, require: true},
    createdAt: { type: Date, default: Date.now }
});

const BlogSchema = mongoose.model('Blog', blogSchema);

const createArticle = async({title, description, category}) => {
    try {
        if(title.trim().length == 0 || description.trim().length == 0 || category.trim().length == 0){
            return ({
                status: false,
                message: 'Please enter the value'
            })            
        }
        const existingArticle = await BlogSchema.findOne({title});        
        if(existingArticle){
                return ({
                    status: false,
                    message: 'Article already exist !!'
                })
            }else{
                const newArticle = await BlogSchema.create({title,description,category});
                return ({
                    status: true,
                    message: 'Article created successfully',
                    result: newArticle
                })
            }
    } catch (error) {
        console.log(' error>>', error);
        return ({
            staus: false,
            message: 'internal server error'
        })
    }
}

const getAllArticle = async({data, date}) => {
    let allArticles;
    try {
        if(data){
        allArticles = await BlogSchema.find({title: data})
        return ({
            status: true,
            message: "Articles fetched successfully",
            result: allArticles
        })
        }
        if(date){
            allArticles = await BlogSchema.find().sort({ createdAt: -1 });
            return ({
                status: true,
                message: "Articles sorted successfully",
                result: allArticles
            })
        }

        allArticles = await BlogSchema.find();
        if(allArticles){            
            return ({
                status: true,
                message: "Articles fetched successfully",
                result: allArticles
            })
        }else{
            return ({
                status: false,
                message: "something wen't wrong"
            })
        }
        
    } catch (error) {
        return ({
            staus: false,
            message: 'internal server error'
        })
    }
}

const deleteArticle = async({id}) => {
    try {
        const deleteData = await BlogSchema.findByIdAndDelete({_id: id});
        if(deleteData){
            return ({
                status: true,
                message: "Articles deleted successfully",
                result: deleteData
            })
        }else{
            return ({
                status: false,
                message: "something wen't wrong"
            })
        }
        
    } catch (error) {
        return ({
            staus: false,
            message: 'internal server error'
        })
    }
}

const editArticle = async({ id, title, description, category}) => {
    try {
            const updatedArticle = await BlogSchema.findByIdAndUpdate(id, {title,description,category}, {new: true});
            if(updatedArticle){
                return ({
                    status: true,
                    message: 'Article updated successfully',
                    result: updatedArticle
                })
            }else{
                return ({
                    status: false,
                    message: "something wen't wrong"
                })
            }

    } catch (error) {
        return ({
            staus: false,
            message: 'internal server error'
        })
    }
}

const getAllArticleById = async({id}) => {
    try {
        if(id){
        let allArticles = await BlogSchema.findById({_id:id})
        return ({
            status: true,
            message: "Articles fetched successfully",
            result: allArticles
        })
        }
    } catch (error) {
        return ({
            staus: false,
            message: 'internal server error'
        })
    }
}


module.exports = {BlogSchema, createArticle, getAllArticle, deleteArticle, editArticle, getAllArticleById }