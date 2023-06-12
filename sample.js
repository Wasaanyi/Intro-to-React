fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=p')
  .then(response => response.json())
  .then(data => {
    // Convert data to JSON string
    const jsonData = JSON.stringify(data);

    // Create a Blob object with the JSON data
    const blob = new Blob([jsonData], { type: 'application/json' });

    // Create a download link for the JSON file
    const downloadLink = document.createElement('a');
    downloadLink.href = URL.createObjectURL(blob);
    downloadLink.download = 'fetchedData.json';

    // Trigger the download
    downloadLink.click();
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
