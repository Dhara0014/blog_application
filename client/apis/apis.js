import axios from "axios";


export const getAllArticle = async() => { 
    try {
        const response = await axios.post(
            "http://localhost:4545/api/blog/getArticle",{});
          return response?.data;
    } catch (error) {
        return 'error'
    }     
}

export const sortArticle = async() => {
    try {
        const response = await axios.post(
            "http://localhost:4545/api/blog/getArticle",
            { date: true }
          );
        return response?.data
        
    } catch (error) {
        return "articles didn't sort"
    }
}

export const removeArticle = async({id}) => {
    try {
        const response = await axios.post("http://localhost:4545/api/blog/delete", {
            id : id,
          });
        return response?.data
        
    } catch (error) {
        console.log('delete article error >>', error);
        return "articles didn't sort"
    }
}

export const getArticleById = async({slug}) => {
    try {
        const response = await axios.post("http://localhost:4545/api/blog/edit", {
            id : slug,
          });
        return response?.data
        
    } catch (error) {
        return "didn't found the article"
    }
}

export const updateArticle = async({...data}) => {
    try {
        const response = await axios.post("http://localhost:4545/api/blog/update",{
            ...data
        });
        return response?.data
    } catch (error) {
        console.log('update >>', error);
        return "article didn't update";
    }
}

export const getSearchedArticle = async({data}) => {
    try {
        const response = await axios.post("http://localhost:4545/api/blog/getArticle",{
            data
        });
        return response?.data
    } catch (error) {
        return "article didn't update";
    }
}


