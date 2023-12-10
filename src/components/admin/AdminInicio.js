import React, { useState } from "react";
import useStorage from "../../hooks/useStorage";

const AdminInicio = () => {
  const [fileInput, setFileInput] = useState();
  const [text, setText] = useState();
  const [errorMsg, setErrorMsg] = useState();
  const { startUpload, progress, url, data } = useStorage();
  const [select, setSelect] = useState();
  const [isImgUrl, setIsImgUrl] = useState(true);
    
  const handleSelectInput = (e) => {
    if (e.target.value) {
      setSelect(e.target.value);         
      setIsImgUrl(false);        
    }
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFileInput(e.target.files[0]);
    }
  };
  const handleTextChange = (e) => {
    if (e.target.value) {
      setText(e.target.value);
    }
  };

  const onUpdate = (event) => {
    event.preventDefault();
    if (fileInput) {
      startUpload(fileInput, select, text);
      setIsImgUrl(true); 
      document.querySelector('form').reset();     
    }    
  };

  return (
    <>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h2>Página de Inicio.</h2>
      </div>

      <select
        className="custom-select mr-sm-2 my-5"
        id="inlineFormCustomSelect"
        onChange={handleSelectInput}
      >
        <option defaultValue>Escoje que deseas actualizar...</option>
        <option value="homeBanner">Banner de la página de Inicio</option>
        <option value="guitarrista">Imagen y Nombre Guitarrista</option>
        <option value="baterista">Imagen y Nombre Baterista</option>
        <option value="bajista">Imagen y Nombre Bajista</option>
      </select>

      {select === "homeBanner" && (
        <>
          <h5>Actualizar Banner:</h5>
          <img
            src={url != null && url !== '' && isImgUrl ? url : "https://firebasestorage.googleapis.com/v0/b/chatarra-rock.appspot.com/o/images%2Fhome-banner.jpg?alt=media&token=7118943d-4d50-4714-a5d1-d7bc216b65cc"}
            className="img-fluid my-3"
            alt="banner home"
            style={{ width: "200px" }}
          />
          <form onSubmit={onUpdate}>
            <div className="form-group">
              <small>Selecciona portada de álbum</small>
              <input
                onChange={handleFileChange}
                type="file"
                className="form-control-file"
                id="updateBanner"
                required
              />
            </div>
            <small for="albumUrl">Url del álbum</small>
            <input
              type="text"
              class="form-control"
              id="albumUrl"
              onChange={handleTextChange}
            ></input>
            <button
              type="submit"
              className="btn btn-primary my-4"
              disabled={!fileInput || !text}
              required
            >
              Update
            </button>
          </form>
        </>
      )}

      {select === "guitarrista" && (
        <>
          <h5>Actualizar Imagen del guitarrista:</h5>
          <img
            src={url != null && url !== '' && isImgUrl ? url : "https://firebasestorage.googleapis.com/v0/b/chatarra-rock.appspot.com/o/images%2Fguitarrista.png?alt=media&token=4ab5d849-24c0-4892-a20a-8f527d7185f7"}
            className="img-fluid my-3"
            alt="guitarrista chatarra"
            style={{ width: "200px" }}
          />
          <form onSubmit={onUpdate}>
            <div className="form-group">
              <small>Selecciona imagen del guitarrista</small>
              <input
                onChange={handleFileChange}
                type="file"
                className="form-control-file"
                id="updateGuitarImg"
                required
              />
            </div>
            <small for="guitarName">Nombre guitarrista</small>
            <input
              type="text"
              class="form-control"
              id="guitarName"
              onChange={handleTextChange}
            ></input>
            <button
              type="submit"
              className="btn btn-primary my-4"
              disabled={!fileInput || !text}
              required
            >
              Update
            </button>
          </form>
        </>
      )}

{select === "baterista" && (
        <>
          <h5>Actualizar Imagen del baterista:</h5>
          <img
            src={url != null && url !== '' && isImgUrl ? url : "https://firebasestorage.googleapis.com/v0/b/chatarra-rock.appspot.com/o/images%2Fbaterista.png?alt=media&token=f0f37886-7994-4a0c-b925-88047e847103"}
            className="img-fluid my-3"
            alt="baterista chatarra"
            style={{ width: "200px" }}
          />
          <form onSubmit={onUpdate}>
            <div className="form-group">
              <small>Selecciona imagen del baterista</small>
              <input
                onChange={handleFileChange}
                type="file"
                className="form-control-file"
                id="updateBateristaImg"
                required
              />
            </div>
            <small for="bateristaName">Nombre baterista</small>
            <input
              type="text"
              class="form-control"
              id="bateristaName"
              onChange={handleTextChange}
            ></input>
            <button
              type="submit"
              className="btn btn-primary my-4"
              disabled={!fileInput || !text}
              required
            >
              Update
            </button>
          </form>
        </>
      )}

{select === "bajista" && (
        <>
          <h5>Actualizar Imagen del guitarrista:</h5>
          <img
            src={url != null && url !== '' && isImgUrl ? url : "https://firebasestorage.googleapis.com/v0/b/chatarra-rock.appspot.com/o/images%2Fbajista.png?alt=media&token=891ab25e-d4b6-4577-a18d-85431c252804"}
            className="img-fluid my-3"
            alt="bajista chatarra"
            style={{ width: "200px" }}
          />
          <form onSubmit={onUpdate}>
            <div className="form-group">
              <small>Selecciona imagen del bajista</small>
              <input
                onChange={handleFileChange}
                type="file"
                className="form-control-file"
                id="updateBajistaImg"
                required
              />
            </div>
            <small for="bajistaName">Nombre guitarrista</small>
            <input
              type="text"
              class="form-control"
              id="bajistaName"
              onChange={handleTextChange}
            ></input>
            <button
              type="submit"
              className="btn btn-primary my-4"
              disabled={!fileInput || !text}
              required
            >
              Update
            </button>
          </form>
        </>
      )}
    </>
  );
};

export default AdminInicio;
