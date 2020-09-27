import printData from './printData';
import printAllData from './printAllData';

const sendResults = (data) =>
  Array.isArray(data) ? printAllData(data) : printData(data);

export default sendResults;
