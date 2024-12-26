class POST {
  static async postWords(newWord) {
    try {
      const resp = await fetch(
        "http://itgirlschool.justmakeit.ru/api/words/add",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newWord),
        }
      );

      if (!resp.ok) {
        throw new Error(`HTTP error! Status: ${resp.status}`);
      }

      return await resp.json();
    } catch (e) {
      console.error(e);
      return { error: e.message };
    }
  }
}
export default POST;
