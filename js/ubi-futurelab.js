jQuery(document).ready(function() {
  var update_texts = function() {
    $('body').i18n();
  };

  $('.lang-switch').click(function(e) {
    e.preventDefault();
    $.i18n().locale = $(this).data('locale');
    update_texts();
  });

  $.i18n().load({
    'en': {
      'lang-select': 'Language',
      'nav-idea': 'Idea',
      'nav-project': 'Project',
      'nav-supporters': 'Supporters',
      'nav-fundraising': 'Fundraising',
      'nav-history': 'History',
      'nav-team': 'Team',
      'nav-contact': 'Contact',
      'intro-heading': 'UBI-FutureLab',
      'intro-subheading': 'Basic income on the way in Europe',
      'action-link': 'Find out more',
      'idea-heading': 'Idea',
      'idea-subheading': 'Unconditional Basic Income (UBI) is a personal and democratic challenge, not a land of milk and honey',
      'challenge-heading': 'Challenge UBI',
      'challenge-subheading': 'How does it feel to live in a society with a basic income? How would basic income affect my personal way of life? How would basic income become reality?',
      'futurelab-heading': 'The FutureLab',
      'futurelab-subheading': 'will be designed as a mobile world of experience to be presented in public places, indoor and outdoor, like squares, parks, city halls, universities, libraries, museums.',
      'interactive-heading': 'interactive and participative',
      'interactive-subheading': 'with a diversity of designed spaces, playful tasks, inspiring installations and role play we want to engage with everyday issues on the level of personal experience.',
      'offers-heading': 'offers all people',
      'offers-subheading': 'be they among the youth, the elderly, in jobs, self-employed, entrepreneurs or unemployed, in school, training or university, parents, married or single, citizens or migrants, volunteers or retired',
      'across-heading': 'across Europe',
      'across-subheading': 'in all regions of Europe, in EU- and non-EU states, the FutureLab addresses the European dimension of UBI by considering how, in and of itself, it constitutes a significant contribution to a more sustainable and more democratic Europe.',
      'personal-heading': 'a personal experience',
      'personal-subheading': 'to immerse in the idea of basic income, allowing not only a deeper reflection, but also an emotional confrontation with the roots and implications of an unconditional basic income.',
      'portfolio-heading': 'Project',
      'portfolio-subheading': 'Since 2016 we prepare this project. Learn more about our ideas and steps.',
      'portfolio-1': 'Idea sketch',
      'portfolio-2': 'Realisation',
      'portfolio-3': 'Financing',
      'fundraising-heading': 'Fundraising',
      'fundraising-subheading': 'The first big step needs 24.000 EUR. Help us in reaching this sum, donate here.',
      'participate-heading': 'How can I participate?',
      'chat-heading': 'Chat with Us',
      'chat-subheading': 'Circles is an open source community, and we are always looking for passionate contributors. If you are interested in participating or want to follow our progress, please join our chat room.',
      'chat-link': 'Join our Chat',
      'support-heading': 'Support',
      'support-subheading': 'We are always seeking sponsors to offer a city, space, or resources for testing an implmentation of our basic income prototype. Interested in supporting the project?',
      'support-link': 'Contact Us',
      'partner-heading': 'Supporters',
      'partner-subheading': 'These people and organizations give their ideal or financial support to the UBI Future Lab.',
      'partner-participate': 'Want to participate?',
      'team-heading': 'Team',
      'team-subheading': 'We are organized in the Basic Income Network Hamburg.',
      'team-link': 'Basic Income Network Hamburg',
      'contact': 'Contact us.',
      'contact-text': 'For any inquiries, e-mail',
      'contact-chat': 'or come join our',      
      'modal-1-title': 'New Title',
      'modal-1-subheading': 'New Subheading',
      'modal-2-title': 'New Title',
      'modal-2-subheading': 'New Subheading',
      'modal-3-title': 'New Title',
      'modal-3-subheading': 'New Subheading'

    },
    'de': {
      'lang-select': 'Sprache',
      'nav-idea': 'Idee',
      'nav-project': 'Projekt',
      'nav-supporters': 'Unterstützer*',
      'nav-fundraising': 'Ermöglichen',
      'nav-history': 'Rückblick',
      'nav-team': 'Team',
      'nav-contact': 'Kontakt',
      'intro-heading': 'UBI FutureLab',
      'intro-subheading': ' ',
      'action-link': 'UBI = Unconditional Basic Income',
      'idea-heading': 'Die Erlebnisausstellung zum Bedingungslosen Grundeinkommen',
      'idea-subheading': 'Wir haben Großes vor. Als Initiative des Hamburger Netzwerkes Grundeinkommen entwickeln wir in Zusammenarbeit mit der Ausstellungsagentur facts & fiction aus Köln eine interaktive Erlebnisausstellung zum Bedingungslosen Grundeinkommen. Wir wollen öffentliche Orte schaffen an denen Menschen berührt, inspiriert und zu einer aktiven Auseinandersetzung angeregt werden, um über sich, das Leben, ihre Arbeit oder Nicht-Arbeit und über die Schaffung eines Bedingungslosen Grundeinkommens nachzudenken.',
      'challenge-heading': 'mit der Herausforderung des Grundeinkommens',
      'challenge-subheading': 'Das Bedingungslose Grundeinkommen (BGE) ist eine persönliche und demokratische Herausforderung, kein Schlaraffenland. Wie fühlt es sich an, in einer Gesellschaft mit Grundeinkommen zu leben? Wie würde ein Grundeinkommen mein persönliches Leben ändern? Wie könnte ein Grundeinkommen Realität werden?',
      'futurelab-heading': 'Das UBI FutureLab',
      'futurelab-subheading': 'ist eine mobile Erlebniswelt, die an öffentlichen Orten, drinnen und draußen, auf Plätzen, in Rathäusern, Universitäten, Bibliotheken, Museen etc. zur Auseinandersetzung einlädt.',
      'interactive-heading': ' -interaktiv und partizipativ-',
      'interactive-subheading': 'mit einer Vielfalt gestalteter Räume, spielerischen Aufgaben, inspirierenden Installationen und Rollenspielen möchten wir wiederkehrende Fragen zum BGE auf der persönlichen Ebene ansprechen',
      'offers-heading': 'bietet allen Menschen',
      'offers-subheading': 'seien sie jung oder alt, mit oder ohne Job, selbständig erwerbstätig, in der Schule, Ausbildung oder Hochschule, Eltern, verheiratet, Single, Bürger*in oder Migrant*in, freiwillig engagiert oder im Ruhestand.',
      'across-heading': 'in ganz Europa',
      'across-subheading': 'In allen Regionen Europas, in EU- wie Nicht-EU-Staaten, beleuchtet das UBI FutureLab die Potenziale eines BGE für ein nachhaltigeres und demokratischeres Europa.',
      'personal-heading': 'ein persönliches Erlebnis',
      'personal-subheading': 'Das UBI FutureLab lässt in die Idee des Grundeinkommens eintauchen, nicht nur zur vertieften Diskussion, sondern auch zur emotionalen Auseinandersetzung mit den Motiven und Folgen eines Bedingungslosen Grundeinkommen.',
      'portfolio-heading': 'Projekt',
      'portfolio-subheading': 'Seit 2016 arbeiten wir an diesem Projekt. Erfahren Sie mehr über unsere bisherigen Ideen und Schritte.',
      'portfolio-1': 'Ideenskizze',
      'portfolio-2': 'Realisierung',
      'portfolio-3': 'Finanzierung',
      'fundraising-heading': 'Ermöglichen',
      'fundraising-subheading': 'Gehen Sie mit uns den ersten Schritt zu einer visualisierten Ausstellungskonzeption  - Finanzierungsbedarf:  25.000,- €. Nutzen Sie unser Projekt bei betterplace oder überweisen Sie direkt. In beiden Fällen ist Ihr Beitrag eine steuerabzugsfähige Spende.',
      'participate-heading': 'Wie kann ich mitmachen?',
      'chat-heading': 'Sprich mit uns!',
      'chat-subheading': 'Circles ist ein Open Source Projekt und wir freuen uns sehr über engagierte Mitstreiter*innen. Im Moment suchen wir besonders Verstärkung in den Bereichen Rechtsberatung, Design, Illustration, Mobile Development, Wirtschaftstheorie und Forschungsdesign.',
      'chat-link': 'Zum Chat',
      'support-heading': 'Unterstützer*innen',
      'support-subheading': 'Wir suchen immer Sponsor*innen und Förderer*innen, die uns ermöglichen, einen Prototypen unseres Projekts in verschiedenen Kontexten und Communities umzusetzen. Interessiert, uns zu unterstützen?',
      'support-link': 'Kontakt aufnehmen',
      'partner-heading': 'Unterstützer*innen',
      'partner-subheading': 'Diese Menschen und Organisationen unterstützen das UBI FutureLab ideell oder finanziell:',
      'partner-participate': 'Mitmachen? Schreiben Sie uns!',
      'team-heading': 'Team',
      'team-subheading': 'Unsere gemeinsame Plattform ist das',
      'team-link': 'Hamburger Netzwerk Grundeinkommen',
      'contact': 'So erreichen Sie uns',
      'contact-text': 'Nachricht an uns',
      'contact-chat': 'oder zum',
      'modal-1-title': 'Ideenskizze',
      'modal-1-subheading': ' ',
      'modal-1-description-1': 'Im UBI FutureLab werden Sie sich als Besucher von Themeninsel zu Themeninsel bewegen und dabei in unterschiedliche Erlebnis- und Erkenntnisräume eintauchen. Vielleicht werden Sie dabei den Eindruck gewinnen, mehr Fragen als Antworten mitzunehmen. Doch es werden  I h r e  eigenen Fragen sein. Das Freiheitsversprechen des BGE wird für Sie zusammenfallen  mit  I h r e r  eigenen Suche nach Antworten! - Anderen mag die Idee des BGE spontan zusagen, möchten aber mehr erfahren. Sie werden möglichst fundierte und präzise Antworten erhalten auf Fragen wie: Welche gesellschaftlichen und politischen Ziele verfolgen die Befürworter eines BGE?  Was sagen kompetente Kritiker und Skeptiker dazu? Hält die Finanzierung eines so ehrgeizigen Projektes einer seriösen Prüfung stand? Ist ein BGE, angesichts von Zukunftsherausforderungen wie Digitalisierung, ökologischer Krise und Globalisierung ein realistischer gesamtgesellschaftlicher Lösungsansatz? Welcher ergänzender Maßnahmen bedarf es? Ausgangspunkt der Ausstellungskonzeption sind daher die folgenden Themenbereiche: [...]',
      'modal-2-title': 'Realisierung',
      'modal-2-subheading': 'Hohe Ansprüche verlangen eine professionelle Umsetzung.',
      'modal-2-description-1': ' Die Kölner Agentur facts & fiction  (https://www.factsfiction.de) ist hochmotiviert und bereit, das Projekt in Kooperation mit uns zu verwirklichen. Gestützt auf eine visualisierte Austellungskonzeption soll in der Folge eine Sponsoring- und / oder Crowdfunding-Kampagne starten, um für die Produktion des UBI FutureLab die erforderliche Summe in der Größenordnung eines sechsstelligen Betrags einzusammeln.',
      'modal-3-title': 'Finanzierung',
      'modal-3-subheading': 'Jetzt sind Sie am Zug!',
      'modal-3-description-1': 'Die Umsetzung dieser Erlebnisausstellung braucht ideelle und vor allem finanzielle Unterstützer und Unterstützerinnen! Mit 1 Euro aufwärts sind Sie dabei! Hierzu haben wir die Spendenkampagne unter ... eingerichtet. Auch größere Beiträge sind herzlich willkommen. Als gemeinnütziger Verein können wir Spendenquittungen ausstellen. Die Finanzierung dieses Projektes stützt sich auf den solidarischen Beitrag von größeren EinzelspenderInnen, auf eine Kampagne bei der jeder/ jede auch mit einem kleinen Beitrag mitwirken kann und die Zusammenarbeit mit renommierten Institutionen und Stiftungen. Seien Sie dabei, diesen lebendigen Raum der Inspiration und des Austausches über das BGE zu ermöglichen! ',
    }
  });

  update_texts();
});