const Create = () => {
  const view = `
  <form id="myForm">
    <div>
      <label for="names">Nombres</label>
      <input type="text" name="names" id="names"/>
    </div>

    <div>
      <label for="lastNames">Apellidos</label>
      <input type="text" name="lastNames" id="lastNames"/>
    </div>

    <div>
      <label for="IDType">Tipo de Identificación</label>
      <select name="IDType" id="IDType">
        <option value="nit">nit</option>
        <option value="cc">cc</option>
      </select>
    </div>

    <div>
      <label for="IDNumber">Numero de Identificación</label>
      <input type="number" name="IDNumber" id="IDNumber/>
    </div>
    
    <div>
      <label for="phones">Números Telefónicos</label>
      <input type="number" name="phone1" id="phones"/>
      <input type="number" name="phone2" id="phones"/>
      <input type="number" name="phone3" id="phones"/>
    </div>

    <div>
      <label for="email">Correo electrónico</label>
      <input type="email" name="email" id="email"/>
    </div>
    
    <div>
      <label for="dateAdmission">Fecha de ingreso</label>
      <input type="date" name="dateAdmission" id="dateAdmission"/>
    </div>

    <div>
      <label for="monthlySalary">Salario mensual</label>
      <input type="number" name="monthlySalary" id="monthlySalary"/>
    </div>
    
    <div>
      <button type="submit">Aceptar</button>
      <button type="reset">Cancelar</button>
    </div>
</form>
  `;
  return view;
};

export default Create;
