/**
 * ════════════════════════════════════════════════════════════════════════════
 * CSS EDITING GUIDE FOR TEAM MEMBERS
 * ════════════════════════════════════════════════════════════════════════════
 * 
 * File: home.css (1900+ lines)
 * Last Updated: December 2025
 * Status: Fully commented with section indicators
 * 
 * ════════════════════════════════════════════════════════════════════════════
 */

/* ════════════════════════════════════════════════════════════════════════════
   TABLE OF CONTENTS - QUICK JUMP GUIDE
   ════════════════════════════════════════════════════════════════════════════ */

/*
 * SECTION 1:  ROOT VARIABLES & THEMING (Lines 155-220)
 *             Colors, fonts, spacing, shadows, animations
 *             
 * SECTION 2:  GLOBAL BASE STYLES (Lines 225-265)
 *             Reset, html, body, links, images, containers
 *             
 * SECTION 3:  NAVIGATION / HEADER (Lines 270-445)
 *             Fixed header, logo, brand, nav links, buttons, mobile menu
 *             
 * SECTION 4:  HERO SECTION (Lines 450-680)
 *             Landing hero, animations, title, description, buttons, CTA
 *             
 * SECTION 5:  PROJECTS SECTION (Lines 685-800)
 *             Projects grid, project cards, badges, actions
 *             
 * SECTION 6:  TEAM SECTION (Lines 805-1050)
 *             Team showcase, cards, avatars, overlays, hover effects
 *             
 * SECTION 7:  VIDEO SECTION (Lines 1055-1130)
 *             Video player, frame, overlay, sound toggle
 *             
 * SECTION 8:  JOIN & FOOTER (Lines 1135-1175)
 *             Call-to-action, footer, contact section
 *             
 * SECTION 9:  MODERN NAVBAR (Lines 1180-1450)
 *             New navbar design, logos, menu, theme toggle, buttons
 *             
 * SECTION 10: ANIMATIONS (Lines 1455-1530)
 *             @keyframes definitions for all animations
 *             
 * SECTION 11: RESPONSIVE QUERIES (Lines 1535-1900)
 *             Mobile (560px), Tablet (768px), Desktop (980px+)
 */

/* ════════════════════════════════════════════════════════════════════════════
   WHAT TO EDIT - COMMON TASKS
   ════════════════════════════════════════════════════════════════════════════ */

/*
 * 📝 CHANGE COLORS:
 *    Location: SECTION 1 - ROOT VARIABLES (Lines ~155-220)
 *    Search:   :root {
 *    Examples:
 *    - --ms-blue:    #0078d4     (Primary color - Microsoft blue)
 *    - --ms-purple:  #5c2d91     (Accent color)
 *    - --bg:         #f7f9fb     (Background - light mode)
 *    - --card:       #ffffff     (Card background)
 *    - --muted:      #0b1220     (Text color)
 *    
 *    Dark mode overrides are at: [data-theme="dark"] { ... }
 *    
 * 📝 CHANGE FONTS:
 *    Location: SECTION 1 - ROOT VARIABLES (Line ~190)
 *    Search:   --font:
 *    Current: "Segoe UI", Inter, system-ui, -apple-system...
 *    Note: Change here to apply to entire page
 *    
 * 📝 CHANGE SPACING/SIZING:
 *    Location: SECTION 1 - ROOT VARIABLES (Lines ~180-186)
 *    Search:   --max:, --gap:, --radius:, --header-height:
 *    
 * 📝 CHANGE HERO SECTION TITLE SIZE:
 *    Location: SECTION 4 - HERO SECTION (Line ~530)
 *    Search:   .hero-title-big {
 *    Property: font-size: clamp(5.2rem, 10vw, 7.8rem);
 *    
 * 📝 CHANGE BUTTON STYLES:
 *    Location: SECTION 3 - NAVIGATION (Lines ~345-375)
 *    Search:   .btn-primary, .btn-ghost
 *    Or:       SECTION 4 - HERO (Lines ~585-600)
 *    
 * 📝 CHANGE ANIMATION SPEEDS:
 *    Location: SECTION 10 - ANIMATIONS (Lines ~1455-1530)
 *    Search:   @keyframes
 *    Property: animation: heroTitleIn 0.9s ease-out forwards;
 *              ↑ Change 0.9s to speed up/slow down
 *    
 * 📝 CHANGE PROJECT GRID COLUMNS:
 *    Location: SECTION 5 - PROJECTS (Line ~710)
 *    Search:   .projects {
 *    Property: grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
 *    
 * 📝 CHANGE TEAM CARD SIZE:
 *    Location: SECTION 6 - TEAM (Line ~870)
 *    Search:   .team-card {
 *    Properties: width: 240px; padding: 24px;
 *    
 * 📝 CHANGE HOVER EFFECTS:
 *    Location: Search for :hover in any section
 *    Examples:
 *    - .proj:hover { transform: translateY(-8px); }
 *    - .team-pill:hover { transform: translateY(-8px); }
 *    - .btn:hover { ... }
 */

