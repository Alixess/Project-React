class DELETE {
  static async deleteWords(id) {
    try {
      const resp = await fetch(
        `http://itgirlschool.justmakeit.ru/api/words/${id}/delete`,
        {
          method: "POST",
        }
      );
      if (!resp.ok) {
        throw new Error("Failed to delete word");
      }
    } catch (e) {
      console.error(e);
      return { error: e.message };
    }
  }
}
export default DELETE;
