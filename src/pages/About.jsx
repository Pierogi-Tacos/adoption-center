import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="main-content-page">
      <div id="about-info">
        <h4>
          This site has been created with React. It simulates the web page of an
          animal shelter that can be used by users and an administrator.
        </h4>

        <h4>
          The user must authenticate with a password to log in. Once logged in,
          he can view the shelter's pets and submit adoption requests.
        </h4>

        <h4>
          The administrator can view the pets in custody, edit their
          information, add a new pet or delete them. They can also view adoption
          applications submitted by users.
        </h4>

        <h4>
          The site connects to an <Link to ="https://api-pets.adaptable.app/"> API </Link>
          with the endpoints: /pets, /users and /requests.
        </h4>
          <div id="links-repos">
            <a href="https://github.com/Pierogi-Tacos/adoption-center" target="_blank">App Repository</a>
            <a href="https://github.com/Pierogi-Tacos/api-pets" target="_blank"> | Api Repository</a>
          </div>
      
      </div>

      <div id="about">
        <div className="person">
          <h2>Magdalena Korgul</h2>
          <h3>Web-Developer in process</h3>
          <h4>
            <a href="https://github.com/magdakorgul" target="_blank">
              Github
            </a>
          </h4>
        </div>
        <div className="person">
          <h2>Jesús Suaste</h2>
          <h3>Web-Developer in process</h3>
          <h4>
            <a href="https://github.com/suastech" target="_blank">
              Github
            </a>
          </h4>
        </div>
      </div>
    </div>
  );
}
