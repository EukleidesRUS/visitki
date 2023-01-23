import { FC,  useState } from "react";
import { Link } from "react-router-dom";
import ChatIcon from "../../components/Icons/ChatIcon/ChatIcon";
import { TCardProps } from "../../utils/types";
import FeedbackBlock from "../FeedbackBlock/FeedbackBlock";
import styles from "./Card.module.css";

const Card:FC<TCardProps> = ({img, name, city, id}): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);
  const openFeedback = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.card}>
      <Link to={`details/:${id}`}>
      <div className={styles.cardImgContainer}>
        <img
          className={styles.cardImg}
          src={img}
          alt="ProfilePhoto"
        />
        <FeedbackBlock open={isOpen}/>
      </div>
      
        <p className={styles.cardName}>{name}</p>
      </Link>
      <p className={styles.cardPlace}>{city}</p>

      <div className={styles.cardIcon} onClick={openFeedback}>
        <ChatIcon count={2} />
      </div>
    </div>
  );
};

export default Card;
