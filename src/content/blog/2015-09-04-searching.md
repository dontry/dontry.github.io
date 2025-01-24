---
date: '2015-09-04'
layout: post
title: Search Bar
archived: true
---

Because Jekyll is a static website engine. So we cannot implement tradition dynamic searching through traversing database. In this case, I looked for other searching configurations applicable to Jekyll blog to solve the problem. Firstly, what comes up to my head is using Google search API. However, because of the goddamn GFW, it is invalid to use. So I resorted to other plausible ways. Here are three major solutions may work:
 
 1. <strong>JavaScript and JSON technique</strong>
    * [Simple Jekyll Searching by Alex Pearce](https://alexpearce.me/2012/04/simple-jekyll-searching/)This solution is lack of full-text search feature.)
    * [Simple-Jekyll-Search by christian-fei](https://github.com/christian-fei/Simple-Jekyll-Search) A JavaScript library to add search functionality to any Jekyll blog.
    * [Add static searching to Jekyll](http://kingauthur.info/2012/12/03/the-things-about-jekyll/) 
 2. <strong>[lunr.js and Ruby Gem plugins](https://github.com/slashdotdash/jekyll-lunr-js-search) </strong>
 3. <strong>[A powerful third party search engine](https://swiftype.com/site-search) It is a hosted and easy-deploy search solution.</strong>

Finally I adopted the third solution. It's very easy to deploy. You just need to follow instruction to set it up. Someday later I would like to try other two methods.
