const readOne = async (formData) => {
  const TypeID = formData.get('IDType');
  const NumberID = Number(formData.get('IDNumber'));

  const apiWorkers = await fetch('http://localhost:3000/api/workers');
  const apiWorkersJson = await apiWorkers.json();
  const resultsWorkers = apiWorkersJson.results;

  const findWorker = resultsWorkers.find(
    (worker) => worker.IDType === TypeID && worker.IDNumber === NumberID,
  );

  const readWorker = await fetch(findWorker.url);
  const readWorkerJSON = await readWorker.json();
  return readWorkerJSON;
};

export default readOne;
