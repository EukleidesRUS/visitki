import React, { FC, useState } from "react";
import { useLocation } from "react-router";
import imgBorderSolid from "../../images/BorderSolid.png";
import imgBorderZig from "../../images/BorderZig.png";
import { TProfileID } from "../../utils/types";
import FeedbackBlock from "../FeedbackBlock/FeedbackBlock";
import ChatIcon from "../Icons/ChatIcon/ChatIcon";
import styles from "./ProfileDetailsOtherBlock.module.css";

type TProfileDetailsOtherBlock = {
  theme: boolean;
  title: string;
  image?: any;
  description?: string;
  userData?:TProfileID | null;
};

const ProfileDetailsOtherBlock: FC<TProfileDetailsOtherBlock> = ({
  theme,
  title,
  image,
  description,
  userData
}): JSX.Element => {
  const location = useLocation();
  const [isImg, setIsImg] = React.useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const openFeedback = () => {
    isOpen ? setIsOpen(false) : setIsOpen(true);
  };

  React.useEffect(() => {
    if (image) {
      setIsImg(true);
    }
  }, [image]);

  return (
    <div className={styles.profileDetailsOtherBlock}>
      <img
        className={styles.profileDetailsOtherBlockBorder}
        src={theme ? imgBorderZig : imgBorderSolid}
        alt="рамка"
      />
      <h4 className={styles.profileDetailsOtherBlockTitle}>{title}</h4>
      {isImg && (
        <img
          className={styles.profileDetailsOtherBlockImg}
          src={image}
          alt="фото"
        />
      )}
      <p className={styles.profileDetailsOtherBlockDescription}>
        {description}
      </p>
      <div className={styles.profileDetailsOtherBlockChatIcon} onClick={openFeedback}>
        <ChatIcon count={1} />
      </div>
      <FeedbackBlock
        userData={userData}
        location={location.pathname}
        open={isOpen}
        size="forDetails"
      />
    </div>
  );
};

export default ProfileDetailsOtherBlock;
