import markdownIt from "markdown-it";

const md = markdownIt({ html: true, breaks: false, linkify: true });

export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/images");
  eleventyConfig.addPassthroughCopy("src/style.css");
  eleventyConfig.addPassthroughCopy("src/EleFavi.ico");
  // keeps the old .html URLs alive; they're in her Instagram bio and Google's index
  eleventyConfig.addPassthroughCopy({ "src/_redirects": "_redirects" });

  // renders the CMS's rich-text fields; mom writes prose, never HTML
  eleventyConfig.addFilter("markdown", (str) => (str ? md.render(str) : ""));

  return {
    dir: { input: "src", output: "_site", data: "../content" },
  };
}
