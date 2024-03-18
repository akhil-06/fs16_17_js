document.addEventListener('DOMContentLoaded', function () {
    const ctx = document.getElementById('myChart').getContext('2d');
    const expenseTab = document.getElementById('expenseTab');
    const taxTab = document.getElementById('taxTab');
    const taxSavingTab = document.getElementById('taxSavingTab');
    const expenseSection = document.getElementById('expenseSection');
    const taxSection = document.getElementById('taxSection');
    const taxSavingSection = document.getElementById('taxSavingSection');
    const calculateTaxBtn = document.getElementById('calculateTax');
    const payTaxBtn = document.getElementById('payTax');
    const suggestTaxSavingBtn = document.getElementById('suggestTaxSaving');
    const taxResult = document.getElementById('taxResult');
    const taxSavingOptions = document.getElementById('taxSavingOptions');

    let expenses = [];
    let itemNames = [];
    let totalExpenses = 0;
    let monthlySalary = 0;
    let totalSavings = 0;

    const myChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: [],
            datasets: [{
                label: 'Expenses',
                data: [],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.5)',
                    'rgba(54, 162, 235, 0.5)',
                    'rgba(255, 206, 86, 0.5)',
                    'rgba(75, 192, 192, 0.5)',
                    'rgba(153, 102, 255, 0.5)',
                    'rgba(255, 159, 64, 0.5)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            title: {
                display: true,
                text: 'Expense Breakdown'
            }
        }
    });

    expenseTab.addEventListener('click', function () {
        expenseTab.classList.add('active');
        taxTab.classList.remove('active');
        taxSavingTab.classList.remove('active');
        expenseSection.classList.add('active');
        taxSection.classList.remove('active');
        taxSavingSection.classList.remove('active');
    });

    taxTab.addEventListener('click', function () {
        expenseTab.classList.remove('active');
        taxTab.classList.add('active');
        taxSavingTab.classList.remove('active');
        expenseSection.classList.remove('active');
        taxSection.classList.add('active');
        taxSavingSection.classList.remove('active');
    });

    taxSavingTab.addEventListener('click', function () {
        expenseTab.classList.remove('active');
        taxTab.classList.remove('active');
        taxSavingTab.classList.add('active');
        expenseSection.classList.remove('active');
        taxSection.classList.remove('active');
        taxSavingSection.classList.add('active');
    });

    document.getElementById('addExpense').addEventListener('click', function () {
        const monthlySalaryInput = document.getElementById('monthlySalary');
        const itemNameInput = document.getElementById('itemName');
        const itemName = itemNameInput.value.trim();
        const expenseInput = document.getElementById('expense');
        const expenseValue = parseFloat(expenseInput.value);

        if (itemName === '' || isNaN(expenseValue) || expenseValue <= 0) {
            alert('Please enter a valid item name and expense amount.');
            return;
        }

        if (monthlySalary === 0) {
            monthlySalary = parseFloat(monthlySalaryInput.value);
            if (isNaN(monthlySalary) || monthlySalary <= 0) {
                alert('Please enter a valid monthly salary.');
                return;
            }
        }

        itemNames.push(itemName);
        expenses.push(expenseValue);
        totalExpenses += expenseValue;

        const saving = monthlySalary - totalExpenses;
        totalSavings = monthlySalary - totalExpenses;

        updateChart(itemNames, expenses);
        updateSavingsInfo(saving);
        itemNameInput.value = '';
        expenseInput.value = '';
    });

    calculateTaxBtn.addEventListener('click', function () {
        const income = parseFloat(document.getElementById('income').value);
        if (isNaN(income) || income <= 0) {
            alert('Please enter a valid income.');
            return;
        }
        const tax = calculateTax(income);
        taxResult.innerHTML = `<p>Tax to be paid: ${tax}</p>`;
    });

    payTaxBtn.addEventListener('click', function () {
        const income = parseFloat(document.getElementById('income').value);
        const tax = parseFloat(taxResult.innerText.split(':')[1]);
        if (isNaN(income) || income <= 0 || isNaN(tax) || tax <= 0) {
            alert('Please calculate tax first.');
            return;
        }
        // Here you can implement API call for payment
        alert(`Payment of ${tax.toFixed(2)} successfully processed.`);
    });

    suggestTaxSavingBtn.addEventListener('click', function () {
        const availableSavings = parseFloat(document.getElementById('availableSavings').value);
        if (isNaN(availableSavings) || availableSavings <= 0) {
            alert('Please enter a valid amount for available savings.');
            return;
        }

        const suggestedOptions = suggestTaxSavingOptions(availableSavings);
        displaySuggestedOptions(suggestedOptions);
    });

    function updateChart(itemNames, expenses) {
        myChart.data.labels = itemNames;
        myChart.data.datasets[0].data = expenses;
        myChart.update();
    }

    function updateSavingsInfo(saving) {
        document.getElementById('savingsInfo').innerHTML = `
            <p>Total Expenses: ${totalExpenses.toFixed(2)}</p>
            <p>Total Savings: ${totalSavings.toFixed(2)}</p>
            <p>Saving after this expense: ${saving.toFixed(2)}</p>
        `;
    }

    function calculateTax(income) {
        // This is a dummy tax calculation, replace it with your actual tax calculation logic
        const taxRate = 0.2; // 20% tax rate for example
        return income * taxRate;
    }

    function suggestTaxSavingOptions(availableSavings) {
        // This function suggests tax-saving options based on available savings
        // You can adjust the options and their associated savings as per your requirements
        const options = [
            { name: 'Provident Fund (PF)', savingRate: 0.15 },
            { name: 'Equity Linked Savings Scheme (ELSS)', savingRate: 0.10 },
            { name: 'National Pension System (NPS)', savingRate: 0.12 },
            { name: 'Life Insurance Premium', savingRate: 0.08 }
        ];

        // Sort options by saving rate in descending order
        options.sort((a, b) => b.savingRate - a.savingRate);

        let suggestedOptions = [];
        let remainingSavings = availableSavings;

        for (const option of options) {
            const savingAmount = remainingSavings * option.savingRate;
            if (savingAmount > 0) {
                suggestedOptions.push({ name: option.name, amount: savingAmount });
                remainingSavings -= savingAmount;
            }
        }

        return suggestedOptions;
    }

    function displaySuggestedOptions(suggestedOptions) {
        let html = '<h3>Suggested Tax Saving Options:</h3>';
        if (suggestedOptions.length === 0) {
            html += '<p>No tax-saving options available with the provided savings.</p>';
        } else {
            html += '<ul>';
            suggestedOptions.forEach(option => {
                html += `<li>${option.name}: ${option.amount.toFixed(2)}</li>`;
            });
            html += '</ul>';
        }
        taxSavingOptions.innerHTML = html;
    }
});





