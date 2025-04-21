import {
  NavLink,
  Player,
  Streaming,
  History,
  Competive,
  News,
  Install,
  Faq,
  Rank,
  ImageItem,
} from "@/utils/types";
import { UiText } from "./utils/string";
export const API_URL = process.env.NEXT_PUBLIC_API_URL
  ? process.env.NEXT_PUBLIC_API_URL
  : "";

export const NAV_LINKS: NavLink[] = [
  {
    title: "Game Info",
    url: "#",
    submenu: [
      { title: "Guide", url: "/guide" },
      { title: "News & Articles", url: "/news" },
      { title: "Download", url: "/download" },
    ],
  },
  {
    title: "Leaderboards",
    url: "#",
    submenu: [
      { title: "Clans", url: "/leaderboards?tabs=clans" },
      { title: "Individuals", url: "/leaderboards?tabs=individuals" },
      { title: "Ladder", url: "/leaderboards?tabs=ladder" },
      { title: "History", url: "/leaderboards?tabs=history" },
    ],
  },
  {
    title: "Shop",
    url: "#",
    submenu: [
      { title: "Premium Shop", url: "/shop/premium" },
      { title: "V.I.P Shop", url: "/shop/vip" },
      { title: "Name Shop", url: "/shop/name" },
      { title: "Buy V.I.P", url: "/shop/buy-vip" },
      { title: "Buy Z Coins", url: "/shop/buy-z-coins" },
    ],
  },
  {
    title: "Community",
    url: "#",
    submenu: [
      { title: "Discord", url: "#" },
      { title: "YouTube", url: "#" },
      { title: "X (Twitter)", url: "#" },
      { title: "Instagram", url: "#" },
      { title: "Tiktok", url: "#" },
      { title: "Streamers", url: "/streamers" },
    ],
  },
];

export const NAV_LINKS_MOBILE: NavLink[] = [
  {
    title: "Game Info",
    url: "#",
    submenu: [
      { title: "News & Articles", url: "/news" },
      { title: "Download", url: "/download" },
    ],
  },
  {
    title: "Guides",
    url: "#",
    submenu: [
      { title: "Default Controls", url: "/guide", subtab: 0, tab: 0 },
      { title: "Recommended Controls", url: "/guide", subtab: 1, tab: 0 },
      { title: "Movements: Beginner", url: "/guide", subtab: 0, tab: 1 },
      { title: "Movements: Advanced", url: "/guide", subtab: 1, tab: 1 },
      { title: "Movements: K-Style", url: "/guide", subtab: 2, tab: 1 },
      { title: "Items: General Information", url: "/guide", subtab: 0, tab: 2 },
      { title: "Items: Weapons", url: "/guide", subtab: 1, tab: 2 },
      { title: "Items: Armor", url: "/guide", subtab: 2, tab: 2 },
      { title: "Items: Miscellaneous", url: "/guide", subtab: 3, tab: 2 },
      { title: "Clan/Friends Guide", url: "/guide", subtab: 0, tab: 3 },
      { title: "Commands Guide", url: "/guide", subtab: 0, tab: 4 },
    ],
  },
  {
    title: "Leaderboards",
    url: "#",
    submenu: [
      { title: "Clans", url: "/leaderboards?tabs=clans" },
      { title: "Individuals", url: "/leaderboards?tabs=individuals" },
      { title: "Ladder", url: "/leaderboards?tabs=ladder" },
      { title: "History", url: "/leaderboards?tabs=history" },
    ],
  },
  {
    title: "Bounty Shop",
    url: "#",
    submenu: [
      { title: "Event Items", url: "#" },
      { title: "Item Set", url: "#" },
      { title: "Armor", url: "#" },
      { title: "Melee Weapons", url: "#" },
      { title: "Ranged Wapons", url: "#" },
      { title: "Special Items", url: "#" },
    ],
  },
  {
    title: "Premium Shop",
    url: "#",
    submenu: [
      { title: "V.I.P Set", url: "#" },
      { title: "Melee Weapons", url: "#" },
      { title: "Ranged Weapons", url: "#" },
      { title: "Emotes", url: "#" },
    ],
  },
  {
    title: "Name Shop",
    url: "#",
    submenu: [
      { title: "Character Name Change", url: "#" },
      { title: "V.I.P Colored Name", url: "#" },
    ],
  },
  {
    title: "Z Coins & V.I.P Shop",
    url: "#",
  },
  {
    title: "Community",
    url: "#",
    submenu: [
      { title: "Discord", url: "#" },
      { title: "YouTube", url: "#" },
      { title: "X (Twitter)", url: "#" },
      { title: "Instagram", url: "#" },
      { title: "Tiktok", url: "#" },
      { title: "Streamers", url: "/streamers" },
    ],
  },
];

