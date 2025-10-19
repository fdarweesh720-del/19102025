// Data and Constants
const cementData = {
    molecularWeights: { SO3: 80.06, CaSO4: 136.14, H2O: 18.015, get dihydrate() { return this.CaSO4 + (2 * this.H2O); }, get hemihydrate() { return this.CaSO4 + (0.5 * this.H2O); }, get anhydrite() { return this.CaSO4; } },
    strengthClasses: { "32.5": { variants: { L: { name: "Low early strength", early_days: 7, early_min: 12.0, standard_min: 32.5, standard_max: 52.5, setting_time: 75, applications: ["Mass concrete", "Dams"] }, N: { name: "Normal early strength", early_days: 7, early_min: 16.0, standard_min: 32.5, standard_max: 52.5, setting_time: 75, applications: ["General construction", "Masonry"] }, R: { name: "Rapid early strength", early_days: 2, early_min: 10.0, standard_min: 32.5, standard_max: 52.5, setting_time: 75, applications: ["Fast construction", "Early demolding"] } } }, "42.5": { variants: { L: { name: "Low early strength", early_days: 7, early_min: 16.0, standard_min: 42.5, standard_max: 62.5, setting_time: 60, applications: ["Mass concrete structures", "Low heat"] }, N: { name: "Normal early strength", early_days: 2, early_min: 10.0, standard_min: 42.5, standard_max: 62.5, setting_time: 60, applications: ["Structural concrete", "Precast"] }, R: { name: "Rapid early strength", early_days: 2, early_min: 20.0, standard_min: 42.5, standard_max: 62.5, setting_time: 60, applications: ["Fast construction", "Precast industry"] } } }, "52.5": { variants: { L: { name: "Low early strength", early_days: 2, early_min: 10.0, standard_min: 52.5, standard_max: null, setting_time: 45, applications: ["High-performance mass concrete"] }, N: { name: "Normal early strength", early_days: 2, early_min: 20.0, standard_min: 52.5, standard_max: null, setting_time: 45, applications: ["High-strength concrete", "Infrastructure"] }, R: { name: "Rapid early strength", early_days: 2, early_min: 30.0, standard_min: 52.5, standard_max: null, setting_time: 45, applications: ["Rapid construction", "Prestressed concrete", "Fast-track projects"] } } } },
    types: [ { id: 'cem1', name: 'CEM I', family: 'CEM I', category: 'common', clinker: '95-100%', description: 'Pure Portland cement', applications: ['Structural concrete', 'High early strength'], composition: { clinker: 95, minor: 5 }, max_so3: 4.0, chemical_requirements: { loss_on_ignition: "≤ 5.0%", insoluble_residue: "≤ 5.0%", sulfate_content: "≤ 4.0%", chloride: "≤ 0.10%" }, available_strength_classes: ["32.5", "42.5", "52.5"] }, { id: 'cem2-a-s', name: 'CEM II/A-S', family: 'CEM II', category: 'common', clinker: '80-94%', additive: '6-20% Slag', description: 'Portland-slag cement (6-20%)', applications: ['General construction', 'Mass concrete'], composition: { clinker: 87, slag: 13 }, max_so3: 4.0, chemical_requirements: { sulfate_content: "≤ 4.0%", chloride: "≤ 0.10%" }, available_strength_classes: ["32.5", "42.5", "52.5"] }, { id: 'cem2-b-s', name: 'CEM II/B-S', family: 'CEM II', category: 'common', clinker: '65-79%', additive: '21-35% Slag', description: 'Portland-slag cement (21-35%)', applications: ['Durable construction', 'Sulfate environments'], composition: { clinker: 72, slag: 28 }, max_so3: 4.0, chemical_requirements: { sulfate_content: "≤ 4.0%", chloride: "≤ 0.10%" }, available_strength_classes: ["32.5", "42.5", "52.5"] }, { id: 'cem2-a-d', name: 'CEM II/A-D', family: 'CEM II', category: 'common', clinker: '90-94%', additive: '6-10% Silica fume', description: 'Portland-silica fume', applications: ['High-performance concrete', 'Ultra-high strength'], composition: { clinker: 92, silicaFume: 8 }, max_so3: 4.0, chemical_requirements: { sulfate_content: "≤ 4.0%", chloride: "≤ 0.10%" }, available_strength_classes: ["32.5", "42.5", "52.5"] }, { id: 'cem2-a-p', name: 'CEM II/A-P', family: 'CEM II', category: 'common', clinker: '80-94%', additive: '6-20% Natural pozzolana', description: 'Portland-natural pozzolana (6-20%)', applications: ['Aggressive environments', 'Mass concrete'], composition: { clinker: 87, pozzolan: 13 }, max_so3: 4.0, chemical_requirements: { sulfate_content: "≤ 4.0%", chloride: "≤ 0.10%" }, available_strength_classes: ["32.5", "42.5", "52.5"] }, { id: 'cem2-b-p', name: 'CEM II/B-P', family: 'CEM II', category: 'common', clinker: '65-79%', additive: '21-35% Natural pozzolana', description: 'Portland-natural pozzolana (21-35%)', applications: ['Harsh environments', 'Durability focus'], composition: { clinker: 72, pozzolan: 28 }, max_so3: 4.0, chemical_requirements: { sulfate_content: "≤ 4.0%", chloride: "≤ 0.10%" }, available_strength_classes: ["32.5", "42.5", "52.5"] }, { id: 'cem2-a-q', name: 'CEM II/A-Q', family: 'CEM II', category: 'common', clinker: '80-94%', additive: '6-20% Calcined pozzolana', description: 'Portland-calcined pozzolana (6-20%)', applications: ['Chemical resistance', 'Hot climates'], composition: { clinker: 87, pozzolan: 13 }, max_so3: 4.0, chemical_requirements: { sulfate_content: "≤ 4.0%", chloride: "≤ 0.10%" }, available_strength_classes: ["32.5", "42.5", "52.5"] }, { id: 'cem2-b-q', name: 'CEM II/B-Q', family: 'CEM II', category: 'common', clinker: '65-79%', additive: '21-35% Calcined pozzolana', description: 'Portland-calcined pozzolana (21-35%)', applications: ['Severe exposure', 'Infrastructure'], composition: { clinker: 72, pozzolan: 28 }, max_so3: 4.0, chemical_requirements: { sulfate_content: "≤ 4.0%", chloride: "≤ 0.10%" }, available_strength_classes: ["32.5", "42.5", "52.5"] }, { id: 'cem2-a-v', name: 'CEM II/A-V', family: 'CEM II', category: 'common', clinker: '80-94%', additive: '6-20% Siliceous fly ash', description: 'Portland-siliceous fly ash (6-20%)', applications: ['Sustainable building', 'Long-term projects'], composition: { clinker: 87, flyAsh: 13 }, max_so3: 4.0, chemical_requirements: { sulfate_content: "≤ 4.0%", chloride: "≤ 0.10%" }, available_strength_classes: ["32.5", "42.5", "52.5"] }, { id: 'cem2-b-v', name: 'CEM II/B-V', family: 'CEM II', category: 'common', clinker: '65-79%', additive: '21-35% Siliceous fly ash', description: 'Portland-siliceous fly ash (21-35%)', applications: ['Mass concrete', 'Eco-friendly construction'], composition: { clinker: 72, flyAsh: 28 }, max_so3: 4.0, chemical_requirements: { sulfate_content: "≤ 4.0%", chloride: "≤ 0.10%" }, available_strength_classes: ["32.5", "42.5", "52.5"] }, { id: 'cem2-a-w', name: 'CEM II/A-W', family: 'CEM II', category: 'common', clinker: '80-94%', additive: '6-20% Calcareous fly ash', description: 'Portland-calcareous fly ash (6-20%)', applications: ['Infrastructure', 'Sustainable construction'], composition: { clinker: 87, flyAsh: 13 }, max_so3: 4.0, chemical_requirements: { sulfate_content: "≤ 4.0%", chloride: "≤ 0.10%" }, available_strength_classes: ["32.5", "42.5", "52.5"] }, { id: 'cem2-b-w', name: 'CEM II/B-W', family: 'CEM II', category: 'common', clinker: '65-79%', additive: '21-35% Calcareous fly ash', description: 'Portland-calcareous fly ash (21-35%)', applications: ['Long-term applications', 'Sustainable projects'], composition: { clinker: 72, flyAsh: 28 }, max_so3: 4.0, chemical_requirements: { sulfate_content: "≤ 4.0%", chloride: "≤ 0.10%" }, available_strength_classes: ["32.5", "42.5", "52.5"] }, { id: 'cem2-a-t', name: 'CEM II/A-T', family: 'CEM II', category: 'common', clinker: '80-94%', additive: '6-20% Burnt shale', description: 'Portland-burnt shale (6-20%)', applications: ['General construction', 'Regional availability'], composition: { clinker: 87, burntShale: 13 }, max_so3: 4.0, chemical_requirements: { sulfate_content: "≤ 4.0%", chloride: "≤ 0.10%" }, available_strength_classes: ["32.5", "42.5", "52.5"] }, { id: 'cem2-b-t', name: 'CEM II/B-T', family: 'CEM II', category: 'common', clinker: '65-79%', additive: '21-35% Burnt shale', description: 'Portland-burnt shale (21-35%)', applications: ['Local construction', 'Economic construction'], composition: { clinker: 72, burntShale: 28 }, max_so3: 4.5, chemical_requirements: { sulfate_content: "≤ 4.5%", chloride: "≤ 0.10%" }, available_strength_classes: ["32.5", "42.5", "52.5"] }, { id: 'cem2-a-l', name: 'CEM II/A-L', family: 'CEM II', category: 'common', clinker: '80-94%', additive: '6-20% Limestone L', description: 'Portland-limestone L (6-20%)', applications: ['Architectural concrete', 'Precast elements'], composition: { clinker: 87, limestone: 13 }, max_so3: 4.0, chemical_requirements: { sulfate_content: "≤ 4.0%", chloride: "≤ 0.10%" }, available_strength_classes: ["32.5", "42.5", "52.5"] }, { id: 'cem2-b-l', name: 'CEM II/B-L', family: 'CEM II', category: 'common', clinker: '65-79%', additive: '21-35% Limestone L', description: 'Portland-limestone L (21-35%)', applications: ['Mass concrete', 'Non-structural elements'], composition: { clinker: 70, limestone: 30 }, max_so3: 4.0, chemical_requirements: { sulfate_content: "≤ 4.0%", chloride: "≤ 0.10%" }, available_strength_classes: ["32.5", "42.5", "52.5"] }, { id: 'cem2-a-ll', name: 'CEM II/A-LL', family: 'CEM II', category: 'common', clinker: '80-94%', additive: '6-20% Limestone LL', description: 'Portland-limestone LL (6-20%)', applications: ['General construction', 'Cost-effective solutions'], composition: { clinker: 85, limestone: 15 }, max_so3: 4.0, chemical_requirements: { sulfate_content: "≤ 4.0%", chloride: "≤ 0.10%" }, available_strength_classes: ["32.5", "42.5", "52.5"] }, { id: 'cem2-b-ll', name: 'CEM II/B-LL', family: 'CEM II', category: 'common', clinker: '65-79%', additive: '21-35% Limestone LL', description: 'Portland-limestone LL (21-35%)', applications: ['Mass concrete applications', 'Large projects'], composition: { clinker: 70, limestone: 30 }, max_so3: 4.0, chemical_requirements: { sulfate_content: "≤ 4.0%", chloride: "≤ 0.10%" }, available_strength_classes: ["32.5", "42.5", "52.5"] }, { id: 'cem2-a-m', name: 'CEM II/A-M', family: 'CEM II', category: 'common', clinker: '80-88%', additive: '12-20% Mixed', description: 'Portland-composite (12-20%)', applications: ['Versatile applications', 'General purpose'], composition: { clinker: 84, slag: 8, limestone: 8 }, max_so3: 4.0, chemical_requirements: { sulfate_content: "≤ 4.0%", chloride: "≤ 0.10%" }, available_strength_classes: ["32.5", "42.5", "52.5"] }, { id: 'cem2-b-m', name: 'CEM II/B-M', family: 'CEM II', category: 'common', clinker: '65-79%', additive: '21-35% Mixed', description: 'Portland-composite (21-35%)', applications: ['Multi-purpose use', 'Sustainable construction'], composition: { clinker: 72, slag: 14, flyAsh: 14 }, max_so3: 4.5, chemical_requirements: { sulfate_content: "≤ 4.5%", chloride: "≤ 0.10%" }, available_strength_classes: ["32.5", "42.5", "52.5"] }, { id: 'cem3-a', name: 'CEM III/A', family: 'CEM III', category: 'common', clinker: '35-64%', additive: '36-65% Slag', description: 'Blast furnace cement (36-65% slag)', applications: ['Marine structures', 'Chemical resistance'], composition: { clinker: 50, slag: 50 }, max_so3: 4.5, chemical_requirements: { loss_on_ignition: "≤ 5.0%", insoluble_residue: "≤ 5.0%", sulfate_content: "≤ 4.5%", chloride: "≤ 0.10%" }, available_strength_classes: ["32.5", "42.5", "52.5"] }, { id: 'cem3-b', name: 'CEM III/B', family: 'CEM III', category: 'common', clinker: '20-34%', additive: '66-80% Slag', description: 'High slag blast furnace cement (66-80%)', applications: ['Aggressive environments', 'Long-term strength'], composition: { clinker: 27, slag: 73 }, max_so3: 4.5, chemical_requirements: { loss_on_ignition: "≤ 5.0%", insoluble_residue: "≤ 5.0%", sulfate_content: "≤ 4.5%", chloride: "≤ 0.10%" }, available_strength_classes: ["32.5", "42.5", "52.5"] }, { id: 'cem3-c', name: 'CEM III/C', family: 'CEM III', category: 'common', clinker: '5-19%', additive: '81-95% Slag', description: 'Very high slag blast furnace cement (81-95%)', applications: ['Highly aggressive environments', 'Waste containment'], composition: { clinker: 12, slag: 88 }, max_so3: 4.5, chemical_requirements: { loss_on_ignition: "≤ 5.0%", insoluble_residue: "≤ 5.0%", sulfate_content: "≤ 4.5%", chloride: "≤ 0.10%" }, available_strength_classes: ["32.5", "42.5", "52.5"] }, { id: 'cem4-a', name: 'CEM IV/A', family: 'CEM IV', category: 'common', clinker: '65-89%', additive: '11-35% Pozzolan', description: 'Pozzolanic cement (11-35%)', applications: ['Hot climates', 'Alkali-silica mitigation'], composition: { clinker: 77, pozzolan: 23 }, max_so3: 4.0, chemical_requirements: { sulfate_content: "≤ 4.0%", chloride: "≤ 0.10%", pozzolanicity_test: "must satisfy" }, available_strength_classes: ["32.5", "42.5", "52.5"] }, { id: 'cem4-b', name: 'CEM IV/B', family: 'CEM IV', category: 'common', clinker: '45-64%', additive: '36-55% Pozzolan', description: 'High pozzolanic cement (36-55%)', applications: ['Severe exposure', 'Thermal mass'], composition: { clinker: 55, pozzolan: 45 }, max_so3: 4.0, chemical_requirements: { sulfate_content: "≤ 4.0%", chloride: "≤ 0.10%", pozzolanicity_test: "must satisfy" }, available_strength_classes: ["32.5", "42.5", "52.5"] }, { id: 'cem5-a', name: 'CEM V/A', family: 'CEM V', category: 'common', clinker: '40-64%', additive: '18-30% Slag + 18-30% Pozzolan', description: 'Composite cement (Slag + Pozzolan)', applications: ['Multi-exposure environments', 'Sustainable construction'], composition: { clinker: 52, slag: 24, pozzolan: 24 }, max_so3: 4.0, chemical_requirements: { sulfate_content: "≤ 4.0%", chloride: "≤ 0.10%" }, available_strength_classes: ["32.5", "42.5", "52.5"] }, { id: 'cem5-b', name: 'CEM V/B', family: 'CEM V', category: 'common', clinker: '20-38%', additive: '31-50% Slag + 31-50% Pozzolan', description: 'High replacement composite cement', applications: ['Highly aggressive environments', 'Infrastructure'], composition: { clinker: 29, slag: 35.5, pozzolan: 35.5 }, max_so3: 4.0, chemical_requirements: { sulfate_content: "≤ 4.0%", chloride: "≤ 0.10%" }, available_strength_classes: ["32.5", "42.5", "52.5"] }, { id: 'cem1-sr0', name: 'CEM I-SR 0', family: 'CEM I-SR', category: 'sulfate', clinker: '95-100%', description: 'Sulfate resisting Portland cement (C₃A = 0%)', applications: ['Severe sulfate environments', 'Seawater exposure'], composition: { clinker: 95, minor: 5 }, max_so3: 3.5, c3a_limit_value: 0, chemical_requirements: { c3a_limit: "C₃A = 0%", sulfate_content: "≤ 3.5%", chloride: "≤ 0.10%" }, available_strength_classes: ["32.5", "42.5", "52.5"] }, { id: 'cem1-sr3', name: 'CEM I-SR 3', family: 'CEM I-SR', category: 'sulfate', clinker: '95-100%', description: 'Sulfate resisting Portland cement (C₃A ≤ 3%)', applications: ['Moderate sulfate environments', 'Marine foundations'], composition: { clinker: 95, minor: 5 }, max_so3: 3.5, c3a_limit_value: 3, chemical_requirements: { c3a_limit: "C₃A ≤ 3%", sulfate_content: "≤ 3.5%", chloride: "≤ 0.10%" }, available_strength_classes: ["32.5", "42.5", "52.5"] }, { id: 'cem1-sr5', name: 'CEM I-SR 5', family: 'CEM I-SR', category: 'sulfate', clinker: '95-100%', description: 'Sulfate resisting Portland cement (C₃A ≤ 5%)', applications: ['Mild sulfate environments', 'Infrastructure projects'], composition: { clinker: 95, minor: 5 }, max_so3: 3.5, c3a_limit_value: 5, chemical_requirements: { c3a_limit: "C₃A ≤ 5%", sulfate_content: "≤ 3.5%", chloride: "≤ 0.10%" }, available_strength_classes: ["32.5", "42.5", "52.5"] }, { id: 'cem4-a-sr', name: 'CEM IV/A-SR', family: 'CEM IV-SR', category: 'sulfate', clinker: '65-89%', additive: '11-35% Pozzolan', description: 'Sulfate resisting pozzolanic cement A', applications: ['Marine concrete', 'Sewage treatment plants'], composition: { clinker: 77, pozzolan: 23 }, max_so3: 4.0, c3a_limit_value: 9, chemical_requirements: { c3a_limit: "C₃A ≤ 9%", sulfate_content: "≤ 4.0%", chloride: "≤ 0.10%", pozzolanicity_test: "Must satisfy at 8 days" }, available_strength_classes: ["32.5", "42.5", "52.5"] }, { id: 'cem4-b-sr', name: 'CEM IV/B-SR', family: 'CEM IV-SR', category: 'sulfate', clinker: '45-64%', additive: '36-55% Pozzolan', description: 'Sulfate resisting pozzolanic cement B', applications: ['Industrial structures', 'Long-term durability'], composition: { clinker: 55, pozzolan: 45 }, max_so3: 4.0, c3a_limit_value: 9, chemical_requirements: { c3a_limit: "C₃A ≤ 9%", sulfate_content: "≤ 4.0%", chloride: "≤ 0.10%", pozzolanicity_test: "Must satisfy at 8 days" }, available_strength_classes: ["32.5", "42.5", "52.5"] }, { id: 'cem3-b-sr', name: 'CEM III/B-SR', family: 'CEM III-SR', category: 'sulfate', clinker: '20-34%', additive: '66-80% Slag', description: 'Sulfate resisting blast furnace cement B', applications: ['Aggressive chemical conditions', 'Infrastructure'], composition: { clinker: 27, slag: 73 }, max_so3: 4.5, chemical_requirements: { c3a_limit: "No C₃A requirement", sulfate_content: "≤ 4.5%", chloride: "≤ 0.10%" }, available_strength_classes: ["32.5", "42.5", "52.5"] }, { id: 'cem3-c-sr', name: 'CEM III/C-SR', family: 'CEM III-SR', category: 'sulfate', clinker: '5-19%', additive: '81-95% Slag', description: 'Sulfate resisting blast furnace cement C', applications: ['Extreme sulfate environments', 'Seawater structures'], composition: { clinker: 12, slag: 88 }, max_so3: 4.5, chemical_requirements: { c3a_limit: "No C₃A requirement", sulfate_content: "≤ 4.5%", chloride: "≤ 0.10%" }, available_strength_classes: ["32.5", "42.5", "52.5"] } ],
    credits: { prepared_by: "Mr. Fadi M. Darwesh", email: "asrar.cement@gmail.com", title: "QC & R&D Specialist" },
    constituents: [ { symbol: 'K', name: 'Portland Cement Clinker', category: 'Primary Hydraulic', description: 'The main hydraulic constituent produced by sintering limestone and clay.', compounds: ['C₃S', 'C₂S', 'C₃A', 'C₄AF'], requirements: ['CaO content 60-67%'] }, { symbol: 'S', name: 'Granulated Blast Furnace Slag', category: 'Hydraulic', description: 'Latent hydraulic material from rapid cooling of molten slag.', compounds: ['Calcium silicate hydrates'], requirements: ['Glassy content ≥ 2/3', '(CaO + MgO)/SiO₂ > 1.0'] }, { symbol: 'P', name: 'Natural Pozzolan', category: 'Pozzolanic', description: 'Natural siliceous or aluminous material.', compounds: ['Reactive silica'], requirements: ['Reactive SiO₂ ≥ 25.0%'] }, { symbol: 'D', name: 'Silica Fume', category: 'High Performance', description: 'Very fine pozzolanic material from silicon metal production.', compounds: ['Amorphous SiO₂'], requirements: ['SiO₂ ≥ 85%', 'Specific surface ≥ 15.0 m²/g'] }, { symbol: 'V', name: 'Fly Ash', category: 'Pozzolanic', description: 'Fine powder from combustion of pulverized coal.', compounds: ['Siliceous glass'], requirements: ['Reactive SiO₂ ≥ 25.0%'] }, { symbol: 'W', name: 'Calcined Shale', category: 'Pozzolanic', description: 'Heat-treated clay-rich sedimentary rock.', compounds: ['Activated alumina', 'Reactive silica'], requirements: ['Compressive strength ≥ 25.0 MPa at 28 days'] }, { symbol: 'Q', name: 'Calcined Pozzolan', category: 'Pozzolanic', description: 'Heat-treated natural pozzolanic material.', compounds: ['Activated silica'], requirements: ['Reactive SiO₂ ≥ 25.0%'] }, { symbol: 'L', name: 'Limestone', category: 'Filler', description: 'Fine limestone powder acting as filler.', compounds: ['CaCO₃'], requirements: ['CaCO₃ ≥ 75%', 'TOC ≤ 0.50%'] }, { symbol: 'LL', name: 'Low Grade Limestone', category: 'Filler', description: 'Limestone with lower purity.', compounds: ['CaCO₃'], requirements: ['CaCO₃ ≥ 75%', 'TOC ≤ 0.20%'] }, { symbol: 'M', name: 'Other Mineral Additions', category: 'Various', description: 'Approved inorganic materials.', compounds: ['Variable'], requirements: ['Must meet performance criteria'] } ]
};

