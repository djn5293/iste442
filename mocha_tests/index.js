const app = (require('express'))();
const port = 3100;

const calculatorHome = require('./home');

app.use('/', calculatorHome);

// This defines a health check point for AWS
app.use('/health', (req, res) => {
  // Set the status to 200 and send "Success"
  res.status(200).send({
    success: true
  });
});

app.listen(port, () => {
  console.log(`Calculator listening on port ${port}`);
});