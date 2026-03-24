// ============================================================
// UNC Basketball Coaching Search Tracker — Data & App Logic
// ============================================================

const candidates = [
    {
        name: "Todd Golden",
        school: "Florida",
        odds: "3/1",
        oddsRank: 1,
        age: 40,
        record: "National Champion (2025)",
        salary: "~$6.5M/yr",
        airports: [
            { code: "GNV", name: "Gainesville Regional", city: "Gainesville, FL" },
            { code: "JAX", name: "Jacksonville International", city: "Jacksonville, FL" }
        ],
        note: "Clear favorite. Won national title last season at Florida. UNC may need to offer $13-14M/yr over 10 years. Season just ended — available immediately.",
        topPick: true
    },
    {
        name: "Mark Byington",
        school: "Vanderbilt",
        odds: "4/1",
        oddsRank: 2,
        age: null,
        record: "Turned Vandy into SEC contender",
        salary: "Unknown",
        airports: [
            { code: "BNA", name: "Nashville International", city: "Nashville, TN" }
        ],
        note: "UNC-Wilmington alum with North Carolina ties. Has transformed Vanderbilt in just two seasons. Strong 'Carolina family' connection."
    },
    {
        name: "TJ Otzelberger",
        school: "Iowa State",
        odds: "5/1",
        oddsRank: 3,
        age: null,
        record: "National title contender 2026",
        salary: "Unknown",
        airports: [
            { code: "DSM", name: "Des Moines International", city: "Des Moines, IA" }
        ],
        note: "Iowa State is a national title contender this year. One of the steadiest coaches in the country. Elite defensive system."
    },
    {
        name: "Nate Oats",
        school: "Alabama",
        odds: "6/1",
        oddsRank: 4,
        age: null,
        record: "169-72 at Alabama, Final Four 2024",
        salary: "Unknown",
        airports: [
            { code: "BHM", name: "Birmingham-Shuttlesworth", city: "Birmingham, AL" },
            { code: "TCL", name: "Tuscaloosa Regional", city: "Tuscaloosa, AL" }
        ],
        note: "Two SEC regular season titles, two SEC tournament titles. Fast-paced offensive style. Final Four appearance in 2024."
    },
    {
        name: "Dusty May",
        school: "Michigan",
        odds: "7/1",
        oddsRank: 5,
        age: null,
        record: "Previously FAU, now Michigan",
        salary: "Unknown",
        airports: [
            { code: "DTW", name: "Detroit Metro", city: "Detroit, MI" }
        ],
        note: "Led FAU on a Cinderella Final Four run. Now rebuilding Michigan. Proven program builder."
    },
    {
        name: "Brad Stevens",
        school: "Boston Celtics (Exec)",
        odds: "10/1",
        oddsRank: 6,
        age: 49,
        record: "Former Celtics HC, current President of Basketball Ops",
        salary: "Unknown",
        airports: [
            { code: "BOS", name: "Logan International", city: "Boston, MA" }
        ],
        note: "Currently front office, not coaching. A leading AD told SI that UNC needs to reach out immediately. Would be a marquee hire."
    },
    {
        name: "Billy Donovan",
        school: "Chicago Bulls",
        odds: "12/1",
        oddsRank: 7,
        age: 60,
        record: "2x National Champion (Florida)",
        salary: "Unknown",
        airports: [
            { code: "ORD", name: "O'Hare International", city: "Chicago, IL" },
            { code: "MDW", name: "Midway", city: "Chicago, IL" }
        ],
        note: "Two national championships at Florida. Bulls currently struggling. Would bring elite pedigree and recruiting chops."
    },
    {
        name: "Jay Wright",
        school: "Retired (Villanova)",
        odds: "15/1",
        oddsRank: 8,
        age: null,
        record: "2x National Champion (Villanova)",
        salary: "N/A — Retired",
        airports: [
            { code: "PHL", name: "Philadelphia International", city: "Philadelphia, PA" }
        ],
        note: "Two national titles at Villanova. Retired in 2022. Most accomplished candidate but would need to be coaxed out of retirement. Dream hire for many fans."
    },
    {
        name: "Grant McCasland",
        school: "Texas Tech",
        odds: "18/1",
        oddsRank: 9,
        age: null,
        record: "Built North Texas into C-USA power, now at Texas Tech",
        salary: "Unknown",
        airports: [
            { code: "LBB", name: "Lubbock Preston Smith Intl", city: "Lubbock, TX" }
        ],
        note: "Strong program builder. Took North Texas to new heights before moving to Texas Tech. Under-the-radar candidate."
    },
    {
        name: "Tommy Lloyd",
        school: "Arizona",
        odds: "20/1",
        oddsRank: 10,
        age: null,
        record: "Pac-12/Big 12 contender at Arizona",
        salary: "Unknown",
        airports: [
            { code: "TUS", name: "Tucson International", city: "Tucson, AZ" }
        ],
        note: "Long-time Gonzaga assistant before becoming Arizona HC. Strong international recruiting pipeline."
    },
    {
        name: "Wes Miller",
        school: "Cincinnati",
        odds: "22/1",
        oddsRank: 11,
        age: null,
        record: "Former UNC player, built UNC-Greensboro, now at Cincinnati",
        salary: "Unknown",
        airports: [
            { code: "CVG", name: "Cincinnati/Northern Kentucky Intl", city: "Cincinnati, OH" }
        ],
        note: "Carolina family connection — played under Roy Williams. Would satisfy the 'keep it in the family' crowd while still being an outside hire."
    },
    {
        name: "Kenny Smith",
        school: "TV Analyst (TNT)",
        odds: "50/1",
        oddsRank: 12,
        age: null,
        record: "UNC legend, 2x NBA champion, no coaching experience",
        salary: "N/A",
        airports: [
            { code: "ATL", name: "Hartsfield-Jackson Atlanta Intl", city: "Atlanta, GA" }
        ],
        note: "Stephen A. Smith pushing him publicly. UNC legend but zero coaching experience at any level. Long shot."
    },
    {
        name: "Sean May",
        school: "UNC (Assistant)",
        odds: "40/1",
        oddsRank: 13,
        age: null,
        record: "Current UNC assistant, 2005 Final Four MOP",
        salary: "N/A — Current staff",
        airports: [],
        note: "Internal candidate. Already in Chapel Hill. Elite recruiter but no head coaching experience. Would maintain Carolina family tradition."
    }
];

