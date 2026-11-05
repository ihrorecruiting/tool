# Tagescockpit und Heatmap (cockpit.karriere-ihro.de)

## Wo wird gearbeitet
- Das Cockpit wird nur im Ihro-Claude-Konto bearbeitet: entweder an Dennis' Ihro-Laptop (Ordner `Documents/tool`)
  oder in einer Claude-Cloud-Sitzung mit dem Repo `ihrorecruiting/tool`.
- Live geht nur, was im Branch `main` von `ihrorecruiting/tool` landet (GitHub Pages: main, / (root),
  Custom domain cockpit.karriere-ihro.de, DNS-CNAME bei united-domains → ihrorecruiting.github.io).
- Das Original `dennismendehub/tool` ist nur noch Sicherung. Dort nichts mehr ändern.

## Regeln für Cloud-Sitzungen
- Vor jeder Arbeit den neuesten Stand holen (`git pull`), damit sich Laptop und Cloud nicht überschreiben.
- Änderungen erst nach Dennis' OK hochladen, dann direkt nach `main` (kein eigener Branch, kein Pull Request).
- Vor dem Hochladen noch einmal `git pull`, dann pushen.

## Sonst
- Die Datei `CNAME` nicht löschen oder ändern, sonst ist die Adresse weg.
- Keine Daten in Supabase ändern ohne Dennis' ausdrückliches OK. Keine Schlüssel in Dateien.
