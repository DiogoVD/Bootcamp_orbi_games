//Modo 1

const myPromise = new Promise((resolve,reject) =>{
    window.setTimeout(() => {
        resolve('Resolvida');
    }, 2000);
});

await myPromise
    .then((result) => result + ' passando pelo then')
    .then((result) => result + ' e agora acabou!')
    .catch((err) => console.log(err.message));


//Modo 2

async function resolvePromisse1() {
    const myPromise = new Promise((resolve,reject) =>{
        window.setTimeout(() => {
            resolve('Resolvida');
        }, 3000);
    });
    
    const resolved = await myPromise
        .then((result) => result + ' passando pelo then')
        .then((result) => result + ' e agora acabou!')
        .catch((err) => console.log(err.message));
    
        return resolved;
}


//Modo 3

async function resolvePromisse2() {
    const myPromise = new Promise((resolve,reject) =>{
        window.setTimeout(() => {
            resolve('Resolvida');
        }, 3000);
    });
    
    let result;

    try {
        result = await myPromise
            .then((result) => result + ' passando pelo then')
            .then((result) => result + ' e agora acabou!')
    }catch(err) {
        result = err.message;
    };
    
        return result;
}
