const ERROR_MESSAGES = {
    requiredField: 'Поле не может быть пустым.'
};

function displayError(elementId, message) {
    document.getElementById(elementId).innerText = message;
}

function clearErrors() {
    displayError('error1', '');
    displayError('error2', '');
    displayError('error3', '');
    displayError('error4', '');
    displayError('error5', '');
    displayError('error6', '');
}

function checkRequiredFields(id, token, phone, message) {
    clearErrors();

    if (!id) {
        displayError('error1', ERROR_MESSAGES.requiredField);
        return false;
    }

    if (!token) {
        displayError('error2', ERROR_MESSAGES.requiredField);
        return false;
    }

    if (!phone) {
        displayError('error3', ERROR_MESSAGES.requiredField);
        return false;
    }

    if (!message) {
        displayError('error4', ERROR_MESSAGES.requiredField);
        return false;
    }

    return true;
}

async function handleRequest(url, method, body) {
    try {
        const response = await fetch(url, {
            method: method,
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const responseData = await response.json();
        const responseTextarea = document.getElementById('response');

        responseTextarea.value = JSON.stringify(responseData, null, 2);
        responseTextarea.style.height = (responseTextarea.scrollHeight + 10) + 'px';
    } catch (error) {
        console.error('Error:', error);
        document.getElementById('response').value = 'Произошла ошибка. Проверьте консоль для получения деталей.';
    }
}

function getSettings() {
    const idInstance = document.getElementById('idInstance').value;
    const apiTokenInstance = document.getElementById('apiTokenInstance').value;

    if (checkRequiredFields(idInstance, apiTokenInstance)) {
        const apiUrl = `https://api.green-api.com/waInstance${idInstance}/getSettings/${apiTokenInstance}`;
        handleRequest(apiUrl, 'GET', null);
    }
}

function getStateInstance() {
    const idInstance = document.getElementById('idInstance').value;
    const apiTokenInstance = document.getElementById('apiTokenInstance').value;

    if (checkRequiredFields(idInstance, apiTokenInstance)) {
        const apiUrl = `https://api.green-api.com/waInstance${idInstance}/getStateInstance/${apiTokenInstance}`;
        handleRequest(apiUrl, 'GET', null);
    }
}

async function sendMessage() {
    const idInstance = document.getElementById('idInstance').value;
    const apiTokenInstance = document.getElementById('apiTokenInstance').value;
    const chatId = document.getElementById('phone').value;
    const messageText = document.getElementById('message').value;

    if (checkRequiredFields(idInstance, apiTokenInstance, chatId, messageText)) {
        const apiUrl = `https://api.green-api.com/waInstance${idInstance}/sendMessage/${apiTokenInstance}`;
        const requestBody = {
            chatId: chatId + '@c.us',
            message: messageText
        };

        await handleRequest(apiUrl, 'POST', requestBody);
    }
}

async function sendFileByUrl() {
    const idInstance = document.getElementById('idInstance').value;
    const apiTokenInstance = document.getElementById('apiTokenInstance').value;
    const chatId = document.getElementById('phone2').value;
    const fileURL = document.getElementById('fileURL').value;
    const match = fileURL.match(/\/([^\/?#]+)\.([^\/?#]+)(?:[?#]|$)/);
    const fileName = match[1];
    const fileExtension = match[2];
    console.log(`${fileName}.${fileExtension}`)
    
    if (checkRequiredFields(idInstance, apiTokenInstance, chatId, fileURL)) {
        const apiUrl = `https://api.green-api.com/waInstance${idInstance}/sendFileByUrl/${apiTokenInstance}`;
        const requestBody = {
            chatId: chatId + '@c.us',
            urlFile: `${fileURL}`,
            fileName: `${fileName}.${fileExtension}`
        };
        await handleRequest(apiUrl, 'POST', requestBody);
    }
}
