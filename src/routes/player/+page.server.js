import ytDlpWrap from 'yt-dlp-wrap';

const cache = {};
console.log(ytDlpWrap)
const ytDlp = ytDlpWrap.default ? new ytDlpWrap.default("./yt-dlp"): new ytDlpWrap("./yt-dlp");

async function getAudioUrl(link) {
  if (cache[link]) return cache[link];

  const metadata = await ytDlp.getVideoInfo(link);
  let bestUrl = null, bestSize = Infinity; 
  for (const format of metadata.formats) {
    if (format.video_ext == "none" && format.audio_ext != "none") {
      if (bestSize > format.filesize) {
        bestUrl = format.url;
        bestSize = format.filesize;
      }
    }
  }

  const output = [metadata.fulltitle, metadata.description, bestUrl];
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
