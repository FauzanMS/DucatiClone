import './App.css';
import Banner from './Banner/Banner';
import Front from './Front/Front';
import Grid from './Grider/Grid';
import Navbar from './Navbar/Navbar';
import ban1 from './Banner/ban1.jpg';
import ban2 from './Banner/ban2.jpg';
import CoverCard1 from './CoverCard/CoverCard1';
import CoverCard2 from './CoverCard/CoverCard2';
import CoverCard5 from './CoverCard/CoverCard5';
import ban4 from './Banner/ban4.png';
import ban3 from './Banner/ban3.jpg';
import DucatiVideo from './DucatiVideo/DucatiVideo';
import Carousel from './Carousel/Carousel';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Front/>
      <Banner img={ban1} head = "WORLDSBK" title="#FRAWorldSBK R2: Redding finishes the French Weekend on podium (P3)." subtitle="Seventh place for Rinaldi." linktitle="FOLLOW THE RACE"/>
      <Grid/>
      <Banner img={ban2} head = "SCRAMBLER RADIO" title="It's a joy to play!" subtitle="Our rumbling sound! Radio Ducati Scrambler is the echo od freedom, passion and experiences." linktitle="LISTEN TO RADIO SCRAMBLER"/>
      <CoverCard1/>
      <Banner img={ban2} head = "SCRAMBLER RADIO" title="It's a joy to play!" subtitle="Our rumbling sound! Radio Ducati Scrambler is the echo od freedom, passion and experiences." linktitle="LISTEN TO RADIO SCRAMBLER"/>
      <CoverCard2/>
      <Carousel/>
      <Banner img={ban3} head = "SCRAMBLER RADIO" title="It's a joy to play!" subtitle="Our rumbling sound! Radio Ducati Scrambler is the echo od freedom, passion and experiences." linktitle="LISTEN TO RADIO SCRAMBLER"/>
      <CoverCard5/>
      <Banner img={ban4} head = "ACCESSORIES" title="Ducati Performance Exhaust" subtitle="The Ducati Performance exhausts are designed to enhance the look of your Ducati and enhance the performance, both on track and on the streets. " linktitle="FIND OUT MORE"/>
      <h1 className="heading">Everyone follows their own path. Which is yours?</h1>
      <DucatiVideo/>
    </div>
  );
}

export default App;