const newsItems = [
    {
        source: "espn",
        title: "Hubert Davis not expected to return as UNC head coach",
        excerpt: "ESPN's Pete Thamel reports that an 'orchestrated resignation' is more likely than a firing, with a decision expected this week.",
        time: "March 24, 2026 — 10:30 AM",
        url: "https://www.espn.com/college-basketball/team/_/id/153/north-carolina-tar-heels"
    },
    {
        source: "cbs",
        title: "UNC blows historic 19-point lead in first-round loss to VCU",
        excerpt: "The Tar Heels' 82-78 overtime loss marks the largest blown lead in first-round NCAA Tournament history and a second straight first-round exit.",
        time: "March 23, 2026 — 11:45 PM",
        url: "https://www.cbssports.com/college-basketball/news/"
    },
    {
        source: "si",
        title: "Coaches UNC could target to replace Hubert Davis",
        excerpt: "SI breaks down the top candidates, with Todd Golden, Mark Byington, and TJ Otzelberger leading the pack. A leading AD says UNC should call Brad Stevens immediately.",
        time: "March 24, 2026 — 8:00 AM",
        url: "https://www.si.com/college/unc"
    },
    {
        source: "yahoo",
        title: "Todd Golden could command football-coach money from UNC",
        excerpt: "Reports suggest UNC may need to offer $13-14M per year over 10 years to lure Golden away from Florida after his national championship season.",
        time: "March 24, 2026 — 9:15 AM",
        url: "https://sports.yahoo.com/"
    },
    {
        source: "fox",
        title: "Major booster group signals willingness to fund coaching change",
        excerpt: "Boosters indicate they have 'lost faith' in current direction but would rally significant funds for a buyout and big-name coaching hire.",
        time: "March 24, 2026 — 7:30 AM",
        url: "https://myfox8.com/sports/basketball/college-basketball/"
    },
    {
        source: "social",
        title: "InsideCarolina: Davis had no contact with staff for 24+ hours",
        excerpt: "Forum insiders report Hubert Davis has been unreachable to his own coaching staff since the VCU loss. Weekly radio show postponed.",
        time: "March 24, 2026 — 6:00 AM",
        url: "https://www.insidecarolina.com/"
    },
    {
        source: "cbs",
        title: "College basketball coaching carousel 2026: Full tracker",
        excerpt: "CBS Sports tracks all coaching changes across college basketball, with UNC expected to be the biggest domino to fall.",
        time: "March 24, 2026 — Updated",
        url: "https://www.cbssports.com/college-basketball/news/"
    },
    {
        source: "espn",
        title: "UNC financial constraints complicate coaching search",
        excerpt: "Heavy investment in football under Bill Belichick leaves UNC cash-strapped. Davis buyout is approximately $5.3M; a top-tier hire could cost 3x his current salary.",
        time: "March 24, 2026 — 11:00 AM",
        url: "https://www.espn.com/college-basketball/team/_/id/153/north-carolina-tar-heels"
    }
];

