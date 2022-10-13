const tableBody = document.getElementById('table-body');

let flights = [
  {
    time: '08:08',
    destination: 'AUSTRIA',
    flight: 'AU 92',
    gate: 'A 2',
    remarks: 'ON TIME',
  },
  {
    time: '10:08',
    destination: 'CANADA',
    flight: 'AC 92',
    gate: 'A 4',
    remarks: 'DELAYED',
  },
  {
    time: '23:08',
    destination: 'DELHI',
    flight: 'DL 92',
    gate: 'C 2',
    remarks: 'CANCELLED',
  },
  {
    time: '19:08',
    destination: 'NY',
    flight: 'NY 92',
    gate: 'T 2',
    remarks: 'ON TIME',
  },
];

// Dynamic
const destinationList = ['INDIA', 'LONDON', 'DUBAI', 'GERMANY'];
const remarksList = ['CANCELLED', 'ON TIME', 'DELAYED'];
const flighCodeList = ['AC', 'BA', 'UX', 'DD'];
let hourHand = 20;

function populateTable() {
  for (const flight of flights) {
    const tableRow = document.createElement('tr');
    for (const flightDetail in flight) {
      const tableData = document.createElement('td');
      // NOTE:  getting value and converting into array of each character
      // Eg: 'INDIA'=> ['I','N','D','I','A']
      const words = Array.from(flight[flightDetail]);
      for (const [index, letter] of words.entries()) {
        const letterElement = document.createElement('div');

        // animation
        setTimeout(() => {
          letterElement.classList.add('flip');
          letterElement.textContent = letter;
          tableData.append(letterElement);
        }, 100 * index);
      }
      tableRow.append(tableData);
    }
    tableBody.append(tableRow);
  }
}

// populateTable();

function generateRandomLetter() {
  const alphabet = 'QWERTYUIOPASDFGHJKLZXCVBNM';
  return alphabet.charAt(Math.floor(Math.random() * alphabet.length));
}

function generateRandomNumber() {
  const number = '7896541230';
  return number.charAt(Math.floor(Math.random() * number.length));
}

function generateTime() {
  let displayHour = hourHand;
  if (hourHand < 24) {
    hourHand++;
  }
  if (hourHand >= 24) {
    hourHand = 1;
    displayHour = hourHand;
  }
  if (hourHand < 10) {
    displayHour = '0' + hourHand;
  }

  return displayHour + ':' + generateRandomNumber() + generateRandomNumber();
}

function shuffleUp() {
  flights.shift();
  flights.push({
    time: generateTime(),
    destination: destinationList[Math.floor(Math.random() * destinationList.length)],
    flight: `${
      flighCodeList[Math.floor(Math.random() * flighCodeList.length)]
    } ${generateRandomNumber()}${generateRandomNumber()}`,
    gate: `${generateRandomLetter()} ${generateRandomNumber()}`,
    remarks: remarksList[Math.floor(Math.random() * remarksList.length)],
  });
  tableBody.textContent = '';
  populateTable();
}

setInterval(shuffleUp, 6000);
// populateTable();
