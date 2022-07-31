import blog, { ga, redirects } from "https://deno.land/x/blog@0.3.3/blog.tsx";

blog({
  title: "Nightly",
  author: "Nightly",
  avatar: "./nightly.png",
  avatarClass: "half",
  links: [
    { title: "Email", url: "mailto:dhairysrivastava5@gmail.com" },
    { title: "GitHub", url: "https://github.com/dhairy-online" },
  ],
  background: "#000000",
  style:
    "* { color: #ffffff!important; } pre { background: #0F1119!important; }",
  middlewares: [],
});
