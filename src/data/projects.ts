/**
 * PROYECTOS: acá se carga todo. Para sumar uno, agregá un objeto a `projects`.
 *
 * Obligatorio: member, kind, title, plain, tech, stack.
 * Opcional (solo se muestra si lo completás):
 *   repo    link al repositorio
 *   demo    link a una demo
 *   code    { label, source } para mostrar un fragmento de COBOL, JCL, etc.
 *   images  [{ src, alt }]; guardá los archivos en public/projects/
 *           y usá rutas como '/projects/mi-captura.png'
 *
 * `member` tiene hasta 8 caracteres, como un miembro de un PDS. Los de abajo son
 * nombres de muestra: reemplazalos por los nombres reales de tus programas.
 */
export type Project = {
  member: string
  kind: string
  title: string
  plain: string
  tech: string[]
  stack: string[]
  repo?: string
  demo?: string
  code?: { label: string; source: string }
  images?: { src: string; alt: string }[]
}

export const projects: Project[] = [
  {
    member: 'VALIDA01',
    kind: 'Batch',
    title: 'Validación y procesamiento de archivos',
    plain: 'Programas que revisan registros sin intervención humana y separan los datos correctos de los que tienen errores.',
    tech: ['Programas COBOL batch', 'Lectura de archivos QSAM y VSAM', 'Validación de datos'],
    stack: ['COBOL', 'QSAM', 'VSAM', 'JCL'],
  },
  {
    member: 'APAREO01',
    kind: 'Batch',
    title: 'Apareo de archivos',
    plain: 'Cruza dos archivos por una clave común para detectar qué registros coinciden y cuáles faltan.',
    tech: ['Apareo de archivos en COBOL', 'Programas batch'],
    stack: ['COBOL', 'QSAM', 'VSAM', 'JCL'],
  },
  {
    member: 'CORTES01',
    kind: 'Batch',
    title: 'Cortes de control y reportes',
    plain: 'Agrupa información y calcula totales en varios niveles para producir reportes listos para leer.',
    tech: ['Cortes de control simples y de múltiples niveles', 'Impresión de reportes'],
    stack: ['COBOL', 'QSAM', 'JCL'],
  },
  {
    member: 'VSAMKSDS',
    kind: 'Archivos',
    title: 'Gestión de archivos VSAM',
    plain: 'Crea y convierte los archivos donde viven los datos, para leerlos en orden o encontrar un registro directo por su clave.',
    tech: ['Creación y gestión de KSDS y ESDS', 'Conversiones entre QSAM y VSAM', 'Procesamiento secuencial y por clave'],
    stack: ['VSAM', 'QSAM', 'IDCAMS', 'COBOL'],
  },
  {
    member: 'JOBS0001',
    kind: 'JCL',
    title: 'Jobs de compilación y ejecución',
    plain: 'Las instrucciones que le dicen al mainframe cómo compilar y correr cada programa, y cómo ordenar, copiar y administrar archivos.',
    tech: ['Jobs de compilación y ejecución', 'Utilitarios SORT, IDCAMS, IEBGENER e IEBCOPY'],
    stack: ['JCL', 'SORT', 'IDCAMS', 'IEBGENER', 'IEBCOPY'],
  },
  {
    member: 'DB2CURS1',
    kind: 'Base de datos',
    title: 'COBOL con DB2',
    plain: 'Programas que consultan y actualizan una base de datos y reaccionan correctamente si una operación falla.',
    tech: ['SQL embebido en COBOL', 'Consultas, actualizaciones y cursores', 'Manejo de resultados y errores con SQLCA y SQLCODE'],
    stack: ['COBOL', 'DB2', 'SQL'],
  },
  {
    member: 'CICSBMS1',
    kind: 'Online',
    title: 'Aplicaciones online con CICS',
    plain: 'Pantallas donde una persona opera en tiempo real, con un programa que libera los recursos mientras espera cada respuesta.',
    tech: ['Programación pseudoconversacional', 'Pantallas, mapas y mapsets BMS', 'Pasaje de datos con COMMAREA'],
    stack: ['CICS', 'BMS', 'COBOL'],
  },
  {
    member: 'CICSDB21',
    kind: 'Online',
    title: 'Integración CICS y DB2',
    plain: 'Une pantallas y base de datos: lo que una persona consulta o modifica en línea impacta directamente en los datos.',
    tech: ['Integración CICS con DB2', 'Compilación y ejecución de programas con CICS y DB2'],
    stack: ['CICS', 'DB2', 'COBOL'],
  },
]
