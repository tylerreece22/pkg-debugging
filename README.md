# PKG Debugging
Discovery repo for debugging a pkg application. *NOTE: This README was written with the idea of debugging an application on a production server in mind. With that said, many of these approaches are practical on a local development environment*

### Native Linux Commands
* ```ps aux``` view all running processes. I recommend running this command with a ```| grep {pkg file dir name}``` so you can see the actual process
* ```top``` shows process dashboard to see resource usage
    * ```htop``` is also a great command but requires an install
* ApacheBench comes with most *NIX OSs (though less recommended on a production server) and can provide some great profiling on an app. The following will create 20 connections with 250 requests each to the endpoint passed```ab -k -c 20 -n 250 "http://localhost:8080/auth?username=matt&password=password"``` and will provide a nice dashboard to show the effectiveness of the application
* DRAWBACKS:
  * Highly limited
  
### Node Profiling with Flame Graph (External tools)
* [0x](https://www.npmjs.com/package/0x) is a super simple flame graph generation package which even can profile PKG apps and does not require installation of linux modules
  * 0x has a [production specific "lightweight" approach](https://github.com/davidmarkclements/0x/blob/master/docs/production-servers.md#production-servers) as well
  * On the note of flame graphs```perf``` is a great as well but requires linux package installation and has more known issues than I am comfortable with
* DRAWBACKS: 
  * Downtime
  * Data collected locally
  
### Native Node "Inspector" Module
Inspector module is a great addition to a Node application (especially in a case where all you have is a PKG app on a server somewhere) which even enables profiling files to be pushed to S3 but PKG does not play nice with it because [Debugging options are disallowed , as pkg executables are usually used for production environments.](https://github.com/vercel/pkg#error-err_inspector_not_available) so it renders this functionality useless unless the application is rebuild with the ```---debug``` flag. Sad day.

### Conclusion
Although there are a lot of great profiling approaches out there (i.e. 0x, inspector module, clinicjs, etc) PKG significantly limits the ability to debug a production built application.

### Recommended Approach
Use a low resource demanding profiler like 0x combined with native linux commands in production to prevent downtime and replicate the application in a local environment to do more in depth profiling. Unfortunately during this research, I was unable to find an alternative approach.

### References
* [Node Flame Graph](https://nodejs.org/en/docs/guides/diagnostics-flamegraph/)
* [Multiple Profiling examples including the Inspector module](https://medium.com/voodoo-engineering/node-js-and-cpu-profiling-on-production-in-real-time-without-downtime-d6e62af173e2)
* [Inspector Module Docs](https://nodejs.org/docs/latest-v14.x/api/inspector.html)
* [PKG Docs](https://www.npmjs.com/package/pkg)
  
  
