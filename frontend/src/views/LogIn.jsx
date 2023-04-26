import CreateAccount from "./CreateAccount";

function LogIn() {


    return(
        <div>
            <label> Usuario
                <input type="text"/>
            </label>
            <label> Contrasinal
                <input type="text"/>
            </label>
            <button>Iniciar Sesión</button>
            <p>Non tes conta?</p>
        </div>
    );
  }

  
  export default LogIn