export const STREAMING_DATA: Streaming[] = [
  {
    channelID: "fps_shaka",
    brand: "/icons/streaming-1.svg",
    width: 48,
    height: 48,
  },
  {
    channelID: "esl_dota2",
    brand: "/icons/streaming-2.svg",
    width: 50,
    height: 50,
  },
  {
    channelID: "funnyskk",
    brand: "/icons/streaming-3.svg",
    width: 48,
    height: 48,
  },
  {
    channelID: "balcksasu",
    brand: "/icons/streaming-4.svg",
    width: 45,
    height: 45,
  },
];

export const SOCIALS = [
  {
    name: "discord",
    link: "#",
  },
  {
    name: "twitter",
    link: "#",
  },
  {
    name: "youtube",
    link: "#",
  },
  {
    name: "instagram",
    link: "#",
  },
  {
    name: "tiktok",
    link: "#",
  },
];

export const CLANTABLETDS = [
  "Rank",
  "Clan Name",
  "Emblem",
  "Leader",
  "Wins / Losers",
  "Win Rate",
  "Points",
];

export const INDIVIDUALTABLETDS = [
  "Rank",
  "Character Name",
  "Level",
  "Experience",
  "Kills / Deaths",
  "K/D Ratio",
];

export const LADDERTABLETDS = [
  "Rank",
  "Character Name",
  "Wins / Losees",
  "Win Rate",
  "Points",
];

export const HISTORYTABLETDS = [
  "Date",
  "Map",
  "Winners",
  "Points",
  "Losers",
  "Points",
];

export const COMPETIVETABLETDS = [
  { title: "Name", icon: "/icons/union.png" },
  { title: "Level", icon: "/icons/level.png" },
  { title: "Rank", icon: "/icons/chevron.png" },
  { title: "Points", icon: "/icons/star.png" },
  { title: "Join Date", icon: "/icons/calendar.png" },
];

export const SHOW_RANK_AVATAR_LIMIT = 4;

export const DOWNLOADBUTTONTITLES = ["DOWNLOAD FOR FREE"];

