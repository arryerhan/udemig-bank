//! ----------------- HTML ELEMENTS -----------------

const loginArea = document.getElementById('login-area'),
    dashboard = document.getElementById('dashboard'),
    deposit = document.getElementById('deposit'),
    withdraw = document.getElementById('withdraw'),
    checking = document.getElementById('checking'),
    saving = document.getElementById('saving'),
    depositInput = document.getElementById('deposit-input'),
    withdrawInput = document.getElementById('withdraw-input'),
    depositBtn = document.getElementById('deposit-btn'),
    withdrawBtn = document.getElementById('withdraw-btn'),
    submitBtn = document.getElementById('submit-btn');
showDate = document.getElementById('show-date');
accountRows = document.getElementById('account-rows');


//! -------------------- SHOW DATE -------------------

const currentDate = new Date();
showDate.innerText = currentDate.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long' });


//! -------------------- LOGIN AREA -------------------

submitBtn.addEventListener('click', () => {
    loginArea.classList.remove('d-flex', 'justify-content-center', 'align-items-center')
    loginArea.style.display = 'none';
    dashboard.classList.remove('d-none');
})

//! ----------------- DEPOSIT FUNCTION -----------------

depositBtn.addEventListener('click', () => {
    const value = depositInput.value;
    const depositValue = Number(deposit.innerText) + Number(value);
    const checkingValue = Number(checking.innerText) + Number(value);
    const savingValue = Number(saving.innerText)
    deposit.innerText = depositValue;
    checking.innerText = checkingValue;
    saving.innerText = savingValue;
    depositInput.value = '';

    const row = document.createElement('tr');
    const dateCell = document.createElement('td');
    const typeCell = document.createElement('td');
    const currencyCell1 = document.createElement('td');
    const amountCell = document.createElement('td');
    const currencyCell2 = document.createElement('td');
    const checkingCell = document.createElement('td');
    const currencyCell3 = document.createElement('td');
    const savingCell = document.createElement('td');

    dateCell.innerText = new Date().toLocaleTimeString([], { month: '2-digit', day: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' });
    dateCell.classList.add('text-center');
    typeCell.innerText = 'Deposit';
    typeCell.classList.add('text-center');
    currencyCell1.innerHTML = '+ $';
    currencyCell1.classList.add('text-end', 'pe-0', 'deposit-blue', 'half');
    amountCell.innerText = value;
    amountCell.classList.add('ps-0', 'deposit-blue', 'half2');
    currencyCell2.innerText = '$';
    currencyCell2.classList.add('text-end', 'pe-0', 'deposit-blue', 'half');
    checkingCell.innerText = checkingValue;
    checkingCell.classList.add('ps-0', 'deposit-blue', 'half2');
    currencyCell3.innerText = '$';
    currencyCell3.classList.add('text-end', 'pe-0', 'half');
    savingCell.innerText = savingValue;
    savingCell.classList.add('ps-0', 'half2');


    row.appendChild(dateCell);
    row.appendChild(typeCell);
    row.appendChild(currencyCell1);
    row.appendChild(amountCell);
    row.appendChild(currencyCell2);
    row.appendChild(checkingCell);
    row.appendChild(currencyCell3);
    row.appendChild(savingCell);

    accountRows.appendChild(row);

})

//! ----------------- WITHDRAW FUNCTION -----------------

withdrawBtn.addEventListener('click', () => {

    const value = withdrawInput.value;

    if (Number(checking.innerText) === 0) {
        alert(`You don't have any balance to withdraw! Your Checking Account balance is $${checking.innerText} \n \n Would you like to use your Saving Account?`);

        if (confirm(`Please confirm to use your Saving Account?`)) {
            if (Number(saving.innerText) === 0) {
                alert(`You don't have any balance to withdraw! Your Saving Account balance is $${saving.innerText}`);
                return;

            } else if (Number(saving.innerText) < Number(value)) {
                alert(`You don't have enough balance to withdraw! Your Saving Account balance is $${saving.innerText}`);
            } else {

                const withdrawValue = Number(withdraw.innerText) + Number(value);
                const checkingValue = Number(checking.innerText)
                const savingValue = Number(saving.innerText) - Number(value);
                withdraw.innerText = withdrawValue;
                checking.innerText = checkingValue;
                saving.innerText = savingValue;
                withdrawInput.value = '';

                const row = document.createElement('tr');
                const dateCell = document.createElement('td');
                const typeCell = document.createElement('td');
                const currencyCell1 = document.createElement('td');
                const amountCell = document.createElement('td');
                const currencyCell2 = document.createElement('td');
                const checkingCell = document.createElement('td');
                const currencyCell3 = document.createElement('td');
                const savingCell = document.createElement('td');


                dateCell.innerText = new Date().toLocaleTimeString([], { month: '2-digit', day: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' });
                dateCell.classList.add('text-center');
                typeCell.innerText = 'Withdraw';
                typeCell.classList.add('text-center');
                currencyCell1.innerHTML = '- $';
                currencyCell1.classList.add('text-end', 'pe-0', 'withdraw-red', 'half');
                amountCell.innerText = value;
                amountCell.classList.add('ps-0', 'withdraw-red', 'half2');
                currencyCell2.innerText = '$';
                currencyCell2.classList.add('text-end', 'pe-0', 'withdraw-red', 'half');
                checkingCell.innerText = checkingValue;
                checkingCell.classList.add('ps-0', 'withdraw-red', 'half2');
                currencyCell3.innerText = '$';
                currencyCell3.classList.add('text-end', 'pe-0', 'withdraw-red', 'half');
                savingCell.innerText = savingValue;
                savingCell.classList.add('ps-0', 'withdraw-red', 'half2');


                row.appendChild(dateCell);
                row.appendChild(typeCell);
                row.appendChild(currencyCell1);
                row.appendChild(amountCell);
                row.appendChild(currencyCell2);
                row.appendChild(checkingCell);
                row.appendChild(currencyCell3);
                row.appendChild(savingCell);

                accountRows.appendChild(row);
            }
        }
        else {
            withdrawInput.value = '';
            return;
        }

    } else if (Number(value) > Number(checking.innerText)) {
        alert(`You don't have that much balance to withdraw! \n Your Checking Account balance is $${checking.innerText}`);
    } else {


        const withdrawValue = Number(withdraw.innerText) + Number(value);
        const checkingValue = Number(checking.innerText) - Number(value);
        const savingValue = Number(saving.innerText);
        withdraw.innerText = withdrawValue;
        checking.innerText = checkingValue;
        saving.innerText = savingValue;
        withdrawInput.value = '';



        const row = document.createElement('tr');
        const dateCell = document.createElement('td');
        const typeCell = document.createElement('td');
        const currencyCell1 = document.createElement('td');
        const amountCell = document.createElement('td');
        const currencyCell2 = document.createElement('td');
        const checkingCell = document.createElement('td');
        const currencyCell3 = document.createElement('td');
        const savingCell = document.createElement('td');


        dateCell.innerText = new Date().toLocaleTimeString([], { month: '2-digit', day: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' });
        dateCell.classList.add('text-center');
        typeCell.innerText = 'Withdraw';
        typeCell.classList.add('text-center');
        currencyCell1.innerHTML = '- $';
        currencyCell1.classList.add('text-end', 'pe-0', 'withdraw-red', 'half');
        amountCell.innerText = value;
        amountCell.classList.add('ps-0', 'withdraw-red', 'half2');
        currencyCell2.innerText = '$';
        currencyCell2.classList.add('text-end', 'pe-0', 'withdraw-red', 'half');
        checkingCell.innerText = checkingValue;
        checkingCell.classList.add('ps-0', 'withdraw-red', 'half2');
        currencyCell3.innerText = '$';
        currencyCell3.classList.add('text-end', 'pe-0', 'half');
        savingCell.innerText = savingValue;
        savingCell.classList.add('ps-0', 'half2');


        row.appendChild(dateCell);
        row.appendChild(typeCell);
        row.appendChild(currencyCell1);
        row.appendChild(amountCell);
        row.appendChild(currencyCell2);
        row.appendChild(checkingCell);
        row.appendChild(currencyCell3);
        row.appendChild(savingCell);

        accountRows.appendChild(row);
    }

})




































