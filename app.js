const generatePage = (Ryanne, rbenne30) => {
    return `
    <!DOCTYPE html> 
    <html lang="en"> 
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Portfolio Demo</title>
    </head>
  
    <body>
      <h1>${Ryanne}</h1>
      <h2><a href="https://github.com/${rbenne30}">Github</a></h2>
    </body>
    </html>
    `;
  };




  fs.writeFile('index.html', generatePage(name, github), err => {
    if (err) throw err;
  
    console.log('Portfolio complete! Check out index.html to see the output!');
  });



// const printProfileDATA = profileDataArr => {
//     //This...
//     for (let i =0; i < ProfileDataArr.length; i++) {
//         console.log(ProfileDataArr[i]);
//     }

//     console.log('==========');

//     //Is the same as this ...
//     profileDataArr.forEach((profileItem) => {
//         console.log(profileItem)
//     });
// };

// printProfileDATA(profileDataArgs);
