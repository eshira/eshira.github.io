var p=function(a){a||(a={}),this.m=a.m,this.pr=a.pr,this.cc=a.cc||{},this.s=a.s},Trie=function(){this.hd=new p,this.insert=function(a){a&&0!==a.length&&this.ii(a,0,this.hd)},this.ii=function(a,b,c){var d=a[b],e=a.length-1===b;if(c.cc[d])ch=c.cc[d],e?ch.s=!0:this.ii(a,b+1,ch);else{var f=new p({m:d,pr:c,s:e});c.cc[d]=f,e||this.ii(a,b+1,f)}},this.i=function(a){return a&&0!==a.length?this.zzz(a,this.hd):!1},this. zzz =function(a,b){if(1===a.length&&b&&b.cc[a])return b.cc[a].s;var c=b.cc[a[0]];return c?this.zzz(a.substring(1,a.length),c):!1},this.sr=function(a){var b=this.f(a),c=this.zz(b),d=[];a=a?a.substring(0,a.length-1):"";for(var e in c)d.push(a+c[e]);return d},this.f=function(a){return a&&0!==a.length?this.g(a,this.hd):this.hd},this.g=function(a,b){return b?0===a.length?b:this.g(a.substring(1,a.length),b.cc[a[0]]):null},this.zz=function(a){if(!a)return[];if(this.ise(a.cc))return a.m?[a.m]:[];var b=[];for(var c in a.cc){var d=a.cc[c],e=this.zz(d);for(var f in e)a.m?b.push(a.m+e[f]):b.push(e[f])}return a.s&&b.push(a.m),b},this.ise=function(a){for(var b in a)return!1;return!0}};

