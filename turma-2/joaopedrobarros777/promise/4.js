
function simularDownload() {
    return new Promise((res, err) => {
        setTimeout(() => {
            res("Download Concluido")
        }, 3000)
    })
}

function asyncDownload() {

    console.log("Download iniciado");

    simularDownload()
        .then(res => console.log(res))
        .catch(err => console.log(err));

    console.log('Download em processamento');
}

asyncDownload()