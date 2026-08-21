export type Lang = 'en' | 'es'
export type Theme = 'light' | 'dark'

export type Pillar = {
  num: string
  title: string
  body: string
}

/** A paragraph, or a bulleted list of items. */
export type PrivacyBlock = string | string[]

export type PrivacySection = {
  num: string
  title: string
  body: PrivacyBlock[]
}

export type PrivacyCopy = {
  linkLabel: string
  eyebrow: string
  title: string
  updatedLabel: string
  updated: string
  intro: string
  sections: PrivacySection[]
  contactNum: string
  contactTitle: string
  contactBody: string
  contactEmailLabel: string
  contactPhoneLabel: string
  contactAddressLabel: string
  backHome: string
}

export type Copy = {
  navProgram: string
  navPatients: string
  navSupport: string
  cta: string
  eyebrow: string
  h1a: string
  h1b: string
  sub: string
  ctaPrimary: string
  ctaSecondary: string
  metaKey1: string
  metaVal1: string
  metaKey2: string
  metaVal2: string
  marquee: string[]
  h2: string
  h2sub: string
  pillars: Pillar[]
  closing: string
  footer: string
  privacy: PrivacyCopy
}

/** From the Aviso de Privacidad Integral — these appear verbatim on /privacidad. */
export const PRIVACY_CONTACT = {
  email: 'privacidad@contigo.care',
  phone: '55 6944 0696',
  address:
    'Valentín Gómez Farías 9, Colonia Altavista, Álvaro Obregón, Ciudad de México, México, CP 01060',
} as const

