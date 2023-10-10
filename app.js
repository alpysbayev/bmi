const express = require('express');
const bodyParser = require('body-parser');
const bmiCount = require('bmi-count');
const bmiCalc = require('bmi-calc');


const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/frontend/main.html');
});


app.get('/bmicalculator', (req, res) => {
    res.sendFile(__dirname + '/frontend/bmiCalculator.html');
});

app.post('/bmicalculator', (req, res) => {
    const weight = parseFloat(req.body.weight);
    const height = parseFloat(req.body.height) / 100;   // convert height to meters
    
    const bmi_calc = bmiCalc(weight, height)            // BMI calculation by using "bmi-calc" module
    const bmi_count = bmiCount(weight, height)          // BMI calculation by using "bmi-count" module

    const my_bmi = weight / (height * height);          // my "new" code

    console.log(
        {
            "bmi calc": bmi_calc.value,
            "bmi count" : bmi_count,
            "my bmi": my_bmi
        }
    )

    res.send(`
    <!DOCTYPE html>
    <html>
    <head>
        <title>BMI Result</title>
        <style>
            body {
                font-family: Arial, sans-serif;
                background-color: #f0f0f0;
                margin: 0;
                padding: 0;
                text-align: center;
            }

            h1 {
                background-color: #007BFF;
                color: #fff;
                padding: 20px;
                margin: 0;
            }

            .result-container {
                margin: 20px;
                padding: 20px;
                background-color: #fff;
                border-radius: 5px;
                box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
            }

            p {
                font-size: 24px;
                font-weight: bold;
            }
        </style>
    </head>
    <body>
        <h1>BMI Result</h1>
        <div class="result-container">
            <p>Your BMI is ${my_bmi.toFixed(2)}</p>
        </div>
    </body>
    </html>
`);


});



const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
