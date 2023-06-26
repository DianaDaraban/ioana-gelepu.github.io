const experienceData = [
  [
    {
      id: 1,
      title: 'Litigii comerciale',
      description:
        'dispute izvorâte din interpretarea sau executarea diferitelor categorii de contracte, inclusiv vizând rezoluțiunea/rezilierea acestora sau, dimpotrivă, contestarea unui astfel de act',
    },
    {
      id: 2,
      description: 'privind anularea unor contracte ',
    },
    {
      id: 3,
      description:
        'de drept societar, inclusiv privind anularea unor prevederi ale actului constitutiv, anularea hotărârilor AGA sau a deciziilor administratorului, angajarea răspunderii administratorului, prejudicii solicitate de administrator pentru revocarea abuzivă a mandatului',
    },
    {
      id: 4,
      description:
        'procedura recunoașterii și încuviințării unor hotărâri străine',
    },
    {
      id: 5,
      description:
        'în domeniul concurenței neloiale, inclusiv privind plata de despăgubiri și încetarea faptelor',
    },
    {
      id: 6,
      description: 'acțiuni oblice și pauliene',
    },
    {
      id: 7,
      description:
        'derivate din încălcarea obligației de bună-credință în cadrul negocierilor',
    },
    {
      id: 8,
      description: 'proceduri simpliﬁcate de recuperare a creanțelor',
    },
    {
      id: 9,
      description: 'măsuri asigurătorii',
    },
    {
      id: 10,
      description: 'anularea unor acte emise in procesele de privatizare',
    },
  ],
  [
    {
      id: 11,
      title: 'Litigii de contencios administrativ  și proceduri administrative',
      description:
        'vizând anularea și suspendarea actelor emise de autorități locale sau centrale și, după caz, obligarea la plata de despăgubiri pentru prejudiciile cauzate prin actele nelegale',
      text: {
        text1:
          'legate de securitatea împotriva incendiilor, veriﬁcările Autorității Naționale pentru Protecția Consumatorilor, Inspectoratului Teritorial de Muncă, Inspectoratului de Stat în Construcții, Casei Naționale de Sănătate sau Gărzii de Mediu',
        text2:
          ' în materia controalelor vizând fondurile europene sau cu ocazia celor efectuate de Curtea de Conturi',
        text3:
          'vizând deciziile Consiliului Național pentru Combaterea Discriminării',
        text4:
          'emise de Autoritatea Națională de Reglementare în Domeniul Energiei',
        text5: 'emise de Consiliul Național al Audiovizualului',
        text6:
          'în domeniul pieței de capital (privind sancțiuni aplicate, re-autorizarea și reorganizarea pieței Rasdaq, delistarea unei societăți)',
        text7:
          'în domeniul sumelor alocate de la buget fundațiilor de interes public',
        text8: ' în constatarea unui drept rezultat dintr-un act administrativ',
        text9: 'contestarea restricțiilor din perioada stării de alertă',
        text10:
          'derivate din contractul-cadru care reglementează condițiile acordării asistenței medicale în cadrul sistemului de asigurări sociale de sănătate',

        text11: 'cereri de suspendare a actului administrativ',
      },
    },
    {
      id: 12,
      description: 'proceduri administrative',
      text: {
        text12:
          'în fața Consiliului Român pentru Publicitate, ca procedură de consultare înainte de emiterea unui act de către Consiliul Național al Audiovizualului',
        text13:
          'în fața Ministerului Finanțelor Publice, cu ocazia sesizării unor fapte de publicitate înșelătoare',
        text14:
          'în fața Consiliului Concurenței, sesizat cu fapte de concurență neloială',
        text15:
          'cu ocazia controalelor Curții de Conturi în legătură cu entități private care au utilizat bani publici',
        text16: 'în fața Consiliului Național pentru Combaterea Discriminării',
      },
    },
    {
      id: 13,
      description: 'litigii fiscale',
      text: {
        text17:
          'privind contestarea stabilirii impozitului suplimentar pe proﬁt',
        text18: 'recunoașterea dreptului de deducere a TVA',
        text19: 'contestarea impozitului datorat pentru anumite clădiri',
        text20:
          'contestarea debitelor impuse de Administrația Fondului pentru Mediu',
        text21:
          'înregistrarea din punct de vedere ﬁscal a unui consorțiu, ca efect al schimbării situației juridice constând într-o operațiune de fuziune transfrontalieră',
      },
    },
    {
      id: 14,
      description:
        'achiziții publice și proceduri conexe privind suspendarea scrisorilor de garanție bancară',
      text: {
        text22: 'vizând anularea unor acte emise în procedurile de achiziție',
        text23:
          'legate de executarea obligațiilor izvorâte din contracte de achiziție',
        text24:
          'privind  executarea obligațiilor din contractul de delegare a gestiunii prin concesiune a serviciilor publice de salubritate',
      },
    },
  ],
  [
    {
      id: 15,
      title: 'Litigii de muncă',
      description:
        'privind contestarea deciziilor de concediere pentru motive neimputabile (ca urmare a restructurării individuale sau colective, precum și în situația salariatului devenit inapt din punct de vedere medical)',
    },
    {
      id: 16,
      description:
        'vizând contestarea deciziilor de concediere pentru motive imputabile',
    },
    {
      id: 17,
      description: 'având ca obiect încadrarea în grupe de muncă',
    },
    {
      id: 18,
      description: 'legate de despăgubiri ',
    },
    {
      id: 19,
      description:
        'tinzând la acordarea contravalorii orelor suplimentare sau a altor drepturi salariale',
    },
    {
      id: 20,
      description: 'în materia hărțuirii',
    },
    {
      id: 21,
      description: 'derivând din contracte de muncă cu termen limitat',
    },
    {
      id: 21,
      description:
        'privind recalificarea unor contracte civile ca și contracte de muncă',
    },
    {
      id: 22,
      description: 'legate de executarea contractelor colective de muncă ',
    },
    {
      id: 23,
      description:
        'vizând anularea demisiei sau a acordului de încetare a contractului individual de muncă, fiind invocată vicierea consimțământului',
    },
    {
      id: 24,
      description:
        'acțiuni de regres ca urmare a unor controale derulate de Curtea de Conturi',
    },
  ],
  [
    {
      id: 25,
      title: 'Litigii civile',
      description: 'vizând anularea sau executarea unor acte civile',
    },
    {
      id: 26,
      description: 'privind recunoașterea dreptului de proprietate',
    },
    {
      id: 27,
      description:
        'acțiuni confesorii legate de apărarea dreptului de servitute, superficie, uz sau de uzufruct',
    },
    {
      id: 28,
      description: 'vizând obligarea la încheierea de contracte ',
    },
    {
      id: 29,
      description:
        'privind răspunderea civilă delictuală (inclusiv pentru fapta lucrului, a unui prepus sau afectarea dreptului la imagine)',
    },
    {
      id: 30,
      description:
        'bazate pe plata nedatorată sau îmbogățirea fără justă cauză',
    },
    {
      id: 31,
      description: 'acțiuni posesorii',
    },

    {
      id: 32,
      description: 'evacuări',
    },
    {
      id: 33,
      description: 'privind demolarea unei construcții',
    },
    {
      id: 34,
      description: 'plângeri de carte Funciară',
    },
  ],
  [
    {
      id: 35,
      title:
        'Proceduri execuționale (demarate în baza unor hotărâri judecătorești sau a unor acte cărora legea le conferă caracter de titlu executoriu, inclusiv a unor cecuri și bilete la ordin) și litigii conexe',
      description: 'contestații la executare',
    },
    {
      id: 36,
      description:
        'contestații împotriva refuzului executorului de a realiza un act de executare',
    },
    {
      id: 37,
      description:
        'contestații privind lămurirea, înțelesului, întinderii sau aplicării titlului executoriu',
    },
    {
      id: 38,
      description:
        'litigii privind daunele datorate ca efect al neexecutării unei obligații de a face sau de a nu face cu caracter strict personal',
    },
    {
      id: 39,
      description:
        'litigii privind acordarea de accesorii care se cuvin de drept creditorului',
    },
    {
      id: 40,
      description:
        'apel împotriva încheierii de respingere a încuviințării silite',
    },
  ],
  [
    {
      id: 41,
      title: 'Litigii de proprietate intelectuală',
      description: 'anularea unor brevete de invenție',
    },
    {
      id: 42,
      description:
        'anularea unor certificate de atestare a realizărilor tehnice',
    },
    {
      id: 43,
      description:
        'drepturi patrimoniale izvorâte din utilizarea unor brevete de invenție sau a unor realizări tehnice',
    },
    {
      id: 44,
      description: 'obligarea la încetarea folosirii unei mărci',
    },
    {
      id: 45,
      description: 'plata de despăgubiri pentru folosirea ilicită a mărcii',
    },
    {
      id: 46,
      description: 'protecția drepturilor de autor',
    },
  ],
  [
    {
      id: 47,
      title: 'Arbitraje interne',
      description:
        'în fața curților de arbitraj de pe lângă Camerele de Comerț și Industrie',
    },
    {
      id: 48,
      description:
        'în fața Casei Naționale de Sănătate (izvorâte din raporturile furnizorilor de servicii medicale cu casele de asigurări) ',
    },
    {
      id: 49,
      description:
        '•	procedura de contestare a hotărârilor arbitrale în fața instanțelor de drept comun',
    },
  ],
  [
    {
      id: 50,
      title: 'Litigii privind procedura insolvenței',
    },
  ],
  [
    {
      id: 51,
      title: 'Litigii sportive',
      description:
        'în fața TAS, ca urmare a retragerii licenței clubului şi retrogradării ',
    },
  ],
  [
    {
      id: 52,
      title: 'Litigii privind malpraxis',
    },
  ],
  [
    {
      id: 53,
      title:
        'Dispute pre-litigioase care implică asistența acordată clientului în vederea unei poziționări optime în cadrul negocierilor purtate pe marginea unei situații potențial litigioase',
    },
  ],
]

export default experienceData
