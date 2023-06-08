import { NavLink } from "react-router-dom";
import "./About.css";
import { Container } from "react-bootstrap";
function About() {
  return (
    <div className="parentdiv1">
      <Container className="div11">
        <div>
          <h1 class="text-4xl  text-left text-white mr-3">Hey I'm Ninad👋</h1>
          <p class="text-xl text-left text-gray-400 mt-5">
            I am pursing Bachelor's Degree in Computer Engineering, 
            where I’m receiving solid foundation in major areas of the field,
            including App Development, Web Development, Manage Databse
            , Machine Learning and more.
          </p>
          <p class="text-xl text-left text-gray-400 mt-5">
            I am driven about creating innovative and user-friendly websites.
            With a strong foundation in HTML, CSS, and JavaScript, I continually
            expand my skills to stay up-to-date with the latest industry trends.
            I thrive on challenges and seek opportunities to apply my knowledge
            in real-world projects, aiming to make a positive impact through my
            web development endeavors.
          </p>
          <p class="text-xl text-left text-gray-400 mt-5">
            If you want to get in touch, I'm most responsive over{" "}
            <a class="text-blue-600 hover:underline" href="mailto:ninadvyas07@gmail.com">
              Email
            </a>{" "}
            and I tend to be pretty active on{" "}
            <a class="text-blue-600 hover:underline" href="https://twitter.com/NinadVyas87">
              Twitter
            </a>{" "}
            as well.
          </p>
          <p class="text-xl text-left text-gray-400 mt-5">
            In my meantime I Play some{" "}
            <a class="text-blue-600 hover:underline" href="https://www.chess.com/member/ninadv_07">
              Chess
              
            </a>{" "}
            & Like to capture some amazing {" "}
            
            <a class="text-blue-600 hover:underline" href="https://500px.com/p/ninadvyas">
              Frames
            </a>{" "}
            of life.
          </p>
        </div>
        
      </Container>
    </div>
  );
}

export default About;
