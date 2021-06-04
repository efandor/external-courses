const json = JSON.stringify({
    name: "John",
    surname: "Smith",
    age: 25
});
const testGetUrl = 'http://httpbin.org/get';
const testPostUrl = 'http://httpbin.org/post';

function myfetch(method, url, body) {
    const result = new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();

        xhr.open(method, url, true);

        if (method === "POST") {
            xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
        }

        xhr.onload = function() {
            if (xhr.status = 200) {
                resolve(xhr.response);
            } else { 
                reject(xhr.response);
            }
        };

        if (method === "GET") {
            xhr.send();
        } else {
            xhr.send(body);
        }
    });

    return result;
}

myfetch('GET', testGetUrl);
myfetch('POST', testPostUrl, json);