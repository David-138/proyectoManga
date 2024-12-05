import React, { useState } from "react";
import "./../css/achievements.css";
import Header from "../../Components/Header/header";
import AchievementDetail from "../../Components/AchievementDetail/achievementdetail";
import achievementsData from '../AyudaParaInserts/text';

function Achievements() {
  const [language, setLanguage] = useState("en");

  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === "en" ? "es" : "en"));
  };
  const [showAchievement, setShowAchievement] = useState(false);
  const toggleAchievement = () => {
    setShowAchievement(!showAchievement);
  };
  return (
    <>
      <Header />
      <button onClick={toggleLanguage}>
        {language === "en" ? "English" : "Español"}
      </button>
      <div className={showAchievement ? "" : "hidden"}>
        <div className="details">
          <AchievementDetail />
        </div>
        <div className="detailsBackground" onClick={toggleAchievement} />
      </div>
      <div className="achievements">
        <h3>Demography</h3>
        {achievementsData.achievementsDemographic.map((achievement) => (
          <div className="achievement" key={achievement.id}>
            <img src={achievement.noConsg} alt={achievement.title} />
            <p>
              {language === "en" ? achievement.title : achievement.titleEsp}
            </p>
          </div>
        ))}
      </div>
      <div className="achievements">
        <h3>Genres</h3>
        <div className="achievement">
          <img
            src="/assets/Achievements/NoConseguido.png"
            alt=""
            onClick={toggleAchievement}
          />
          <p>Catch you, catch me</p>
        </div>
        <div className="achievement">
          <img
            src="/assets/Achievements/NoConseguido.png"
            alt=""
            onClick={toggleAchievement}
          />
          <p>Alguno bueno tiene que haber</p>
        </div>
        <div className="achievement">
          <img
            src="/assets/Achievements/NoConseguido.png"
            alt=""
            onClick={toggleAchievement}
          />
          <p>¿¡Quien demonios te crees que soy!?</p>
        </div>
        <div className="achievement">
          <img
            src="/assets/Achievements/NoConseguido.png"
            alt=""
            onClick={toggleAchievement}
          />
          <p>Todos malos, ni uno bueno</p>
        </div>
        <div className="achievement">
          <img
            src="/assets/Achievements/NoConseguido.png"
            alt=""
            onClick={toggleAchievement}
          />
          <p>Abandonado de la mano de Dios</p>
        </div>
        <div className="achievement">
          <img
            src="/assets/Achievements/NoConseguido.png"
            alt=""
            onClick={toggleAchievement}
          />
          <p>Tras 3 volúmenes finalmente se dieron la mano</p>
        </div>
        <div className="achievement">
          <img
            src="/assets/Achievements/NoConseguido.png"
            alt=""
            onClick={toggleAchievement}
          />
          <p>No Pain, No Game</p>
        </div>
      </div>

      <div className="achievements">
        <h3>Mangas</h3>
        <div className="achievement">
          <img
            src="/assets/Achievements/NoConseguido.png"
            alt=""
            onClick={toggleAchievement}
          />
          <p>Como me gusta Padre Ball</p>
        </div>
        <div className="achievement">
          <img
            src="/assets/Achievements/NoConseguido.png"
            alt=""
            onClick={toggleAchievement}
          />
          <p>Galleta Galleta Metralleta</p>
        </div>
        <div className="achievement">
          <img
            src="/assets/Achievements/NoConseguido.png"
            alt=""
            onClick={toggleAchievement}
          />
          <p>Soy el más perrón aquí</p>
        </div>
        <div className="achievement">
          <img
            src="/assets/Achievements/NoConseguido.png"
            alt=""
            onClick={toggleAchievement}
          />
          <p>Único y detergente</p>
        </div>
        <div className="achievement">
          <img
            src="/assets/Achievements/NoConseguido.png"
            alt=""
            onClick={toggleAchievement}
          />
          <p>Pokémon Master</p>
        </div>
        <div className="achievement">
          <img
            src="/assets/Achievements/NoConseguido.png"
            alt=""
            onClick={toggleAchievement}
          />
          <p>Te pregunto... ¿por qué?</p>
        </div>
        <div className="achievement">
          <img
            src="/assets/Achievements/NoConseguido.png"
            alt=""
            onClick={toggleAchievement}
          />
          <p>You don't need superpowers to be a hero... well, yeah, you do</p>
        </div>
        <div className="achievement">
          <img
            src="/assets/Achievements/NoConseguido.png"
            alt=""
            onClick={toggleAchievement}
          />
          <p>GPT Kaisen</p>
        </div>
        <div className="achievement">
          <img
            src="/assets/Achievements/NoConseguido.png"
            alt=""
            onClick={toggleAchievement}
          />
          <p>¡1000 vueltas al campo!</p>
        </div>
        <div className="achievement">
          <img
            src="/assets/Achievements/NoConseguido.png"
            alt=""
            onClick={toggleAchievement}
          />
          <p></p>
        </div>
      </div>
      <div className="achievements">
        <h3>Hidden</h3>
        <div className="achievement">
          <img
            src="/assets/Achievements/NoConseguido.png"
            alt=""
            onClick={toggleAchievement}
          />
          <p>
            No te metas con los fans de Dragon Ball, no hemos leido nuestra obra
          </p>
        </div>
        <div className="achievement">
          <img
            src="/assets/Achievements/NoConseguido.png"
            alt=""
            onClick={toggleAchievement}
          />
          <p>El SNKverso fue barrido</p>
        </div>
        <div className="achievement">
          <img
            src="/assets/Achievements/NoConseguido.png"
            alt=""
            onClick={toggleAchievement}
          />
          <p>🤨📸</p>
        </div>
        <div className="achievement">
          <img
            src="/assets/Achievements/NoConseguido.png"
            alt=""
            onClick={toggleAchievement}
          />
          <p>
            Shingeki no Bodrio la vergüenza del shonen/Babilonia no Cristo la
            salvación de la industria.
          </p>
        </div>
        <div className="achievement">
          <img
            src="/assets/Achievements/NoConseguido.png"
            alt=""
            onClick={toggleAchievement}
          />
          <p>¿De quien son estos recuerdos?</p>
        </div>
        <div className="achievement">
          <img
            src="/assets/Achievements/NoConseguido.png"
            alt=""
            onClick={toggleAchievement}
          />
          <p>Nunca digas de esta agua no beberé ni este cura no es mi padre</p>
        </div>
      </div>
    </>
  );
}

export default Achievements;
