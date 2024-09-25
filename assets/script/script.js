







document.addEventListener('DOMContentLoaded', function () {
    const donationBtn = document.getElementById('donationBtn');
    const historyBtn = document.getElementById('historyBtn');
    const donationSection = document.getElementById('donationSection');
    const historySection = document.getElementById('historySection');



    // Set initial display state
    donationSection.style.display = 'block';
    historySection.style.display = 'none';

    donationBtn.addEventListener('click', function (event) {
        event.preventDefault();
        donationSection.style.display = 'block';
        historySection.style.display = 'none';
        setButtonStyles(donationBtn, historyBtn);
    });

    historyBtn.addEventListener('click', function (event) {
        event.preventDefault();
        donationSection.style.display = 'none';
        historySection.style.display = 'block';
        setButtonStyles(historyBtn, donationBtn);
    });

    function setButtonStyles(activeBtn, inactiveBtn) {
        activeBtn.style.backgroundColor = '#B4F461';
        activeBtn.style.color = 'black';
        activeBtn.style.border = 'none';
        inactiveBtn.style.backgroundColor = 'white';
        inactiveBtn.style.color = '#404040';
        inactiveBtn.style.border = '2px solid #404040';
    }

    function donation(donationIndex) {
        const donatedMoneyContent = document.getElementsByClassName('donated')[donationIndex].textContent.replace(' BDT', '');
        const donatedMoney = parseFloat(donatedMoneyContent);
        const donateAmount = document.getElementsByClassName('donateAmount')[donationIndex];
        const amountDonated = parseFloat(donateAmount.value);

        if (isNaN(amountDonated)) {
            alert('Enter a valid number for donation');
        } else if (amountDonated < 0) {
            alert('Your input can’t be negative');
        } else {
            const donationTotalMoney = donatedMoney + amountDonated;
            document.getElementsByClassName('donated')[donationIndex].textContent = donationTotalMoney + ' BDT';

            const donationTotalElement = document.getElementById('donation-total');
            if (donationTotalElement) {
                const donationTotal = donationTotalElement.textContent.replace(' BDT', '');
                const totalMoney = parseFloat(donationTotal);
                const newTotalMoney = totalMoney - amountDonated;
                document.getElementById('donation-total').textContent = newTotalMoney + ' BDT';
            }

            alert('Thank you for your donation of ${amountDonated} BDT!');


            donateAmount.value = '';
        }
    }





    function setupDonationButtons() {
        const donationButtons = document.getElementsByClassName('donateBtn');
        for (let i = 0; i < donationButtons.length; i++) {
            donationButtons[i].addEventListener('click', function (event) {
                event.preventDefault();
                donation(i);
            });
        }
    }

    setupDonationButtons();





    function aidMovement() {
        const donationHistoryCreate = document.createElement('div');
        donationHistoryCreate.classList.add('border', 'border-2', 'border-gray-200', 'mb-5', 'p-10', 'rounded-2xl');

        const totalMoneyText = document.getElementById('donation-total').textContent.replace(' BDT', '');
        const totalMoney = parseFloat(totalMoneyText);

        donationHistoryCreate.innerHTML = `
            <h2 class="font-bold text-2xl mb-3">${totalMoney} Taka Aid for Injured in the Quota Movement</h2>
            <p class="text-[#404040]">Date: ${new Date().toString()}</p>`;

        document.getElementById('aidMovementDonation').appendChild(donationHistoryCreate);
    }

    const aidMovementBtn = document.getElementById('aidMovementBtn');
    if (aidMovementBtn) {
        aidMovementBtn.addEventListener('click', function (event) {
            event.preventDefault();
            aidMovement();
        });
    }









    function floodFeni() {
        const donationHistoryCreate = document.createElement('div');
        donationHistoryCreate.classList.add('border', 'border-2', 'border-gray-200', 'mb-5', 'p-10', 'rounded-2xl');

        const totalMoneyText = document.getElementById('donation-total').textContent.replace(' BDT', '');
        const totalMoney = parseFloat(totalMoneyText);

        donationHistoryCreate.innerHTML = `
            <h2 class="font-bold text-2xl mb-3">${totalMoney} Taka Aid for Flood at Feni</h2>
            <p class="text-[#404040]">Date: ${new Date().toString()}</p>`;

        document.getElementById('floodFeniDonation').appendChild(donationHistoryCreate);
    }





    const floodFeniBtn = document.getElementById('floodFeniBtn');
    if (floodFeniBtn) {
        floodFeniBtn.addEventListener('click', function (event) {
            event.preventDefault();
            floodFeni();
        });
    }


    
    function floodNoakhali() {
        const donationHistoryCreate = document.createElement('div');
        donationHistoryCreate.classList.add('border', 'border-2', 'border-gray-200', 'mb-5', 'p-10', 'rounded-2xl');

        const totalMoneyText = document.getElementById('donation-total').textContent.replace(' BDT', '');
        const totalMoney = parseFloat(totalMoneyText);

        donationHistoryCreate.innerHTML = `
            <h2 class="font-bold text-2xl mb-3">${totalMoney} Taka Aid for Flood at Noakhali</h2>
            <p class="text-[#404040]">Date: ${new Date().toString()}</p>`;

        document.getElementById('floodNoakhaliDonation').appendChild(donationHistoryCreate);
    }




    const floodNoakhaliBtn = document.getElementById('floodNoakhaliBtn');
    if (floodNoakhaliBtn) {
        floodNoakhaliBtn.addEventListener('click', function (event) {
            event.preventDefault();
            floodNoakhali();
        });
    }









    // 


    function aidMovement1() {
        const donationHistoryCreate = document.createElement('div');
        donationHistoryCreate.classList.add('border', 'border-2', 'border-gray-200', 'mb-5', 'p-10', 'rounded-2xl');

        const totalMoneyText = document.getElementById('donation-total').textContent.replace(' BDT', '');
        const totalMoney = parseFloat(totalMoneyText);

        donationHistoryCreate.innerHTML = `
            <h2 class="font-bold text-2xl mb-3">${totalMoney} Taka Aid for Injured in the Quota Movement</h2>
            <p class="text-[#404040]">Date: ${new Date().toString()}</p>`;

        document.getElementById('aidMovementDonation1').appendChild(donationHistoryCreate);
    }

    const aidMovementBtn1 = document.getElementById('aidMovementBtn1');
    if (aidMovementBtn1) {
        aidMovementBtn1.addEventListener('click', function (event) {
            event.preventDefault();
            aidMovement1();
        });
    }







});