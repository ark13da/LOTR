import { heroCardprops } from "app/models/interfaces";
import "app/components/SingleCard/SingleCard.css";

const SingleCard = ({
  name,
  imagesrc,
  closeBtn,
  type_name,
  traits,
  text,
  flavor,
  threat,
  willpower,
  attack,
  defense,
  health,
}: heroCardprops) => {
  return (
    <div className="overLay">
      <div className="singleCard">
        <div className="singleCardHeader">
          <p className="titleText">{name}</p>
          <button className="closeBtn" onClick={() => closeBtn()}>
            &#x2716;
          </button>
        </div>
        <div className="singleCardContent">
          <div>
            <img
              className="singleCardImg"
              src={`https://ringsdb.com/${imagesrc}`}
              alt="Hero"
            />
          </div>
          <div className="singleCardStats">
            <div className="cardInfoSection">
              <p className="titleText">{type_name}</p>
              <p className="boldText">{traits}</p>
            </div>
            <div className="cardInfoSection">
              <p>Threat: {threat}</p>
              <p>Health: {health}</p>
              <p>Attack: {attack}</p>
              <p>Defence: {defense}</p>
              <p>Willpower: {willpower}</p>
            </div>
          </div>
          <div className="singleCardInfo">
            <div className="cardInfoSection">
              <p>{text}</p>
            </div>
            <div className="cardInfoSection">
              <p>{flavor}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SingleCard
