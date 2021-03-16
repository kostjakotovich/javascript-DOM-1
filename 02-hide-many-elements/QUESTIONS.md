# DOM Atomic 02: Hide Many Elements

## Questions

---

> How did you go about selecting the DOM elements to hide? Describe the "contract" for that function.

Ir jāizmanto. getElementsByClassName . Lauks norāda, kuru klasi vēlaties kolekcionēt. Tādējādi tiks atgriezta kolekcija, un jums ir jāizveido kolekcija, lai paslēptu visus vienumus tajā.

---

> Describe how you were able to hide each element. Were you able to do it as one operation, or did you use a loop of some kind? Describe the "contracts" that were utilized to accomplish your goal.

Lai pārvietotos pa savāktajiem vienumiem, tika izmantota cilpa. Jānorāda cikla lielums un jāizdara katram klases atribūtam.