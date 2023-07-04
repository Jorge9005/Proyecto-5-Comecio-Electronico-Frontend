import Hero from "../components/hero/Hero";
import imgBurgerSencilla from "../images/hamburguesa-sencilla.jpg";
import imgBurgerDoble from "../images/hamburguesa-doble.jpg";
import imgBurgerRanch from "../images/hamburguesa-ranch.jpg";
import imgBebidaMango from "../images/bebida-de-mango.jpg";
import imgPapasFrancesas from "../images/papas-a-la-francesa.jpeg";


function Home() {
    return (
    <div>
        <Hero/>
        <div className="w3-content">
            <div className="w3-row w3-padding-64" id="menu">
                <div className="w3-col l6 w3-padding-large">
                    <h1 className="w3-center">Our Menu</h1><br />
                    <h4>Hamburguesa Sencilla</h4>
                    <img className="imagen-menuHome" src={imgBurgerSencilla} alt="bugersencilla" />
                    <p className="w3-text-grey">Assortment of fresh baked fruit breads and muffins 5.50</p><br />
                    <h4>Hamburguesa Doble</h4>
                    <img className="imagen-menuHome" src={imgBurgerDoble} alt="bugerdoble" />
                    <p className="w3-text-grey">Natural cereal of honey toasted oats, raisins, almonds and dates 7.00</p><br />
                    <h4>Papas a la francesa</h4>
                    <img className="imagen-menuHome" src={imgPapasFrancesas} alt="papasfrancesas" />
                    <p className="w3-text-grey">Vanilla flavored batter with malted flour 7.50</p><br />
                    <h4>Bebida de Mango</h4>
                    <img className="imagen-menuHome" src={imgBebidaMango} alt="bebidamango" />
                    <p className="w3-text-grey">Scrambled eggs, roasted red pepper and garlic, with green onions 7.50</p><br />
                    <h4>Hamburguesa Ranch</h4>
                    <img className="imagen-menuHome" src={imgBurgerRanch} alt="bugerranch" />
                    <p className="w3-text-grey">With syrup, butter and lots of berries 8.50</p>
                </div>
            </div>
            <hr />

        </div>
    </div>

    );
}

export default Home;