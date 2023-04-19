import React, { useState } from 'react'
import { Container, ContentTop } from './header.style'
import logo from '../../assets/spotify-logo.png'
import Home from '../../assets/home.png'

import search from '../../assets/search.png'
import library from '../../assets/library.png'

import playlist from '../../assets/playlist.png'

import curtida  from '../../assets/curtida.png'

import episodes from '../../assets/podcas.png'

export default function Header() {

    const [button, setButton] = useState(false);

  return (
    <Container>
        <ContentTop>
            <img src={logo} alt="" />
            <nav>
            {button ? ( 
            <a href="#" onClick={() => setButton(!button)}>
                <img src={Home} alt="" />
                 Home
            </a>
            ) : ( 
                <a href="#" onClick={() => setButton(!button)} style={{ background: '#282828'}}>
                <img src={Home} alt="" />
                Home
            </a>
            )}
            <a href="#">
                <img src={search} alt="" />
                Search
            </a>
            <a href="#">
                <img src={library} alt="" />
                Your Library
            </a>
          
        </nav>

        <nav>
        <a href="#">
                <img src={playlist} alt=""  style={{ background: 'white', padding: 4  }}/>
                Create Playlist
            </a>
            <a href="#">
                <img src={curtida} alt=""  />
                Liked Songs
            </a>
            <a href="#">
                <img src={episodes} alt="" style={{ background: "#004638", padding: 7 }}/>
                Your Episodes
            </a>
        </nav>
         <nav>
            <a href="#">
            FAV
            </a>
            <a href="#">
            Daily Mix 1
            </a>
            <a href="#">
            Discover Weekly
            </a>
            </nav>
        </ContentTop>
    </Container>
  )
}
