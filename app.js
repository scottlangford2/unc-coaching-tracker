// =====================
// FLIGHT ALERTS — topline
// =====================
// =====================
// FLIGHT SIGHTINGS — update this when flights are spotted
// =====================
const sightings = [
    // Add sightings here as they happen:
    // { time: "Mar 25 2:15 PM", level: "hot", text: "Gulfstream G280 departed RDU heading to GNV...", link: "https://..." }
];

const watchStatus = {
    level: "none", // "none" | "watch" | "hot"
    text: 'No flights spotted yet. Davis decision expected this week — search likely begins after. <a href="https://globe.adsbexchange.com/?airport=KRDU" target="_blank">Watch RDU live</a>'
};

let alertsHTML = `<div class="sightings-header">Flight Sightings</div>`;
alertsHTML += `<div class="flight-alert flight-alert-${watchStatus.level}">${watchStatus.text}</div>`;

if (sightings.length > 0) {
    alertsHTML += sightings.map(s =>
        `<div class="flight-alert flight-alert-${s.level}">
            <span class="sighting-time">${s.time}</span> ${s.text}
            ${s.link ? `<a href="${s.link}" target="_blank">Track</a>` : ''}
        </div>`
    ).join('');
} else {
    alertsHTML += `<div class="no-sightings">No sightings reported. Check routes below or <a href="https://globe.adsbexchange.com/?airport=KRDU" target="_blank">monitor RDU on ADS-B Exchange</a>.</div>`;
}

document.getElementById('flight-alerts').innerHTML = alertsHTML;

// =====================
// CANDIDATES
// =====================
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

document.getElementById('routes').innerHTML = candidates.map(c => `<tr>
    <td><b>${c.name}</b></td>
    <td>${c.school}</td>
    <td>${c.city}</td>
    <td>${c.code || '—'}</td>
    <td>${c.code ? `<a href="https://flightaware.com/live/findflight?origin=K${c.code}&destination=KRDU" target="_blank">${c.code}→RDU</a>
        <a href="https://flightaware.com/live/findflight?origin=KRDU&destination=K${c.code}" target="_blank">RDU→${c.code}</a>
        <a href="https://globe.adsbexchange.com/?airport=K${c.code}" target="_blank">ADS-B</a>` : 'Local'}</td>
</tr>`).join('');

// =====================
// NEWS — sorted by date, newest first
// =====================
const news = [
    { date: "Mar 24", text: "Sources: UNC, Davis discussing future after tournament loss", detail: "ESPN's Thamel reports an 'orchestrated resignation' is likely. Decision expected this week. Davis has not contacted staff in 24+ hours.", src: "ESPN", url: "https://www.espn.com/mens-college-basketball/story/_/id/48270301/sources-unc-davis-discussing-future-tournament-loss" },
    { date: "Mar 24", text: "Player meetings & Davis radio show postponed", detail: "In-person meetings with players and families postponed. Monday radio show cancelled. No decision announced Monday.", src: "WRAL", url: "https://www.wral.com/sports/north-carolina-hubert-davis-future-meetings-postponed-march-2026/" },
    { date: "Mar 24", text: "Booster support for Davis has 'cratered'", detail: "InsideCarolina reports major donors met Friday, said they've 'lost faith' and would fund buyout (~$5.3M) plus a big-name hire.", src: "CBS Sports", url: "https://www.cbssports.com/college-basketball/news/hubert-davis-future-at-north-carolina-in-serious-doubt-as-pressure-mounts-after-historic-collapse/" },
    { date: "Mar 24", text: "If UNC wants Todd Golden, it must act fast", detail: "Kentucky and Kansas could also pursue Golden if their coaches leave. UNC may need to offer $13-14M/yr over 10 years.", src: "KeepingItHeel", url: "https://keepingitheel.com/if-unc-wants-todd-golden-it-must-act-fast-before-these-2-schools-jump-in" },
    { date: "Mar 24", text: "Golden could get 'football coach' salary from UNC", detail: "Reports suggest UNC boosters are willing to pay Golden significantly more than his current ~$6.5M/yr at Florida.", src: "Newsweek", url: "https://www.newsweek.com/sports/ncaa/florida-todd-golden-football-coach-salary-unc-11717813" },
    { date: "Mar 24", text: "Stephen A. Smith urges UNC to hire Kenny Smith", detail: "ESPN's Stephen A. publicly pushing former UNC legend and TNT analyst Kenny 'The Jet' Smith for the job.", src: "Newsweek", url: "https://www.newsweek.com/sports/ncaa/stephen-a-smith-urges-unc-legend-to-replace-hubert-davis-as-head-coach-11724041" },
    { date: "Mar 24", text: "Analyst: UNC job 'not as attractive as people think'", detail: "ESPN's Seth Greenberg says the 'keep it in the family' culture and financial constraints make it a tougher sell.", src: "Yahoo Sports", url: "https://sports.yahoo.com/articles/unc-basketball-coaching-job-not-003034200.html" },
    { date: "Mar 23", text: "Ranking UNC's best coaching candidates", detail: "Golden (3/1), Byington (4/1), Otzelberger (5/1), Oats (6/1), May (7/1) top the list. Stevens and Donovan are wildcards.", src: "Yahoo Sports", url: "https://sports.yahoo.com/articles/hubert-davis-replacements-ranking-north-185911484.html" },
    { date: "Mar 23", text: "Davis' future could be decided this week", detail: "UNC officials expected to make a decision on Davis in coming days. Contract runs through 2030 at ~$3.85M/yr.", src: "WRAL", url: "https://www.wral.com/sports/north-carolina-hubert-davis-future-after-first-round-loss-to-vcu-march-2026/" },
    { date: "Mar 23", text: "UNC blows 19-pt lead to VCU in NCAA first round", detail: "No. 6 UNC lost 82-78 in OT to No. 11 VCU. Largest blown lead in first-round tournament history. Second straight first-round exit.", src: "ESPN", url: "https://www.espn.com/college-basketball/team/_/id/153/north-carolina-tar-heels" },
];
document.getElementById('news').innerHTML = news.map(n =>
    `<a class="news-item" href="${n.url}" target="_blank">
        <div class="news-head"><span class="hl-date">${n.date}</span> <b>${n.text}</b> <span class="hl-src">${n.src}</span></div>
        <div class="news-detail">${n.detail}</div>
    </a>`
).join('');

// =====================
// DONORS
// =====================
const donors = [
    { name: "Charlie Loudermilk", note: "Founder of Aaron's. UNC '50. One of largest UNC athletics donors. Atlanta-based. Donated millions including $7.5M for student-athlete center." },
    { name: "Rams Club Leadership", note: "John Montgomery (Exec Director). 17,000+ members. HQ at Williamson Athletics Center next to Dean Dome." },
    { name: "Committee for South Campus Arena", note: "Group of major donors involved in Dean Dome renovation debate. Includes unnamed 'big money' figures who met with UNC stakeholders about coaching change." },
    { name: "Anonymous Booster Group", note: "Per InsideCarolina: a group of major boosters met Friday and signaled they would fund Davis' buyout AND a big-name hire. Names not public." },
];
document.getElementById('donors').innerHTML = donors.map(d =>
    `<div class="donor"><b>${d.name}</b><div class="donor-note">${d.note}</div></div>`
).join('');

// =====================
// TABS
// =====================
document.querySelectorAll('.tab').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.tab').forEach(b => b.classList.remove('active'));
        document.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active'));
        btn.classList.add('active');
        document.getElementById('tab-' + btn.dataset.tab).classList.add('active');
    });
});
