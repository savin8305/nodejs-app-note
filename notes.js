const chalk=require('chalk');
const fs=require('fs');
const addnote=(tittle,body)=>{
  const notes=loadnotes();
  // const duplicatesNotes=notes.filter((note) => note.tittle===tittle)
  const duplicate=notes.find((note)=>note.tittle===tittle)
 
  // const duplicatesNotes=notes.filter(function(note){
  //   return note.tittle===tittle;
  // if(duplicatesNotes.length===0){
  //   notes.push({
  //       tittle:tittle,
  //       body:body
  //     })
  //    savenotes(notes);
  //    console.log(chalk.bgBlueBright.inverse('notes is added successfully ! :)'));
  // }
  // else{
  //   console.log(chalk.bgYellow.inverse('note not found '));
  // }
  if(duplicate===undefined){//(!duplicate)
    notes.push({
      tittle:tittle,
      body:body
    })
    savenotes(notes);
    console.log(chalk.bgBlueBright.inverse('notes is added successfully ! :)'));
  }
  else{
      console.log(chalk.bgYellow.inverse('duplicate note not found '));
    }
 
}
const removetittle=(tittle)=>{
const notes=loadnotes();
notesTokeeps=notes.filter((note)=> note.tittle!=tittle)
// notesTokeeps=notes.filter(function(note){
//     return note.tittle!=tittle;
 
if(notes.length>notesTokeeps.length){
    console.log(chalk.green.inverse("note removed"));
    savenotes(notesTokeeps);
 }
 else{
    console.log(chalk.red.inverse("not found"));
 }
}
const Listnotes=()=>{
  const notes=loadnotes();
   console.log(chalk.inverse('your notes'));
   notes.forEach(note => {
    console.log(note.tittle);
  });
}
const readNote=(tittle)=>{
 const notes=loadnotes();
 const note=notes.find((note)=>note.tittle===tittle);
 if(note){
  console.log(chalk.red.inverse(note.tittle));
  console.log(note.body);
 }else{
  console.log(chalk.red.inverse("note not found !"));
 }
}
savenotes=(notes)=>{
    const jsondata=JSON.stringify(notes);
    fs.writeFileSync('notes.json',jsondata);
  }
const loadnotes=()=>{
    try{
 
        const bufferdata=fs.readFileSync('notes.json');
        const jsondata=bufferdata.toString();
        return JSON.parse(jsondata);
 
    }catch(e){
      return [];
    }
   
}
module.exports={
   
    addnote:addnote,
    removetittle:removetittle,
    Listnotes:Listnotes,
    readNote:readNote
}
