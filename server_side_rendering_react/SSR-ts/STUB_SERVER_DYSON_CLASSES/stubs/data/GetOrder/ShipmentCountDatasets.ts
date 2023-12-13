function shipmentsCountDatasetsGen(num) {
  const datasets = {}
  for (let i = 1; i <= num; i += 1) {
    datasets[i] = {
      description: `${i} Shipment${i > 1 ? 's' : ''}`,
    }
  }
  return datasets
}

const shipmentsCountDatasets = shipmentsCountDatasetsGen(7)

export default shipmentsCountDatasets
