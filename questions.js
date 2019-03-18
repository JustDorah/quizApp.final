const test = [
    {
      question: 'The desire to maintain a safe laboratory environment for all begins with?',
      answers: [
        'prevention',
        'having fun',
        'microbiology',
        'accidents'
      ],
      correctAnswer:'prevention',
      icon: 'images.labsafety1.jpg',
      alt: 'image of laboratory safety',
      correctAnswerFeedback:'Laboratories are much more hazardous than the general workplace. So it is absolutely important that as we look for cures and technological breakthroughs, we should understand and know how to deal with each and every hazard within our laboratory and practice effective prevention.'
    },
    {
      question: 'Which of the following type(s) of Personal Protective Equipment (PPE) should be used?',
      answers: [
        'Safety glasses or face Shields',
        'Gloves',
        'Everything mentioned',
        'Lab Coats'
      ],
      correctAnswer: 'Everything mentioned',
      icon: 'images.labsafety2.png',
      alt: 'safety glasses, lab coats, shoes, and gloves are part of ones personal protective equipment',
      correctAnswerFeedback:'Personal protective equipment, commonly referred to as <strong> PPE </strong>, is equipment worn to minimize exposure to hazards that cause serious workplace injuries and illnesses. Examples of lab PPE include safety goggles, gloves, shoes, and a lab coat. It is important to note that in the hierarchy of hazard controls, PPE ranks last. Correct use of PPE is important for the safety of lab personnel, but it should not be the <strong><em>only</em></strong> safety mechanism used to protect laboratory personnel.'
    },
    {
      question: 'Which of these are considered good lab work practices',
      answers: [
        'smelling and tasting chemicals',
        'Wear appropriate clothing and tie back long hair',
        'not washing hands before and after lab',
        'working alone'
      ],
      correctAnswer:'Wear appropriate clothing and tie back long hair',
      icon: 'images.tiebackhair.png',
      alt: 'woman tying back hair',
      correctAnswerFeedback:'As mentioned, lab safety, while not sexy, should be a top priority for any laboratory. Lab managers must develop effective training programs, best-practices, and safety audits to minimize risk.'
    },
    {
      question: 'The sign below indicates what type of safety hazard? <br/> <img class="questionImg" src="images.biohazardSign3.png" alt="a safety hazard sign">',
      answers:[
        'Oxidizing hazard',
        'Biohazard',
        'Corrosion hazard',
        'Acute toxicity hazard'
      ],
      correctAnswer:'Biohazard',
      icon: 'images.biohazardSign3.png',
      alt: 'a safety hazard sign',
      correctAnswerFeedback:'Biohazard or biological hazard is a biological substance that poses a threat to the health of human beings and other living organisms. The symbol was developed by Charles Baldwin, and environmental-health engineer for the Dow Chemical Company, in 1966. The four circles within the symbol represent the chain of infections:<br/> <br/><strong>Agent:</strong> the type of microorganism that causes infection or hazardous condition. <br/><strong>Host:</strong> The organism in which the microorganism Infect. The new host must be susceptible.<br/><strong>Source:</strong> The host from which the microorganism originate. The carrier host might not show symptoms.<br/><strong>Transmission:</strong> The means of transmission, mostly direct or indirect. Some routes of transmission include air, insect, direct contact and contaminated surfaces.'
    },
    {
      question: 'Accidents often result from:',
      answers:[
        'lack of a working understanding of hazards',
        'failure to follow instructions',
        'distractions or an indifferent attitude',
        'all of the above'
      ],
      correctAnswer:'all of the above',
      icon: 'images.attention.jpg',
      alt: 'man writing on blackboard after explosion \"I will not mix chemicals unless I know what they are\"',
      correctAnswerFeedback:'Having a working understanding of the type of chemical, biological, and electrical hazards you work with; along with the risks that come with working with or besides them is one of the best ways to prevent lab accidents from occuring in the first place.'
    },
     {
      question:'What is the main cause of accidents in the lab?',
      answers:[
        'Bad procedures',
        'Humans',
        'Faulty machines',
        'The MAN'
      ],
      correctAnswer:'Humans',
      icon: 'images.humanbeing.png',
      alt: 'circle made of people holding hands',
      correctAnswerFeedback:'Human error is one of the main reasons accidents happen in the lab. And while this is true, it is very important to- <strong>one</strong> understand that most people want to do a good job and that <strong>two</strong> when we look deeper, most human errors are due to system failures.<br/>When we consider how humans play a part in causing accidents, it’s important to know the difference between active and latent errors. <strong>Active errors</strong> are pretty apparent, and happen at the point of contact between a human and an aspect of a larger system. <strong>Latent errors</strong> are less apparent and are failure of the organization or a design that contribute to the occurrence of error or accidents, in our particular case. Or in other words:<br/><br/><em>“The <strong>active</strong> error is that the pilot crashed the plane. The <strong>latent</strong> error is that a previously undiscovered design malfunction caused the plane to roll unexpectedly in a way the pilot could not control and the plane crashed.”</em> <br/><br/>In order to prevent future accidents, it is important to gain a full understanding of why they happen so that steps can be taken to circumvent them.'
    },
    {
      question:'How can complacency be mitigated?',
      answers:[
        'Recognition of exceptional service, is detrimental to a uniform lab. It will discourage others.',
        'Reducing employee suggestions, keeps them focused on their work and thereby safe',
        'Allowing the veterans to use shortcuts keeps them encouraged and engaged',
        'Continuous education on the importance of lab safety'
      ],
      correctAnswer:'Continuous education on the importance of lab safety',
      icon: 'images.science.jpg',
      alt: 'book with various scientific knowledge',
      correctAnswerFeedback:'Complacency tends to happen over time. Its when lab personnel grow out of touch with the hazards and risks around them. They become used to doing things a particular way and grow oblivious to the ever present hazards around them.'
    },
    {
      question:'When operating a fire extinguisher, remember the mnemonic PASS. PASS represents the steps used to properly operate the extinguisher and it stands for which of the following?',
      answers:[
        'Pull, Access, Seize, Sweep',
        'Plan, Access, Squeeze, Swing',
        'Pull, Aim, Squeeze, Sweep',
        'Pin, Aim, See, Swing'
        
      ],
      correctAnswer:'Pull, Aim, Squeeze, Sweep',
      icon: 'images.pass.jpg',
      alt: 'fire extinguishing procedure: P.A.S.S.',
      correctAnswerFeedback:'And before P.A.S.S there is <strong>R.A.C.E.</strong> An acronym to help personnel remember the correct order of response to a fire emergency.<br/> <strong>RESCUE:</strong> remove anyone in danger <br/><strong>ALARM:</strong> activate the nearest fire alarm <br/><strong>CONTAIN:</strong> confine the fire by closing the surrounding windows and doors <br/><strong>EXTINGUISH or EVACUATE:</strong> if the fire is small, you are properly trained, and you can extinguish it safely, use an extinguisher. If you are not trained in the use of the extinguisher or cannot safely extinguish the fire, evacuate'
    },
    {
      question:'An accident-response program must include:',
      answers:[
        'regular safety inspections',
        'accident reporting and investigation',
        'formal and regular response procedures',
        'all of the above'
      ],
      correctAnswer:'all of the above',
      icon: 'images.Safety1.jpg',
      alt: 'safety does not come with lucky. it has to be prepared',
      correctAnswerFeedback:'We believe in prevention—identifying and eliminating hazards before employees are hurt. But even with a comprehensive injury and illness prevention program, accidents still happen. And that is why some forethought and preplanning, i.e., developing a response plan, will help immensely when crisis hits'
    },
  ];
  
  