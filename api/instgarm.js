export default async function handler(req, res) {
  const username = (req.query.username || "").trim();

  if (!username) {
    return res.status(200).json({
      full_name: "Not Found",
      username: "",
      posts: "0",
      followers: "0",
      following: "0",
      profile_picture: "https://i.imgur.com/6VBx3io.png"
    });
  }

  const apiKey = "okdyDKv55sfMsNLKxf54uayW";

  const url =
    "https://www.searchapi.io/api/v1/search?" +
    new URLSearchParams({
      engine: "instagram_profile",
      username,
      api_key: apiKey
    });

  try {
    const response = await fetch(url);
    const data = await response.json();
    const profile = data.profile;

    if (!profile) {
      return res.status(200).json({
        full_name: "Not Found",
        username,
        posts: "0",
        followers: "0",
        following: "0",
        profile_picture: "https://i.imgur.com/6VBx3io.png"
      });
    }

    return res.status(200).json({
      full_name: String(profile.name || ""),
      username: String(profile.username || username),
      posts: String(profile.posts || "0"),
      followers: String(profile.followers || "0"),
      following: String(profile.following || "0"),
      profile_picture: String(
        profile.avatar || "https://i.imgur.com/6VBx3io.png"
      )
    });
  } catch (e) {
    return res.status(200).json({
      full_name: "Error",
      username,
      posts: "0",
      followers: "0",
      following: "0",
      profile_picture: "https://i.imgur.com/6VBx3io.png"
    });
  }
}