/* ════════════════════════════════════════════════════════════════════════════
   SEARCH COMMANDS - USE CTRL+F TO FIND
   ════════════════════════════════════════════════════════════════════════════ */

/*
 * Find what you need using these searches:
 * 
 * COLOR CHANGES:
 *   Search: ":root {"              → Find all CSS variables
 *   Search: "--ms-blue:"           → Find primary color
 *   Search: "--bg:"                → Find background color
 *   Search: "[data-theme="dark"]"  → Find dark mode colors
 *   
 * LAYOUT CHANGES:
 *   Search: ".hero {"              → Hero section styles
 *   Search: ".projects {"          → Projects grid
 *   Search: ".team-card {"         → Team member card
 *   Search: ".navbar {"            → Navigation bar
 *   Search: ".video-wrapper {"     → Video player frame
 *   
 * BUTTON CHANGES:
 *   Search: ".btn-primary"         → Primary button styling
 *   Search: ".btn-ghost"           → Secondary button styling
 *   Search: ".btn-register"        → Register button
 *   
 * TEXT/FONT CHANGES:
 *   Search: ".hero-title-big"      → Main hero title
 *   Search: ".hero-tagline"        → Hero subtitle
 *   Search: "font-size:"           → All font sizes
 *   
 * ANIMATION CHANGES:
 *   Search: "@keyframes"           → All animations
 *   Search: "animation:"           → Animation assignments
 *   Search: "transition:"          → Smooth transitions
 *   
 * MOBILE/RESPONSIVE:
 *   Search: "@media (max-width"    → Media queries
 *   Search: "SECTION 11"           → All responsive rules
 *   
 * SPACING/GAPS:
 *   Search: "gap:"                 → Element spacing
 *   Search: "padding:"             → Internal spacing
 *   Search: "margin:"              → External spacing
 */

/* ════════════════════════════════════════════════════════════════════════════
   CSS VARIABLES REFERENCE (Color Palette)
   ════════════════════════════════════════════════════════════════════════════ */

/*
 * PRIMARY MICROSOFT COLORS:
 *   --ms-blue:      #0078d4  → Main blue (links, accents, buttons)
 *   --ms-purple:    #5c2d91  → Secondary accent
 *   --ms-teal:      #00b7c3  → Tertiary accent
 *   --ms-green:     #107C10  → Success/positive
 *   --ms-red:       #D83B01  → Error/negative
 *   --ms-yellow:    #FFB900  → Warning
 * 
 * LIGHT MODE (DEFAULT):
 *   --bg:           #f7f9fb  → Page background
 *   --card:         #ffffff  → Card/surface background
 *   --muted:        #0b1220  → Primary text (dark)
 *   --muted-2:      #6b7280  → Secondary text (gray)
 *   --border-light: rgba(0, 0, 0, 0.08) → Light borders
 * 
 * DARK MODE (data-theme="dark"):
 *   --bg:           #0f1114  → Dark background
 *   --card:         rgba(255, 255, 255, 0.03) → Dark card
 *   --muted:        #eef2f7  → Light text in dark mode
 *   --muted-2:      #9ca3af  → Light gray text
 * 
 * SEMANTIC COLORS:
 *   --light-bg:     rgba(255, 255, 255, 0.85)  → Light backgrounds
 *   --dark-bg:      rgba(20, 20, 20, 0.82)     → Dark backgrounds
 *   --light-text:   #111                        → Light mode text
 *   --dark-text:    #EDEDED                     → Dark mode text
 */

