import type { Fixture, Player, Position, ProspectConfig, StaffMember } from "@/config/types";

const ASSET_BASE =
  "https://ydvggllbrswfchgjhjhr.supabase.co/storage/v1/object/public/assets/deportivoOlimpicoAssets";
const LEAGUE_LOGO_BASE =
  "https://ydvggllbrswfchgjhjhr.supabase.co/storage/v1/object/public/leagueLogos";

const horizontalPlaceholder = `${ASSET_BASE}/placeholder2.png`;
const assetUrl = (fileName: string) => `${ASSET_BASE}/${encodeURIComponent(fileName)}`;
const leagueLogo = (fileName: string) => `${LEAGUE_LOGO_BASE}/${encodeURIComponent(fileName)}`;
const sponsorLogo = (fileName: string) => `${ASSET_BASE}/sponsors/${encodeURIComponent(fileName)}`;
const homeJerseyFront = assetUrl("Deportivo Olimpico Home Front 2026.png");
const homeJerseyBack = assetUrl("Deportivo Olimpico Home Away 2026.png");
const awayJerseyFront = assetUrl("Deportivo Olimpico Away Front 2026.png");
const awayJerseyBack = assetUrl("Deportivo Olimpico Away Back 2026.png");
const speedActionPhoto = assetUrl("speed_action_photo.jpg");
const historicTeamPhoto = assetUrl("historic_team.jpg");
const tryoutsTeamPhoto = assetUrl("OD_together_pic.jpg");

const firstTeam: Array<[string, string, number, Position, string]> = [
  ["Angel", "Ramirez", 1, "GK", "Mexican"], ["Mateo", "Lopez", 22, "GK", "American"],
  ["Diego", "Hernandez", 2, "DF", "Mexican"], ["Julian", "Garcia", 4, "DF", "American"], ["Emilio", "Flores", 5, "DF", "Guatemalan"], ["Adrian", "Vargas", 15, "DF", "Mexican"], ["Sebastian", "Morales", 18, "DF", "Salvadoran"],
  ["Luis", "Sanchez", 6, "MF", "Mexican"], ["Carlos", "Mendoza", 8, "MF", "American"], ["Marco", "Reyes", 10, "MF", "Mexican"], ["Ivan", "Castillo", 14, "MF", "Guatemalan"], ["Nico", "Pineda", 20, "MF", "American"],
  ["Javier", "Cruz", 7, "FW", "Mexican"], ["Oscar", "Torres", 9, "FW", "American"], ["Rafa", "Navarro", 11, "FW", "Salvadoran"], ["Andres", "Silva", 19, "FW", "Mexican"],
];

const makePlayers = (rows: Array<[string, string, number, Position, string]>, teamId: string): Player[] =>
  rows.map(([firstName, lastName, number, position, nationality], index) => ({
    id: `p${String(index + 1).padStart(2, "0")}`,
    teamId,
    firstName,
    lastName,
    number,
    position,
    nationality,
    hometown: index % 2 === 0 ? "Guadalupe, CA" : "Santa Maria, CA",
    height: position === "GK" ? "6'1\"" : index % 2 ? "5'10\"" : "5'11\"",
    yearJoined: 2025 + (index % 2),
    bio: `${firstName} adds discipline, intensity, and Central Coast pride to the Deportivo Olimpico first-team environment.`,
    stats: {
      appearances: 8,
      starts: 4 + (index % 5),
      minutes: 390 + index * 31,
      goals: position === "FW" ? 2 + (index % 3) : position === "MF" ? index % 2 : 0,
      assists: position === "MF" || position === "FW" ? 1 + (index % 3) : index % 2,
      yellowCards: index % 3,
      redCards: 0,
      ...(position === "GK" ? { cleanSheets: 2, saves: 28 + index * 4 } : {}),
    },
  }));

const fixture = (
  id: string,
  opponent: string,
  date: string,
  status: Fixture["status"],
  result?: Fixture["result"],
  seasonId = "s2026-fall",
): Fixture => ({
  id,
  teamId: "first",
  seasonId,
  opponent,
  date,
  venue: id === "f03" ? "Santa Maria High School" : "Dave Boyd Field",
  homeAway: Number(id.replace(/\D/g, "")) % 2 ? "home" : "away",
  competition: "UPSL Premier Division",
  status,
  result,
});

