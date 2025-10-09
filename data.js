let allQuestions = [
    {"question": "Wie viele Zahlen gibt es?",
    "answer_1": "Ungefähr hundert",
    "answer_2": "Nur eine oder zwei",
    "answer_3": "Es gibt keine Zahlen",
    "answer_4": "Unendlich viele",
    "solution": 4
    },

    {"question": "Was ist ICE?",
    "answer_1": "Lecker kauf ich!",
    "answer_2": "Ein chemisches Element",
    "answer_3": "Das gleiche wie Oliver Kahn",
    "answer_4": "Ein Zug der Deutschen Bahn",
    "solution": 4
    },

    {"question": "Was ist Java?",
    "answer_1": "Eine Programmiersprache",
    "answer_2": "Der pelzige Typ aus Star Wars",
    "answer_3": "Der Nachbarplanet vom Jupiter",
    "answer_4": "Keins davon",
    "solution": 1
    },

    {"question": "Wo liegt Doitschland?",
    "answer_1": "Deutschland gibt es nicht",
    "answer_2": "In Asien",
    "answer_3": "In Europa",
    "answer_4": "Keins davon",
    "solution": 4
    },

    {"question": "Welches ist ein Bundesland?",
    "answer_1": "Badem-Würtenberg",
    "answer_2": "Baden-Württemberg",
    "answer_3": "Baden-Würtemberg",
    "answer_4": "Baden-Württenberg",
    "solution": 2
    
    },
    {"question": "Von wem ist die Relativitätstheorie?",
    "answer_1": "Alfred Einstein",
    "answer_2": "Albert Einsein",
    "answer_3": "Angela Merkel",
    "answer_4": "Albert Einstein",
    "solution": 4
    },
    {"question": "Welches ist eine Serie?",
    "answer_1": "Breaking Bad",
    "answer_2": "Breaking Bed",
    "answer_3": "Breaking Bathroom",
    "answer_4": "Breaking Cat",
    "solution": 1
    },
    {"question": "Wofür steht Si?",
    "answer_1": "Die höfliche Form von Du",
    "answer_2": "Sizilien",
    "answer_3": "Silizium",
    "answer_4": "Ralph Siegel",
    "solution": 3
    },
    {"question": "Wer hat HTML erfunden?",
    "answer_1": "Lady Gaga",
    "answer_2": "Lee-Harvey Oswald",
    "answer_3": "Tim Berners-Lee",
    "answer_4": "Tim Berners",
    "solution": 3
    },
    {"question": "Was ist die Hauptstadt von Mali?",
    "answer_1": "Timbuktu",
    "answer_2": "Kongo",
    "answer_3": "Pakistan",
    "answer_4": "Berlin",
    "solution": 1
    },
    {"question": "Was ist ein Raumschiff?",
    "answer_1": "Ein großes Schiff",
    "answer_2": "Ein Schiff mit viel Raum",
    "answer_3": "Ein Flugzeug im Weltraum",
    "answer_4": "Ein unbekanntes Tier",
    "solution": 3
    },
    {"question": "Welcher Planet ist am größten?",
    "answer_1": "Merkur",
    "answer_2": "Saturn",
    "answer_3": "Jupiter",
    "answer_4": "Venus",
    "solution": 3
    },
    {"question": "Wie weit ist die Sonne entfernt?",
    "answer_1": "149,60 Millionen km",
    "answer_2": "5 km",
    "answer_3": "Gar nicht",
    "answer_4": "2 Millionen km",
    "solution": 1
    },
    {"question": "Was ist Mars?",
    "answer_1": "Ein Planet",
    "answer_2": "Ein Schokoriegel",
    "answer_3": "Beides",
    "answer_4": "Keins davon",
    "solution": 3
    },
    {"question": "Wer spielt in der Bundesliga?",
    "answer_1": "Borussia München",
    "answer_2": "Werder Stuttgart",
    "answer_3": "Bayern Gladbach",
    "answer_4": "Bayer Leverkusen",
    "solution": 4
    },
    {"question": "Wie viel Uhr ist es?",
    "answer_1": "Genau ein Uhr",
    "answer_2": "Kommt drauf an",
    "answer_3": "Halb acht",
    "answer_4": "zehn Uhr",
    "solution": 2
    },
    {"question": "Wie alt wurde Steve Jobs?",
    "answer_1": "27",
    "answer_2": "56",
    "answer_3": "102",
    "answer_4": "71",
    "solution": 2
    },
    {"question": "Wann ging die erste Webseite online?",
    "answer_1": "1. Mai 1980",
    "answer_2": "2. Juni 1985",
    "answer_3": "10 Oktober 1994",
    "answer_4": "20. Dezember 1990",
    "solution": 4
    },
    {"question": "Welcher Hund ist am teuersten?",
    "answer_1": "Hunde werden nur verschenkt",
    "answer_2": "Do Khyi - ca. 7000 €",
    "answer_3": "Dackel - ca. 100.000 €",
    "answer_4": "Windhund - 10 €",
    "solution": 2
    },
    {"question": "Wie heißt der König von Deutschland?",
    "answer_1": "Olaf Scholz",
    "answer_2": "Roland Habeck",
    "answer_3": "King Charles",
    "answer_4": "Deutschland hat keinen König",
    "solution": 4
    },
    {"question": "Wofür steht HTML?",
    "answer_1": "Hypertool Marker Language",
    "answer_2": "Hypertext Markup Language",
    "answer_3": "Hypertext Mark your Language",
    "answer_4": "Hypertext Markup Longitude",
    "solution": 2
    },
    {"question": "Wer ist Gottfrid Svartholm?",
    "answer_1": "Mitbegründer der Seite Pirate Bay",
    "answer_2": "Ein schwedischer Dichter",
    "answer_3": "Der Bruder von Gotthold Lessing",
    "answer_4": "Ein dänischer Sänger",
    "solution": 1
    },
    {"question": "Was ist was?",
    "answer_1": "Wer wer ist",
    "answer_2": "Wo was ist",
    "answer_3": "Was warum ist",
    "answer_4": "Diese Frage ergibt keinen Sinn",
    "solution": 4
    },
     {"question": "Was bedeutet das D in D-Zug?",
    "answer_1": "Deutlich schnellerer Zug",
    "answer_2": "Durchgangs-Zug",
    "answer_3": "Dusch-Zug",
    "answer_4": "Dummer Zug",
    "solution": 2
    },
    {"question": "Wann wurde Samsung gegründet?",
    "answer_1": "13. Januar 1969",
    "answer_2": "Samsung gibt es nicht",
    "answer_3": "Mit einem Iphone",
    "answer_4": "13. Januar 1979",
    "solution": 1
    },
     {"question": "Wie heiß kann es auf dem Merkur werden?",
    "answer_1": "bis zu 43° Celsius",
    "answer_2": "bis zu 143° Celsius",
    "answer_3": "bis zu 430° Celsius",
    "answer_4": "bis zu 4300° Celsius",
    "solution": 3
    }
]
let allQuestionsEnglish = [
  {
    "question": "How many numbers are there?",
    "answer_1": "About a hundred",
    "answer_2": "Only one or two",
    "answer_3": "There are no numbers",
    "answer_4": "Infinitely many",
    "solution": 4
  },
  {
    "question": "What is ICE?",
    "answer_1": "Yummy, I’ll buy it!",
    "answer_2": "A chemical element",
    "answer_3": "The same as Oliver Kahn",
    "answer_4": "A train of Deutsche Bahn",
    "solution": 4
  },
  {
    "question": "What is Java?",
    "answer_1": "A programming language",
    "answer_2": "The furry guy from Star Wars",
    "answer_3": "A neighboring planet of Jupiter",
    "answer_4": "None of the above",
    "solution": 1
  },
  {
    "question": "Where is Geermany?",
    "answer_1": "Germany doesn’t exist",
    "answer_2": "In Asia",
    "answer_3": "In Europe",
    "answer_4": "None of the above",
    "solution": 4
  },
  {
    "question": "Which one is a federal state?",
    "answer_1": "Badem-Würtenberg",
    "answer_2": "Baden-Württemberg",
    "answer_3": "Baden-Würtemberg",
    "answer_4": "Baden-Württenberg",
    "solution": 2
  },
  {
    "question": "Who developed the theory of relativity?",
    "answer_1": "Alfred Einstein",
    "answer_2": "Albert Einsein",
    "answer_3": "Angela Merkel",
    "answer_4": "Albert Einstein",
    "solution": 4
  },
  {
    "question": "Which one is a TV series?",
    "answer_1": "Breaking Bad",
    "answer_2": "Breaking Bed",
    "answer_3": "Breaking Bathroom",
    "answer_4": "Breaking Cat",
    "solution": 1
  },
  {
    "question": "What does Si stand for?",
    "answer_1": "The polite form of 'you'",
    "answer_2": "Sicily",
    "answer_3": "Silicon",
    "answer_4": "Ralph Siegel",
    "solution": 3
  },
  {
    "question": "Who invented HTML?",
    "answer_1": "Lady Gaga",
    "answer_2": "Lee-Harvey Oswald",
    "answer_3": "Tim Berners-Lee",
    "answer_4": "Tim Berners",
    "solution": 3
  },
  {
    "question": "What is the capital of Mali?",
    "answer_1": "Timbuktu",
    "answer_2": "Congo",
    "answer_3": "Pakistan",
    "answer_4": "Berlin",
    "solution": 1
  },
  {
    "question": "What is a spaceship?",
    "answer_1": "A large ship",
    "answer_2": "A ship with lots of space",
    "answer_3": "An airplane in space",
    "answer_4": "An unknown animal",
    "solution": 3
  },
  {
    "question": "Which planet is the largest?",
    "answer_1": "Mercury",
    "answer_2": "Saturn",
    "answer_3": "Jupiter",
    "answer_4": "Venus",
    "solution": 3
  },
  {
    "question": "How far is the Sun?",
    "answer_1": "149.60 million km",
    "answer_2": "5 km",
    "answer_3": "Not at all",
    "answer_4": "2 million km",
    "solution": 1
  },
  {
    "question": "What is Mars?",
    "answer_1": "A planet",
    "answer_2": "A chocolate bar",
    "answer_3": "Both",
    "answer_4": "None of the above",
    "solution": 3
  },
  {
    "question": "Who plays in the Bundesliga?",
    "answer_1": "Borussia München",
    "answer_2": "Werder Stuttgart",
    "answer_3": "Bayern Gladbach",
    "answer_4": "Bayer Leverkusen",
    "solution": 4
  },
  {
    "question": "What time is it?",
    "answer_1": "Exactly one o’clock",
    "answer_2": "Depends",
    "answer_3": "Half past seven",
    "answer_4": "Ten o’clock",
    "solution": 2
  },
  {
    "question": "How old was Steve Jobs when he died?",
    "answer_1": "27",
    "answer_2": "56",
    "answer_3": "102",
    "answer_4": "71",
    "solution": 2
  },
  {
    "question": "When did the first website go online?",
    "answer_1": "May 1, 1980",
    "answer_2": "June 2, 1985",
    "answer_3": "October 10, 1994",
    "answer_4": "December 20, 1990",
    "solution": 4
  },
  {
    "question": "Which dog breed is the most expensive?",
    "answer_1": "Dogs are only given away",
    "answer_2": "Do Khyi - approx. €7000",
    "answer_3": "Dachshund - approx. €100,000",
    "answer_4": "Greyhound - €10",
    "solution": 2
  },
  {
    "question": "What is the name of the king of Germany?",
    "answer_1": "Olaf Scholz",
    "answer_2": "Roland Habeck",
    "answer_3": "King Charles",
    "answer_4": "Germany has no king",
    "solution": 4
  },
  {
    "question": "What does HTML stand for?",
    "answer_1": "Hypertool Marker Language",
    "answer_2": "Hypertext Markup Language",
    "answer_3": "Hypertext Mark your Language",
    "answer_4": "Hypertext Markup Longitude",
    "solution": 2
  },
  {
    "question": "Who is Gottfrid Svartholm?",
    "answer_1": "Co-founder of The Pirate Bay",
    "answer_2": "A Swedish poet",
    "answer_3": "The brother of Gotthold Lessing",
    "answer_4": "A Danish singer",
    "solution": 1
  },
  {
    "question": "What is what?",
    "answer_1": "Who is who",
    "answer_2": "Where is what",
    "answer_3": "Why is what",
    "answer_4": "This question makes no sense",
    "solution": 4
  },
  {
    "question": "What does the D in D-Zug stand for?",
    "answer_1": "Much faster train",
    "answer_2": "Duchgangs-Zug",
    "answer_3": "Shower train",
    "answer_4": "Stupid train",
    "solution": 2
  },
  {
    "question": "When was Samsung founded?",
    "answer_1": "January 13, 1969",
    "answer_2": "Samsung doesn’t exist",
    "answer_3": "With an iPhone",
    "answer_4": "January 13, 1979",
    "solution": 1
  },
  {
    "question": "How hot can it get on Mercury?",
    "answer_1": "Up to 43° Celsius",
    "answer_2": "Up to 143° Celsius",
    "answer_3": "Up to 430° Celsius",
    "answer_4": "Up to 4300° Celsius",
    "solution": 3
  }
]
