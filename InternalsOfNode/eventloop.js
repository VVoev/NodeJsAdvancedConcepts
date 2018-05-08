//node myfile.js

const pendingTimers = [];
const pendingOSTasks = [];
const pendingOperations = [];

// new timers,tasks,operations are recorded from myfile running
myfile.Run();

function shouldContinue() {
    // Check one: any pending setTimeout,setInterval,setImmediate?
    // Check two: any pendions OS task(like server listen to port)
    // Check three:any pending long running operations(like fs module)

    return pendingTimers.length || pendingOSTasks.length || pendingOperations.length
}

//entire body executes in one 'tick'
while (shouldContinue()) {

    /*

    1)node looks at pending timers asees if any functions are ready to be called-setTimetout,setInterval

    2)node looks at pendingOSTask and pendingOperations and calls relevant callbacks

    3)node pause execution. Continue when... 
        -a new pendiong OSTask is done
        -a new pendigonOperation is done
        -a timer is about to complete
    
    4)Look ad pendingTimers.Call any setImmediate

    5)handle any 'close' events

    */
}



//exit back to terminal