const staff: StaffMember[] = [
  { id: "st01", teamId: "first", name: "Miguel Alvarez", role: "Head Coach", bio: "Leads the first-team standard for a disciplined, competitive UPSL environment." },
  { id: "st02", teamId: "first", name: "Daniel Rios", role: "Assistant Coach", bio: "Supports training, match preparation, and player development." },
  { id: "st03", teamId: "first", name: "Victor Morales", role: "Goalkeeper Coach" },
  { id: "st04", name: "Deportivo Olimpico Staff", role: "Club Operations", bio: "Coordinates player communication, matchday details, and community outreach." },
];

export const deportivoOlimpico: ProspectConfig = {
  club: {
    name: "Deportivo Olimpico",
    shortName: "Olimpico",
    initials: "DO",
    tagline: "Small town. Big heart. One club.",
    league: "UPSL Premier Division",
    division: "Central Coast",
    city: "Guadalupe",
    state: "CA",
    venue: "Dave Boyd Field",
  },
  branding: {
    primaryColor: "#264a29",
    secondaryColor: "#171a0f",
    accentColor: "#b18b1e",
    detailColor: "#b18b1e",
    crest: "/prospect/deportivo-olimpico-logo.png",
    crestOnDark: "/prospect/deportivo-olimpico-logo.png",
    heroImage: horizontalPlaceholder,
    heroImageAlt: "Horizontal Deportivo Olimpico placeholder image",
    galleryImages: [
      { src: assetUrl("player_action2.jpg"), orientation: "landscape", alt: "Deportivo Olimpico player competing during a match", objectPosition: "center" },
      { src: assetUrl("team_photo.jpg"), orientation: "landscape", alt: "Deportivo Olimpico team photo", objectPosition: "center 28%" },
      { src: assetUrl("praying_photo.jpg"), orientation: "landscape", alt: "Deportivo Olimpico players gathered before kickoff", objectPosition: "center" },
    ],
    affiliations: [
      { name: "US Soccer", colorLogo: leagueLogo("US Soccer logo color.png"), whiteLogo: leagueLogo("US Soccer logo white.png") },
      { name: "FIFA", colorLogo: leagueLogo("FIFA logo color.png"), whiteLogo: leagueLogo("FIFA logo white.png") },
      { name: "UPSL", colorLogo: leagueLogo("UPSL logo color.png"), whiteLogo: leagueLogo("UPSL logo white.png") },
    ],
    recruitImage: speedActionPhoto,
    recruitImageAlt: "Deportivo Olimpico player in match action",
  },
  copy: {
    metadata: {
      title: "Deportivo Olimpico — Interactive Concept Preview",
      description: "A personalized Onzio website and admin concept for Deportivo Olimpico in Guadalupe, California.",
    },
    home: {
      heroHeadline: ["Small town.", "Big heart."],
      heroIntro: "A concept preview for Deportivo Olimpico: Guadalupe's Central Coast club competing in the UPSL Premier Division with pride, discipline, and community behind it.",
      collectionEyebrow: "Prospect concept",
      collectionHeadline: ["Central Coast.", "One club."],
      collectionIntro: "A placeholder visual lane for future Deportivo Olimpico matchday, sponsor, and tryout photography.",
      collectionItemLabel: "Placeholder asset",
      gallerySectionHeadline: ["Matchday,", "Olimpico style."],
      recruitHeadline: ["Ready for", "the next level?"],
      recruitIntro: "Open tryouts and player interest can point directly to Deportivo Olimpico's existing registration flow while the club keeps full control of communication.",
      recruitButtonLabel: "Join our team",
    },
    store: {
      eyebrow: "Future club shop",
      headline: ["Olimpico gear.", "Club-owned."],
      intro: "Official jersey imagery can anchor a clean club shop preview with front and back views ready for supporters.",
      catalogEyebrow: "Jersey collection",
      catalogHeading: "2026 kits.",
      catalogSummary: "2 jersey products · front and back views",
      productTypeLabels: ["Home kit", "Away kit"],
      itemEyebrow: "Official jersey",
      collectionName: "Deportivo Olimpico 2026 jerseys",
      productDescription: "A Deportivo Olimpico 2026 jersey preview with front and back product views.",
    },
    club: {
      headline: ["Guadalupe built.", "Central Coast proud."],
    },
    fallbacks: {
      playerHometown: "Guadalupe, CA",
      staffBio: "{name} supports the Deportivo Olimpico first-team environment and community standard.",
    },
  },
  contact: {
    email: "info@deportivoolimpico.com",
    address: "Guadalupe, CA / Central Coast",
    trainingHours: [
      { label: "First Team", hours: "UPSL training schedule shared by club staff" },
      { label: "Tryouts", hours: "Register through the current Deportivo Olimpico tryout form" },
    ],
    social: {
      instagram: "https://instagram.com/deportivoolimpicoca",
      youtube: "https://youtube.com/@DeportivoOlimpicoCA",
    },
  },
  seasons: [
    { id: "s2026-fall", label: "2026 Fall Season", status: "active" },
    { id: "s2026-spring", label: "2026 Spring Season", status: "completed" },
  ],
  currentSeasonId: "s2026-fall",
  teams: [{ id: "first", name: "First Team", shortLabel: "First Team" }],
  defaultTeamId: "first",
  roster: makePlayers(firstTeam, "first"),
  staff,
  fixtures: [
    fixture("f01", "AV Alta Academy", "2026-05-31T15:00:00-07:00", "played", { clubScore: 4, opponentScore: 1, attendance: 325, scorers: ["J. Cruz 18'", "O. Torres 41'", "M. Reyes 64'", "A. Silva 82'"] }, "s2026-spring"),
    fixture("f02", "Central Coast United", "2026-06-07T18:00:00-07:00", "played", { clubScore: 2, opponentScore: 2, attendance: 280, scorers: ["M. Reyes 22'", "J. Cruz 74'"] }, "s2026-spring"),
    fixture("f03", "Santa Maria FC", "2026-06-14T15:00:00-07:00", "played", { clubScore: 1, opponentScore: 0, attendance: 305, scorers: ["O. Torres 58'"] }, "s2026-spring"),
    fixture("f04", "Central Coast United", "2026-08-23T18:00:00-07:00", "upcoming"),
    fixture("f05", "Santa Maria FC", "2026-08-30T15:00:00-07:00", "upcoming"),
    fixture("f06", "SLO County FC", "2026-09-06T18:00:00-07:00", "upcoming"),
    fixture("f07", "Ventura County United", "2026-09-13T18:00:00-07:00", "upcoming"),
  ],
  about: {
    story: "Deportivo Olimpico is a competitive soccer club representing Guadalupe and California's Central Coast. The club is built on tradition, discipline, and community pride, creating a serious environment for local players to develop on and off the field.\n\nThis concept keeps that foundation intact while showing how Olimpico could present roster, schedule, sponsors, tryouts, and contact pathways in one polished club experience.",
    mission: "Develop Central Coast players while competing with pride and discipline.",
    highlights: ["UPSL Premier Division competition", "Guadalupe and Central Coast identity", "Open tryout pathway for ambitious players"],
    groupPhoto: { image: historicTeamPhoto, alt: "Historic Deportivo Olimpico team photo" },
    training: {
      intro: "The preview can support the current tryout flow and future training details without forcing the club into a new backend.",
      points: ["Direct link to the existing tryout form", "Roster and staff presentation for the first team", "Sponsor and contact surfaces aligned to the current website"],
      closing: "Represent your town, your people, and the Olimpico standard.",
    },
  },
  tryouts: {
    eyebrow: "Open tryouts",
    headline: ["Earn your", "Olimpico place."],
    intro: "Deportivo Olimpico is inviting committed Central Coast players to compete for a spot in the first-team environment. Sessions are direct, competitive, and built around the standards expected in UPSL play.",
    image: tryoutsTeamPhoto,
    imageAlt: "Deportivo Olimpico players together before a match",
    registrationHref: "https://docs.google.com/forms/d/e/1FAIpQLSeAHgyGh3TIcwSbB0unqJNWD6QjEC9FSlmDRGsfJAaHHJ6y8w/viewform",
    registrationLabel: "Register interest",
    dates: [
      { id: "try01", label: "First-team open tryout", date: "2026-08-02", time: "6:30 PM", location: "Dave Boyd Field", notes: "Arrive 30 minutes early for check-in." },
      { id: "try02", label: "Invite callback session", date: "2026-08-09", time: "6:00 PM", location: "Dave Boyd Field", notes: "Staff will invite selected players from the open session." },
      { id: "try03", label: "Final roster evaluation", date: "2026-08-16", time: "5:30 PM", location: "Dave Boyd Field", notes: "Bring boots, water, and a dark/light training top." },
    ],
    details: ["Players should be 18+ or have parent/guardian approval.", "Bring cleats, shin guards, water, and a valid ID.", "Trialists are evaluated on intensity, discipline, coachability, and match fitness."],
  },
  sponsors: [
    { id: "s01", name: "Central City Labor", logo: sponsorLogo("Central City Labor white.png"), level: "partner" },
    { id: "s02", name: "Pamela Davis", logo: sponsorLogo("Pamela Davis logo white.png"), level: "partner" },
    { id: "s03", name: "Sponsor Placement", logo: sponsorLogo("SPONSOR BLANK PLACEMENT EX logo white.png"), level: "partner" },
    { id: "s04", name: "Ventura Soccer Shop", logo: sponsorLogo("Ventura Soccer Shop logo white.png"), level: "partner" },
  ],
  store: {
    mode: "internal",
    products: [
      { id: "prod01", name: "2026 Home Jersey", price: 75, image: homeJerseyFront, backImage: homeJerseyBack, category: "jersey", sizes: ["S", "M", "L", "XL"], featured: true },
      { id: "prod02", name: "2026 Away Jersey", price: 75, image: awayJerseyFront, backImage: awayJerseyBack, category: "jersey", sizes: ["S", "M", "L", "XL"] },
    ],
  },
  standings: {
    competitionName: "UPSL Premier Division — Spring 2026",
    intro: "Interactive league table for Deportivo Olimpico's Spring 2026 division. Sort by matches played, wins, draws, losses, goal difference, or points.",
    rows: [
      { id: "std01", teamName: "BSA Pro", gp: 10, w: 8, d: 1, l: 1, gd: 18, points: 25 },
      { id: "std02", teamName: "Guadalajara", gp: 10, w: 7, d: 1, l: 2, gd: 16, points: 22 },
      { id: "std03", teamName: "FC Scorpions", gp: 10, w: 6, d: 2, l: 2, gd: 9, points: 20 },
      { id: "std04", teamName: "ASC Antelope Valley", gp: 10, w: 5, d: 2, l: 3, gd: 6, points: 17 },
      { id: "std05", teamName: "Sporting FC", gp: 10, w: 5, d: 1, l: 4, gd: 3, points: 16 },
      { id: "std06", teamName: "Deportivo Olimpico", teamLogo: "/prospect/deportivo-olimpico-logo.png", gp: 10, w: 4, d: 1, l: 5, gd: 1, points: 13 },
      { id: "std07", teamName: "AV ALTA FC Academy", gp: 10, w: 4, d: 1, l: 5, gd: -2, points: 13 },
      { id: "std08", teamName: "Estudiantes", gp: 10, w: 3, d: 2, l: 5, gd: -4, points: 11 },
      { id: "std09", teamName: "L.A. Wolves FC", gp: 10, w: 3, d: 1, l: 6, gd: -7, points: 10 },
      { id: "std10", teamName: "Los Angeles Dynamo", gp: 10, w: 2, d: 2, l: 6, gd: -12, points: 8 },
      { id: "std11", teamName: "Ocelot Academy LA", gp: 10, w: 1, d: 0, l: 9, gd: -28, points: 3 },
    ],
  },
  analytics: {
    weeklyPageViews: [{ weekLabel: "May 25", views: 480 }, { weekLabel: "Jun 1", views: 620 }, { weekLabel: "Jun 8", views: 710 }, { weekLabel: "Jun 15", views: 690 }, { weekLabel: "Jun 22", views: 820 }, { weekLabel: "Jun 29", views: 910 }],
    topPages: [{ path: "/", label: "Home", views: 2480 }, { path: "/roster", label: "Roster", views: 1560 }, { path: "/schedule", label: "Schedule", views: 1320 }, { path: "/sponsors", label: "Sponsors", views: 780 }, { path: "/club#contact", label: "Contact", views: 640 }],
    deviceSplit: { mobile: 72, desktop: 23, tablet: 5 },
    rosterProfileViews: [{ playerId: "p13", views: 302 }, { playerId: "p14", views: 285 }, { playerId: "p10", views: 244 }, { playerId: "p09", views: 221 }],
    sponsorImpressions: [{ sponsorId: "s01", impressions: 5200 }, { sponsorId: "s02", impressions: 3380 }, { sponsorId: "s03", impressions: 3100 }, { sponsorId: "s04", impressions: 2240 }],
    attendanceTrend: [{ fixtureId: "f01", attendance: 325 }],
    storeInterest: [{ productId: "prod01", views: 210 }, { productId: "prod02", views: 180 }],
  },
};
