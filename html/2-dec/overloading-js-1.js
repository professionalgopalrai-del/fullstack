class Logger {

    // success /general info, message (error), error(error object)
    log(message, error) {
      if( typeof message === "String" && !error) {
        console.log(`INFO: ${message}`);
      }else if(message instanceof Error){
        console.log(`Error : ${error.message}`);
      }else if(typeof message === "String" && error instanceof Error){
        console.log(`ERROR: ${message} -> ${error.message}`);
      }
    }
}


let logger  = new Logger();

logger.log("succes");
logger.log("user validated");
logger.log(new error("Something went wrong"));
logger.log("Something went wrong", new SyntaxError("Code issue!"));