import readOne from './readOne';
import readAll from './readAll';

const allOneWorkers = async (formData) => {
  const readType = formData.get('typeRead');
  let resultsReads;
  switch (readType) {
    case 'one':
      resultsReads = await readOne(formData);
      break;
    case 'all':
      resultsReads = await readAll();
      break;
    default:
  }
  return resultsReads;
};
export default allOneWorkers;
