/* [THE "DATABASE" - QUESTIONS, OPTIONS, ANSWERS] */
// An array that contains objects
// In the format of {q: QUESTION, o: OPTIONS, a: CORRECT ANSWER}
var questions = [
  {
    q: "... käsk valmistab ette sulle värske ja uue git repo",
    o: ["start", "init", "new", "ini"],
    a: 1, // arrays start with 0, so it is 70 meters
  },
  {
    q: "... käsuga seadistad enda git repo. Lisad kasutajanime jne.",
    o: ["cf", "start", "conf", "config"],
    a: 3,
  },
  {
    q: "... käsk, kui soovid saada remote repo oma arvutisse",
    o: ["get", "cp", "clone", "copy"],
    a: 2,
  },
  {
    q: "... käsk, millega lisad oma faili/failid enne githubi saatmist.",
    o: ["add", "post", "append", "extra"],
    a: 0,
  },
  {
    q: "Sinu kood on valmis. Kuidas sa salvestad enda koodi? Argumendiks võib panna ka kommentaari.",
    o: ["make", "save", "execute", "commit"],
    a: 3,
  },
  {
    q: "Kuidas navigeerida erinevate branchide vahel?",
    o: [">", "cd", "change", "checkout"],
    a: 3,
  },
  {
    q: "Soovid alla laadida uut versiooni remote repost, mis käsku kasutad?",
    o: ["get", "pull", "drag", "pick"],
    a: 1,
  },
  {
    q: "Liida oma tehtud muudatused Githubis oleva repoga.",
    o: ["push", "press", "post", "shift"],
    a: 0,
  },
  {
    q: "Vaata oma commit ajalugu.",
    o: ["history", "watch", "log", "ls"],
    a: 2,
  },
  {
    q: "Taasta oma koodibaas pärast teatud commiti.",
    o: ["get", "pull", "restart", "reset"],
    a: 3,
  },
];
