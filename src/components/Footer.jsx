import "../styles/footer.css";

export default function Footer() {
  return (
    <div className="Footer">
      <div>
        <h1>Dirección</h1>
        <p>
          <i class="fa-solid fa-location-dot" id="map-icon"></i>Mcal. López 137 c/ Santa
          Lucía, San Antonio
        </p>
      </div>
      <div>
        <h1>Contácto</h1>
        <p>
          <i className="fa-solid fa-envelope"></i>arandafruta@gmail.com
        </p>
        <p>
          <i className="fa-brands fa-facebook"></i>Fruteria Aranda
        </p>
        <p>
          <i className="fa-brands fa-instagram"></i>@frut_aranda
        </p>
        <p>
          <i className="fa-brands fa-whatsapp"></i>0972-235-011
        </p>
      </div>
      <div className="footer-img-container">
        <img src="https://upload.wikimedia.org/wikipedia/commons/b/b0/Logo-fruteria.png?20230207212045" />
      </div>
    </div>
  );
}
