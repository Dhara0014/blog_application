"use client";
import styles from "./page.module.css";
import { useEffect, useState } from "react";
import Articles from "../components/Articles";
import ArticleForm from "../components/ArticleForm";
import Search from "../components/Search";
import { getAllArticle } from "../apis/apis";

export default function Home() {
  const [load, setLoad] = useState(false);
  const [article, setArticle] = useState([]);
  const [show, setShow] = useState(false);

  

  useEffect(() => {
    try {
      const result = async () => {
        let response = await getAllArticle();
        const { message, result, status } = response;
        status == "Success" && setArticle(result);
      };
      result();
      setLoad(false);
      
    } catch (error) {
      console.log('error >>', error);
    }    
  }, [load]);


  return (
    <main classNameName={styles.main}>
      <h1 className="m-4">Blog-app</h1>
      <div className="d-flex justify-content-between" >
        {!show && <span className="m-4" onClick={() => setShow(true)}>
        <button className="btn btn-primary"> create article </button>
        </span>}
      <Search setArticle={setArticle} />
      </div>
      
      {show && <ArticleForm setLoad={setLoad} setShow={setShow} />}
      <Articles article={article} setLoad={setLoad} setArticle={setArticle} />
    </main>

  );
}
