setInterval(() => {

    const now = moment();

    document.getElementById("time").innerText =
        now.format("hh:mm:ss A");

    document.getElementById("date").innerText =
        now.format("dddd, DD MMMM YYYY");

}, 1000);
