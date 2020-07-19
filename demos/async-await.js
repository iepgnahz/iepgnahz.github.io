const resolveAfter2Sections = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('result');
        }, 2000);
    })
};

const rejectAfter2Sections = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject('error');
        }, 2000);
    })
};

const successfulAsyncCall = async () => await resolveAfter2Sections();
const failedAsyncCall = async () => {
    try {
        return await rejectAfter2Sections();
    } catch(error) {
        console.log('this is error: ', error)
    }
}

const successfulPromiseCall = () => {
    successfulAsyncCall().then(result => {
        console.log('result: ', result)
    })
};

const failedPromiseCall = () => {
    failedAsyncCall().then(result => {
        console.log('result: ', result)
    }).catch((error) => {
        console.log('error: ', error)
        // 不会进入这里因为被上一层catch住了
    })
};

successfulPromiseCall();
failedPromiseCall();
