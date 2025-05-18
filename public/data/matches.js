// public/data/matches.js
const matches = [
  {
    id: "match-1",
    category: "Cricket",
    title: "Cricket | IPL",
    leagueLogo: "https://encrypted-tbn0.gstatic.com/images?q=CCRT-eFQpZW6oSCeedeyIkRyCWRTw7ntVrSRQrobMBCK0m9aKSR299mgyMcY&s=10",
    teamA: { name: "LSG", logo: "https://img.sofascore.com/api/v1/team/410010/image" },
    teamB: { name: "CSK", logo: "https://img.sofascore.com/api/v1/team/187777/image" },
    startTime: new Date("2025-05-03T00:10:00").getTime(),
    endTime: new Date("2025-05-04T20:59:00").getTime(),
    links: [
      { title: "Willow Sports", url: "https://flixtvlive.vercel.app/tnt1.m3u8" },
      { title: "Star Hindi", url: "https://epltv1.github.io/cbs.m3u8" },
      { title: "Sky Cricket", url: "https://epltv1.github.io/bt1.m3u8" },
      { title: "Willow 2", url: "https://example.com/willow2.m3u8" }
    ]
  },
  {
    id: "match-2",
    category: "Football",
    title: "Football | Serie A",
    leagueLogo: "https://upload.wikimedia.org/wikipedia/en/thumb/e/e3/Serie_A_logo_%282019%29.svg/1200px-Serie_A_logo_%282019%29.svg.png",
    teamA: { name: "Inter", logo: "https://img.sofascore.com/api/v1/team/2697/image" },
    teamB: { name: "Milan", logo: "https://img.sofascore.com/api/v1/team/2686/image" },
    startTime: new Date("2025-05-04T15:00:00").getTime(),
    endTime: new Date("2025-05-04T17:00:00").getTime(),
    links: [
      { title: "Sky Sports", url: "https://example.com/skymain.m3u8" },
      { title: "Optus Sports", url: "https://example.com/optus1.m3u8" }
    ]
  },
  {
    id: "match-3",
    category: "Football",
    title: "Football | La Liga",
    leagueLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/La_Liga_Logo_%282019%29.svg/1200px-La_Liga_Logo_%282019%29.svg.png",
    teamA: { name: "Real Madrid", logo: "https://img.sofascore.com/api/v1/team/2829/image" },
    teamB: { name: "Barcelona", logo: "https://img.sofascore.com/api/v1/team/2817/image" },
    startTime: new Date("2025-05-05T20:00:00").getTime(),
    endTime: new Date("2025-05-05T22:00:00").getTime(),
    links: [
      { title: "LaLiga TV", url: "https://example.com/laligafhd.m3u8" },
      { title: "SuperSport", url: "https://example.com/sliga.m3u8" }
    ]
  },
  {
    id: "match-4",
    category: "Motorsport",
    title: "Motorsport | MotoGP",
    leagueLogo: "https://upload.wikimedia.org/wikipedia/en/thumb/2/20/MotoGP_Logo.svg/1200px-MotoGP_Logo.svg.png",
    teamA: { name: "M. Marquez", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Marc_Marquez_2019.svg/120px-Marc_Marquez_2019.svg.png" },
    teamB: { name: "F. Bagnaia", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Francesco_Bagnaia_2018.svg/120px-Francesco_Bagnaia_2018.svg.png" },
    startTime: new Date("2025-05-06T14:00:00").getTime(),
    endTime: new Date("2025-05-06T16:00:00").getTime(),
    links: [
      { title: "MotoGP Stream", url: "https://example.com/motogpstream.m3u8" }
    ]
  },
  {
    id: "match-5",
    category: "Motorsport",
    title: "Motorsport | F1",
    leagueLogo: "https://images.seeklogo.com/logo-png/32/2/formula-one-2017-logo-png_seeklogo-322033.png",
    teamA: { name: "L. Hamilton", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Lewis_Hamilton_2020.svg/120px-Lewis_Hamilton_2020.svg.png" },
    teamB: { name: "M. Verstappen", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Max_Verstappen_2021.svg/120px-Max_Verstappen_2021.svg.png" },
    startTime: new Date("2025-05-07T15:00:00").getTime(),
    endTime: new Date("2025-05-07T17:00:00").getTime(),
    links: [
      { title: "Sky F1", url: "https://example.com/skyf1.m3u8" },
      { title: "F1 Stream", url: "https://example.com/f1stream.m3u8" }
    ]
  },
  {
    id: "match-6",
    category: "Wrestling",
    title: "Wrestling | SmackDown",
    leagueLogo: "https://upload.wikimedia.org/wikipedia/en/thumb/3/3f/WWE_SmackDown_Logo.svg/1200px-WWE_SmackDown_Logo.svg.png",
    teamA: { name: "Roman Reigns", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Roman_Reigns_April_2014.jpg/120px-Roman_Reigns_April_2014.jpg" },
    teamB: { name: "Cody Rhodes", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Cody_Rhodes_AEW_2019.jpg/120px-Cody_Rhodes_AEW_2019.jpg" },
    startTime: new Date("2025-05-08T20:00:00").getTime(),
    endTime: new Date("2025-05-08T22:00:00").getTime(),
    links: [
      { title: "SmackDown Stream", url: "https://example.com/smackdownstream.m3u8" }
    ]
  },
  {
    id: "match-7",
    category: "Football",
    title: "Football | Premier League",
    leagueLogo: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f2/Premier_League_Logo.svg/1200px-Premier_League_Logo.svg.png",
    teamA: { name: "Manchester United", logo: "https://img.sofascore.com/api/v1/team/35/image" },
    teamB: { name: "Liverpool", logo: "https://img.sofascore.com/api/v1/team/44/image" },
    startTime: new Date("2025-05-09T15:00:00").getTime(),
    endTime: new Date("2025-05-09T17:00:00").getTime(),
    links: [
      { title: "TNT Sports", url: "https://flixtvlive.vercel.app/tnt2.m3u8" },
      { title: "ITV 1", url: "https://epltv1.github.io/itv1.m3u8" }
    ]
  }
];

export default matches;
