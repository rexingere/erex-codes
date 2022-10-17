exports.handler = async (event) => {
    const body = {
        message: "Hello from Lambda2"
    }
    const response = {
        statusCode: 200,
        body: JSON.stringify(body),
        headers: {
            "Access-Control-Allow-Origin": "*",
        }
    };
    return response;
  };