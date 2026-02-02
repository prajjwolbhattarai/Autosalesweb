
export type Language = 'en' | 'de' | 'tr';

export const translations = {
  en: {
    nav: {
      services: "Services",
      pricing: "Pricing",
      faq: "FAQ"
    },
    hero: {
      tag: "New: 2025 Dealership Packages",
      title: "Sell More",
      titleAccent: "Cars Online",
      desc: "A complete digital inventory and marketing system for used car dealerships. Built for speed. Transparent pricing.",
      primaryBtn: "Instant Pricing & Build Package",
      secondaryBtn: "Learn More",
      stats: {
        sales: "Avg. Sales Lift",
        onboarding: "Onboarding Time",
        onboardingVal: "3-5 Days"
      }
    },
    calculator: "Instant Pricing Calculator",
    services: "Everything You Need to Scale",
    servicesSub: "A complete digital sales engine, not isolated services. Choose your setup, see your price instantly.",
    serviceList: [
      {
        tag: "MANDATORY",
        title: "Core Platform",
        subtitle: "The Digital Hub",
        desc: "Centralized inventory management system that synchronizes your stock across all major platforms automatically.",
        includedTitle: "What's Included",
        features: ["Inventory Sync", "CRM Lite", "Lead Management", "Performance Dashboard"],
        why: "Manual listing is slow and error-prone. One central hub saves 15+ hours weekly per dealership.",
      },
      {
        tag: "INKLUSIVE",
        title: "Multi-Platform Distribution",
        subtitle: "Maximum Reach",
        desc: "Automated distribution to mobile.de, AutoScout24, and Kleinanzeigen. One click, everywhere.",
        includedTitle: "Included Channels",
        features: ["mobile.de", "AutoScout24", "Kleinanzeigen", "Social Export"],
        why: "Buyers are fragmented. Being everywhere increases your lead volume by up to 300%.",
      },
      {
        tag: "OPTIONAL",
        title: "Pro Photography",
        subtitle: "Conversion Booster",
        desc: "Professional vehicle photography services that make your inventory stand out from the competition.",
        includedTitle: "Package Details",
        features: ["HDR Images", "Standardized Angles", "Retouching", "Quick Turnaround"],
        why: "High-quality images are the #1 factor in a customer's decision to click your ad.",
      },
      {
        tag: "OPTIONAL",
        title: "Performance Ads",
        subtitle: "Growth Accelerator",
        desc: "Targeted Google and Meta campaigns specifically designed to move slow inventory and attract local buyers.",
        includedTitle: "Ad Services",
        features: ["Google Search", "FB/IG Retargeting", "Creative Design", "Conversion Tracking"],
        why: "Organic reach is dead. Paid ads ensure your best cars are seen by the most motivated buyers.",
      }
    ],
    sections: {
      details: { title: "Dealership Details", desc: "Basic contact information helps us verify your project and set up your portal access correctly." },
      inventory: { title: "Inventory Size", desc: "Pricing tiers are based on active vehicle count. This determines the processing power and sync frequency required." },
      commitment: { title: "Commitment Term", desc: "Longer partnerships allow us to invest more into your account setup and offer significant discounts." },
      photography: { title: "Photography", desc: "Visual quality is the primary driver of digital conversion. Select a bundle that fits your monthly churn." },
      advertising: { title: "Paid Advertising", desc: "Drive immediate traffic to your best inventory through managed Google and Meta campaigns." }
    },
    howTogetherTitle: "How These Services Work Together",
    howTogetherContent: "This creates a complete digital sales engine: The platform organizes your business, photography improves listing quality, distribution maximizes your reach, and advertising accelerates demand.",
    simpleSummaryTitle: "Simple Summary",
    simpleSummary: "Mandatory central platform + Optional photography + Included multi-platform distribution + Optional paid ads. You choose, prices are instant, no hidden costs.",
    reference: "Pricing Table Reference",
    whyUs: {
      tag: "Efficiency Comparison",
      title: "Better Than Hiring An",
      titleAccent: "Internal Team",
      desc: "Why hire an employee when you can hire a dedicated system? Prajjwol Bhattarai delivers superior performance at 40% of the cost of a full-time marketing manager.",
      badgeReduction: "Cost Reduction",
      badgeVs: "Vs Traditional Hiring",
      badgeEfficiency: "Efficiency",
      badgeVelocity: "High Velocity",
      items: [
        { title: 'Predictable Costs', desc: 'No social contributions, holidays, or sick pay. Just one flat monthly fee.' },
        { title: 'Elite Expertise', desc: 'Managed by specialists who handle millions in inventory and ad spend.' },
        { title: 'Lightning Fast', desc: 'Launch your entire digital sales presence in under a week.' },
        { title: 'Zero Training', desc: 'We integrate with your existing flow. No need to train staff on new tools.' },
        { title: 'Scalable Growth', desc: 'Upgrade or downgrade your tiers instantly as your inventory fluctuates.' }
      ]
    },
    faq: {
      title: "Common Questions",
      items: [
        { q: 'Can I change my package later?', a: 'Absolutely. Our system is designed for flexibility. If your inventory grows or shrinks significantly, we will update your tier for the next billing cycle automatically or upon request.' },
        { q: 'Do you lock me into a long contract?', a: 'No. You decide the commitment model during signup. We offer flexible month-to-month options for those who want freedom, or discounted 6–12 month agreements for established partners.' },
        { q: 'What is specifically included in Ads Management?', a: 'We handle the complete setup of Google Search campaigns for high-intent keywords (e.g., specific car brands), Meta (FB/IG) retargeting to bring past visitors back, creative asset production (banners/copy), and conversion tracking to ensure every euro spent leads to an inquiry.' },
        { q: 'Who pays for the advertising budget?', a: 'Your ad spend (for Google or Meta) is paid directly to the platforms using your payment method. Our fee covers the professional setup, creative assets, and 24/7 campaign optimization.' },
        { q: 'Is everything available in German?', a: 'Yes, our entire platform, support team, and localized dashboards are provided in German to serve our local dealership partners effectively.' },
        { q: 'How long does onboarding take?', a: 'Once your onboarding details are submitted, we typically have your central portal and multi-platform distribution live within 3–5 business days.' }
      ]
    },
    form: {
      dealershipName: "Dealership Name",
      contactPerson: "Contact Person",
      phone: "Phone / WhatsApp",
      email: "Email Address",
      placeholder: "Type here...",
      whyMatters: "Show Why This Matters",
      closeInfo: "Close Info",
      recommended: "Recommended",
      adjustmentStandard: "+20% Standard",
      adjustmentHighVolume: "-10% High Volume",
      visualsTag: "Professional Visuals",
      planTag: "Plan",
      agreeContact: "I agree to be contacted via Phone/WhatsApp or Email for onboarding and package verification.",
      agreePricing: "I understand pricing is based on current inventory and selected commitment.",
      validationError: "Complete dealership details & agree to terms to proceed",
      customInventoryLabel: "Enter number of vehicles"
    },
    summaryLabels: {
      summary: "Live Pricing Summary",
      instantUpdate: "Instant Update",
      setup: "Setup (One-time)",
      basePlatform: "Base Platform",
      photoBundle: "Photography Bundle",
      adsManagement: "Ads Management",
      adjustment: "Adjustment",
      monthlyTotal: "Monthly Total",
      subjectToReview: "Pricing subject to review",
      onboarding: "Start Onboarding"
    },
    footer: "© 2025 Prajjwol Bhattarai — Built for the Future of Car Sales",
    pricingTables: {
      platform: "Core Platform",
      setup: "Setup Fees",
      photo: "Photography",
      ads: "Ads Management",
      unitMo: "/ mo",
      unitOneTime: "one-time"
    },
    po: {
      title: "Purchase Order",
      download: "Download PDF",
      back: "Back to Edit",
      dealershipInfo: "Dealership Information",
      serviceProvider: "Service Provider",
      description: "Description",
      configuration: "Configuration",
      feeType: "Fee Type",
      amount: "Amount",
      oneTime: "One-Time",
      monthly: "Monthly",
      setupNet: "Total Setup (Net)",
      monthlyNet: "Total Monthly (Net)",
      recurring: "Recurring",
      excludingVat: "* All prices excluding applicable VAT",
      placeDate: "Place, Date",
      sigProvider: "Signature Service Provider",
      sigDealership: "Signature Authorized Representative",
      legal: "This document constitutes a formal purchase order for digital services provided by Prajjwol Bhattarai. By signing this document, the dealership agrees to the standard terms and conditions. The service will commence within 3-5 business days upon receipt of the signed order.",
      terms: "Minimum contract term as per selected configuration. Termination must be submitted in writing as per the agreed notice periods.",
      confidential: "Prajjwol Bhattarai — Confidential Document",
      deliverablesTitle: "Scope of Deliverables & Responsibilities",
      providerRole: "Deliverables (Prajjwol Bhattarai)",
      clientRole: "Responsibilities (Dealership)",
      platformTasks: [
        "Software setup and multi-platform sync (mobile.de, AS24, etc.)",
        "CRM data migration and inventory structure setup",
        "Ongoing technical maintenance and sync monitoring"
      ],
      clientPlatformTasks: [
        "Provide API access/credentials for external portals",
        "Ensure accurate data entry for new vehicle stock",
        "Point of contact for inventory status changes"
      ],
      photoTasks: [
        "Coordination of professional photography shoots",
        "HDR editing, retouching, and background optimization",
        "Automated upload to central management system"
      ],
      clientPhotoTasks: [
        "Ensure vehicles are cleaned and ready for shoot",
        "Provide safe on-site access for photography staff",
        "Notify of vehicle turnover for shoot scheduling"
      ],
      adsTasks: [
        "Keyword research & high-intent Google Search campaign setup",
        "Meta (Facebook/Instagram) retargeting pixel implementation",
        "Ad creative production (custom banners and copy)",
        "Daily budget optimization and weekly performance testing",
        "Monthly deep-dive analytics report and strategy call"
      ],
      clientAdsTasks: [
        "Direct payment to Google/Meta for ad spend",
        "Link payment method to advertising accounts",
        "Approval of monthly ad creatives and key promotions",
        "Define 'priority' vehicles for targeted promotion"
      ]
    }
  },
  de: {
    nav: {
      services: "Leistungen",
      pricing: "Preise",
      faq: "FAQ"
    },
    hero: {
      tag: "Neu: Händler-Pakete 2025",
      title: "Mehr Autos",
      titleAccent: "Online Verkaufen",
      desc: "Ein komplettes digitales Bestands- und Marketingsystem für Gebrauchtwagenhändler. Auf Geschwindigkeit ausgelegt. Transparente Preise.",
      primaryBtn: "Sofort-Preis & Paket Erstellen",
      secondaryBtn: "Mehr Erfahren",
      stats: {
        sales: "Ø Umsatzsteigerung",
        onboarding: "Onboarding-Zeit",
        onboardingVal: "3-5 Tage"
      }
    },
    calculator: "Sofort-Preisrechner",
    services: "Alles, was Sie zum Wachsen brauchen",
    servicesSub: "Ein komplettes digitales Verkaufssystem, keine isolierten Dienste. Wählen Sie Ihr Setup.",
    serviceList: [
      {
        tag: "OBLIGATORISCH",
        title: "Basis-Plattform",
        subtitle: "Der Digitale Hub",
        desc: "Zentrales Bestandsmanagementsystem, das Ihren Bestand automatisch auf allen wichtigen Plattformen synchronisiert.",
        includedTitle: "Was ist enthalten",
        features: ["Bestands-Sync", "CRM Lite", "Lead-Management", "Performance-Dashboard"],
        why: "Manuelle Inserate sind langsam. Ein zentraler Hub spart über 15 Stunden pro Woche pro Händler.",
      },
      {
        tag: "INKLUSIVE",
        title: "Multi-Vertrieb",
        subtitle: "Maximale Reichweite",
        desc: "Automatisierter Vertrieb an mobile.de, AutoScout24 und Kleinanzeigen. Ein klick, überall präsent.",
        includedTitle: "Inklusive Kanäle",
        features: ["mobile.de", "AutoScout24", "Kleinanzeigen", "Social Export"],
        why: "Käufer sind verstreut. Überall präsent zu sein, erhöht das Lead-Volumen um bis zu 300%.",
      },
      {
        tag: "OPTIONAL",
        title: "Pro Fotografie",
        subtitle: "Conversion-Booster",
        desc: "Professionelle Fahrzeugfotografie, die Ihren Bestand von der Konkurrenz abhebt.",
        includedTitle: "Paket-Details",
        features: ["HDR-Bilder", "Standardisierte Winkel", "Retusche", "Schnelle Lieferung"],
        why: "Hochwertige Bilder sind der Faktor #1 für die Klickentscheidung eines Kunden.",
      },
      {
        tag: "OPTIONAL",
        title: "Performance-Ads",
        subtitle: "Wachstumsbeschleuniger",
        desc: "Gezielte Google- und Meta-Kampagnen, um Standuhren zu bewegen und lokale Käufer zu gewinnen.",
        includedTitle: "Werbe-Leistungen",
        features: ["Google Suche", "FB/IG Retargeting", "Creative Design", "Conversion-Tracking"],
        why: "Organische Reichweite sinkt. Bezahlte Anzeigen garantieren Sichtbarkeit bei motivierten Käufern.",
      }
    ],
    sections: {
      details: { title: "Händler-Details", desc: "Basis-Kontaktinformationen helfen uns, Ihr Projekt zu verifizieren und den Portalzugang korrekt einzurichten." },
      inventory: { title: "Bestandsgröße", desc: "Die Preisstufen basieren auf der Anzahl der aktiven Fahrzeuge. Dies bestimmt die benötigte Rechenleistung." },
      commitment: { title: "Laufzeit", desc: "Längere Partnerschaften ermöglichen es uns, mehr in Ihr Setup zu investieren und Rabatte anzubieten." },
      photography: { title: "Fotografie", desc: "Visuelle Qualität treibt die digitale Conversion. Wählen Sie ein Paket passend zu Ihrem monatlichen Durchlauf." },
      advertising: { title: "Bezahlte Werbung", desc: "Leiten Sie sofortigen Traffic auf Ihre besten Fahrzeuge durch geführte Kampagnen." }
    },
    howTogetherTitle: "Wie diese Dienste zusammenarbeiten",
    howTogetherContent: "Dies schafft einen kompletten digitalen Verkaufsmotor: Die Plattform organisiert Ihr Geschäft, die Fotografie verbessert die Qualität, der Vertrieb maximiert die Reichweite und die Werbung beschleunigt die Nachfrage.",
    simpleSummaryTitle: "Kurze Zusammenfassung",
    simpleSummary: "Obligatorische Plattform + Optionale Fotografie + Inklusive Vertrieb + Optionale Anzeigen. Sie wählen, Preise sind sofort da, keine versteckten Kosten.",
    reference: "Preisübersicht Referenz",
    whyUs: {
      tag: "Effizienz-Vergleich",
      title: "Besser als ein",
      titleAccent: "Internes Team",
      desc: "Warum einen Mitarbeiter einstellen, wenn Sie ein dediziertes System mieten können? Prajjwol Bhattarai liefert überlegene Leistung zu 40% der Kosten eines Vollzeit-Marketing-Managers.",
      badgeReduction: "Kostensenkung",
      badgeVs: "Vs. Klassische Einstellung",
      badgeEfficiency: "Effizienz",
      badgeVelocity: "Hohe Geschwindigkeit",
      items: [
        { title: 'Planbare Kosten', desc: 'Keine Sozialabgaben, Urlaub oder Lohnfortzahlung. Nur eine feste monatliche Gebühr.' },
        { title: 'Elite-Expertise', desc: 'Geführt von Spezialisten, die Millionen an Beständen und Werbeausgaben verwalten.' },
        { title: 'Blitzschnell', desc: 'Starten Sie Ihre gesamte digitale Vertriebspräsenz in weniger als einer Woche.' },
        { title: 'Kein Training', desc: 'Wir integrieren uns in Ihren Ablauf. Keine Schulungen für Personal nötig.' },
        { title: 'Skalierbar', desc: 'Passen Sie Ihre Tiers sofort an, wenn Ihr Bestand schwankt.' }
      ]
    },
    faq: {
      title: "Häufige Fragen",
      items: [
        { q: 'Kann ich mein Paket später ändern?', a: 'Absolut. Unser System ist auf Flexibilität ausgelegt. Wenn Ihr Bestand wächst oder sinkt, passen wir Ihr Tier automatisch an.' },
        { q: 'Gibt es lange Vertragslaufzeiten?', a: 'Nein. Sie entscheiden das Modell. Wir bieten monatliche Optionen oder rabattierte 6–12 Monats-Verträge an.' },
        { q: 'Was beinhaltet das Anzeigen-Management konkret?', a: 'Wir übernehmen das komplette Setup von Google Search-Kampagnen für kaufrelevante Keywords, Meta (FB/IG) Retargeting zur Wiedergewinnung von Besuchern, Erstellung der Werbemittel (Banner/Texte) und Conversion-Tracking zur Messung der Anfragen.' },
        { q: 'Wer zahlt das Werbebudget?', a: 'Ihr Budget (für Google/Meta) wird direkt an die Plattformen gezahlt. Unsere Gebühr deckt Setup, Creatives und Optimierung ab.' },
        { q: 'Ist alles auf Deutsch verfügbar?', a: 'Ja, unser gesamtes System, der Support und die Dashboards sind vollständig auf Deutsch verfügbar.' },
        { q: 'Wie lange dauert das Onboarding?', a: 'Nach Übermittlung der Daten sind Ihr Portal und der Multi-Vertrieb meist innerhalb von 3–5 Werktagen live.' }
      ]
    },
    form: {
      dealershipName: "Name des Autohauses",
      contactPerson: "Ansprechpartner",
      phone: "Telefon / WhatsApp",
      email: "E-Mail Adresse",
      placeholder: "Hier tippen...",
      whyMatters: "Warum das wichtig ist",
      closeInfo: "Info schließen",
      recommended: "Empfohlen",
      adjustmentStandard: "+20% Standard",
      adjustmentHighVolume: "-10% Volumen-Rabatt",
      visualsTag: "Professionelle Optik",
      planTag: "Tarif",
      agreeContact: "Ich stimme zu, per Telefon/WhatsApp oder E-Mail für das Onboarding kontaktiert zu werden.",
      agreePricing: "Ich verstehe, dass die Preise auf dem aktuellen Bestand und der gewählten Laufzeit basieren.",
      validationError: "Bitte alle Daten ausfüllen & Bedingungen akzeptieren",
      customInventoryLabel: "Anzahl der Fahrzeuge eingeben"
    },
    summaryLabels: {
      summary: "Live-Preiszusammenfassung",
      instantUpdate: "Sofort-Update",
      setup: "Setup (einmalig)",
      basePlatform: "Basis-Plattform",
      photoBundle: "Fotografie-Paket",
      adsManagement: "Anzeigen-Management",
      adjustment: "Anpassung",
      monthlyTotal: "Monatliche Summe",
      subjectToReview: "Preise vorbehaltlich Prüfung",
      onboarding: "Onboarding starten"
    },
    footer: "© 2025 Prajjwol Bhattarai — Gebaut für die Zukunft des Autohandels",
    pricingTables: {
      platform: "Basis-Plattform",
      setup: "Einrichtungsgebühren",
      photo: "Fotografie",
      ads: "Anzeigen-Management",
      unitMo: "/ mtl.",
      unitOneTime: "einmalig"
    },
    po: {
      title: "Bestellung",
      download: "PDF Herunterladen",
      back: "Zurück zum Bearbeiten",
      dealershipInfo: "Händler-Informationen",
      serviceProvider: "Dienstleister",
      description: "Beschreibung",
      configuration: "Konfiguration",
      feeType: "Gebührenart",
      amount: "Betrag",
      oneTime: "Einmalig",
      monthly: "Monatlich",
      setupNet: "Gesamt-Setup (Netto)",
      monthlyNet: "Gesamt Monatlich (Netto)",
      recurring: "Wiederkehrend",
      excludingVat: "* Alle Preise zzgl. gesetzlicher MwSt.",
      placeDate: "Ort, Datum",
      sigProvider: "Unterschrift Dienstleister",
      sigDealership: "Unterschrift Bevollmächtigter Händler",
      legal: "Dieses Dokument stellt eine verbindliche Bestellung für digitale Dienstleistungen von Prajjwol Bhattarai dar. Mit der Unterzeichnung stimmt der Händler den AGB zu. Der Service beginnt innerhalb von 3-5 Werktagen nach Erhalt.",
      terms: "Mindestvertragslaufzeit gemäß gewählter Konfiguration. Kündigungen müssen schriftlich gemäß den vereinbarten Fristen erfolgen.",
      confidential: "Prajjwol Bhattarai — Vertrauliches Dokument",
      deliverablesTitle: "Leistungsumfang & Verantwortlichkeiten",
      providerRole: "Leistungen (Prajjwol Bhattarai)",
      clientRole: "Pflichten (Autohaus)",
      platformTasks: [
        "Software-Setup und Multi-Plattform-Sync (mobile.de, AS24, etc.)",
        "CRM-Datenmigration und Bestandsstruktur-Setup",
        "Laufende technische Wartung und Sync-Überwachung"
      ],
      clientPlatformTasks: [
        "Bereitstellung von API-Zugängen/Zugangsdaten für Portale",
        "Sicherstellung korrekter Dateneingabe bei Neuzugängen",
        "Ansprechpartner für Bestandsänderungen"
      ],
      photoTasks: [
        "Koordination professioneller Fotoshootings",
        "HDR-Bearbeitung, Retusche und Hintergrundoptimierung",
        "Automatisierter Upload in das Zentralsystem"
      ],
      clientPhotoTasks: [
        "Fahrzeuge sauber und aufnahmebereit bereitstellen",
        "Sicherer Zugang zum Gelände für Fotografen",
        "Benachrichtigung über Bestandswechsel zur Planung"
      ],
      adsTasks: [
        "Keyword-Recherche & Setup von Google Search Kampagnen",
        "Implementierung von Meta (FB/IG) Retargeting Pixeln",
        "Erstellung von Werbemitteln (Grafiken und Anzeigentexte)",
        "Tägliche Budgetoptimierung und wöchentliches Testing",
        "Monatlicher Deep-Dive Performance-Report & Strategiegespräch"
      ],
      clientAdsTasks: [
        "Direkte Zahlung der Werbebudgets an Google/Meta",
        "Hinterlegung der Zahlungsmittel in den Werbeaccounts",
        "Freigabe monatlicher Werbemittel und Aktionen",
        "Festlegung von 'Fokus'-Fahrzeugen für Werbeaktionen"
      ]
    }
  },
  tr: {
    nav: {
      services: "Hizmetler",
      pricing: "Fiyatlandırma",
      faq: "SSS"
    },
    hero: {
      tag: "Yeni: 2025 Bayi Paketleri",
      title: "Online Daha Fazla",
      titleAccent: "Araç Satın",
      desc: "İkinci el araç bayileri için eksiksiz bir dijital envanter ve pazarlama sistemi. Hız için tasarlandı. Şeffaf fiyatlandırma.",
      primaryBtn: "Anında Fiyat & Paket Oluştur",
      secondaryBtn: "Daha Fazla Bilgi",
      stats: {
        sales: "Ort. Satış Artışı",
        onboarding: "Kurulum Süresi",
        onboardingVal: "3-5 Gün"
      }
    },
    calculator: "Anında Fiyat Hesaplayıcı",
    services: "Büyümek İçin İhtiyacınız Olan Her Şey",
    servicesSub: "İzole hizmetler değil, eksiksiz bir dijital satış motoru. Kendi paketinizi kurun.",
    serviceList: [
      {
        tag: "ZORUNLU",
        title: "Ana Platform",
        subtitle: "Dijital Merkez",
        desc: "Stoklarınızı tüm ana platformlarda otomatik olarak senkronize eden merkezi envanter yönetim sistemi.",
        includedTitle: "Neler Dahil",
        features: ["Envanter Senkronizasyonu", "CRM Lite", "Müşteri Yönetimi", "Performans Paneli"],
        why: "Manuel ilan girişi yavaştır. Tek bir merkez bayi başına haftalık 15+ saat tasarruf sağlar.",
      },
      {
        tag: "INKLUSIVE",
        title: "Çoklu Platform Dağıtımı",
        subtitle: "Maksimum Erişim",
        desc: "mobile.de, AutoScout24 ve Kleinanzeigen platformlarına otomatik dağıtım. Tek tıkla her yerde.",
        includedTitle: "Dahil Kanallar",
        features: ["mobile.de", "AutoScout24", "Kleinanzeigen", "Sosyal Medya Dışa Aktarımı"],
        why: "Alıcılar farklı kanallardadır. Her yerde olmak müşteri trafiğinizi %300'e kadar artırır.",
      },
      {
        tag: "OPSİYONEL",
        title: "Profesyonel Fotoğrafçılık",
        subtitle: "Dönüşüm Artırıcı",
        desc: "Envanterinizi rakiplerinizden ayıran profesyonel araç fotoğrafçılığı hizmetleri.",
        includedTitle: "Paket Detayları",
        features: ["HDR Görüntüler", "Standart Açılar", "Rötuş", "Hızlı Teslimat"],
        why: "Yüksek kaliteli görseller, bir müşterinin ilanınıza tıklama kararındaki 1 numaralı faktördür.",
      },
      {
        tag: "OPSİYONEL",
        title: "Performans Reklamları",
        subtitle: "Büyüme Hızlandırıcı",
        desc: "Yavaş satılan stokları eritmek ve yerel alıcıları çekmek için tasarlanmış Google ve Meta kampanyaları.",
        includedTitle: "Reklam Hizmetleri",
        features: ["Google Arama", "FB/IG Yeniden Pazarlama", "Kreatif Tasarım", "Dönüşüm İzleme"],
        why: "Organik erişim yetersizdir. Ücretli reklamlar, en iyi araçlarınızın en istekli alıcılarca görülmesini sağlar.",
      }
    ],
    sections: {
      details: { title: "Bayi Detayları", desc: "Temel iletişim bilgileri, projenizi doğrulamamıza ve portal erişiminizi doğru şekilde kurmamıza yardımcı olur." },
      inventory: { title: "Envanter Boyutu", desc: "Fiyatlandırma kademeleri aktif araç sayısına bağlıdır. Bu, gereken işlem gücünü belirler." },
      commitment: { title: "Taahhüt Süresi", desc: "Daha uzun ortaklıklar, kurulumunuza daha fazla yatırım yapmamızı ve indirim sunmamızı sağlar." },
      photography: { title: "Fotoğrafçılık", desc: "Görsel kalite dijital dönüşümün ana faktörüdür. Aylık araç devir hızınıza uygun bir paket seçin." },
      advertising: { title: "Ücretli Reklam", desc: "Yönetilen Google ve Meta kampanyaları aracılığıyla en iyi stoklarınıza anında trafik çekin." }
    },
    howTogetherTitle: "Bu Hizmetler Birlikte Nasıl Çalışır?",
    howTogetherContent: "Bu, eksiksiz bir dijital satış motoru oluşturur: Platform işinizi organize eder, fotoğrafçılık ilan kalitesini artırır, dağıtım erişiminizi maksimize eder ve reklamcılık talebi hızlandırır.",
    simpleSummaryTitle: "Kısa Özet",
    simpleSummary: "Zorunlu platform + Opsiyonel fotoğrafçılık + Dahil dağıtım + Opsiyonel reklamlar. Siz seçin, fiyatlar anında, gizli maliyet yok.",
    reference: "Fiyat Tablosu Referansı",
    whyUs: {
      tag: "Verimlilik Karşılaştırması",
      title: "Dahili Ekipten",
      titleAccent: "Daha İyi",
      desc: "Neden bir çalışan işe alasınız ki? Prajjwol Bhattarai, tam zamanlı bir pazarlama müdürü maliyetinin %40'ına üstün performans sunar.",
      badgeReduction: "Maliyet Tasarrufu",
      badgeVs: "İşe Alıma Göre",
      badgeEfficiency: "Verimlilik",
      badgeVelocity: "Yüksek Hız",
      items: [
        { title: 'Öngörülebilir Maliyetler', desc: 'Sosyal güvenlik primleri, tatil veya hastalık izni yok. Sadece sabit aylık ücret.' },
        { title: 'Elit Uzmanlık', desc: 'Milyonlarca envanter ve reklam bütçesini yöneten uzmanlar tarafından idare edilir.' },
        { title: 'Yıldırım Hızında', desc: 'Tüm dijital satış varlığınızı bir haftadan kısa sürede yayına girer.' },
        { title: 'Sıfır Eğitim', desc: 'Mevcut akışınıza entegre oluyoruz. Personelinize yeni araçlar öğretmenize gerek yok.' },
        { title: 'Ölçeklenebilir Büyüme', desc: 'Envanteriniz dalgalandıkça paketlerinizi anında yükseltin veya düşürün.' }
      ]
    },
    faq: {
      title: "Sıkça Sorulan Sorular",
      items: [
        { q: 'Paketimi daha sonra değiştirebilir miyim?', a: 'Kesinlikle. Sistemimiz esneklik üzerine kuruludur. Envanteriniz değişirse paketinizi anında güncelliyoruz.' },
        { q: 'Uzun süreli sözleşme zorunlu mu?', a: 'Hayır. Modeli siz seçersiniz. Aylık seçenekler veya indirimli 6–12 aylık taahhütler sunuyoruz.' },
        { q: 'Reklam Yönetimi tam olarak neleri kapsıyor?', a: 'Yüksek niyetli anahtar kelimeler için Google Arama kampanyaları kurulumu, ziyaretçileri geri getirmek için Meta (FB/IG) yeniden pazarlama, kreatif varlık üretimi (banner/metin) ve dönüşüm takibi gibi tüm süreçleri profesyonelce yönetiyoruz.' },
        { q: 'Reklam bütçesini kim ödüyor?', a: 'Reklam bütçeniz doğrudan Google/Meta\'ya ödenir. Ücretimiz kurulum, kreatif ve optimizasyonu kapsar.' },
        { q: 'Her şey Türkçe mi?', a: 'Evet, tüm platformumuz, destek ekibimiz ve panellerimiz Türkçe olarak hizmet vermektedir.' },
        { q: 'Kurulum ne kadar sürer?', a: 'Bilgiler iletildikten sonra portalınız ve dağıtımınız genellikle 3–5 iş günü içinde yayına girer.' }
      ]
    },
    form: {
      dealershipName: "Bayi Adı",
      contactPerson: "Yetkili Kişi",
      phone: "Telefon / WhatsApp",
      email: "E-posta Adresi",
      placeholder: "Buraya yazın...",
      whyMatters: "Bu Neden Önemli?",
      closeInfo: "Bilgiyi Kapat",
      recommended: "Önerilen",
      adjustmentStandard: "+20% Standart",
      adjustmentHighVolume: "-10% Yüksek Hacim",
      visualsTag: "Profesyonel Görseller",
      planTag: "Plan",
      agreeContact: "Kurulum süreci için Telefon/WhatsApp veya E-posta yoluyla iletişime geçilmesini onaylıyorum.",
      agreePricing: "Fiyatlandırmanın envanter ve taahhüt süresine bağlı olduğunu anlıyorum.",
      validationError: "Lütfen tüm bilgileri doldurun ve şartları kabul edin",
      customInventoryLabel: "Araç sayısını girin"
    },
    summaryLabels: {
      summary: "Canlı Fiyat Özeti",
      instantUpdate: "Anında Güncelleme",
      setup: "Kurulum (Tek Seferlik)",
      basePlatform: "Ana Platform",
      photoBundle: "Fotoğraf Paketi",
      adsManagement: "Reklam Yönetimi",
      adjustment: "Düzenleme",
      monthlyTotal: "Aylık Toplam",
      subjectToReview: "Fiyatlar incelemeye tabidir",
      onboarding: "Süreci Başlat"
    },
    footer: "© 2025 Prajjwol Bhattarai — Otomobil Satışının Geleceği İçin İnşa Edildi",
    pricingTables: {
      platform: "Ana Platform",
      setup: "Kurulum Ücretleri",
      photo: "Fotoğrafçılık",
      ads: "Reklam Yönetimi",
      unitMo: "/ aylık",
      unitOneTime: "tek seferlik"
    },
    po: {
      title: "Satın Alma Formu",
      download: "PDF İndir",
      back: "Düzenlemeye Dön",
      dealershipInfo: "Bayi Bilgileri",
      serviceProvider: "Hizmet Sağlayıcı",
      description: "Açıklama",
      configuration: "Konfigürasyon",
      feeType: "Ücret Tipi",
      amount: "Tutar",
      oneTime: "Tek Seferlik",
      monthly: "Aylık",
      setupNet: "Toplam Kurulum (Net)",
      monthlyNet: "Toplam Aylık (Net)",
      recurring: "Tekrarlanan",
      excludingVat: "* Tüm fiyatlara KDV dahil değildir",
      placeDate: "Yer, Tarih",
      sigProvider: "Hizmet Sağlayıcı İmzası",
      sigDealership: "Bayi Yetkili İmzası",
      legal: "Bu belge Prajjwol Bhattarai tarafından sağlanan dijital hizmetler için resmi bir satın alma emridir. Bu belgeyi imzalayarak bayi standart şart ve koşulları kabul etmiş sayılır. Hizmet, formun alınmasını takiben 3-5 iş günü içinde başlar.",
      terms: "Seçilen konfigürasyona göre minimum sözleşme süresi geçerlidir. Fesih işlemleri yazılı olarak yapılmalıdır.",
      confidential: "Prajjwol Bhattarai — Gizli Belge",
      deliverablesTitle: "Hizmet Kapsamı ve Sorumluluklar",
      providerRole: "Hizmetler (Prajjwol Bhattarai)",
      clientRole: "Sorumluluklar (Bayi)",
      platformTasks: [
        "Yazılım kurulumu ve çoklu platform senkronizasyonu (mobile.de, AS24 vb.)",
        "CRM veri taşıma ve envanter yapısı kurulumu",
        "Sürekli teknik bakım ve senkronizasyon takibi"
      ],
      clientPlatformTasks: [
        "Portallar için API erişimi/kimlik bilgilerini sağlama",
        "Yeni araç stokları için doğru veri girişi sağlama",
        "Envanter durumu değişiklikleri için irtibat kişisi olma"
      ],
      photoTasks: [
        "Profesyonel fotoğraf çekimlerinin koordinasyonu",
        "HDR düzenleme, rötuş ve arka plan optimizasyonu",
        "Merkezi sisteme otomatik yükleme"
      ],
      clientPhotoTasks: [
        "Araçların temiz ve çekime hazır olmasını sağlama",
        "Fotoğrafçılar için güvenli saha erişimi sağlama",
        "Çekim planlaması için araç devirlerini bildirme"
      ],
      adsTasks: [
        "Anahtar kelime araştırması ve yüksek niyetli Google Arama kurulumu",
        "Meta (Facebook/Instagram) yeniden pazarlama piksel kurulumu",
        "Reklam kreatif üretimi (özel banner ve metinler)",
        "Günlük bütçe optimizasyonu ve haftalık performans testleri",
        "Aylık derinlemesine performans raporu ve strateji toplantısı"
      ],
      clientAdsTasks: [
        "Google/Meta reklam harcamalarının doğrudan ödenmesi",
        "Ödeme yönteminin reklam hesaplarına bağlanması",
        "Aylık reklam görsellerinin ve kampanyaların onayı",
        "Özel tanıtım yapılacak 'öncelikli' araçların belirlenmesi"
      ]
    }
  }
};
