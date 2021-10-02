import {useState} from "react";

export default function Documents() {
    const styles = `
        #add-div{
            padding: 2.5vmax;
        }
        #add-form{
            display: flex;
            flex-direction: column;
        }
        #add-form input{
            padding: 8px;
            margin-bottom: 16px;
        }
        #add-form span{
            margin-bottom: 8px;
        }
    `

    const [name, setName] = useState();
    const [description, setDescription] = useState();
    const [file, setFile] = useState();

    async function FormRequest(reqbody) {
        return fetch('http://localhost:8080/Requisiciones/insert_documents.php', {//CAMBIAR A SCRIPT DEL BACK
            method: 'POST',
            mode: 'cors',
            //headers: {'Content-Type': 'multipart/form-data'},
            body: reqbody
        })
        .then( function(data){
            console.log(data);
        })
    }

    const handleSubmit = async e => {
        e.preventDefault();
        var filedoc = document.getElementsByTagName("input")[2];
        let formData = new FormData();
            formData.append("name", name);
            formData.append("description", description);
            formData.append("file", filedoc.files[0]);

        console.log(formData);

            /* DESCOMENTAR PARA MANDAR POST */
        await FormRequest(formData);
    }
        /**  PARA AÑADIR CAMPO CREAR "const[]=useState()" PARA EL DATO, PONER ATTRIB "onChange" EN HTML COMO LOS OTROS INPUTS, Y AÑADIRLO AL "formData"   **/
    return(
        <div id="add-div">
            <style>
                {styles}
            </style>

            <form id="add-form" onSubmit={handleSubmit}>
                <span>Nombre</span>
                <input type="text" onChange={e => setName(e.target.value)}></input>
                
                <span>Descripción</span>
                <input type="text" onChange={e => setDescription(e.target.value)}></input>
                
                <span>Archivo</span>
                <input type="file" onChange={e => setFile(e.target.files)}></input>
                
                <button type="submit">ACEPTAR</button>
            </form>
        </div>
    )
}