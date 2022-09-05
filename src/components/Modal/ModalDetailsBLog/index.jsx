import { SectionModal, DivModal, Card } from "./style";
import { useContext } from "react";
import { Context } from "../../../providers/userContext";
import "animate.css";

function ModalEdit() {
  const { dropDownBlog, closeDropDownBlog, news } = useContext(Context);

  console.log(news)
  return (
    <SectionModal dropdown={dropDownBlog}>
      <DivModal>
        <Card key={news._id}>
          <div className="newMainImage">
            <img src={news.media} alt="" />
          </div>
          <div className="newsMainHeader">
              <h2 className="newsMainTitle">{news.title}</h2>
              <p className="newsMainDate">{news.published_date}</p>
            </div>
          <div className="newsMainContent">
            <p className="newsMainText">
            {news.summary}
            </p>
            <div className="newsMainLinkClose">
            <button  type="button" onClick={closeDropDownBlog}>
              Voltar
            </button>
            </div>
          </div>
        </Card>
      </DivModal>
    </SectionModal>
  );
}

export default ModalEdit;
