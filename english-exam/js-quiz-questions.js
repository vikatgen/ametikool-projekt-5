/* [THE "DATABASE" - QUESTIONS, OPTIONS, ANSWERS] */
// An array that contains objects
// In the format of {q: QUESTION, o: OPTIONS, a: CORRECT ANSWER}
var questions = [
  {
    q: 'Tõlgi lause "Palju õnne sünnipäevaks" inglise keelde',
    o: ["Berliin", "Happy birthday", "Vilnius", "Varssavi"],
    a: 1, // arrays start with 0, so it is 70 meters
  },
  {
    q: "Kuidas on inglise keels tere?",
    o: ["Thanks", "Hello", "Yes", "Bye"],
    a: 1,
  },
  {
    q: 'Tõlgi lause "Kuidas ma saan teid aidata?" inglise keelde',
    o: ["I don't know?", "How can I help you?", "excuse me, where's the Ladies?", "excuse me?"],
    a: 1,
  },
  {
    q: 'Tõlgi lause "Kas saaksite seda korrata?" inglise keelde',
    o: ["Your name, please?", "Could you please fill in this registration form?", "Could you please repeat that?", "Would you like a newspaper?"],
    a: 3,
  },
  {
    q: "Kuidas sa ütled inglise keeles, et sa saad aru?",
    o: ["lights", "Could I see your driving licence?", "I understand", "it has to be returned by 2pm on Saturday"],
    a: 2,
  },
  {
    q: 'Tõlgi väljend "Good morning"',
    o: ["Tere hommikust ", "Child locks", "Postcards", "Bye"],
    a: 0,
  },
  {
    q: 'Tõlgi lause "kas te räägite inglise keelt?" inglise keelde',
    o: ["How many would you like?", "Do you speak English?", "Excuse me, where's the Ladies?", "How many would you like?"],
    a: 1,
  },
  {
    q: 'Tõlgi väljend "Thanks very much"',
    o: ["Vabandage, kas võiksite meist pilti teha?", "Staadion", "Ma tulin pakki kätte saama", "Suur tänu"],
    a: 3,
  },
  {
    q: "Kuidas sa ütled inglise keeles, et sul on kõik hästi?",
    o: ["Do you want to go out tonight?", "Shall we go for a walk?", "I'm fine", "Where's the Ladies?"],
    a: 2,
  },
  {
    q: 'Tõlgi väljend "What have you been up to?"',
    o: ["Mis kuupäev täna on?", "Kas sa usud Jumalasse?", "Mida sa teinud oled?", "Kas sa usud surmajärgsesse ellu?"],
    a: 2,
  },
  {
    q: 'Tõlgi lause "Vabandage, kas võiksite minust pilti teha?',
    o: ["Excuse me, where's the Ladies?", "79 AD — eruption of Vesuvius", "Excuse me, could you take a photo for me?", "Do you believe in reincarnation?"],
    a: 2,
  },
  {
    q: 'Tõlgi väljend "Do you want to go out tonight?"',
    o: ["Kus asub lähim sularahaautomaat?", "Mis on selle konto intressimäär?", "Kas ma saaksin määrata kokkusaamise …?", "Kas tahaksid täna õhtul välja minna?"],
    a: 3,
  },
  {
    q: "Kuidas sa ütled, et kell on viie minuti pärast kaks?",
    o: ["Twenty past one", "Driving licence", "Five to two", "Twenty-five to two"],
    a: 2,
  },
  {
    q: "Kuidas sa ütled, et kell on kümme nelikümmend viis?",
    o: ["One o'clock", "Twenty-five to two", "Ten forty-five", "Six pm"],
    a: 2,
  },
  {
    q: 'Kuidas sa küsid inglise keeles "Kas sa oled usklik?"',
    o: ["Where's the Ladies?", "Are you religious?", "Where can I get a taxi?", "Do you know where there's an internet café?"],
    a: 1,
  },
  {
    q: 'Kuidas sa küsid inglise keeles "Kus asub garderoob?"',
    o: ["Where's the bar?", "Where's the cloakroom?", "What sort of music is it?", "Are you ready to go home?"],
    a: 1,
  },
  {
    q: 'Tõlgi lause "Mis on teie külastuse põhjus?',
    o: ["Eesti", "What's the purpose of your visit?", "Palun pange oma pass valmis", "Kust te reisite?"],
    a: 1,
  },
  {
    q: 'Tõlgi lause "me oleme avatud iga päev kl 10-20',
    o: ["Are you in the queue?", "We're open from 9am to 5pm, Monday to Friday", "We're open from 10am to 8pm, seven days a week", "Would you like a bag?"],
    a: 2,
  },
  {
    q: 'Tõlgi lause "kas sa oled õpilane?',
    o: ["Which university are you at?", "Where did you go to school? 	", "What do you study?", "Are you a student?"],
    a: 2,
  },
  {
    q: 'Tõlgi väljend "Best before end?"',
    o: ["Parim enne", "Tarbida enne", "pool kilo", "See teeb £32,47"],
    a: 0,
  },
];
