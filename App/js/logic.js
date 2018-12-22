class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div className="photo-container container-fluid">
                    <div className="header">
                        <img className="logo" src="./images/logo.png" />
                    </div>
                    <Navbar />
                    <Countdown />
                </div>
                <Content />
            </div>
        );
    }
}

class Navbar extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount(){
        window.onscroll =()=>{
            var scroll = window.scrollY;
            if(scroll < 300){
                $('.navbar').css({'background':'transparent','color':'white'});
        
            } else{
                $('.navbar').css({'background':'rgba(255,255,255,0.9)','color':'black'});
            }
        };
    }
    render() {
        return (
            <nav id="nav" className="navbar navbar-expand-sm navbar-light fixed-top">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown"
                    aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Save The Date<span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown"
                                aria-haspopup="true" aria-expanded="false">Mariage</a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <a className="dropdown-item" href="#houppa">Houppa</a>
                                <a className="dropdown-item" href="#pool">Surprise</a>
                                <a className="dropdown-item" href="#chabbat">Chabbat</a>
                            </div>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#hotel">Hotel</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#photo">Photo</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#answer">Réponse</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#telaviv">Notre Tel Aviv</a>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

class Countdown extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            now: new Date().getTime(),
            second: 1000,
            minute: 1000 * 60,
            hour: 1000 * 60 * 60,
            day: 1000 * 60 * 60 * 24,
            date: new Date('Oct 29, 2019 18:00:00').getTime(),
            distance: 0
        }
    }
    componentDidMount() {
        this.setState({
            distance: this.state.distance = this.state.date - this.state.now,
            day: Math.floor(this.state.distance / this.state.day),
            hour: Math.floor(this.state.distance % this.state.day / this.state.hour),
            minute: Math.floor(this.state.distance % this.state.hour / this.state.minute),
            second: Math.floor(this.state.distance % this.state.minute / this.state.second),

        })
    }
    render() {
        return (
            <div className="countdown">
                <h1 id="head">29 Octobre 2019</h1>
                <ul>
                    <li><span id="days">{this.state.day}</span>Days</li>
                    <li><span id="hours">{this.state.hour}</span>Hours</li>
                    <li><span id="minutes">{this.state.minute}</span>Minutes</li>
                    <li><span id="seconds">{this.state.second}</span>Seconds</li>
                </ul>
            </div>
        );
    }
}