// document.addEventListener('DOMContentLoaded', function () {
//     const ctx = document.getElementById('myChart').getContext('2d');
//     const expenseTab = document.getElementById('expenseTab');
//     const taxTab = document.getElementById('taxTab');
//     const expenseSection = document.getElementById('expenseSection');
//     const taxSection = document.getElementById('taxSection');
//     const calculateTaxBtn = document.getElementById('calculateTax');
//     const payTaxBtn = document.getElementById('payTax');
//     const taxResult = document.getElementById('taxResult');
//     const taxRegimeSelect = document.getElementById('taxRegime');

//     let expenses = [];
//     let itemNames = [];
//     let totalExpenses = 0;
//     let monthlySalary = 0;
//     let totalSavings = 0;

//     const myChart = new Chart(ctx, {
//         type: 'pie',
//         data: {
//             labels: [],
//             datasets: [{
//                 label: 'Expenses',
//                 data: [],
//                 backgroundColor: [
//                     'rgba(255, 99, 132, 0.5)',
//                     'rgba(54, 162, 235, 0.5)',
//                     'rgba(255, 206, 86, 0.5)',
//                     'rgba(75, 192, 192, 0.5)',
//                     'rgba(153, 102, 255, 0.5)',
//                     'rgba(255, 159, 64, 0.5)'
//                 ],
//                 borderColor: [
//                     'rgba(255, 99, 132, 1)',
//                     'rgba(54, 162, 235, 1)',
//                     'rgba(255, 206, 86, 1)',
//                     'rgba(75, 192, 192, 1)',
//                     'rgba(153, 102, 255, 1)',
//                     'rgba(255, 159, 64, 1)'
//                 ],
//                 borderWidth: 1
//             }]
//         },
//         options: {
//             responsive: true,
//             maintainAspectRatio: false,
//             title: {
//                 display: true,
//                 text: 'Expense Breakdown'
//             }
//         }
//     });

//     expenseTab.addEventListener('click', function () {
//         expenseTab.classList.add('active');
//         taxTab.classList.remove('active');
//         expenseSection.classList.add('active');
//         taxSection.classList.remove('active');
//     });

