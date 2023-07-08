function findHighestMarks(marks) {
    let highestMarks = 0;
  
    marks.forEach((mark) => {
      highestMarks = mark > highestMarks ? mark : highestMarks;
    });
  
    return highestMarks;
  }
  
  // Example usage
  const marks = [80, 95, 87, 91, 89];
  const highestMarks = findHighestMarks(marks);
  console.log(`The highest marks scored by a student in the class: ${highestMarks}`);
  