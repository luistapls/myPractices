const createWorker = () => {
  const myForm = document.getElementById('myForm');

  myForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(myForm);
    fetch('http://localhost:3000/create', {
      method: 'POST',
      body: formData,
    });
  });
};

export default createWorker;
