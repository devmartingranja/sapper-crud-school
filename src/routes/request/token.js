export async function get(req, res) {
  try {
      const token = req.session.token;
      res.end(JSON.stringify({ token }));
  } catch (error) {
    res.end(JSON.stringify({ error: error.message }));
  }
}