const timelineEvents = [
    {
        date: "March 21, 2026",
        title: "NCAA Tournament First Round",
        desc: "No. 6 UNC faces No. 11 VCU in first round.",
        active: false
    },
    {
        date: "March 23, 2026",
        title: "Historic Collapse vs. VCU",
        desc: "UNC blows a 19-point lead and loses 82-78 in OT — the largest first-round blown lead in NCAA Tournament history. Second straight first-round exit.",
        active: false
    },
    {
        date: "March 23-24, 2026",
        title: "Davis Goes Silent",
        desc: "Hubert Davis has no contact with coaching staff for 24+ hours. Weekly radio show postponed.",
        active: false
    },
    {
        date: "March 24, 2026",
        title: "Booster Meeting",
        desc: "Major booster group meets with UNC stakeholders. Reports indicate they've 'lost faith' and are willing to fund a coaching change.",
        active: true
    },
    {
        date: "March 24, 2026",
        title: "ESPN: Davis Not Expected to Return",
        desc: "Pete Thamel reports an 'orchestrated resignation' is more likely than a firing. Decision expected this week.",
        active: true
    },
    {
        date: "This Week (Expected)",
        title: "Official Separation",
        desc: "Hubert Davis expected to officially resign or be let go. Buyout ~$5.3M.",
        future: true
    },
    {
        date: "TBD",
        title: "Coaching Search Begins",
        desc: "AD Bubba Cunningham expected to launch formal search. Todd Golden (3/1), Mark Byington (4/1), TJ Otzelberger (5/1) are top targets.",
        future: true
    },
    {
        date: "TBD",
        title: "Candidate Interviews",
        desc: "Watch for private flights between RDU and candidate cities. UNC Air Operations at RDU General Aviation is the key facility to monitor.",
        future: true
    },
    {
        date: "TBD",
        title: "New Coach Announced",
        desc: "First outside hire in 74 years expected. Could reshape Carolina basketball for the next era.",
        future: true
    }
];

// ============================================================
// RENDER FUNCTIONS
// ============================================================

function renderOdds() {
    const container = document.getElementById('oddsList');
    container.innerHTML = candidates
        .sort((a, b) => a.oddsRank - b.oddsRank)
        .map((c, i) => `
            <div class="odds-item">
                <div>
                    <div class="odds-name">${c.name}</div>
                    <div class="odds-school">${c.school}</div>
                </div>
                <div class="odds-value ${i === 0 ? 'favorite' : ''}">${c.odds}</div>
            </div>
        `).join('');
}

function renderCandidates() {
    const container = document.getElementById('candidatesGrid');
    container.innerHTML = candidates
        .sort((a, b) => a.oddsRank - b.oddsRank)
        .map(c => `
            <div class="candidate-card ${c.topPick ? 'top-pick' : ''}">
                <div class="candidate-header">
                    <div class="candidate-name">${c.name}</div>
                    <div class="candidate-odds">${c.odds}</div>
                </div>
                <div class="candidate-role">${c.school}</div>
                <div class="candidate-details">
                    ${c.age ? `<div class="candidate-detail"><strong>Age:</strong> ${c.age}</div>` : ''}
                    <div class="candidate-detail"><strong>Record:</strong> ${c.record}</div>
                    <div class="candidate-detail"><strong>Salary:</strong> ${c.salary}</div>
                </div>
                <div>
                    ${c.airports.map(a => `
                        <div class="candidate-airport">✈ ${a.code} — ${a.name}</div>
                    `).join('')}
                </div>
                <div class="candidate-note">${c.note}</div>
            </div>
        `).join('');
}

