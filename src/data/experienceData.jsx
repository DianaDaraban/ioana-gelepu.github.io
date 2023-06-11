const experienceData = [
  {
    id: 1,
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
  {
    id: 11,
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
      text12:
        'în fața Consiliului Român pentru Publicitate, ca procedură de consultare înainte de emiterea unui act de către Consiliul Național al Audiovizualului',
      text13:
        'în fața Ministerului Finanțelor Publice, cu ocazia sesizării unor fapte de publicitate înșelătoare',
      text14:
        'în fața Consiliului Concurenței, sesizat cu fapte de concurență neloială',
      text15:
        'cu ocazia controalelor Curții de Conturi în legătură cu entități private care au utilizat bani publici',
      text16: 'în fața Consiliului Național pentru Combaterea Discriminării',
      text17: 'privind contestarea stabilirii impozitului suplimentar pe proﬁt',
      text18: 'recunoașterea dreptului de deducere a TVA',
      text19: 'contestarea impozitului datorat pentru anumite clădiri',
      text20:
        'contestarea debitelor impuse de Administrația Fondului pentru Mediu',
      text21:
        'înregistrarea din punct de vedere ﬁscal a unui consorțiu, ca efect al schimbării situației juridice constând într-o operațiune de fuziune transfrontalieră',
      text22: 'vizând anularea unor acte emise în procedurile de achiziție',
      text23:
        'legate de executarea obligațiilor izvorâte din contracte de achiziție',
      text24:
        'privind  executarea obligațiilor din contractul de delegare a gestiunii prin concesiune a serviciilor publice de salubritate',
      text25: 'vizând anularea sau executarea unor acte civile',
      text26: 'privind recunoașterea dreptului de proprietate',
      text27:
        'acțiuni confesorii legate de apărarea sau recunoașterea dreptului de servitute, superﬁcie, uz sau de uzufruct',
      text28: 'vizând obligarea la încheierea de contracte ',
      text29:
        'privind răspunderea civilă delictuală (inclusiv pentru fapta lucrului, a unui prepus sau afectarea dreptului la imagine)',
      text30: 'bazate pe plata nedatorată sau îmbogățirea fără justă cauză',
      text31: 'acțiuni posesorii',
      text32: 'evacuări',
      text33: 'privind demolarea unei construcții',
      text34: 'plângeri de carte Funciară',
      text35: 'contestații la executare',
      text36:
        'contestații împotriva refuzului executorului de a realiza un act de executare',
      text37:
        'contestații privind lămurirea, înțelesului, întinderii sau aplicării titlului executoriu',
      text38:
        'litigii privind daunele datorate ca efect al neexecutării unei obligații de a face sau de a nu face cu caracter strict personal',
      text39:
        'litigii privind acordarea de accesorii care se cuvin de drept creditorului',
      text40: 'apel împotriva încheierii de respingere a încuviințării silite',
      text41: 'anularea unor brevete de invenție',
      text42: 'anularea unor certiﬁcate de atestare a realizărilor tehnice',
      text43: 'obligarea la încetarea folosirii unei mărci',
      text44: 'plata de despăgubiri pentru folosirea ilicită a mărcii',
      text45: 'protecția drepturilor de autor',
      text46:
        'în fața curților de arbitraj de pe lângă Camerele de Comerț și Industrie',
      text47:
        'în fața Casei Naționale de Sănătate (izvorâte din raporturile furnizorilor de servicii medicale cu casele de asigurări)',
      text48:
        'procedura de contestare a hotărârilor arbitrale în fața instanțelor de drept comun',

      text49:
        'în fața TAS, ca urmare a retragerii licenței clubului şi retrogradării',
    },
  },
]

export default experienceData
