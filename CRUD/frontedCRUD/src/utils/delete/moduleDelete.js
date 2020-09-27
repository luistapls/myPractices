const deleteWorker = () => {
  const myForm = document.getElementById('myForm');

  myForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(myForm);

    fetch('http://localhost:3000/delete', {
      method: 'POST',
      body: formData,
    });
  });
};
export default deleteWorker;
