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

    candidates.forEach(c => {
        c.airports.forEach(a => {
            if (!allAirports.find(x => x.code === a.code)) {
                allAirports.push({ ...a, candidate: c.name, school: c.school, odds: c.odds });
            }
        });
    });

    grid.innerHTML = allAirports.map(a => `
        <div class="card destination-card">
            <div class="airport-header">
                <div class="airport-code">${a.code}</div>
                <div class="airport-name">${a.name}</div>
            </div>
            <div class="airport-detail">${a.city}</div>
            <div class="candidate-tag">→ ${a.candidate} (${a.school}) — ${a.odds}</div>
            <div class="flight-links" style="margin-top: 0.75rem;">
                <a href="https://www.flightradar24.com/airport/${a.code.toLowerCase()}" target="_blank" class="flight-link">Flightradar24</a>
                <a href="https://flightaware.com/live/airport/K${a.code}" target="_blank" class="flight-link">FlightAware</a>
                <a href="https://flightaware.com/live/findflight?origin=K${a.code}&destination=KRDU" target="_blank" class="flight-link">→ RDU Routes</a>
                <a href="https://flightaware.com/live/findflight?origin=KRDU&destination=K${a.code}" target="_blank" class="flight-link">RDU → ${a.code}</a>
            </div>
        </div>
    `).join('');
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
