import { Card } from "./style";
import { useContext } from "react";
import { Context } from "../../providers/userContext";

function CardNews(index ,elem) {
  const { showDropDownBlog, listNews } = useContext(Context)

    return (
      <>
    {listNews.map((elem) => (   
      <Card key={elem._id}>
        <div className="newsRandom">
        <div className="newRandomImage">
          <img src={elem.media} alt="" />
        </div>
        <div className="newsRandomContent">
          <div className="newsRandomHeader">
            <h2 className="newsRandomTitle">{elem.title}</h2>
            <p className="newsRandomDate">{elem.published_date}</p>
          </div>
          <p className="newsRandomText">
          {elem.summary}
          </p>
          <button type="button" className="newsRandomLink" onClick={() => showDropDownBlog(elem)}>Mais informação</button>
        </div>
      </div>
        </Card> 
        ))}   
      </>
 
    )
}

export default CardNews;