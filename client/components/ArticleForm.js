import React, { useState } from 'react';
import axios from "axios";
// import {  getCreatedArticle } from '../apis/apis';
import { getCreatedArticle } from '../apis/apis';


const ArticleForm = ({setLoad, setShow}) => {
  const [createArticle, setCreateArticle] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await 
      axios.post("http://localhost:4545/api/blog", createArticle);
      const {status, result,message} = response?.data;
      if(status == "Success"){
          setCreateArticle({});
          setShow(false);
          setLoad(true);
      }
    } catch (err) {
        console.log('create article error >>', err);
    }
  };    

  return (
    <div className='d-flex justify-content-center'>     
      <form className="ms-5" style={{ width: "40%" }} >
        <h4>Create a New Article</h4>
        <div className="mb-3 form-floating ">
          <input
            type="text"
            className="form-control"
            id="floatingTitle"
            placeholder="title"
            value={createArticle.title}
            onChange={(e) => setCreateArticle({...createArticle,title: e.target.value})}
          />
          <label htmlFor="floatingTitle">title</label>
        </div>
        <div className="mb-3 form-floating">
          <textarea
            className="form-control"
            placeholder="description"
            id="floatingDescription"
            value={createArticle.description}
            style={{height: '155px'}}
            onChange={(e) => setCreateArticle({...createArticle, description: e.target.value})}
          />
          <label htmlFor="floatingDescription">description</label>
        </div>

        <div className="mb-3 form-floating">
          <input
            type="text"
            className="form-control"
            placeholder="category"
            id="floatingCategory"
            value={createArticle.category}
            onChange={(e) => setCreateArticle({...createArticle, category: e.target.value})}
          />
          <label htmlFor="floatingCategory"> category </label>
        </div>

        <div className='d-flex justify-content-end'>
        <button type="button" className="btn btn-primary me-3" onClick={handleSubmit}> Add </button>
        <button type='button' className='btn btn-secondary' onClick={() => setShow(false)}>Cancle</button>
        </div>
        
      </form>
    </div>
  )
}

export default ArticleForm