class Content extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div id="houppa" className="container-fluid">
                    <h2>La Houppa</h2>
                    <div className="row">
                        <span className="left">MM</span>
                        <span className="right">MM</span>
                    </div>
                    <p>Nous avons l'immense joie de vous convier à notre mariage </p>
                    <p>La houppa aura lieu</p>
                    <p>Le mardi 29 octobre 2019 à 18 heures précises</p>
                    <p> 1 'Hechvan 5780</p>
                    <p>Dans les jardins de Terra</p>
                    <p>La réception suivra la cérémonie</p>
                    <p>RSVP <a href='#answer'>ici</a> </p>

                    <p>
                        HaHarash St 19, Caesarea<br />
                        החרש 19, קיסריה
                    </p>
                    <div>//GOOGLE MAP//</div>
                </div>
                <div id="chabbat" className="container-fluid">
                    <h2>Le Shabat</h2>
                    <p>Notre Shabat Hatan aura lieu le vendredi 1er novembre et le samedi 2 novembre à Tel Aviv</p>
                    <p>Nous vous communiquerons le lieu exact le plus rapidement possible </p>
                    <p>Pour les shomer shabat, nous vous conseillons de réserver un logement dans le quartier Rothschild/Allenby</p>


                </div>
                <div id="pool" className="container-fluid">
                    <h2>La surprise</h2>
                    <p>Réservez votre jeudi 31 octobre, nous vous préparons une surprise de folie</p>
                    <p>Plus d'infos très rapidement</p>
                </div>
                <div id="hotel" className="container-fluid">
                    <h2>Avion et hôtels</h2>
                    <p>Nous avons négocié des prix pour vous</p>
                    <ul>
                        <li>Vol à départ de Paris et de Marseille</li>
                        <li>Hôtels à Tel Aviv à partir de 250€/nuit</li>
                    </ul>
                    <p>Il y a bien évidemment d'autres hôtels ainsi que des Airbnb à proximité </p>
                    <p>Nous vous recommandons de regarder sur SweetInn </p>
                    <p>Vous pouvez contacter notre agent de voyages au 00000000 </p>
                </div>
                <div id="answer" className="container-fluid">
                    <h2>RSVP</h2>
                    <p> ///// FORMULAIRE RSVP</p>
                </div>
                <div id="telaviv" className="container-tlv">
                    <h2>Nos adresses à Tel Aviv</h2>
                    <h5>Nos Bars</h5>
                    <ul>
                        <li><a href='https://brownhotels.com/bars' target='blank'>Le Poli House, </a>
                            <a target='blank' href='https://www.google.com/maps/place/Poli+House+Boutique+Hotel+by+Brown+Hotels/@32.0695962,34.7682594,17z/data=!3m1!4b1!4m5!3m4!1s0x151d4c8162455e9f:0x7ca73bbd2f8b9be!8m2!3d32.0695917!4d34.7704535'> 
                            Nahalat Binyamin 1 : </a>Rooftop sympa, idéal pour boire un verre et profiter du coucher du soleil au bord de la piscine</li>
                        
                        <li><a href='https://teder.fm/en/' target='blank'>Le Teder</a>
                            <a target='blank' href='https://www.google.com/maps/place/Teder.fm/@32.0602914,34.7671125,17z/data=!3m1!4b1!4m5!3m4!1s0x151d4c9c1ba655ab:0x89c5bd0d2eed1da0!8m2!3d32.0602869!4d34.7693012'> 
                            , Derech Yaffo 9 : </a>Notre endroit préféré. QUe ce soit pour prendre un verre avant de sortir 
                            ou aller manger une des meilleures pizzas de Tel Aviv. </li>
                       
                        <li><a href='https://www.facebook.com/theprincetlv/' target='blank'>Le Prince</a>
                            <a target='blank' href='https://www.google.com/maps/place/The+Prince/@32.0672054,34.7679844,17z/data=!3m1!4b1!4m5!3m4!1s0x151d4c83a3d107b7:0xfe0c2b3a497853ea!8m2!3d32.0672009!4d34.7701731'> 
                            , Nahalat Binyamin 18 : </a>Le rooftop le plus israélien de Tel Aviv, une super ambiance et des cocktails top! (Nous on craque pour leurs frites d'aubergine...) </li>
                       
                        <li><a href='https://www.facebook.com/sputnikTLV/' target='blank'>Le Sputnik</a>
                            <a target='blank' href='https://www.google.com/maps/place/Sputnik+bar/@32.0628458,34.7709537,17z/data=!3m1!4b1!4m5!3m4!1s0x151d4c9d45aea4c9:0xc383387661caff91!8m2!3d32.0628413!4d34.7731424'> 
                            , Allenby 122 : </a>On aime ce patio à la déco complètement décallée. Idéal à toute heure de la nuit, il se transforme en boite de nuit électro. On est fans! </li>

                        <li><a href='https://www.facebook.com/kulialma' target='blank'>Kuli Alma</a>
                            <a target='blank' href='https://www.google.com/maps/place/KULI+ALMA/@32.0622247,34.7726968,17z/data=!3m1!4b1!4m5!3m4!1s0x151d4b62ba091a25:0x8cbd422c87943544!8m2!3d32.0622202!4d34.7748855'> 
                            , Mikve Israel 10 : </a> Vous hésitez entre: aller en boite, manger une pizza, jouer aux jeux vidéos, voir une expo et faire du shopping? Là-bas, vous pourrez faire tout ça en même temps!!</li>
                        
                        <li><a href='https://www.facebook.com/Tangierbar/' target='blank'>TANGIER</a>
                            <a target='blank' href='https://www.google.com/maps/place/Tangier/@32.0653308,34.7757009,17z/data=!3m1!4b1!4m5!3m4!1s0x151d4b7c43328095:0xcb380763c935640a!8m2!3d32.0653263!4d34.7778896'> 
                            , Mikve Israel 10 : </a> Une vraie ambiande de henné: les tarbouche, la déco, tout y est! On se croirait au Maroc. En plus, ils ont un bracelet avec alcool illimité, parfait avant de sortir en boite </li>

                    </ul>
                    <h5>Nos Boites</h5>
                    <ul>
                        <li><a href='https://www.facebook.com/zoozootelaviv/' target='blank'>Le ZooZoo</a>
                            <a target='blank' href='https://www.google.com/maps/place/Zoo+Zoo/@32.0632629,34.7705187,17z/data=!3m1!4b1!4m5!3m4!1s0x151d4c9d496d47e1:0xb48be93a132fe00a!8m2!3d32.0632584!4d34.7727074'> 
                            , Rothschild 32 : </a> Un mix de musique israélienne, orientale, espagnol et commercial. On vous prévient, on finit rapidement sur le bar ;-)</li>
                        <li><a href='http://www.ariatlv.co.il/' target='blank'>L'Aria</a>
                            <a target='blank' href='https://www.google.com/maps/place/ARIA/@32.0616259,34.7700724,17z/data=!3m1!4b1!4m5!3m4!1s0x151d4c9d090b154d:0x133d2a29e46a5a65!8m2!3d32.0616214!4d34.7722611'> 
                            , Nahalat Binyamin 66 : </a> Un restaurant/bar lounge électro très chic. Attention, ils sont très sélectifs à l'entrée </li>
                        <li><a href='https://www.facebook.com/Buxa.Rothschild/' target='blank'>Le Buxa</a>
                            <a target='blank' href='https://www.google.com/maps/place/BuXa/@32.0638355,34.7709757,17z/data=!3m1!4b1!4m5!3m4!1s0x151d4c9d4cb26c8b:0x2d7b4c7de7c2630!8m2!3d32.063831!4d34.7731644'> 
                            , Rothschild 31 : </a> Une musique électro très chill, une déco de fou. On aime l'ambiance et on commandera un Tubi 60 ;-)</li>

                    </ul>
                    <h5>Nos Restaurants</h5>
                    <p>Attention! Pour toutes nos adresses de restaurant, il est fortement conseillé de réserver!</p>
                    <ul>
                        <li><a href='https://www.facebook.com/pages/Kanki-Sushi/552350371446564/' target='blank'>Kanki</a>
                            <a target='blank' href='https://www.google.com/maps/place/Kanki+Sushi+Wine+Bar/@32.076998,34.767616,17z/data=!3m1!4b1!4m5!3m4!1s0x151d4c7e611366f1:0x5e2aeda38732b569!8m2!3d32.0769935!4d34.7698047'> 
                            , Bograshov 23 : </a>Sushi Halavi (K)</li>
                        <li><a href='http://www.makomshelbasar.co.il/' target='blank'>Makom Shel Bassar</a>
                            <a target='blank' href='https://www.google.com/maps/place/Makom+Shel+Basar/@32.063543,34.7662837,17z/data=!3m1!4b1!4m5!3m4!1s0x151d4c9b64939981:0xe3da9fa42bd144b0!8m2!3d32.0635385!4d34.7684724'> 
                            , Bograshov 23 : </a> Une des meilleures viandes de Tel Aviv en plein coeur de Neve Tsedek</li>
                        <li><a href='http://tyo.co.il/en/' target='blank'>TYO</a>
                            <a target='blank' href='https://www.google.com/maps/place/TYO/@32.0647876,34.7676301,17z/data=!3m1!4b1!4m5!3m4!1s0x151d4c834ad65e09:0xb8817b6b16b79c03!8m2!3d32.0647831!4d34.7698188'> 
                            , Montefiore 7 : </a>Un sushi branché, un de nos resto préférés! On vous recommande le black cod!</li>
                        <li><a href='https://www.facebook.com/malkatelaviv/' target='blank'>Malka</a>
                            <a target='blank' href='https://www.google.com/maps/place/Malka/@32.0782855,34.7871787,17z/data=!3m1!4b1!4m5!3m4!1s0x151d4b9a67fe0e53:0xaaed841205f1224!8m2!3d32.078281!4d34.7893674'> 
                            , Dafna 2 : </a>Israélien Bassari (K). Le petit dernier du grand chef Eyal Shani enfin en casher! Du coup on vous recommande quand même les autres endroits de Eyal Shani dont on est fan (Port Said et Bet Romano sont nos préférés!)</li>
                        <li><a href='https://www.facebook.com/BeccaficoTLV/' target='blank'>Becaffico</a>
                            <a target='blank' href='https://www.google.com/maps/place/Malka/@32.0782855,34.7871787,17z/data=!3m1!4b1!4m5!3m4!1s0x151d4b9a67fe0e53:0xaaed841205f1224!8m2!3d32.078281!4d34.7893674'> 
                            , SHabazi 49 : </a>Italien. Demandez une table dans la petite cour, c'est beaucoup plus sympa! (Pour un équivalent en casher, il y a toujours le Rendez Vous sur Lilienblum).</li>
                    </ul>
                    <p>Nos Petit déjeuner</p>
                    <ul>
                        <li><a href='https://www.facebook.com/Benedict.IL/' target='blank'>Benedict</a>
                            <a target='blank' href='https://www.google.com/maps/place/Benedict/@32.0636772,34.7705833,17z/data=!3m1!4b1!4m5!3m4!1s0x151d4c9d4c072ab7:0xbafba162c63a3906!8m2!3d32.0636727!4d34.772772'> 
                            , Rothschild 29 : </a>Notre incoutournable! On commande les pancakes et les oeufs bénédicte au saumon. Et si on peut vous donner un conseil, un plat pour deux est plus que suffisant :)</li>
                        <li><a href='https://www.facebook.com/lehemvehaverimtlv/' target='blank'>Lehem Ve Haverim</a>
                            <a target='blank' href='https://www.google.com/maps/place/Lehem+Vehaverim/@32.0768901,34.767868,17z/data=!3m1!4b1!4m5!3m4!1s0x151d4c7e5e51bc91:0x5e02ab2e624acdda!8m2!3d32.0768856!4d34.7700567'> 
                            , Bograshov 27 : </a>Si vous ne pouvez vraiment pas vous passer de votre petit déjeuner à la française, c'est définitivement le meilleur endroit. EN plus, c'est casher. </li>
                        <li><a href='http://www.lalalandtelaviv.co.il/en/' target='blank'>La La Land (Plage Gordon)</a>
                           Pour un petit déjeuner les pieds dans le sable </li>
                
                    </ul>

                
                </div>
            </div>
        );
    }
}





ReactDOM.render(
    <App />,
    document.getElementById("root")
);