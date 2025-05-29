import Recommendation from "../../components/Recommendation/Recommendation";
import Setup from "../../components/AvatarList/AvatarList";
import Collection from "../../components/Collection/Collection";

const Main = () => {
  return (
    <main className="main">
      <Recommendation />
      <Setup />
      <Collection />
    </main>
  );
};

export default Main;
