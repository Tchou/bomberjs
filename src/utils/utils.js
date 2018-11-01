
export function finalStatic(o, p, v) {
    Object.defineProperty(o, p, { value : v, writable : false});
}



export function ajax(url, method) {
    method = method || "GET";
    return new Promise ( (resolve, reject) => {
        let xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.overrideMimeType("application/json");
        xhr.onreadystatechange = () => {

            if (xhr.readyState == XMLHttpRequest.DONE) {
                if (xhr.status == 200) {
                    resolve (xhr.responseText);
                } else {
                    reject (xhr.responseText);
                }
            }

        }
        xhr.send(null);
    });
}