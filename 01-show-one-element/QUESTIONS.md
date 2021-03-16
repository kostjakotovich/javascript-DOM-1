# DOM Atomic 01: Show One Element

## Questions

---

> If you click the link to reveal more text and then refresh the page, does the text remain revealed, or is it hidden again? Why?

Teksts atkal tiek paslēpts pec majaslapas atjaunosanas, jo skripts sakas no jauna (restartojas)

> Remove `window.addEventListener("load", function(){` (and the closing `})`) from **global.js**. Does the link still reveal the text? What is the purpose of this code that you've removed?

Jūs noņemat notikumu, kas ielādē visu, kas tam seko. Šajā gadījumā window.onload ielādē visu JS, kad lapa ir pabeigta.Citādi tā būs nenosaukta funkcija.Un viss kas ir šajā funkcijā nestradās.

---

> Describe the the `addEventListener` method. (Remember that there is a specific, technical, methodical way to describe methods. Your reply should match that format.)

Metode addEventListener norādītajam elementam pievieno notikumu apstrādātāju.Kuru notikumu tā klausās un kas jādara, kad notikums notiek.
