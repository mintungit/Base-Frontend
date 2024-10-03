export async function handleRequest(promise) {
  try {
    const res = await promise;
    if (res?.data) {
      return res.data;
    }
    return null;
  } catch (error) {
    console.error("API error:", error);
    return null;
  }
}
  