export const COPY: Record<Lang, Copy> = {
  en: {
    navProgram: 'Program',
    navPatients: 'For patients',
    navSupport: 'Support',
    cta: 'Get started',
    eyebrow: 'Patient support programs',
    h1a: 'Care that stays with you, from',
    h1b: 'first dose onward',
    sub: 'Contigo Care runs patient support programs for therapies that need more than a prescription: enrollment, adherence coaching, and bilingual care navigation in one place.',
    ctaPrimary: 'Enroll a patient',
    ctaSecondary: 'Talk to our team',
    metaKey1: 'Languages',
    metaVal1: 'EN / ES',
    metaKey2: 'Care team',
    metaVal2: 'Nurse-led',
    marquee: [
      '94% enrollment completion',
      '24/7 nurse line',
      'Bilingual care navigators',
      'HIPAA compliant',
    ],
    h2: 'Everything a patient needs to stay on therapy',
    h2sub: 'One coordinated program covering the moments where patients usually fall off.',
    pillars: [
      {
        num: '[01]',
        title: 'Enrollment',
        body: 'Benefit checks, prior authorization, and paperwork handled by a coordinator, not the patient.',
      },
      {
        num: '[02]',
        title: 'Adherence',
        body: "Refill reminders, check-in calls, and dose tracking that fit the patient's real routine.",
      },
      {
        num: '[03]',
        title: 'Care navigation',
        body: "A named navigator who speaks the patient's language and knows their treatment plan.",
      },
      {
        num: '[04]',
        title: 'Financial support',
        body: "Copay assistance and foundation matching, screened and applied for on the patient's behalf.",
      },
    ],
    closing: 'Start a program with us.',
    footer: 'All rights reserved',
    privacy: {
      linkLabel: 'Privacy notice',
      eyebrow: 'Legal',
      title: 'Privacy notice',
      updatedLabel: 'Last updated',
      updated: 'August 20, 2026',
      intro:
        'Contigo Care operates a digital care platform for the pharmaceutical industry that combines artificial intelligence tools with care and supervision by human staff.',
      sections: [
        {
          num: '[01]',
          title: 'Identity and address of the data controller',
          body: [
            'Home Care Technologies, S.A.P.I. de C.V. (hereinafter, “Contigo Care”), with address at Valentín Gómez Farías 9, Colonia Altavista, Álvaro Obregón, Mexico City, Mexico, CP 01060, is responsible for the processing and protection of the personal data it collects through the contigo.care website and the support channels associated with the service.',
          ],
        },
        {
          num: '[02]',
          title: 'Personal data we collect',
          body: [
            'Contigo Care may collect, directly or indirectly, the following personal data:',
            [
              'First name',
              'Last name',
              'Gender',
              'Date of birth',
              'Email address',
              'Phone number',
              'Address',
              'Insurance policy information',
              'The prescription for your treatment, along with the information it contains',
              'Information about your treatment, your condition and your interaction with them, as well as with previous treatments',
              'Appointments, including date and time',
              'Clinical information directly related to the support and follow-up of your treatment',
              'Messages, queries, requests, comments and any other information the data subject provides during the interaction',
              'Technical data about browsing and use of the platform, where necessary for its operation, security and improvement',
            ],
            'Likewise, based on the information the user shares, Contigo Care may collect sensitive personal data, in particular data relating to health status, symptoms, treatments, conditions, medications, clinical information, patient data or other health information.',
            'Contigo Care asks that you not provide information that is not necessary to handle the corresponding request or interaction.',
          ],
        },
        {
          num: '[03]',
          title: 'Purposes of processing',
          body: [
            'Personal data will be processed for the following primary and necessary purposes:',
            [
              'Identify and contact the user',
              'Receive, manage, send reminders about and follow up on queries, requests, reports or communications made through the platform',
              'Provide the digital care service contracted by the corresponding pharmaceutical client',
              'Manage and confirm shipments',
              'Route the interaction to human agents when necessary',
              'Record, monitor, assure the quality of and follow up on conversations',
              'Manage pharmacovigilance, quality, safety or other reports linked to pharmaceutical products, where applicable',
              'Prevent, investigate and respond to security incidents, fraud, misuse or breaches of the terms of use',
              'Comply with applicable legal, regulatory and contractual obligations',
              'Handle requests to exercise ARCO rights',
            ],
            'In addition, with your consent where required, Contigo Care may process the data for the following secondary purposes:',
            [
              'Analyze usage patterns and interactions in order to improve the care experience',
              'Evaluate, develop, train, tune, validate and improve the artificial intelligence models, features and tools used on the platform',
              'Produce metrics, analysis and statistics, seeking to apply dissociation or anonymization measures where appropriate',
            ],
            'If you do not want your data processed for the secondary purposes, you may say so by emailing privacidad@contigo.care with the subject line “Negativa de finalidades secundarias”. Refusing will not affect the delivery of the primary purposes.',
          ],
        },
        {
          num: '[04]',
          title: 'Recording of interactions and use of artificial intelligence',
          body: [
            'Conversations, calls, chats, messages and other interactions carried out through the platform may be recorded, logged and stored for the purposes described in this notice.',
            'Care may be provided in whole or in part through artificial intelligence systems, and may be complemented, reviewed or continued by authorized human staff. Data provided during interactions may be analyzed by such systems to generate responses, classify requests, support care and improve the performance, quality and security of the service.',
            'Where processing involves sensitive personal data, Contigo Care will request the data subject’s express consent through the mechanisms enabled on the platform or during the interaction. By granting it, the data subject acknowledges that their sensitive data may be processed in accordance with this notice and exclusively for the purposes set out here.',
          ],
        },
        {
          num: '[05]',
          title: 'Transfers and remittances of personal data',
          body: [
            'Contigo Care may carry out national or international remittances and transfers of personal data, including sensitive personal data, to the following categories of recipients:',
            [
              'Pharmaceutical clients, in order to handle the query, request, report or interaction linked to their products, services or programs',
              'Technology providers, including providers of hosting, infrastructure, storage, communications, cybersecurity, analytics, support, AI tools and information processing, acting on behalf of and under the instructions of Contigo Care or of the pharmaceutical client',
              'Affiliated companies, subsidiaries, parent companies or companies under common control, where necessary for the operation and support of the service',
              'Competent authorities, where there is an applicable legal or regulatory obligation or a well-founded request',
            ],
            'Transfers requiring consent will be carried out only where it has been obtained through the enabled mechanisms. The data subject may object to transfers requiring consent by emailing privacidad@contigo.care with the subject line “Negativa de transferencias”.',
            'Data recipients are obliged to treat the data confidentially and in accordance with the purposes that justify the remittance or transfer, and to apply security and protection measures appropriate to the nature of the information.',
          ],
        },
        {
          num: '[06]',
          title: 'ARCO rights and withdrawal of consent',
          body: [
            'The data subject, or their legal representative, may exercise their rights of Access, Rectification, Cancellation or Opposition to the processing of their personal data (“ARCO rights”), and may request the withdrawal of their consent, by sending a request to:',
            ['Email: privacidad@contigo.care', 'Phone: 55 6944 0696'],
            'The request must contain at least: the data subject’s name; a means of communicating the response; documents proving identity or representation, where applicable; a clear description of the data in respect of which a right is being exercised; the right being exercised; and any information that helps locate the data.',
            'Contigo Care will process the request within the time limits set by applicable law. Withdrawal of consent does not have retroactive effect and may be limited where processing is necessary to comply with applicable legal, regulatory, contractual or public-interest obligations.',
          ],
        },
        {
          num: '[07]',
          title: 'Limiting the use or disclosure of personal data',
          body: [
            'The data subject may request that the use or disclosure of their personal data be limited by emailing privacidad@contigo.care with the subject line “Limitación de uso o divulgación”. Contigo Care will log the request and apply the measures that are appropriate given the nature of the processing and the applicable obligations.',
          ],
        },
        {
          num: '[08]',
          title: 'Security and retention measures',
          body: [
            'Contigo Care implements reasonable administrative, technical and physical measures to protect personal data against damage, loss, alteration, destruction, and unauthorized use, access or processing.',
            'Personal data will be retained for as long as necessary to fulfil the purposes described, the applicable legal, regulatory and contractual obligations, and the corresponding limitation periods. Afterwards, Contigo Care will delete, block, dissociate or anonymize it, as appropriate.',
          ],
        },
        {
          num: '[09]',
          title: 'Use of tracking technologies',
          body: [
            'The site may use cookies, pixels, server logs or other technologies to recognize preferences, maintain the operation and security of the site, generate statistics and improve the browsing experience. Users can configure their browser to limit or disable such technologies; however, some site features may be affected.',
          ],
        },
        {
          num: '[10]',
          title: 'Changes to this privacy notice',
          body: [
            'Contigo Care may modify or update this privacy notice to reflect legal, regulatory or operational changes, or changes in its processing practices. Modifications will be made available at contigo.care or through the means Contigo Care determines.',
          ],
        },
      ],
      contactNum: '[11]',
      contactTitle: 'Contact',
      contactBody:
        'For any questions about this privacy notice or about the processing of personal data, you can contact Contigo Care through:',
      contactEmailLabel: '+ Email',
      contactPhoneLabel: '+ Phone',
      contactAddressLabel: '+ Address',
      backHome: 'Back to home',
    },
  },
  es: {
    navProgram: 'Programa',
    navPatients: 'Para pacientes',
    navSupport: 'Apoyo',
    cta: 'Comenzar',
    eyebrow: 'Programas de apoyo al paciente',
    h1a: 'Cuidado que te acompaña desde',
    h1b: 'la primera dosis',
    sub: 'Contigo Care gestiona programas de apoyo para terapias que necesitan más que una receta: inscripción, acompañamiento en la adherencia y navegación de cuidado bilingüe en un solo lugar.',
    ctaPrimary: 'Inscribir un paciente',
    ctaSecondary: 'Hablar con el equipo',
    metaKey1: 'Idiomas',
    metaVal1: 'EN / ES',
    metaKey2: 'Equipo',
    metaVal2: 'Enfermería',
    marquee: [
      '94% de inscripciones completadas',
      'Línea de enfermería 24/7',
      'Navegadores bilingües',
      'Cumple con HIPAA',
    ],
    h2: 'Todo lo que un paciente necesita para seguir su terapia',
    h2sub: 'Un programa coordinado que cubre los momentos donde los pacientes suelen abandonar.',
    pillars: [
      {
        num: '[01]',
        title: 'Inscripción',
        body: 'Verificación de beneficios, autorizaciones y trámites que resuelve un coordinador, no el paciente.',
      },
      {
        num: '[02]',
        title: 'Adherencia',
        body: 'Recordatorios de recarga, llamadas de seguimiento y registro de dosis según su rutina real.',
      },
      {
        num: '[03]',
        title: 'Navegación',
        body: 'Un navegador asignado que habla su idioma y conoce su plan de tratamiento.',
      },
      {
        num: '[04]',
        title: 'Apoyo financiero',
        body: 'Asistencia con copagos y fundaciones, gestionada en nombre del paciente.',
      },
    ],
    closing: 'Comienza un programa con nosotros.',
    footer: 'Todos los derechos reservados',
    privacy: {
      linkLabel: 'Aviso de privacidad',
      eyebrow: 'Legal',
      title: 'Aviso de Privacidad Integral',
      updatedLabel: 'Última actualización',
      updated: '20 de agosto de 2026',
      intro:
        'Contigo Care opera una plataforma de atención digital para la industria farmacéutica que combina herramientas de inteligencia artificial con atención y supervisión de personal humano.',
      sections: [
        {
          num: '[01]',
          title: 'Identidad y domicilio del responsable',
          body: [
            'Home Care Technologies, S.A.P.I. de C.V. (en lo sucesivo, “Contigo Care”), con domicilio en Valentín Gómez Farías 9, Colonia Altavista, Delegación Álvaro Obregón, Ciudad de México, México, CP 01060, es responsable del tratamiento y protección de los datos personales que recaba a través del sitio web contigo.care y de los canales de atención asociados al servicio.',
          ],
        },
        {
          num: '[02]',
          title: 'Datos personales que se recaban',
          body: [
            'Contigo Care podrá recabar, directa o indirectamente, los siguientes datos personales:',
            [
              'Nombre',
              'Apellidos',
              'Género',
              'Fecha de nacimiento',
              'Correo electrónico',
              'Número telefónico',
              'Dirección',
              'Información de la póliza de seguro',
              'Receta médica de tu tratamiento, así como la información que contiene',
              'Información sobre tu tratamiento, tu condición y tu interacción con estos mismos, así como con tratamientos anteriores',
              'Citas incluyendo fecha y hora',
              'Información clínica directamente relacionada con el acompañamiento para tu tratamiento y seguimiento del mismo',
              'Mensajes, consultas, solicitudes, comentarios y demás información que la persona titular proporcione durante la interacción',
              'Datos técnicos de navegación y uso de la plataforma, cuando resulten necesarios para su operación, seguridad y mejora',
            ],
            'Asimismo, conforme a la información que la persona usuaria comparta, Contigo Care podrá recabar datos personales sensibles, particularmente datos relativos al estado de salud, síntomas, tratamientos, padecimientos, medicamentos, información clínica, datos de pacientes u otra información de salud.',
            'Contigo Care solicita que no se proporcione información que no sea necesaria para la atención de la solicitud o interacción correspondiente.',
          ],
        },
        {
          num: '[03]',
          title: 'Finalidades del tratamiento',
          body: [
            'Los datos personales serán tratados para las siguientes finalidades primarias y necesarias:',
            [
              'Identificar y contactar a la persona usuaria',
              'Recibir, gestionar, recordar y dar seguimiento a consultas, solicitudes, reportes o comunicaciones realizadas mediante la plataforma',
              'Proporcionar el servicio de atención digital contratado por la farmacéutica cliente que corresponda',
              'Gestionar y confirmar envíos',
              'Canalizar la interacción a agentes humanos cuando sea necesario',
              'Registrar, monitorear, asegurar la calidad y dar seguimiento a las conversaciones',
              'Gestionar reportes de farmacovigilancia, calidad, seguridad u otras obligaciones vinculadas con productos farmacéuticos, cuando resulte aplicable',
              'Prevenir, investigar y atender incidentes de seguridad, fraude, uso indebido o incumplimiento de los términos de uso',
              'Cumplir obligaciones legales, regulatorias y contractuales aplicables',
              'Atender solicitudes para el ejercicio de derechos ARCO',
            ],
            'Además, con su consentimiento cuando sea exigible, Contigo Care podrá tratar los datos para las siguientes finalidades secundarias:',
            [
              'Analizar patrones de uso e interacciones para mejorar la experiencia de atención',
              'Evaluar, desarrollar, entrenar, ajustar, validar y mejorar los modelos, funcionalidades y herramientas de inteligencia artificial empleados en la plataforma',
              'Elaborar métricas, análisis y estadísticas, procurando aplicar medidas de disociación o anonimización cuando proceda',
            ],
            'Si no desea que sus datos se traten para las finalidades secundarias, podrá manifestarlo enviando un correo a privacidad@contigo.care con el asunto “Negativa de finalidades secundarias”. La negativa no afectará la prestación de las finalidades primarias.',
          ],
        },
        {
          num: '[04]',
          title: 'Grabación de interacciones y uso de inteligencia artificial',
          body: [
            'Las conversaciones, llamadas, chats, mensajes y demás interacciones efectuadas a través de la plataforma podrán ser grabadas, registradas y almacenadas para las finalidades descritas en este aviso.',
            'La atención podrá ser prestada total o parcialmente mediante sistemas de inteligencia artificial y podrá complementarse, revisarse o continuarse por personal humano autorizado. Los datos proporcionados durante las interacciones podrán ser analizados por tales sistemas para generar respuestas, clasificar solicitudes, apoyar la atención y mejorar el desempeño, calidad y seguridad del servicio.',
            'Cuando el tratamiento involucre datos personales sensibles, Contigo Care solicitará el consentimiento expreso de la persona titular mediante los mecanismos habilitados en la plataforma o durante la interacción. Al otorgarlo, la persona titular reconoce que sus datos sensibles podrán ser tratados conforme a este aviso y exclusivamente para las finalidades aquí previstas.',
          ],
        },
        {
          num: '[05]',
          title: 'Transferencias y remisiones de datos personales',
          body: [
            'Contigo Care podrá realizar remisiones y transferencias nacionales o internacionales de datos personales, incluyendo datos personales sensibles, a las siguientes categorías de destinatarios:',
            [
              'Farmacéuticas clientes para atender la consulta, solicitud, reporte o interacción vinculada con sus productos, servicios o programas',
              'Proveedores tecnológicos, incluidos proveedores de alojamiento, infraestructura, almacenamiento, comunicaciones, ciberseguridad, analítica, soporte, herramientas de IA y procesamiento de información, que actúen por cuenta e instrucciones de Contigo Care o de la farmacéutica cliente',
              'Empresas afiliadas, subsidiarias, controladoras o bajo control común, cuando resulte necesario para la operación y soporte del servicio',
              'Autoridades competentes, cuando exista una obligación legal, regulatoria o requerimiento fundado aplicable',
            ],
            'Las transferencias que requieran consentimiento se realizarán únicamente cuando éste haya sido obtenido mediante los mecanismos habilitados. La persona titular podrá manifestar su negativa a las transferencias que requieran consentimiento enviando un correo a privacidad@contigo.care con el asunto “Negativa de transferencias”.',
            'Los destinatarios de los datos estarán obligados a tratarlos de manera confidencial y conforme a las finalidades que justifican la remisión o transferencia, así como a aplicar medidas de seguridad y protección acordes con la naturaleza de la información.',
          ],
        },
        {
          num: '[06]',
          title: 'Derechos ARCO y revocación del consentimiento',
          body: [
            'La persona titular, o su representante legal, podrá ejercer sus derechos de Acceso, Rectificación, Cancelación u Oposición al tratamiento de sus datos personales (“derechos ARCO”), así como solicitar la revocación de su consentimiento, mediante una solicitud enviada a:',
            ['Correo electrónico: privacidad@contigo.care', 'Teléfono: 55 6944 0696'],
            'La solicitud deberá contener, al menos: nombre de la persona titular; medio para comunicar la respuesta; documentos que acrediten identidad o representación, cuando corresponda; descripción clara de los datos respecto de los cuales desea ejercer un derecho; el derecho que busca ejercer; y cualquier elemento que facilite la localización de los datos.',
            'Contigo Care dará trámite a la solicitud en los plazos previstos por la legislación aplicable. La revocación del consentimiento no tendrá efectos retroactivos y podrá estar limitada cuando el tratamiento sea necesario para cumplir obligaciones legales, regulatorias, contractuales o de interés público aplicables.',
          ],
        },
        {
          num: '[07]',
          title: 'Limitación del uso o divulgación de datos personales',
          body: [
            'La persona titular podrá solicitar la limitación del uso o divulgación de sus datos personales enviando un correo a privacidad@contigo.care con el asunto “Limitación de uso o divulgación”. Contigo Care registrará la solicitud y aplicará las medidas que resulten procedentes conforme a la naturaleza del tratamiento y las obligaciones aplicables.',
          ],
        },
        {
          num: '[08]',
          title: 'Medidas de seguridad y conservación',
          body: [
            'Contigo Care implementa medidas administrativas, técnicas y físicas razonables para proteger los datos personales contra daño, pérdida, alteración, destrucción, uso, acceso o tratamiento no autorizado.',
            'Los datos personales serán conservados durante el tiempo necesario para cumplir las finalidades descritas, las obligaciones legales, regulatorias y contractuales aplicables, y los plazos de prescripción que correspondan. Posteriormente, Contigo Care los suprimirá, bloqueará, disociará o anonimizará, según resulte procedente.',
          ],
        },
        {
          num: '[09]',
          title: 'Uso de tecnologías de rastreo',
          body: [
            'El sitio puede utilizar cookies, píxeles, registros de servidor u otras tecnologías para reconocer preferencias, mantener la operación y seguridad del sitio, generar estadísticas y mejorar la experiencia de navegación. La persona usuaria puede configurar su navegador para limitar o deshabilitar dichas tecnologías; sin embargo, algunas funciones del sitio podrían verse afectadas.',
          ],
        },
        {
          num: '[10]',
          title: 'Cambios al aviso de privacidad',
          body: [
            'Contigo Care podrá modificar o actualizar este aviso de privacidad para reflejar cambios legales, regulatorios, operativos o en sus prácticas de tratamiento. Las modificaciones estarán disponibles en contigo.care o en el medio que Contigo Care determine.',
          ],
        },
      ],
      contactNum: '[11]',
      contactTitle: 'Contacto',
      contactBody:
        'Para cualquier duda sobre este aviso de privacidad o sobre el tratamiento de datos personales, puede contactar a Contigo Care a través de:',
      contactEmailLabel: '+ Correo',
      contactPhoneLabel: '+ Teléfono',
      contactAddressLabel: '+ Domicilio',
      backHome: 'Volver al inicio',
    },
  },
}
