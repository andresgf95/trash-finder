import CreateAccount from "./CreateAccount";

function LogIn() {


    return(
        <div>
            <fieldset>
            <label> Usuario
                <input type="text"/>
            </label>
            </fieldset>

            <label> Contrasinal
                <input type="text"/>
            </label>
            <button>Iniciar Sesión</button>
            <p>Non tes conta?</p>
        </div>
    );
  }

  
  export default LogIn