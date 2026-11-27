/**
 * Tells Bing, Yandex and other IndexNow search engines that pages changed, so they
 * re-crawl within minutes instead of weeks. Bing's index also powers ChatGPT search
 * and Copilot, so this is the fastest way to get new pages into AI answers.
 *
 *   npm run indexnow                 → submits every URL in the live sitemap
 *   npm run indexnow -- /blog/foo    → submits only the given paths
 *
 * Run it after a deploy. The key file lives at public/<key>.txt.
 */
const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.quicksnip.app").replace(/\/$/, "");
const KEY = "6812c1bf34be366df132253186cdac5e";

async function main() {
  const paths = process.argv.slice(2);
  let urls: string[];
  if (paths.length) {
    urls = paths.map((p) => new URL(p, SITE_URL).toString());
  } else {
    const xml = await fetch(`${SITE_URL}/sitemap.xml`).then((r) => r.text());
    urls = [...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map((m) => m[1]);
  }

  const res = await fetch("https://api.indexnow.org/indexnow", {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify({
      host: new URL(SITE_URL).host,
      key: KEY,
      keyLocation: `${SITE_URL}/${KEY}.txt`,
      urlList: urls.slice(0, 10_000),
    }),
  });
  console.log(`IndexNow: ${res.status} ${res.statusText} (${urls.length} URLs)`);
  if (!res.ok && res.status !== 202) process.exit(1);
}

main();