let currentTheme = 'light'; let currentFilter = 'all'; let searchTerm = '';

document.addEventListener('DOMContentLoaded', () => initializeApp());

function initializeApp() {
    setTimeout(() => { document.getElementById('loadingScreen').style.display = 'none'; }, 500);
    if (window.matchMedia?.('(prefers-color-scheme: dark)').matches) { setTheme('dark'); }
    initializeNavigation(); initializeSearch(); initializeFilters(); initializeModal();
    updateFilterCounts(); updateHeroStats();
    renderCementTypes(); renderConstituents(); renderStrengthClasses(); renderRequirements(); renderCharts();
    window.addEventListener('scroll', updateScrollProgress);
    observeElements();
    document.getElementById('launchReportGeneratorBtn').addEventListener('click', launchReportGenerator); 
}

function setTheme(theme) { currentTheme = theme; document.documentElement.setAttribute('data-theme', theme); }
function toggleTheme() { setTheme(currentTheme === 'light' ? 'dark' : 'light'); }

function initializeNavigation() {
    const navLinksContainer = document.querySelector('.nav-links');
    const mobileMenu = document.getElementById('mobileMenu');
    document.getElementById('themeToggle').addEventListener('click', toggleTheme);
    document.getElementById('navLaunchSimulator').addEventListener('click', (e) => { e.preventDefault(); launchMixSimulator(); navLinksContainer.classList.remove('active'); mobileMenu.classList.remove('active'); });
    document.getElementById('launchReportGeneratorBtn').addEventListener('click', launchReportGenerator);
    navLinksContainer.querySelectorAll('a:not(.nav-simulator-btn)').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetElement = document.getElementById(link.getAttribute('href').substring(1));
            if (targetElement) { window.scrollTo({ top: targetElement.offsetTop - 70, behavior: 'smooth' }); }
            navLinksContainer.classList.remove('active');
            mobileMenu.classList.remove('active');
        });
    });
    mobileMenu.addEventListener('click', () => {
        navLinksContainer.classList.toggle('active');
        mobileMenu.classList.toggle('active');
    });
}

