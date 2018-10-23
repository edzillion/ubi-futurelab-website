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
      'intro-heading': 'UBI FUTURE LAB',
      'intro-subheading': 'Basic income on the way in Europe',
      'action-link': 'Find out more',
      'idea-heading': 'Idea',
      'idea-subheading': '******** ***** ***** ***************',
      'challenge-heading': 'Challenge UBI',
      'challenge-subheading': 'How does it feel to live in a society with a basic income? How would basic income affect my personal way of life? How would basic income become reality?',
      'futurelab-heading': 'The Future Lab',
      'futurelab-subheading': 'will be designed as a mobile world of experience to be presented in public places, indoor and outdoor, like squares, parks, city halls, universities, libraries, museums.',
      'interactive-heading': 'Interactive and Participative',
      'interactive-subheading': 'with a diversity of designed spaces, playful tasks, inspiring installations and role play we want to engage with everyday issues on the level of personal experience.',
      'offers-heading': 'Offers All People',
      'offers-subheading': 'be they among the youth, the elderly, in jobs, self-employed, entrepreneurs or unemployed, in school, training or university, parents, married or single, citizens or migrants, volunteers or retired',
      'across-heading': 'Across Europe',
      'across-subheading': 'in all regions of Europe, in EU- and non-EU states, the future lab addresses the European dimension of UBI by considering how, in and of itself, it constitutes a significant contribution to a more sustainable and more democratic Europe.',
      'personal-heading': 'A Personal Experience',
      'personal-subheading': 'to immerse in the idea of basic income, allowing not only a deeper reflection, but also an emotional confrontation with the roots and implications of an unconditional basic income.',
      'portfolio-heading': 'Project',
      'portfolio-subheading': '***********************************',
      'portfolio-1': 'Realisation',
      'portfolio-2': 'Financing',
      'portfolio-3': 'Ideas Workshop',
      'fundraising-heading': 'Fundraising',
      'fundraising-subheading': 'Click here to donate',
      'participate-heading': 'How can I participate?',
      'chat-heading': 'Chat with Us',
      'chat-subheading': 'Circles is an open source community, and we are always looking for passionate contributors. If you are interested in participating or want to follow our progress, please join our chat room.',
      'chat-link': 'Join our Chat',
      'support-heading': 'Support',
      'support-subheading': 'We are always seeking sponsors to offer a city, space, or resources for testing an implmentation of our basic income prototype. Interested in supporting the project?',
      'support-link': 'Contact Us',
      'partner-heading': 'Supporters',
      'partner-subheading': 'Organizations participating in the development and implementation.',
      'partner-participate': 'Want to participate?',
      'team-heading': 'Players',
      'team-subheading': 'Would you like to join the team?',
      'contact': 'Contact us.',
      'contact-text': 'For any inquiries, e-mail',
      'contact-chat': 'or come join our',      
    },
    'de': {
      'lang-select': 'Sprache',
      'nav-idea': 'Idee',
      'nav-project': 'Projekt',
      'nav-supporters': 'Förder',
      'nav-fundraising': 'Fundraising',
      'nav-history': 'Rückblick',
      'nav-team': 'Akteure',
      'nav-contact': 'Kontakt',
      'intro-heading': 'BGE FUTURE LAB',
      'intro-subheading': 'Grundeinkommen auf dem Weg in Europa',
      'action-link': 'Finde mehr heraus',
      'idea-heading': 'Idee',
      'idea-subheading': '******** ***** ***** ***************',
      'challenge-heading': 'Herausforderung BGE',
      'challenge-subheading': '******** ***** ***** ***************',
      'futurelab-heading': 'Das Zukunftslabor',
      'futurelab-subheading': '******** ***** ***** ***************',
      'interactive-heading': 'Interaktiv und Partizipativ',
      'interactive-subheading': '******** ***** ***** ***************',
      'offers-heading': 'Bietet Allen Menschen',
      'offers-subheading': '******** ***** ***** ***************',
      'across-heading': 'In Ganz Europa',
      'across-subheading': '******** ***** ***** ***************',
      'personal-heading': 'Ein Persönliches Erlebnis',
      'personal-subheading': '******** ***** ***** ***************',
      'portfolio-heading': 'Projekt',
      'portfolio-subheading': '***********************************',
      'portfolio-1': 'Realisierung',
      'portfolio-2': 'Finanzierung',
      'portfolio-3': 'Ideenwerkstatt',
      'fundraising-heading': 'Fundraising',
      'fundraising-subheading': 'Click here to donate',
      'participate-heading': 'Wie kann ich mitmachen?',
      'chat-heading': 'Sprich mit uns!',
      'chat-subheading': 'Circles ist ein Open Source Projekt und wir freuen uns sehr über engagierte Mitstreiter*innen. Im Moment suchen wir besonders Verstärkung in den Bereichen Rechtsberatung, Design, Illustration, Mobile Development, Wirtschaftstheorie und Forschungsdesign.',
      'chat-link': 'Zum Chat',
      'support-heading': 'Unterstütze',
      'support-subheading': 'Wir suchen immer Sponsor*innen und Förderer*innen, die uns ermöglichen, einen Prototypen unseres Projekts in verschiedenen Kontexten und Communities umzusetzen. Interessiert, uns zu unterstützen?',
      'support-link': 'Kontakt aufnehmen',
      'partner-heading': 'Förder',
      'partner-subheading': 'Diese Organisationen sind an der Entwicklung und Implementierung',
      'partner-participate': 'Mitmachen? Nimm Kontakt mit uns auf!',
      'team-heading': 'Akteure',
      'team-subheading': 'Möchtest du dem Team beitreten?',
      'contact': 'Kontaktiere uns',
      'contact-text': 'Nachricht an uns',
      'contact-chat': 'oder zum'
    }
  });

  update_texts();
});