function saveInput(inputId) {
    const inputValue = document.getElementById(inputId).value;
    localStorage.setItem(inputId, inputValue);
}

function restoreInput(inputId) {
    const storedValue = localStorage.getItem(inputId);
    if (storedValue) {
        document.getElementById(inputId).value = storedValue;
    }
}

restoreInput('idInstance');
restoreInput('apiTokenInstance');
restoreInput('phone');
restoreInput('message');
restoreInput('phone2');
restoreInput('fileURL');
