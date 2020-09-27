const sendUpdate = (getData) => {
  const myFormUpdate = document.getElementById('myFormUpdate');

  myFormUpdate.addEventListener('submit', (element) => {
    element.preventDefault();

    const formDataUpdate = new FormData(myFormUpdate);
    formDataUpdate.append('_id', getData._id);

    fetch('http://localhost:3000/update', {
      method: 'POST',
      body: formDataUpdate,
    });
  });
};
export default sendUpdate;
