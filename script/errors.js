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

export function checkRequiredFields(id, token, phone, message) {
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

export async function handleRequest(url, method, body) {
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