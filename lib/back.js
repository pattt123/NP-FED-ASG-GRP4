const params = new URLSearchParams(window.location.search);
console.log(params)
if (params.has('ref')) {
    const backurl = params.get('ref');
    const back = document.getElementById("back")
    if (back != null) {
        back.href = backurl
    }
}
