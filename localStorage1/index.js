function handleFormSubmit(event){
    event.preventDefault();
    var Details = {
        "amount": event.target.expenseAmount.value,
        "discription": event.target.discription.value,
        "category": event.target.category.value
    };

    localStorage.setItem(Details.Category, JSON.stringify(Details));
    showUserDetails(Details);

    // Clear input fields after form submission
    event.target.expenseAmount.value = '';
    event.target.discription.value = '';
    event.target.category.value = '';
}

function showUserDetails(userDetails){
    const parent = document.getElementById('listOfDetails');
    const listItem = document.createElement('li');
    listItem.innerHTML = `${userDetails.amount} - ${userDetails.discription} - ${userDetails.category}`;

    // For delete
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.onclick = function() {
        parent.removeChild(listItem);
        myFunction(userDetails.Category);
    };

    // For edit
    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.onclick = function() {
        parent.removeChild(listItem);
        localStorage.removeItem(userDetails.Category);
        populateInputFields(userDetails);
    };

    listItem.appendChild(deleteButton);
    listItem.appendChild(editButton);
    parent.appendChild(listItem);
}

function myFunction(Category){
    localStorage.removeItem(Category);
}

function populateInputFields(userDetails) {
    document.getElementById('amount').value = userDetails.amount;
    document.getElementById('discription').value = userDetails.discription;
    document.getElementById('category').value = userDetails.category;
}

//module.exports = handleFormSubmit;