function initializeSearch() { document.getElementById('searchInput').addEventListener('input', (e) => { searchTerm = e.target.value; renderCementTypes(); renderConstituents(); }); }

function initializeFilters() {
    document.querySelectorAll('.filter-btn').forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const newFilter = button.dataset.filter;
            document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
            if (newFilter === 'lowEarly-link') {
                document.getElementById('cement-types').scrollIntoView({ behavior: 'smooth' });
                currentFilter = 'lowEarly';
                document.querySelector('[data-filter="lowEarly-link"]').classList.add('active'); 
            } else {
                currentFilter = newFilter;
                button.classList.add('active');
            }
            renderCementTypes();
        });
    });
}

function initializeModal() {
    const detailModal = document.getElementById('detailModal');
    const calculatorModal = document.getElementById('calculatorModal');

    // دالة موحدة لإغلاق النوافذ
    function closeModal(modal) {
        modal.style.display = 'none';
        document.body.classList.remove('modal-open'); /* <--- هذا هو السطر المهم */
    }

    document.getElementById('modalClose').addEventListener('click', () => closeModal(detailModal));
    document.getElementById('calculatorModalClose').addEventListener('click', () => closeModal(calculatorModal));

    window.addEventListener('click', (e) => {
        if (e.target === detailModal) {
            closeModal(detailModal);
        }
        if (e.target === calculatorModal) {
            closeModal(calculatorModal);
        }
    });
}


function openModal(modalId, content) {
    const modal = document.getElementById(modalId);
    const contentContainer = modal.querySelector('.modal-content > div');
    contentContainer.innerHTML = content;
    modal.style.display = 'block';
    document.body.classList.add('modal-open'); 
}


