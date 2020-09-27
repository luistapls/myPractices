const Update = () => {
  const view = `
    <form id="myForm">
      <div>
        <label for="">Tipo de Identificación</label>
        <select name="IDType" id="">
          <option value="nit">nit</option>
          <option value="cc">cc</option>
        </select>
      </div>
      
      <div>
        <label for="">Numero de Identificación</label>
        <input type="number" name="IDNumber" />
      </div>

      <div>
        <button type="submit">Aceptar</button>
        <button type="reset">Cancelar</button>
      </div>
    </form>
  `;
  return view;
};

export default Update;
