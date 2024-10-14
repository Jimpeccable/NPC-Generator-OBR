// script.js

import {
    firstNames, lastNames, sexes, races, classes, backgrounds, professions,
    demeanors, motivations, secrets, quirks, items, tavernNames,
    campDescriptions, staffRoles, regions, trustLevels, noticeboardsData
} from './data.js';

// Utility Functions
function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
}

function getRandomElements(array, count) {
    const shuffled = [...array].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

function generateMoney() {
    const gold = Math.floor(Math.random() * 10);
    const silver = Math.floor(Math.random() * 20);
    const copper = Math.floor(Math.random() * 50);
    return `${gold} gold, ${silver} silver, ${copper} copper`;
}

// Tab Switching
function switchTab(tabId) {
    document.querySelectorAll('.tab-content').forEach(tab => {
        tab.classList.remove('active');
    });
    document.querySelectorAll('.tab-button').forEach(button => {
        button.classList.remove('active');
    });
    
    const selectedTab = document.getElementById(tabId);
    const selectedButton = document.querySelector(`.tab-button[data-tab="${tabId}"]`);
    
    if (selectedTab && selectedButton) {
        selectedTab.classList.add('active');
        selectedButton.classList.add('active');
    }

    if (tabId === 'generate-tab') {
        const selectedNPCInfo = document.getElementById('selectedNPCInfo');
        if (selectedNPCInfo) {
            selectedNPCInfo.innerHTML = '';
        }
    }
}

// Generator Functions
function generateNPC() {
    const npc = {
        firstName: getRandomElement(firstNames),
        lastName: getRandomElement(lastNames),
        race: getRandomElement(races),
        class: getRandomElement(classes),
        age: Math.floor(Math.random() * 70) + 18,
        profession: getRandomElement(professions),
        demeanor: getRandomElement(demeanors),
        motivation: getRandomElement(motivations),
        quirk: getRandomElement(quirks),
        money: generateMoney(),
        item: getRandomElement(items),
        secret: getRandomElement(secrets)
    };
    displayNPC(npc);
    document.getElementById('npcInfo').style.display = 'block';
    document.getElementById('locationInfo').style.display = 'none';
}

function generateLocation(type) {
    let locationInfo = "";
    let generatedNPCs = [];

    if (type === "Tavern") {
        const tavernName = getRandomElement(tavernNames);
        const patronCount = Math.floor(Math.random() * 10) + 5;
        const staffCount = Math.floor(Math.random() * 4) + 2;
        locationInfo += `<h2>${tavernName}</h2>`;
        locationInfo += `<p>Patrons: ${patronCount}</p>`;
        locationInfo += "<h3>Staff:</h3>";
        for (let i = 0; i < staffCount; i++) {
            const staffMember = {
                firstName: getRandomElement(firstNames),
                lastName: getRandomElement(lastNames),
                race: getRandomElement(races)
            };
            const role = getRandomElement(staffRoles);
            locationInfo += `<p>${role}: ${staffMember.firstName} ${staffMember.lastName} (${staffMember.race})</p>`;
            generatedNPCs.push(staffMember);
        }
    } else if (type === "Camp") {
        const campDescription = getRandomElement(campDescriptions);
        const travelerCount = Math.floor(Math.random() * 6) + 2;
        locationInfo += `<h2>Camp</h2>`;
        locationInfo += `<p>${campDescription}</p>`;
        locationInfo += `<p>Travelers: ${travelerCount}</p>`;
        for (let i = 0; i < travelerCount; i++) {
            const traveler = {
                firstName: getRandomElement(firstNames),
                lastName: getRandomElement(lastNames),
                race: getRandomElement(races),
                profession: getRandomElement(professions)
            };
            locationInfo += `<p>${traveler.firstName} ${traveler.lastName} (${traveler.race}, ${traveler.profession})</p>`;
            generatedNPCs.push(traveler);
        }
    } else if (type === "Town" || type === "City") {
        const name = `${getRandomElement(lastNames)}${type === "Town" ? "ton" : "ville"}`;
        const population = type === "Town" ? Math.floor(Math.random() * 4000) + 1000 : Math.floor(Math.random() * 50000) + 10000;
        const leaderTitle = type === "Town" ? "Mayor" : "Governor";
        const leader = {
            firstName: getRandomElement(firstNames),
            lastName: getRandomElement(lastNames),
            race: getRandomElement(races)
        };
        locationInfo += `<h2>${name}</h2>`;
        locationInfo += `<p>Population: ${population}</p>`;
        locationInfo += `<p>${leaderTitle}: ${leader.firstName} ${leader.lastName} (${leader.race})</p>`;
        locationInfo += "<h3>Notable Locations:</h3>";
        const locations = ["Town Hall", "Market Square", "Temple", "Blacksmith", "Inn"];
        locations.forEach(loc => {
            locationInfo += `<p>${loc}</p>`;
        });
        generatedNPCs.push(leader);
    }

    const locationInfoElement = document.getElementById('locationInfo');
    const npcInfoElement = document.getElementById('npcInfo');

    if (locationInfoElement && npcInfoElement) {
        locationInfoElement.innerHTML = locationInfo;
        locationInfoElement.style.display = 'block';
        npcInfoElement.style.display = 'none';
    }
    
    const saveLocationBtn = document.getElementById('saveLocationBtn');
    if (saveLocationBtn) {
        saveLocationBtn.style.display = 'inline-block';
    }
}

function generateEvent() {
    if (!isPatreonUnlocked()) {
        alert("This feature is locked. Please unlock with a valid Patreon code.");
        return;
    }
    const regionSelect = document.getElementById('regionSelect');
    const selectedRegion = regionSelect.value;
    if (selectedRegion && regions[selectedRegion]) {
        const event = getRandomElement(regions[selectedRegion]);
        document.getElementById('eventInfo').innerHTML = `<h3>${selectedRegion} Event:</h3><p>${event}</p>`;
    } else {
        document.getElementById('eventInfo').innerHTML = "<p>Please select a region first.</p>";
    }
}

// Display Functions
function displayNPC(npc) {
    const npcInfo = document.getElementById('npcInfo');
    npcInfo.innerHTML = `
        <h3>${npc.firstName} ${npc.lastName}</h3>
        <div class="info-content">
            <p><strong>Race:</strong> ${npc.race} | <strong>Class:</strong> ${npc.class} | <strong>Age:</strong> ${npc.age}</p>
            <p><strong>Profession:</strong> ${npc.profession} | <strong>Demeanor:</strong> ${npc.demeanor}</p>
            <p><strong>Motivation:</strong> ${npc.motivation}</p>
            <p><strong>Quirk:</strong> ${npc.quirk}</p>
            <p><strong>Money:</strong> ${npc.money}</p>
            <p><strong>Item:</strong> ${npc.item}</p>
            <p><strong>Secret:</strong> ${npc.secret}</p>
        </div>
    `;
}

function displayVisitedItems() {
    const savedNPCs = JSON.parse(localStorage.getItem('savedNPCs')) || {};
    const savedLocations = JSON.parse(localStorage.getItem('savedLocations')) || {};
    let visitedItems = '<h3>Visited NPCs</h3><ul>';
    for (let npcName in savedNPCs) {
        if (savedNPCs[npcName].met) {
            visitedItems += `<li>${savedNPCs[npcName].name}</li>`;
        }
    }
    visitedItems += '</ul><h3>Visited Locations</h3><ul>';
    for (let locationName in savedLocations) {
        if (savedLocations[locationName].visited) {
            visitedItems += `<li>${savedLocations[locationName].name}</li>`;
        }
    }
    visitedItems += '</ul>';
    document.getElementById('visitedItems').innerHTML = visitedItems;
}

// Save and Load Functions
function saveNPC() {
    if (!isPatreonUnlocked()) {
        alert("This feature is locked. Please unlock with a valid Patreon code.");
        return;
    }
    const npcInfo = document.getElementById('npcInfo').innerHTML;
    if (!npcInfo.trim()) return;
    const npcName = npcInfo.match(/<h3>(.*?)<\/h3>/)[1];
    const npcRace = npcInfo.match(/<strong>Race:<\/strong> (.*?) \|/)[1];
    const npcAge = npcInfo.match(/<strong>Age:<\/strong> (.*?)<\/p>/)[1];
    let savedNPCs = JSON.parse(localStorage.getItem('savedNPCs')) || {};
    savedNPCs[npcName] = { name: npcName, race: npcRace, age: npcAge, info: npcInfo, met: false, trust: 4 };
    localStorage.setItem('savedNPCs', JSON.stringify(savedNPCs));
    updateSavedNPCsList();
    updateNPCTrustList();
    alert(`NPC "${npcName}" has been saved!`);
}

function saveLocation() {
    if (!isPatreonUnlocked()) {
        alert("This feature is locked. Please unlock with a valid Patreon code.");
        return;
    }
    const locationInfo = document.getElementById('locationInfo').innerHTML;
    if (!locationInfo.trim()) return;
    const locationName = locationInfo.match(/<h2>(.*?)<\/h2>/)[1];
    let savedLocations = JSON.parse(localStorage.getItem('savedLocations')) || {};
    savedLocations[locationName] = { name: locationName, info: locationInfo, visited: false };
    localStorage.setItem('savedLocations', JSON.stringify(savedLocations));
    updateSavedLocationsList();
    alert(`Location "${locationName}" has been saved!`);
}

function loadNPC(npcName) {
    const savedNPCs = JSON.parse(localStorage.getItem('savedNPCs')) || {};
    if (savedNPCs[npcName]) {
        document.getElementById('selectedNPCInfo').innerHTML = savedNPCs[npcName].info;
        updateNPCTrustList();
        switchTab('trust-tab');
    }
}

function loadLocation(locationName) {
    const savedLocations = JSON.parse(localStorage.getItem('savedLocations')) || {};
    if (savedLocations[locationName]) {
        document.getElementById('locationInfo').innerHTML = savedLocations[locationName].info;
        document.getElementById('locationInfo').scrollIntoView({behavior: "smooth"});
    }
}

// Update Display Functions
function updateSavedNPCsList() {
    const savedNPCs = JSON.parse(localStorage.getItem('savedNPCs')) || {};
    const savedNPCsList = document.getElementById('savedNPCsList');
    savedNPCsList.innerHTML = '';
    for (let npcName in savedNPCs) {
        const li = document.createElement('li');
        li.innerHTML = `
            <div class="saved-item-name">${savedNPCs[npcName].name}</div>
            <div class="saved-item-details">${savedNPCs[npcName].race}, ${savedNPCs[npcName].age} years old</div>
            <label><input type="checkbox" ${savedNPCs[npcName].met ? 'checked' : ''} onchange="updateNPCMet('${npcName}', this.checked)"> Met</label>
        `;
        li.addEventListener('click', (event) => {
            if (event.target.tagName !== 'INPUT') {
                loadNPC(npcName);
            }
        });
        savedNPCsList.appendChild(li);
    }
    updateClearButtonVisibility();
}

function updateSavedLocationsList() {
    const savedLocations = JSON.parse(localStorage.getItem('savedLocations')) || {};
    const savedLocationsList = document.getElementById('savedLocationsList');
    savedLocationsList.innerHTML = ''; // Clear the list first
    for (let locationName in savedLocations) {
        const li = document.createElement('li');
        li.innerHTML = `
            <div class="saved-item-name">${savedLocations[locationName].name}</div>
            <label><input type="checkbox" ${savedLocations[locationName].visited ? 'checked' : ''} onchange="updateLocationVisited('${locationName}', this.checked)"> Visited</label>
        `;
        li.addEventListener('click', (event) => {
            if (event.target.tagName !== 'INPUT') {
                loadLocation(locationName);
            }
        });
        savedLocationsList.appendChild(li);
    }
    updateClearButtonVisibility();
}

function updateNPCTrustList() {
const savedNPCs = JSON.parse(localStorage.getItem('savedNPCs')) || {};
const npcTrustList = document.getElementById('npcTrustList');
npcTrustList.innerHTML = '';
for (let npcName in savedNPCs) {
    const npc = savedNPCs[npcName];
    const li = document.createElement('li');
    li.innerHTML = `
        <div class="npc-trust-item">
            <span class="npc-name">${npc.name}</span>
            <div class="trust-slider-container">
                <input type="range" min="0" max="8" value="${npc.trust}" 
                       oninput="updateTrustLabel(this, '${npcName}')" 
                       onchange="updateNPCTrust('${npcName}', this.value)">
                <div class="trust-labels">
                    <span class="trust-min"> </span>
                    <span class="trust-value" id="trustLabel-${npcName}">${trustLevels[npc.trust]}</span>
                    <span class="trust-max"> </span>
                </div>
            </div>
        </div>
    `;
    npcTrustList.appendChild(li);
}
}

function updateNPCTrust(npcName, trustValue) {
let savedNPCs = JSON.parse(localStorage.getItem('savedNPCs')) || {};
if (savedNPCs[npcName]) {
    savedNPCs[npcName].trust = parseInt(trustValue);
    localStorage.setItem('savedNPCs', JSON.stringify(savedNPCs));
    updateNPCTrustList();
}
}

function updateTrustLabel(slider, npcName) {
const trustLabelElement = document.getElementById(`trustLabel-${npcName}`);
if (trustLabelElement) {
    trustLabelElement.textContent = trustLevels[slider.value];
}
}

function updateNPCMet(npcName, met) {
let savedNPCs = JSON.parse(localStorage.getItem('savedNPCs')) || {};
if (savedNPCs[npcName]) {
    savedNPCs[npcName].met = met;
    localStorage.setItem('savedNPCs', JSON.stringify(savedNPCs));
}
displayVisitedItems();
}

function updateLocationVisited(locationName, visited) {
    let savedLocations = JSON.parse(localStorage.getItem('savedLocations')) || {};
    if (savedLocations[locationName]) {
        savedLocations[locationName].visited = visited;
        localStorage.setItem('savedLocations', JSON.stringify(savedLocations));
    }
    displayVisitedItems();
}

function updateClearButtonVisibility() {
    const savedNPCs = JSON.parse(localStorage.getItem('savedNPCs')) || {};
    const savedLocations = JSON.parse(localStorage.getItem('savedLocations')) || {};
    document.getElementById('clearNPCsBtn').style.display = Object.keys(savedNPCs).length ? 'inline-block' : 'none';
    document.getElementById('clearLocationsBtn').style.display = Object.keys(savedLocations).length ? 'inline-block' : 'none';
}

// Clear Functions
function clearNPC() {
    document.getElementById('npcInfo').innerHTML = '';
}

function clearLocation() {
    document.getElementById('locationInfo').innerHTML = '';
}

function clearEvent() {
    document.getElementById('eventInfo').innerHTML = '';
}

function clearSavedNPCs() {
    localStorage.removeItem('savedNPCs');
    updateSavedNPCsList();
    updateNPCTrustList();
    displayVisitedItems();
}

function clearSavedLocations() {
    localStorage.removeItem('savedLocations');
    updateSavedLocationsList();
    displayVisitedItems();
}

// Noticeboard Functions
function generateTavernNotices() {
    if (!isPatreonUnlocked()) {
        alert("This feature is locked. Please unlock with a valid Patreon code.");
        return;
    }
    const notices = getRandomElements(noticeboardsData.tavernNotices, 5);
    displayNotices('Tavern Notices', notices);
}

function generateStreetGossip() {
    if (!isPatreonUnlocked()) {
        alert("This feature is locked. Please unlock with a valid Patreon code.");
        return;
    }
    const gossip = getRandomElement(noticeboardsData.streetGossip);
    displayNotices('Street Gossip', [gossip]);
}

function generateTownNotices() {
    if (!isPatreonUnlocked()) {
        alert("This feature is locked. Please unlock with a valid Patreon code.");
        return;
    }
    const notices = getRandomElements(noticeboardsData.townNotices, 5);
    displayNotices('Town Notices', notices);
}

function displayNotices(title, notices) {
    const noticeboardContent = document.getElementById('noticeboardContent');
    let content = `<h3>${title}</h3><ul>`;
    notices.forEach(notice => {
        content += `<li>${notice}</li>`;
    });
    content += '</ul>';
    noticeboardContent.innerHTML = content;
}

// Patreon Functions
function isPatreonUnlocked() {
    return localStorage.getItem('featuresUnlocked') === 'true';
}

function unlockFeatures() {
    const patreonCode = document.getElementById('patreonCode').value;
    if (validatePatreonCode(patreonCode)) {
        localStorage.setItem('featuresUnlocked', 'true');
        updateFeatureAccess();
        alert('Features unlocked successfully!');
    } else {
        alert('Invalid code. Please try again.');
    }
}

function validatePatreonCode(code) {
    // This is a placeholder validation.
    // In a real application, you'd want to implement a more secure validation method.
    return code === "PATREON123";
}

function updateFeatureAccess() {
    const isUnlocked = isPatreonUnlocked();
    const lockedElements = document.querySelectorAll('.patreon-locked');
    lockedElements.forEach(el => {
        el.style.display = isUnlocked ? 'inline-block' : 'none';
    });
    
    const unlockFeaturesBtn = document.getElementById('unlockFeaturesBtn');
    if (unlockFeaturesBtn) {
        unlockFeaturesBtn.textContent = isUnlocked ? 'Change Patreon Code' : 'Unlock Patreon Features';
    }
}

// Expose necessary functions to the global scope
window.updateNPCMet = updateNPCMet;
window.updateLocationVisited = updateLocationVisited;
window.updateNPCTrust = updateNPCTrust;
window.updateTrustLabel = updateTrustLabel;

// Initialize the application
function initApp() {
    // Add event listeners to buttons
    const buttons = {
        'generateNPCBtn': generateNPC,
        'generateTavernBtn': () => generateLocation('Tavern'),
        'generateCampBtn': () => generateLocation('Camp'),
        'generateTownBtn': () => generateLocation('Town'),
        'generateCityBtn': () => generateLocation('City'),
        'generateEventBtn': generateEvent,
        'clearEventBtn': clearEvent,
        'saveNPCBtn': saveNPC,
        'clearNPCBtn': clearNPC,
        'saveLocationBtn': saveLocation,
        'clearLocationBtn': clearLocation,
        'clearNPCsBtn': clearSavedNPCs,
        'clearLocationsBtn': clearSavedLocations,
        'unlockFeaturesBtn': unlockFeatures,
        'tavernNoticesBtn': generateTavernNotices,
        'streetGossipBtn': generateStreetGossip,
        'townNoticesBtn': generateTownNotices,
    };

    for (const [id, func] of Object.entries(buttons)) {
        const button = document.getElementById(id);
        if (button) {
            button.addEventListener('click', func);
        }
    }

    // Initialize feature lock state
    if (localStorage.getItem('featuresUnlocked') === null) {
        localStorage.setItem('featuresUnlocked', 'false');
    }
    updateFeatureAccess();

    // Initialize tabs
    const tabs = document.querySelectorAll('.tab-button');
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            switchTab(tab.dataset.tab);
        });
    });

    // Set the initial active tab
    switchTab('generate-tab');

    // Set up region select
    const regionSelect = document.getElementById('regionSelect');
    for (const region in regions) {
        const option = document.createElement('option');
        option.value = region;
        option.textContent = region;
        regionSelect.appendChild(option);
    }

    // Initialize the application state
    updateSavedNPCsList();
    updateSavedLocationsList();
    updateNPCTrustList();
    updateFeatureAccess();
    displayVisitedItems();
    updateClearButtonVisibility();
}

// Call initApp when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', initApp);

// Export functions that need to be accessed globally
export {
    updateNPCMet,
    updateLocationVisited,
    updateNPCTrust,
    updateTrustLabel
};