function renderCementTypes() {
    const grid = document.getElementById('cementTypesGrid');
    if (!grid) return;

    let typesToRender = [];

    // 1. Apply the primary filter first (e.g., 'all', 'common', 'sulfate')
    if (currentFilter === 'lowEarly') {
        typesToRender = cementData.types.filter(type => type.family.startsWith('CEM III'));
    } else if (currentFilter !== 'all') {
        typesToRender = cementData.types.filter(type => type.category === currentFilter);
    } else {
        typesToRender = [...cementData.types]; // Start with all types if filter is 'all'
    }

    // 2. Apply the search term to the already filtered list
    const searchLower = searchTerm.trim().toLowerCase();
    if (searchLower.length > 0) {
        typesToRender = typesToRender.filter(type =>
            [type.name, type.family, type.description, ...type.applications].join(' ').toLowerCase().includes(searchLower)
        );
    }

    // 3. Render the final, filtered list
    grid.innerHTML = typesToRender.map(type => `<div class="card" onclick="showCementTypeDetails('${type.id}')"><div class="card-header"><div><div class="card-title">${type.name}</div><div class="card-subtitle">${type.family} Family</div></div><div class="card-icon"><i class="fas fa-cube"></i></div></div><div class="card-content"><p><strong>Clinker:</strong> ${type.clinker}</p>${type.additive ? `<p><strong>Additive:</strong> ${type.additive}</p>` : ''}<p>${type.description}</p><div class="composition-bar">${renderCompositionBar(type.composition)}</div><p style="color: var(--primary-blue); font-weight: 500; margin-top: 15px;"><i class="fas fa-mouse-pointer"></i> Click for details & calculator</p></div><div class="card-tags">${type.applications.slice(0, 2).map(app => `<span class="tag">${app}</span>`).join('')}${type.applications.length > 2 ? `<span class="tag">+${type.applications.length - 2} more</span>` : ''}</div></div>`).join('');
    
    observeElements();
}

function renderCompositionBar(composition) {
    if (!composition) return '';
    const colors = { clinker: '#1e40af', slag: '#64748b', pozzolan: '#f97316', silicaFume: '#10b981', limestone: '#94a3b8', flyAsh: '#8b5cf6', burntShale: '#ef4444', mixed: '#6366f1', minor: '#a1a1aa' };
    return Object.entries(composition).map(([component, percentage]) => `<div class="composition-segment" style="width: ${percentage}%; background-color: ${colors[component] || '#6b7280'};" title="${component.replace(/([A-Z])/g, ' $1').toLowerCase()}: ${percentage}%"></div>`).join('');
}

function renderConstituents() { const grid = document.getElementById('constituentsGrid'); if (!grid) return; grid.innerHTML = cementData.constituents.map(c => `<div class="card" onclick="showConstituentDetails('${c.symbol}')"><div class="card-header"><div><div class="card-title">${c.name}</div><div class="card-subtitle">Symbol: ${c.symbol} | ${c.category}</div></div><div class="card-icon"><i class="fas fa-atom"></i></div></div><div class="card-content"><p>${c.description}</p></div></div>`).join(''); }

function renderStrengthClasses() { const grid = document.getElementById('strengthClassesGrid'); if (!grid) return; grid.innerHTML = Object.entries(cementData.strengthClasses).map(([name, data]) => `<div class="card" onclick="showStrengthClassDetails('${name}')"><div class="card-header"><div><div class="card-title">Class ${name}</div><div class="card-subtitle">${data.variants.N.standard_min}${data.variants.N.standard_max ? '-' + data.variants.N.standard_max : '+'} MPa</div></div><div class="card-icon"><i class="fas fa-weight-hanging"></i></div></div><div class="card-content"><p>Includes N, R, and L variants.</p></div></div>`).join(''); }

function renderRequirements() { const grid = document.getElementById('requirementsGrid'); if (!grid) return; const requirements = [{ title: 'Chemical Requirements', icon: 'fas fa-flask', items: ['Loss on ignition', 'Insoluble residue', 'Sulfate content (SO₃)', 'Chloride content'] }, { title: 'Physical Requirements', icon: 'fas fa-ruler', items: ['Setting time', 'Soundness (Expansion)', 'Compressive strength', 'Fineness'] }]; grid.innerHTML = requirements.map(r => `<div class="card"><div class="card-header"><div><div class="card-title">${r.title}</div><div class="card-subtitle">BS EN 197-1:2011</div></div><div class="card-icon"><i class="${r.icon}"></i></div></div><div class="card-content"><ul style="margin: 0; padding-left: 20px;">${r.items.map(item => `<li>${item}</li>`).join('')}</ul></div></div>`).join(''); }

function renderCharts() {
    // 1. CHART: Cement Family Distribution (NEW Bar Chart)
    const compCtx = document.getElementById('compositionChart')?.getContext('2d');
    if (compCtx) {
        new Chart(compCtx, {
            type: 'bar', // Changed from 'doughnut' to 'bar'
            data: {
                labels: ['CEM II', 'Sulfate Resistant', 'CEM III', 'CEM IV', 'CEM V', 'CEM I'],
                datasets: [{
                    label: 'Number of Cement Types',
                    data: [20, 7, 3, 2, 2, 1], // Data sorted from largest to smallest
                    backgroundColor: [
                        '#2563eb', // CEM II
                        '#ef4444', // Sulfate Resistant
                        '#60a5fa', // CEM III
                        '#93c5fd', // CEM IV
                        '#bfdbfe', // CEM V
                        '#1e40af'  // CEM I
                    ],
                    borderColor: 'var(--border)',
                    borderWidth: 1
                }]
            },
            options: {
                indexAxis: 'y', // This makes the bar chart horizontal for easy reading
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    title: {
                        display: true,
                        text: 'Cement Family Distribution',
                        font: { size: 16 },
                        color: 'var(--text-primary)'
                    },
                    legend: {
                        display: false // Legend is not needed for a single-dataset bar chart
                    }
                },
                scales: {
                    x: {
                        beginAtZero: true,
                        title: { display: true, text: 'Number of Types', color: 'var(--text-secondary)' },
                        ticks: { color: 'var(--text-secondary)' },
                        grid: { color: 'var(--border)' }
                    },
                    y: {
                        ticks: { color: 'var(--text-secondary)' },
                        grid: { display: false }
                    }
                }
            }
        });
    }

    // 2. CHART: Strength Requirements (No change needed here)
    const strCtx = document.getElementById('strengthChart')?.getContext('2d');
    if (strCtx) {
        const labels = ['32.5 L', '32.5 N', '32.5 R', '42.5 L', '42.5 N', '42.5 R', '52.5 L', '52.5 N', '52.5 R'];
        const sc = cementData.strengthClasses;
        new Chart(strCtx, {
            type: 'bar',
            data: {
                labels: labels,
                datasets: [
                    { label: 'Early Strength Min (MPa)', data: [sc['32.5'].variants.L.early_min, sc['32.5'].variants.N.early_min, sc['32.5'].variants.R.early_min, sc['42.5'].variants.L.early_min, sc['42.5'].variants.N.early_min, sc['42.5'].variants.R.early_min, sc['52.5'].variants.L.early_min, sc['52.5'].variants.N.early_min, sc['52.5'].variants.R.early_min], backgroundColor: '#f97316' },
                    { label: 'Standard Strength Min (MPa)', data: [32.5, 32.5, 32.5, 42.5, 42.5, 42.5, 52.5, 52.5, 52.5], backgroundColor: '#1e40af' },
                    { label: 'Standard Strength Max (MPa)', data: [52.5, 52.5, 52.5, 62.5, 62.5, 62.5, 75, 75, 75], backgroundColor: '#60a5fa' }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    title: { display: true, text: 'Strength Requirements for All 9 Variants', font: { size: 16 }, color: 'var(--text-primary)' },
                    legend: { position: 'top', labels: { color: 'var(--text-secondary)' } },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                let label = context.dataset.label || '';
                                if (label) { label += ': '; }
                                if (context.datasetIndex === 2 && context.raw >= 75) { label += 'No Upper Limit'; } else { label += `${context.formattedValue} MPa`; }
                                return label;
                            }
                        }
                    }
                },
                scales: {
                    y: { beginAtZero: true, title: { display: true, text: 'Compressive Strength (MPa)', color: 'var(--text-secondary)' }, ticks: { color: 'var(--text-secondary)' }, grid: { color: 'var(--border)' } },
                    x: { ticks: { color: 'var(--text-secondary)' }, grid: { display: false } }
                }
            }
        });
    }
}


