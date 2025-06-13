document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("legal-modal");
    const modalText = document.getElementById("modal-text");
    const closeBtn = modal.querySelector(".close-btn");

    const texts = {
        "Área legal": `
        <h2 class='political-title'>Aviso Legal</h2>
    <h3>Aviso Legal y Condiciones Generales de Uso</h3>

    <h4>castillopuentedelcongosto.es</h4>

    <h3>I. Información general</h3>
    <p>En cumplimiento con el deber de información dispuesto en la Ley 34/2002 de Servicios de la Sociedad de la Información y el Comercio Electrónico (LSSI‑CE) de 11 de julio, se facilitan a continuación los siguientes datos de información general de este sitio web:</p>
    <p>La titularidad de este sitio web, castillopuentedelcongosto.es (en adelante, <strong>Sitio Web</strong>), la ostenta <strong>PROMOTORA ALMANZOR, S.L.</strong> (NIF B05001912), cuyo representante es <strong>Carlos Jesús Sánchez de la Peña</strong>.</p>
    <ul>
      <li><strong>Dirección:</strong> Avda. de la Albufera 60, 28038 Madrid</li>
      <li><strong>Teléfono:</strong> +34 623 94 91 60</li>
      <li><strong>Email:</strong> castillodelpuentecongosto@gmail.com</li>
    </ul>
    <h3>II. Términos y Condiciones Generales de Uso</h3>
    <h4>Objeto de las condiciones</h4>
    <p>Las presentes Condiciones regulan el acceso y la utilización del Sitio Web y de sus contenidos y servicios (en adelante, <em>Contenidos</em> y <em>Servicios</em>). Castillo Puente del Congosto se reserva el derecho a modificar, sin previo aviso, la presentación, configuración o disponibilidad del Sitio Web.</p>
    <p>El acceso al Sitio Web es, por regla general, gratuito para el Usuario, sin perjuicio del coste de conexión que aplique su proveedor de internet.</p>
    <h4>El Usuario</h4>
    <p>La navegación confiere la condición de Usuario e implica la aceptación plena y sin reservas de todas las Condiciones vigentes. El Usuario se compromete a:</p>
    <ul>
      <li>Hacer un uso adecuado de la información y servicios conforme a la Ley, la moral y el orden público.</li>
      <li>Garantizar la veracidad y licitud de los datos proporcionados en los formularios del Sitio Web.</li>
    </ul>
    <p>El mero acceso no genera relación comercial alguna entre Castillo Puente del Congosto y el Usuario.</p>

    <h3>III. Acceso y Navegación: Exclusión de Garantías</h3>
    <p>Castillo Puente del Congosto no garantiza la continuidad ni la ausencia de errores del Sitio Web. Tampoco garantiza que el contenido o software esté libre de virus u otros elementos que puedan causar alteraciones en el sistema informático del Usuario.</p>

    <h3>IV. Política de Enlaces</h3>
    <p>No se permite la reproducción, total o parcial, de contenidos del Sitio Web sin autorización expresa. El establecimiento de un hipervínculo no implica relación entre Castillo Puente del Congosto y el titular del sitio enlazado.</p>

    <h3>V. Propiedad Intelectual e Industrial</h3>
    <p>Todos los derechos sobre el Sitio Web y sus elementos son titularidad de Castillo Puente del Congosto. Quedan prohibidas la reproducción, distribución o comunicación pública con fines comerciales sin autorización.</p>

    <h3>VI. Acciones Legales, Legislación Aplicable y Jurisdicción</h3>
    <p>Castillo Puente del Congosto podrá ejercer las acciones legales que estime oportunas por el uso indebido del Sitio Web. La relación con el Usuario se somete a la legislación española y a los tribunales competentes conforme a derecho.</p>
  `,
        "Política de privacidad": `<h2 class='political-title'>Política de privacidad</h2>
        <h4>Política de privacidad del sitio web</h4>
  <h4>castillopuentedelcongosto.es</h4>

  <h3>I. Política de privacidad y protección de datos</h3>
  <p>Respetando lo establecido en la legislación vigente, Castillo Puente del Congosto (en adelante, también Sitio Web) se compromete a adoptar las medidas técnicas y organizativas necesarias, según el nivel de seguridad adecuado al riesgo de los datos recogidos.</p>

  <h4>Leyes que incorpora esta política de privacidad</h4>
  <p>Esta política está adaptada a la normativa española y europea vigente en materia de protección de datos personales. En concreto:</p>
  <ul>
    <li>Reglamento (UE) 2016/679 (RGPD)</li>
    <li>Ley Orgánica 3/2018 (LOPD-GDD)</li>
    <li>Real Decreto 1720/2007 (RDLOPD)</li>
    <li>Ley 34/2002 (LSSI-CE)</li>
  </ul>

  <h3>Identidad del responsable del tratamiento</h3>
  <p><strong>PROMOTORA ALMANZOR, S.L.</strong><br>
  <strong>NIF:</strong> B05001912<br>
  <strong>Representante:</strong> Carlos Jesús Sánchez de la Peña<br>
  <strong>Dirección:</strong> Avda. de la Albufera 60, 28038 Madrid<br>
  <strong>Teléfono:</strong> +34 623 94 91 60<br>
  <strong>Email:</strong><a> castillodelpuentecongosto@gmail.com</a></p>

  <h4>Registro de Datos de Carácter Personal</h4>
  <p>Los datos recogidos se incorporarán a un fichero interno para facilitar la relación con el Usuario, consultas o solicitudes.</p>

  <h4>Principios aplicables</h4>
  <ul>
    <li>Licitud, lealtad y transparencia</li>
    <li>Limitación de la finalidad</li>
    <li>Minimización de datos</li>
    <li>Exactitud</li>
    <li>Limitación del plazo de conservación</li>
    <li>Integridad y confidencialidad</li>
    <li>Responsabilidad proactiva</li>
  </ul>

  <h4>Categorías de datos</h4>
  <p>Solo se tratan datos identificativos. No se tratan categorías especiales.</p>

  <h4>Base legal del tratamiento</h4>
  <p>Consentimiento expreso del Usuario. Se puede retirar en cualquier momento.</p>

  <h4>Finalidad del tratamiento</h4>
  <p>Atender solicitudes, consultas, gestionar relaciones y mejorar el contenido y la navegación.</p>

  <h4>Plazos de conservación</h4>
  <p>Se conservarán solo el tiempo necesario o hasta que el Usuario solicite su eliminación.</p>

  <h4>Destinatarios</h4>
  <p>No se comparten datos con terceros.</p>

  <h4>Menores de edad</h4>
  <p>Solo mayores de 14 años pueden dar consentimiento. Si es menor, se requiere autorización del tutor.</p>

  <h4>Seguridad de los datos</h4>
  <p>Se utilizan medidas técnicas y organizativas adecuadas, como cifrado SSL, para garantizar la seguridad.</p>

  <h4>Derechos del Usuario</h4>
  <ul>
    <li><strong>Acceso:</strong> Confirmar si se tratan sus datos</li>
    <li><strong>Rectificación:</strong> Corregir datos inexactos</li>
    <li><strong>Supresión:</strong> Derecho al olvido</li>
    <li><strong>Limitación:</strong> Restringir el tratamiento</li>
    <li><strong>Portabilidad:</strong> Recibir datos en formato estructurado</li>
    <li><strong>Oposición:</strong> Negarse al tratamiento</li>
    <li><strong>No ser objeto de decisiones automatizadas</strong></li>
  </ul>

  <p>Puede ejercer estos derechos enviando una solicitud con nombre, DNI y petición a:</p>
  <p><strong>Dirección postal:</strong> Avda. de la Albufera 60, 28038 Madrid<br>
  <strong>Email:</strong> <a>castillodelpuentecongosto@gmail.com</a></p>

  <h4>Enlaces a terceros</h4>
  <p>Este sitio puede contener enlaces a sitios de terceros con sus propias políticas de privacidad.</p>

  <h4>Reclamaciones</h4>
  <p>Puede presentar reclamación ante la <a href="https://www.aepd.es/" target="_blank">Agencia Española de Protección de Datos</a>.</p>

  <h3>II. Aceptación y cambios en esta política</h3>
  <p>El uso del sitio implica la aceptación de esta política. Puede modificarse por cambios legislativos o criterio del responsable. Se recomienda revisarla periódicamente.</p>`,

        "Cookies": "<h2 class='political-title'>Política de Cookies</h2><p class='political-content'>Explicación del uso de cookies</p>",
    };

    document.querySelectorAll(".political-link").forEach(link => {
        link.addEventListener("click", e => {
            e.preventDefault();
            const content = texts[link.textContent.trim()];
            if (content) {
                modalText.innerHTML = content;
                modal.style.display = "flex";
            }
        });
    });

    closeBtn.addEventListener("click", () => {
        modal.style.display = "none";
    })

    window.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });
});