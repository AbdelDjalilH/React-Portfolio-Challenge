import Navbar from "../components/Navbar";
import '../styles/HomePage.scss'
import Avatar from "../assets/images/Avatar.jpeg"
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

function HomePage () {


    return(
    <div className="Home-Container">
        <Navbar/>
        <h1>Mon portfolio</h1>
      <div className="photo-description">
        <img className="my-photo" src={Avatar} alt="Avatar"  />
        <div className="my-description">
            <h2>Qui suis-je?</h2>
        <p >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit unde eveniet velit qui esse, repellendus fugiat quis est consequatur labore numquam illo eaque, ut iste omnis tenetur laborum rerum deserunt assumenda. Nam natus dicta, explicabo rem veritatis cupiditate veniam quod pariatur incidunt quasi distinctio hic itaque, id ipsam consequuntur fugit! Mollitia reprehenderit, assumenda repellendus atque iste quaerat voluptatem? Voluptatum esse dolorum provident ratione dolores numquam exercitationem dolorem ad molestiae maiores, dignissimos expedita iure iste aspernatur officia sunt consequatur voluptas alias eligendi at! Odio consectetur dicta quos vel magnam temporibus quis sint porro, maxime aliquid asperiores labore sequi, placeat sit accusantium.</p>   
        </div>
        </div>
        <div className ="skills" >
            <h2>Mes compétences</h2>
        <ul>
            <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde consequatur ipsum necessitatibus excepturi dolore dolor laudantium. A perspiciatis ducimus consequatur.

            </li>
            <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde consequatur ipsum necessitatibus excepturi dolore dolor laudantium. A perspiciatis ducimus consequatur.</li>
            <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde consequatur ipsum necessitatibus excepturi dolore dolor laudantium. A perspiciatis ducimus consequatur.</li>
            <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde consequatur ipsum necessitatibus excepturi dolore dolor laudantium. A perspiciatis ducimus consequatur.</li>
            <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde consequatur ipsum necessitatibus excepturi dolore dolor laudantium. A perspiciatis ducimus consequatur.</li>
        </ul>

       </div>    
       <div className = "ContactButton-container">
        <Link className="link-button" to ="/ContactPage">Appuyez pour me contacter</Link>
       </div>
       <div className="footer-container">
       <Footer/>

       </div>
    </div>
    )
    
}

export default HomePage;