function showCementTypeDetails(typeId) {
    const type = cementData.types.find(t => t.id === typeId); if (!type) return;
    const strengthDetailsHTML = type.available_strength_classes.map(sc => {
        const classData = cementData.strengthClasses[sc];
        return `<div class="info-box"><h5 class="info-box-title">Class ${sc} MPa</h5><div class="strength-variant-grid">
            ${Object.entries(classData.variants).map(([variant, data]) => {
                const isCemThree = type.family.startsWith('CEM III');
                const isAvailable = isCemThree ? true : (variant !== 'L');
                return `<div class="strength-variant-card ${isAvailable ? '' : 'disabled'}">
                    <h6>${sc} ${variant} ${isAvailable ? '✓' : '✗'}</h6>
                    <p>${data.name}</p>
                    <ul>
                        <li><strong>${data.early_days}-day:</strong> ≥${data.early_min} MPa</li>
                        <li><strong>28-day:</strong> ${data.standard_min}${data.standard_max ? ` - ${data.standard_max}` : '+'} MPa</li>
                        <li><strong>Setting:</strong> ≥${data.setting_time} min</li>
                    </ul>
                </div>`;
            }).join('')}</div></div>`;
    }).join('');
    let engineHTML = '';
    if(type.family.includes('SR') && type.c3a_limit_value !== undefined) {
        engineHTML = `<div class="info-box"><h4 class="engine-title">C₃A Analysis Engine</h4><div class="engine-grid"><div><div class="input-group"><label for="c3a_al2o3">Clinker Al₂O₃ (%)</label><input type="number" id="c3a_al2o3" value="5.0" step="0.1"></div><div class="input-group"><label for="c3a_fe2o3">Clinker Fe₂O₃ (%)</label><input type="number" id="c3a_fe2o3" value="3.0" step="0.1"></div><button class="calculate-btn" onclick="calculateC3AEngine('${typeId}')">Analyze C₃A</button></div><div id="engineResults"><h4>Result</h4><p>Enter clinker analysis and click Analyze.</p></div></div></div>`;
    }
    const content = `
        <h2 style="color: var(--primary-blue);">${type.name}</h2>
        <div class="grid-2" style="margin-bottom: 20px;">
            <div><h4>Info</h4><p><strong>Family:</strong> ${type.family}</p><p><strong>Clinker:</strong> ${type.clinker}</p>${type.additive ? `<p><strong>Additive:</strong> ${type.additive}</p>` : ''}<p><strong>Category:</strong> ${type.category}</p></div>
            <div><h4>Composition (Nucleus)</h4><div class="composition-bar">${renderCompositionBar(type.composition)}</div>${Object.entries(type.composition).map(([c, p]) => `<p><strong>${c.charAt(0).toUpperCase() + c.slice(1)}:</strong> ${p}%</p>`).join('')}</div>
        </div>
        <div class="info-box"><h4>Chemical Requirements</h4>${Object.entries(type.chemical_requirements || {}).map(([r, v]) => `<p><strong>${r.replace(/_/g, ' ').toUpperCase()}:</strong> ${v}</p>`).join('')}</div>
        ${engineHTML}
        <div class="info-box"><h4>Available Strength Classes & Variants</h4><div style="font-size: 0.9rem; text-align: center; margin-bottom:15px;"><strong>Key:</strong> <span style="color: var(--primary-blue); font-weight: bold;">✓</span> = Available &nbsp;|&nbsp; <span style="color: var(--text-secondary); font-weight: bold;">✗</span> = Not Available</div>${strengthDetailsHTML}</div>
        <div class="launch-calculator-btn" onclick="launchCalculator('${typeId}')"><i class="fas fa-calculator"></i> Launch Precision Calculator</div>
    `;
    openModal('detailModal', content);
}

// --- CORE FIX STARTS HERE ---

function launchCalculator(typeId) {
    const type = cementData.types.find(t => t.id === typeId);
    if (!type) return;

    // Create input fields for SO3 in each component of the nucleus
    const inputsHTML = Object.keys(type.composition).map(key => `
        <div class="input-group">
            <label for="${key}_so3">SO₃ in ${key.charAt(0).toUpperCase() + key.slice(1)} (%)</label>
            <input type="number" id="${key}_so3" value="${key === 'clinker' ? '1.0' : '0.1'}" step="0.01" min="0">
        </div>`).join('');

    // Create the modal content with the new Target SO3 input field
    const content = `
        <h3>Calculator: ${type.name}</h3>
        <p style="text-align:center; font-size: 0.9rem; margin-bottom: 1rem;">Max SO₃ Allowed: <strong>${type.max_so3}%</strong></p>
        <div class="calculator-grid">
            <div>
                <h4>Raw Material Inputs</h4>
                ${inputsHTML}
                <div class="input-group">
                    <label for="gypsum_purity">Gypsum Purity (%)</label>
                    <input type="number" id="gypsum_purity" value="90" step="0.1" min="0">
                </div>
                <div class="input-group">
                    <label for="gypsum_type">Gypsum Type</label>
                    <select id="gypsum_type">
                        <option value="dihydrate">Dihydrate</option>
                        <option value="hemihydrate">Hemihydrate</option>
                        <option value="anhydrite">Anhydrite</option>
                    </select>
                </div>
            </div>
            <div>
                 <h4>Calculation Target</h4>
                 <div class="input-group">
                    <label for="targetFinalSo3">Target Final SO₃ (%)</label>
                    <input type="number" id="targetFinalSo3" value="${type.max_so3}" step="0.01" min="0">
                </div>
                <button class="calculate-btn" onclick="calculatePreciseComposition('${typeId}')">Calculate</button>
                <div id="calculatorResults" style="margin-top: 20px;">
                    <h4>Final Composition</h4>
                    <p>Complete inputs and click Calculate.</p>
                </div>
            </div>
        </div>`;
    openModal('calculatorModal', content);
}

function calculatePreciseComposition(typeId) {
    const type = cementData.types.find(t => t.id === typeId);
    const resultsDiv = document.getElementById('calculatorResults');
    if (!type) {
        resultsDiv.innerHTML = `<p style="color:red;">Error: Cement type not found.</p>`;
        return;
    }

    // 1. Dynamically determine the cost-optimized nucleus.
    const nucleusComposition = {};
    const clinkerRange = type.clinker.replace('%', '').split('-').map(Number);
    const minClinkerNucleus = clinkerRange[0];
    const maxClinkerNucleus = clinkerRange[1];

    nucleusComposition['clinker'] = minClinkerNucleus;
    
    // Correctly identify the second component, prioritizing main additives over 'minor'
    let otherComponentKey = Object.keys(type.composition).find(k => k !== 'clinker' && k !== 'minor');
    if (!otherComponentKey) {
        otherComponentKey = 'minor'; // Fallback for CEM I
    }
    
    nucleusComposition[otherComponentKey] = 100 - minClinkerNucleus;


    // 2. Read all user inputs
    const targetSo3 = parseFloat(document.getElementById('targetFinalSo3').value);
    const gypsumPurity = parseFloat(document.getElementById('gypsum_purity').value) / 100;
    const gypsumType = document.getElementById('gypsum_type').value;

    // 3. Calculate the weighted average SO3 percentage in the nucleus
    let so3FromNucleusTotal = 0;
    for (const key in nucleusComposition) {
        const so3Input = document.getElementById(`${key}_so3`);
        if (so3Input) {
            const so3Value = parseFloat(so3Input.value) || 0;
            so3FromNucleusTotal += (so3Value / 100) * nucleusComposition[key];
        }
    }
    const avgSo3InNucleusPercent = so3FromNucleusTotal;

    // 4. Calculate the effective SO3 percentage in the actual gypsum
    const mw = cementData.molecularWeights;
    const so3InPureGypsumPercent = (mw.SO3 / mw[gypsumType]) * 100;
    const so3InActualGypsumPercent = so3InPureGypsumPercent * gypsumPurity;

    // 5. Check for impossible scenarios
    if (so3InActualGypsumPercent <= avgSo3InNucleusPercent) {
        resultsDiv.innerHTML = `<h4>Calculation Error</h4><p style="color:red;">Gypsum SO₃ (${so3InActualGypsumPercent.toFixed(2)}%) is not higher than Nucleus SO₃ (${avgSo3InNucleusPercent.toFixed(2)}%). Cannot achieve target.</p>`;
        return;
    }
    if (avgSo3InNucleusPercent > targetSo3) {
         resultsDiv.innerHTML = `<h4>Warning</h4><p style="color:orange;">Nucleus SO₃ (${avgSo3InNucleusPercent.toFixed(2)}%) is already higher than your target of ${targetSo3}%. No gypsum is needed.</p>`;
        return;
    }

    // 6. Apply the master formula to find the required Gypsum percentage
    const requiredGypsumPercent = ((targetSo3 - avgSo3InNucleusPercent) / (so3InActualGypsumPercent - avgSo3InNucleusPercent)) * 100;

    if (requiredGypsumPercent < 0 || requiredGypsumPercent > 15) {
        resultsDiv.innerHTML = `<h4>Warning</h4><p style="color:orange;">Calculated gypsum is ${requiredGypsumPercent.toFixed(2)}%, which is outside a reasonable range. Please check inputs.</p>`;
        return;
    }

    // 7. Calculate the final nucleus percentage and re-scale its components
    const nucleusFinalPercent = 100 - requiredGypsumPercent;
    const finalComposition = {};
    for (const key in nucleusComposition) {
        finalComposition[key] = nucleusComposition[key] * (nucleusFinalPercent / 100);
    }
    
    // 8. Forge the Sigil of Compliance and the Annotation of Origin
    const nucleusClinkerPercent = nucleusComposition['clinker'];
    const isCompliant = (nucleusClinkerPercent >= minClinkerNucleus && nucleusClinkerPercent <= maxClinkerNucleus);
    
    let complianceHTML = '';
    if (isCompliant) {
        const tooltipText = `Nucleus optimized to ${nucleusClinkerPercent.toFixed(1)}% clinker (Standard: ${minClinkerNucleus}-${maxClinkerNucleus}%). This is then scaled by the gypsum addition.`;
        // --- THIS IS THE LINE THAT WAS CORRECTED ---
        complianceHTML = `
            <span class="compliance-sigil" title="${tooltipText}">✓ Approved</span>
            <span class="compliance-details">↳ Standard Compliant (Nucleus: ${minClinkerNucleus}% Clinker)</span>`;
    } else {
        complianceHTML = `<span class="compliance-sigil-fail">✗ Out of Spec</span>`;
    }

    // 9. Display results with the forged sigil and annotation
    let resultsHTML = `<h4>Final Composition (Optimized)</h4><p><strong>Required Gypsum: ${requiredGypsumPercent.toFixed(2)}%</strong></p><hr>`;
    let finalTotal = requiredGypsumPercent;

    for (const key in finalComposition) {
        resultsHTML += `<div class="result-line"><p><strong>${key.charAt(0).toUpperCase() + key.slice(1)}:</strong> ${finalComposition[key].toFixed(2)}%</p>`;
        if (key === 'clinker') {
            resultsHTML += complianceHTML;
        }
        resultsHTML += `</div>`;
        finalTotal += finalComposition[key];
    }
    resultsHTML += `<hr><p><strong>Total: ${finalTotal.toFixed(2)}%</strong></p>`;
    
    resultsDiv.innerHTML = resultsHTML;
}