export const PLAYERS: Player[] = [
  {
    id: "",
    rank: 1,
    clanName: "Legend",
    characterName: "CJCESAR",
    type: {
      name: "clan",
      rank: 1,
    },
    emblem: "/images/temp/user-2.png",
    role: "Cyzone",
    level: 99,
    experience: 33417124551,
    playCount: {
      win: 35,
      lose: 4,
      winRate: 89.74,
      kills: 67500,
      deaths: 22019,
    },
    points: 962,
  },
  {
    id: "",
    rank: 2,
    clanName: "Rakuzan",
    characterName: "cazador007",
    type: {
      name: "clan",
      rank: 1,
    },
    emblem: "/images/temp/user-1.png",
    role: "Cyzone",
    level: 98,
    experience: 1617124551,
    playCount: {
      win: 35,
      lose: 4,
      winRate: 89.74,
      kills: 67500,
      deaths: 22019,
    },
    points: 962,
  },
  {
    id: "",
    rank: 3,
    clanName: "Armaxr",
    characterName: "AnGeLeSxD",
    type: {
      name: "clan",
      rank: 1,
    },
    emblem: "/images/temp/user-3.png",
    role: "Cyzone",
    level: 99,
    experience: 1617124551,
    playCount: {
      win: 35,
      lose: 4,
      winRate: 89.74,
      kills: 67500,
      deaths: 22019,
    },
    points: 962,
  },
  {
    id: "",
    rank: 4,
    clanName: "Cyxonse",
    characterName: "Quest4ever",
    type: {
      name: "clan",
      rank: 1,
    },
    emblem: undefined,
    role: "Cyzone",
    level: 97,
    experience: 1617124551,
    playCount: {
      win: 35,
      lose: 4,
      winRate: 89.74,
      kills: 67500,
      deaths: 22019,
    },
    points: 962,
  },
  {
    id: "",
    rank: 5,
    clanName: "UltdNation",
    characterName: "NinjaPao",
    type: {
      name: "clan",
      rank: 1,
    },
    emblem: undefined,
    role: "Cyzone",
    level: 95,
    experience: 16171345551,
    playCount: {
      win: 35,
      lose: 4,
      winRate: 89.74,
      kills: 67500,
      deaths: 22019,
    },
    points: 962,
  },
  {
    id: "",
    rank: 6,
    clanName: "Legion",
    characterName: "_Master___",
    type: {
      name: "clan",
      rank: 1,
    },
    emblem: undefined,
    role: "Cyzone",
    level: 99,
    experience: 1617124551,
    playCount: {
      win: 35,
      lose: 4,
      winRate: 89.74,
      kills: 67500,
      deaths: 22019,
    },
    points: 962,
  },

  {
    id: "",
    rank: 7,
    clanName: "DBZS",
    characterName: "BongFire",
    type: {
      name: "clan",
      rank: 1,
    },
    emblem: undefined,
    role: "Cyzone",
    level: 56,
    experience: 1617124551,
    playCount: {
      win: 35,
      lose: 4,
      winRate: 89.74,
      kills: 67500,
      deaths: 22019,
    },
    points: 962,
  },
  {
    id: "",
    rank: 8,
    clanName: "Crusaders",
    characterName: "BongFire",
    type: {
      name: "clan",
      rank: 1,
    },
    emblem: undefined,
    role: "Cyzone",
    level: 97,
    experience: 1617124551,
    playCount: {
      win: 35,
      lose: 4,
      winRate: 89.74,
      kills: 67500,
      deaths: 22019,
    },
    points: 962,
  },
  {
    id: "",
    rank: 9,
    clanName: "Goojofoq",
    characterName: "XSfeew",
    type: {
      name: "clan",
      rank: 1,
    },
    emblem: undefined,
    role: "Cyzone",
    level: 67,
    experience: 1617124551,
    playCount: {
      win: 35,
      lose: 4,
      winRate: 89.74,
      kills: 67500,
      deaths: 22019,
    },
    points: 962,
  },
  {
    id: "",
    rank: 10,
    clanName: "Capable",
    characterName: "GDwer",
    type: {
      name: "clan",
      rank: 1,
    },
    emblem: undefined,
    role: "Cyzone",
    level: 87,
    experience: 1617124551,
    playCount: {
      win: 35,
      lose: 4,
      winRate: 89.74,
      kills: 67500,
      deaths: 22019,
    },
    points: 962,
  },
];

export const HISTORYS: History[] = [
  {
    id: "",
    date: "2023-08-12 (4:30 PM EST)",
    map: "Factory",
    winners: ["fright"],
    firstPoints: 6,
    losers: ["King_WarZ"],
    secondPoints: 5,
  },
  {
    id: "",
    date: "2023-08-12 (4:02 PM EST)",
    map: "Prison II",
    winners: ["snuwfersucks"],
    firstPoints: 6,
    losers: ["Mishandelaar"],
    secondPoints: 5,
  },
  {
    id: "",
    date: "2023-08-12 (4:02 PM EST)",
    map: "Prison II",
    winners: ["ApMagic", "wodalG", "bonedamage"],
    firstPoints: 6,
    losers: ["Mishandelaar", "MONEYCHAINZ", "Rabid"],
    secondPoints: 5,
  },
  {
    id: "",
    date: "2022-08-12 (5:02 PM EST)",
    map: "Prison II",
    winners: ["ApMagic", "wodalG", "bonedamage"],
    firstPoints: 6,
    losers: ["Mishandelaar", "MONEYCHAINZ", "Rabid"],
    secondPoints: 5,
  },
  {
    id: "",
    date: "2023-08-12 (4:02 PM EST)",
    map: "Prison II",
    winners: ["ApMagic", "wodalG"],
    firstPoints: 3,
    losers: ["Mishandelaar", "MONEYCHAINZ"],
    secondPoints: 6,
  },
  {
    id: "",
    date: "2023-08-12 (4:02 PM EST)",
    map: "Prison II",
    winners: ["wodalG"],
    firstPoints: 3,
    losers: ["MONEYCHAINZ"],
    secondPoints: 6,
  },
];

