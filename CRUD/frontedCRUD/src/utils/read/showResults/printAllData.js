import printResults from './printResults';

const printAllData = (data) => {
  const content = document.getElementById('app');
  content.innerHTML = '';
  data.forEach(async (workerData) => {
    const worker = await printResults(workerData);
    content.innerHTML += worker;
  });
};
export default printAllData;
