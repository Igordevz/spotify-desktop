import { ContainerMain } from "./main.style";
import navigate from '../../assets/navigate.png'

import liked2 from '../../assets/like2.png'
import music1 from '../../assets/music1.png'
import music2 from '../../assets/music2.png'
import music3 from '../../assets/music3.png'
import music4 from '../../assets/music4.png'
import music5 from '../../assets/music5.png'





export default function MainContent() {
  return (
    <ContainerMain>
       <div className="navigate">
        <img src={navigate} alt="" />
        </div>
      <div className="container-top">
        <h1>Good morning</h1>

        <div className="items">
          <div className="group">
            <img src={liked2} alt="" />
            <h2>Liked Songs</h2>
          </div>
          <div className="group">
            <img src={music1} alt="" />
            <h2>Neffex Playlist</h2>
          </div>
          <div className="group">
            <img src={music2} alt="" />
            <h2>Liked Songs</h2>
          </div>
        </div>
      </div>
      <div className="content-bottom">
        <h1>Shows you might like</h1>

          <div className="items">
            <div className="group-simple">
              <img src={music3} alt="" />
              <h1>Liked Songs</h1>
              <p>Ben Ina Scott</p>
            </div>
            <div className="group-simple">
              <img src={music4} alt="" />
              <h1>MEDITATION SELF</h1>
              <p>Ibn Hussain Aleen</p>
            </div>
            <div className="group-simple">
              <img src={music5} alt="" width={100}/>
              <h1>Words beyond act...</h1>
              <p>Adriana Tom</p>
            </div>
            <div className="group-simple">
              <img src={music4} alt="" />
              <h1>MEDITATION SELF</h1>
              <p>Ibn Hussain Aleen</p>
            </div>
          </div>
          
      </div>
    </ContainerMain>
  );
}
