

export default function Footer() {
    return (
        <footer className="footer">

            <div className="footer-contenido">

                <div className="footer-col">
                    <h2 className="footer-logo">
                        <a href="/">
                            <img src="/IMAGENES/PORTADA.png" alt="KatarinaLuxury Logo" className="footer-logo-img" />
                        </a>
                    </h2>
            
                </div>


                <div className="footer-col">
                    <h3>Enlaces</h3>
                    <ul>
                        <li><a href="/"><i className="fas fa-home"></i> Inicio</a></li>
                        <li><a href="/"><i className="fas fa-box-open"></i> Productos</a></li>
                        <li><a href="/contacto"><i className="fas fa-envelope-open-text"></i> Contacto</a></li>
                    </ul>
                </div>


                <div className="footer-col">
                    <h3>Contacto</h3>
                    <p><i className="fas fa-map-marker-alt"></i> Neiva - Huila, Colombia</p>
                    <p><i className="fas fa-phone"></i> +57 3007285554</p>
                    <p><i className="fas fa-envelope"></i> KatarinaLxry@gmail.com</p>
                </div>


                <div className="footer-col">
                    <h3>Síguenos</h3>
                    <div className="footer-redes">

                        <a href="https://instagram.com" target="_blank">
                            <i className="fab fa-instagram"></i>
                        </a>

                        <a href="https://facebook.com" target="_blank">
                            <i className="fab fa-facebook"></i>
                        </a>

                        <a href="https://wa.me/573007285554" target="_blank">
                            <i className="fab fa-whatsapp"></i>
                        </a>

                    </div>
                </div>

            </div>

            <div className="footer-copy">
                <p>© 2024 KatarinaLuxury — Todos los derechos reservados.</p>
            </div>
        </footer>
    );
}