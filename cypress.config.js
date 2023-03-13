const { defineConfig } = require("cypress");
const xlsx = require('node-xlsx').default;
const fs = require('fs');
const path = require('path');

module.exports = (on, config) => {
  on('task',{parseXlsx({filePath})
  {return
    new promise((resolve,
    reject)=>
    {try
      {
        const jsonData = xlsx.parse(fs.readFileSync(filePath));
        resolve(jsonData);
      }
       catch(e)
      {
        reject(e);
      }});
      
    }});}
    
    const readXlsx = require('./cypress/support/read.xlsx')
    module.exports = (on, config)=>{
      on('task',{
        'readXlsx':
        readXlsx.read
      })
    }

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('task',{
        'readXlsx':
        readXlsx.read
})
    },

    
  },
  projectId: 's1tzhs',
  "screenshotOnRunFailure":true,
});
