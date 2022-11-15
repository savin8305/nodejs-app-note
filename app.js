const yargs=require('yargs');
const notes=require('./notes.js')
// yargs.command({
//     command:'add',
//     describe:'add command',
//     builder:{
//         tittle:{
//             describe:'tittle description',
//             demandOption: true,
//             type:'string'
//         },
//         body:{
//             describe:'body description',
//             demandOption:true,
//             type:'string'
//         }
//     },
//     handler(argv){
//     console.log("tittle: "+argv.tittle);
//     console.log("body: "+argv.body);
//     }
 
// })
// yargs.command({
//     command:'list',
//     describe:'listing for plh',
//     builder:{
//         tittle:{
//             describe:'tittle description',
//             demandOption: true,
//             type:'string',
//         },
//         body:{
//             describe:'body description',
//             demandOption:true,
//             type:'string'
//         }
//     },
//     handler(argv){
//         console.log("listing g for plh"+argv);
//     }
// })
// yargs.command({
//     command:'read',
//     describe:'reading for plh',
//     builder:{
//         tittle:{
//             describe:'tittle description',
//             demandOption: true,
//             type:'string',
//         },
//         body:{
//             describe:'body description',
//             demandOption:true,
//             type:'string'
//         }
//     },
//     handler(){
//         console.log("reading for plh");
//     }
// })

 
yargs.command({
    command:'add',
    describe:'add command',
    builder:{
        tittle:{
            describe:'tittle description',
            demandOption: true,
            type:'string'
        },
        body:{
            describe:'body description',
            demandOption:true,
            type:'string'
        }
    },
    handler:function(argv){
     notes.addnote(argv.tittle,argv.body);
    }
 
})
yargs.command({
    command:'remove',
    describe:'remove command',
    builder:{
        tittle:{
            describe:'tittle description',
            demandOption: true,
            type:'string'
        }
    },
    handler(argv){
     notes.removetittle(argv.tittle);
    }
 
})
yargs.command({
    command:'list',
    describe:'listing for plh',
    // builder:{
    //     tittle:{
    //         describe:'tittle description',
    //         demandOption: true,
    //         type:'string',
    //     },
    //     body:{
    //         describe:'body description',
    //         demandOption:true,
    //         type:'string'
    //     }
    // },
    handler(argv){
        notes.Listnotes()
    }
})
yargs.command({
    command:'read',
    describe:'reading for plh',
    builder:{
        tittle:{
            describe:'tittle description',
            demandOption: true,
            type:'string',
        },
        body:{
            describe:'body description',
            demandOption:true,
            type:'string'
        }
    },
    handler(argv){
        notes.readNote(argv.tittle)
    }
})
console.log(yargs.argv);
