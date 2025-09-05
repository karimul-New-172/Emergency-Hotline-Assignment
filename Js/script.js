// Reusable function
function getElement(id) {
    const element = document.getElementById(id).innerText;
    return element;
}
const hearts = document.querySelectorAll('.fa-heart');
for (const heart of hearts) {
    heart.addEventListener('click', function () {
        const heartTotal = document.getElementById('heart-total');
        const heartTotalNumber = Number(heartTotal.innerText);
        let newHeartCount = heartTotalNumber + 1;
        heartTotal.innerText = newHeartCount;
    })
}

// Call btn event
const callBtns = document.getElementsByClassName('btn-call');
for (const btn of callBtns) {
    btn.addEventListener('click', function () {
        const cartTitle = btn.parentNode.parentNode.children[1].innerText;
        const cartHotlineNumber = btn.parentNode.parentNode.children[3].innerText;
        const alertTitle = '📞 ' + 'Calling ' + cartTitle + ' ' + cartHotlineNumber;
        const date = new Date().toLocaleTimeString();

        // total coin
        const totalCoin = getElement('coin-total');
        const totalCoinNumber = Number(totalCoin);

        // check coin total before call
        if (totalCoinNumber < 20) {
            alert("❌ You do not have enough coins. You must have at least 20 coins")
            return;
        }
        else {
            alert(alertTitle)
            const newCoinNumber = totalCoinNumber - 20;
            document.getElementById('coin-total').innerText = newCoinNumber;

            // history container
            const historyContainer = document.getElementById('history-list-container');
            // Create new div
            const newDiv = document.createElement('div');
            newDiv.innerHTML = `
                <div class="bg-gray-200 rounded-md my-3">
                    <div class="flex justify-between items-center p-2">
                        <div>
                            <h2 class="text-lg font-bold">${cartTitle}</h2>
                            <p class="text-gray-600">${cartHotlineNumber}</p>
                        </div>
                        <p>${date}</p>
                    </div>
                </div>
            `
            historyContainer.appendChild(newDiv);
        }
    })
}


// Copy btn code
const copyBtns = document.getElementsByClassName('btn-copy');
for (const btn of copyBtns) {
    btn.addEventListener('click', function () {
        const cartHotlineNumber = btn.parentNode.parentNode.children[3].innerText;
        alert('Number has been copied ' + cartHotlineNumber)

        // get copy number 
        const copy = getElement('copy-total');
        const copyNumber = Number(copy);
        const updateCopyNumber = copyNumber + 1;
        document.getElementById('copy-total').innerText = updateCopyNumber;
    })
}

// For copy clipBoard
const moreCopyBtns = document.getElementsByClassName('btn-copy');
for (const btn of moreCopyBtns) {
    const cartHotlineNumber = btn.parentNode.parentNode.children[3]
    btn.addEventListener('click', async () => {
        try {
            await navigator.clipboard.writeText(cartHotlineNumber.textContent);
            copyFeedback.textContent = 'Text copied!';
            setTimeout(() => {
                copyFeedback.textContent = '';
            }, 2000);
        }
        catch (err) {
            // console.error('Failed to copy text:', err);
            // copyFeedback.textContent = 'Failed to copy text.';
            // copyFeedback.style.color = 'red';
        }
    })
}

// clear all history
document.getElementById('btn-clear').addEventListener('click', function(){
    document.getElementById('heart-total').innerText = 0;
    document.getElementById('coin-total').innerText = 100;
    document.getElementById('copy-total').innerText = 0;
    document.getElementById('history-list-container').innerText = '';
})