const express = require('express');

const app = express();
const port = 1245;
const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, { encoding: 'utf-8' }, (err, data) => {
      try {
        if (err) reject(Error('Cannot load the database'));
        const totalData = data.split('\n').slice(1);

        let csCount = 0;
        let csStudents = '';

        let sweCount = 0;
        let sweStudents = '';

        totalData.forEach((line) => {
          const students = line.split(',');
          if (students[3] === 'CS') {
            csCount += 1;
            csStudents += csStudents ? `, ${students[0]}` : students[0];
          } else if (students[3] === 'SWE') {
            sweCount += 1;
            sweStudents += sweStudents ? `, ${students[0]}` : students[0];
          }
        });

        return resolve({
          total: totalData.length,
          csCount,
          csStudents,
          sweCount,
          sweStudents,
        });
      } catch (err) { return reject(Error('Cannot load the database')); }
    });
  });
}

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  try {
    countStudents('database.csv').then(
      ({
        total, csCount, csStudents, sweCount, sweStudents,
      }) => {
        res.write('This is the list of our students\n');
        res.write(`Number of students: ${total}\n`);
        res.write(
          `Number of students in CS: ${csCount}. List: ${csStudents}\n`,
        );
        res.write(
          `Number of students in SWE: ${sweCount}. List: ${sweStudents}\n`,
        );
      },
    ).catch((err) => {
      throw err;
    });
  } catch (e) {
    console.log(e);
  }
});
app.listen(port);

module.exports = app;
