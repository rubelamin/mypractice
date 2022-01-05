function promiseTimeout(ms){
    return new Promise((resolve, reject) => {
        setTimeout(resolve, ms);
    });
}

async function longRunOperation() {
    return 'Bangladesh';
}

async function run(){
    // logic
    console.log("Start!!")
    await promiseTimeout(2000);
    const recall = await longRunOperation();
    console.log("Stop!!")
    console.log(recall);
}

run();

