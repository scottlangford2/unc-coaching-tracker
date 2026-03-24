const alerts = [
    { type: "red", tag: "Breaking", text: "Davis & UNC <b>\"discussing future\"</b> — decision expected this week (ESPN)" },
    { type: "red", tag: "Breaking", text: "Player meetings & Davis radio show <b>postponed</b> — no announcement Monday" },
    { type: "yellow", tag: "Key", text: "Booster support has <b>\"cratered\"</b> — donors willing to fund buyout + big-name hire" },
    { type: "yellow", tag: "Key", text: "<b>Todd Golden</b> (Florida) now 3/1 favorite after Gators' early tournament exit" },
    { type: "blue", tag: "Intel", text: "Kentucky & Kansas also eyeing Golden — UNC may need to <b>act fast</b>" },
    { type: "blue", tag: "Intel", text: "\"Orchestrated resignation\" more likely than firing — <b>Davis buyout ~$5.3M</b>" },
    { type: "blue", tag: "Intel", text: "UNC expected to go <b>outside Carolina family</b> for first time in 74 years" },
    { type: "blue", tag: "Rumor", text: "Stephen A. Smith pushing <b>Kenny Smith</b> as candidate" },
];

const candidates = [
    { name: "Todd Golden", school: "Florida", odds: "3/1", airports: [
        { code: "GNV", name: "Gainesville" }, { code: "JAX", name: "Jacksonville" }
    ]},
    { name: "Mark Byington", school: "Vanderbilt", odds: "4/1", airports: [
        { code: "BNA", name: "Nashville" }
    ]},
    { name: "TJ Otzelberger", school: "Iowa State", odds: "5/1", airports: [
        { code: "DSM", name: "Des Moines" }
    ]},
    { name: "Nate Oats", school: "Alabama", odds: "6/1", airports: [
        { code: "BHM", name: "Birmingham" }, { code: "TCL", name: "Tuscaloosa" }
    ]},
    { name: "Dusty May", school: "Michigan", odds: "7/1", airports: [
        { code: "DTW", name: "Detroit" }
    ]},
    { name: "Brad Stevens", school: "Celtics (Exec)", odds: "10/1", airports: [
        { code: "BOS", name: "Boston" }
    ]},
    { name: "Billy Donovan", school: "Chicago Bulls", odds: "12/1", airports: [
        { code: "ORD", name: "Chicago O'Hare" }, { code: "MDW", name: "Chicago Midway" }
    ]},
    { name: "Jay Wright", school: "Retired (Villanova)", odds: "15/1", airports: [
        { code: "PHL", name: "Philadelphia" }
    ]},
    { name: "Grant McCasland", school: "Texas Tech", odds: "18/1", airports: [
        { code: "LBB", name: "Lubbock" }
    ]},
    { name: "Tommy Lloyd", school: "Arizona", odds: "20/1", airports: [
        { code: "TUS", name: "Tucson" }
    ]},
    { name: "Wes Miller", school: "Cincinnati", odds: "22/1", airports: [
        { code: "CVG", name: "Cincinnati" }
    ]},
    { name: "Kenny Smith", school: "TV Analyst", odds: "50/1", airports: [
        { code: "ATL", name: "Atlanta" }
    ]},
    { name: "Sean May", school: "UNC (Assistant)", odds: "40/1", airports: [] },
];

// Render alerts
document.getElementById('alerts').innerHTML = alerts.map(a =>
    `<div class="alert alert-${a.type}"><span class="alert-tag">${a.tag}</span>${a.text}</div>`
).join('');

// Render headlines
const headlines = [
    { text: "Sources: UNC, Davis discussing future after tournament loss", src: "ESPN", url: "https://www.espn.com/mens-college-basketball/story/_/id/48270301/sources-unc-davis-discussing-future-tournament-loss" },
    { text: "Hubert Davis' future at North Carolina in serious doubt after historic collapse", src: "CBS Sports", url: "https://www.cbssports.com/college-basketball/news/hubert-davis-future-at-north-carolina-in-serious-doubt-as-pressure-mounts-after-historic-collapse/" },
    { text: "If UNC wants Todd Golden, it must act fast before these 2 schools jump in", src: "KeepingItHeel", url: "https://keepingitheel.com/if-unc-wants-todd-golden-it-must-act-fast-before-these-2-schools-jump-in" },
    { text: "Florida's Todd Golden could get 'football coach' salary offer from UNC", src: "Newsweek", url: "https://www.newsweek.com/sports/ncaa/florida-todd-golden-football-coach-salary-unc-11717813" },
    { text: "Hubert Davis latest: player meetings, radio show postponed", src: "WRAL", url: "https://www.wral.com/sports/north-carolina-hubert-davis-future-meetings-postponed-march-2026/" },
    { text: "UNC basketball coaching job not as attractive as people think, analyst says", src: "Yahoo Sports", url: "https://sports.yahoo.com/articles/unc-basketball-coaching-job-not-003034200.html" },
    { text: "Stephen A. Smith urges UNC legend to replace Hubert Davis", src: "Newsweek", url: "https://www.newsweek.com/sports/ncaa/stephen-a-smith-urges-unc-legend-to-replace-hubert-davis-as-head-coach-11724041" },
    { text: "Hubert Davis replacements: Ranking North Carolina's best candidates", src: "Yahoo Sports", url: "https://sports.yahoo.com/articles/hubert-davis-replacements-ranking-north-185911484.html" },
];
document.getElementById('headlines').innerHTML = headlines.map(h =>
    `<a class="headline" href="${h.url}" target="_blank">${h.text}<span class="hl-src">${h.src}</span></a>`
).join('');

// Render routes
document.getElementById('routes').innerHTML = candidates.map(c => {
    if (!c.airports.length) return `
        <div class="route">
            <div class="route-top"><span class="route-name">${c.name}</span><span class="route-odds">${c.odds}</span></div>
            <div class="route-school">${c.school} — Already in Chapel Hill</div>
        </div>`;
    return `
        <div class="route">
            <div class="route-top"><span class="route-name">${c.name}</span><span class="route-odds">${c.odds}</span></div>
            <div class="route-school">${c.school}</div>
            <div class="route-links">
                ${c.airports.map(a => `
                    <a href="https://globe.adsbexchange.com/?airport=K${a.code}" target="_blank">${a.code}</a>
                    <a href="https://flightaware.com/live/findflight?origin=K${a.code}&destination=KRDU" target="_blank">${a.code}→RDU</a>
                `).join('')}
            </div>
        </div>`;
}).join('');