function renderFlights() {
    const grid = document.getElementById('flightGrid');
    const allAirports = [];

    // Airport coordinates for ADS-B Exchange map links
    const airportCoords = {
        GNV: { lat: 29.69, lon: -82.27 },
        JAX: { lat: 30.49, lon: -81.69 },
        BNA: { lat: 36.12, lon: -86.68 },
        DSM: { lat: 41.53, lon: -93.66 },
        BHM: { lat: 33.56, lon: -86.75 },
        TCL: { lat: 33.22, lon: -87.61 },
        DTW: { lat: 42.21, lon: -83.35 },
        BOS: { lat: 42.36, lon: -71.01 },
        ORD: { lat: 41.97, lon: -87.91 },
        MDW: { lat: 41.79, lon: -87.75 },
        PHL: { lat: 39.87, lon: -75.24 },
        LBB: { lat: 33.66, lon: -101.82 },
        TUS: { lat: 32.12, lon: -110.94 },
        CVG: { lat: 39.05, lon: -84.67 },
        ATL: { lat: 33.64, lon: -84.43 }
    };

    candidates.forEach(c => {
        c.airports.forEach(a => {
            if (!allAirports.find(x => x.code === a.code)) {
                allAirports.push({
                    ...a,
                    candidate: c.name,
                    school: c.school,
                    odds: c.odds,
                    coords: airportCoords[a.code] || null
                });
            }
        });
    });

    grid.innerHTML = allAirports.map(a => {
        const adsbLink = a.coords
            ? `https://globe.adsbexchange.com/?airport=K${a.code}`
            : '#';
        const adsbAreaLink = a.coords
            ? `https://globe.adsbexchange.com/?lat=${a.coords.lat}&lon=${a.coords.lon}&zoom=10`
            : '#';

        return `
        <div class="card destination-card">
            <div class="airport-header">
                <div class="airport-code">${a.code}</div>
                <div class="airport-name">${a.name}</div>
            </div>
            <div class="airport-detail">${a.city}</div>
            <div class="candidate-tag">→ <strong>${a.candidate}</strong> (${a.school}) — ${a.odds}</div>
            <div class="flight-links" style="margin-top: 0.75rem;">
                <a href="${adsbLink}" target="_blank" class="flight-link pri">ADS-B Exchange</a>
                <a href="https://flightaware.com/live/findflight?origin=K${a.code}&destination=KRDU" target="_blank" class="flight-link pri">${a.code} → RDU</a>
                <a href="https://flightaware.com/live/findflight?origin=KRDU&destination=K${a.code}" target="_blank" class="flight-link">RDU → ${a.code}</a>
                <a href="https://flightaware.com/live/airport/K${a.code}/departures" target="_blank" class="flight-link">Departures</a>
                <a href="https://www.flightradar24.com/${a.coords ? a.coords.lat + ',' + a.coords.lon + '/10' : 'airport/' + a.code.toLowerCase()}" target="_blank" class="flight-link">FR24 Map</a>
            </div>
        </div>
    `}).join('');
}

function renderNews(filter = 'all') {
    const container = document.getElementById('newsList');
    const filtered = filter === 'all' ? newsItems : newsItems.filter(n => n.source === filter);

    container.innerHTML = filtered.map(n => `
        <div class="news-item" data-source="${n.source}">
            <div class="news-item-header">
                <div>
                    <div class="news-title"><a href="${n.url}" target="_blank">${n.title}</a></div>
                    <div class="news-excerpt">${n.excerpt}</div>
                </div>
                <span class="news-source ${n.source}">${n.source.toUpperCase()}</span>
            </div>
            <div class="news-time">${n.time}</div>
        </div>
    `).join('');
}

function renderTimeline() {
    const container = document.getElementById('timeline');
    container.innerHTML = timelineEvents.map(e => `
        <div class="timeline-item ${e.active ? 'active' : ''} ${e.future ? 'future' : ''}">
            <div class="timeline-date">${e.date}</div>
            <div class="timeline-title">${e.title}</div>
            <div class="timeline-desc">${e.desc}</div>
        </div>
    `).join('');
}

// ============================================================
// TAB NAVIGATION
// ============================================================

document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        document.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active'));
        btn.classList.add('active');
        document.getElementById(`tab-${btn.dataset.tab}`).classList.add('active');
    });
});

// News filter
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        renderNews(btn.dataset.filter);
    });
});

// ============================================================
// INIT
// ============================================================

renderOdds();
renderCandidates();
renderFlights();
renderNews();
renderTimeline();

// Duplicate headlines for seamless loop
const track = document.getElementById('headlinesTrack');
if (track) {
    track.innerHTML += track.innerHTML;
}