function showConstituentDetails(symbol) { 
    const c = cementData.constituents.find(i => i.symbol === symbol); if (!c) return; 
    let engineHTML = '';
    if(symbol === 'K') {
        engineHTML = `<div class="info-box"><h4 class="engine-title">Clinker Analysis Engine</h4><div class="engine-grid"><div>
        <div class="input-group"><label for="CaO">CaO (%)</label><input type="number" id="CaO" value="65.0" step="0.1"></div>
        <div class="input-group"><label for="SiO2">SiO₂ (%)</label><input type="number" id="SiO2" value="21.0" step="0.1"></div>
        <div class="input-group"><label for="Al2O3">Al₂O₃ (%)</label><input type="number" id="Al2O3" value="5.0" step="0.1"></div>
        <div class="input-group"><label for="Fe2O3">Fe₂O₃ (%)</label><input type="number" id="Fe2O3" value="3.0" step="0.1"></div>
        <div class="input-group"><label for="FreeLime">Free Lime (%)</label><input type="number" id="FreeLime" value="1.0" step="0.1"></div>
        <button class="calculate-btn" onclick="calculateClinkerEngine()">Analyze Clinker</button></div><div id="engineResults"><h4>Results</h4><p>Enter oxide analysis and click Analyze.</p></div></div></div>`;
    }
    const content = `<h2 style="color: var(--primary-blue);">${c.name}</h2><p><strong>Symbol:</strong> ${c.symbol} | <strong>Category:</strong> ${c.category}</p><p>${c.description}</p><h4>Main Compounds:</h4><ul>${c.compounds.map(i => `<li>${i}</li>`).join('')}</ul><h4>Requirements:</h4><ul>${c.requirements.map(i => `<li>${i}</li>`).join('')}</ul>${engineHTML}`; 
    openModal('detailModal', content); 
}

function showStrengthClassDetails(className) { const sc = cementData.strengthClasses[className]; if (!sc) return; const content = `<h2 style="color: var(--primary-blue);">Strength Class ${className} MPa</h2>${Object.entries(sc.variants).map(([v, d]) => `<div class="info-box"><h4>${className} ${v} - ${d.name}</h4><p><strong>Early Strength (${d.early_days}d):</strong> ≥${d.early_min} MPa</p><p><strong>Standard Strength (28d):</strong> ${d.standard_min}${d.standard_max ? ` - ${d.standard_max}` : '+'} MPa</p><p><strong>Setting Time:</strong> ≥${d.setting_time} min</p><h5>Applications:</h5><p>${d.applications.join(', ')}</p></div>`).join('')}`; openModal('detailModal', content); }

function updateFilterCounts() { const counts = { all: cementData.types.length, common: cementData.types.filter(t => t.category === 'common').length, sulfate: cementData.types.filter(t => t.category === 'sulfate').length, lowEarly: cementData.types.filter(t=>t.family.startsWith('CEM III')).length }; document.getElementById('filterAll').textContent = `All Types (${counts.all})`; document.getElementById('filterCommon').textContent = `Common (${counts.common})`; document.getElementById('filterSulfate').textContent = `Sulfate Resistant (${counts.sulfate})`; document.getElementById('filterLowEarly').textContent = `Low Early Strength (${counts.lowEarly})`; }

function updateHeroStats() { document.getElementById('totalTypesCount').textContent = cementData.types.length; }



function updateScrollProgress() { const progressBar = document.getElementById('progressBar'); if (!progressBar) return; const scrollTop = window.pageYOffset || document.documentElement.scrollTop; const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight; progressBar.style.width = `${(scrollTop / docHeight) * 100}%`; }

function observeElements() { const observer = new IntersectionObserver((entries) => { entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('animate-in'); } }); }, { threshold: 0.1 }); document.querySelectorAll('.card, .section-header, .stat, .chart-container').forEach(el => observer.observe(el)); }

function calculateClinkerEngine() {
    const CaO = parseFloat(document.getElementById('CaO').value); const SiO2 = parseFloat(document.getElementById('SiO2').value); const Al2O3 = parseFloat(document.getElementById('Al2O3').value); const Fe2O3 = parseFloat(document.getElementById('Fe2O3').value); const FreeLime = parseFloat(document.getElementById('FreeLime').value);
    const C3A = Math.max(0, 2.65 * Al2O3 - 1.69 * Fe2O3);
    const C4AF = 3.043 * Fe2O3;
    const C3S = 4.071 * (CaO - FreeLime) - 7.60 * SiO2 - 6.718 * Al2O3 - 1.43 * Fe2O3;
    const C2S = 2.867 * SiO2 - 0.7544 * C3S;
    const LSF = (CaO - 0.7 * FreeLime) / (2.8 * SiO2 + 1.2 * Al2O3 + 0.65 * Fe2O3);
    const SM = SiO2 / (Al2O3 + Fe2O3);
    const AM = Al2O3 / Fe2O3;
    const resultsDiv = document.getElementById('engineResults');
    resultsDiv.innerHTML = `<h4>Analysis Results</h4><p><strong>LSF:</strong> ${LSF.toFixed(2)}</p><p><strong>SM:</strong> ${SM.toFixed(2)}</p><p><strong>AM:</strong> ${AM.toFixed(2)}</p><hr><p><strong>C₃S:</strong> ${C3S.toFixed(2)}%</p><p><strong>C₂S:</strong> ${C2S.toFixed(2)}%</p><p><strong>C₃A:</strong> ${C3A.toFixed(2)}%</p><p><strong>C₄AF:</strong> ${C4AF.toFixed(2)}%</p>`;
}

function calculateC3AEngine(typeId) {
    const type = cementData.types.find(t => t.id === typeId); if (!type || type.c3a_limit_value === undefined) return;
    const Al2O3 = parseFloat(document.getElementById('c3a_al2o3').value);
    const Fe2O3 = parseFloat(document.getElementById('c3a_fe2o3').value);
    const C3A = Math.max(0, 2.65 * Al2O3 - 1.69 * Fe2O3);
    const limit = type.c3a_limit_value;
    const isPass = C3A <= limit;
    const resultsDiv = document.getElementById('engineResults');
    resultsDiv.innerHTML = `<h4>Analysis Results</h4><p><strong>Calculated C₃A:</strong> ${C3A.toFixed(2)}%</p><p><strong>Standard Limit:</strong> ≤ ${limit}%</p><hr><p style="font-size: 1.5rem; font-weight: bold; color: ${isPass ? 'green' : 'red'};">${isPass ? 'PASS' : 'FAIL'}</p>`;
}

function initializeApp() {
    setTimeout(() => { document.getElementById('loadingScreen').style.display = 'none'; }, 500);
    if (window.matchMedia?.('(prefers-color-scheme: dark)').matches) { setTheme('dark'); }
    initializeNavigation(); initializeSearch(); initializeFilters(); initializeModal();
    updateFilterCounts(); updateHeroStats(); 
    renderCementTypes(); renderConstituents(); renderStrengthClasses(); renderRequirements(); renderCharts();
    window.addEventListener('scroll', updateScrollProgress);
    observeElements();
    document.getElementById('launchReportGeneratorBtn').addEventListener('click', launchReportGenerator); 
document.getElementById('launchReportGeneratorBtn').addEventListener('click', launchReportGenerator);
}

