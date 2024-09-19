import rss from "@astrojs/rss";
import { fetchAndFilterPosts } from "../utils/helpers";

export async function GET(context) {
  const posts = await fetchAndFilterPosts();
  return rss({
    title:
      "KeralaServiceRules.com - കേരളാ സർവീസ് ചട്ടങ്ങൾ ലളിതമായ മലയാളത്തിൽ | KSR in simple Malayalam language",
    description:
      "Get latest articles published in your beloved KeralaServiceRules.com right inside your favorite RSS reader",
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `/article/${post.slug}/`,
    })),
    stylesheet: "/rss/styles.xsl",
  });
}
