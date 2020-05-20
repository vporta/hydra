(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{194:function(e,a,n){"use strict";n.r(a),n.d(a,"frontMatter",(function(){return c})),n.d(a,"metadata",(function(){return o})),n.d(a,"rightToc",(function(){return l})),n.d(a,"default",(function(){return b}));var t=n(1),r=n(9),i=(n(0),n(229)),c={id:"package_directive",title:"The @package directive"},o={id:"advanced/package_directive",title:"The @package directive",description:"A `@package directive` specifies a common package for all nodes in the config file.",source:"@site/docs/advanced/package_directive.md",permalink:"/docs/next/advanced/package_directive",editUrl:"https://github.com/facebookresearch/hydra/edit/master/website/docs/advanced/package_directive.md",version:"next",lastUpdatedBy:"Omry Yadan",lastUpdatedAt:1589946282,sidebar:"Docs",previous:{title:"Nevergrad Sweeper plugin",permalink:"/docs/next/plugins/nevergrad_sweeper"},next:{title:"Config search path",permalink:"/docs/next/advanced/search_path"}},l=[{value:"Package directive specification",id:"package-directive-specification",children:[]},{value:"Goals",id:"goals",children:[]},{value:"Interpreting the @package directive",id:"interpreting-the-package-directive",children:[{value:"A config with a literal package",id:"a-config-with-a-literal-package",children:[]},{value:"A config using <code>_group_</code> and <code>_name_</code>",id:"a-config-using-_group_-and-_name_",children:[]}]},{value:"Default packages",id:"default-packages",children:[]}],p={rightToc:l};function b(e){var a=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(t.a)({},p,n,{components:a,mdxType:"MDXLayout"}),Object(i.b)("p",null,"A ",Object(i.b)("inlineCode",{parentName:"p"},"@package directive")," specifies a common package for all nodes in the config file.\nIt must be placed at the top of each ",Object(i.b)("inlineCode",{parentName:"p"},"config group file"),"."),Object(i.b)("p",null,"A ",Object(i.b)("inlineCode",{parentName:"p"},"package")," is the parent path of a config node (e.g ",Object(i.b)("inlineCode",{parentName:"p"},"hydra.launcher"),")."),Object(i.b)("h3",{id:"package-directive-specification"},"Package directive specification"),Object(i.b)("pre",null,Object(i.b)("code",Object(t.a)({parentName:"pre"},{}),"# @package PACKAGE_SPEC\n  PACKAGE_SPEC: _global_ | COMPONENT[.COMPONENT]*\n  OMPONENT: string | _group_ | _name_\n\nKeywords: \n _global_ : the top level package (equivalent to the empty string).\n _group_  : the config group in dot notation: foo/bar/zoo.yaml -> foo.bar\n _name_   : the config file name: foo/bar/zoo.yaml -> zoo\n")),Object(i.b)("p",null,"Package directive examples:"),Object(i.b)("pre",null,Object(i.b)("code",Object(t.a)({parentName:"pre"},{className:"language-python"}),"# @package foo.bar\n# @package _global_\n# @package _group_\n# @package _group_._name_\n# @package foo._group_._name_\n")),Object(i.b)("h2",{id:"goals"},"Goals"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Formalize the convention that the package of the config file matches the config group name",Object(i.b)("br",{parentName:"li"}),"(The package of ",Object(i.b)("inlineCode",{parentName:"li"},"hydra/launcher/basic.yaml")," is ",Object(i.b)("inlineCode",{parentName:"li"},"hydra.launcher"),")."),Object(i.b)("li",{parentName:"ul"},"A config file can be merged into multiple packages in the final config object via package overrides.  ")),Object(i.b)("h2",{id:"interpreting-the-package-directive"},"Interpreting the @package directive"),Object(i.b)("h3",{id:"a-config-with-a-literal-package"},"A config with a literal package"),Object(i.b)("pre",null,Object(i.b)("code",Object(t.a)({parentName:"pre"},{className:"language-yaml"}),"# @package container\ndb:\n  host: localhost\nwebserver:\n  domain: example.com\n")),Object(i.b)("p",null,"Is equivalent to:"),Object(i.b)("pre",null,Object(i.b)("code",Object(t.a)({parentName:"pre"},{className:"language-yaml"}),"container:\n    db:\n      host: localhost\n    webserver:\n      domain: example.com\n")),Object(i.b)("h3",{id:"a-config-using-_group_-and-_name_"},"A config using ",Object(i.b)("inlineCode",{parentName:"h3"},"_group_")," and ",Object(i.b)("inlineCode",{parentName:"h3"},"_name_")),Object(i.b)("pre",null,Object(i.b)("code",Object(t.a)({parentName:"pre"},{className:"language-yaml",metastring:'title="env/prod.yaml" {1}',title:'"env/prod.yaml"',"{1}":!0}),"# @package _group_._name_\ndb:\n  host: 10.0.0.11\nwebserver:\n  domain: example.com\n")),Object(i.b)("p",null,"Is equivalent to:"),Object(i.b)("pre",null,Object(i.b)("code",Object(t.a)({parentName:"pre"},{className:"language-yaml"}),"env:\n  prod:\n    db:\n      host: 10.0.0.11\n    webserver:\n      domain: example.com\n")),Object(i.b)("h2",{id:"default-packages"},"Default packages"),Object(i.b)("p",null,"The primary config, named in ",Object(i.b)("inlineCode",{parentName:"p"},"@hydra.main()")," should not have a package directive."),Object(i.b)("p",null,"For config files in config groups the default depends on the version:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"In Hydra 0.11, there was an implicit default of ",Object(i.b)("inlineCode",{parentName:"li"},"_global_")),Object(i.b)("li",{parentName:"ul"},"Hydra 1.0 the default is ",Object(i.b)("inlineCode",{parentName:"li"},"_global_"),Object(i.b)("br",{parentName:"li"}),"A warning is issued for each ",Object(i.b)("strong",{parentName:"li"},"config group file")," without a ",Object(i.b)("inlineCode",{parentName:"li"},"@package")," directive."),Object(i.b)("li",{parentName:"ul"},"In Hydra 1.1 the default for ",Object(i.b)("strong",{parentName:"li"},"config group files")," will become ",Object(i.b)("inlineCode",{parentName:"li"},"_group_"))),Object(i.b)("p",null,"By adding an explicit ",Object(i.b)("inlineCode",{parentName:"p"},"@package")," to your configs files, you guarantee that they",Object(i.b)("br",{parentName:"p"}),"\n","will not break when you upgrade to Hydra 1.1."))}b.isMDXComponent=!0},229:function(e,a,n){"use strict";n.d(a,"a",(function(){return d})),n.d(a,"b",(function(){return s}));var t=n(0),r=n.n(t);function i(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function c(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function o(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?c(Object(n),!0).forEach((function(a){i(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function l(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),b=function(e){var a=r.a.useContext(p),n=a;return e&&(n="function"==typeof e?e(a):o({},a,{},e)),n},d=function(e){var a=b(e.components);return r.a.createElement(p.Provider,{value:a},e.children)},g={inlineCode:"code",wrapper:function(e){var a=e.children;return r.a.createElement(r.a.Fragment,{},a)}},u=Object(t.forwardRef)((function(e,a){var n=e.components,t=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=b(n),u=t,s=d["".concat(c,".").concat(u)]||d[u]||g[u]||i;return n?r.a.createElement(s,o({ref:a},p,{components:n})):r.a.createElement(s,o({ref:a},p))}));function s(e,a){var n=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var i=n.length,c=new Array(i);c[0]=u;var o={};for(var l in a)hasOwnProperty.call(a,l)&&(o[l]=a[l]);o.originalType=e,o.mdxType="string"==typeof e?e:t,c[1]=o;for(var p=2;p<i;p++)c[p]=n[p];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);