function launchReportGenerator() {
    const cementOptions = cementData.types.map(t => `<option value="${t.id}">${t.name}</option>`).join('');

    const content = `
        <h3>Daily Quality Report Generator</h3>
        <div class="report-grid">
            <div id="reportInputSection">
                <div class="report-section">
                    <h4>Production Data</h4>
                    <div class="input-group"><label for="reportDate">Report Date</label><input type="date" id="reportDate" value="${new Date().toISOString().slice(0, 10)}"></div>
                    <div class="input-group"><label for="reportCementType">Cement Type</label><select id="reportCementType">${cementOptions}</select></div>
                    <div class="input-group"><label for="reportProductionHours">Production Hours</label><input type="number" id="reportProductionHours" value="6"></div>
                    <div class="input-group"><label for="reportThroughputAvg">Avg. Throughput (t/h)</label><input type="number" id="reportThroughputAvg" value="145"></div>
                    <div class="input-group"><label for="reportThroughputMin">Min Throughput (t/h)</label><input type="number" id="reportThroughputMin" value="135"></div>
                    <div class="input-group"><label for="reportThroughputMax">Max Throughput (t/h)</label><input type="number" id="reportThroughputMax" value="160"></div>
                </div>
                <div class="report-section">
                    <h4>Physical Properties</h4>
                    <div class="input-group"><label for="reportBlaineAvg">Avg. Blaine (cm²/g)</label><input type="number" id="reportBlaineAvg" value="3500"></div>
                    <div class="input-group"><label for="reportBlaineMin">Min Blaine (cm²/g)</label><input type="number" id="reportBlaineMin" value="3400"></div>
                    <div class="input-group"><label for="reportBlaineMax">Max Blaine (cm²/g)</label><input type="number" id="reportBlaineMax" value="3600"></div>
                    <div class="input-group"><label for="reportResidue45">Residue 45µ (%)</label><input type="number" id="reportResidue45" value="10"></div>
                    <div class="input-group"><label for="reportInitialSet">Initial Setting Time (min)</label><input type="number" id="reportInitialSet" value="120"></div>
                    <div class="input-group"><label for="reportSoundness">Soundness (mm)</label><input type="number" id="reportSoundness" value="1"></div>
                </div>
                <div class="report-section">
                    <h4>Strength (MPa)</h4>
                    <div class="input-group"><label for="reportStrength2d">2-day Strength</label><input type="number" id="reportStrength2d" value="22"></div>
                    <div class="input-group"><label for="reportStrength7d">7-day Strength</label><input type="number" id="reportStrength7d" value="35"></div>
                    <div class="input-group"><label for="reportStrength28d">28-day Strength</label><input type="number" id="reportStrength28d" value="48"></div>
                </div>
                <button class="calculate-btn" onclick="analyzeDailyReport()">Analyze Report</button>
            </div>
            <div id="reportAnalysisSection">
                <h4>Analysis & Visualization</h4>
                <p>Enter data on the left and click "Analyze Report".</p>
            </div>
        </div>
    `;
    openModal('calculatorModal', content);
}

function analyzeDailyReport() {
    const analysisSection = document.getElementById('reportAnalysisSection');
    const selectedId = document.getElementById('reportCementType').value;
    const selectedType = cementData.types.find(t => t.id === selectedId);
    if (!selectedType) return;

    const throughput = {
        avg: parseFloat(document.getElementById('reportThroughputAvg').value),
        min: parseFloat(document.getElementById('reportThroughputMin').value),
        max: parseFloat(document.getElementById('reportThroughputMax').value),
    };
    const blaine = {
        avg: parseFloat(document.getElementById('reportBlaineAvg').value),
        min: parseFloat(document.getElementById('reportBlaineMin').value),
        max: parseFloat(document.getElementById('reportBlaineMax').value),
    };
    const strength = {
        d2: parseFloat(document.getElementById('reportStrength2d').value),
        d7: parseFloat(document.getElementById('reportStrength7d').value),
        d28: parseFloat(document.getElementById('reportStrength28d').value),
    };
    const residue45 = parseFloat(document.getElementById('reportResidue45').value);
    
    const throughputStdDev = (throughput.max - throughput.min) / 4;
    const blaineStdDev = (blaine.max - blaine.min) / 4;

    let analysisNotes = [];
    const strengthClassKey = selectedType.available_strength_classes[0]; 
    const strengthClass = cementData.strengthClasses[strengthClassKey];
    const earlyStrReq = strengthClass.variants.R || strengthClass.variants.N; 
    
    if (strength.d2 < earlyStrReq.early_min && residue45 > 12) {
        analysisNotes.push("Low early strength correlates with high 45µ residue. Suggest optimizing separator efficiency.");
    }
    if(blaineStdDev > 100) {
        analysisNotes.push("High Blaine standard deviation indicates unstable grinding process.");
    }
    if(analysisNotes.length === 0) analysisNotes.push("All parameters within expected operational ranges.");

    let reportHTML = `
        <div id="printableReport">
            <h4>Report for: ${selectedType.name}</h4>
            <p><strong>Date:</strong> ${document.getElementById('reportDate').value}</p>
            <hr>
            <h5>Production Stability</h5>
            <p>Avg. Throughput: <span class="result-value">${throughput.avg} t/h</span> (Std. Dev: ~${throughputStdDev.toFixed(2)})</p>
            <p>Avg. Blaine: <span class="result-value">${blaine.avg} cm²/g</span> (Std. Dev: ~${blaineStdDev.toFixed(2)})</p>
            <hr>
            <h5>Performance Analysis</h5>
            <div class="chart-container" style="height: 300px;"><canvas id="reportStrengthChart"></canvas></div>
            <div class="analysis-notes">
                <h5>Analyst Notes</h5>
                <ul>${analysisNotes.map(note => `<li>${note}</li>`).join('')}</ul>
            </div>
        </div>
        <button class="calculate-btn" onclick="printReport()"><i class="fas fa-print"></i> Print to PDF</button>
    `;

    analysisSection.innerHTML = reportHTML;

    const strCtx = document.getElementById('reportStrengthChart')?.getContext('2d');
    if(strCtx) {
        new Chart(strCtx, {
            type: 'bar',
            data: {
                labels: [`${earlyStrReq.early_days}-day`, '28-day'],
                datasets: [
                    {
                        label: 'Actual Strength (MPa)',
                        data: [earlyStrReq.early_days === 2 ? strength.d2 : strength.d7, strength.d28],
                        backgroundColor: '#1e40af',
                    },
                    {
                        label: 'Standard Min (MPa)',
                        data: [earlyStrReq.early_min, earlyStrReq.standard_min],
                        backgroundColor: 'rgba(249, 115, 22, 0.6)',
                    }
                ]
            },
            options: { responsive: true, maintainAspectRatio: false, plugins: { title: { display: true, text: 'Strength vs. Standard' } } }
        });
    }
}

function printReport() {
    const { jsPDF } = window.jspdf;
    const reportElement = document.getElementById('printableReport');
    
    html2canvas(reportElement).then(canvas => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF('p', 'mm', 'a4');
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

        pdf.setFont('helvetica', 'bold');
        pdf.text("Daily Quality Report", pdfWidth / 2, 20, { align: 'center' });
        pdf.addImage(imgData, 'PNG', 10, 30, pdfWidth - 20, pdfHeight > 250 ? 250 : pdfHeight); 
        
        pdf.setFont('helvetica', 'normal');
        pdf.setFontSize(8);
        pdf.text(`Generated by Cement Standards Guide on ${new Date().toLocaleDateString()}`, 10, pdf.internal.pageSize.getHeight() - 10);

        pdf.save(`Daily_Report_${new Date().toISOString().slice(0, 10)}.pdf`);
    });
}

function launchMixSimulator() {
    const families = ['CEM I', 'CEM II', 'CEM III', 'CEM IV', 'CEM V'];
    const familyOptions = families.map(f => `<option value="${f}">${f}</option>`).join('');

    const content = `
        <h3>Mix Design Simulator (Free Mode)</h3>
        <div class="engine-grid">
            <div>
                <h4>1. Select Cement Type</h4>
                <div class="input-group">
                    <label for="simFamily">Cement Family</label>
                    <select id="simFamily" onchange="updateSimulatorOptions()">${familyOptions}</select>
                </div>
                <div class="input-group">
                    <label for="simType">Cement Type</label>
                    <select id="simType" onchange="updateSimulatorComposition()"></select>
                </div>
                <div class="input-group">
                    <label for="simStrength">Strength Class</label>
                    <select id="simStrength"></select>
                </div>
                <hr>
                <h4>2. Define Nucleus Composition</h4>
                <div id="simCompositionInputs"></div>
                <div id="compositionTotal" style="text-align: right; font-weight: bold; margin-top: 10px;">Total: 100%</div>
            </div>

            <div>
                <h4>3. Define SO₃ & Gypsum</h4>
                <div id="simSo3Inputs"></div>
                <div class="input-group">
                    <label for="simTargetSo3">Target Final SO₃ (%)</label>
                    <input type="number" id="simTargetSo3" value="3.2" step="0.1">
                </div>
                <div class="input-group">
                    <label for="simGypsumPurity">Gypsum Purity (%)</label>
                    <input type="number" id="simGypsumPurity" value="90" step="0.1">
                </div>
                <div class="input-group">
                    <label for="simGypsumType">Gypsum Type</label>
                    <select id="simGypsumType">
                        <option value="dihydrate">Dihydrate (CaSO₄·2H₂O)</option>
                        <option value="hemihydrate">Hemihydrate (CaSO₄·½H₂O)</option>
                        <option value="anhydrite">Anhydrite (CaSO₄)</option>
                    </select>
                </div>
                 <div class="input-group">
                    <label for="simAdjustComponent">Component to Adjust for Gypsum</label>
                    <select id="simAdjustComponent"></select>
                </div>
                <button class="calculate-btn" onclick="calculateFreeMix()">Simulate Mix</button>
            </div>
        </div>
        <div id="simulatorResults" class="info-box" style="margin-top: 20px;">
             <h4>Simulation Results</h4>
             <p>Complete all steps and click "Simulate Mix".</p>
        </div>
    `;
    openModal('calculatorModal', content);
    updateSimulatorOptions();
}

