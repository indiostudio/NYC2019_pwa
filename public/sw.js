/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 
 Controle de versão: 2.0
 
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "0a27a4163254fc8fce870c8cc3a3f94f"
  },
  {
    "url": "app.manifest",
    "revision": "b52bf6b6381243f795110add49011842"
  },
  {
    "url": "css/header.css",
    "revision": "6d3f4839d695dfa1798d6def02f2382d"
  },
  {
    "url": "css/index.css",
    "revision": "df3fc14e134bad5a0ff8c63d1395c77a"
  },
  {
    "url": "css/reset.css",
    "revision": "eee8961969612748b2abb81ad3e852e5"
  },
  {
    "url": "css/tabelas.css",
    "revision": "edbbb0b0129df6a91a23f7b9b4c45796"
  },
  {
    "url": "images/agenda_evento.png",
    "revision": "fc1ba9c11cbb2a2d8d6e532fb6128fe9"
  },
  {
    "url": "images/amanda.jpg",
    "revision": "f025b72ba4b2a32074a21b5a12f50808"
  },
  {
    "url": "images/bem_vindos.png",
    "revision": "d01e9bd517234f76b689dbf868486159"
  },
  {
    "url": "images/bg.jpg",
    "revision": "9ca32c8eac464c6d3adc328f1187a3e1"
  },
  {
    "url": "images/bg.png",
    "revision": "904d460e19f3c4a0d90518d57d9fb0c9"
  },
  {
    "url": "images/calcados.png",
    "revision": "d321214bd567d3648e33ccb0e5c95102"
  },
  {
    "url": "images/chat.png",
    "revision": "73c175011a65fb6119e5ca2c56e46b55"
  },
  {
    "url": "images/dicas_viagem.png",
    "revision": "741330a3fa5a02cb9f21010ead4acba4"
  },
  {
    "url": "images/email.png",
    "revision": "f1a7266087e83726268afe572fb64585"
  },
  {
    "url": "images/equipe_apoio.png",
    "revision": "1a13482dd069309ac5c9b14f701e78e9"
  },
  {
    "url": "images/favicon.png",
    "revision": "8246c55e68b7b5cd392663f0afc404b6"
  },
  {
    "url": "images/gabriela.jpg",
    "revision": "f1494e78dc23ef69d49778d4300ae4e5"
  },
  {
    "url": "images/gps.png",
    "revision": "bcd312b7726ea678c91de2d78d59e176"
  },
  {
    "url": "images/hotel_evento.png",
    "revision": "c3129292a14432b1bed68acae6a0650b"
  },
  {
    "url": "images/icon_app.png",
    "revision": "f04a18c8286854329fa3f439d7a7d30a"
  },
  {
    "url": "images/local_evento.png",
    "revision": "081b8425ebc86a0bfa38eefd13ad94ca"
  },
  {
    "url": "images/logo.png",
    "revision": "32771e85dd83874a2825a95690fbc37d"
  },
  {
    "url": "images/phone.png",
    "revision": "11b1ab50124bc197d375ab109ef6805f"
  },
  {
    "url": "images/priscila.jpg",
    "revision": "a1c7e8a157ecabbeb1e50a445d14cf21"
  },
  {
    "url": "images/ray.jpg",
    "revision": "df6809873fb69bef599e575be32dd4f5"
  },
  {
    "url": "images/roupas.png",
    "revision": "5f6cf9d5053e99b28cd296f50b24fa0b"
  },
  {
    "url": "images/sobre_evento.png",
    "revision": "d282f83e7d63280c0517a94880578339"
  },
  {
    "url": "images/sobre_sj.png",
    "revision": "e7a526709c4eaa3ccff268a0f1409e4d"
  },
  {
    "url": "images/social/facebook.png",
    "revision": "78a523829df3e46d87e93f098e85399a"
  },
  {
    "url": "images/social/instagram.png",
    "revision": "b6f577e86f6e528b4f3aa2a88bb5478a"
  },
  {
    "url": "images/social/pinterest.png",
    "revision": "4653c8159c7b6b3037bd8086082fc350"
  },
  {
    "url": "images/social/twitter.png",
    "revision": "7f9474bfd92fca5cdd523c62fde452c4"
  },
  {
    "url": "images/thiago.jpg",
    "revision": "bffbee0f948f4f3ed5a7f532dd1ea609"
  },
  {
    "url": "images/vts_capas/adidas.jpg",
    "revision": "c27c26381d3f9a8dbb21673ecd2c3662"
  },
  {
    "url": "images/vts_capas/amazon4stars.jpg",
    "revision": "5d9d01b1eb4087d3f89f7c64af8be563"
  },
  {
    "url": "images/vts_capas/amazongo.jpg",
    "revision": "3d3017aead6c253a778cc0499c12a012"
  },
  {
    "url": "images/vts_capas/american_girl.jpg",
    "revision": "5e357a1c03730c61fe9fa1ac75bb5d9f"
  },
  {
    "url": "images/vts_capas/b8ta.jpg",
    "revision": "a46ee65228f24a35a7beb67a63963304"
  },
  {
    "url": "images/vts_capas/bonobos.jpg",
    "revision": "3b74dc2b070f6a7718b12cecd58a07b8"
  },
  {
    "url": "images/vts_capas/bottega_veneta.jpg",
    "revision": "4d93158d4c505a84514538bb9aafc969"
  },
  {
    "url": "images/vts_capas/chobani.jpg",
    "revision": "08f3f21edc2bedf90661448b07beb0bd"
  },
  {
    "url": "images/vts_capas/citarella.jpg",
    "revision": "30ce9be2816b9d980e6a95d01aafbacf"
  },
  {
    "url": "images/vts_capas/coach.jpg",
    "revision": "c41b0eb809becff09e2ba969fec3e86e"
  },
  {
    "url": "images/vts_capas/converse.jpg",
    "revision": "ffdfac0994a526ff4f8ecb3b31483b0b"
  },
  {
    "url": "images/vts_capas/covergirl.jpg",
    "revision": "4f387710963a0d09973c8754d0d525a2"
  },
  {
    "url": "images/vts_capas/dean_deluca.jpg",
    "revision": "9a500d1861752390d260b64ee8a5cd80"
  },
  {
    "url": "images/vts_capas/dior.jpg",
    "revision": "8ccd27257e89b2bfad31b287b937c0a0"
  },
  {
    "url": "images/vts_capas/dolby.jpg",
    "revision": "01181888e93e5d7b90b7324d9ec739c9"
  },
  {
    "url": "images/vts_capas/dreamery.jpg",
    "revision": "b81a4454ae57f0fe11872e9a4fb00ad0"
  },
  {
    "url": "images/vts_capas/dyson.jpg",
    "revision": "cbab8ad731165d74a9b9af06520e086f"
  },
  {
    "url": "images/vts_capas/gentle_monster.jpg",
    "revision": "569ec81f225516d4d0177acffde0b676"
  },
  {
    "url": "images/vts_capas/glossier.jpg",
    "revision": "55438ab780a129ea15702871b37d5448"
  },
  {
    "url": "images/vts_capas/gucci.jpg",
    "revision": "09769aee70fa5028b8a4b11d33f2897d"
  },
  {
    "url": "images/vts_capas/hersheys.jpg",
    "revision": "b65125225ce53871d81d0ec467accadf"
  },
  {
    "url": "images/vts_capas/ikea.jpg",
    "revision": "5c412c31ab28b875dffac4b7b957a70d"
  },
  {
    "url": "images/vts_capas/le_district.jpg",
    "revision": "a61001c6a6c122f5c3b4392fc82635c9"
  },
  {
    "url": "images/vts_capas/levis.jpg",
    "revision": "46e65dc370cbd5907a916aabe87b199f"
  },
  {
    "url": "images/vts_capas/little_spain.jpg",
    "revision": "f30c99097989244bcf64994bb63f764b"
  },
  {
    "url": "images/vts_capas/lululemon.jpg",
    "revision": "e4afc1c0f894b70efe7d6d9c43e15222"
  },
  {
    "url": "images/vts_capas/medmen.jpg",
    "revision": "4b0601a045f7b334d963fc5f8949411d"
  },
  {
    "url": "images/vts_capas/microsoft.jpg",
    "revision": "1b5f3164b7792d759b697a474d01fc8d"
  },
  {
    "url": "images/vts_capas/muji.jpg",
    "revision": "f7f067b97c6f9d8313828a6e87bb6fb7"
  },
  {
    "url": "images/vts_capas/nike.jpg",
    "revision": "f29967c4e040cf6174a5cfa96df3eeda"
  },
  {
    "url": "images/vts_capas/off_white.jpg",
    "revision": "999b7cbfb4923d19cdb706fefe1a989c"
  },
  {
    "url": "images/vts_capas/rh.jpg",
    "revision": "0a052e0f79f3d23cc561269aad14c1fc"
  },
  {
    "url": "images/vts_capas/samsung837.jpg",
    "revision": "df7f9270f9c0b9e697817a263c238567"
  },
  {
    "url": "images/vts_capas/sephora.jpg",
    "revision": "d5fcddff37d3a1fb3c025ba199c7c132"
  },
  {
    "url": "images/vts_capas/sonos.jpg",
    "revision": "607e8ee54658c89fda2ebb76f85aa18b"
  },
  {
    "url": "images/vts_capas/starbucks.jpg",
    "revision": "5ef9bb494fdaa298297d96764dd90776"
  },
  {
    "url": "images/vts_capas/story.jpg",
    "revision": "d0451561bab3a5afdfb1cb5d19e5d799"
  },
  {
    "url": "images/vts_capas/tesla.jpg",
    "revision": "e89af0f7ef63f984185f71b681e0a0c4"
  },
  {
    "url": "images/vts_capas/the_conservatory.jpg",
    "revision": "d3179288d5f0f5f02f25cd5532d014e7"
  },
  {
    "url": "images/vts_capas/the_drugstore.jpg",
    "revision": "9c6fba86f364008e56a0a0ea11961197"
  },
  {
    "url": "images/vts_capas/the_phluid_project.jpg",
    "revision": "9e06bad89fb1959a16516f33efec8516"
  },
  {
    "url": "images/vts_capas/the_real_real.jpg",
    "revision": "e8755df0a836dbeb5e67c157b7f6a723"
  },
  {
    "url": "images/vts_capas/tiffany.jpg",
    "revision": "8ebc69caca5aec07fd8a4279298d854c"
  },
  {
    "url": "images/vts_capas/trader_joes.jpg",
    "revision": "dc825f4c2b4e60e5a9148514136378b2"
  },
  {
    "url": "images/vts_capas/warby_parker.jpg",
    "revision": "5fab4c33114bbdaf1d3ab17f93e93a1a"
  },
  {
    "url": "images/vts_capas/whole_foods.jpg",
    "revision": "bc4c64846590a9d21a08d5406406a424"
  },
  {
    "url": "images/vts.png",
    "revision": "203b1fd8ec116daa13b664da54188c39"
  },
  {
    "url": "index.html",
    "revision": "2900d86256cbc8b28c9d159e90d55bab"
  },
  {
    "url": "local_evento.png",
    "revision": "081b8425ebc86a0bfa38eefd13ad94ca"
  },
  {
    "url": "manifest.json",
    "revision": "b52bf6b6381243f795110add49011842"
  },
  {
    "url": "offline.json",
    "revision": "2456fdffdabc296efe7e562c00fb8ba4"
  },
  {
    "url": "offline.manifest",
    "revision": "402a6927716434411d80fe75ad20c3ed"
  },
  {
    "url": "pages/agenda_evento.html",
    "revision": "395010560ddc5d62d92483a6ec685aa9"
  },
  {
    "url": "pages/agenda_evento/catorze_junho.html",
    "revision": "d143b165fa8952ff772b27332e6fac67"
  },
  {
    "url": "pages/agenda_evento/dez_junho.html",
    "revision": "1be7221a9647a3805a3dd2c86c278abf"
  },
  {
    "url": "pages/agenda_evento/doze_junho.html",
    "revision": "d40179317639555ccdbde338ab9ff73f"
  },
  {
    "url": "pages/agenda_evento/nove_junho.html",
    "revision": "c21de9c011e33e59f9f74ba8fba753f3"
  },
  {
    "url": "pages/agenda_evento/onze_junho.html",
    "revision": "941d472235aaaee02343402540b20a24"
  },
  {
    "url": "pages/agenda_evento/treze_junho.html",
    "revision": "841d102b01dc5bf1cb36ebad6efe3224"
  },
  {
    "url": "pages/dicas_viagem.html",
    "revision": "fe86329770b4a51fbf0d60573b408bde"
  },
  {
    "url": "pages/dicas_viagem/calcados.html",
    "revision": "34caada8a7451318b4757dc48485b764"
  },
  {
    "url": "pages/dicas_viagem/dicas_gerais.html",
    "revision": "6d07f98b49f38b6de72ec5c7092a0608"
  },
  {
    "url": "pages/dicas_viagem/dicas_gerais/aplicativos.html",
    "revision": "db5507e8b1d90d680291960ea3099022"
  },
  {
    "url": "pages/dicas_viagem/dicas_gerais/cigarro.html",
    "revision": "9fc5aa6ad96610f8651fef40fb0a53b5"
  },
  {
    "url": "pages/dicas_viagem/dicas_gerais/eletricidade.html",
    "revision": "f99ea98167fdbaf0a79768b6f85c391e"
  },
  {
    "url": "pages/dicas_viagem/dicas_gerais/gorjeta.html",
    "revision": "f47c61897b653b22c2a914ab234d47c7"
  },
  {
    "url": "pages/dicas_viagem/dicas_gerais/metro.html",
    "revision": "26945c7cf0b71747400e1443b43f6210"
  },
  {
    "url": "pages/dicas_viagem/dicas_gerais/transfer.html",
    "revision": "cc5f0e0ce74baa7f42c9404e88a4b1cb"
  },
  {
    "url": "pages/dicas_viagem/dicas_gerais/transporte.html",
    "revision": "53c36c2c965ca78414263a2f98187412"
  },
  {
    "url": "pages/dicas_viagem/diversidade_lojas.html",
    "revision": "ad5613b0863628c3b0511d27724c1121"
  },
  {
    "url": "pages/dicas_viagem/diversidade_lojas/bloomingdales.html",
    "revision": "62ec47285227c845282f4306b61f9056"
  },
  {
    "url": "pages/dicas_viagem/diversidade_lojas/century.html",
    "revision": "6553dd693faa0d72259b48bffca5e858"
  },
  {
    "url": "pages/dicas_viagem/diversidade_lojas/macys.html",
    "revision": "cc3bca79f8fa76262154e3513cc50861"
  },
  {
    "url": "pages/dicas_viagem/diversidade_lojas/target.html",
    "revision": "122456b8d59276e34a7b18a7ce5cdd89"
  },
  {
    "url": "pages/dicas_viagem/experiencias_gourmet.html",
    "revision": "61de1a952c03a8e31d48341f1d94d493"
  },
  {
    "url": "pages/dicas_viagem/experiencias_gourmet/9_11.html",
    "revision": "b0e7aa8e1dc84715e720a8baa64d7080"
  },
  {
    "url": "pages/dicas_viagem/experiencias_gourmet/balthazar.html",
    "revision": "d9fd1191fdc8ed932b37e94581142720"
  },
  {
    "url": "pages/dicas_viagem/experiencias_gourmet/buddakan.html",
    "revision": "f92142bf377afad92a8f71494d0cca8f"
  },
  {
    "url": "pages/dicas_viagem/experiencias_gourmet/cafe_wha.html",
    "revision": "1d2bd6c2340b858f7307014a4b4038e3"
  },
  {
    "url": "pages/dicas_viagem/experiencias_gourmet/carmines.html",
    "revision": "c713a90885953fb6d79ef452fb7125e5"
  },
  {
    "url": "pages/dicas_viagem/experiencias_gourmet/chelsea_market.html",
    "revision": "14e00f053298b1ee30b9818208c0471c"
  },
  {
    "url": "pages/dicas_viagem/experiencias_gourmet/complexo_hudson.html",
    "revision": "40072873ef83c4a4e5da50911fe47363"
  },
  {
    "url": "pages/dicas_viagem/experiencias_gourmet/estatua_liberdade.html",
    "revision": "a8a71a084c25c708709cc064bf426308"
  },
  {
    "url": "pages/dicas_viagem/experiencias_gourmet/gallaghers.html",
    "revision": "e086dc332d1f12fed11835f0168f6562"
  },
  {
    "url": "pages/dicas_viagem/experiencias_gourmet/lebilboquet.html",
    "revision": "638d82e294c1b5e372afd10a687922b8"
  },
  {
    "url": "pages/dicas_viagem/experiencias_gourmet/marco_zero.html",
    "revision": "f15b2ec3f3836cce03989ce451fb634c"
  },
  {
    "url": "pages/dicas_viagem/experiencias_gourmet/plaza_food_hall.html",
    "revision": "e0ae2d7a394df8003aae4a1fd76f4d32"
  },
  {
    "url": "pages/dicas_viagem/experiencias_gourmet/serendipity.html",
    "revision": "7f9ba17e79a480ece534998300cb82ac"
  },
  {
    "url": "pages/dicas_viagem/experiencias_gourmet/soho.html",
    "revision": "0d9a7ecc506e7e902f0bd90490549ff8"
  },
  {
    "url": "pages/dicas_viagem/experiencias_gourmet/tao.html",
    "revision": "cc2bc1055569bdbd2ff5282e7c79324a"
  },
  {
    "url": "pages/dicas_viagem/experiencias_gourmet/wall_street.html",
    "revision": "3b6eecf1acc6cbe823df55a59259b127"
  },
  {
    "url": "pages/dicas_viagem/experiencias_gourmet/westfield_world_trade_center.html",
    "revision": "cd2b73c8f3fd9b1ec96d866baa5c1fe2"
  },
  {
    "url": "pages/dicas_viagem/informacoes_uteis.html",
    "revision": "4546da5da00748e4c3be051cd911e088"
  },
  {
    "url": "pages/dicas_viagem/infs_uteis/bagagem_mao.html",
    "revision": "6d4caa3656fbe3dda9856374af98b44a"
  },
  {
    "url": "pages/dicas_viagem/infs_uteis/clima.html",
    "revision": "a577ecd199b9bfe95ffb8aa102213ef5"
  },
  {
    "url": "pages/dicas_viagem/infs_uteis/despacho_bagagem.html",
    "revision": "4cb65cb6b3efed98a0b712a0eed09a1b"
  },
  {
    "url": "pages/dicas_viagem/infs_uteis/documentos.html",
    "revision": "e8671a5ac5f3351e82e0867e58d1077b"
  },
  {
    "url": "pages/dicas_viagem/infs_uteis/dutyfree.html",
    "revision": "0ac47329d5c588ffd5c3a4b3a6a44d61"
  },
  {
    "url": "pages/dicas_viagem/infs_uteis/imigracao.html",
    "revision": "3acfffa1148114d48254e9b85c282c4a"
  },
  {
    "url": "pages/dicas_viagem/infs_uteis/sobre_nyc.html",
    "revision": "1aa359c3f2c82df5d97743b44261c4b8"
  },
  {
    "url": "pages/dicas_viagem/infs_uteis/trajes.html",
    "revision": "4933aa26e9a74b7381b6a72656532338"
  },
  {
    "url": "pages/dicas_viagem/ponto_encontro.html",
    "revision": "0d93952505b588af175a8960a9a352de"
  },
  {
    "url": "pages/dicas_viagem/roupas.html",
    "revision": "6cb1378740c035120af55768d690b7c4"
  },
  {
    "url": "pages/dicas_viagem/tabela_medidas.html",
    "revision": "aee9d93bb5ce5dcee72e191f3d9dd7bf"
  },
  {
    "url": "pages/equipe_apoio.html",
    "revision": "28ef2eec633f1c1d7931fd7e8d309eb0"
  },
  {
    "url": "pages/equipe_apoio/amanda_mageste.html",
    "revision": "b2f64d6c1e44954fcdd0fe84fce81a06"
  },
  {
    "url": "pages/equipe_apoio/equipe_brasil.html",
    "revision": "5c1009592ffff22124be9e6dba08a1e2"
  },
  {
    "url": "pages/equipe_apoio/equipe_eua.html",
    "revision": "8d1d9ef15d10e22ce003d7da4955e057"
  },
  {
    "url": "pages/equipe_apoio/gabriela_medina.html",
    "revision": "fc823d5f90ebaf3d708b865b9571fca8"
  },
  {
    "url": "pages/equipe_apoio/priscila_briones.html",
    "revision": "bdff32da6456e34d065e4663d0dff074"
  },
  {
    "url": "pages/equipe_apoio/ray.html",
    "revision": "94aaba96347d202dabe5a5b915a3e321"
  },
  {
    "url": "pages/equipe_apoio/thiago.html",
    "revision": "e07febc921a468b46ec0962831df05c4"
  },
  {
    "url": "pages/local_evento.html",
    "revision": "b5678cb378b9bf5fb5a5f8f7a23350d8"
  },
  {
    "url": "pages/sobre_evento.html",
    "revision": "7d1226354f54a7fac241efd6e204ee34"
  },
  {
    "url": "pages/sobre_evento/boas_vindas.html",
    "revision": "ad1cd1c33dbd27098eee01564084477d"
  },
  {
    "url": "pages/sobre_evento/local_evento.html",
    "revision": "9ca4f0ab0ecd9bdce9e077b5f5c84987"
  },
  {
    "url": "pages/sobre_evento/sobre_sj.html",
    "revision": "7f99bb243086d2e9d70a9d28f47aa2a3"
  },
  {
    "url": "pages/vts.html",
    "revision": "a9acb73eaf7de5a9f7c95d43b8f962c0"
  },
  {
    "url": "pages/vts/adidas.html",
    "revision": "96d1f7e9646474247238d54a2a602316"
  },
  {
    "url": "pages/vts/amazon_fourstars.html",
    "revision": "305c8a022c45704122586d4b93919069"
  },
  {
    "url": "pages/vts/amazon_go.html",
    "revision": "a4151a43618f4de3f9fce051b5edea17"
  },
  {
    "url": "pages/vts/b8ta.html",
    "revision": "392552777b1f30dc5f181b25d2bbe1ab"
  },
  {
    "url": "pages/vts/bonobos.html",
    "revision": "a22fe7a2b5aaf6c062f71b83c2ba102e"
  },
  {
    "url": "pages/vts/bottega_veneta.html",
    "revision": "700e8220f14726c6b4a8758e8abe56c2"
  },
  {
    "url": "pages/vts/chobani.html",
    "revision": "a2e6aa21cc6c6a01b29316b57a331b23"
  },
  {
    "url": "pages/vts/citarella.html",
    "revision": "698c10c8551fab9b21fc763f6c2ee229"
  },
  {
    "url": "pages/vts/coach.html",
    "revision": "7f3f13846eeeb53685b8c3496a55fc2f"
  },
  {
    "url": "pages/vts/converse.html",
    "revision": "74b44ea1c594c7f372ee230abe09ffe4"
  },
  {
    "url": "pages/vts/covergirl.html",
    "revision": "bd8069679e366385c3cd0a0915d8477c"
  },
  {
    "url": "pages/vts/dean_deluca.html",
    "revision": "bf3594c272aaec3859575aaf50c344e8"
  },
  {
    "url": "pages/vts/dior.html",
    "revision": "a70ffe9905296d541a7d57d65b2a98fe"
  },
  {
    "url": "pages/vts/dolby.html",
    "revision": "3e224d28b73e7dbb2992bc31f4e8564e"
  },
  {
    "url": "pages/vts/dreamery_casper.html",
    "revision": "5ca7951270903868d88aa65082a0090c"
  },
  {
    "url": "pages/vts/dyson.html",
    "revision": "e7e98c586f77b025d76746935abc2c93"
  },
  {
    "url": "pages/vts/gentle_monster.html",
    "revision": "02add9f32aae3c886a51ab856d5b100c"
  },
  {
    "url": "pages/vts/glossier.html",
    "revision": "2132fc5746d6db12a32cffe6f0fff187"
  },
  {
    "url": "pages/vts/gucci.html",
    "revision": "1d33d8033832416cf5865193f8dc8077"
  },
  {
    "url": "pages/vts/hersheys.html",
    "revision": "bb95275c635bbe7ac819c3221c55eb06"
  },
  {
    "url": "pages/vts/ikea.html",
    "revision": "67322eef9d3aae28dfa461cfd66088d2"
  },
  {
    "url": "pages/vts/ledistrict.html",
    "revision": "1398f0fa0ed3f629d37942df0f226e4e"
  },
  {
    "url": "pages/vts/levis.html",
    "revision": "adadd1a6380cc2fa1937d41aa7ead7f0"
  },
  {
    "url": "pages/vts/little_spain.html",
    "revision": "7b417e3e3e6df8b6dfe77e1fa290357b"
  },
  {
    "url": "pages/vts/medmen.html",
    "revision": "df7bb092ee102aab3fea807b194a06dd"
  },
  {
    "url": "pages/vts/microsoft.html",
    "revision": "fef7a70447ed8acb1ae4e894db22dc8e"
  },
  {
    "url": "pages/vts/muji.html",
    "revision": "7561ed3a5ae234b5546ba8fe9d523353"
  },
  {
    "url": "pages/vts/nike.html",
    "revision": "3024731da5a941aa64cea0ef1f9ed6bb"
  },
  {
    "url": "pages/vts/offwhite.html",
    "revision": "6f33762169fdd31ba0d5bdf12d0ca0cb"
  },
  {
    "url": "pages/vts/rh.html",
    "revision": "2d181673a9d6329731a939b30845646a"
  },
  {
    "url": "pages/vts/samsung.html",
    "revision": "b8e8d797d73a38343dc31c7c840b6a9a"
  },
  {
    "url": "pages/vts/sephora.html",
    "revision": "dab7bee05c092c411314b7fb2b4edfa8"
  },
  {
    "url": "pages/vts/sonos.html",
    "revision": "f6d4c6d2d3450ba8b2a9c44c779417e5"
  },
  {
    "url": "pages/vts/starbucks.html",
    "revision": "5c2d72f1602be84d2bdac8c136299137"
  },
  {
    "url": "pages/vts/tesla.html",
    "revision": "26373701e53890644033d07f75e2a873"
  },
  {
    "url": "pages/vts/the_conservatory.html",
    "revision": "7bcf003c8fe1b86bef0ec37100cd8eb2"
  },
  {
    "url": "pages/vts/the_drugstore.html",
    "revision": "04bd5211b2574edabf912c39e71be7d3"
  },
  {
    "url": "pages/vts/the_phluid_project.html",
    "revision": "80469292c39b25d0fb6ce0f9f45955d8"
  },
  {
    "url": "pages/vts/the_realreal.html",
    "revision": "b151388f9a62a91063bee224c14b5b72"
  },
  {
    "url": "pages/vts/tiffany.html",
    "revision": "326fa2c0d983ac40cd0c65147f9ca750"
  },
  {
    "url": "pages/vts/trader_joes.html",
    "revision": "4d945e2cf831d665e02f459586d330fd"
  },
  {
    "url": "pages/vts/warby_parker.html",
    "revision": "7372b4bbe93318890b56ce0e4b35eff6"
  },
  {
    "url": "pages/vts/whole_foods.html",
    "revision": "9063152128cad4c5e8de560a0d18210d"
  },
  {
    "url": "popup.js",
    "revision": "c20cc084dcc6e25d1cf99a49d7c5acd8"
  },
  {
    "url": "rodar_manifest.js",
    "revision": "1459a77cb9582980ebfe8d2c7cf7ba80"
  },
  {
    "url": "service-worker.js",
    "revision": "4acf052ed1bc67ade12718aca9ecfbc2"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
