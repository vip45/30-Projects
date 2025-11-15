require('dotenv').config();
const express = require("express");
const app = express();

const githubData = {
  login: "vip45",
  id: 128131292,
  node_id: "U_kgDOB6Mg3A",
  avatar_url: "https://avatars.githubusercontent.com/u/128131292?v=4",
  gravatar_id: "",
  url: "https://api.github.com/users/vip45",
  html_url: "https://github.com/vip45",
  followers_url: "https://api.github.com/users/vip45/followers",
  following_url: "https://api.github.com/users/vip45/following{/other_user}",
  gists_url: "https://api.github.com/users/vip45/gists{/gist_id}",
  starred_url: "https://api.github.com/users/vip45/starred{/owner}{/repo}",
  subscriptions_url: "https://api.github.com/users/vip45/subscriptions",
  organizations_url: "https://api.github.com/users/vip45/orgs",
  repos_url: "https://api.github.com/users/vip45/repos",
  events_url: "https://api.github.com/users/vip45/events{/privacy}",
  received_events_url: "https://api.github.com/users/vip45/received_events",
  type: "User",
  user_view_type: "public",
  site_admin: false,
  name: "Vipin Yadav",
  company: null,
  blog: "",
  location: null,
  email: null,
  hireable: null,
  bio: "Learning",
  twitter_username: null,
  public_repos: 12,
  public_gists: 0,
  followers: 0,
  following: 0,
  created_at: "2023-03-17T08:11:10Z",
  updated_at: "2025-11-01T15:33:42Z",
};

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/twitter", (req, res) => {
  res.send("Twitter");
});

app.get("/login", (req, res) => {
  res.send("<h1>Please login </h1>");
});

app.get("/youtube", (req, res) => {
  res.send("<h2>Youtube</h2>");
});

app.get("/github",(req,res)=>{
    res.json(githubData)
})
app.listen(process.env.PORT, () => {
  console.log(`Port is running on port ${process.env.PORT}`);
});
