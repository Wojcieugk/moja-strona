// log-ip.js
exports.handler = async (event, context) => {
  // pobranie IP z nagłówków
  const ip = event.headers["x-nf-client-connection-ip"] || event.headers["x-forwarded-for"] || "unknown";

  console.log("Visitor IP:", ip); // to powinno iść do logów Netlify

  return {
    statusCode: 200,
    body: "OK"
  };
};
