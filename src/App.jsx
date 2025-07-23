import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs.jsx'
import { BookOpen, FileText, Users, CheckCircle, AlertCircle, Info } from 'lucide-react'
import diagramaImg from './assets/elementos_estructurales_simplificado.png'
import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState('elementos')

  const elementosEstructurales = [
    {
      categoria: "I. Elementos Preliminares",
      icon: <FileText className="w-5 h-5" />,
      elementos: [
        {
          nombre: "Título",
          descripcion: "Claro, conciso y atractivo. Refleja el contenido principal del estudio.",
          requisitos: ["Debe ser descriptivo", "Máximo 15 palabras recomendadas"]
        },
        {
          nombre: "Autores y Afiliación",
          descripcion: "Nombres completos y adscripción institucional.",
          requisitos: ["Referencia al final de la primera hoja (INGENIUS)", "Incluir datos de contacto"]
        },
        {
          nombre: "Resumen (Abstract)",
          descripcion: "Síntesis breve del problema, objetivos, métodos, resultados y conclusiones.",
          requisitos: ["Máximo 250 palabras (INGENIUS)", "En español e inglés (INGENIUS)"]
        },
        {
          nombre: "Palabras Clave (Keywords)",
          descripcion: "Términos descriptivos para facilitar la búsqueda del artículo.",
          requisitos: ["3 a 6 palabras (INGENIUS)", "En español e inglés (INGENIUS)"]
        }
      ]
    },
    {
      categoria: "II. Cuerpo del Artículo (Estructura IMRyD)",
      icon: <BookOpen className="w-5 h-5" />,
      elementos: [
        {
          nombre: "Introducción",
          descripcion: "Contexto, antecedentes, revisión de literatura, justificación, objetivos e hipótesis.",
          requisitos: ["Fundamentación", "Definiciones", "Revisión de literatura", "Formulación de objetivos e hipótesis"]
        },
        {
          nombre: "Materiales y Métodos (Metodología)",
          descripcion: "Descripción detallada de materiales, equipos, procedimientos y análisis.",
          requisitos: ["Recopilación de datos", "Tratamiento de variables", "Análisis estadístico"]
        },
        {
          nombre: "Resultados",
          descripcion: "Presentación clara y concisa de hallazgos usando texto, tablas y figuras.",
          requisitos: ["No interpretación en esta sección", "Uso de elementos gráficos apropiados"]
        },
        {
          nombre: "Discusión",
          descripcion: "Interpretación de resultados en contexto de literatura existente.",
          requisitos: ["Comparación con estudios previos", "Implicaciones y limitaciones", "Sugerencias futuras"]
        },
        {
          nombre: "Conclusiones",
          descripcion: "Resumen de principales hallazgos y su significado.",
          requisitos: ["Síntesis clara", "Respuesta a objetivos planteados"]
        }
      ]
    },
    {
      categoria: "III. Elementos Finales",
      icon: <CheckCircle className="w-5 h-5" />,
      elementos: [
        {
          nombre: "Referencias Bibliográficas",
          descripcion: "Lista de todas las fuentes citadas en el texto.",
          requisitos: ["Formato IEEE (INGENIUS)", "Ordenadas por citación (INGENIUS)"]
        },
        {
          nombre: "Agradecimientos",
          descripcion: "Reconocimiento a contribuciones externas.",
          requisitos: ["Cortos, no exceder un párrafo (INGENIUS)"]
        },
        {
          nombre: "Elementos Gráficos (Tablas y Figuras)",
          descripcion: "Material visual que complementa el texto.",
          requisitos: ["Numeradas secuencialmente", "Con descripción explicativa", "Figuras en archivos separados (300 dpi)"]
        }
      ]
    },
    {
      categoria: "IV. Requerimientos Técnicos Adicionales (INGENIUS)",
      icon: <AlertCircle className="w-5 h-5" />,
      elementos: [
        {
          nombre: "Extensión",
          descripcion: "Máximo 5000 palabras",
          requisitos: ["Incluye todo el contenido del artículo"]
        },
        {
          nombre: "Formato",
          descripcion: "Microsoft Word (.doc/.docx) o LaTeX (.tex)",
          requisitos: ["Seguir plantillas proporcionadas"]
        },
        {
          nombre: "Tipografía",
          descripcion: "Fuente de 12 puntos",
          requisitos: ["Justificación del margen derecho", "Doble 'enter' al final de cada párrafo"]
        }
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Elementos Estructurales de Artículos Científicos de Ingeniería
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Guía completa basada en las normas de la revista INGENIUS y estándares internacionales
          </p>
        </div>

        {/* Navigation Tabs */}
        <Tabs value={activeSection} onValueChange={setActiveSection} className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="elementos" className="flex items-center gap-2">
              <FileText className="w-4 h-4" />
              Elementos Estructurales
            </TabsTrigger>
            <TabsTrigger value="diagrama" className="flex items-center gap-2">
              <Info className="w-4 h-4" />
              Diagrama Visual
            </TabsTrigger>
            <TabsTrigger value="etica" className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              Ética en Redacción
            </TabsTrigger>
          </TabsList>

          {/* Elementos Estructurales Tab */}
          <TabsContent value="elementos" className="space-y-8">
            {elementosEstructurales.map((categoria, index) => (
              <Card key={index} className="shadow-lg">
                <CardHeader className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
                  <CardTitle className="flex items-center gap-3 text-xl">
                    {categoria.icon}
                    {categoria.categoria}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {categoria.elementos.map((elemento, elemIndex) => (
                      <Card key={elemIndex} className="border-l-4 border-l-blue-500">
                        <CardHeader className="pb-3">
                          <CardTitle className="text-lg text-blue-700">
                            {elemento.nombre}
                          </CardTitle>
                          <CardDescription className="text-sm">
                            {elemento.descripcion}
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="pt-0">
                          <div className="space-y-2">
                            <h4 className="font-semibold text-sm text-gray-700">Requisitos:</h4>
                            <div className="flex flex-wrap gap-1">
                              {elemento.requisitos.map((req, reqIndex) => (
                                <Badge key={reqIndex} variant="secondary" className="text-xs">
                                  {req}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          {/* Diagrama Visual Tab */}
          <TabsContent value="diagrama" className="space-y-6">
            <Card className="shadow-lg">
              <CardHeader className="bg-gradient-to-r from-green-600 to-teal-600 text-white">
                <CardTitle className="flex items-center gap-3 text-xl">
                  <Info className="w-5 h-5" />
                  Diagrama de Elementos Estructurales
                </CardTitle>
                <CardDescription className="text-green-100">
                  Visualización esquemática de la estructura completa de un artículo científico
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <div className="flex justify-center">
                  <img 
                    src={diagramaImg} 
                    alt="Diagrama de elementos estructurales de un artículo científico de ingeniería"
                    className="max-w-full h-auto rounded-lg shadow-md"
                  />
                </div>
                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <h3 className="font-semibold text-blue-800 mb-2">Cómo usar este diagrama:</h3>
                  <ul className="text-sm text-blue-700 space-y-1">
                    <li>• Sigue la estructura de arriba hacia abajo para organizar tu artículo</li>
                    <li>• Cada rama representa una sección indispensable</li>
                    <li>• Los elementos en azul son específicos de la revista INGENIUS</li>
                    <li>• La estructura IMRyD es el estándar internacional más aceptado</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Ética en Redacción Tab */}
          <TabsContent value="etica" className="space-y-6">
            <Card className="shadow-lg">
              <CardHeader className="bg-gradient-to-r from-purple-600 to-pink-600 text-white">
                <CardTitle className="flex items-center gap-3 text-xl">
                  <Users className="w-5 h-5" />
                  ¿Cómo influye la ética en la redacción científica?
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="prose max-w-none">
                  <p className="text-lg leading-relaxed text-gray-700 mb-6">
                    La ética influye de manera crucial en la redacción científica al ser el pilar que sostiene la credibilidad y la fiabilidad del conocimiento. Implica la honestidad y transparencia en la presentación de resultados, evitando la manipulación o falsificación de datos. Asimismo, exige originalidad y el debido reconocimiento a las fuentes mediante una citación rigurosa, combatiendo el plagio y el autoplagio. La autoría responsable es otro aspecto ético fundamental, asegurando que solo quienes contribuyeron sustancialmente sean reconocidos. Ignorar estos principios puede llevar a la retracción de publicaciones, daño reputacional y la erosión de la confianza pública en la ciencia, subrayando que la ética no es un mero formalismo, sino una condición indispensable para la integridad de la investigación.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mt-8">
                  <Card className="border-l-4 border-l-green-500">
                    <CardHeader>
                      <CardTitle className="text-green-700 flex items-center gap-2">
                        <CheckCircle className="w-5 h-5" />
                        Principios Éticos Fundamentales
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <Badge variant="outline" className="mt-0.5">1</Badge>
                          <span><strong>Honestidad y Transparencia:</strong> Presentación veraz de resultados sin manipulación</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Badge variant="outline" className="mt-0.5">2</Badge>
                          <span><strong>Originalidad:</strong> Evitar plagio y autoplagio, citar correctamente</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Badge variant="outline" className="mt-0.5">3</Badge>
                          <span><strong>Autoría Responsable:</strong> Reconocer solo contribuciones sustanciales</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Badge variant="outline" className="mt-0.5">4</Badge>
                          <span><strong>Confidencialidad:</strong> Proteger datos de participantes</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Badge variant="outline" className="mt-0.5">5</Badge>
                          <span><strong>Responsabilidad Social:</strong> Considerar impacto en sociedad</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-l-red-500">
                    <CardHeader>
                      <CardTitle className="text-red-700 flex items-center gap-2">
                        <AlertCircle className="w-5 h-5" />
                        Consecuencias de Mala Conducta
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <Badge variant="destructive" className="mt-0.5">!</Badge>
                          <span>Retracción de artículos publicados</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Badge variant="destructive" className="mt-0.5">!</Badge>
                          <span>Daño a la reputación del investigador</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Badge variant="destructive" className="mt-0.5">!</Badge>
                          <span>Pérdida de financiación</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Badge variant="destructive" className="mt-0.5">!</Badge>
                          <span>Sanciones académicas y profesionales</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Badge variant="destructive" className="mt-0.5">!</Badge>
                          <span>Erosión de la confianza pública en la ciencia</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Footer */}
        <div className="mt-12 text-center text-gray-600">
          <p className="text-sm">
            Basado en las normas de la revista INGENIUS de la Universidad Politécnica Salesiana y estándares internacionales de redacción científica.
          </p>
        </div>
      </div>
    </div>
  )
}

export default App

