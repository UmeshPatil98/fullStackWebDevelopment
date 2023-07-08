function countVowels(name) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let vowelCount = 0;
  
    for (let i = 0; i < name.length; i++) {
      const lowercaseChar = name[i].toLowerCase();
      if (vowels.includes(lowercaseChar)) {
        vowelCount++;
      }
    }
  
    return vowelCount;
  }
  
  // Example usage
  const name = 'Umesh Patil';
  const numVowels = countVowels(name);
  console.log(`Number of vowels in "${name}": ${numVowels}`);
  