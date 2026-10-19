export interface Exercise {
  id: number;
  question: string;
  options?: string[];
  correctAnswer: string;
  hint?: string;
}

export interface GrammarTopic {
  id: string;
  title: string;
  titleEn: string;
  section: string;
  theory: string;
  rules: string[];
  examples: string[];
  exercises: Exercise[];
}

export const grammarTopics: GrammarTopic[] = [
  {
    id: "present-simple",
    title: "Present Simple",
    titleEn: "Простое настоящее время",
    section: "Времена глагола",
    theory: "Present Simple (Простое настоящее время) используется для описания регулярных, повторяющихся действий, привычек, общих истин и расписаний.",
    rules: [
      "Утверждение: Subject + V1 (s/es для he/she/it)",
      "Отрицание: Subject + do/does + not + V1",
      "Вопрос: Do/Does + Subject + V1?",
      "Окончание -s/-es добавляется в 3-м лице единственного числа (he/she/it)",
      "После sh, ch, s, x, o, z добавляется -es",
      "Глаголы на -y после согласной: -y меняется на -ies"
    ],
    examples: [
      "I work every day. — Я работаю каждый день.",
      "She works every day. — Она работает каждый день.",
      "He doesn't like coffee. — Он не любит кофе.",
      "Do you speak English? — Ты говоришь по-английски?",
      "The sun rises in the east. — Солнце встаёт на востоке."
    ],
    exercises: [
      { id: 1, question: "She ___ to school every day.", options: ["go", "goes", "going", "gone"], correctAnswer: "goes", hint: "He/She/It + V1 + s/es" },
      { id: 2, question: "They ___ football on Sundays.", options: ["plays", "play", "playing", "played"], correctAnswer: "play", hint: "Для they/we/you/I используется начальная форма глагола" },
      { id: 3, question: "He ___ not like fish.", options: ["do", "does", "is", "has"], correctAnswer: "does", hint: "В 3-м лице ед.ч. используется does" },
      { id: 4, question: "___ you live in Moscow?", options: ["Does", "Do", "Are", "Is"], correctAnswer: "Do", hint: "Для you/we/they используется Do" },
      { id: 5, question: "My cat ___ milk.", options: ["drink", "drinks", "drinking", "drunk"], correctAnswer: "drinks", hint: "My cat = it, нужно добавить -s" },
      { id: 6, question: "The children ___ in the park.", options: ["plays", "play", "playing", "is playing"], correctAnswer: "play", hint: "Children — множественное число, глагол без окончания" },
      { id: 7, question: "She ___ her teeth twice a day.", options: ["brush", "brushes", "brushing", "brushs"], correctAnswer: "brushes", hint: "После sh, ch, s, x, o, z добавляется -es" },
      { id: 8, question: "Water ___ at 100 degrees.", options: ["boil", "boils", "boiling", "boiled"], correctAnswer: "boils", hint: "Water = it, общий факт — Present Simple" },
      { id: 9, question: "We ___ English on Mondays.", options: ["study", "studies", "studying", "studied"], correctAnswer: "study", hint: "We — начальная форма глагола" },
      { id: 10, question: "He ___ TV in the evening.", options: ["watch", "watches", "watching", "watchs"], correctAnswer: "watches", hint: "После ch добавляется -es" },
      { id: 11, question: "My mother ___ delicious cakes.", options: ["make", "makes", "making", "made"], correctAnswer: "makes", hint: "My mother = she, добавляем -s" },
      { id: 12, question: "I ___ coffee every morning.", options: ["drinks", "drink", "drinking", "drank"], correctAnswer: "drink", hint: "I — начальная форма без окончания" },
      { id: 13, question: "The train ___ at 6 o'clock.", options: ["leave", "leaves", "leaving", "left"], correctAnswer: "leaves", hint: "The train = it, расписание — Present Simple" },
      { id: 14, question: "___ she speak French?", options: ["Do", "Does", "Is", "Are"], correctAnswer: "Does", hint: "She → Does" },
      { id: 15, question: "Birds ___ in the sky.", options: ["fly", "flies", "flying", "flew"], correctAnswer: "fly", hint: "Birds — мн. число, глагол без -s" },
      { id: 16, question: "He ___ to music every day.", options: ["listen", "listens", "listening", "listened"], correctAnswer: "listens", hint: "He → listen + s" },
      { id: 17, question: "The earth ___ round the sun.", options: ["go", "goes", "going", "gone"], correctAnswer: "goes", hint: "The earth = it, общий факт" },
      { id: 18, question: "She ___ not understand this rule.", options: ["do", "does", "is", "are"], correctAnswer: "does", hint: "She → does not" },
      { id: 19, question: "My friends ___ tennis on weekends.", options: ["play", "plays", "playing", "played"], correctAnswer: "play", hint: "My friends = they, начальная форма" },
      { id: 20, question: "The baby ___ a lot at night.", options: ["cry", "cries", "crying", "cried"], correctAnswer: "cries", hint: "-y после согласной → -ies" }
    ]
  },
  {
    id: "present-continuous",
    title: "Present Continuous",
    titleEn: "Настоящее длительное время",
    section: "Времена глагола",
    theory: "Present Continuous (Настоящее длительное время) используется для описания действий, происходящих в момент речи, временных ситуаций и запланированных действий в будущем.",
    rules: [
      "Утверждение: Subject + am/is/are + V-ing",
      "Отрицание: Subject + am/is/are + not + V-ing",
      "Вопрос: Am/Is/Are + Subject + V-ing?",
      "I → am, He/She/It → is, We/You/They → are",
      "Не используется с глаголами состояния (know, like, want, need, believe и др.)"
    ],
    examples: [
      "I am reading a book now. — Я сейчас читаю книгу.",
      "She is cooking dinner. — Она готовит ужин.",
      "They are not working today. — Они сегодня не работают.",
      "Are you listening to me? — Ты меня слушаешь?",
      "Look! It is raining. — Смотри! Идёт дождь."
    ],
    exercises: [
      { id: 1, question: "I ___ a letter now.", options: ["write", "am writing", "writes", "wrote"], correctAnswer: "am writing", hint: "now — маркер Present Continuous" },
      { id: 2, question: "Look! The children ___ in the garden.", options: ["play", "plays", "are playing", "played"], correctAnswer: "are playing", hint: "Look! — действие происходит сейчас" },
      { id: 3, question: "She ___ TV at the moment.", options: ["watches", "is watching", "watch", "watched"], correctAnswer: "is watching", hint: "at the moment — маркер Present Continuous" },
      { id: 4, question: "We ___ a new project this week.", options: ["do", "does", "are doing", "did"], correctAnswer: "are doing", hint: "this week — временная ситуация" },
      { id: 5, question: "___ he ___ right now?", options: ["Does / sleep", "Is / sleeping", "Do / sleep", "Are / sleeping"], correctAnswer: "Is / sleeping", hint: "he → Is, right now → V-ing" },
      { id: 6, question: "They ___ not working today.", options: ["is", "are", "do", "does"], correctAnswer: "are", hint: "They → are" },
      { id: 7, question: "Be quiet! The baby ___.", options: ["sleeps", "sleep", "is sleeping", "slept"], correctAnswer: "is sleeping", hint: "Be quiet! — действие происходит прямо сейчас" },
      { id: 8, question: "I ___ for the bus.", options: ["wait", "am waiting", "waits", "waited"], correctAnswer: "am waiting", hint: "Действие происходит в момент речи" },
      { id: 9, question: "Listen! Somebody ___ the piano.", options: ["plays", "play", "is playing", "played"], correctAnswer: "is playing", hint: "Listen! — маркер действия сейчас" },
      { id: 10, question: "The students ___ an exam now.", options: ["take", "takes", "are taking", "took"], correctAnswer: "are taking", hint: "now + The students (they) → are + V-ing" },
      { id: 11, question: "What ___ you ___ at the moment?", options: ["do / do", "are / doing", "does / do", "is / doing"], correctAnswer: "are / doing", hint: "you → are, at the moment → V-ing" },
      { id: 12, question: "Listen! My sister ___ a new song.", options: ["sings", "sing", "is singing", "sang"], correctAnswer: "is singing", hint: "Listen! — действие происходит сейчас → is + V-ing" },
      { id: 13, question: "We ___ to the cinema tonight.", options: ["go", "goes", "are going", "went"], correctAnswer: "are going", hint: "tonight — запланированное действие" },
      { id: 14, question: "He ___ a shower at the moment.", options: ["take", "takes", "is taking", "took"], correctAnswer: "is taking", hint: "at the moment → is + V-ing" },
      { id: 15, question: "___ it ___ outside?", options: ["Does / rain", "Is / raining", "Do / rain", "Are / raining"], correctAnswer: "Is / raining", hint: "it → Is, процесс → V-ing" },
      { id: 16, question: "I ___ to learn Spanish this year.", options: ["try", "tries", "am trying", "tried"], correctAnswer: "am trying", hint: "this year — временная ситуация" },
      { id: 17, question: "The dog ___ in the yard now.", options: ["run", "runs", "is running", "ran"], correctAnswer: "is running", hint: "now → is + V-ing" },
      { id: 18, question: "They ___ dinner at 7 p.m. today.", options: ["have", "has", "are having", "had"], correctAnswer: "are having", hint: "today + конкретное время → запланированное" },
      { id: 19, question: "She ___ a book about history at the moment.", options: ["reads", "read", "is reading", "reading"], correctAnswer: "is reading", hint: "at the moment — действие в процессе → is + V-ing" },
      { id: 20, question: "My parents ___ a new house.", options: ["build", "builds", "are building", "built"], correctAnswer: "are building", hint: "Временная ситуация → are + V-ing" }
    ]
  },
  {
    id: "past-simple",
    title: "Past Simple",
    titleEn: "Простое прошедшее время",
    section: "Времена глагола",
    theory: "Past Simple (Простое прошедшее время) используется для описания завершённых действий в прошлом. Регулярные глаголы образуют форму прошедшего времени с помощью окончания -ed.",
    rules: [
      "Утверждение: Subject + V2 (правильные: +ed; неправильные: 2-я форма)",
      "Отрицание: Subject + did + not + V1",
      "Вопрос: Did + Subject + V1?",
      "Правильные глаголы: work → worked, play → played",
      "Неправильные глаголы: go → went, see → saw, take → took",
      "Маркеры: yesterday, ago, last week/month/year, in 2020"
    ],
    examples: [
      "I worked yesterday. — Я работал вчера.",
      "She went to the cinema last night. — Она ходила в кино прошлым вечером.",
      "They didn't see the film. — Они не смотрели фильм.",
      "Did you visit London? — Ты посещал Лондон?",
      "He wrote a letter two days ago. — Он написал письмо два дня назад."
    ],
    exercises: [
      { id: 1, question: "I ___ to the cinema yesterday.", options: ["go", "goes", "went", "going"], correctAnswer: "went", hint: "go — неправильный глагол, 2-я форма: went" },
      { id: 2, question: "She ___ her homework last evening.", options: ["do", "does", "did", "done"], correctAnswer: "did", hint: "do — неправильный глагол, 2-я форма: did" },
      { id: 3, question: "They ___ not come to the party.", options: ["do", "does", "did", "were"], correctAnswer: "did", hint: "В Past Simple отрицание: did not + V1" },
      { id: 4, question: "___ you see the match last night?", options: ["Do", "Does", "Did", "Are"], correctAnswer: "Did", hint: "last night — Past Simple, вопрос с Did" },
      { id: 5, question: "He ___ a book two days ago.", options: ["read", "reads", "reading", "readed"], correctAnswer: "read", hint: "read — неправильный глагол (читается как 'red')" },
      { id: 6, question: "We ___ in London last summer.", options: ["are", "were", "was", "been"], correctAnswer: "were", hint: "We → were (прошедшее от are)" },
      { id: 7, question: "The lesson ___ at 9 o'clock.", options: ["begin", "begins", "began", "begun"], correctAnswer: "began", hint: "begin — неправильный: begin-began-begun" },
      { id: 8, question: "My mother ___ a cake yesterday.", options: ["make", "makes", "made", "making"], correctAnswer: "made", hint: "make — неправильный: make-made-made" },
      { id: 9, question: "I ___ my keys this morning.", options: ["lose", "loses", "lost", "losing"], correctAnswer: "lost", hint: "lose — неправильный: lose-lost-lost" },
      { id: 10, question: "She ___ a beautiful song at the concert.", options: ["sing", "sings", "sang", "sung"], correctAnswer: "sang", hint: "sing — неправильный: sing-sang-sung" },
      { id: 11, question: "They ___ the bus yesterday.", options: ["miss", "misses", "missed", "missing"], correctAnswer: "missed", hint: "Правильный глагол: miss + ed" },
      { id: 12, question: "He ___ me a present last birthday.", options: ["give", "gives", "gave", "given"], correctAnswer: "gave", hint: "give — неправильный: give-gave-given" },
      { id: 13, question: "We ___ a great time last weekend.", options: ["have", "has", "had", "having"], correctAnswer: "had", hint: "have — неправильный: have-had-had" },
      { id: 14, question: "___ she ___ the letter?", options: ["Did / write", "Does / write", "Do / write", "Was / write"], correctAnswer: "Did / write", hint: "Past Simple вопрос: Did + V1" },
      { id: 15, question: "The children ___ in the park yesterday.", options: ["play", "plays", "played", "playing"], correctAnswer: "played", hint: "Правильный глагол: play + ed" },
      { id: 16, question: "I ___ up early this morning.", options: ["wake", "wakes", "woke", "woken"], correctAnswer: "woke", hint: "wake — неправильный: wake-woke-woken" },
      { id: 17, question: "He ___ the door and came in.", options: ["open", "opens", "opened", "opening"], correctAnswer: "opened", hint: "Правильный глагол: open + ed" },
      { id: 18, question: "She ___ to Paris three years ago.", options: ["travel", "travels", "travelled", "travelling"], correctAnswer: "travelled", hint: "Правильный глагол: travel + led" },
      { id: 19, question: "We ___ not know the answer.", options: ["do", "does", "did", "were"], correctAnswer: "did", hint: "Past Simple отрицание: did not + V1" },
      { id: 20, question: "The cat ___ the mouse.", options: ["catch", "catches", "caught", "catching"], correctAnswer: "caught", hint: "catch — неправильный: catch-caught-caught" }
    ]
  },
  {
    id: "present-perfect",
    title: "Present Perfect",
    titleEn: "Настоящее совершенное время",
    section: "Времена глагола",
    theory: "Present Perfect (Настоящее совершенное время) используется для описания действий, которые произошли в неопределённый момент в прошлом, или действий, результат которых важен в настоящем.",
    rules: [
      "Утверждение: Subject + have/has + V3 (причастие прошедшее)",
      "Отрицание: Subject + have/has + not + V3",
      "Вопрос: Have/Has + Subject + V3?",
      "I/We/You/They → have, He/She/It → has",
      "Маркеры: already, just, ever, never, yet, since, for, recently"
    ],
    examples: [
      "I have already done my homework. — Я уже сделал домашнее задание.",
      "She has just arrived. — Она только что приехала.",
      "Have you ever been to Paris? — Ты когда-нибудь был в Париже?",
      "They haven't finished yet. — Они ещё не закончили.",
      "He has lived here since 2010. — Он живёт здесь с 2010 года."
    ],
    exercises: [
      { id: 1, question: "I ___ already ___ this book.", options: ["have / read", "has / read", "have / readed", "has / readed"], correctAnswer: "have / read", hint: "I → have, read — неправильный: read-read-read" },
      { id: 2, question: "She ___ just ___ home.", options: ["have / come", "has / come", "has / came", "have / came"], correctAnswer: "has / come", hint: "She → has, come — неправильный: come-came-come" },
      { id: 3, question: "___ you ever ___ to London?", options: ["Have / been", "Has / been", "Have / went", "Did / go"], correctAnswer: "Have / been", hint: "you → Have, been — 3-я форма от be" },
      { id: 4, question: "They ___ not finished their work yet.", options: ["has", "have", "did", "are"], correctAnswer: "have", hint: "They → have" },
      { id: 5, question: "He ___ lived here ___ 2015.", options: ["has / since", "have / since", "has / for", "have / for"], correctAnswer: "has / since", hint: "He → has, с конкретным годом → since" },
      { id: 6, question: "We ___ known each other ___ ten years.", options: ["have / for", "has / for", "have / since", "has / since"], correctAnswer: "have / for", hint: "We → have, период времени → for" },
      { id: 7, question: "I ___ never ___ sushi.", options: ["have / eaten", "has / eaten", "have / ate", "has / ate"], correctAnswer: "have / eaten", hint: "I → have, eat-ate-eaten" },
      { id: 8, question: "She ___ her keys. She can't find them.", options: ["has lost", "have lost", "lost", "is losing"], correctAnswer: "has lost", hint: "She → has, результат важен сейчас" },
      { id: 9, question: "We ___ already ___ lunch.", options: ["have / had", "has / had", "have / have", "has / have"], correctAnswer: "have / had", hint: "We → have, have-had-had" },
      { id: 10, question: "He ___ just ___ the room.", options: ["have / leave", "has / left", "has / leave", "have / left"], correctAnswer: "has / left", hint: "He → has, leave-left-left" },
      { id: 11, question: "___ she ___ this film yet?", options: ["Has / seen", "Have / seen", "Has / saw", "Did / see"], correctAnswer: "Has / seen", hint: "She → Has, see-saw-seen" },
      { id: 12, question: "I ___ never ___ a horse.", options: ["have / ridden", "has / ridden", "have / rode", "has / rode"], correctAnswer: "have / ridden", hint: "I → have, ride-rode-ridden" },
      { id: 13, question: "They ___ in this city ___ 2010.", options: ["have lived / since", "has lived / since", "have lived / for", "has lived / for"], correctAnswer: "have lived / since", hint: "They → have, конкретный год → since" },
      { id: 14, question: "My parents ___ not ___ back yet.", options: ["has / come", "have / come", "have / came", "has / came"], correctAnswer: "have / come", hint: "My parents = they → have" },
      { id: 15, question: "She ___ three letters today.", options: ["has written", "have written", "has wrote", "have wrote"], correctAnswer: "has written", hint: "She → has, write-wrote-written" },
      { id: 16, question: "We ___ this book already.", options: ["have read", "has read", "have readed", "has readed"], correctAnswer: "have read", hint: "We → have, read-read-read" },
      { id: 17, question: "I ___ my homework. Can I go out?", options: ["have finished", "has finished", "have finish", "has finish"], correctAnswer: "have finished", hint: "I → have, результат важен сейчас" },
      { id: 18, question: "He ___ ___ this city for five years.", options: ["has / lived", "have / lived", "has / live", "have / live"], correctAnswer: "has / lived", hint: "He → has, период → for" },
      { id: 19, question: "___ they ___ the news yet?", options: ["Have / heard", "Has / heard", "Have / hear", "Did / hear"], correctAnswer: "Have / heard", hint: "They → Have, hear-heard-heard" },
      { id: 20, question: "This is the best film I ___ ever ___.", options: ["have / seen", "has / seen", "have / saw", "has / saw"], correctAnswer: "have / seen", hint: "I → have, see-saw-seen" }
    ]
  },
  {
    id: "future-simple",
    title: "Future Simple",
    titleEn: "Простое будущее время",
    section: "Времена глагола",
    theory: "Future Simple (Простое будущее время) используется для описания спонтанных решений, предсказаний, обещаний и действий в будущем.",
    rules: [
      "Утверждение: Subject + will + V1",
      "Отрицание: Subject + will + not (won't) + V1",
      "Вопрос: Will + Subject + V1?",
      "Will используется со всеми лицами без изменений",
      "Маркеры: tomorrow, next week/month/year, soon, in the future"
    ],
    examples: [
      "I will help you. — Я помогу тебе.",
      "She will come tomorrow. — Она придёт завтра.",
      "They won't forget this. — Они не забудут это.",
      "Will you marry me? — Ты выйдешь за меня?",
      "It will rain tomorrow. — Завтра будет дождь."
    ],
    exercises: [
      { id: 1, question: "I ___ help you with this task.", options: ["will", "am", "do", "have"], correctAnswer: "will", hint: "Спонтанное решение → will + V1" },
      { id: 2, question: "She ___ come to the party tomorrow.", options: ["will", "is", "does", "has"], correctAnswer: "will", hint: "tomorrow — маркер Future Simple" },
      { id: 3, question: "They ___ not forget this day.", options: ["will", "do", "are", "have"], correctAnswer: "will", hint: "Отрицание в Future Simple: will not" },
      { id: 4, question: "___ you help me, please?", options: ["Will", "Do", "Are", "Have"], correctAnswer: "Will", hint: "Просьба/вопрос о будущем → Will" },
      { id: 5, question: "It ___ rain next week.", options: ["will", "is", "does", "has"], correctAnswer: "will", hint: "Предсказание → will + V1" },
      { id: 6, question: "We ___ always remember you.", options: ["will", "are", "do", "have"], correctAnswer: "will", hint: "Обещание → will + V1" },
      { id: 7, question: "He ___ be a great doctor.", options: ["will", "is", "does", "has"], correctAnswer: "will", hint: "Предсказание о будущем → will" },
      { id: 8, question: "I think it ___ be cold tonight.", options: ["will", "is", "does", "has"], correctAnswer: "will", hint: "I think + предсказание → will" },
      { id: 9, question: "Don't worry, I ___ tell anyone.", options: ["won't", "don't", "am not", "haven't"], correctAnswer: "won't", hint: "Обещание не делать → will not (won't)" },
      { id: 10, question: "She ___ be 20 next month.", options: ["will", "is", "does", "has"], correctAnswer: "will", hint: "next month — будущее" },
      { id: 11, question: "I'm sure they ___ win the match.", options: ["will", "are", "do", "have"], correctAnswer: "will", hint: "I'm sure + предсказание → will" },
      { id: 12, question: "___ you ___ me this weekend?", options: ["Will / call", "Do / call", "Are / calling", "Did / call"], correctAnswer: "Will / call", hint: "this weekend → Future Simple" },
      { id: 13, question: "Maybe he ___ change his mind.", options: ["will", "is", "does", "has"], correctAnswer: "will", hint: "Maybe + предположение → will" },
      { id: 14, question: "The phone is ringing. I ___ answer it.", options: ["will", "am", "do", "have"], correctAnswer: "will", hint: "Спонтанное решение → will" },
      { id: 15, question: "They ___ not come to the meeting.", options: ["will", "do", "are", "have"], correctAnswer: "will", hint: "Future Simple отрицание: will not" },
      { id: 16, question: "I promise I ___ be late.", options: ["won't", "don't", "am not", "haven't"], correctAnswer: "won't", hint: "I promise + won't" },
      { id: 17, question: "Perhaps she ___ agree with us.", options: ["will", "is", "does", "has"], correctAnswer: "will", hint: "Perhaps + предположение → will" },
      { id: 18, question: "I'm sure she ___ pass the exam.", options: ["will", "is", "does", "has"], correctAnswer: "will", hint: "I'm sure + предсказание → will" },
      { id: 19, question: "We ___ you as soon as we arrive.", options: ["will call", "call", "are calling", "called"], correctAnswer: "will call", hint: "as soon as + будущее → will + V1" },
      { id: 20, question: "___ it ___ snow tomorrow?", options: ["Will / snow", "Does / snow", "Is / snowing", "Do / snow"], correctAnswer: "Will / snow", hint: "tomorrow → Will + V1" }
    ]
  },
  {
    id: "articles",
    title: "Артикли",
    titleEn: "Articles: a/an, the",
    section: "Части речи",
    theory: "Артикли — это служебные части речи, которые ставятся перед существительными. Неопределённый артикль a/an используется с исчисляемыми существительными в единственном числе, когда речь идёт о любом предмете. Определённый артикль the используется, когда речь о конкретном предмете.",
    rules: [
      "a — перед словами на согласный звук: a book, a house",
      "an — перед словами на гласный звук: an apple, an hour",
      "the — когда предмет конкретен или упоминается повторно",
      "Без артикля: неисчисляемые во множественном числе, имена собственные, абстрактные понятия",
      "the — с уникальными объектами: the sun, the moon, the earth",
      "the — с порядковыми числительными и превосходной степенью"
    ],
    examples: [
      "I saw a cat. The cat was black. — Я увидел кота. Кот был чёрный.",
      "She is an engineer. — Она инженер.",
      "The Earth goes round the Sun. — Земля вращается вокруг Солнца.",
      "He is the best student. — Он лучший студент.",
      "I like music. — Я люблю музыку. (без артикля)"
    ],
    exercises: [
      { id: 1, question: "I saw ___ interesting film yesterday.", options: ["a", "an", "the", "—"], correctAnswer: "an", hint: "interesting начинается с гласного звука → an" },
      { id: 2, question: "___ sun rises in ___ east.", options: ["The / the", "A / an", "— / the", "The / an"], correctAnswer: "The / the", hint: "Уникальный объект + the + направление" },
      { id: 3, question: "She is ___ honest person.", options: ["a", "an", "the", "—"], correctAnswer: "an", hint: "honest — h не читается, начинается с гласного звука" },
      { id: 4, question: "I have ___ dog. ___ dog is very friendly.", options: ["a / The", "an / The", "the / A", "— / The"], correctAnswer: "a / The", hint: "Первое упоминание → a, повторное → the" },
      { id: 5, question: "He is ___ best student in our class.", options: ["a", "an", "the", "—"], correctAnswer: "the", hint: "Превосходная степень → the" },
      { id: 6, question: "I usually have ___ breakfast at 8 o'clock.", options: ["a", "an", "the", "—"], correctAnswer: "—", hint: "have breakfast/lunch/dinner — без артикля" },
      { id: 7, question: "There is ___ university in our city.", options: ["a", "an", "the", "—"], correctAnswer: "a", hint: "university начинается с согласного звука /juː/" },
      { id: 8, question: "___ moon is very bright tonight.", options: ["A", "An", "The", "—"], correctAnswer: "The", hint: "Уникальный объект → the" },
      { id: 9, question: "He wants to be ___ engineer.", options: ["a", "an", "the", "—"], correctAnswer: "an", hint: "engineer начинается с гласного звука" },
      { id: 10, question: "I need ___ umbrella. It's raining.", options: ["a", "an", "the", "—"], correctAnswer: "an", hint: "umbrella начинается с гласного звука" },
      { id: 11, question: "___ children next door love playing in ___ park.", options: ["The / the", "— / a", "A / the", "The / —"], correctAnswer: "The / the", hint: "Конкретные дети + конкретный парк → the" },
      { id: 12, question: "She plays ___ piano very well.", options: ["a", "an", "the", "—"], correctAnswer: "the", hint: "Музыкальные инструменты → the" },
      { id: 13, question: "I'd like ___ cup of tea, please.", options: ["a", "an", "the", "—"], correctAnswer: "a", hint: "Один из многих → a" },
      { id: 14, question: "He is ___ tallest boy in the class.", options: ["a", "an", "the", "—"], correctAnswer: "the", hint: "Превосходная степень → the" },
      { id: 15, question: "___ life is beautiful.", options: ["A", "An", "The", "—"], correctAnswer: "—", hint: "Абстрактное понятие → без артикля" },
      { id: 16, question: "I bought ___ new car yesterday.", options: ["a", "an", "the", "—"], correctAnswer: "a", hint: "Первое упоминание → a" },
      { id: 17, question: "___ car is very fast.", options: ["A", "An", "The", "—"], correctAnswer: "The", hint: "Повторное упоминание → the" },
      { id: 18, question: "She goes to ___ school every day.", options: ["a", "an", "the", "—"], correctAnswer: "—", hint: "go to school — устойчивое выражение" },
      { id: 19, question: "He is ___ European.", options: ["a", "an", "the", "—"], correctAnswer: "a", hint: "European начинается с согласного звука /j/" },
      { id: 20, question: "I love ___ music of Mozart.", options: ["a", "an", "the", "—"], correctAnswer: "the", hint: "Конкретная музыка (Моцарта) → the" }
    ]
  },
  {
    id: "nouns-plurals",
    title: "Множественное число существительных",
    titleEn: "Plural of Nouns",
    section: "Части речи",
    theory: "Большинство английских существительных образуют множественное число путём добавления окончания -s. Однако есть ряд правил и исключений, которые необходимо знать.",
    rules: [
      "Большинство слов: +s (book → books, cat → cats)",
      "После s, ss, sh, ch, x, z: +es (bus → buses, box → boxes)",
      "Слова на -y после согласной: -y → -ies (city → cities, baby → babies)",
      "Слова на -y после гласной: +s (boy → boys, day → days)",
      "Слова на -f/-fe: -f → -ves (knife → knives, life → lives)",
      "Слова на -o после согласной: +es (potato → potatoes, tomato → tomatoes)",
      "Исключения: man → men, woman → women, child → children, foot → feet, tooth → teeth, mouse → mice"
    ],
    examples: [
      "One book — two books",
      "One bus — two buses",
      "One city — many cities",
      "One knife — two knives",
      "One man — two men, One child — three children"
    ],
    exercises: [
      { id: 1, question: "One box — two ___", options: ["boxs", "boxes", "boxies", "box"], correctAnswer: "boxes", hint: "После x добавляется -es" },
      { id: 2, question: "One baby — three ___", options: ["babys", "babies", "babyes", "baby"], correctAnswer: "babies", hint: "-y после согласной → -ies" },
      { id: 3, question: "One knife — two ___", options: ["knifes", "knives", "knivs", "knife"], correctAnswer: "knives", hint: "-fe → -ves" },
      { id: 4, question: "One child — five ___", options: ["childs", "childrens", "children", "child"], correctAnswer: "children", hint: "child — исключение: children" },
      { id: 5, question: "One potato — two ___", options: ["potatos", "potatoes", "potatoies", "potato"], correctAnswer: "potatoes", hint: "-o после согласной → -es" },
      { id: 6, question: "One boy — four ___", options: ["boys", "boies", "boyes", "boy"], correctAnswer: "boys", hint: "-y после гласной → просто +s" },
      { id: 7, question: "One tooth — all ___", options: ["tooths", "toothes", "teeth", "teeths"], correctAnswer: "teeth", hint: "tooth — исключение: teeth" },
      { id: 8, question: "One church — two ___", options: ["churchs", "churches", "churchies", "church"], correctAnswer: "churches", hint: "После ch добавляется -es" },
      { id: 9, question: "One man — three ___", options: ["mans", "men", "mens", "man"], correctAnswer: "men", hint: "man — исключение: men" },
      { id: 10, question: "One woman — two ___", options: ["womans", "women", "womens", "woman"], correctAnswer: "women", hint: "woman — исключение: women" },
      { id: 11, question: "One foot — two ___", options: ["foots", "feet", "feets", "foot"], correctAnswer: "feet", hint: "foot — исключение: feet" },
      { id: 12, question: "One mouse — many ___", options: ["mouses", "mice", "mices", "mouse"], correctAnswer: "mice", hint: "mouse — исключение: mice" },
      { id: 13, question: "One city — many ___", options: ["citys", "cities", "cityes", "city"], correctAnswer: "cities", hint: "-y после согласной → -ies" },
      { id: 14, question: "One day — seven ___", options: ["days", "daies", "daes", "day"], correctAnswer: "days", hint: "-y после гласной → +s" },
      { id: 15, question: "One bus — five ___", options: ["buss", "buses", "busies", "bus"], correctAnswer: "buses", hint: "После s добавляется -es" },
      { id: 16, question: "One life — two ___", options: ["lifes", "lives", "livs", "life"], correctAnswer: "lives", hint: "-fe → -ves" },
      { id: 17, question: "One tomato — three ___", options: ["tomatos", "tomatoes", "tomatoies", "tomato"], correctAnswer: "tomatoes", hint: "-o после согласной → -es" },
      { id: 18, question: "One wish — many ___", options: ["wishs", "wishes", "wishies", "wish"], correctAnswer: "wishes", hint: "После sh добавляется -es" },
      { id: 19, question: "One photo — two ___", options: ["photos", "photoes", "photoies", "photo"], correctAnswer: "photos", hint: "photo — исключение: просто +s" },
      { id: 20, question: "One leaf — many ___", options: ["leafs", "leaves", "leafes", "leaf"], correctAnswer: "leaves", hint: "-f → -ves" }
    ]
  },
  {
    id: "pronouns",
    title: "Личные и притяжательные местоимения",
    titleEn: "Personal and Possessive Pronouns",
    section: "Части речи",
    theory: "Личные местоимения используются как субъект действия (I, you, he, she, it, we, they). Притяжательные местоимения показывают принадлежность (my, your, his, her, its, our, their).",
    rules: [
      "Личные: I, you, he, she, it, we, they",
      "Объектные: me, you, him, her, it, us, them",
      "Притяжательные: my, your, his, her, its, our, their",
      "Абсолютные притяжательные: mine, yours, his, hers, its, ours, theirs",
      "Возвратные: myself, yourself, himself, herself, itself, ourselves, themselves"
    ],
    examples: [
      "I like my book. — Мне нравится моя книга.",
      "Give it to him. — Дай ему это.",
      "This is her house. — Это её дом.",
      "The book is mine. — Эта книга — моя.",
      "They enjoyed themselves. — Им было весело."
    ],
    exercises: [
      { id: 1, question: "This is ___ book. (I)", options: ["my", "me", "I", "mine"], correctAnswer: "my", hint: "Перед существительным → притяжательное местоимение" },
      { id: 2, question: "Give ___ the pen, please. (she)", options: ["she", "her", "hers", "his"], correctAnswer: "her", hint: "После глагола → объектное местоимение" },
      { id: 3, question: "___ is a good student. (he)", options: ["Him", "His", "He", "Hers"], correctAnswer: "He", hint: "Субъект действия → личное местоимение" },
      { id: 4, question: "The car is ___. (we)", options: ["we", "us", "our", "ours"], correctAnswer: "ours", hint: "Без существительного после → абсолютное притяжательное" },
      { id: 5, question: "The cat hurt ___. (it)", options: ["it", "its", "itself", "himself"], correctAnswer: "itself", hint: "Действие направлено на себя → возвратное" },
      { id: 6, question: "___ names are Tom and Jerry. (they)", options: ["They", "Them", "Their", "Theirs"], correctAnswer: "Their", hint: "Перед существительным → притяжательное" },
      { id: 7, question: "Is this pen ___? (you)", options: ["you", "your", "yours", "yourself"], correctAnswer: "yours", hint: "Без существительного → абсолютное притяжательное" },
      { id: 8, question: "___ dog is very big. (she)", options: ["She", "Her", "Hers", "Herself"], correctAnswer: "Her", hint: "Перед существительным → притяжательное" },
      { id: 9, question: "I made this cake ___. (I)", options: ["myself", "me", "my", "mine"], correctAnswer: "myself", hint: "Сам(а) сделал → возвратное" },
      { id: 10, question: "Tell ___ the truth. (they)", options: ["they", "them", "their", "theirs"], correctAnswer: "them", hint: "После глагола → объектное" },
      { id: 11, question: "___ house is on the hill. (we)", options: ["We", "Us", "Our", "Ours"], correctAnswer: "Our", hint: "Перед существительным → притяжательное" },
      { id: 12, question: "The children enjoyed ___. (they)", options: ["they", "them", "their", "themselves"], correctAnswer: "themselves", hint: "Наслаждались (чем?) → возвратное" },
      { id: 13, question: "This book is ___. (she)", options: ["she", "her", "hers", "herself"], correctAnswer: "hers", hint: "Без существительного → абсолютное притяжательное" },
      { id: 14, question: "___ is raining outside. (it)", options: ["It", "Its", "Itself", "It's"], correctAnswer: "It", hint: "Субъект безличного предложения → It" },
      { id: 15, question: "The dog wagged ___ tail. (it)", options: ["it", "its", "itself", "it's"], correctAnswer: "its", hint: "Перед существительным → притяжательное (без ')" },
      { id: 16, question: "Please, help ___ with this task. (I)", options: ["I", "my", "me", "mine"], correctAnswer: "me", hint: "После глагола → объектное" },
      { id: 17, question: "___ brother is a doctor. (he)", options: ["He", "Him", "His", "Hers"], correctAnswer: "His", hint: "Перед существительным → притяжательное" },
      { id: 18, question: "We taught ___ to cook. (we)", options: ["we", "us", "our", "ourselves"], correctAnswer: "ourselves", hint: "Сами научились → возвратное" },
      { id: 19, question: "I don't like ___ idea. (he)", options: ["he", "him", "his", "himself"], correctAnswer: "his", hint: "Перед существительным → притяжательное" },
      { id: 20, question: "These books are ___. (we)", options: ["we", "us", "our", "ours"], correctAnswer: "ours", hint: "Без существительного → абсолютное" }
    ]
  },
  {
    id: "prepositions",
    title: "Предлоги времени и места",
    titleEn: "Prepositions of Time and Place",
    section: "Части речи",
    theory: "Предлоги in, on, at используются для обозначения времени и места. Выбор предлога зависит от контекста и устойчивых выражений.",
    rules: [
      "at + конкретное время: at 5 o'clock, at noon, at night",
      "on + дни и даты: on Monday, on May 1st, on my birthday",
      "in + месяцы, годы, сезоны, части дня: in May, in 2024, in summer, in the morning",
      "at + место: at school, at work, at home, at the station",
      "in + закрытое пространство: in the room, in the car, in London",
      "on + поверхность: on the table, on the wall, on the bus"
    ],
    examples: [
      "I wake up at 7 o'clock. — Я просыпаюсь в 7 часов.",
      "We have lessons on Monday. — У нас занятия в понедельник.",
      "She was born in 1990. — Она родилась в 1990 году.",
      "The book is on the table. — Книга на столе.",
      "He is at work now. — Он сейчас на работе."
    ],
    exercises: [
      { id: 1, question: "I get up ___ 7 o'clock.", options: ["in", "on", "at", "—"], correctAnswer: "at", hint: "Конкретное время → at" },
      { id: 2, question: "My birthday is ___ March.", options: ["at", "on", "in", "—"], correctAnswer: "in", hint: "Месяцы → in" },
      { id: 3, question: "We don't go to school ___ Sunday.", options: ["at", "in", "on", "—"], correctAnswer: "on", hint: "Дни недели → on" },
      { id: 4, question: "The picture is ___ the wall.", options: ["in", "at", "on", "—"], correctAnswer: "on", hint: "Поверхность → on" },
      { id: 5, question: "She lives ___ London.", options: ["at", "on", "in", "—"], correctAnswer: "in", hint: "Города и страны → in" },
      { id: 6, question: "He is ___ home now.", options: ["in", "on", "at", "—"], correctAnswer: "at", hint: "at home — устойчивое выражение" },
      { id: 7, question: "I was born ___ 1995.", options: ["at", "on", "in", "—"], correctAnswer: "in", hint: "Годы → in" },
      { id: 8, question: "We met ___ a cold winter morning.", options: ["at", "in", "on", "—"], correctAnswer: "on", hint: "Конкретное утро/день → on" },
      { id: 9, question: "The keys are ___ the table.", options: ["in", "at", "on", "—"], correctAnswer: "on", hint: "На поверхности → on" },
      { id: 10, question: "She arrived ___ Monday.", options: ["at", "in", "on", "—"], correctAnswer: "on", hint: "Дни → on" },
      { id: 11, question: "I'll see you ___ the morning.", options: ["at", "on", "in", "—"], correctAnswer: "in", hint: "Части дня → in" },
      { id: 12, question: "The meeting is ___ 3 p.m.", options: ["in", "on", "at", "—"], correctAnswer: "at", hint: "Конкретное время → at" },
      { id: 13, question: "He is ___ work right now.", options: ["in", "on", "at", "—"], correctAnswer: "at", hint: "at work — устойчивое выражение" },
      { id: 14, question: "There are many fish ___ the sea.", options: ["on", "at", "in", "—"], correctAnswer: "in", hint: "Внутри среды → in" },
      { id: 15, question: "My birthday is ___ 5th of May.", options: ["at", "in", "on", "—"], correctAnswer: "on", hint: "Конкретная дата → on" },
      { id: 16, question: "We usually go skiing ___ winter.", options: ["at", "on", "in", "—"], correctAnswer: "in", hint: "Сезоны → in" },
      { id: 17, question: "The cat is hiding ___ the bed.", options: ["on", "at", "under", "—"], correctAnswer: "under", hint: "Под кроватью → under" },
      { id: 18, question: "She is waiting ___ the bus stop.", options: ["in", "on", "at", "—"], correctAnswer: "at", hint: "Точка/место → at" },
      { id: 19, question: "I'll call you ___ the evening.", options: ["at", "on", "in", "—"], correctAnswer: "in", hint: "Части дня → in" },
      { id: 20, question: "Let's meet ___ the corner of the street.", options: ["in", "on", "at", "—"], correctAnswer: "at", hint: "Точка/место встречи → at" }
    ]
  },
  {
    id: "comparatives",
    title: "Сравнительная и превосходная степень прилагательных",
    titleEn: "Comparative and Superlative Degrees",
    section: "Части речи",
    theory: "Прилагательные в английском языке имеют степени сравнения. Короткие прилагательные образуют степени с помощью окончаний -er/-est, длинные — с помощью more/most.",
    rules: [
      "Короткие (1 слог): +er (tall → taller), +est (tall → the tallest)",
      "На -y: -y → -ier/-iest (happy → happier → the happiest)",
      "Длинные (2+ слога): more + adj (beautiful → more beautiful)",
      "Превосходная: the most + adj (the most beautiful)",
      "Исключения: good → better → the best, bad → worse → the worst, far → farther → the farthest",
      "Конструкция: as...as (такой же...как), not as...as (не такой...как)"
    ],
    examples: [
      "She is taller than me. — Она выше меня.",
      "This is the most interesting book. — Это самая интересная книга.",
      "He is more intelligent than his brother. — Он умнее своего брата.",
      "Today is colder than yesterday. — Сегодня холоднее, чем вчера.",
      "She is as tall as her mother. — Она такая же высокая, как её мама."
    ],
    exercises: [
      { id: 1, question: "My brother is ___ than me. (tall)", options: ["more tall", "taller", "tallest", "most tall"], correctAnswer: "taller", hint: "Короткое прилагательное → -er" },
      { id: 2, question: "This is ___ book I've ever read. (good)", options: ["the better", "the best", "the goodest", "more good"], correctAnswer: "the best", hint: "good — исключение: good-better-the best" },
      { id: 3, question: "She is ___ than her sister. (beautiful)", options: ["beautifuler", "more beautiful", "most beautiful", "beautifuller"], correctAnswer: "more beautiful", hint: "Длинное прилагательное → more" },
      { id: 4, question: "He is the ___ student in the class. (smart)", options: ["more smart", "smartest", "most smart", "smarter"], correctAnswer: "smartest", hint: "Короткое прилагательное → -est" },
      { id: 5, question: "Today is ___ than yesterday. (cold)", options: ["more cold", "colder", "coldest", "most cold"], correctAnswer: "colder", hint: "Короткое прилагательное → -er" },
      { id: 6, question: "She is ___ happy than before. (happy)", options: ["happyer", "happier", "more happy", "most happy"], correctAnswer: "happier", hint: "-y после согласной → -ier" },
      { id: 7, question: "This problem is ___ than that one. (difficult)", options: ["difficulter", "more difficult", "most difficult", "difficultest"], correctAnswer: "more difficult", hint: "Длинное прилагательное → more" },
      { id: 8, question: "He is as ___ as his father. (strong)", options: ["stronger", "strong", "most strong", "strongest"], correctAnswer: "strong", hint: "as...as — прилагательное в начальной форме" },
      { id: 9, question: "This is the ___ film I've seen. (bad)", options: ["badder", "worse", "the worst", "more bad"], correctAnswer: "the worst", hint: "bad — исключение: bad-worse-the worst" },
      { id: 10, question: "My house is ___ than yours. (big)", options: ["biger", "bigger", "more big", "biggest"], correctAnswer: "bigger", hint: "big — удвоение согласной + er" },
      { id: 11, question: "She is the ___ girl in the school. (pretty)", options: ["prettier", "prettiest", "most pretty", "more pretty"], correctAnswer: "prettiest", hint: "-y → -iest в превосходной степени" },
      { id: 12, question: "English is ___ than I thought. (easy)", options: ["easier", "more easy", "easiest", "most easy"], correctAnswer: "easier", hint: "-y → -ier в сравнительной" },
      { id: 13, question: "This task is not as ___ as that one. (hard)", options: ["harder", "hard", "hardest", "more hard"], correctAnswer: "hard", hint: "not as...as — начальная форма" },
      { id: 14, question: "He is the ___ person I know. (kind)", options: ["kinder", "kindest", "most kind", "more kind"], correctAnswer: "kindest", hint: "Короткое → -est" },
      { id: 15, question: "This car is ___ than mine. (expensive)", options: ["expensiver", "more expensive", "most expensive", "expensivest"], correctAnswer: "more expensive", hint: "Длинное → more" },
      { id: 16, question: "Today is ___ than Monday. (hot)", options: ["hoter", "hotter", "more hot", "hottest"], correctAnswer: "hotter", hint: "hot — удвоение t + er" },
      { id: 17, question: "She is ___ than her friend. (thin)", options: ["thiner", "thinner", "more thin", "thinnest"], correctAnswer: "thinner", hint: "thin — удвоение n + er" },
      { id: 18, question: "This is the ___ museum in the city. (large)", options: ["larger", "largest", "more large", "most large"], correctAnswer: "largest", hint: "large → largest (просто +st)" },
      { id: 19, question: "My English is ___ than before. (good)", options: ["gooder", "better", "best", "more good"], correctAnswer: "better", hint: "good — исключение: better" },
      { id: 20, question: "This exercise is ___ than the last one. (interesting)", options: ["interestinger", "more interesting", "most interesting", "interestingest"], correctAnswer: "more interesting", hint: "Длинное → more" }
    ]
  }
];

import { additionalTopics } from './additionalTopics';

export const allTopics: GrammarTopic[] = [...grammarTopics, ...additionalTopics];

export const sections = [...new Set(allTopics.map(t => t.section))];
