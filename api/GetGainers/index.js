const iex = require('iexcloud_api_wrapper'); // gets auth from .env automatically

module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');



    const getMoverData = async() => {
        try {
          const gainers = await iex.list('gainers');
          console.log(gainers);
        }
        catch(error) {
          console.error(`Could not get data: ${error}`);
          //process.exit(-1);  // nonzero exit code indicates failure
        }
      };


    const name = (req.query.name || (req.body && req.body.name));
    const responseMessage = name
        ? "Hello, " + name + ". This HTTP triggered function executed successfully."
        : "This HTTP triggered function executed successfully. Pass a name in the query string or in the request body for a personalized response.";

    const hello = await getMoverData().gainers;

    context.res = {
     // status: 200, /* Defaults to 200 */
     //   body: {
     //       text: "Hello from the IEX"
     //     }

     //     body:  { 
     //       text : "Hi",
     //       text2 : "Ho" + hello
     //     }

      body: await iex.list('gainers')
    };
}