export type Lang = 'en' | 'es'
export type Theme = 'light' | 'dark'

export type Pillar = {
  num: string
  title: string
  body: string
}

export type PrivacySection = {
  num: string
  title: string
  body: string[]
}

export type PrivacyCopy = {
  linkLabel: string
  eyebrow: string
  title: string
  updatedLabel: string
  updated: string
  intro: string
  sections: PrivacySection[]
  contactTitle: string
  contactBody: string
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
  metaKey3: string
  metaVal3: string
  marquee: string[]
  h2: string
  h2sub: string
  pillars: Pillar[]
  closing: string
  footer: string
  privacy: PrivacyCopy
}

/** Fill these in before the policy goes live — they appear verbatim on /privacidad. */
export const PRIVACY_CONTACT = {
  email: 'privacy@contigo.care',
  phone: '[phone number]',
  address: '[mailing address]',
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
    metaKey1: 'Coverage',
    metaVal1: 'All 50 states',
    metaKey2: 'Languages',
    metaVal2: 'EN / ES',
    metaKey3: 'Care team',
    metaVal3: 'Nurse-led',
    marquee: [
      '94% enrollment completion',
      '24/7 nurse line',
      'Bilingual care navigators',
      'HIPAA compliant',
      '180k patients supported',
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
      linkLabel: 'Privacy policy',
      eyebrow: 'Legal',
      title: 'Privacy policy',
      updatedLabel: 'Last updated',
      updated: 'August 20, 2026',
      intro:
        'Contigo Care operates patient support programs on behalf of patients, providers, and program sponsors. This policy explains what information we collect through our website and our programs, how we use it, who we share it with, and the choices you have. It covers contigo.care and the enrollment, adherence, and care navigation services we run.',
      sections: [
        {
          num: '[01]',
          title: 'Information we collect',
          body: [
            'Information you give us. Contact details (name, email, phone, mailing address), enrollment information, insurance and benefit details, prescriber and pharmacy information, financial information used to screen for copay or foundation assistance, language preference, and anything you tell a care navigator or write to us.',
            'Health information. When you enroll in a program, we collect health information needed to support your therapy: diagnosis, prescribed treatment, dosing and refill history, adherence check-in responses, and notes from calls with our nurses and navigators.',
            'Information we receive from others. Prescribers, pharmacies, health plans, program sponsors, and assistance foundations may send us information about your enrollment, coverage, and prescription status.',
            'Information collected automatically. When you visit our website we collect IP address, browser and device type, pages viewed, referring page, and interaction timestamps through cookies and similar technologies.',
          ],
        },
        {
          num: '[02]',
          title: 'How we use information',
          body: [
            'To enroll you in a program and verify your benefits, including prior authorization and coverage checks.',
            'To deliver program services: refill reminders, check-in calls, dose tracking, care navigation, and nurse line support.',
            'To screen for and apply to copay assistance and foundation programs on your behalf.',
            'To communicate with you about your program, respond to your questions, and provide bilingual support.',
            'To operate, secure, and improve our website and services, and to produce de-identified or aggregate reporting for program sponsors.',
            'To meet legal, regulatory, and adverse-event reporting obligations.',
          ],
        },
        {
          num: '[03]',
          title: 'Health information and HIPAA',
          body: [
            'For some programs we act as a business associate of a covered entity under the Health Insurance Portability and Accountability Act (HIPAA). Where that is the case, we handle protected health information under a business associate agreement and the covered entity’s Notice of Privacy Practices governs your rights in that information.',
            'For programs sponsored by a manufacturer rather than a health plan or provider, HIPAA may not apply. In those programs we handle your health information under this policy, under the authorization you sign at enrollment, and under applicable state health-privacy law.',
            'We do not sell health information, and we do not use it for advertising.',
          ],
        },
        {
          num: '[04]',
          title: 'How we share information',
          body: [
            'With your care team — prescribers, pharmacies, and health plans — to coordinate your therapy.',
            'With assistance foundations and copay program administrators when we apply for support on your behalf.',
            'With service providers who work for us under contract: hosting, communications, call center technology, and analytics. They may use your information only to perform services for us.',
            'With program sponsors, in de-identified or aggregate form. We share individually identifiable information with a sponsor only where you have authorized it or the law requires it.',
            'When required by law, or to report adverse events and product complaints to a manufacturer or regulator.',
            'In connection with a merger, acquisition, or sale of assets, subject to the protections in this policy.',
          ],
        },
        {
          num: '[05]',
          title: 'Cookies and analytics',
          body: [
            'Our website uses cookies and similar technologies to keep the site working, remember your language and theme preference, and understand how the site is used. You can block or delete cookies in your browser; parts of the site may not work as expected if you do.',
            'We honor Global Privacy Control and other browser-based opt-out signals where applicable law requires it.',
          ],
        },
        {
          num: '[06]',
          title: 'Security',
          body: [
            'We use administrative, technical, and physical safeguards to protect your information, including encryption in transit and at rest, role-based access controls, workforce training, and logging. No method of transmission or storage is completely secure, and we cannot guarantee absolute security.',
          ],
        },
        {
          num: '[07]',
          title: 'How long we keep information',
          body: [
            'We keep your information for as long as you are enrolled in a program and afterward for the period required by our contracts, by records-retention rules that apply to health and pharmaceutical services, and by applicable law. When information is no longer needed, we delete it or de-identify it.',
          ],
        },
        {
          num: '[08]',
          title: 'Your rights and choices',
          body: [
            'Depending on where you live and which program you are in, you may have the right to access, correct, delete, or receive a copy of your information; to know what we collect and share; to withdraw an authorization you signed; and to opt out of certain uses. We do not sell personal information and we do not share it for cross-context behavioral advertising.',
            'You can unsubscribe from marketing email at any time using the link in the message. Program and safety communications related to your therapy are not marketing, and you may continue to receive them while enrolled.',
            'To exercise a right, contact us using the details below. We will verify your identity before acting on the request and will not discriminate against you for making one.',
          ],
        },
        {
          num: '[09]',
          title: 'Children',
          body: [
            'Our website is not directed to children under 13, and we do not knowingly collect information from them there. Where a program supports a pediatric patient, we collect that patient’s information from a parent or legal guardian who enrolls on their behalf.',
          ],
        },
        {
          num: '[10]',
          title: 'Changes to this policy',
          body: [
            'We may update this policy as our programs and the law change. We will post the revised version on this page with a new "last updated" date, and where the change is material we will provide additional notice before it takes effect.',
          ],
        },
      ],
      contactTitle: 'Contact us',
      contactBody:
        'Questions about this policy, or want to exercise a privacy right? Reach our privacy team:',
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
    metaKey1: 'Cobertura',
    metaVal1: '50 estados',
    metaKey2: 'Idiomas',
    metaVal2: 'EN / ES',
    metaKey3: 'Equipo',
    metaVal3: 'Enfermería',
    marquee: [
      '94% de inscripciones completadas',
      'Línea de enfermería 24/7',
      'Navegadores bilingües',
      'Cumple con HIPAA',
      '180 mil pacientes atendidos',
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
      linkLabel: 'Política de privacidad',
      eyebrow: 'Legal',
      title: 'Política de privacidad',
      updatedLabel: 'Última actualización',
      updated: '20 de agosto de 2026',
      intro:
        'Contigo Care gestiona programas de apoyo al paciente en nombre de pacientes, profesionales de salud y patrocinadores de programas. Esta política explica qué información recopilamos a través de nuestro sitio web y de nuestros programas, cómo la usamos, con quién la compartimos y qué opciones tienes. Aplica a contigo.care y a los servicios de inscripción, adherencia y navegación de cuidado que operamos.',
      sections: [
        {
          num: '[01]',
          title: 'Información que recopilamos',
          body: [
            'Información que nos proporcionas. Datos de contacto (nombre, correo, teléfono, dirección postal), información de inscripción, datos de seguro y beneficios, información de tu médico y farmacia, información financiera que usamos para evaluar asistencia con copagos o fundaciones, idioma preferido y todo lo que le cuentes a un navegador de cuidado o nos escribas.',
            'Información de salud. Al inscribirte en un programa recopilamos la información de salud necesaria para apoyar tu terapia: diagnóstico, tratamiento recetado, historial de dosis y recargas, respuestas a las llamadas de seguimiento y notas de las conversaciones con nuestro personal de enfermería y navegación.',
            'Información que recibimos de terceros. Médicos, farmacias, planes de salud, patrocinadores de programas y fundaciones de asistencia pueden enviarnos información sobre tu inscripción, cobertura y estado de tu receta.',
            'Información recopilada automáticamente. Cuando visitas nuestro sitio recopilamos dirección IP, tipo de navegador y dispositivo, páginas vistas, página de origen y marcas de tiempo de interacción mediante cookies y tecnologías similares.',
          ],
        },
        {
          num: '[02]',
          title: 'Cómo usamos la información',
          body: [
            'Para inscribirte en un programa y verificar tus beneficios, incluidas autorizaciones previas y comprobaciones de cobertura.',
            'Para prestar los servicios del programa: recordatorios de recarga, llamadas de seguimiento, registro de dosis, navegación de cuidado y línea de enfermería.',
            'Para evaluar y solicitar en tu nombre asistencia con copagos y programas de fundaciones.',
            'Para comunicarnos contigo sobre tu programa, responder tus preguntas y brindarte apoyo bilingüe.',
            'Para operar, proteger y mejorar nuestro sitio y servicios, y para generar reportes anonimizados o agregados para los patrocinadores del programa.',
            'Para cumplir obligaciones legales, regulatorias y de reporte de eventos adversos.',
          ],
        },
        {
          num: '[03]',
          title: 'Información de salud y HIPAA',
          body: [
            'En algunos programas actuamos como socio comercial (business associate) de una entidad cubierta bajo la Ley HIPAA. En esos casos manejamos la información de salud protegida conforme a un acuerdo de socio comercial, y el Aviso de Prácticas de Privacidad de la entidad cubierta rige tus derechos sobre esa información.',
            'En programas patrocinados por un fabricante y no por un plan de salud o un profesional de salud, es posible que HIPAA no aplique. En esos programas manejamos tu información de salud conforme a esta política, a la autorización que firmas al inscribirte y a las leyes estatales de privacidad de salud aplicables.',
            'No vendemos información de salud ni la usamos con fines publicitarios.',
          ],
        },
        {
          num: '[04]',
          title: 'Con quién compartimos información',
          body: [
            'Con tu equipo de cuidado —médicos, farmacias y planes de salud— para coordinar tu terapia.',
            'Con fundaciones de asistencia y administradores de programas de copago cuando solicitamos apoyo en tu nombre.',
            'Con proveedores que trabajan para nosotros bajo contrato: alojamiento, comunicaciones, tecnología de centro de llamadas y analítica. Solo pueden usar tu información para prestarnos esos servicios.',
            'Con los patrocinadores del programa, de forma anonimizada o agregada. Compartimos información que te identifica con un patrocinador únicamente si lo has autorizado o si la ley lo exige.',
            'Cuando la ley lo requiere, o para reportar eventos adversos y quejas de producto a un fabricante o a una autoridad regulatoria.',
            'En el contexto de una fusión, adquisición o venta de activos, sujeto a las protecciones de esta política.',
          ],
        },
        {
          num: '[05]',
          title: 'Cookies y analítica',
          body: [
            'Nuestro sitio usa cookies y tecnologías similares para funcionar correctamente, recordar tu idioma y tu preferencia de tema, y entender cómo se usa el sitio. Puedes bloquear o borrar las cookies desde tu navegador; si lo haces, algunas partes del sitio pueden no funcionar como se espera.',
            'Respetamos la señal Global Privacy Control y otras señales de exclusión del navegador cuando la ley aplicable lo exige.',
          ],
        },
        {
          num: '[06]',
          title: 'Seguridad',
          body: [
            'Aplicamos medidas administrativas, técnicas y físicas para proteger tu información, incluido el cifrado en tránsito y en reposo, controles de acceso por rol, capacitación del personal y registros de auditoría. Ningún método de transmisión o almacenamiento es completamente seguro, por lo que no podemos garantizar una seguridad absoluta.',
          ],
        },
        {
          num: '[07]',
          title: 'Cuánto tiempo conservamos la información',
          body: [
            'Conservamos tu información mientras estés inscrito en un programa y después durante el período que exijan nuestros contratos, las reglas de retención de registros aplicables a servicios de salud y farmacéuticos, y la ley aplicable. Cuando la información deja de ser necesaria, la eliminamos o la anonimizamos.',
          ],
        },
        {
          num: '[08]',
          title: 'Tus derechos y opciones',
          body: [
            'Según dónde vivas y en qué programa estés, puedes tener derecho a acceder, corregir, eliminar u obtener una copia de tu información; a saber qué recopilamos y compartimos; a retirar una autorización que hayas firmado; y a oponerte a ciertos usos. No vendemos información personal ni la compartimos para publicidad conductual entre contextos.',
            'Puedes darte de baja del correo de marketing en cualquier momento con el enlace incluido en el mensaje. Las comunicaciones del programa y de seguridad relacionadas con tu terapia no son marketing y podrás seguir recibiéndolas mientras estés inscrito.',
            'Para ejercer un derecho, contáctanos con los datos que aparecen abajo. Verificaremos tu identidad antes de atender la solicitud y no te trataremos de forma distinta por hacerla.',
          ],
        },
        {
          num: '[09]',
          title: 'Menores de edad',
          body: [
            'Nuestro sitio no está dirigido a menores de 13 años y no recopilamos su información de forma consciente allí. Cuando un programa apoya a un paciente pediátrico, recopilamos su información del padre, madre o tutor legal que realiza la inscripción en su nombre.',
          ],
        },
        {
          num: '[10]',
          title: 'Cambios a esta política',
          body: [
            'Podemos actualizar esta política conforme cambien nuestros programas y la ley. Publicaremos la versión revisada en esta página con una nueva fecha de «última actualización» y, cuando el cambio sea significativo, daremos aviso adicional antes de que entre en vigor.',
          ],
        },
      ],
      contactTitle: 'Contáctanos',
      contactBody:
        '¿Tienes preguntas sobre esta política o quieres ejercer un derecho de privacidad? Escribe a nuestro equipo de privacidad:',
      backHome: 'Volver al inicio',
    },
  },
}
