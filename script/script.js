function getSettings() {
    const idInstance = document.getElementById('idInstance').value;
    const apiTokenInstance = document.getElementById('apiTokenInstance').value;

    if (!idInstance) {
        document.getElementById('error1').innerText = 'Поле не может быть пустым.';
        return;
    } else {
        document.getElementById('error1').innerText = '';
    }

    if (!apiTokenInstance) {
        document.getElementById('error2').innerText = 'Поле не может быть пустым.';
        return;
    } else {
        document.getElementById('error2').innerText = '';
    }

    const apiUrl = `https://api.green-api.com/waInstance${idInstance}/getSettings/${apiTokenInstance}`;

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            const responseTextarea = document.getElementById('response');
            responseTextarea.value = JSON.stringify(data, null, 2);
            responseTextarea.style.height = (responseTextarea.scrollHeight + 10) + "px";
        })
        .catch(error => {
            console.error('Error:', error);
            document.getElementById('response').value = 'Произошла ошибка. Проверьте консоль для получения деталей.';
        });
}

function getStateInstance() {
    const idInstance = document.getElementById('idInstance').value;
    const apiTokenInstance = document.getElementById('apiTokenInstance').value;

    if (!idInstance) {
        document.getElementById('error1').innerText = 'Поле не может быть пустым.';
        return;
    } else {
        document.getElementById('error1').innerText = '';
    }

    if (!apiTokenInstance) {
        document.getElementById('error2').innerText = 'Поле не может быть пустым.';
        return;
    } else {
        document.getElementById('error2').innerText = '';
    }

    const apiUrl = `https://api.green-api.com/waInstance${idInstance}/getStateInstance/${apiTokenInstance}`;

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            const responseTextarea = document.getElementById('response');
            responseTextarea.value = JSON.stringify(data, null, 2);
            responseTextarea.style.height = (responseTextarea.scrollHeight + 10) + "px";
        })
        .catch(error => {
            console.error('Error:', error);
            document.getElementById('response').value = 'Произошла ошибка. Проверьте консоль для получения деталей.';
        });
}

async function sendMessage() {
    const idInstance = document.getElementById('idInstance').value;
    const apiTokenInstance = document.getElementById('apiTokenInstance').value;
    const chatId = document.getElementById('phone').value;
    const messageText = document.getElementById('message').value;

    if (!idInstance) {
        document.getElementById('error1').innerText = 'Поле не может быть пустым.';
        return;
    } else {
        document.getElementById('error1').innerText = '';
    }

    if (!apiTokenInstance) {
        document.getElementById('error2').innerText = 'Поле не может быть пустым.';
        return;
    } else {
        document.getElementById('error2').innerText = '';
    }

    if (!chatId) {
        document.getElementById('error3').innerText = 'Поле не может быть пустым.';
        return;
    } else {
        document.getElementById('error3').innerText = '';
    }

    if (!messageText) {
        document.getElementById('error4').innerText = 'Поле не может быть пустым.';
        return;
    } else {
        document.getElementById('error4').innerText = '';
    }

    const apiUrl = `https://api.green-api.com/waInstance${idInstance}/sendMessage/${apiTokenInstance}`;
    const requestBody = {
        chatId: chatId + '@c.us',
        message: messageText
    };

    try {
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(requestBody),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const responseData = await response.json();
        const responseTextarea = document.getElementById('response');

        responseTextarea.value = JSON.stringify(responseData, null, 2);
        responseTextarea.style.height = (responseTextarea.scrollHeight + 10) + "px";
    } catch (error) {
        console.error('Error:', error);
        document.getElementById('response').value = 'Произошла ошибка. Проверьте консоль для получения деталей.';
    }
};

async function sendFileByUrl() {
    const idInstance = document.getElementById('idInstance').value;
    const apiTokenInstance = document.getElementById('apiTokenInstance').value;
    const chatId = document.getElementById('phone2').value;
    const fileURL = document.getElementById('fileURL').value;

    if (!idInstance) {
        document.getElementById('error1').innerText = 'Поле не может быть пустым.';
        return;
    } else {
        document.getElementById('error1').innerText = '';
    }

    if (!apiTokenInstance) {
        document.getElementById('error2').innerText = 'Поле не может быть пустым.';
        return;
    } else {
        document.getElementById('error2').innerText = '';
    }

    if (!chatId) {
        document.getElementById('error5').innerText = 'Поле не может быть пустым.';
        return;
    } else {
        document.getElementById('error5').innerText = '';
    }

    if (!fileURL) {
        document.getElementById('error6').innerText = 'Поле не может быть пустым.';
        return;
    } else {
        document.getElementById('error6').innerText = '';
    }

    const apiUrl = `https://api.green-api.com/waInstance${idInstance}/sendFileByUrl/${apiTokenInstance}`;
    const match = fileURL.match(/\/([^\/?#]+)\.([^\/?#]+)(?:[?#]|$)/);
    const fileName = match[1];
    const fileExtension = match[2];
    console.log(`${fileName}.${fileExtension}`)
    
    const requestBody = {
        chatId: chatId + '@c.us',
        urlFile: `${fileURL}`,
        fileName: `${fileName}.${fileExtension}`
    };

    try {
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(requestBody),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const responseData = await response.json();
        const responseTextarea = document.getElementById('response');

        responseTextarea.value = JSON.stringify(responseData, null, 2);
        responseTextarea.style.height = (responseTextarea.scrollHeight + 10) + "px";
    } catch (error) {
        console.error('Error:', error);
        document.getElementById('response').value = 'Произошла ошибка. Проверьте консоль для получения деталей.';
    }
};