export const COMPETIVES: Competive[] = [
  {
    id: "",
    name: "Strike",
    level: 79,
    rank: "Master",
    points: 1590,
    joinDate: "31/07/2020",
  },
  {
    id: "",
    name: "Cessation",
    level: 71,
    rank: "Admin",
    points: 1590,
    joinDate: "02/08/2020",
  },
  {
    id: "",
    name: "Command",
    level: 65,
    rank: "Member",
    points: 606,
    joinDate: "31/07/2020",
  },
  {
    id: "",
    name: "Ask420",
    level: 79,
    rank: "Master",
    points: 1590,
    joinDate: "31/07/2020",
  },
  {
    id: "",
    name: "Korra",
    level: 79,
    rank: "Master",
    points: 1590,
    joinDate: "31/07/2020",
  },
  {
    id: "",
    name: "Simp",
    level: 79,
    rank: "Master",
    points: 1590,
    joinDate: "31/07/2020",
  },
  {
    id: "",
    name: "Derange",
    level: 79,
    rank: "Master",
    points: 1590,
    joinDate: "31/07/2020",
  },
  {
    id: "",
    name: "LexTalionis",
    level: 79,
    rank: "Master",
    points: 1590,
    joinDate: "31/07/2020",
  },
];

export enum NEWSTYPE {
  PATCH_NOTES = "PATCH NOTES",
  BLOG_POSTS = "BLOG POSTS",
  ANNOUNCEMENTS = "ANNOUNCEMENTS",
}

export const NEWS: News[] = [
  {
    id: 0,
    imgUrl: "/images/news/1.png",
    date: "08/09/2023",
    dataType: NEWSTYPE.PATCH_NOTES,
    title: "GUNZ Update Log #002",
    content: [
      "We're excited to share the details about the first big update that we have implemented for GunZ!",
      "Your experience is our top priority, and these changes are aimed at making your gameplay even more enjoyable.",
    ],
  },
  {
    id: 1,
    imgUrl: "/images/news/2.png",
    date: "08/09/2023",
    dataType: NEWSTYPE.PATCH_NOTES,
    title: "Custom Discord Roles & More!",
    content: [
      "We've been continously working on making our Discord better, organizing channels, creating new content & more.",
    ],
  },
  {
    id: 2,
    imgUrl: "/images/news/3.png",
    date: "08/09/2023",
    dataType: NEWSTYPE.BLOG_POSTS,
    title: "A NEW ERA OF GUNZ: MESSAGE FROM GOSU",
    content: [
      "I am excited to announce a new chapter for GunZ, one that embraces a fresh start. In this regard, I have made the decision to implement a semi-clean slate approach.",
      "(More details available in the blog post).",
    ],
  },
  {
    id: 3,
    imgUrl: "/images/news/4.png",
    date: "07/26/2023",
    dataType: NEWSTYPE.BLOG_POSTS,
    title: "THE GLADIATOR COLLECTIVE TOURNAMENT: SERIES III",
    content: [
      "Will take place on August 23, 2023 12:00 AM EST, still open to registrations until August 1, 2023.",
      "Live streamed on Twitch - TheGladiatorCollective channels.",
    ],
  },
  {
    id: 4,
    imgUrl: "/images/news/5.png",
    date: "07/26/2023",
    dataType: NEWSTYPE.ANNOUNCEMENTS,
    title: "SERVER UNDER MAINTENANCE: 6 HOURS",
    content: [
      "Attention players!",
      "Our server will officially be under maintenance today, July 20,2023 for 6 hours. Starting from 1:00PM EST - 6:00PM EST, players won’t be able to connect to the game servers. Thank you for your patience!",
    ],
  },
  {
    id: 5,
    imgUrl: "/images/news/6.png",
    date: "07/26/2023",
    dataType: NEWSTYPE.ANNOUNCEMENTS,
    title: "DISCORD MAINTENANCE IN PROGRESS",
    content: [
      "Attention players!",
      "Our discord server will be offline for 24 hours today, July 14, 2023. Maintenance time is scheduled to be 07/14/23 12:00AM EST until 07/15/23 12:00AM EST. Thank you for your patience!",
    ],
  },
];

