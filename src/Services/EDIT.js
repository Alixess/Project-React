class EDIT {
  static async editWords(id, english, transcription, russian) {
    try {
      const resp = await fetch(`api/words/${id}/update`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id,
          english: english,
          transcription: transcription,
          russian: russian,
          tags: "",
          tags_json: "[]",
        }),
      });

      if (!resp.ok) {
        throw new Error(`Error updating words: ${resp.status}`);
      }

      return await resp.json();
    } catch (e) {
      console.error(e);
      return { error: e.message };
    }
  }
}
export default EDIT;
