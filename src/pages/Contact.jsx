

export default function Contact() {
    return (
        <main className="contact-main">

            <div className="titulo-contacto">
                <h1>Contáctanos</h1>
                <p>Estamos aquí para responder todas tus preguntas sobre fragancias, pedidos y más.</p>
            </div>

            <section className="contacto-seccion">

                <div className="info-contacto">
                    <h2>Información de KatarinaLuxury</h2>

                    <div className="info-item">
                        <i className="fas fa-map-marker-alt"></i>
                        <p>Av. 7ma, Neiva - Huila, Colombia</p>
                    </div>

                    <div className="info-item">
                        <i className="fas fa-phone"></i>
                        <p>+57 3007285554 (Lunes a Viernes, 9am - 6pm)</p>
                    </div>

                    <div className="info-item">
                        <i className="fas fa-envelope"></i>
                        <p>KatarinaLxry@gmail.com</p>
                    </div>

                    <div className="info-item">
                        <i className="fab fa-instagram"></i>
                        <p>@KatarinaLxry</p>
                    </div>

                    <h2 className="mapa-titulo">Nuestra Ubicación</h2>

                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.9972740251846!2d-74.0721!3d4.6097!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f99a5e82531e1%3A0xf63a032c525f6e3!2sBogot%C3%A1%2C%20Colombia!5e0!3m2!1ses!2sco!4v1699999999999!5m2!1ses!2sco"
                        width="100%"
                        height="300"
                        style={{ border: 0, borderRadius: "10px" }}
                        allowFullScreen=""
                        loading="lazy"
                    ></iframe>
                </div>

                <div className="formulario-contacto-container">
                    <h2>Envíanos un Mensaje</h2>

                    <form className="formulario-contacto">

                        <div className="form-grupo">
                            <label>Nombre Completo:</label>
                            <input type="text" required />
                        </div>

                        <div className="form-grupo">
                            <label>Correo Electrónico:</label>
                            <input type="email" required />
                        </div>

                        <div className="form-grupo">
                            <label>Asunto:</label>
                            <select required>
                                <option value="">Selecciona un Asunto</option>
                                <option value="consulta">Consulta General</option>
                                <option value="pedido">Pregunta sobre un Pedido</option>
                                <option value="devolucion">Devoluciones o Garantías</option>
                                <option value="personalizacion">Personalización</option>
                            </select>
                        </div>

                        <div className="form-grupo">
                            <label>Mensaje:</label>
                            <textarea rows="6" required></textarea>
                        </div>

                        <button type="submit" className="boton-enviar">
                            <i className="fas fa-paper-plane"></i> Enviar Mensaje
                        </button>

                    </form>
                </div>

            </section>
        </main>
    );
}