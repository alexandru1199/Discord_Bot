var i=-1;
var musicurls=[];
var ok=0;
const ytdl = require('ytdl-core');
module.exports={
    name:"play",
    execute(message) {
        i++
        const streamOptions={seek:0,volume:0.2}
        
const voiceChannel = message.member.voice.channel;
    
if (!voiceChannel)
  return message.channel.send(
    "You need to be in a voice channel to play music!"
  );
const permissions = voiceChannel.permissionsFor(message.client.user);
if (!permissions.has("CONNECT") || !permissions.has("SPEAK")) {
  return message.channel.send(
    "I need the permissions to join and speak in your voice channel!"
  );
} 
voiceChannel.join()
.then((connection)=>{
    var dispatcher
musicurls.push(args3[1])
 console.log(musicurls)
 console.log(i)
 if(ok==0) {
 const stream=ytdl(musicurls[i],{filter:'audioonly'})
  dispatcher=connection.play(stream,streamOptions) 
ok==1}

console.log(ok)
 dispatcher.on("end",() =>{
  




setTimeout( ()=> {
    ok==0;
    
},5000 ) 
}) })
.catch()

 } }
 