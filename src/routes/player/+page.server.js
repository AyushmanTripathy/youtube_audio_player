import ytdl from "@distube/ytdl-core";

const cache = {};
async function getAudioUrl(link) {
  if (cache[link]) return cache[link];

  const info = await ytdl.getInfo(link);
  let url = null;
  for (const format of info.formats) {
    if (format.hasAudio && !format.hasVideo) {
      url = format.url;
      if (format.quality == "tiny" || format.quality == "small")
        break;
    }
  }
  const output = [info.videoDetails.title, info.videoDetails.description, url];
  cache[link] = output;
  return output;
}

export async function load({ url }) {
  const targetUrl = url.searchParams.get("link");
  const [ title, des, link ] = await getAudioUrl(targetUrl);
  console.log("finsihed");
  return {
    link: link ?? null,
    title: title ?? null,
    des: des ?? null,
    originalUrl: targetUrl
  };
}
