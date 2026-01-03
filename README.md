E's GYM – Rreth Nesh (React + Bootstrap)

Ky projekt është realizuar si pjesë e detyrës për përdorimin e React dhe një UI library moderne (React-Bootstrap), duke rikrijuar një faqe nga projekti kryesor.

Faqja e riprodhuar është “Rreth Nesh” e webfaqes E’s GYM.

🛠 Teknologjitë e përdorura
- React (me Vite)
- React-Bootstrap
- JavaScript (JSX)
- HTML & CSS (inline styles)

📄 Përshkrimi i projektit
Projekti demonstron:
- përdorimin e komponentëve React
- ndarjen e kodit në components dhe pages
- përdorimin e React-Bootstrap për layout (Container, Row, Col, Card, Navbar)
- elemente interaktive si:
  - Navbar responsive
  - Ora live (me useState dhe useEffect)
  - Formë për email
  - Butona dhe struktura vizuale

Stilimi është bërë kryesisht me inline styles për të shmangur ndikimin global të klasave dhe për ta mbajtur kodin të thjeshtë.

🧩 Struktura e projektit
src/
├── components/
│ ├── NavbarTop.jsx
│ ├── AboutSection.jsx
│ ├── HoursBar.jsx
│ ├── ContactCard.jsx
│ └── Footer.jsx
├── pages/
│ └── RrethNeshPage.jsx
├── assets/
│ └── (fotot dhe logo)
├── App.jsx
└── main.jsx