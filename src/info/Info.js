import self from "../img/self.png";
import mock1 from "../img/mock1.png";

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(20, 238, 192)", "rgb(135, 229, 99)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */

/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
  firstName: "Sudhanshu ",
  lastName: "Makwana",
  initials: "sm", // the example uses first and last, but feel free to use three or more if you like.
  position: "a Software Developer",
  selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
  gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
  baseColor: colors[0],
  miniBio: [
    // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
    {
      emoji: "🤖",
      text: "generative AI enthusiast",
    },
    {
      emoji: "🌎",
      text: "based in Bengaluru",
    },
    {
      emoji: "📧",
      text: "sudhanshumakwana@gmail.com",
    },
  ],
  socials: [
    {
      link: "https://dev.to/sudhz_",
      icon: "fa-brands fa-dev",
      label: "blog",
    },
    {
      link: "https://instagram.com/sudhz._",
      icon: "fa fa-instagram",
      label: "instagram",
    },
    {
      link: "https://github.com/sudhz",
      icon: "fa fa-github",
      label: "github",
    },
    {
      link: "https://linkedin.com/in/sudhz",
      icon: "fa fa-linkedin",
      label: "linkedin",
    },
    {
      link: "https://twitter.com/sudhz_",
      icon: "fa fa-twitter",
      label: "twitter",
    },
    // Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
    // Just change the links so that they lead to your social profiles.
  ],
  bio: "Hey, I'm Sudhanshu. I'm all about making tech work for people, not the other way around. With a CompSci degree from SRMIST under my belt, I've jumped into the world of coding, always looking for ways to simplify complex tech problems. My journey has been about more than just coding; it's been about connecting with others, understanding what they need, and delivering it in the simplest way possible. I thrive on teamwork and am always eager to learn and grow.",
  skills: {
    proficientWith: [
      "python",
      "typescript",
      "reactjs",
      "nodejs",
      "git",
      "tailwindcss",
    ],
    exposedTo: ["aws", "docker", "mongodb", "linux"],
  },
  experiences: [
    {
      role: "Research Intern",
      company: "Samsung R&D Institute, Bangalore",
      achievements: [
        "Led the team in converting the GSM Test Automation Framework from Tool Command Language (Tcl) to Python",
        "Enhanced readability and modernized the framework",
        "Leveraged Python for improved efficiency",
      ],
    },
    {
      role: "Remote Software Developer",
      company: "Yanolja Co. Ltd., Seoul",
      achievements: [
        "Enhanced a React.js GUI tool with React Flow",
        "Implemented BFS and cycle detection for dynamic node name suggestions",
        "Collaborated in an agile team for timely feature delivery",
      ],
    },
    {
      role: "Remote Data Engineer",
      company: "Freelance Project via Upwork",
      achievements: [
        "Developed a Python/Scrapy script for data extraction from bjs.com",
        "Integrated with Shopify API for real-time product uploads",
      ],
    },
  ],
  hobbies: [
    {
      label: "reading",
      emoji: "📖",
    },
    {
      label: "gym",
      emoji: "💪🏻",
    },
    {
      label: "movies",
      emoji: "🎥",
    },
    {
      label: "traveling",
      emoji: "🚗",
    },
    // Same as above, change the emojis to match / relate to your hobbies or interests.
    // You can also remove the emojis if you'd like, I just think they look cute :P
  ],
  portfolio: [
    // This is where your portfolio projects will be detailed
    {
      title: "CodeLingo",
      live: "https://codelingo.netlify.app", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
      source: "https://github.com/sudhz/CodeLingo", // this should be a link to the **repository** of the project, where the code is hosted.
      image: mock1,
    },
  ],
};
