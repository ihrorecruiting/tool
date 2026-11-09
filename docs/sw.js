// Tagescockpit – Service Worker: nur für Push-Nachrichten (keine Zwischenspeicherung, damit immer die neueste Version lädt)
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", (e) => e.waitUntil(self.clients.claim()));
self.addEventListener("push", (e) => {
  let d = {}; try { d = e.data ? e.data.json() : {}; } catch { d = { body: e.data && e.data.text() }; }
  e.waitUntil(self.registration.showNotification(d.title || "Tagescockpit", {
    body: d.body || "", icon: "icon-192.png", badge: "icon-192.png", tag: d.tag || undefined, data: { url: d.url || "./" },
  }));
});
// Klick auf die Nachricht (09.11.2026): Bewerber direkt öffnen. Die Bewerber-ID steckt im tag („neu-<id>“, „vg-<id>“, „im-<id>“).
self.addEventListener("notificationclick", (e) => {
  e.notification.close();
  const lead = ((e.notification.tag || "").match(/[a-f0-9]{24}/i) || [])[0] || null;
  const base = (e.notification.data && e.notification.data.url) || "./";
  const url = new URL(lead ? "./?lead=" + lead : base, self.registration.scope).href;
  e.waitUntil(self.clients.matchAll({ type: "window", includeUncontrolled: true }).then((list) => {
    for (const c of list) if (c.url.startsWith(self.registration.scope)) {
      c.postMessage(lead ? { type: "open", lead } : { type: "refresh" });
      return c.focus();
    }
    return self.clients.openWindow(url);
  }));
});
