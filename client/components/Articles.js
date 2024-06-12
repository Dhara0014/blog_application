import React, { useState } from "react";
import Link from "next/link";
import { removeArticle, sortArticle } from "../apis/apis";

const Articles = ({ article, setLoad, setArticle }) => {
  const [editItm, setEditItm] = useState(false);
  const [id, setId] = useState({});
  const [modal, setModal] = useState('')

  const sortArray = async () => {
    const response = await sortArticle();
    const { message, result, status } = response;
    status == "Success" && setArticle(result);
  };

  const deleteArticle = (articleId) => {
    setId(articleId);
    setModal('modal');
  };

  const deleteArticleById = async() => {
    const response = await removeArticle({id: id?._id});
    const {status} = response;
    if(status == "Success"){
      setLoad(true);
      setModal('');
      setId('');
    }
  }

  return (
    <div className="border rounded m-4" >
   {article?.length > 1 && <div className="d-flex justify-content-end me-5 mt-3">
        <button className="btn btn-outline-success" onClick={sortArray}>
          Sort
        </button>
    </div>}
      <div className="row row-cols-1 row-cols-md-3 g-4 p-4">
      
        { article?.length > 0 && article?.map((itm) => {
          return (
            <div className="col" key={itm._id}>
              <div className="card h-100">
                <div className="card-body">
                  {editItm ? (
                    <>
                      <input type="text" className="form-control" defaultValue={itm.title}  /> 
                      <textarea className="form-control" defaultValue={itm.description} />
                    </>
                  ) : (
                    <>
                      <h5 className="card-title"> {itm.title} </h5>
                      <p className="card-text">
                        {" "}
                        {itm.description?.length > 300
                          ? `${itm.description.slice(0, 301)}...`
                          : itm.description}{" "}
                      </p>
                    </>
                  )}
                </div>
                <div className="d-flex justify-content-end mb-2 ">
                  {editItm ? (
                    <>
                      <button
                        className="btn btn-outline-primary me-2 "
                        onClick={() => setEditItm(false)}
                      >
                        Cancle
                      </button>
                      <button className="btn btn-outline-success me-2 ">
                        Save
                      </button>
                    </>
                  ) : (
                    <>
                    <Link href={`/article/${itm?._id}`} >
                        <button className="btn btn-outline-primary me-2 "> Edit </button> 
                    </Link>                      
                      <button className="btn btn-outline-danger me-2 " data-bs-toggle="modal" data-bs-target="#exampleModal" 
                              onClick={() => deleteArticle(itm)} > Delete </button>                 
                    </>
                  )}
                </div>
                <div className="card-footer">
                  <small className="text-muted"> {itm.createdAt} </small>
                </div>
              </div>
            </div>
          );
        })}

            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h1 className="modal-title fs-5" id="exampleModalLabel">  {id?.title} </h1>
                          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                          Are you sure you want to delete the article ?
                        </div>
                        <div className="modal-footer">
                          <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                          <button type="button" className="btn btn-danger" onClick={deleteArticleById} data-bs-dismiss={modal}>Delete</button>
                        </div>
                      </div>
                    </div>
                  </div>

        {
          article?.length == 0 && <span className="text-secondary"> No article found... </span>
        }
      </div>
    </div>
  );
};

export default Articles;
