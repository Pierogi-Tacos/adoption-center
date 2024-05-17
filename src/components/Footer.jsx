

export default function Footer () {

  return (
    <footer className="d-flex align-items-center w-100">
      <div className="social-icons">
        <a href="https://facebook.com">
          <img src="src/images/facebook-svgrepo-com (1).svg" alt="Facebook" />
        </a>
        <a href="https://twitter.com">
          <img src="https://upload.wikimedia.org/wikipedia/commons/c/ce/X_logo_2023.svg" alt="Twitter" />
        </a>
        <a href="https://instagram.com">
          <img src="src/images/instagram-svgrepo-com.svg" alt="Instagram" />
        </a>
        {/* Agrega más imágenes con enlaces para otras redes sociales si lo deseas */}
      </div>
      <p>The Dog Adoption Center | © 2024 All Rights Reserved</p>
    </footer>
  )
}