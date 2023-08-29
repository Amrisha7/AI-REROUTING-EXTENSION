document.addEventListener('DOMContentLoaded', function () {
  const searchBar = document.getElementById('searchBar');
  const chartContainer = document.getElementById('chartContainer');
  let aiLabels = ['AI 1', 'AI 2', 'AI 3'];
  let paidData = [3, 5, 2];
  let nonPaidData = [7, 4, 6];

  searchBar.addEventListener('input', function (event) {
    const searchText = event.target.value.toLowerCase();
    const filteredLabels = aiLabels.filter(label => label.toLowerCase().includes(searchText));
    const filteredPaidData = paidData.filter((data, index) => filteredLabels.includes(aiLabels[index]));
    const filteredNonPaidData = nonPaidData.filter((data, index) => filteredLabels.includes(aiLabels[index]));

    updateChart(filteredLabels, filteredPaidData, filteredNonPaidData);
  });

  function updateChart(labels, paid, nonPaid) {
    chart.data.labels = labels;
    chart.data.datasets[0].data = paid;
    chart.data.datasets[1].data = nonPaid;
    chart.update();
  }

  const ctx = document.getElementById('chartCanvas').getContext('2d');
  const chart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: aiLabels,
      datasets: [
        {
          label: 'Paid',
          backgroundColor: 'blue',
          data: paidData
        },
        {
          label: 'Non-Paid',
          backgroundColor: 'green',
          data: nonPaidData
        }
      ]
    },
    options: {
      // Customize chart options
    }
  });
});
