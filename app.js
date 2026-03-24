const candidates = [
    { name: "Todd Golden", school: "Florida", city: "Gainesville, FL", code: "GNV", odds: "3/1" },
    { name: "Mark Byington", school: "Vanderbilt", city: "Nashville, TN", code: "BNA", odds: "4/1" },
    { name: "TJ Otzelberger", school: "Iowa State", city: "Des Moines, IA", code: "DSM", odds: "5/1" },
    { name: "Nate Oats", school: "Alabama", city: "Tuscaloosa, AL", code: "BHM", odds: "6/1" },
    { name: "Dusty May", school: "Michigan", city: "Detroit, MI", code: "DTW", odds: "7/1" },
    { name: "Brad Stevens", school: "Celtics (Exec)", city: "Boston, MA", code: "BOS", odds: "10/1" },
    { name: "Billy Donovan", school: "Chicago Bulls", city: "Chicago, IL", code: "ORD", odds: "12/1" },
    { name: "Jay Wright", school: "Retired (Nova)", city: "Philadelphia, PA", code: "PHL", odds: "15/1" },
    { name: "Grant McCasland", school: "Texas Tech", city: "Lubbock, TX", code: "LBB", odds: "18/1" },
    { name: "Tommy Lloyd", school: "Arizona", city: "Tucson, AZ", code: "TUS", odds: "20/1" },
    { name: "Wes Miller", school: "Cincinnati", city: "Cincinnati, OH", code: "CVG", odds: "22/1" },
    { name: "Kenny Smith", school: "TV Analyst", city: "Atlanta, GA", code: "ATL", odds: "50/1" },
    { name: "Sean May", school: "UNC (Asst)", city: "Chapel Hill", code: null, odds: "40/1" },
];

// Headlines sorted by date (newest first)
const headlines = [
    { date: "Mar 24", text: "Sources: UNC, Davis discussing future after tournament loss", src: "ESPN", url: "https://www.espn.com/mens-college-basketball/story/_/id/48270301/sources-unc-davis-discussing-future-tournament-loss" },
    { date: "Mar 24", text: "Player meetings & Davis radio show postponed", src: "WRAL", url: "https://www.wral.com/sports/north-carolina-hubert-davis-future-meetings-postponed-march-2026/" },
    { date: "Mar 24", text: "Davis' future at UNC in serious doubt after historic collapse", src: "CBS", url: "https://www.cbssports.com/college-basketball/news/hubert-davis-future-at-north-carolina-in-serious-doubt-as-pressure-mounts-after-historic-collapse/" },
    { date: "Mar 24", text: "If UNC wants Todd Golden, it must act fast before Kentucky & Kansas jump in", src: "KIH", url: "https://keepingitheel.com/if-unc-wants-todd-golden-it-must-act-fast-before-these-2-schools-jump-in" },
    { date: "Mar 24", text: "Golden could get 'football coach' salary offer from UNC", src: "Newsweek", url: "https://www.newsweek.com/sports/ncaa/florida-todd-golden-football-coach-salary-unc-11717813" },
    { date: "Mar 24", text: "Stephen A. Smith urges UNC to hire Kenny Smith", src: "Newsweek", url: "https://www.newsweek.com/sports/ncaa/stephen-a-smith-urges-unc-legend-to-replace-hubert-davis-as-head-coach-11724041" },
    { date: "Mar 24", text: "UNC coaching job not as attractive as people think — Greenberg", src: "Yahoo", url: "https://sports.yahoo.com/articles/unc-basketball-coaching-job-not-003034200.html" },
    { date: "Mar 23", text: "Hubert Davis replacements: Ranking UNC's best candidates", src: "Yahoo", url: "https://sports.yahoo.com/articles/hubert-davis-replacements-ranking-north-185911484.html" },
    { date: "Mar 23", text: "Davis' future could be decided this week", src: "WRAL", url: "https://www.wral.com/sports/north-carolina-hubert-davis-future-after-first-round-loss-to-vcu-march-2026/" },
    { date: "Mar 23", text: "UNC blows 19-pt lead to VCU — largest first-round collapse in NCAA history", src: "ESPN", url: "https://www.espn.com/college-basketball/team/_/id/153/north-carolina-tar-heels" },
];
document.getElementById('headlines').innerHTML = headlines.map(h =>
    `<a class="headline" href="${h.url}" target="_blank"><span class="hl-date">${h.date}</span> ${h.text}<span class="hl-src">${h.src}</span></a>`
).join('');

// Prominent donors/boosters — search FAA for their aircraft
const donors = [
    { name: "Charlie Loudermilk", note: "Founder of Aaron's. UNC '50. One of largest UNC athletics donors. Atlanta-based. Donated millions including $7.5M for student-athlete center." },
    { name: "Rams Club Leadership", note: "John Montgomery (Exec Director). 17,000+ members. HQ at Williamson Athletics Center next to Dean Dome." },
    { name: "Committee for South Campus Arena", note: "Group of major donors involved in Dean Dome renovation debate. Includes unnamed 'big money' figures who met with UNC stakeholders about coaching change." },
    { name: "Anonymous Booster Group", note: "Per InsideCarolina: a group of major boosters met Friday and signaled they would fund Davis' buyout AND a big-name hire. Names not public." },
];
document.getElementById('donors').innerHTML = donors.map(d =>
    `<div class="donor"><b>${d.name}</b><div class="donor-note">${d.note}</div></div>`
).join('');

// Routes table
document.getElementById('routes').innerHTML = candidates.map(c => `<tr>
    <td><b>${c.name}</b></td>
    <td>${c.school}</td>
    <td>${c.city}</td>
    <td>${c.code || '—'}</td>
    <td>${c.code ? `<a href="https://flightaware.com/live/findflight?origin=K${c.code}&destination=KRDU" target="_blank">${c.code}→RDU</a>
        <a href="https://flightaware.com/live/findflight?origin=KRDU&destination=K${c.code}" target="_blank">RDU→${c.code}</a>
        <a href="https://globe.adsbexchange.com/?airport=K${c.code}" target="_blank">ADS-B</a>` : 'Local'}</td>
</tr>`).join('');
