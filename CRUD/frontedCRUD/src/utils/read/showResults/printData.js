import printResults from './printResults';

const printData = async (data) => {
  const content = document.getElementById('app');
  content.innerHTML = await printResults(data);
};

export default printData;
