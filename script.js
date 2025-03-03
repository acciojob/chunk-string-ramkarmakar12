function stringChop(str, size) {
 
  if (str === null) {
    return [];
  }


  const chunks = [];

  
  for (let i = 0; i < str.length; i += size) {
    // Extract a chunk of the specified size
    const chunk = str.slice(i, i + size);
    // Add the chunk to the array
    chunks.push(chunk);
  }


  return chunks;
}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));