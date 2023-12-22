import Gallery from "../components/Pokemongallery";
import Pikachu from '../assets/img/Pikachu.png'

const Home = () => {
  return (
    <div className="App">
      <h1 className="m-3">Bienvenido futuro maestro pokemón!</h1>
        <img src={Pikachu} alt="Pikachu picture" width="500"/>
      {/*<Gallery />*/}
    </div>
  );
};
export default Home;