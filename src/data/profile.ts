export const profile = {
  name: 'Juan Ignacio Marcos Merlo',
  role: 'Desarrollador COBOL Mainframe Jr.',
  email: 'juanimarcosmerlo@gmail.com',
  linkedin: 'https://www.linkedin.com/in/juan-ignacio-marcos-merlo/',
  github: 'https://github.com/JuanIgnacioMarcosMerlo',
  cv: '/CV_JuanIgnacioMarcosMerlo.pdf',
}

export const facts = [
  ['Puesto buscado', 'COBOL Mainframe Jr.'],
  ['Ubicación', 'Temperley, Buenos Aires'],
  ['Disponibilidad', 'Full time'],
  ['Modalidad', 'Presencial, remota o híbrida'],
  ['Estudios', 'Último año de Tecnicatura'],
  ['Entornos', 'Marist, z/OS en Hercules'],
] as const

export const reasons = [
  {
    title: 'Sigo cuando nadie me lo pide',
    text: 'Terminó el curso y seguí practicando por mi cuenta en un z/OS emulado con Hercules.',
  },
  {
    title: 'Busco entender el sistema completo',
    text: 'No me quedo en un programa suelto: practiqué batch, pantallas CICS, archivos y DB2 para ver cómo funcionan juntos.',
  },
  {
    title: 'No me asustan los problemas difíciles',
    text: 'Cursé dos años de Astronomía en la UNLP.',
  },
]

export const skills = [
  { name: 'COBOL', group: 'Mainframe', plain: 'El lenguaje de los sistemas centrales de bancos y seguros. Con él escribo los programas.' },
  { name: 'JCL', group: 'Mainframe', plain: 'Le indica al mainframe qué programas correr, en qué orden y con qué archivos.' },
  { name: 'CICS', group: 'Mainframe', plain: 'Las transacciones en línea: lo que responde al instante cuando alguien opera en una pantalla.' },
  { name: 'DB2', group: 'Mainframe', plain: 'La base de datos relacional de IBM. La consulto y actualizo desde COBOL con SQL.' },
  { name: 'VSAM / QSAM', group: 'Mainframe', plain: 'Los archivos del mainframe, leídos en orden o buscando directo por clave.' },
  { name: 'TSO / ISPF', group: 'Mainframe', plain: 'El entorno de trabajo. Esta página está inspirada en sus pantallas.' },
  { name: 'MySQL', group: 'Otros', plain: 'Base de datos relacional.' },
  { name: 'MongoDB, Firebase', group: 'Otros', plain: 'Bases de datos NoSQL.' },
  { name: 'Git, GitHub', group: 'Otros', plain: 'Control de versiones.' },
]

export const timeline = [
  {
    when: '2018 - HOY',
    tag: 'TRABAJO',
    title: 'Administrativo en Clauvana',
    text: 'Órdenes de compra, facturación y cobranzas. Control de inventario, stock y proveedores. Gestión documental e implementación de bases de datos.',
  },
  {
    when: 'EN CURSO',
    tag: 'ESTUDIO',
    title: 'Tecnicatura Universitaria en Programación',
    text: 'Universidad Nacional Guillermo Brown. Último año.',
  },
  {
    when: 'DESPUÉS',
    tag: 'PRÁCTICA',
    title: 'z/OS emulado con Hercules',
    text: 'Proyectos y ejercicios propios para entender cómo se integran batch, online, archivos y bases de datos.',
  },
  {
    when: '2025',
    tag: 'CURSO',
    title: 'Desarrollador COBOL en Codeki',
    text: 'Unos siete meses, con aval de la UBA y prácticas en un mainframe real (Marist).',
  },
  {
    when: 'ANTES',
    tag: 'ESTUDIO',
    title: 'Licenciatura en Astronomía',
    text: 'Universidad Nacional de La Plata. Dos años cursados, estudios incompletos.',
  },
]
