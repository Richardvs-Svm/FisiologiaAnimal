/*
 * Banco editable del juego Clasificador térmico.
 * Para añadir un animal, copia una entrada de la lista y cambia sus datos.
 */
window.DATOS_CLASIFICADOR_TERMICO = {
  version: 1,
  claveAlmacenamiento: "clasificadorTermicoFisiologiaV1",

  animales: [
    {
      id: "pinguino-emperador",
      nombre: "Pingüino emperador",
      cientifico: "Aptenodytes forsteri",
      imagen: "imagenes/pinguino-emperador.webp",
      alt: "Pingüino emperador sobre el hielo antártico",
      fuente: "endo",
      estabilidad: "homeo",
      combinacion: "endo-homeo",
      contexto: "Produce la mayor parte de su calor mediante el metabolismo y mantiene una temperatura corporal relativamente estable."
    },
    {
      id: "camello-dromedario",
      nombre: "Camello dromedario",
      cientifico: "Camelus dromedarius",
      imagen: "imagenes/camello.webp",
      alt: "Camello dromedario en el desierto",
      fuente: "endo",
      estabilidad: "homeo",
      combinacion: "endo-homeo",
      contexto: "Su calor procede principalmente del metabolismo; puede tolerar oscilaciones controladas sin dejar de ser endotermo."
    },
    {
      id: "elefante-africano",
      nombre: "Elefante africano",
      cientifico: "Loxodonta africana",
      imagen: "imagenes/elefante.webp",
      alt: "Elefante africano de pie",
      fuente: "endo",
      estabilidad: "homeo",
      combinacion: "endo-homeo",
      contexto: "Genera calor metabólico y regula su temperatura dentro de un intervalo relativamente estrecho."
    },
    {
      id: "zorro-rojo",
      nombre: "Zorro rojo",
      cientifico: "Vulpes vulpes",
      imagen: "imagenes/zorro-rojo.webp",
      alt: "Zorro rojo en un bosque templado",
      fuente: "endo",
      estabilidad: "homeo",
      combinacion: "endo-homeo",
      contexto: "Como otros mamíferos activos, produce calor metabólico y conserva una temperatura corporal relativamente estable."
    },
    {
      id: "oso-polar",
      nombre: "Oso polar",
      cientifico: "Ursus maritimus",
      imagen: "imagenes/oso-polar.webp",
      alt: "Oso polar caminando sobre hielo marino",
      fuente: "endo",
      estabilidad: "homeo",
      combinacion: "endo-homeo",
      contexto: "Su metabolismo aporta el calor y su aislamiento ayuda a mantener estable la temperatura corporal."
    },
    {
      id: "lagartija-desierto",
      nombre: "Lagartija del desierto",
      cientifico: "Lacertilia · ejemplo general",
      imagen: "imagenes/lagartija-desierto.webp",
      alt: "Lagartija sobre una roca iluminada por el sol",
      fuente: "ecto",
      estabilidad: "poikilo",
      combinacion: "ecto-poikilo",
      contexto: "Obtiene principalmente calor del ambiente y su temperatura corporal cambia con las condiciones externas."
    },
    {
      id: "rana-arboricola",
      nombre: "Rana arborícola",
      cientifico: "Hylidae · ejemplo general",
      imagen: "imagenes/rana-arboricola.webp",
      alt: "Rana arborícola verde sobre una hoja",
      fuente: "ecto",
      estabilidad: "poikilo",
      combinacion: "ecto-poikilo",
      contexto: "El ambiente aporta la mayor parte de su calor y su temperatura corporal fluctúa."
    },
    {
      id: "serpiente-maiz",
      nombre: "Serpiente del maíz",
      cientifico: "Pantherophis guttatus",
      imagen: "imagenes/serpiente-maiz.webp",
      alt: "Serpiente del maíz enrollada",
      fuente: "ecto",
      estabilidad: "poikilo",
      combinacion: "ecto-poikilo",
      contexto: "Depende principalmente de fuentes externas de calor y su temperatura varía con el entorno."
    },
    {
      id: "tortuga-verde",
      nombre: "Tortuga verde",
      cientifico: "Chelonia mydas",
      imagen: "imagenes/tortuga-verde.webp",
      alt: "Tortuga verde nadando sobre un arrecife",
      fuente: "ecto",
      estabilidad: "poikilo",
      combinacion: "ecto-poikilo",
      contexto: "Obtiene el calor principalmente del agua y su temperatura corporal sigue sus cambios."
    },
    {
      id: "cocodrilo-nilo",
      nombre: "Cocodrilo del Nilo",
      cientifico: "Crocodylus niloticus",
      imagen: "imagenes/cocodrilo-nilo.webp",
      alt: "Cocodrilo del Nilo en la orilla de un río",
      fuente: "ecto",
      estabilidad: "poikilo",
      combinacion: "ecto-poikilo",
      contexto: "Usa el sol, el agua y la conducta para ganar o perder calor; su temperatura puede variar."
    },
    {
      id: "pulpo-comun",
      nombre: "Pulpo común",
      cientifico: "Octopus vulgaris",
      imagen: "imagenes/pulpo-comun.webp",
      alt: "Pulpo común sobre un fondo rocoso",
      fuente: "ecto",
      estabilidad: "poikilo",
      combinacion: "ecto-poikilo",
      contexto: "Su temperatura corporal depende en gran medida del agua circundante."
    },
    {
      id: "tortuga-desierto",
      nombre: "Tortuga del desierto",
      cientifico: "Gopherus agassizii",
      imagen: "imagenes/tortuga-desierto.webp",
      alt: "Tortuga del desierto caminando entre matorrales",
      fuente: "ecto",
      estabilidad: "poikilo",
      combinacion: "ecto-poikilo",
      contexto: "Obtiene calor del ambiente y usa refugios y horarios de actividad para modificar su exposición."
    },
    {
      id: "ardilla-torpor",
      nombre: "Ardilla terrestre",
      cientifico: "Spermophilus spp.",
      imagen: "imagenes/ardilla-terrestre-torpor.webp",
      alt: "Ardilla terrestre en torpor dentro de una madriguera",
      fuente: "endo",
      estabilidad: "hetero",
      combinacion: "endo-hetero",
      contexto: "Alterna periodos de actividad con torpor o hibernación, durante los cuales desciende su temperatura."
    },
    {
      id: "colibri",
      nombre: "Colibrí",
      cientifico: "Trochilidae",
      imagen: "imagenes/colibri.webp",
      alt: "Colibrí suspendido frente a una flor",
      fuente: "endo",
      estabilidad: "hetero",
      combinacion: "endo-hetero",
      contexto: "Puede mantener una temperatura alta durante la actividad y reducirla marcadamente durante el torpor."
    },
    {
      id: "murcielago",
      nombre: "Murciélago",
      cientifico: "Chiroptera",
      imagen: "imagenes/murcielago.webp",
      alt: "Murciélago posado en una rama",
      fuente: "endo",
      estabilidad: "hetero",
      combinacion: "endo-hetero",
      contexto: "Produce calor metabólico, pero muchas especies alternan actividad con periodos de torpor."
    },
    {
      id: "liron-avellano",
      nombre: "Lirón avellano",
      cientifico: "Muscardinus avellanarius",
      imagen: "imagenes/liron-avellano.webp",
      alt: "Lirón avellano dormido en un nido de hojas",
      fuente: "endo",
      estabilidad: "hetero",
      combinacion: "endo-hetero",
      contexto: "Es endotermo y alterna periodos de temperatura regulada con torpor o hibernación."
    },
    {
      id: "equidna",
      nombre: "Equidna de hocico corto",
      cientifico: "Tachyglossus aculeatus",
      imagen: "imagenes/equidna.webp",
      alt: "Equidna de hocico corto entre hojas secas",
      fuente: "endo",
      estabilidad: "hetero",
      combinacion: "endo-hetero",
      contexto: "Produce calor metabólico y puede presentar torpor, por lo que alterna patrones térmicos."
    },
    {
      id: "tenrec",
      nombre: "Tenrec erizo menor",
      cientifico: "Echinops telfairi",
      imagen: "imagenes/tenrec.webp",
      alt: "Tenrec erizo menor sobre hojarasca",
      fuente: "endo",
      estabilidad: "hetero",
      combinacion: "endo-hetero",
      contexto: "Es un mamífero endotermo con heterotermia marcada y periodos de torpor."
    },
    {
      id: "nototenio-antartico",
      nombre: "Nototenio antártico",
      cientifico: "Notothenioidei",
      imagen: "imagenes/pez-nototenio-antartico.webp",
      alt: "Pez nototenio nadando en agua antártica",
      fuente: "ecto",
      estabilidad: "homeo",
      combinacion: "ecto-homeo",
      contexto: "En aguas antárticas profundas y muy estables, obtiene calor externo pero su temperatura cambia muy poco."
    },
    {
      id: "pez-hielo",
      nombre: "Pez de hielo antártico",
      cientifico: "Channichthyidae",
      imagen: "imagenes/pez-hielo-antartico.webp",
      alt: "Pez de hielo antártico en agua fría",
      fuente: "ecto",
      estabilidad: "homeo",
      combinacion: "ecto-homeo",
      contexto: "Su temperatura depende del agua, pero puede permanecer estable cuando el ambiente marino también lo es."
    },
    {
      id: "bacalao-antartico",
      nombre: "Bacalao antártico",
      cientifico: "Dissostichus mawsoni",
      imagen: "imagenes/bacalao-antartico.webp",
      alt: "Bacalao antártico nadando bajo el hielo",
      fuente: "ecto",
      estabilidad: "homeo",
      combinacion: "ecto-homeo",
      contexto: "Es ectotermo; en agua polar térmicamente estable su temperatura corporal también puede ser estable."
    },
    {
      id: "rata-topo-desnuda",
      nombre: "Rata topo desnuda*",
      cientifico: "Heterocephalus glaber",
      imagen: "imagenes/rata-topo-desnuda.webp",
      alt: "Rata topo desnuda dentro de un túnel",
      fuente: "endo",
      estabilidad: "poikilo",
      combinacion: "endo-poikilo",
      contexto: "Caso de desafío: produce calor metabólico, pero su temperatura puede variar mucho. Su clasificación exacta es debatida."
    },
    {
      id: "perezoso",
      nombre: "Perezoso de tres dedos*",
      cientifico: "Bradypus variegatus",
      imagen: "imagenes/perezoso.webp",
      alt: "Perezoso de tres dedos colgado de una rama",
      fuente: "endo",
      estabilidad: "poikilo",
      combinacion: "endo-poikilo",
      contexto: "Caso contextual: es endotermo, pero presenta variaciones corporales amplias para un mamífero. También puede describirse como heterotermo."
    }
  ],

  niveles: [
    {
      id: "fuente",
      ceja: "Nivel 1 · Fuente del calor",
      titulo: "¿De dónde proviene principalmente su calor corporal?",
      notaBanco: "Muestra aleatoria: 3 de cada categoría",
      campo: "fuente",
      cantidadPorCategoria: 3,
      intro: {
        titulo: "Dos formas de obtener calor",
        entrada: "Todos los animales producen algo de calor metabólico. La clasificación depende de <strong>cuál es la fuente principal</strong> del calor que determina su temperatura corporal.",
        conceptos: [
          { icono: "🔥", titulo: "Endotermo", texto: "Genera internamente la mayor parte de su calor corporal mediante el metabolismo." },
          { icono: "☀", titulo: "Ectotermo", texto: "Obtiene del ambiente —sol, aire, agua o suelo— la mayor parte del calor que determina su temperatura." }
        ],
        recordatorio: "Estos términos describen la <strong>fuente principal del calor</strong>, no qué tan estable es la temperatura.",
        pregunta: "Pregunta guía: ¿el calor procede principalmente del metabolismo o del ambiente?",
        boton: "Comenzar el nivel 1"
      },
      categorias: [
        { id: "endo", icono: "🔥", nombre: "Endotermo", detalle: "Calor generado principalmente en el interior", retroalimentacion: "Su fuente principal de calor es el metabolismo." },
        { id: "ecto", icono: "☀", nombre: "Ectotermo", detalle: "Calor obtenido principalmente del ambiente", retroalimentacion: "Su temperatura depende principalmente del calor ambiental." }
      ],
      pausa: "Endotermo y ectotermo responden a una sola pregunta: ¿de dónde proviene principalmente el calor corporal?"
    },
    {
      id: "estabilidad",
      ceja: "Nivel 2 · Estabilidad térmica",
      titulo: "¿Qué patrón presenta su temperatura corporal a lo largo del tiempo?",
      notaBanco: "Muestra aleatoria: 3 de cada patrón",
      campo: "estabilidad",
      cantidadPorCategoria: 3,
      intro: {
        titulo: "Tres patrones de temperatura",
        entrada: "En este nivel ya no importa de dónde proviene el calor. Ahora observarás <strong>qué tan estable es la temperatura corporal a lo largo del tiempo</strong>.",
        conceptos: [
          { icono: "➖", titulo: "Homeotermo", texto: "Mantiene su temperatura corporal dentro de un intervalo relativamente estrecho." },
          { icono: "〰", titulo: "Poiquilotermo", texto: "Su temperatura corporal fluctúa considerablemente, con frecuencia junto con el ambiente." },
          { icono: "↔", titulo: "Heterotermo", texto: "Alterna periodos relativamente estables con otros de mayor fluctuación, como durante el torpor." }
        ],
        recordatorio: "Ser heterotermo no significa estar a la mitad: significa que el patrón <strong>cambia entre periodos</strong>.",
        pregunta: "Pregunta guía: ¿la temperatura permanece estable, fluctúa o alterna entre ambos patrones?",
        boton: "Comenzar el nivel 2"
      },
      categorias: [
        { id: "homeo", icono: "➖", nombre: "Homeotermo", detalle: "Temperatura relativamente estable", retroalimentacion: "Mantiene la temperatura corporal dentro de un intervalo relativamente estrecho." },
        { id: "poikilo", icono: "〰", nombre: "Poiquilotermo", detalle: "Temperatura corporal variable", retroalimentacion: "Su temperatura corporal presenta fluctuaciones considerables." },
        { id: "hetero", icono: "↔", nombre: "Heterotermo", detalle: "Alterna entre estabilidad y fluctuación", retroalimentacion: "Alterna periodos de regulación estrecha con periodos de mayor variación." }
      ],
      pausa: "Homeo-, poikilo- y heterotermia describen el patrón de temperatura corporal a lo largo del tiempo."
    },
    {
      id: "combinaciones",
      ceja: "Nivel 3 · Los dos ejes",
      titulo: "¿Cómo se combinan la fuente del calor y la estabilidad térmica?",
      notaBanco: "2 por combinación · *casos de desafío con contexto",
      campo: "combinacion",
      cantidadPorCategoria: 2,
      intro: {
        titulo: "Dos preguntas, varias combinaciones",
        entrada: "La fuente del calor y la estabilidad térmica son <strong>dos ejes independientes</strong>. Para clasificar cada animal tendrás que responder dos preguntas.",
        conceptos: [
          { icono: "1", titulo: "¿De dónde viene el calor?", texto: "Decide si procede principalmente del metabolismo —endotermo— o del ambiente —ectotermo—." },
          { icono: "2", titulo: "¿Qué tan estable es?", texto: "Después identifica si la temperatura es relativamente estable, variable o alterna entre periodos." }
        ],
        recordatorio: "Las combinaciones frecuentes no son obligatorias. Un ectotermo puede ser homeotermo si vive en un ambiente térmicamente estable, y algunos endotermos permiten variaciones o entran en torpor.",
        pregunta: "Pregunta guía: primero identifica la fuente del calor; después, el patrón de temperatura.",
        boton: "Comenzar el nivel 3"
      },
      categorias: [
        { id: "endo-homeo", icono: "🔥➖", nombre: "Endotermo + homeotermo", detalle: "Calor interno · temperatura estable", retroalimentacion: "Combina producción metabólica de calor con una temperatura relativamente estable." },
        { id: "ecto-homeo", icono: "❄➖", nombre: "Ectotermo + homeotermo", detalle: "Calor externo · temperatura estable", retroalimentacion: "El calor procede del ambiente y la temperatura permanece estable porque el entorno también lo es." },
        { id: "endo-poikilo", icono: "🔥〰", nombre: "Endotermo + poiquilotermo*", detalle: "Calor interno · temperatura variable", retroalimentacion: "Es un caso contextual: existe producción metabólica de calor, pero la temperatura varía marcadamente." },
        { id: "ecto-poikilo", icono: "☀〰", nombre: "Ectotermo + poiquilotermo", detalle: "Calor externo · temperatura variable", retroalimentacion: "El calor procede principalmente del ambiente y la temperatura corporal fluctúa." },
        { id: "endo-hetero", icono: "🔥↔", nombre: "Endotermo + heterotermo", detalle: "Calor interno · alterna patrones", retroalimentacion: "Produce calor metabólico y alterna periodos de estabilidad con torpor o mayor fluctuación." }
      ],
      pausa: "Los dos ejes son independientes: conocer la fuente del calor no basta para predecir la estabilidad térmica."
    }
  ]
};
