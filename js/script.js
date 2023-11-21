// Variable Declarations
var map = L.map('map').setView([-43.42869891045045, 146.77271571871117], 10); // Initialize the map on the "map" div with a given center and zoom

// Adding a Tile Layer to the map
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Adding a marker (pin point)

var Start = L.marker([-43.42869891045045, 146.77271571871117]).addTo(map);
Start.title = "Introduction";
Start.popInfo = "Welcome!";
Start.content = "";
Start.bindPopup("<b>" + Start.title + "</b><br>" + Start.popInfo).openPopup();
togglePanel(Start);

// Event listener for the marker
Start.on('click', function(e) {
    togglePanel(Start);
});

var Brotherhood = L.marker([-43.41514396284828, 147.0152905720693]).addTo(map);
Brotherhood.title = "Brotherhood, Loyalty, and Hardship";
Brotherhood.popInfo = "The infallible strength of…";
Brotherhood.content = "";
Brotherhood.bindPopup("<b>" + Brotherhood.title + "</b><br>" + Brotherhood.popInfo);

// Event listener for the marker
Brotherhood.on('click', function (e) {
    togglePanel(Brotherhood);
});

var DualityNature = L.marker([-43.627317255587016, 146.86991985994248]).addTo(map);
DualityNature.title = "Duality of Nature";
DualityNature.popInfo = " the natural world is simultaneously...";
DualityNature.content = "";
DualityNature.bindPopup("<b>" + DualityNature.title + "</b><br>" + DualityNature.popInfo);

// Event listener for the marker
DualityNature.on('click', function (e) {
    togglePanel(DualityNature);
});

var FatherF = L.marker([-43.408232484645964, 147.28688933044643]).addTo(map);
FatherF.title = "Father Figures and Responsibility";
FatherF.popInfo = "Significance of guidance in young lives";
FatherF.content = "";
FatherF.bindPopup("<b>" + FatherF.title + "</b><br>" + FatherF.popInfo);


// Event listener for the marker
FatherF.on('click', function(e) {
    togglePanel(FatherF);
});

var cHome = L.marker([-43.44306002414778, 146.62161299720154]).addTo(map);
cHome.title = "Addiction and Abuse";
cHome.popInfo = "Source of terror for his sons";
cHome.content = "";
cHome.bindPopup("<b>" + cHome.title + "</b><br>I am a popup.");

// Event listener for the marker
cHome.on('click', function(e) {
    togglePanel(cHome);
});

var Death = L.marker([-43.62533153758686, 146.3056761534308]).addTo(map);
Death.title = "Tragedy and Blame";
Death.popInfo = "";
Start.content = "";
Death.content = "";
Death.bindPopup("<b>" + Death.title + "</b><br>Harry's Death");

// Event listener for the marker
Death.on('click', function(e) {
    togglePanel(Death);
});


// Function declarations

// Function to open the panel
function openPanel() {
    document.getElementById('infoPanel').classList.add('open');
}

// Function to close the panel
function closePanel() {
    document.getElementById('infoPanel').classList.remove('open');
}

var currentMarker = null; // Variable to keep track of the current active marker

// Function to update the panel content
function updatePanelContent(marker) {
    // Logic to update the content based on the marker
    // For example:
    var panelContent = document.querySelector('.panel-content');
    panelContent.innerHTML = "<h1>" + marker.title + "</h1>" + "<p>" + marker.content + "</p>";
}

// Function to toggle the panel
function togglePanel(marker) {
    var infoPanel = document.getElementById('infoPanel');

    if (currentMarker !== marker) {
        // If a different marker is clicked, update the content and open the panel
        updatePanelContent(marker);
        infoPanel.classList.add('open');
    } else {
        // If the same marker is clicked, toggle the panel's visibility
        infoPanel.classList.toggle('open');
    }

    // Update the current marker
    currentMarker = marker;
}

// Function to toggle the enlarged state of the panel
function toggleEnlarge() {
    var infoPanel = document.getElementById('infoPanel');
    infoPanel.classList.toggle('enlarged');
}

// Set up the event listener for the enlarge button
document.getElementById('enlargeButton').addEventListener('click', toggleEnlarge);

// Rest of your existing map and marker code...

