
function log(logMsg: string, logPrefix?: string) : void {
    console.log(`${Date.now()} || ${ logPrefix || "emptyPrefix "} || ${logMsg}`);
}

export { log }