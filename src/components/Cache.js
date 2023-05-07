import { Link } from "react-router-dom";

function Cache() {

    return (
      <section className="bg-paper01">
        <div className="row">
          <div className="col-lg-12 my-5 text-center">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/chatarra-c89b9.appspot.com/o/images%2Fimg-logo-estrella-sm.png?alt=media&token=f8d510db-2b79-496b-b7dd-77c6244f6d08"
              alt="estrella chatarra"
              className="img-fluid estrella"
            />
            <h3 className="d-inline mx-4">Cache</h3>
            <img
              src="https://firebasestorage.googleapis.com/v0/b/chatarra-c89b9.appspot.com/o/images%2Fimg-logo-estrella-sm.png?alt=media&token=f8d510db-2b79-496b-b7dd-77c6244f6d08"
              alt="estrella chatarra"
              className="img-fluid estrella"
            />
          </div>
        </div>
        <div className="row justify-content-center py-5">
          <div className="col-12 col-md-8">
            <table className="table table-striped gira-table">
              <thead>
                <tr>
                  <th scope="col">Localización</th>
                  <th scope="col">Cache</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Barcelona ciudad (30km radio)</td>
                  <td>&euro; 300</td>
                </tr>
                <tr>
                  <td>Resto de España*</td>
                  <td>&euro; 600</td>
                </tr>
                <tr>
                  <td>Fuera de España*</td>
                  <td>
                    Por favor contactar al email{" "}
                    <a href="mailto:chatarrarock@protonmail.com">
                      chatarrarock@protonmail.com
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
            <p>
              <small>*Para locaciones a más de 30km de Barcelona ciudad:</small>
            </p>
            <ul>
              <li>
                <small>
                  Se deberá proporcionar un set de batería estandar (Tama
                  Superstar Classic o Similar) y 5 soportes para platillos.
                </small>
              </li>
            </ul>
            <p>
              <small>
                Ver{" "}
                <Link
                  to="/rider"
                  target="_blank"
                  rel="noreferrer"
                >
                  Rider técnico
                </Link>{" "}
                &#32; para mas especificaciones.
              </small>
            </p>
            <p>
              <small>Última actualización: 22/10/2022</small>
            </p>
          </div>
        </div>
      </section>
    );

}

export default Cache;