function updateSimulatorOptions() {
    const family = document.getElementById('simFamily').value;
    const typeDropdown = document.getElementById('simType');
    
    const typesInFamily = cementData.types.filter(t => t.family.startsWith(family));
    typeDropdown.innerHTML = typesInFamily.map(t => `<option value="${t.id}">${t.name}</option>`).join('');
    
    updateSimulatorComposition();
}

function updateSimulatorComposition() {
    const selectedTypeId = document.getElementById('simType').value;
    const selectedType = cementData.types.find(t => t.id === selectedTypeId);
    const strengthDropdown = document.getElementById('simStrength');
    
    if (!selectedType) return;

    // --- NEW LOGIC: Strength Class Constraints ---
    strengthDropdown.innerHTML = selectedType.available_strength_classes.map(sc => {
        const classData = cementData.strengthClasses[sc];
        return Object.keys(classData.variants).map(v => {
            const isCemThree = selectedType.family.startsWith('CEM III');
            // Disable 'L' variants for all non-CEM III types
            const isDisabled = v === 'L' && !isCemThree;
            return `<option value="${sc}-${v}" ${isDisabled ? 'disabled' : ''}>${sc} ${v} ${isDisabled ? ' (CEM III Only)' : ''}</option>`;
        }).join('');
    }).join('');

    const compositionDiv = document.getElementById('simCompositionInputs');
    const so3Div = document.getElementById('simSo3Inputs');
    const adjustDropdown = document.getElementById('simAdjustComponent');

    let compositionHTML = '';
    let so3HTML = '';
    let adjustOptionsHTML = '';

    const allConstituents = ['clinker', 'slag', 'silicaFume', 'pozzolan', 'flyAsh', 'burntShale', 'limestone', 'minor'];
    
    allConstituents.forEach(key => {
        const componentName = key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1');
        const defaultValue = selectedType.composition[key] || 0;
        
        // --- NEW LOGIC: Dynamic Input Locking ---
        const isAllowed = key in selectedType.composition;

        compositionHTML += `
            <div class="input-group">
                <label for="comp-${key}">${componentName} (%)</label>
                <input type="number" id="comp-${key}" value="${defaultValue}" oninput="validateCompositionTotal()" ${!isAllowed ? 'disabled' : ''}>
            </div>`;
        
        so3HTML += `
            <div class="input-group">
                <label for="so3-${key}">SO₃ in ${componentName} (%)</label>
                <input type="number" id="so3-${key}" value="0.5" step="0.01" ${!isAllowed ? 'disabled' : ''}>
            </div>`;
        
        if(isAllowed) {
            adjustOptionsHTML += `<option value="${key}">${componentName}</option>`;
        }
    });

    compositionDiv.innerHTML = compositionHTML;
    so3Div.innerHTML = so3HTML;
    adjustDropdown.innerHTML = adjustOptionsHTML;
    adjustDropdown.value = 'clinker'; 
    validateCompositionTotal();
}


function validateCompositionTotal() {
    const totalDiv = document.getElementById('compositionTotal');
    const inputs = document.querySelectorAll('#simCompositionInputs input');
    let total = 0;
    inputs.forEach(input => {
        total += parseFloat(input.value) || 0;
    });
    totalDiv.textContent = `Total: ${total.toFixed(2)}%`;
    totalDiv.style.color = Math.abs(total - 100) > 0.01 ? 'red' : 'green';
}

function calculateFreeMix() {
    const resultsDiv = document.getElementById('simulatorResults');
    const selectedTypeId = document.getElementById('simType').value;
    const selectedType = cementData.types.find(t => t.id === selectedTypeId);

    // --- VALIDATION LOGIC ---
    const warnings = [];
    const nucleusComposition = {};
    let nucleusTotal = 0;
    document.querySelectorAll('#simCompositionInputs input').forEach(input => {
        if (!input.disabled) {
            const key = input.id.split('-')[1];
            const value = parseFloat(input.value) || 0;
            if (value >= 0) {
                nucleusComposition[key] = value;
                nucleusTotal += value;
            }
        }
    });

    if (Math.abs(nucleusTotal - 100) > 0.01) {
        resultsDiv.innerHTML = `<h4>Error</h4><p class="warning-text">Nucleus composition must total 100%.</p>`;
        return;
    }

    // --- Simplified Top-Level Warning ---
    const clinkerRange = selectedType.clinker.replace('%', '').split('-').map(Number);
    const minClinker = clinkerRange[0];
    const maxClinker = clinkerRange[1];
    const userClinker = nucleusComposition.clinker;

    if (userClinker < minClinker || userClinker > maxClinker) {
        warnings.push(`<strong>Clinker Nucleus:</strong> ${userClinker}% is outside the standard range of ${selectedType.clinker}.`);
    }

    // --- CORE CALCULATION ---
    const targetSo3 = parseFloat(document.getElementById('simTargetSo3').value);
    const gypsumPurity = parseFloat(document.getElementById('simGypsumPurity').value) / 100;
    const gypsumType = document.getElementById('simGypsumType').value;

    let so3FromNucleus = 0;
    for (const key in nucleusComposition) {
        const so3Input = document.getElementById(`so3-${key}`);
        if(so3Input && !so3Input.disabled){
            so3FromNucleus += (parseFloat(so3Input.value) / 100) * nucleusComposition[key];
        }
    }

    const mw = cementData.molecularWeights;
    const so3InPureGypsum = (mw.SO3 / mw[gypsumType]) * 100;
    const so3InActualGypsum = so3InPureGypsum * gypsumPurity;
    
    if (so3InActualGypsum <= so3FromNucleus) {
         resultsDiv.innerHTML = `<h4>Calculation Error</h4><p class="warning-text">Gypsum SO₃ (${so3InActualGypsum.toFixed(2)}%) is not higher than Nucleus SO₃ (${so3FromNucleus.toFixed(2)}%). Cannot achieve target.</p>`;
        return;
    }
    
    const requiredGypsumPercent = ((targetSo3 - so3FromNucleus) / (so3InActualGypsum - so3FromNucleus)) * 100;

    const nucleusPercentage = 100 - requiredGypsumPercent;
    const finalComposition = {};
    for (const key in nucleusComposition) {
        if(nucleusComposition[key] > 0) {
            finalComposition[key] = nucleusComposition[key] * (nucleusPercentage / 100);
        }
    }
    
    // --- DYNAMIC RESULTS HTML ---
    let warningsHTML = '';
    if (warnings.length > 0) {
        warningsHTML = `<div class="warning-box">
            <h4><i class="fas fa-exclamation-triangle"></i> Standard Deviation Warning</h4>
            <ul>${warnings.map(w => `<li>${w}</li>`).join('')}</ul>
        </div>`;
    }

    let resultsHTML = `
        ${warningsHTML}
        <h4>Simulation Results</h4>
        <p>To achieve a target of <strong>${targetSo3}% SO₃</strong>:</p>
        <p><strong>Required Gypsum: ${requiredGypsumPercent.toFixed(2)}%</strong></p>
        <hr>
        <h4>Final Cement Composition:</h4>
    `;
    let finalTotal = requiredGypsumPercent;
    for (const key in finalComposition) {
        resultsHTML += `<div class="result-line"><p><strong>${key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1')}:</strong> ${finalComposition[key].toFixed(2)}%</p>`;
        
        // --- NEW: Deviation Annotation Logic is now here ---
        if (key === 'clinker') {
            if (userClinker < minClinker || userClinker > maxClinker) {
                let deviation = 0;
                let deviationText = '';
                if (userClinker < minClinker) {
                    deviation = minClinker - userClinker;
                    deviationText = `(Below minimum by ${deviation.toFixed(2)}%)`;
                } else {
                    deviation = userClinker - maxClinker;
                    deviationText = `(Above maximum by ${deviation.toFixed(2)}%)`;
                }
                resultsHTML += `<span class="compliance-sigil-fail">✗ Warning</span> <span class="warning-detail-inline">${deviationText}</span>`;
            } else {
                 resultsHTML += `<span class="compliance-sigil">✓ Compliant</span>`;
            }
        }
        resultsHTML += `</div>`;
        finalTotal += finalComposition[key];
    }
    resultsHTML += `<hr><p><strong>Total: ${finalTotal.toFixed(2)}%</strong></p>`;
    
    resultsDiv.innerHTML = resultsHTML;
}
