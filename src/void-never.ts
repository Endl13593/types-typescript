const showLog = (message: string): void => {
    console.log(message);
    return;
}
showLog('Test void');

const showLogAndException = (message: string): never => {
    console.log(message);
    throw new Error(message);
}
showLogAndException('Test never');