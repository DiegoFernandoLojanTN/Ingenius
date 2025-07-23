import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs.jsx'
import { Button } from '@/components/ui/button.jsx'
import { Separator } from '@/components/ui/separator.jsx'
import { BookOpen, FileText, Users, CheckCircle, AlertCircle, Info, ExternalLink, Download, Globe, University, BookMarked, Lightbulb } from 'lucide-react'
import diagramaImg from './assets/elementos_estructurales_simplificado.png'
import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState('elementos')

  const elementosEstructurales = [
    {
      categoria: "I. Elementos Preliminares",
      icon: <FileText className="w-5 h-5" />,
      color: "from-blue-600 to-indigo-600",
      elementos: [
        {
          nombre: "Título",
          descripcion: "Claro, conciso y atractivo. Refleja el contenido principal del estudio.",
          requisitos: ["Debe ser descriptivo", "Máximo 15 palabras recomendadas", "Evitar abreviaciones", "Incluir palabras clave principales"],
          tips: "Un buen título debe responder: ¿Qué?, ¿Cómo?, ¿Dónde? del estudio."
        },
        {
          nombre: "Autores y Afiliación",
          descripcion: "Nombres completos y adscripción institucional con información de contacto.",
          requisitos: ["Referencia al final de la primera hoja (INGENIUS)", "Incluir datos de contacto", "Orden de autoría por contribución", "Afiliación institucional completa"],
          tips: "El autor correspondiente debe estar claramente identificado con su email."
        },
        {
          nombre: "Resumen (Abstract)",
          descripcion: "Síntesis breve y estructurada del problema, objetivos, métodos, resultados y conclusiones.",
          requisitos: ["Máximo 250 palabras (INGENIUS)", "En español e inglés (INGENIUS)", "Estructura: Contexto-Objetivo-Método-Resultados-Conclusión", "Auto-contenido (sin referencias)"],
          tips: "El resumen debe poder leerse independientemente del artículo completo."
        },
        {
          nombre: "Palabras Clave (Keywords)",
          descripcion: "Términos descriptivos específicos que facilitan la búsqueda e indexación del artículo.",
          requisitos: ["3 a 6 palabras (INGENIUS)", "En español e inglés (INGENIUS)", "No repetir palabras del título", "Usar términos específicos del área"],
          tips: "Consulta tesauros especializados para elegir términos estandarizados."
        }
      ]
    },
    {
      categoria: "II. Cuerpo del Artículo (Estructura IMRyD)",
      icon: <BookOpen className="w-5 h-5" />,
      color: "from-green-600 to-teal-600",
      elementos: [
        {
          nombre: "Introducción",
          descripcion: "Contextualización del problema, revisión de literatura y justificación del estudio.",
          requisitos: ["Fundamentación teórica", "Definiciones clave", "Revisión de literatura actualizada", "Formulación clara de objetivos e hipótesis", "Justificación del estudio"],
          tips: "Estructura en embudo: de lo general a lo específico, culminando con los objetivos."
        },
        {
          nombre: "Materiales y Métodos (Metodología)",
          descripcion: "Descripción detallada y reproducible de la metodología empleada.",
          requisitos: ["Descripción de materiales y equipos", "Procedimientos paso a paso", "Recopilación de datos", "Tratamiento de variables", "Análisis estadístico", "Consideraciones éticas"],
          tips: "Debe ser lo suficientemente detallado para que otro investigador pueda replicar el estudio."
        },
        {
          nombre: "Resultados",
          descripcion: "Presentación objetiva y clara de los hallazgos obtenidos.",
          requisitos: ["Presentación lógica y secuencial", "Uso apropiado de tablas y figuras", "No interpretación en esta sección", "Datos estadísticamente significativos", "Coherencia con los objetivos"],
          tips: "Presenta solo los resultados más relevantes; los datos complementarios van en apéndices."
        },
        {
          nombre: "Discusión",
          descripcion: "Interpretación y análisis crítico de los resultados en el contexto científico.",
          requisitos: ["Interpretación de resultados", "Comparación con literatura existente", "Explicación de discrepancias", "Implicaciones teóricas y prácticas", "Limitaciones del estudio", "Sugerencias para investigación futura"],
          tips: "Evita repetir los resultados; enfócate en su significado e implicaciones."
        },
        {
          nombre: "Conclusiones",
          descripcion: "Síntesis de los principales hallazgos y su contribución al conocimiento.",
          requisitos: ["Respuesta directa a los objetivos", "Síntesis clara y concisa", "Contribución al conocimiento", "Aplicaciones prácticas", "No introducir información nueva"],
          tips: "Las conclusiones deben estar respaldadas por los resultados presentados."
        }
      ]
    },
    {
      categoria: "III. Elementos Finales",
      icon: <CheckCircle className="w-5 h-5" />,
      color: "from-purple-600 to-pink-600",
      elementos: [
        {
          nombre: "Referencias Bibliográficas",
          descripcion: "Lista completa y actualizada de todas las fuentes citadas.",
          requisitos: ["Formato IEEE (INGENIUS)", "Ordenadas por aparición en el texto", "Fuentes actualizadas (últimos 5-10 años)", "Equilibrio entre fuentes primarias y secundarias", "Verificación de exactitud"],
          tips: "Usa gestores de referencias como Zotero o Mendeley para mantener consistencia."
        },
        {
          nombre: "Agradecimientos",
          descripcion: "Reconocimiento a personas e instituciones que contribuyeron al estudio.",
          requisitos: ["Breve, máximo un párrafo (INGENIUS)", "Reconocimiento a financiamiento", "Agradecimiento a colaboradores", "Permisos de las personas mencionadas"],
          tips: "Incluye número de proyecto si hay financiamiento externo."
        },
        {
          nombre: "Elementos Gráficos (Tablas y Figuras)",
          descripcion: "Material visual que complementa y clarifica el texto principal.",
          requisitos: ["Numeración secuencial", "Títulos descriptivos y auto-explicativos", "Figuras en alta resolución (300 dpi)", "Tablas en formato editable", "Referencias en el texto", "Leyendas completas"],
          tips: "Cada figura/tabla debe poder entenderse independientemente del texto."
        }
      ]
    },
    {
      categoria: "IV. Requerimientos Técnicos (INGENIUS)",
      icon: <AlertCircle className="w-5 h-5" />,
      color: "from-orange-600 to-red-600",
      elementos: [
        {
          nombre: "Formato y Extensión",
          descripcion: "Especificaciones técnicas para la presentación del manuscrito.",
          requisitos: ["Máximo 5000 palabras", "Microsoft Word (.doc/.docx) o LaTeX (.tex)", "Fuente Times New Roman 12 puntos", "Interlineado doble", "Márgenes de 2.5 cm"],
          tips: "Usa las plantillas oficiales disponibles en el sitio web de la revista."
        },
        {
          nombre: "Estructura de Archivos",
          descripcion: "Organización de los archivos para envío a la revista.",
          requisitos: ["Archivo principal del manuscrito", "Figuras en archivos separados", "Tablas en archivo Excel separado", "Carta de presentación", "Declaración de conflictos de interés"],
          tips: "Nombra los archivos de forma clara: Apellido_Titulo_Figura1.png"
        },
        {
          nombre: "Proceso Editorial",
          descripcion: "Etapas del proceso de revisión y publicación.",
          requisitos: ["Revisión inicial por editor", "Evaluación por pares (blind review)", "Una oportunidad de corrección", "Respuesta en máximo 6 meses", "Publicación semestral (enero y julio)"],
          tips: "Responde a los comentarios de revisores de forma detallada y respetuosa."
        }
      ]
    }
  ]

  const enlacesUtiles = [
    {
      titulo: "Revista INGENIUS - Sitio Oficial",
      url: "https://ingenius.ups.edu.ec/",
      descripcion: "Portal principal de la revista con información actualizada",
      icono: <Globe className="w-4 h-4" />
    },
    {
      titulo: "Normas para Autores INGENIUS",
      url: "https://ingenius.ups.edu.ec/index.php/ingenius/information/authors",
      descripcion: "Guías detalladas para la preparación de manuscritos",
      icono: <FileText className="w-4 h-4" />
    },
    {
      titulo: "Universidad Politécnica Salesiana",
      url: "https://www.ups.edu.ec/",
      descripcion: "Institución editora de la revista INGENIUS",
      icono: <University className="w-4 h-4" />
    },
    {
      titulo: "Plantilla Word INGENIUS",
      url: "https://ingenius.ups.edu.ec/index.php/ingenius/information/authors",
      descripcion: "Plantilla oficial para manuscritos en Microsoft Word",
      icono: <Download className="w-4 h-4" />
    },
    {
      titulo: "Plantilla LaTeX INGENIUS",
      url: "https://es.overleaf.com/latex/templates/revista-ingenius-ecuador/zsnnwhmcwzyj",
      descripcion: "Plantilla oficial para manuscritos en LaTeX (Overleaf)",
      icono: <Download className="w-4 h-4" />
    },
    {
      titulo: "Estilo IEEE para Referencias",
      url: "https://www.ieee.org/content/dam/ieee-org/ieee/web/org/conferences/style_references_manual.pdf",
      descripcion: "Manual oficial del estilo IEEE para citas y referencias",
      icono: <BookMarked className="w-4 h-4" />
    }
  ]

  const consejosPracticos = [
    {
      titulo: "Planificación del Artículo",
      contenido: "Antes de escribir, elabora un esquema detallado. Define claramente tu pregunta de investigación, objetivos y metodología.",
      icono: <Lightbulb className="w-5 h-5 text-yellow-500" />
    },
    {
      titulo: "Redacción Clara y Concisa",
      contenido: "Usa oraciones cortas y directas. Evita jerga innecesaria y define términos técnicos la primera vez que los uses.",
      icono: <FileText className="w-5 h-5 text-blue-500" />
    },
    {
      titulo: "Revisión y Edición",
      contenido: "Revisa múltiples veces: contenido, estructura, gramática y formato. Pide a colegas que revisen tu trabajo.",
      icono: <CheckCircle className="w-5 h-5 text-green-500" />
    },
    {
      titulo: "Gestión de Referencias",
      contenido: "Usa herramientas como Zotero, Mendeley o EndNote para gestionar tus referencias de forma eficiente.",
      icono: <BookMarked className="w-5 h-5 text-purple-500" />
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Header mejorado */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <University className="w-4 h-4" />
            Universidad Politécnica Salesiana - Revista INGENIUS
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Elementos Estructurales de Artículos Científicos de Ingeniería
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Guía completa y detallada basada en las normas de la revista INGENIUS y estándares internacionales de redacción científica
          </p>
          
          {/* Enlaces rápidos */}
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            <Button variant="outline" size="sm" asChild>
              <a href="https://ingenius.ups.edu.ec/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <ExternalLink className="w-4 h-4" />
                Revista INGENIUS
              </a>
            </Button>
            <Button variant="outline" size="sm" asChild>
              <a href="https://www.ups.edu.ec/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <University className="w-4 h-4" />
                UPS Ecuador
              </a>
            </Button>
            <Button variant="outline" size="sm" asChild>
              <a href="https://es.overleaf.com/latex/templates/revista-ingenius-ecuador/zsnnwhmcwzyj" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <Download className="w-4 h-4" />
                Plantilla LaTeX
              </a>
            </Button>
          </div>
        </div>

        {/* Navigation Tabs mejoradas */}
        <Tabs value={activeSection} onValueChange={setActiveSection} className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8 h-12">
            <TabsTrigger value="elementos" className="flex items-center gap-2 text-sm">
              <FileText className="w-4 h-4" />
              Elementos Estructurales
            </TabsTrigger>
            <TabsTrigger value="diagrama" className="flex items-center gap-2 text-sm">
              <Info className="w-4 h-4" />
              Diagrama Visual
            </TabsTrigger>
            <TabsTrigger value="etica" className="flex items-center gap-2 text-sm">
              <Users className="w-4 h-4" />
              Ética en Redacción
            </TabsTrigger>
            <TabsTrigger value="recursos" className="flex items-center gap-2 text-sm">
              <BookMarked className="w-4 h-4" />
              Recursos y Enlaces
            </TabsTrigger>
          </TabsList>

          {/* Elementos Estructurales Tab mejorado */}
          <TabsContent value="elementos" className="space-y-8">
            {elementosEstructurales.map((categoria, index) => (
              <Card key={index} className="shadow-lg border-0 overflow-hidden">
                <CardHeader className={`bg-gradient-to-r ${categoria.color} text-white`}>
                  <CardTitle className="flex items-center gap-3 text-xl">
                    {categoria.icon}
                    {categoria.categoria}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-8">
                  <div className="grid gap-8 lg:grid-cols-2">
                    {categoria.elementos.map((elemento, elemIndex) => (
                      <Card key={elemIndex} className="border-l-4 border-l-blue-500 hover:shadow-md transition-shadow">
                        <CardHeader className="pb-4">
                          <CardTitle className="text-lg text-blue-700 flex items-center gap-2">
                            <CheckCircle className="w-5 h-5" />
                            {elemento.nombre}
                          </CardTitle>
                          <CardDescription className="text-sm leading-relaxed">
                            {elemento.descripcion}
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="pt-0 space-y-4">
                          <div>
                            <h4 className="font-semibold text-sm text-gray-700 mb-2">Requisitos clave:</h4>
                            <div className="flex flex-wrap gap-1">
                              {elemento.requisitos.map((req, reqIndex) => (
                                <Badge key={reqIndex} variant="secondary" className="text-xs">
                                  {req}
                                </Badge>
                              ))}
                            </div>
                          </div>
                          {elemento.tips && (
                            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-3 rounded">
                              <p className="text-sm text-yellow-800">
                                <strong>💡 Consejo:</strong> {elemento.tips}
                              </p>
                            </div>
                          )}
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Consejos prácticos */}
            <Card className="shadow-lg border-0">
              <CardHeader className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white">
                <CardTitle className="flex items-center gap-3 text-xl">
                  <Lightbulb className="w-5 h-5" />
                  Consejos Prácticos para la Redacción
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid gap-4 md:grid-cols-2">
                  {consejosPracticos.map((consejo, index) => (
                    <div key={index} className="flex gap-3 p-4 bg-gray-50 rounded-lg">
                      {consejo.icono}
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">{consejo.titulo}</h4>
                        <p className="text-sm text-gray-600">{consejo.contenido}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Diagrama Visual Tab mejorado */}
          <TabsContent value="diagrama" className="space-y-6">
            <Card className="shadow-lg border-0">
              <CardHeader className="bg-gradient-to-r from-green-600 to-teal-600 text-white">
                <CardTitle className="flex items-center gap-3 text-xl">
                  <Info className="w-5 h-5" />
                  Diagrama de Elementos Estructurales
                </CardTitle>
                <CardDescription className="text-green-100">
                  Visualización esquemática de la estructura completa de un artículo científico de ingeniería
                </CardDescription>
              </CardHeader>
              <CardContent className="p-8">
                <div className="flex justify-center mb-6">
                  <div className="bg-white p-4 rounded-lg shadow-md">
                    <img 
                      src={diagramaImg} 
                      alt="Diagrama de elementos estructurales de un artículo científico de ingeniería"
                      className="max-w-full h-auto rounded-lg"
                    />
                  </div>
                </div>
                
                <Separator className="my-6" />
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-6 bg-blue-50 rounded-lg">
                    <h3 className="font-semibold text-blue-800 mb-3 flex items-center gap-2">
                      <Info className="w-5 h-5" />
                      Cómo usar este diagrama:
                    </h3>
                    <ul className="text-sm text-blue-700 space-y-2">
                      <li>• Sigue la estructura de arriba hacia abajo para organizar tu artículo</li>
                      <li>• Cada rama representa una sección indispensable</li>
                      <li>• Los elementos en colores específicos corresponden a normas INGENIUS</li>
                      <li>• La estructura IMRyD es el estándar internacional más aceptado</li>
                      <li>• Usa este diagrama como lista de verificación antes del envío</li>
                    </ul>
                  </div>
                  
                  <div className="p-6 bg-green-50 rounded-lg">
                    <h3 className="font-semibold text-green-800 mb-3 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5" />
                      Lista de verificación:
                    </h3>
                    <ul className="text-sm text-green-700 space-y-2">
                      <li>☐ Título claro y descriptivo</li>
                      <li>☐ Resumen en español e inglés</li>
                      <li>☐ Palabras clave (3-6)</li>
                      <li>☐ Introducción con objetivos claros</li>
                      <li>☐ Metodología reproducible</li>
                      <li>☐ Resultados objetivos</li>
                      <li>☐ Discusión fundamentada</li>
                      <li>☐ Conclusiones coherentes</li>
                      <li>☐ Referencias en formato IEEE</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Ética en Redacción Tab mejorado */}
          <TabsContent value="etica" className="space-y-6">
            <Card className="shadow-lg border-0">
              <CardHeader className="bg-gradient-to-r from-purple-600 to-pink-600 text-white">
                <CardTitle className="flex items-center gap-3 text-xl">
                  <Users className="w-5 h-5" />
                  ¿Cómo influye la ética en la redacción científica?
                </CardTitle>
                <CardDescription className="text-purple-100">
                  La importancia de la integridad académica en la investigación y publicación científica
                </CardDescription>
              </CardHeader>
              <CardContent className="p-8">
                <div className="prose max-w-none mb-8">
                  <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-lg border-l-4 border-purple-500">
                    <p className="text-lg leading-relaxed text-gray-700">
                      La ética influye de manera crucial en la redacción científica al ser el pilar que sostiene la credibilidad y la fiabilidad del conocimiento. Implica la honestidad y transparencia en la presentación de resultados, evitando la manipulación o falsificación de datos. Asimismo, exige originalidad y el debido reconocimiento a las fuentes mediante una citación rigurosa, combatiendo el plagio y el autoplagio. La autoría responsable es otro aspecto ético fundamental, asegurando que solo quienes contribuyeron sustancialmente sean reconocidos. Ignorar estos principios puede llevar a la retracción de publicaciones, daño reputacional y la erosión de la confianza pública en la ciencia, subrayando que la ética no es un mero formalismo, sino una condición indispensable para la integridad de la investigación.
                    </p>
                  </div>
                </div>

                <div className="grid lg:grid-cols-2 gap-8">
                  <Card className="border-l-4 border-l-green-500">
                    <CardHeader>
                      <CardTitle className="text-green-700 flex items-center gap-2">
                        <CheckCircle className="w-5 h-5" />
                        Principios Éticos Fundamentales
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {[
                        {
                          titulo: "Honestidad y Transparencia",
                          descripcion: "Presentación veraz de resultados sin manipulación, falsificación o fabricación de datos."
                        },
                        {
                          titulo: "Originalidad y Reconocimiento",
                          descripcion: "Evitar plagio y autoplagio, citando correctamente todas las fuentes utilizadas."
                        },
                        {
                          titulo: "Autoría Responsable",
                          descripcion: "Reconocer solo contribuciones sustanciales al diseño, ejecución o análisis del estudio."
                        },
                        {
                          titulo: "Confidencialidad y Privacidad",
                          descripcion: "Proteger datos de participantes y respetar acuerdos de confidencialidad."
                        },
                        {
                          titulo: "Responsabilidad Social",
                          descripcion: "Considerar el impacto de la investigación en la sociedad y el medio ambiente."
                        }
                      ].map((principio, index) => (
                        <div key={index} className="flex gap-3 p-3 bg-green-50 rounded-lg">
                          <Badge variant="outline" className="mt-1 shrink-0">{index + 1}</Badge>
                          <div>
                            <h4 className="font-semibold text-green-800 text-sm">{principio.titulo}</h4>
                            <p className="text-sm text-green-700 mt-1">{principio.descripcion}</p>
                          </div>
                        </div>
                      ))}
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-l-red-500">
                    <CardHeader>
                      <CardTitle className="text-red-700 flex items-center gap-2">
                        <AlertCircle className="w-5 h-5" />
                        Consecuencias de Mala Conducta
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {[
                        "Retracción de artículos publicados",
                        "Daño permanente a la reputación profesional",
                        "Pérdida de financiación para investigación",
                        "Sanciones académicas y profesionales",
                        "Erosión de la confianza pública en la ciencia",
                        "Posibles consecuencias legales",
                        "Exclusión de la comunidad científica"
                      ].map((consecuencia, index) => (
                        <div key={index} className="flex items-start gap-3 p-3 bg-red-50 rounded-lg">
                          <Badge variant="destructive" className="mt-0.5 shrink-0">!</Badge>
                          <span className="text-sm text-red-700">{consecuencia}</span>
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                </div>

                <Separator className="my-8" />

                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                  <h3 className="font-semibold text-yellow-800 mb-3 flex items-center gap-2">
                    <Lightbulb className="w-5 h-5" />
                    Recomendaciones para Mantener la Integridad Científica:
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4 text-sm text-yellow-700">
                    <ul className="space-y-2">
                      <li>• Documenta todos los procedimientos y decisiones metodológicas</li>
                      <li>• Mantén registros detallados de datos y análisis</li>
                      <li>• Usa software de detección de plagio antes del envío</li>
                      <li>• Declara todos los conflictos de interés</li>
                    </ul>
                    <ul className="space-y-2">
                      <li>• Obtén permisos necesarios para uso de datos o imágenes</li>
                      <li>• Revisa cuidadosamente todas las citas y referencias</li>
                      <li>• Consulta con comités de ética cuando sea necesario</li>
                      <li>• Busca mentoría en casos de duda ética</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Nueva pestaña de Recursos y Enlaces */}
          <TabsContent value="recursos" className="space-y-6">
            <Card className="shadow-lg border-0">
              <CardHeader className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white">
                <CardTitle className="flex items-center gap-3 text-xl">
                  <BookMarked className="w-5 h-5" />
                  Recursos y Enlaces Útiles
                </CardTitle>
                <CardDescription className="text-indigo-100">
                  Enlaces oficiales, plantillas y herramientas para la redacción científica
                </CardDescription>
              </CardHeader>
              <CardContent className="p-8">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {enlacesUtiles.map((enlace, index) => (
                    <Card key={index} className="hover:shadow-md transition-shadow border border-gray-200">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-3">
                          <div className="p-2 bg-blue-100 rounded-lg shrink-0">
                            {enlace.icono}
                          </div>
                          <div className="flex-1">
                            <h3 className="font-semibold text-gray-900 mb-2">{enlace.titulo}</h3>
                            <p className="text-sm text-gray-600 mb-3">{enlace.descripcion}</p>
                            <Button variant="outline" size="sm" asChild className="w-full">
                              <a href={enlace.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                                <ExternalLink className="w-3 h-3" />
                                Visitar
                              </a>
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <Separator className="my-8" />

                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-blue-800 mb-4 flex items-center gap-2">
                    <Info className="w-5 h-5" />
                    Información Adicional sobre INGENIUS
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6 text-sm">
                    <div>
                      <h4 className="font-semibold text-blue-700 mb-2">Datos de la Revista:</h4>
                      <ul className="space-y-1 text-blue-600">
                        <li>• <strong>ISSN:</strong> 1390-650X (impreso), 1390-860X (electrónico)</li>
                        <li>• <strong>Periodicidad:</strong> Semestral (enero y julio)</li>
                        <li>• <strong>Idiomas:</strong> Español e inglés</li>
                        <li>• <strong>Acceso:</strong> Abierto (Open Access)</li>
                        <li>• <strong>Indexación:</strong> Scopus, Redalyc, DOAJ</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-700 mb-2">Áreas Temáticas:</h4>
                      <ul className="space-y-1 text-blue-600">
                        <li>• Ingeniería Mecánica</li>
                        <li>• Ingeniería Eléctrica y Electrónica</li>
                        <li>• Ciencias de la Computación</li>
                        <li>• Ingeniería Industrial</li>
                        <li>• Tecnologías de la Información</li>
                        <li>• Innovación Tecnológica</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Footer mejorado */}
        <div className="mt-16 text-center">
          <Separator className="mb-8" />
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <p className="text-sm text-gray-600 mb-4">
              <strong>Fuentes:</strong> Basado en las normas oficiales de la revista INGENIUS de la Universidad Politécnica Salesiana del Ecuador y estándares internacionales de redacción científica.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-xs text-gray-500">
              <span>© 2025 - Guía Académica</span>
              <span>•</span>
              <a href="https://ingenius.ups.edu.ec/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
                Revista INGENIUS
              </a>
              <span>•</span>
              <a href="https://www.ups.edu.ec/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
                Universidad Politécnica Salesiana
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App

