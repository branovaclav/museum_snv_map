Instalacia:

- nainstalovat node.js 64-bit: https://nodejs.org/en/download/
- nainstalovat C++ Build Tools for Windows: "npm install --global --production windows-build-tools"
- nainstalovat node-gyp: "npm install --global node-gyp"
- nainstalovat balicky aplikacie: v adresari aplikacie "npm install --production"

Spustenie aplikacie:

- spustit aplikaciu: v adresari aplikacie "npm start"
- nainstalovat prehliadac Google Chrome
- spustit prehliadac z prikazoveho riadku: chrome.exe --kiosk --incognito --noerrdialogs --touch-events --disable-pinch --overscroll-history-navigation=0 --enable-overlay-scrollbar --enable-experimental-web-platform-features http://localhost:3000
- v pripade, ze v prehliadaci sa zobrazuju standardne (permanentne) scrollbary, je potrebne zapnut Google Chrome flag #overlay-scrollbars (url chrome://flags)
