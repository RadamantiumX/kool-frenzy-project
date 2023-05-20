import React from "react";
import '../../styles/categoryStyles/categoryStyles.css';
import { Link } from "react-router-dom";

import Anime from '../../assets/img/anime-photo.jpg';
import Gamer from '../../assets/img/gaming-photo.jpg';
import Movie from '../../assets/img/movies-photo.jpg';
import Comic from '../../assets/img/comic-photo.jpg';


export default function CategoryBody() {
    return(
        <>
        <div className="cat-body-section">
           <div className="cat-body-box">
              <div className="cat-body-inner-box">
                <Link to="/results"><div className="cat-inner-img"><h6>Anime</h6><img className="img-category" src={Anime} alt="Kool Frenzy Anime" /></div></Link>
               <Link to="/results"><div className="cat-inner-img"><h6>Gaming</h6><img className="img-category" src={Gamer} alt="Kool Frenzy Gamer" /></div></Link>
              </div>
              <div className="cat-body-inner-box">
               <Link to="/results"><div className="cat-inner-img"><h6>Películas y series</h6><img className="img-category" src={Movie} alt="Kool Frenzy Movie" /></div></Link>
               <Link to="/results"><div className="cat-inner-img"><h6>Comics</h6><img className="img-category" src={Comic} alt="Kool Frenzy Comic" /></div></Link>
              </div>
           </div>
        </div>
        </>
    )
}