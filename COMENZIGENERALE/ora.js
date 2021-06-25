
module.exports ={
    name:"sapt",
    description:"arata ora",
    execute(message){
     
       
        function getWeekNumber(d) {
         
          d = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
        
          d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay()||7));
         
          var yearStart = new Date(Date.UTC(d.getUTCFullYear(),0,1));
        
          var weekNo = Math.ceil(( ( (d - yearStart) / 86400000) + 1)/7);
          
          return [d.getUTCFullYear(), weekNo];
      }
      
      var result = getWeekNumber(new Date());
      message.channel.send('E a-' + parseInt(result[1]-39) + 'a saptamana de facultate , daca e luni marti sau miercuri scadeti 1 saptamana ' );
} }