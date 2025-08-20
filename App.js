import React, {useState} from "react";
import articles from"./articles";
import "./App.css";

function App(){
  const [SearchTerm, SetSearchTerm]=UseState("");
  const highlightText=(text,Highlight)=>{
  if (!Highlight) return text;
  const regex=new RegExp(`(${highlight})`,"gi");
  return text.split(regex).map ((part,i)=>
    regex.test(part)? <mark key={i}>{part}</mark>:part
  );
  };
  const filteredArticles=articles.filter(
    (article)=>
      article.title.toLowerCase().includes (SearchTerm.toLowerCase())||
      article.content.toLowerCase().includes(SearchTerm.toLowerCase())
  );
  
return (
  <div className="App">
    <h2> Search</h2>
    <input
      type="text"
      placeholder="Search articles"
      value={SearchTerm}
      onChange={(e)=> SetSearchTerm(e.target.value)}
      />
      <p>{filteredArticles.length}posts were found</p>
      {filteredArticles.map((article)=>(
        <div key={article.id} className="article">
        <h3>{highlightText (article.title,SearchTerm)}</h3>
        <small> {article.date}</small>
        <p>{highlightText (article.content,SearchTerm)}</p>
        
      </div>
      ))}
      
      
  </div>
  );
}
export default App;