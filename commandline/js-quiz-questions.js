/* [THE "DATABASE" - QUESTIONS, OPTIONS, ANSWERS] */
// An array that contains objects
// In the format of {q: QUESTION, o: OPTIONS, a: CORRECT ANSWER}
var questions = [
  {
    q: "... viib sind argumendiks pandud kataloogi?",
    o: [">>", "cd", ">", "ls"],
    a: 1, // arrays start with 0, so it is 70 meters
  },
  {
    q: "... näitab antud kataloogis selle sisu.",
    o: ["list", "mkshow", "cd", "ls"],
    a: 3,
  },
  {
    q: "... käsk teeb sulle antud kataloogis uue faili. Võtab argumendina sisse faili nime.",
    o: ["mkdir", "make", "touch", "rm"],
    a: 2,
  },
  {
    q: "... teeb antud kataloogi uue kausta.",
    o: ["mkdir", "newdir", "makedir", "mfolder"],
    a: 0,
  },
  {
    q: "... viib sind kataloogipuus ühe sammu tagasi.",
    o: ["rm dir", "<", "cd <<", "cd .."],
    a: 3,
  },
  {
    q: "... kustutab faili. Võtab argumendina sisse faili nime.",
    o: ["delete", "-rf", "remove", "rm"],
    a: 3,
  },
  {
    q: "... annab sinu käsklusele root kasutaja õigused.",
    o: ["root", "sudo", "admin", "//"],
    a: 1,
  },
  {
    q: "... kopeerib faili. Argumentideks failinimi ning kataloogi nimi, kuhu kopeerida.",
    o: ["cp", "copy", "cm", "rm"],
    a: 0,
  },
  {
    q: "... tühjendab käsurea akna. Et saaks alustada puhtalt lehelt.",
    o: ["cl", "wipe", "clear", "clean"],
    a: 2,
  },
  {
    q: "... käsuga saab käsurealt vaadata oma faili sisu.",
    o: ["open", "cd", "show", "cat"],
    a: 3,
  },
  {
    q: "... käsuga saab kustutada kogu kataloogi.",
    o: ["rmdir", "removedir", "rfdir", "delete dir"],
    a: 0,
  },
];