/* ════════════════════════════════════════════════════════════════════════════
   COMMON CSS PROPERTIES CHEAT SHEET
   ════════════════════════════════════════════════════════════════════════════ */

/*
 * SIZING:
 *   width: 100%;              → Full width
 *   max-width: 1200px;        → Maximum width constraint
 *   min-width: 240px;         → Minimum width
 *   aspect-ratio: 16 / 9;     → Sets ratio (width/height)
 *   
 * LAYOUT:
 *   display: flex;            → Flexible layout
 *   display: grid;            → Grid layout
 *   flex-direction: column;    → Stack vertically
 *   gap: 28px;                → Space between items
 *   align-items: center;      → Vertical centering (flex)
 *   justify-content: center;  → Horizontal centering (flex)
 *   
 * POSITIONING:
 *   position: fixed;          → Fixed to viewport
 *   position: relative;       → Relative to parent
 *   position: absolute;       → Absolute positioning
 *   inset: 0;                 → top: 0; bottom: 0; left: 0; right: 0;
 *   
 * BORDERS & RADIUS:
 *   border-radius: 12px;      → Rounded corners
 *   border-radius: 50%;       → Perfect circle
 *   border: 1px solid #ccc;   → Border style
 *   
 * SHADOWS & EFFECTS:
 *   box-shadow: 0 10px 30px rgba(0,0,0,0.2);  → Drop shadow
 *   backdrop-filter: blur(16px);               → Blur effect
 *   filter: drop-shadow(...);                  → Drop shadow on elements
 *   
 * COLORS & GRADIENTS:
 *   color: #0078d4;           → Text color
 *   background: #ffffff;      → Solid background
 *   background: linear-gradient(...);   → Gradient background
 *   opacity: 0.8;             → Transparency (0-1)
 *   
 * ANIMATIONS:
 *   transition: all 0.3s ease;        → Smooth transition
 *   animation: float 7s infinite;     → Run animation
 *   transform: translateY(-8px);      → Move element
 *   transform: scale(1.08);           → Enlarge element
 *   
 * TEXT:
 *   font-size: 16px;          → Text size
 *   font-weight: 700;         → Bold (400=normal, 700=bold)
 *   line-height: 1.6;         → Line spacing
 *   letter-spacing: 0.1em;    → Character spacing
 *   text-transform: uppercase;→ MAKE UPPERCASE
 */

/* ════════════════════════════════════════════════════════════════════════════
   RESPONSIVE BREAKPOINTS
   ════════════════════════════════════════════════════════════════════════════ */

/*
 * MOBILE FIRST APPROACH:
 * Write styles for mobile, then add breakpoints
 * 
 * BREAKPOINTS USED:
 *   560px   → Mobile phones
 *   768px   → Tablets
 *   980px   → Desktops
 *   1280px+ → Large screens
 * 
 * HOW TO USE:
 * @media (max-width: 768px) {
 *     .element {
 *         width: 100%;  // Override for tablets
 *     }
 * }
 * 
 * RESPONSIVE PATTERNS:
 *   Grid columns:   2 columns → 1 column on mobile
 *   Hero section:   Side-by-side → Stacked on mobile
 *   Hero ctas:      Horizontal → Vertical on mobile
 *   Images:         Hidden on mobile, visible on desktop
 */

/* ════════════════════════════════════════════════════════════════════════════
   TIPS FOR EDITING
   ════════════════════════════════════════════════════════════════════════════ */

