/*
    Single Threded
        -it means that only one command can be executed at a time.
        -example: if we have 10 commands to execute, then the first command will be executed first, then the second command will be executed, and so on.

    Asynchronous
        -it means that multiple commands can be executed at the same time.
        -example: if we have 10 commands to execute, then all the commands will be executed at the same time.

    Event Loop
        -it is mechanism that allows javascript to perform input/output operations asynchronously, despite the fact that javascript is single-threaded.
        -example: if we have 10 commands to execute, then the first command will be executed first, then the second command will be executed, and so on.
                  But if the first command is taking time to execute, then the second command will be executed without waiting for the first command to complete.

    callback Hell
        - Callback hell is a situation in JavaScript where multiple nested callbacks are used, leading to code that is difficult to read and maintain.
        - It often occurs when dealing with asynchronous operations, such as making multiple API calls or handling events in a sequence.
        - Callback hell can make the code hard to understand, debug, and maintain, as it creates a pyramid-like structure of nested functions.
*/
