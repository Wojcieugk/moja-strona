exports.handler = async (event, context) => {
  const ip = event.headers["client-ip"] 
          || event.headers["x-forwarded-for"] 
          || "unknown";

  console.log("🔥 Nowe wejście! IP:", ip);

  return {
    statusCode: 200,
    body: "OK"
  };
};
