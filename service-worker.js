if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let f=Promise.resolve();return i[e]||(f=new Promise(async f=>{if("document"in self){const i=document.createElement("script");i.src=e,document.head.appendChild(i),i.onload=f}else importScripts(e),f()})),f.then(()=>{if(!i[e])throw new Error(`Module ${e} didn’t register its module`);return i[e]})},f=(f,i)=>{Promise.all(f.map(e)).then(e=>i(1===e.length?e[0]:e))},i={require:Promise.resolve(f)};self.define=(f,a,c)=>{i[f]||(i[f]=Promise.resolve().then(()=>{let i={};const d={uri:location.origin+f.slice(1)};return Promise.all(a.map(f=>{switch(f){case"exports":return i;case"module":return d;default:return e(f)}})).then(e=>{const f=c(...e);return i.default||(i.default=f),i})}))}}define("./service-worker.js",["./workbox-d9851aed"],(function(e){"use strict";e.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"amp_prob.67f3eb19.gif",revision:"8fb3d6a0e1afb51303cd7cbc7a68ab64"},{url:"app.456f2b9f.js",revision:"cd47484c9c9b259c9b2648ed49b471d8"},{url:"app.456f2b9f.js.map",revision:"04db2a8fb85d8dfc99d5e8f7dfa244cf"},{url:"app.a4a3dbcc.css",revision:"5f8f8a7ba5463e936cf90b2fbd944be9"},{url:"app.a4a3dbcc.css.map",revision:"f67f8aa86e8b5a54560628f8a1c86070"},{url:"apple-touch-icon.ac9005b8.png",revision:"7613283f375c78224973745e7e240dba"},{url:"attack.0401f9b5.gif",revision:"0fd3fcc6ba35a9015aa7f0017d96a079"},{url:"bad_landing.059298ec.gif",revision:"c0fd6841d9588502fc25a95982815ca2"},{url:"bicycle.612f42cd.gif",revision:"c772f806a2882cd898871ad24dca3636"},{url:"blade.205f6534.gif",revision:"adfccd6a72515359c1c283f912b67616"},{url:"bluebalcony.cd0cf406.gif",revision:"5fee8e4a9fea271529cfd8828dd990d5"},{url:"bridge_raining.d7ff069f.gif",revision:"c5588bc08a0325b55b596e03adfd4e5b"},{url:"bridge.8164b038.gif",revision:"83d3f4e13ea7dc7a8d779d3bd4d38880"},{url:"cacao_and_coffee_shop.fa8f510b.gif",revision:"e4e9b5a67459c5a9b7690e6bd59b818e"},{url:"castle.f104e826.gif",revision:"45cf0a4bef631dbbc455d77ae5af58f6"},{url:"cave.98f0a1a7.gif",revision:"71c10c3502f09379619a2eaab25473da"},{url:"cemetry.dbb8195f.gif",revision:"d98608cf5164ae9709055ec2bc6a3d41"},{url:"citymirror.8a384890.gif",revision:"2aa3838070be211b97871e28d8da304a"},{url:"coast.3c3b4dd8.gif",revision:"fbbc2c11cd08167efbb80c6b31fd2c67"},{url:"coffeeinrain.057db53d.gif",revision:"8db746ea0f28bdd22eae8b3ee10ac16a"},{url:"controlroom.94ddd7bb.gif",revision:"adf8e4ba52a53bccd2ff21086ac5d684"},{url:"daftpunk.ac2e0373.gif",revision:"bce840d1995f447f8d0b0fdde9ce6940"},{url:"dark_pillar.a94714fc.gif",revision:"83418edd81082f28ad0338ae6719545f"},{url:"dawn.fdf2420a.gif",revision:"51fc786cd57a2636729ad04aca5be3f7"},{url:"drift.10389479.gif",revision:"b8fc3c90387aa1fcf3077eb5b2ad8c63"},{url:"droidcrime.739670b4.gif",revision:"1df2dcabe7ce9d70bb5adf7f4eb5e0c8"},{url:"echoesfromneals.b72bfeae.gif",revision:"c3fcb1ae9bf9b577609a0c11828edc39"},{url:"elderorc.2af75d04.gif",revision:"8c3f7a1af81e71e08d4905b47d028fc3"},{url:"exodus.b5109263.gif",revision:"a98518b3e40be4b69fadbdcbd811265f"},{url:"factory5.30e19b7e.gif",revision:"16f08611c410775d241b260b63f3f994"},{url:"falls.2ad36c78.gif",revision:"a1740510156c101c3157ba3f44f7f517"},{url:"familydinner.8bf8eb97.gif",revision:"d5caac43611c4347b12f4e608531ef4c"},{url:"favicon-16x16.264ce4b4.png",revision:"beea07e30da4cb9d06fff8a32b895404"},{url:"favicon-192x192.e0b72096.png",revision:"9946e82d5e14641a78ed71ace73cfda0"},{url:"favicon-32x32.17fbc85a.png",revision:"d816f8a03d4c1c79bd7dc2bfcfb386ec"},{url:"favicon-384x384.0ef22fac.png",revision:"1693ef1c5533ba825e00a6a7009f22aa"},{url:"favicon-512x512.981500b9.png",revision:"554037f5fcc56719eab75b5d45db7ed4"},{url:"favicon-64x64.16f6af31.png",revision:"8ab0fed27a79113636b329326a5b60d4"},{url:"favicon-780x780.48571c5d.png",revision:"0f4b5c825fbda4537773bdee0ab901c1"},{url:"favicon.1d2719ba.png",revision:"c57b3b4c68f5a8231257cc15fad3e9d6"},{url:"fire.d29403fa.gif",revision:"62a986b32bfae82df9117b8e8a243304"},{url:"flower_shop.eec7b14e.gif",revision:"5e0d0e4a4d52ec7946d69f2511cb5ca4"},{url:"forrest.786f22cf.gif",revision:"f5bfa59b348085d983b9f3df179eb1d3"},{url:"future.6ffba18d.gif",revision:"fb4926b3f11054e881ba8f0edf29daa8"},{url:"girlinrain.102ea4cd.gif",revision:"7187b55bd6431fa329c0b8fbf860adda"},{url:"grandcanyon.bf43d07d.gif",revision:"fe2d69dd37645808c324bc7ae242abcf"},{url:"highfloor.642eaf3f.gif",revision:"02e289bf0a736d941aa6fb96f6971ec0"},{url:"highsoceity.fa670c80.gif",revision:"557115307d4575f7f79127b78813fa09"},{url:"horse.255ef787.gif",revision:"6da8838e329412985dceedfe4caecba6"},{url:"index.html",revision:"046c1e0eaabcf1a78c43e168a2208c9c"},{url:"iplayoldgames.3a3bd36d.gif",revision:"cdf40153aafd9b639ea53e514195003c"},{url:"jazznight.d05c83fb.gif",revision:"b5fb2bb4d305c836071d37c3af4fea55"},{url:"lake.1d85666c.gif",revision:"d7c9228380cc62025663d0db6a734aa9"},{url:"last_dance.c2546447.gif",revision:"8aeaad3ebf43f90e08082d52bfdc660c"},{url:"lowlands.61f0f168.gif",revision:"a8cb59a17acb08b6e853452e4b768a57"},{url:"lullaby.30418cf2.gif",revision:"420daf10a5b5fd29f1b1dee48cec824d"},{url:"manifest.webmanifest",revision:"eff5c78f6a98e1bdc9afc9fa45fb9664"},{url:"metro_final.1e4a6a0a.gif",revision:"14995c16e643b21803b037cc584ba2e4"},{url:"midnight_melancholy.1858d08c.gif",revision:"a23f0fa4d39941be847294e3abb89fd2"},{url:"moon.f8699217.png",revision:"a0262cde9649eced64cb9ca6e07faf08"},{url:"motorcycle.4e13d86e.gif",revision:"403471007ed4eae52f7df303d9b5ce6d"},{url:"mountain_mote.1878e24d.gif",revision:"4bf99e54d7154f1ee5d2ef3482381555"},{url:"mountain.cc5103e1.gif",revision:"7acdd32238a1944c16a8ef16d28250f9"},{url:"mstile-150x150.e32d9fb5.png",revision:"cdd3284a98a1e826df77526a58c71b5e"},{url:"mstile-310x150.175aa2d0.png",revision:"1fa8ed8afda9ea6a939bf2cea2a6aaf3"},{url:"mstile-310x310.54dfccb8.png",revision:"9d42eab9dd9ca32ec97668542b34a501"},{url:"mstile-70x70.fc2a286c.png",revision:"065ff8ffe29387af8cd79198c9754c7c"},{url:"nature.32c0ad3d.gif",revision:"24e1067c6046260c972b2bbc4a7b0a84"},{url:"nero_land.d9e9964b.gif",revision:"482f5b5c4feee2774e8756fff20fb4f0"},{url:"nightlytraining.698ac48e.gif",revision:"e72697f0e27e9ffe53089c1ade7593ee"},{url:"nighttrain.41716043.gif",revision:"1b609c74e1a806851c2f284fc02c3e24"},{url:"northlights.f18c4d88.gif",revision:"29ef9e321b1f022b915fc7484a6adda4"},{url:"pilot.cc7f1880.gif",revision:"12fdd71ee63b406046eaae871f54337a"},{url:"player2.3c01b10d.gif",revision:"23cc63f6f2b3235fae8944948886f089"},{url:"rain.35ecd8d9.gif",revision:"0607f21805fb3b735c7d898b00808a9e"},{url:"redbicycle.08d44a1c.gif",revision:"c3874cc8aeaa96dbced439d20180d4c9"},{url:"reddriver.6b03b9fe.gif",revision:"9ac0531d435aa5b19b3a15072b079246"},{url:"ride.d9455c34.gif",revision:"456763039da0e982d9c5f17e1c999c92"},{url:"robot_alley.44e6820b.gif",revision:"c7fd65f77ab3652c858d0305f354ad88"},{url:"sandcastle.5fc99ddf.gif",revision:"0dd8621b0fe51dfe0f9dd4c64a3e4b46"},{url:"sea.7a72368c.gif",revision:"9d3a41e1e7e6dcf1d4bd2fcbc56779e7"},{url:"shootingstars.53343a38.gif",revision:"2ab7ce8bbbe0fb90f3fa11a27caf329c"},{url:"shop.3e543c60.gif",revision:"0f35c11360d27b2d5143e1bebb946680"},{url:"sideshop.e4d7ef7a.gif",revision:"37d760d25a939ac8742c74dd4812310d"},{url:"skate.e362d618.gif",revision:"f81f1cce706dd7fa10fc4f33b1f3aa01"},{url:"snow.3564ed32.gif",revision:"a1af5d23affea8fa99e6cdb7655fa0ee"},{url:"spacecommander.3af06543.gif",revision:"7724393ee806f2a8f3bba54c2d9adc03"},{url:"spaceport.095a6e0d.gif",revision:"61761851ceffa255b4131517c0681929"},{url:"stacking_houses_on_a_windy_day.14651649.gif",revision:"484b325cdb5bdd8bce6d8e3d131fda75"},{url:"streets.216a15af.gif",revision:"e9ef7a90f739e742038cc65e6a87dc91"},{url:"sushi.33018744.gif",revision:"592c1bf221b06929c59b4cd64f406582"},{url:"temple.e3f8d967.gif",revision:"4a72dc37731448e71acbe46c5de4235a"},{url:"thieves.678806c8.gif",revision:"3e73c3bb04042ef5ebcf1e46fb26beee"},{url:"tower.8f7793a0.gif",revision:"af5e02feeb2be11b512f155043e249e1"},{url:"train_city.638e06a1.gif",revision:"483723e0f94bd43ef7b9716aa0d3ce86"},{url:"train.881b561d.gif",revision:"87e75d3779e998715beaae5cebed4e85"},{url:"troll_cave.b488dfcb.gif",revision:"707e158601ac6e3e501034cebd6fd53d"},{url:"tv.d5dc7eab.gif",revision:"94b9c64e1c5d912bcfd3db9c6f988b15"},{url:"underwater.4eeb360c.gif",revision:"b689dda65f247da9a27c6c77f474c84d"},{url:"virtuaverse.f837bdcc.gif",revision:"96ac0d507e1855c117cfd489d903efa4"},{url:"wild_boy.b5838519.gif",revision:"5ec6da30590d19ab4fb8cce77576936d"},{url:"windyday.73bfc4af.gif",revision:"be1f9637b3fa775b8fc7eebf7cee01ad"},{url:"youngatnight.11704b43.gif",revision:"5d8e87900dafa1b8655f767b90348eed"},{url:"zombies.eff44a24.gif",revision:"df218805defd6fa63a6b7b5d0b4d0666"}],{})}));
//# sourceMappingURL=service-worker.js.map
