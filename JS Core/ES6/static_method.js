class Helper{
    logToConsole(message){
        console.log(message);
    }

    static logToConsoleWithTimeStamp(message){
        console.log((new Date).toDateString() + ": " + message);
    }
}

let helper = new Helper();
helper.logToConsole('hello'); // this works

Helper.logToConsole('hello');
// this throws the exception: TypeError: Helper.logToConsole is not a function.
// because logToConsole is not a static method

Helper.logToConsoleWithTimeStamp('hello'); // this works because 'logToConsoleWithTimeStamp' is a static method
