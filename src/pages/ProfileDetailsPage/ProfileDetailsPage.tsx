import { FC, useState, useContext } from "react";
import TelegramIcon from "../../components/Icons/TelegramIcon/TelegramIcon";
import GitHubIcon from "../../components/Icons/GitHubIcon/GitHubIcon";
import StatusIcon from "../../components/Icons/StatusIcon/StatusIcon";
import ChatIcon from "../../components/Icons/ChatIcon/ChatIcon";
import ProfilePhotoTest from "../../images/ProfilePhotoTest.jpg";
import ProfileDetailsOtherBlock from "../../components/ProfileDetailsOtherBlock/ProfileDetailsOtherBlock";
import styles from "./ProfileDetailsPage.module.css";
import { AuthContext } from "../../services/AuthContext";

const ProfileDetailsPage: FC = () => {
  const { state } = useContext(AuthContext)
  const [theme , setTheme] = useState({profilePhotoStyle:"default", statusColor:"default", borderDetailsOther:"default"})
  
  console.log(state)

  return (
    <main className={styles.profileDetailsContainer}>
      {/* Верхняя часть профиля */}
      <div className={styles.profileDetailsMain}>
        <div className={styles.profileDetailsMainInfo}>
          <h1 className={styles.profileDetailsMainInfoName}>
            Твой sucks slaves друг
          </h1>
          <p className={styles.profileDetailsMainInfoTown}>Нью-Йорк</p>
          <div className={styles.profileDetailsMainInfoIcons}>
            <TelegramIcon />
            <GitHubIcon />
          </div>
        </div>
        <div className={styles.profileDetailsMainInfoImgContainer}>
          <img
            className={`${styles.profileDetailsMainInfoImg} 
            ${theme.profilePhotoStyle=== "romantic" && styles.profileDetailsMainInfoImgRomantic}`}
            src={ProfilePhotoTest}
            alt="ProfilePhoto"
          />
          <div className={styles.profileDetailsMainInfoChatIcon}>
          <ChatIcon count={2}/>
          </div>
          
        </div>
        <div className={styles.profileDetailsMainInfoStatus}>
          <div className={styles.profileDetailsMainInfoStatusIconContainer}>
            {/* Цвет в зависимости от темы передаем в stroke:#100C34 или #FF00A8  */}
            <StatusIcon stroke={theme.statusColor!== "default" ? "#FF00A8" : "#100C34"} />
          </div>

          <h3 className={`${styles.profileDetailsMainInfoStatusText} ${theme.statusColor!== "default" && styles.profileDetailsMainInfoColor}`}>
            Эй, приятель, я думаю, ты ошибся дверью, клуб любителей кожаных
            вещей двумя этажами ниже.
          </h3>
          <div className={styles.profileDetailsMainInfoStatusIcon}>
          <ChatIcon count={1}/>
          </div>
        </div>
      </div>

      {/* Нижняя часть с деталями */}
      <div className={styles.profileDetailsOther}>
        <ProfileDetailsOtherBlock
          theme={theme.borderDetailsOther !== "default" ? true : false}
          title="Увлечения"
          image="https://icdn.lenta.ru/images/2021/09/15/18/20210915183555038/square_1280_125ceca6620766b9a6467fa3159615c9.jpg"
          description="Увлекаюсь программированием, игрой на гитаре, вышиваю крестиком и
                      играю в настолки. Увлекаюсь программированием, игрой на гитаре,
                      вышиваю крестиком и играю в настолки. Увлекаюсь программированием,
                      игрой на гитаре, вышиваю крестиком и играю в настолки."
        />
        
      </div>
    </main>
  );
};

export default ProfileDetailsPage;
