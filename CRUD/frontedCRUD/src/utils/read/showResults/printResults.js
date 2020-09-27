const printResults = (data) => {
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

  const view = `
    <div>
      <p>Nombres: ${names}</p>
      <p>Apellidos: ${lastNames}</p>
      <p>Tipo de identificación: ${IDType}</p>
      <p>Número de identificación: ${IDNumber}</p>
      <p>Números de telefonos: ${phoneNumbers.join(' / ')}</p>
      <p>Correo electronico: ${email}</p>
      <p>Fecha de admisión: ${dateAdmission}</p>
      <p>Salario mensual: ${monthlySalary}</p>
    </div>
  `;
  return view;
};

export default printResults;
