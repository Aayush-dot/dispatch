/**
 * DiSPatch sender for Google Apps Script.
 *
 * Why use this instead of copy-paste: it sends email.html exactly as built,
 * including the phone-size adjustments that Gmail's compose box removes.
 *
 * Steps
 * 1. Open script.google.com while signed in to the account that should send the mail.
 * 2. New project. Delete what is there and paste this whole file.
 * 3. Fill in SITE, TO_LIST and SUBJECT below.
 * 4. Choose sendTest in the toolbar and press Run. Google asks for permission the first time.
 * 5. Open the test mail on your phone and on a laptop. If it looks right, run sendIssue.
 */

const SITE = 'https://YOUR-GITHUB-USERNAME.github.io/dispatch/'; // your GitHub Pages address, ending with /
const TO_LIST = 'batch-mailing-list@spjimr.org';                   // a mailing list or Google Group counts as one recipient
const SUBJECT = 'DiSPatch #1: AI hiring in India is up 32%, and 8 more stories';
const FROM_NAME = 'Analytics Club, SPJIMR';

function sendTest() {
  send_(Session.getActiveUser().getEmail());
}

function sendIssue() {
  send_(TO_LIST);
}

function send_(to) {
  let html = UrlFetchApp.fetch(SITE + 'email.html').getContentText();
  // email.html uses short links like images/cover.jpg; turn them into full web addresses
  html = html.replace(/(src|href)="(?!https?:|mailto:|#)([^"]*)"/g, '$1="' + SITE + '$2"');
  const plain = 'DiSPatch, issue 1, from the Analytics Club. Read it here: ' + SITE;
  GmailApp.sendEmail(to, SUBJECT, plain, { htmlBody: html, name: FROM_NAME });
}
