(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{203:function(t,s,n){"use strict";n.r(s);var a={props:["slot-key"],mounted:function(){this.$nextTick(function(){this.$vuepress.$emit("AsyncMarkdownContentMounted",this.slotKey)})}},o=n(9),e=Object(o.a)(a,function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.slotKey}},[n("blockquote",[n("p",[t._v("This branch is for vuepress's next version "),n("code",[t._v("1.x")]),t._v(".")])]),t._v(" "),n("blockquote",[n("p",[t._v("As vuepress "),n("code",[t._v("1.x")]),t._v(" is on "),n("code",[t._v("alpha")]),t._v(" stage, this branch is not stable.")])]),t._v(" "),n("h1",{attrs:{id:"vuepress-theme-meteorlxy"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#vuepress-theme-meteorlxy","aria-hidden":"true"}},[t._v("#")]),t._v(" Vuepress Theme - Meteorlxy")]),t._v(" "),n("p",[t._v("Meteorlxy theme for "),n("a",{attrs:{href:"https://vuepress.vuejs.org",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vuepress"),n("OutboundLink")],1)]),t._v(" "),n("p",[t._v("See demo on "),n("a",{attrs:{href:"https://www.meteorlxy.cn",target:"_blank",rel:"noopener noreferrer"}},[t._v("my homepage"),n("OutboundLink")],1)]),t._v(" "),n("h2",{attrs:{id:"installation"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#installation","aria-hidden":"true"}},[t._v("#")]),t._v(" Installation")]),t._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("yarn add vuepress-theme-meteorlxy@next\n# or\nnpm install vuepress-theme-meteorlxy@next\n")])])]),n("h2",{attrs:{id:"theme-config"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#theme-config","aria-hidden":"true"}},[t._v("#")]),t._v(" Theme Config")]),t._v(" "),n("p",[t._v("Sample config:")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{attrs:{class:"token comment"}},[t._v("// .vupress/config.js")]),t._v("\n\nmodule"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  title"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'Meteorlxy'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n  description"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'meteorlxy\\'s homepage'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n  head"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{attrs:{class:"token string"}},[t._v("'link'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" rel"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'icon'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" href"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'/assets/img/avator.jpg'")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n  locales"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{attrs:{class:"token string"}},[t._v("'/'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      lang"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'zh-CN'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n  "),n("span",{attrs:{class:"token comment"}},[t._v("// use this theme")]),t._v("\n  theme"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'meteorlxy'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n  "),n("span",{attrs:{class:"token comment"}},[t._v("// set theme config")]),t._v("\n  themeConfig"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    personalInfo"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),n("span",{attrs:{class:"token comment"}},[t._v("// your personal info to display in the info card")]),t._v("\n      nickname"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'meteorlxy'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      description"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'Happy Coding<br/>Happy Life'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      email"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'meteor.lxy@foxmail.com'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      location"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'Xi\\'an City, China'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      organization"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'Xi\\'an Jiao Tong University'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n      "),n("span",{attrs:{class:"token comment"}},[t._v("// your avator image to display in the info card (related to the .vuepress/public directory)")]),t._v("\n      avator"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'/assets/img/avator.jpg'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n      "),n("span",{attrs:{class:"token comment"}},[t._v("// your sns accounts to display in the page footer and the bottom of info card")]),t._v("\n      sns"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        facebook"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          account"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'meteorlxy.cn'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          link"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'https://www.facebook.com/meteorlxy.cn'")]),t._v("\n        "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        github"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          account"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'meteorlxy'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          link"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'https://github.com/meteorlxy'")]),t._v("\n        "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        linkedin"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          account"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'meteorlxy'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          link"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'http://www.linkedin.com/in/meteorlxy'")]),t._v("\n        "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        twitter"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          account"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'meteorlxy_cn'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          link"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'https://twitter.com/meteorlxy_cn'")]),t._v("\n        "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        weibo"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          account"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'@焦炭君_Meteor'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          link"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'https://weibo.com/u/2039655434'")]),t._v("\n        "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n    "),n("span",{attrs:{class:"token comment"}},[t._v("// background of the header")]),t._v("\n    headerBackground"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),n("span",{attrs:{class:"token comment"}},[t._v("// set url for image background (related to the .vuepress/public directory)")]),t._v("\n      "),n("span",{attrs:{class:"token comment"}},[t._v("// url: '/assets/img/bg.jpg',")]),t._v("\n\n      "),n("span",{attrs:{class:"token comment"}},[t._v("// use geopattern to generate background randomly")]),t._v("\n      useGeo"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n    "),n("span",{attrs:{class:"token comment"}},[t._v("// use the official last-update plugin")]),t._v("\n    lastUpdated"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token boolean"}},[t._v("true")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n    "),n("span",{attrs:{class:"token comment"}},[t._v("// for the navbar")]),t._v("\n    nav"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" text"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'Home'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" link"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'/'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" exact"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token boolean"}},[t._v("true")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" text"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'Posts'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" link"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'/posts/'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" exact"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token boolean"}},[t._v("false")]),t._v("  "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" text"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'About'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" link"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'/about/'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" exact"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token boolean"}},[t._v("false")]),t._v("  "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("h2",{attrs:{id:"todos"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#todos","aria-hidden":"true"}},[t._v("#")]),t._v(" TODOS")]),t._v(" "),n("ul",[n("li",[t._v("[ ] Comments Support")]),t._v(" "),n("li",[t._v("[ ] SEO")]),t._v(" "),n("li",[t._v("[ ] General enhancement")])])])},[],!1,null,null,null);e.options.__file="Readme.md";s.default=e.exports}}]);