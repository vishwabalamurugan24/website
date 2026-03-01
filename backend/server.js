const express = require('express');
const bodyParser = require('body-parser');
const xlsx = require('xlsx');
const cors = require('cors');
const fs = require('fs');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());

const filePath = 'registrations.xlsx';

app.post('/register', (req, res) => {
  const data = req.body;
  
  let workbook;
  let worksheet;
  
  const header = ['regId', 'name', 'email', 'college', 'department', 'year', 'event', 'status', 'paymentId'];

  if (fs.existsSync(filePath)) {
    workbook = xlsx.readFile(filePath);
    worksheet = workbook.Sheets[workbook.SheetNames[0]];
  } else {
    workbook = xlsx.utils.book_new();
    worksheet = xlsx.utils.json_to_sheet([], { header });
    xlsx.utils.book_append_sheet(workbook, worksheet, 'Registrations');
  }

  const dataWithStatus = { ...data, status: 'Pending Payment', paymentId: '' };

xlsx.utils.sheet_add_json(worksheet, [dataWithStatus], { skipHeader: true, origin: -1 });

  xlsx.writeFile(workbook, filePath);

  res.status(200).json({ message: 'Registration successful', regId: data.regId });
});

app.post('/update-payment', (req, res) => {
    const { regId, paymentId } = req.body;

    if (!fs.existsSync(filePath)) {
        return res.status(404).send('Registrations file not found.');
    }

    const workbook = xlsx.readFile(filePath);
    const worksheet = workbook.Sheets[workbook.SheetNames[0]];
    const jsonData = xlsx.utils.sheet_to_json(worksheet);

    const rowIndex = jsonData.findIndex(row => row.regId === regId);

    if (rowIndex === -1) {
        return res.status(404).send('Registration not found.');
    }

    jsonData[rowIndex].status = 'Paid';
    jsonData[rowIndex].paymentId = paymentId;

    const newWorksheet = xlsx.utils.json_to_sheet(jsonData);
    const newWorkbook = xlsx.utils.book_new();
    xlsx.utils.book_append_sheet(newWorkbook, newWorksheet, 'Registrations');
    
    xlsx.writeFile(newWorkbook, filePath);

    res.send('Payment status updated successfully.');
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});