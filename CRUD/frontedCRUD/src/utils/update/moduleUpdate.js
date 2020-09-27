import readOne from '../read/readOne';
import formUpdate from './formUpdate';
import sendUpdate from './sendFormUpdate';

const updateWorker = () => {
  const content = document.getElementById('app');
  const myForm = document.getElementById('myForm');

  myForm.addEventListener('submit', async (e) => {
    try {
      e.preventDefault();

      const formData = new FormData(myForm);
      const getData = await readOne(formData);
      const getFormWithData = await formUpdate(getData);
      content.innerHTML = getFormWithData;

      sendUpdate(getData);
    } catch {
      window.alert('No se ha encontrado el trabajador.');
    }
  });
};

export default updateWorker;