export const INSTALL: Install[] = [
  {
    tool: "operating system",
    firstOption: "windows 2000",
    secondOption: "windows XP and up",
  },
  {
    tool: "directx",
    firstOption: "DirectX 9.0c",
    secondOption: "",
  },
  {
    tool: "cpu",
    firstOption: "Pentium III 500 Mhz",
    secondOption: "Pentium III 800 Mhz",
  },
  {
    tool: "memory",
    firstOption: "256 MB",
    secondOption: "512 MB or above",
  },
  {
    tool: "graphics card",
    firstOption: "Direct3D 9.0 Compatible",
    secondOption: "GeForce 4 MX or higher",
  },
  {
    tool: "sound card",
    firstOption: "Direct3DSound Compatible",
    secondOption: "",
  },
  {
    tool: "internet connection",
    firstOption: "Cable/DSL",
    secondOption: "Cable / DSL or better",
  },
];

export const guideData = {
  tabledata: [
    {
      data: ["", "MINIMUM \n REQUIREMENTS", "RECOMMENDED \n REQUIREMENTS"],
      header: true,
      icon: ["", "header-one.svg", "header-two.svg"],
    },
    { data: ["DIRECTX", "DirectX 9.0c"], columns: [1, 2] },
    { data: ["CPU", "Pentium III 500 Mhz", "Pentium III 800 Mhz"] },
    { data: ["MEMORY", "256 MB", "512 MB or above"] },
    {
      data: [
        "GRAPHICS CARD",
        "Direct3D 9.0 Compatible",
        "GeForce 4 MX or higher",
      ],
    },
    { data: ["SOUND CARD", "Direct3DSound Compatible"], columns: [1, 2] },
    { data: ["INTERNET CONNECTION", "Cable/DSL", "Cable / DSL or better"] },
  ],
};
export const FAQ: Faq[] = [
  {
    question: "Do I need an internet connection to play GunZ: The Last Duel?",
    answer: [
      "Yes, you do need an internet connection to play GunZ: The Last Duel. The game is an online multiplayer game, so you need to be connected to the internet in order to connect to other players and play the game.",
    ],
  },
  {
    question: "What in-game purchases are offered in your product?",
    answer: [
      "Purchases vary from subscription offerings (V.I.P Subscription) and purchase of currency in the form of Gold Coins.",
      "Example Subscription:1 Month V.I.P / $50 USD",
    ],
  },
  {
    question: "Are in-game purchases necessary to play GunZ: The Last Duel?",
    answer: [
      "No, in-game purchases are not necessary to play GunZ: The Last Duel. You can still enjoy the game without making any in-game purchases. However, there are some in-game items that can give you an advantage, such as weapons and armor. If you want to get these items, you can purchase them with real money.",
    ],
  },
  {
    question: "Are the in-game purchases refundable?",
    answer: ["No, any in-game purchases made will not be refundable."],
  },
  {
    question: "Is the game exclusively on Windows OS only?",
    answer: [
      "The official game launcher is only available on Windows.",
      "However, there are other ports that allow players to play from MacOS and Linux. Players must provide due diligence of their own to have the best in-game experience outside the official Windows port.",
    ],
  },
];

