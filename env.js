// declare different environments here
// configuarble during run time

var SERVER_DEV_URL = "https://internal.sdnatech.com:4430"
var SERVER_TST_URL = "https://internal.sdnatech.com:4430"
var SERVER_PER_URL = "https://internal.sdnatech.com:4430"

//EXPORT VARIABLES TO USE IN JS FILES

export let devEnvironment = {
    SERVER_ENDPOINT: SERVER_DEV_URL
}

export let tstEnvironment = {
    SERVER_ENDPOINT: SERVER_TST_URL
}

export let perEnvironment = {
    SERVER_ENDPOINT: SERVER_PER_URL
}

//declare env types

export let dev = "dev"
export let tst = "tst"
export let per = "per"