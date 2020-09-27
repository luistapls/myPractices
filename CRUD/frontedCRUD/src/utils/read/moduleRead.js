import returnRead from './returnRead';
import sendResults from './showResults/sendResults';

const readWorkers = () => {
  const myForm = document.getElementById('myForm');

  myForm.addEventListener('submit', async (e) => {
    try {
      e.preventDefault();

      const formData = new FormData(myForm);
      const getData = await returnRead(formData);

      await sendResults(getData);
    } catch {
      window.alert('No se ha encontrado el trabajador.');
    }
  });
};

export default readWorkers;