/*
 * ✓ BEST PRACTICES:
 *   1. Always backup before major changes
 *   2. Use Ctrl+F to search instead of scrolling
 *   3. Change CSS variables (:root) for global changes
 *   4. Test changes on mobile AND desktop
 *   5. Check dark mode (click theme toggle) after changes
 *   6. Keep comments updated when making changes
 *   7. Don't delete commented sections - they explain design
 *   
 * ✗ AVOID:
 *   1. Don't use !important unless absolutely necessary
 *   2. Don't add inline styles (use classes instead)
 *   3. Don't remove media queries (they enable mobile design)
 *   4. Don't change random numbers - they're carefully tuned
 *   5. Don't use hardcoded colors - use CSS variables instead
 *   
 * 🔧 DEBUG TIPS:
 *   If something looks wrong:
 *   1. Search for the class name (.hero, .team-card, etc.)
 *   2. Check if it has :hover or :active state
 *   3. Look for conflicting styles below
 *   4. Check media queries for responsive overrides
 *   5. Test in light AND dark mode
 *   
 * 📱 TESTING CHECKLIST:
 *   [ ] Desktop (1280px+)
 *   [ ] Tablet (768px-979px)
 *   [ ] Mobile (360px-767px)
 *   [ ] Light theme (default)
 *   [ ] Dark theme (toggle theme button)
 *   [ ] Hover effects working
 *   [ ] Animations playing smoothly
 */

/* ════════════════════════════════════════════════════════════════════════════
   GLOSSARY
   ════════════════════════════════════════════════════════════════════════════ */

/*
 * Hero Section     → Large landing banner at top with title, description, CTA
 * Card             → Box container holding content (projects, team members, etc.)
 * CTA              → Call-To-Action (buttons, links that encourage action)
 * Gradient         → Color blend from one color to another
 * Flex / Grid      → CSS layout systems for positioning elements
 * Responsive       → Design that works on mobile, tablet, desktop
 * Breakpoint       → Screen width threshold (@media query)
 * Overlay          → Semi-transparent layer over content
 * Blur Effect      → backdrop-filter that makes things look blurred
 * Z-index          → Layer ordering (higher = on top)
 * Transform        → Move, rotate, scale elements
 * Transition       → Smooth animation between states
 * Animation        → Movement using @keyframes
 * Pseudo-class     → :hover, :active, :focus, ::before, ::after
 * Variable         → CSS custom property (--name)
 * Dark Mode        → Alternative color scheme for low-light
 */

/* ════════════════════════════════════════════════════════════════════════════
   QUICK REFERENCE: FINDING SPECIFIC ELEMENTS
   ════════════════════════════════════════════════════════════════════════════ */

/*
 * TOP NAVBAR / HEADER:
 *   .navbar, .site-header, .nav-container, .nav-menu
 *   Search: "SECTION 3" or "NAVIGATION"
 *   
 * HERO (MAIN LANDING):
 *   .hero, .hero-title-big, .hero-ctas, #home
 *   Search: "SECTION 4" or "HERO SECTION"
 *   
 * PROJECT CARDS:
 *   .proj, .projects, .proj-card, #projects
 *   Search: "SECTION 5" or "PROJECTS SECTION"
 *   
 * TEAM MEMBERS:
 *   .team-card, .team-overlay, .team-pill, .team-showcase
 *   Search: "SECTION 6" or "TEAM SECTION"
 *   
 * VIDEO PLAYER:
 *   .video-wrapper, .video-shell, .hero-video, .sound-toggle
 *   Search: "SECTION 7" or "VIDEO SECTION"
 *   
 * JOIN/CTA & FOOTER:
 *   .join-section, .footer-inner, #contact, #join
 *   Search: "SECTION 8" or "JOIN"
 *   
 * BUTTONS:
 *   .btn-primary, .btn-ghost, .btn-register, .btn-login
 *   Search: ".btn" or "BUTTON"
 *   
 * ANIMATIONS:
 *   @keyframes, animation:, transition:
 *   Search: "SECTION 10" or "@keyframes"
 *   
 * RESPONSIVE / MOBILE:
 *   @media (max-width:
 *   Search: "SECTION 11" or "@media"
 */

/* ════════════════════════════════════════════════════════════════════════════
   DOCUMENT ENDS
   For more help, search "SECTION #" where # is 1-11
   ════════════════════════════════════════════════════════════════════════════ */
