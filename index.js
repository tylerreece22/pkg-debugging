const fs = require('fs')
// const inspector = require('inspector');
// const session = new inspector.Session();

const delay = (ms) => {
    return new Promise(resolve => {
        setTimeout(resolve, ms)
    })
}

const printAllFiles = (dir) => {
    console.log(`Printing files for ${dir}`)
    // Print all files in snapshot directory
    fs.readdir(dir, (err, files) => {
        files.forEach(file => {
            console.log(file);
        });
    });
}

// const addInspector = () => {
//     session.connect();
//
//     session.post('Profiler.enable', () => {
//         session.post('Profiler.start', () => {
//             // Invoke business logic under measurement here...
//
//             // some time later...
//             session.post('Profiler.stop', (err, { profile }) => {
//                 // Write profile to disk, upload, etc.
//                 if (!err) {
//                     fs.writeFileSync('./profile.json', JSON.stringify(profile));
//                 }
//             });
//         });
//     });
// }

(async () => {
    // addInspector() // Throws error because PKG does not like it
    while (true) {
        await delay(2000)
        console.log('----- working -----')
        printAllFiles('./')
    }
})()