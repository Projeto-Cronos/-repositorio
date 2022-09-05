import { Card } from "./style";
import { useContext } from "react";
import { Context } from "../../providers/userContext";

function CardNewsMain() {
  const { showDropDownBlog, newsMain} = useContext(Context)

    return (
      <> 
      {newsMain.map((elem) => (   
      <Card key={elem._id}>
        <div className="newsMainContent">
          <div className="newsMainHeader">
            <h2 className="newsMainTitle">{elem.title}</h2>
            <p className="newsMainDate">{elem.published_date}</p>
          </div>
          <p className="newsMainText">
          {elem.summary}
          </p>
          <button type="button" className="newsMainLink" onClick={() => showDropDownBlog(elem)}>Mais informação</button>
        </div>
        <div className="newMainImage">
          <img src={elem.media} alt="" />
        </div>
      </Card>
      ))}   
      </>
   
    )
}

export default CardNewsMain;