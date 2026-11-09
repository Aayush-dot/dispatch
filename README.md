# DiSPatch issue 1: how to put it online and send it

What's in this folder

- `index.html`: the full issue page (this is what the email button opens)
- `email.html`: the email
- `images/`: the cover and the two story pictures
- `send-dispatch.gs`: a small Google Apps Script that sends the email

## 1. Put the site online (GitHub Pages, free)

1. On GitHub, create a new public repository called `dispatch`.
2. Upload everything in this folder (keep the `images` folder as it is).
3. Go to Settings → Pages. Under "Build and deployment", choose "Deploy from a branch", branch `main`, folder `/ (root)`, and save.
4. After a minute or two the issue is live at `https://YOUR-GITHUB-USERNAME.github.io/dispatch/`.
   Open it on your phone and on a laptop to check it.

## 2. Pictures

The cover and the two story pictures are already in `images/`. Readers can tap a story picture to open it full size.

## 3. Send the email

**Option A, recommended: Apps Script.** Follow the steps at the top of `send-dispatch.gs`.
It sends the email exactly as built, so it adjusts properly on phones.
Send the test to yourself first.

**Option B: copy and paste.**

1. Open `https://YOUR-GITHUB-USERNAME.github.io/dispatch/email.html` in Chrome.
   Use the web address, not the file on your computer, or the pictures won't come through.
2. Press Ctrl+A, then Ctrl+C. Open a new Gmail message and press Ctrl+V.
3. Send it to yourself first and check it on your phone.

Gmail's compose box removes some of the phone-size adjustments, but the email is built to fit any screen without them.

## Before sending

- Check the date ("NOV 2026") at the top of both files.
