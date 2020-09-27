const readAll = async () => {
  const apiWorkers = await fetch('http://localhost:3000/api/workers');
  const apiWorkersJson = await apiWorkers.json();

  const resultsWorkers = apiWorkersJson.results;

  const readWorkers = await Promise.all(
    resultsWorkers.map(async (worker) => {
      const readWorker = await fetch(worker.url);
      const readWorkerJSON = await readWorker.json();
      return readWorkerJSON;
    }),
  );
  return readWorkers;
};

export default readAll;
