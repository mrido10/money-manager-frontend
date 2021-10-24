export let strLocaleTimeNow = () => {
    let now = new Date();
    let utcString = now.toISOString().substring(0,19);
    let year = now.getFullYear();
    let month = now.getMonth() + 1;
    let day = now.getDate();
    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();
    let localDatetime = year + '-' +
                      (month < 10 ? '0' + month.toString() : month) + '-' +
                      (day < 10 ? '0' + day.toString() : day) + 'T' +
                      (hour < 10 ? '0' + hour.toString() : hour) + ':' +
                      (minute < 10 ? '0' + minute.toString() : minute) +
                      utcString.substring(16,19);

    return localDatetime
    // let datetimeField = document.getElementById('myDatetimeField');
    // datetimeField.value = localDatetime;
}   