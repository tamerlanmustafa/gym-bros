import { Link } from "react-router-dom"
import HeroImg from "../assets/HeroImg.png"
import CalisthenicsTrainer from "../assets/CalisthenicsTrainer.png"
import YogaTrainer from "../assets/YogaTrainer.png"
import CrossfitTrainer from "../assets/CrossfitTrainer.png"
import Logo from "../assets/logo.png"
import Gallery from "../assets/gallery.png"


const Home = () => {
  return (
    <main >
      <section className='hero flex flex-jc-sa flex-ai-c'>
        <img src={HeroImg} alt="Gym professional trainers" />
        <div className="hero-info flex flex-fd-c flex-ai-c flex-jc-sa">
          <div className="brand flex flex-fd-c flex-jc-c flex-ai-c">
            <img id='logo' src={Logo} alt="logo" />
            <h2>GYMBROS</h2>
            <p>Ultimate Gym</p>
          </div>
          <div className="buttons flex flex-jc-c">
            <Link to = "/classes"><button>Join Classes</button></Link>
            <Link  to="/signin" ><button>Sign In</button></Link>
          </div>
          
        </div>
      </section>
      <section id="aboutus" className="about-section flex flex-fd-c flex-jc-sa flex-ai-c">
        <div>
          <h2>PROGRESSION</h2>
          <p>
          Our team of experts will work with you to create a customized plan that helps you achieve success one step at a time.
          </p>
        </div>
        <div>
        <h2>WORKOUT</h2>
          <p>
          With a variety of workouts to choose from, you'll have everything you need to get into the best shape of your life.
          </p>
        </div>
        <div>
        <h2>NUTRITION</h2>
          <p>
          Our team will work with you to create a personalized meal plan that helps you reach your specific health goals.
          </p>
        </div>
      </section>
      <section id="classes" className="classes-section">
          <h2>Classes</h2>
        <div className="all-classes flex flex-fd-c flex-ai-c flex-jc-sa">
          <div className="class flex flex-fd-c flex-ai-c flex-jc-sa">
            <h3>Beginner</h3>
            <h4>$49</h4>
            <ul>
              <li>Gym Fitness</li>
              <li>Cycling</li>
              <li>Pool</li>
              <li>Sauna</li>
              <li>Storage</li>
            </ul>
            <button>Purchase</button>

          </div>
          <div className="class flex flex-fd-c flex-ai-c flex-jc-sa">
            <h3>Gold</h3>
            <h4>$49</h4>
            <ul>
              <li>Gym Fitness</li>
              <li>Cycling</li>
              <li>Pool</li>
              <li>Sauna</li>
              <li>Storage</li>
            </ul>
            <button>Purchase</button>

          </div>
          <div className="class flex flex-fd-c flex-ai-c flex-jc-sa">
            <h3>Private</h3>
            <h4>$49</h4>
            <ul>
              <li>Gym Fitness</li>
              <li>Cycling</li>
              <li>Pool</li>
              <li>Sauna</li>
              <li>Storage</li>
            </ul>
            <button>Purchase</button>

          </div>
        </div>
      </section>
      <section className="trainers-section ">
        <h2>Our Experts</h2>
        <h3>Team Of Expert Coaches
        Expert team of coaches helps you succeed in any goal,
        personalized guidance and motivation provided!
        </h3>
        <div className="all-trainers flex flex-fd-c">
          <div className="trainer flex flex-fd-c flex-jc-c flex-ai-c">
            <img src={YogaTrainer} alt="" />
            <h3>Lara Croft</h3>
            <p>Yoga Trainer</p>
            <div className="trainer-socials flex flex-jc-sa">
              <i className="fa-brands fa-instagram"></i>
              <i className="fa-brands fa-youtube"></i>
              <i className="fa-brands fa-twitter"></i>
            </div>
          </div>
          <div className="trainer flex flex-fd-c flex-jc-c flex-ai-c">
            <img src={CalisthenicsTrainer} alt="" />
            <h3>Chris Barkley</h3>
            <p>Calisthenics Trainer</p>
            <div className="trainer-socials flex flex-jc-sa">
              <i className="fa-brands fa-instagram"></i>
              <i className="fa-brands fa-youtube"></i>
              <i className="fa-brands fa-twitter"></i>
            </div>
          </div>
          <div className="trainer flex flex-fd-c flex-jc-c flex-ai-c">
            <img src={CrossfitTrainer} alt="" />
            <h3>Dave Marcus</h3>
            <p>Crossfit Trainer</p>
            <div className="trainer-socials flex flex-jc-sa">
              <i className="fa-brands fa-instagram"></i>
              <i className="fa-brands fa-youtube"></i>
              <i className="fa-brands fa-twitter"></i>
            </div>
          </div>
        </div>
        
      </section>
      <section id="contact" className="contact-section flex flex-fd-c flex-jc-c flex-ai-c">
        <h2>Contact</h2>
        <div className="email">
          <h3>Email</h3>
          <p>gymbros@outlook.com</p>
        </div>
        <div className="address">
          <h3>Address</h3>
          <p>12345 Martian St, Miami, Fl.</p>
        </div>
        <div className="working-hours">
          <h3>Working Hours</h3>
          <ul>
            <li>Monday - Friday:</li>
            <li>7:00am - 21:00pm</li>
            <li>Saturday - Sunday:</li>
            <li>7:00am - 19:00pm</li>
          </ul>
        </div>
      </section>
      <footer>
        <p> Copyright &copy; Tamerlan Mustafayev</p>
      </footer>
    </main>
  )
}


export default Home