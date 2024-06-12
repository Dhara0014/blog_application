"use client"

import { useParams, useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { getArticleById ,updateArticle} from '../../../apis/apis';

const EditForm = () => {
const router = useRouter();
const params = useParams();
const {slug} = params;
const [createArticle, setCreateArticle] = useState({});

useEffect(() => {
  try {
    const result = async() => {
      let response = await getArticleById({slug})
      const {status, result} = response;
      if(status == "Success" ){
        setCreateArticle(result)
      }
    }
    result();

  } catch (error) {
    console.log('edit error >>', error);    
  }
},[]);

const handleSubmit = async(e) => {
  e.preventDefault();
  try {
    const {_id, title, description, category} = createArticle;
    let response = await updateArticle({
        id: _id,
        title,
        description,
        category
    });
    const {status} = response;
    status == "Success" && router.push("/");
  } catch (error) {
    console.log('update error >>', error);
  }
}

  return (
      <div className='d-flex justify-content-center'>
      <form className="m-5" style={{ width: "50%" }}  >
        <h4 className='mb-3'>Edit Your Article</h4>
        <div className="mb-3 form-floating ">
          <input
            type="text"
            className="form-control"
            id="floatingTitle"
            placeholder="title"
            value={createArticle.title}
            defaultValue={createArticle[0]?.title}
            onChange={(e) => setCreateArticle({...createArticle,title: e.target.value})}
          />
          <label htmlFor="floatingTitle">title</label>
        </div>
        <div className="mb-3 form-floating">
          <textarea
            className="form-control"
            placeholder="description"
            id="floatingDescription"
            defaultValue={createArticle[0]?.description}
            value={createArticle.description}
            style={{height: '200px'}}
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
            defaultValue={createArticle[0]?.category}
            value={createArticle.category}
            onChange={(e) => setCreateArticle({...createArticle, category: e.target.value})}
          />
          <label htmlFor="floatingCategory"> category </label>
        </div>

        <div className='d-flex justify-content-end' >
        <button type="button" className="btn btn-outline-primary me-3" onClick={() => router.back()}> Cancle </button>
        <button type="button" className="btn btn-outline-success" onClick={handleSubmit} > Save </button>
        </div>      
      </form>
    </div>
  )
}

export default EditForm;