export const UiConfigData = {
  guide: {
    itemsTitle: [
      UiText.itemsTableOneTitle,
      UiText.itemsTableTwoTitle,
      "",
      UiText.itemsTableFourTitle,
    ] as string[],

    widClass: ["wid-0", "wid-1", "wid-2", "wid-3", "wid-4", "wid-5"],
  },

  footer: {
    cta_links: [
      {
        url: "#",
        title: UiText.downButton,
      },
      {
        url: "#",
        title: UiText.create,
      },
    ] as NavLink[],
    Images: [
      { src: "footer-r.png", parent: "pattern-r", clname: "object-content" },
      { src: "footer-l.png", parent: "pattern-l", clname: "object-content" },
    ] as ImageItem[],
  },
  gunzVip: {
    liItems: [
      UiText.accessForVip,
      UiText.bonus,
      UiText.vipColor,
      UiText.discord,
    ],
    patterns: [
      { clname: "pattern-left", image: "vip-left@desktop.png" },
      { clname: "pattern-right", image: "vip-right@desktop.png" },
    ],
  },
  mobiletabs: [
    {
      label: "Installation Guide",
      href: "guide",
      sx: { color: "yellow", effect: "hover", size: "large" },
    },

    {
      label: "FAQ",
      href: "faq",
      sx: { color: "yellow", effect: "hover", size: "large" },
    },
  ],
  routes: [{ link: "guide" }, { link: "faq" }],

  streaming: {
    btn: [
      {
        label: "Previous Stream",
        src: "arrow-left.png",
        clname: "play-shadow",
        param: "left",
      },
      {
        label: "Next Stream",
        src: "arrow-right.png",
        clname: "play-shadow",
        param: "right",
      },
    ],
  },
  rankClassMap: {
    1: "gradient-gold",
    2: "gradient-silver",
    3: "gradient-bronze",
  } as Rank,
  heroBanner: {
    dwbtn: [
      { src: "download@back.svg", parent: "img-back", clname: "play-shadow" },
      { src: "download@front.svg", parent: "img-front", clname: "play-shadow" },
    ],
    mobdwbtn: [
      {
        src: "download-sm@back.svg",
        parent: "img-back",
        clname: "play-shadow",
      },
      {
        src: "download-sm@front.svg",
        parent: "img-front",
        clname: "play-shadow",
      },
    ],
  },
  winner: {
    tabItems: [
      { label: "clan", param: "clan" },
      { label: "individual", param: "individual" },
      { label: "ladder", param: "ladder" },
    ],
    carditems: [
      {
        clanName: "DBZS",
        pfp: "user-1.png",
        pts: 1000,
        rank: { rank: 3, type: "clan" },
      },

      {
        clanName: "Avoid",
        pfp: "user-2.png",
        pts: 1750,
        rank: { rank: 1, type: "clan" },
      },

      {
        clanName: "DBZS",
        pfp: "user-3.png",
        pts: 1240,
        rank: { rank: 2, type: "clan" },
      },
    ],
  },
  newsDetailCard: {
    cardPaddingStyle: [
      "lefttop-bar",
      "righttop-bar",
      "leftbottom-bar",
      "rightbottom-bar",
    ],
  },
  imButton: [
    { src: "play@line.svg", parent: "line-image-box" },
    { src: "play@up.svg", parent: "up-image-box" },
  ],
  mobileClansTable: {
    borderClass: {
      1: "border-gold",
      2: "border-silver",
      3: "border-bronze",
    } as Rank,
    bgClass: {
      1: "bg-gold",
      2: "bg-silver",
      3: "bg-bronze",
    } as Rank,
    rankClassMap: {
      1: "gradient-gold",
      2: "gradient-silver",
      3: "gradient-bronze",
    } as Rank,
    hoverClass: {
      1: "hover-gold",
      2: "hover-silver",
      3: "hover-bronze",
    } as Rank,
  },
  bannerZoneTopContainer: {
    Strings: [
      "DOWNLOAD THE GUNZ CLIENT \n FROM A WINDOWS PC OR REFER TO THE GUNZ INSTALLATION GUIDE.",
      "JOIN THE DUEL AND MAKE AN ACCOUNT\n TODAY!",
    ],
    Tabs: [
      {
        label: "REGISTER",
        href: "",
        sx: { color: "yellow", effect: "hover", size: "large" },
      },
      {
        label: "Installation Guide",
        href: "guide",
        sx: { color: "yellow", effect: "hover", size: "large" },
      },
      {
        label: "FREQUENTLY ASKED QUESTIONS",
        href: "faq",
        sx: { color: "yellow", effect: "hover", size: "large" },
      },
    ],
    Routes: [{ link: "guide" }, { link: "faq" }],

    Title: [
      {
        label: "PLAY GUNZ NOW!",
        tab: "",
        sx: {
          font: "large",
          color: "primary",
          shadow: "shadow",
          hidden: "hide-sm",
        },
      },
      {
        label: "Installation Guide",
        tab: "guide",
        sx: {
          shadow: "shadow",
          hidden: "hide-lg",
          color: "primary",
          font: "xsmall",
          bgcolor: "bg-yellow",
          mode: "box",
        },
      },
      {
        label: "FAQ",
        tab: "faq",
        sx: {
          shadow: "shadow",
          font: "xsmall",
          hidden: "hide-lg",
          color: "primary",
          bgcolor: "bg-yellow",
          mode: "box",
        },
      },
    ],
  },
  newsfilter: {
    tabs: [
      {
        label: UiText.latest,
        link: "latest",
      },
      {
        label: UiText.announcements,
        link: "announcements",
      },
      {
        label: UiText.patch,
        link: "patchNotes",
      },
      {
        label: UiText.blog,
        link: "blogPosts",
      },
    ],
  },
};
