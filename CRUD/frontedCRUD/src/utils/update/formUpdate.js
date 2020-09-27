const formUpdate = (data) => {
  const {
    names,
    lastNames,
    IDType,
    IDNumber,
    phoneNumbers,
    email,
    dateAdmission,
    monthlySalary,
  } = data;

  let typeCC;
  let typeNIT;
  switch (IDType) {
    case 'cc':
      typeCC = 'selected';
      break;
    case 'nit':
      typeNIT = 'selected';
      break;
    default:
  }

  const date = new Date(dateAdmission).toISOString().slice(0, 10);

  const view = `
  <form class="form" id="myFormUpdate">
    <div>
      <label for="names">Nombres</label>
      <input type="text" name="names" id="names" value="${names}"/>
    </div>

    <div>
      <label for="lastNames">Apellidos</label>
      <input type="text" name="lastNames" id="lastNames" value="${lastNames}"/>
    </div>

    <div>
      <label for="IDType">Tipo de Identificación</label>
      <select name="IDType" id="IDType">
        <option value="nit" ${typeNIT}>nit</option>
        <option value="cc" ${typeCC}>cc</option>
      </select>
    </div>

    <div>
      <label for="IDNumber">Numero de Identificación</label>
      <input type="number" name="IDNumber" id="IDNumber" value="${IDNumber.toString()}"/>
    </div>

    <div>
      <label for="phones">Números Telefónicos</label>
      <input type="number" name="phone1" id="phones" value="${
        phoneNumbers[0]
      }"/>
      <input type="number" name="phone2" id="phones" value="${
        phoneNumbers[1]
      }"/>
      <input type="number" name="phone3" id="phones" value="${
        phoneNumbers[2]
      }"/>
    </div>

    <div>
      <label for="email">Correo electrónico</label>
      <input type="email" name="email" id="email" value="${email}"/>
    </div>
    
    <div>
      <label for="dateAdmission">Fecha de ingreso</label>
      <input type="date" name="dateAdmission" id="dateAdmission" value="${date}"/>
    </div>

    <div>
      <label for="monthlySalary">Salario mensual</label>
      <input type="number" name="monthlySalary" id="monthlySalary" value="${monthlySalary}"/>
    </div>
    
    <div>
      <button type="submit">Aceptar</button>
      <button type="reset">Cancelar</button>
    </div>
    
</form>
  `;
  return view;
};

export default formUpdate;