//     taxTab.addEventListener('click', function () {
//         expenseTab.classList.remove('active');
//         taxTab.classList.add('active');
//         expenseSection.classList.remove('active');
//         taxSection.classList.add('active');
//     });

//     document.getElementById('addExpense').addEventListener('click', function () {
//         const monthlySalaryInput = document.getElementById('monthlySalary');
//         const itemNameInput = document.getElementById('itemName');
//         const itemName = itemNameInput.value.trim();
//         const expenseInput = document.getElementById('expense');
//         const expenseValue = parseFloat(expenseInput.value);

//         if (itemName === '' || isNaN(expenseValue) || expenseValue <= 0) {
//             alert('Please enter a valid item name and expense amount.');
//             return;
//         }

//         if (monthlySalary === 0) {
//             monthlySalary = parseFloat(monthlySalaryInput.value);
//             if (isNaN(monthlySalary) || monthlySalary <= 0) {
//                 alert('Please enter a valid monthly salary.');
//                 return;
//             }
//         }

//         itemNames.push(itemName);
//         expenses.push(expenseValue);
//         totalExpenses += expenseValue;

//         const saving = monthlySalary - totalExpenses;
//         totalSavings = monthlySalary - totalExpenses;

//         updateChart(itemNames, expenses);
//         updateSavingsInfo(saving);
//         itemNameInput.value = '';
//         expenseInput.value = '';
//     });

//     calculateTaxBtn.addEventListener('click', function () {
//         const income = parseFloat(document.getElementById('income').value);
//         if (isNaN(income) || income <= 0) {
//             alert('Please enter a valid income.');
//             return;
//         }
//         const taxRegime = taxRegimeSelect.value;
//         const tax = calculateTax(income, taxRegime);
//         taxResult.innerHTML = `<p>Tax to be paid: ${tax}</p>`;
//     });

//     payTaxBtn.addEventListener('click', function () {
//         const income = parseFloat(document.getElementById('income').value);
//         const tax = parseFloat(taxResult.innerText.split(':')[1]);
//         if (isNaN(income) || income <= 0 || isNaN(tax) || tax <= 0) {
//             alert('Please calculate tax first.');
//             return;
//         }
//         // Here you can implement API call for payment
//         alert(`Payment of ${tax.toFixed(2)} successfully processed.`);
//     });

//     function updateChart(itemNames, expenses) {
//         myChart.data.labels = itemNames;
//         myChart.data.datasets[0].data = expenses;
//         myChart.update();
//     }

//     function updateSavingsInfo(saving) {
//         document.getElementById('savingsInfo').innerHTML = `
//             <p>Total Expenses: ${totalExpenses.toFixed(2)}</p>
//             <p>Total Savings: ${totalSavings.toFixed(2)}</p>
//             <p>Saving after this expense: ${saving.toFixed(2)}</p>
//         `;
//     }

//     function calculateTax(income, taxRegime) {
//         // Tax brackets and rates for the old tax regime
//         const oldTaxBrackets = [
//             { min: 0, max: 250000, rate: 0 },
//             { min: 250001, max: 500000, rate: 0.05 },
//             { min: 500001, max: 1000000, rate: 0.1 },
//             { min: 1000001, max: Infinity, rate: 0.15 }
//         ];

//         // Tax brackets and rates for the new tax regime
//         const newTaxBrackets = [
//             { min: 0, max: 250000, rate: 0 },
//             { min: 250001, max: 500000, rate: 0.05 },
//             { min: 500001, max: 750000, rate: 0.1 },
//             { min: 750001, max: 1000000, rate: 0.15 },
//             { min: 1000001, max: 1250000, rate: 0.2 },
//             { min: 1250001, max: 1500000, rate: 0.25 },
//             { min: 1500001, max: Infinity, rate: 0.3 }
//         ];

//         let taxAmount = 0;

//         // Select the appropriate tax brackets based on the selected regime
//         const taxBrackets = taxRegime === 'old' ? oldTaxBrackets : newTaxBrackets;

//         for (const bracket of taxBrackets) {
//             if (income > bracket.max) {
//                 taxAmount += (bracket.max - bracket.min) * bracket.rate;
//             } else {
//                 taxAmount += (income - bracket.min) * bracket.rate;
//                 break;
//             }
//         }

//         return taxAmount;
//     }
// });




//Payment Integration:- https://github.com/7ommyShelby/Team20/tree/main/Arya%20Kumar/Payment

//AI financial advisor:- https://github.com/akhil-06/fs16_17_js/tree/main/day17_api




