export let setCookie = (name, val) => {
    let now = new Date();
    let time = now.getTime();
    let expireTime = time + 1000*36000;
    now.setTime(expireTime);
    document.cookie = `${name}=${val};expires=${now.toUTCString()};path=/`;
}

export let deleteCookie = (name) => {
    document.cookie = `${name}=;expires=;path=/`;
}