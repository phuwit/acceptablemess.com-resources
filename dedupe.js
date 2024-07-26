const fs = require('fs');

// Step 1: Read the JSON file
fs.readFile('lobotomy/videos.json', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }

  // Step 2: Parse the JSON data
  let urls;
  try {
    urls = JSON.parse(data);
  } catch (parseErr) {
    console.error('Error parsing JSON:', parseErr);
    return;
  }

  // Step 3: Use a Set to remove duplicates
  const uniqueUrls = Array.from(new Set(urls));

  // Step 4: Convert the Set back to an array
  const dedupedData = JSON.stringify(uniqueUrls, null, 2);

  // Step 5: Write the deduplicated array back to a JSON file
  fs.writeFile('lobotomy/videos.json', dedupedData, 'utf8', (writeErr) => {
    if (writeErr) {
      console.error('Error writing file:', writeErr);
      return;
    }
    console.log('Deduplicated data written to videos.json');
  });
});