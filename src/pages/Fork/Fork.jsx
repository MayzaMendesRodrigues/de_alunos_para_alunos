import { forkTutorial } from "../../utils/content/forkContent";
import group1 from "../../assets/logos/Group1.png";
import forkLogo from "../../assets/logos/fork-logo.png";
import group3 from "../../assets/logos/Group3.png";
import group4 from "../../assets/logos/Group4.png";

const ForkTutorial = () => {
  return (
    <section className="fork-tutorial">
      <h1>O Poder da Comunidade no GitHub:</h1>
      <h2>A força por trás do Fork</h2>
      <div className="fork-tutorial__first">
        <div className="fork-tutorial__description">
          {forkTutorial.firstDescription.map((block, index) => {
            if (block.type === "highlight") {
              return <h3 key={index}>{block.text}</h3>;
            }
            if (block.type === "paragraph") {
              return <p key={index}>{block.text}</p>;
            }
            return null;
          })}
        </div>
        <div className="fork-tutorial__image">
          <img
            src={group1}
            alt="Git x GitHub: Qual a Diferença?"
            className="fork-tutorial__image__img"
          />
        </div>
      </div>
      <div className="fork-tutorial__second">
        <div className="fork-tutorial__image">
          <img
            src={forkLogo}
            alt="Fork Tutorial"
            className="fork-tutorial__image__img"
          />
        </div>
        <div className="fork-tutorial__description">
          {forkTutorial.secondDescription.map((block, index) => {
            if (block.type === "highlight") {
              return <h3 key={index}>{block.text}</h3>;
            }
            if (block.type === "paragraph") {
              return <p key={index}>{block.text}</p>;
            }
            return null;
          })}
        </div>
      </div>
      <div className="fork-tutorial__third">
        <div className="fork-tutorial__description">
          {forkTutorial.thirdDescription.map((block, index) => {
            if (block.type === "highlight") {
              return <h3 key={index}>{block.text}</h3>;
            }
            if (block.type === "paragraph") {
              return <p key={index}>{block.text}</p>;
            }
            return null;
          })}
        </div>
        <div className="fork-tutorial__image">
          <img
            src={group3}
            alt="Group 3"
            className="fork-tutorial__image__img"
          />
        </div>
      </div>
      <div className="fork-tutorial__fourth">
        <div className="fork-tutorial__image">
          <img
            src={group4}
            alt="Group 4"
            className="fork-tutorial__image__img"
          />
        </div>
        <div className="fork-tutorial__description">
          {forkTutorial.fourthDescription.map((block, index) => {
            if (block.type === "highlight") {
              return <h3 key={index}>{block.text}</h3>;
            }
            if (block.type === "paragraph") {
              return <p key={index}>{block.text}</p>;
            }
            return null;
          })}
        </div>
      </div>
    </section>
  );
};

export default ForkTutorial;
