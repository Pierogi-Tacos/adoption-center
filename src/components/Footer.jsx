export default function Footer () {

  return (
    <footer className="footer">
      <div className="social-icons">
        <a href="https://facebook.com">
          <img src="https://upload.wikimedia.org/wikipedia/commons/1/1b/Facebook_icon.svg" alt="Facebook" />
        </a>
        <a href="https://twitter.com">
          <img src="https://upload.wikimedia.org/wikipedia/commons/c/ce/X_logo_2023.svg" alt="Twitter" />
        </a>
        <a href="https://instagram.com">
          <img src="https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg" alt="Instagram" />
        </a>
        {/* Agrega más imágenes con enlaces para otras redes sociales si lo deseas */}
      </div>
      <p>The Dog Shelter</p>
      <p className="footer-text">© 2024 All Rights Reserved</p>
    </footer>
  )
}