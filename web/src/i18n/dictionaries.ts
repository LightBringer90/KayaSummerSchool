export const locales = ["ro", "en"] as const;
export type Locale = (typeof locales)[number];

export const dictionaries = {
  ro: {
    siteName: "Kaya Summer School",
    tagline:
      "Evenimente pentru copii cu dizabilități și sprijin pentru mame singure",
    nav: {
      home: "Acasă",
      events: "Evenimente",
      gallery: "Galerie",
      donate: "Donații",
      register: "Înscriere",
      about: "Despre noi",
      contact: "Contact",
    },
    home: {
      eyebrow: "Kaya Summer School",
      heroTitle: "Bucurie pentru fiecare copil",
      heroBody:
        "Organizăm evenimente gratuite pentru copii cu dizabilități și familii monoparentale aflate în dificultate. Implică-te, donează sau înscrie un copil la următorul eveniment.",
      heroCtaEvents: "Vezi evenimente",
      heroCtaDonate: "Donează acum",
      programsTitle: "Ce facem",
      programs: {
        events: {
          title: "Evenimente pentru copii",
          body: "Tabere, ateliere creative și ieșiri în natură — gratuite pentru familiile pe care le sprijinim.",
        },
        play: {
          title: "Joacă în natură",
          body: "Resurse pentru părinți și copii: mai puțin ecran, mai mult aer liber și mai multe prietenii.",
        },
        donate: {
          title: "Sprijin pentru familii",
          body: "Programul nostru de donații finanțează evenimentele și ajută direct copiii care au cea mai mare nevoie.",
        },
      },
      eventsSectionTitle: "Evenimente și noutăți",
      eventsSectionBody:
        "Aruncă o privire la ce urmează — locurile sunt limitate.",
      eventsSeeAll: "Toate evenimentele",
      quoteText:
        "„Fiecare zâmbet e o promisiune că nu mai e singur. Asta facem aici, în fiecare zi.”",
      quoteAuthor: "— Echipa Kaya Summer School",
      donateBannerTitle: "O zi de zâmbete",
      donateBannerBody:
        "Cu doar 50 lei sprijini un copil să participe la următorul eveniment.",
      missionTitle: "Misiunea noastră",
      missionBody:
        "Credem că orice copil merită zâmbete, prieteni și amintiri frumoase, indiferent de greutățile prin care trece familia sa.",
      statsKids: "copii sprijiniți",
      statsEvents: "evenimente organizate",
      statsVolunteers: "voluntari activi",
    },
    events: {
      title: "Evenimente viitoare",
      subtitle:
        "Toate evenimentele noastre sunt gratuite. Locurile sunt limitate — înscrie-te din timp.",
      register: "Înscrie-te",
      empty: "Niciun eveniment programat momentan. Reveniți curând.",
    },
    register: {
      title: "Formular de înscriere",
      subtitle:
        "Completează formularul și te contactăm pentru a confirma locul.",
      childName: "Numele copilului",
      parentName: "Numele părintelui / tutorelui",
      email: "Email",
      phone: "Telefon",
      eventLabel: "Evenimentul ales",
      notes: "Note (alergii, mobilitate, etc.)",
      submit: "Trimite înscrierea",
      success: "Mulțumim! Te vom contacta în curând.",
    },
    donate: {
      title: "Sprijină cauza",
      subtitle:
        "Fiecare donație ne ajută să organizăm mai multe evenimente pentru copii.",
      bankTitle: "Transfer bancar",
      bankNote:
        "Asociația Pași Mici · IBAN: RO00 EXAM PLE0 0000 0000 0000 · BCR",
      onlineTitle: "Donație online",
      onlineNote:
        "Folosește butonul de mai jos pentru o donație securizată prin card.",
      donateBtn: "Donează cu cardul",
    },
    gallery: {
      title: "Galerie",
      subtitle: "Momente din evenimentele noastre.",
    },
    play: {
      navLabel: "Joacă",
      title: "Vino să te joci!",
      subtitle:
        "Apasă pe oricare prieten ca să-l vezi cum dansează, sare sau zboară. Câte poți să faci să zâmbească?",
      smiles: "zâmbete",
      reset: "Resetează",
      modeFree: "Joacă liberă",
      modeStory: "Aventură în pădure",
      step: "Pasul",
      of: "din",
      next: "Mai departe",
      tryAgain: "Din nou",
      characters: {
        bunny: "Iepurașul Topa",
        cat: "Pisica Miau",
        dragon: "Dragonul Foc",
        butterfly: "Fluturele Lila",
        frog: "Broscuța Hop",
        star: "Steluța Sclipici",
      },
      hints: {
        bunny: "sare",
        cat: "se învârte",
        dragon: "scuipă focuri",
        butterfly: "zboară",
        frog: "țopăie",
        star: "strălucește",
      },
      story: {
        intro:
          "Hai în pădurea fermecată! Șase prieteni au nevoie de ajutorul tău. Apasă obiectul potrivit pentru fiecare.",
        start: "Începe aventura",
        steps: {
          bunny: "Iepurașul e flămând. Dă-i un morcov! 🥕",
          cat: "Pisicii i-e dor de joacă. Aruncă-i ghemul! 🧶",
          dragon: "Dragonului îi e frig. Aprinde focul! 🪵",
          butterfly: "Fluturele caută o floare. Arată-i una! 🌸",
          frog: "Broscuța vrea să sară. Dă-i o baltă! 💧",
          star: "Pune-ți o dorință și atinge steluța! 🌟",
        },
        success: {
          bunny: "Yum! Mulțumesc!",
          cat: "Miau! Ce distractiv!",
          dragon: "Roar! E așa cald!",
          butterfly: "Wow, ce parfum!",
          frog: "Splaș!",
          star: "Dorința ta e auzită!",
        },
        wrong: "Hmm, încearcă altceva!",
        finishedTitle: "Ai reușit!",
        finishedBody:
          "Toți prietenii zâmbesc datorită ție. Acum lasă telefonul jos și du-te să te joci afară cu prietenii adevărați!",
        finishedCta: "Idei de joacă în natură",
        replay: "Reia aventura",
      },
    },
    program: {
      navLabel: "Program",
      eyebrow: "Program",
      title: "Kaya Summer School",
      subtitle: "O experiență prin care copilul crește și se dezvoltă",
      week: {
        eyebrow: "Grupa 7–13 ani · Luna 1",
        title: "Programul săptămânal",
        body: "O zi tipică, de luni până vineri. Activitățile alternează între sport, dezvoltare personală și ateliere creative.",
        intervalHeader: "Interval",
        dayHeader: "Luni–Vineri",
        rows: [
          ["10:00–11:30", "Antrenament Sportiv (Jiu Jitsu / Capoeira)"],
          ["11:30–13:00", "Dezvoltare Personală / Proiecte"],
          ["13:00–14:00", "Prânz și Relaxare"],
          ["14:00–16:00", "Atelier Creativ / IT / Expediții"],
        ],
      },
      months: {
        eyebrow: "Anexă",
        title: "Lunile 2 și 3",
        m2Title: "Luna 2 — Creativitate",
        m2Range: "Săptămânile 5–8",
        m2Body: "Artă, teatru, proiecte de echipă și sport.",
        m3Title: "Luna 3 — Performanță",
        m3Range: "Săptămânile 9–12",
        m3Body: "Leadership, competiții și demonstrații finale.",
      },
      camps: {
        eyebrow: "Tabere",
        title: "Program tabără (3 zile)",
        body: "Trei zile concentrate, în natură, dincolo de săptămâna obișnuită.",
        days: [
          { day: "Ziua 1", activity: "Teambuilding & Inițiere" },
          { day: "Ziua 2", activity: "Sport & Foc de tabără" },
          { day: "Ziua 3", activity: "Reflecție & Plecare" },
        ],
      },
      budget: {
        eyebrow: "Buget",
        title: "Consumabile și management financiar",
        body: "Cost estimat pe copil pentru fiecare categorie de cheltuieli.",
        categoryHeader: "Categorie",
        costHeader: "Cost estimat / copil",
        rows: [
          ["Artă & IT", "100 RON"],
          ["Igienă & Siguranță", "40 RON"],
          ["Catering (Gustări)", "300 RON"],
          ["Protocol & Evenimente", "30 RON"],
        ],
        totalLabel: "Total estimat",
        totalValue: "470 RON",
      },
      strategies: {
        eyebrow: "Strategie",
        title: "Strategii pentru profitabilitate",
        items: [
          {
            title: "Regula Break-Even",
            body: "Asigură-te că acoperi cheltuielile fixe (chirie/salarii) din primii 10 copii înscriși.",
          },
          {
            title: "Optimizare staff",
            body: "Folosește voluntari sau studenți pentru asistență.",
          },
          {
            title: "Venituri extra",
            body: "Taxă de înscriere nerambursabilă și servicii de supraveghere prelungită.",
          },
        ],
      },
    },
    unplug: {
      navLabel: "Fără ecrane",
      title: "Mai puțin ecran, mai multă natură",
      subtitle:
        "Idei pentru părinți și copii: cum redescoperim joaca în aer liber, prieteniile reale și liniștea fără telefon.",
      whyTitle: "De ce contează",
      whyItems: [
        {
          icon: "🌳",
          title: "Mai mult somn și energie",
          body: "Copiii care petrec timp afară adorm mai ușor și au mai multă energie peste zi.",
        },
        {
          icon: "👫",
          title: "Prietenii adevărate",
          body: "Joaca față în față construiește încredere și empatie — lucruri pe care un ecran nu le poate înlocui.",
        },
        {
          icon: "🧠",
          title: "Atenție și creativitate",
          body: "Plictiseala scurtă declanșează imaginația. Mai puțin ecran = mai multă inventivitate.",
        },
      ],
      tipsTitle: "Sfaturi pentru părinți",
      tips: [
        "Stabiliți o oră fără ecrane în fiecare zi — la masă și înainte de culcare.",
        "Lăsați telefoanele într-un coș la intrare când veniți acasă.",
        "Mergeți împreună într-un parc nou cel puțin o dată pe săptămână.",
        "Înlocuiți un episod de desene cu o poveste citită cu voce tare.",
        "Dați copilului un caiet de schițe sau o cutie cu cărți de joc.",
      ],
      pledgeTitle: "Ce încerci săptămâna asta?",
      pledgeSubtitle:
        "Bifează câteva idei și vezi câte poți bifa până duminică.",
      pledgeItems: [
        "O plimbare de 30 de minute în parc",
        "Cină fără telefoane la masă",
        "O după-amiază la teren de joacă cu alți copii",
        "Citește o carte împreună",
        "Un atelier creativ acasă (pictură, lut, gătit)",
        "O zi întreagă fără desene animate",
      ],
      pledgeChosen: "alese",
      pledgeReset: "Șterge tot",
      pledgePerfect: "Bravo! O săptămână plină de joacă reală te așteaptă.",
    },
    footer: {
      rights: "Toate drepturile rezervate.",
      contact: "Contact: salut@kayasummerschool.ro",
      address: "București, România",
      phone: "+40 700 000 000",
      colExplore: "Explorează",
      colSupport: "Sprijin",
      colContact: "Contact",
      newsletter: "Abonează-te la newsletter",
      newsletterCta: "Trimite",
      emailPlaceholder: "Adresa ta de email",
    },
  },
  en: {
    siteName: "Kaya Summer School",
    tagline:
      "Events for children with disabilities and support for single mothers",
    nav: {
      home: "Home",
      events: "Events",
      gallery: "Gallery",
      donate: "Donate",
      register: "Register",
      about: "About",
      contact: "Contact",
    },
    home: {
      eyebrow: "Kaya Summer School",
      heroTitle: "Joy for every child",
      heroBody:
        "We host free events for children with disabilities and single-parent families in need. Get involved, donate, or sign a child up for our next event.",
      heroCtaEvents: "See events",
      heroCtaDonate: "Donate now",
      programsTitle: "What we do",
      programs: {
        events: {
          title: "Events for children",
          body: "Camps, creative workshops and outdoor outings — free for the families we support.",
        },
        play: {
          title: "Play in nature",
          body: "Resources for parents and kids: less screen time, more outdoors and real friendships.",
        },
        donate: {
          title: "Support for families",
          body: "Our donations program funds the events and goes directly to the children who need it most.",
        },
      },
      eventsSectionTitle: "Events and news",
      eventsSectionBody: "Take a look at what's coming up — spots fill quickly.",
      eventsSeeAll: "All events",
      quoteText:
        "“Every smile is a promise they're no longer alone. That is what we do here, every single day.”",
      quoteAuthor: "— Kaya Summer School team",
      donateBannerTitle: "A day of smiles",
      donateBannerBody:
        "For just 50 RON you can sponsor a child for our next event.",
      missionTitle: "Our mission",
      missionBody:
        "Every child deserves smiles, friendships and beautiful memories — no matter what their family is going through.",
      statsKids: "children supported",
      statsEvents: "events organized",
      statsVolunteers: "active volunteers",
    },
    events: {
      title: "Upcoming events",
      subtitle:
        "All events are free. Spots are limited — please register early.",
      register: "Register",
      empty: "No events scheduled right now. Please check back soon.",
    },
    register: {
      title: "Registration form",
      subtitle:
        "Fill in the form and we'll get back to you to confirm the spot.",
      childName: "Child's name",
      parentName: "Parent / guardian name",
      email: "Email",
      phone: "Phone",
      eventLabel: "Chosen event",
      notes: "Notes (allergies, mobility, etc.)",
      submit: "Submit registration",
      success: "Thank you! We'll be in touch shortly.",
    },
    donate: {
      title: "Support the cause",
      subtitle:
        "Every donation helps us put on more events for children who need them.",
      bankTitle: "Bank transfer",
      bankNote:
        "Little Steps Association · IBAN: RO00 EXAM PLE0 0000 0000 0000 · BCR",
      onlineTitle: "Online donation",
      onlineNote: "Use the button below for a secure card donation.",
      donateBtn: "Donate by card",
    },
    gallery: {
      title: "Gallery",
      subtitle: "Moments from our events.",
    },
    play: {
      navLabel: "Play",
      title: "Come and play!",
      subtitle:
        "Tap any friend to see them dance, jump or fly. How many can you make smile?",
      smiles: "smiles",
      reset: "Reset",
      modeFree: "Free play",
      modeStory: "Forest adventure",
      step: "Step",
      of: "of",
      next: "Next",
      tryAgain: "Try again",
      characters: {
        bunny: "Hoppy the Bunny",
        cat: "Whiskers the Cat",
        dragon: "Sparky the Dragon",
        butterfly: "Lila the Butterfly",
        frog: "Ribbit the Frog",
        star: "Twinkle the Star",
      },
      hints: {
        bunny: "jumps",
        cat: "spins",
        dragon: "breathes fire",
        butterfly: "flies",
        frog: "hops",
        star: "sparkles",
      },
      story: {
        intro:
          "Welcome to the enchanted forest! Six friends need your help. Tap the right item for each one.",
        start: "Start adventure",
        steps: {
          bunny: "Hoppy is hungry. Give them a carrot! 🥕",
          cat: "Whiskers wants to play. Toss the yarn ball! 🧶",
          dragon: "Sparky is cold. Light the fire! 🪵",
          butterfly: "Lila is looking for a flower. Show her one! 🌸",
          frog: "Ribbit wants a swim. Find the puddle! 💧",
          star: "Make a wish and touch the shooting star! 🌟",
        },
        success: {
          bunny: "Yum! Thank you!",
          cat: "Meow! So fun!",
          dragon: "Roar! So warm!",
          butterfly: "Wow, what a smell!",
          frog: "Splash!",
          star: "Your wish is heard!",
        },
        wrong: "Hmm, try something else!",
        finishedTitle: "You did it!",
        finishedBody:
          "All six friends are smiling because of you. Now put the screen down and go play outside with real friends!",
        finishedCta: "Ideas for outdoor play",
        replay: "Play again",
      },
    },
    program: {
      navLabel: "Programme",
      eyebrow: "Programme",
      title: "Kaya Summer School",
      subtitle: "An experience that helps your child grow and thrive",
      week: {
        eyebrow: "Ages 7–13 · Month 1",
        title: "Weekly schedule",
        body: "A typical day, Monday through Friday. Activities alternate between sports, personal development and creative workshops.",
        intervalHeader: "Time",
        dayHeader: "Mon–Fri",
        rows: [
          ["10:00–11:30", "Sports training (Jiu-Jitsu / Capoeira)"],
          ["11:30–13:00", "Personal development / Projects"],
          ["13:00–14:00", "Lunch & rest"],
          ["14:00–16:00", "Creative workshop / IT / Expeditions"],
        ],
      },
      months: {
        eyebrow: "Appendix",
        title: "Months 2 and 3",
        m2Title: "Month 2 — Creativity",
        m2Range: "Weeks 5–8",
        m2Body: "Art, theatre, team projects and sports.",
        m3Title: "Month 3 — Performance",
        m3Range: "Weeks 9–12",
        m3Body: "Leadership, competitions and final showcases.",
      },
      camps: {
        eyebrow: "Camps",
        title: "Camp programme (3 days)",
        body: "Three focused days in nature, beyond the regular weekly schedule.",
        days: [
          { day: "Day 1", activity: "Teambuilding & Onboarding" },
          { day: "Day 2", activity: "Sports & Campfire" },
          { day: "Day 3", activity: "Reflection & Departure" },
        ],
      },
      budget: {
        eyebrow: "Budget",
        title: "Supplies & financial management",
        body: "Estimated cost per child for each spending category.",
        categoryHeader: "Category",
        costHeader: "Estimated cost / child",
        rows: [
          ["Art & IT", "100 RON"],
          ["Hygiene & Safety", "40 RON"],
          ["Catering (Snacks)", "300 RON"],
          ["Hospitality & Events", "30 RON"],
        ],
        totalLabel: "Estimated total",
        totalValue: "470 RON",
      },
      strategies: {
        eyebrow: "Strategy",
        title: "Strategies for profitability",
        items: [
          {
            title: "Break-even rule",
            body: "Cover your fixed costs (rent / salaries) with the first 10 enrolled children.",
          },
          {
            title: "Staff optimization",
            body: "Use volunteers or students for support roles.",
          },
          {
            title: "Extra revenue",
            body: "Non-refundable enrolment fee and extended supervision services.",
          },
        ],
      },
    },
    unplug: {
      navLabel: "Unplug",
      title: "Less screen, more nature",
      subtitle:
        "Ideas for parents and kids: rediscover outdoor play, real friendships and quiet moments without phones.",
      whyTitle: "Why it matters",
      whyItems: [
        {
          icon: "🌳",
          title: "Better sleep and energy",
          body: "Children who spend time outside fall asleep faster and have more energy through the day.",
        },
        {
          icon: "👫",
          title: "Real friendships",
          body: "Face-to-face play builds trust and empathy — things a screen can never replace.",
        },
        {
          icon: "🧠",
          title: "Focus and creativity",
          body: "A little boredom sparks imagination. Less screen = more inventive play.",
        },
      ],
      tipsTitle: "Tips for parents",
      tips: [
        "Set a screen-free hour every day — at meals and before bed.",
        "Drop phones in a basket by the door when you come home.",
        "Visit a new park together at least once a week.",
        "Swap one cartoon episode for a story read out loud.",
        "Hand your child a sketchbook or a deck of cards.",
      ],
      pledgeTitle: "What will you try this week?",
      pledgeSubtitle: "Pick a few ideas and see how many you can tick by Sunday.",
      pledgeItems: [
        "A 30-minute walk in the park",
        "Phones away at the dinner table",
        "An afternoon at the playground with other kids",
        "Read a book together",
        "A creative workshop at home (paint, clay, cooking)",
        "A whole day without cartoons",
      ],
      pledgeChosen: "picked",
      pledgeReset: "Clear all",
      pledgePerfect: "Yes! A whole week of real play awaits you.",
    },
    footer: {
      rights: "All rights reserved.",
      contact: "Contact: hello@kayasummerschool.org",
      address: "Bucharest, Romania",
      phone: "+40 700 000 000",
      colExplore: "Explore",
      colSupport: "Support",
      colContact: "Contact",
      newsletter: "Subscribe to our newsletter",
      newsletterCta: "Submit",
      emailPlaceholder: "Your email address",
    },
  },
} as const;

export type Dictionary = (typeof dictionaries)[Locale];

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
