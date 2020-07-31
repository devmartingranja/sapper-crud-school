//import fetch from "node-fetch"

// const headers = {
//   "Content-Type": "application/json",
//   Accept: "application/json",
// };

export async function post(req, res) {
  try {
    const { email, pass } = req.body;

    //TODO: modificar 

    // const result = await fetch(`https://www.myapi.com/login`, {
    //   method: "POST",
    //   headers,
    //   body: JSON.stringify({ email, password }),
    // });

    // const parsed = await result.json();

    // if (typeof parsed.error !== "undefined") {
    //   throw new Error(parsed.error);
    // }

    if (email === "test@ing-dev.com" && pass === "123") {
      let token = "123456789AAATOKEN";
      req.session.token = token;
      res.end(JSON.stringify({ token }));
      return
    } else {
      throw new Error("Credenciales no validas")
    }

  } catch (error) {
    res.end(JSON.stringify({ error: error.message }));
  }
}