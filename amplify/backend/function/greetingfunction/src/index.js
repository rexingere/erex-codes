exports.handler = async (event, context, callback) => {
    //console.log(event.queryStringParameters);

    const body = {
        message3: "Message",
        queryString: event.queryStringParameters
    }
    const response = {
        statusCode: 200,
        body: JSON.stringify(body),
        headers: {
            "Access-Control-Allow-Origin": "*",
        }
    }

    return response;
  };

  