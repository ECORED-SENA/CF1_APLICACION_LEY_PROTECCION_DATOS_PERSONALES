<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      // Para cuestionario usar: <ActividadController :cuestionario="cuestionario"/>
      // Para parrafo usar: <ActividadController :parrafo="parrafo"/>
      #Actividad                
      <ActividadController :cuestionario="cuestionario"/>

</template>

<script>
import ActividadController from '@ecored-sena/boulder-kit/plugin/components/actividad/ActividadController.vue'

export default {
  name: 'ActividadDidactica',
  components: {
    ActividadController,
  },
  data: () => ({
    cuestionario: {
      tema: 'Protección y tratamiento de datos personales',
      titulo: 'Cuestionario',
      introduccion:
        '<b>Objetivo:</b> verificar la comprensión de los conceptos, principios, derechos, obligaciones y mecanismos relacionados con la protección de datos personales, de acuerdo con la normatividad vigente y su aplicación en contextos organizacionales.',
      barajarPreguntas: false,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      preguntas: [
        {
          id: 1,
          texto: '¿Cuándo una información puede considerarse dato personal?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Cuando se encuentra almacenada en medios digitales. ',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Cuando ha sido entregada voluntariamente por el titular. ',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Cuando permite identificar o hacer identificable a una persona. ',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Cuando pertenece a una base de datos institucional.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            'Una empresa recopila nombre, número de identificación, correo y teléfono en un formulario de registro. ¿Por qué esta información debe protegerse?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Porque toda información registrada es confidencial. ',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Porque solo puede usarse en medios físicos. ',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Porque permite identificar o contactar a una persona. ',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Porque pertenece únicamente a entidades públicas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 13,
          texto:
            'Una institución educativa solicita datos para matrícula, pero después los usa para enviar publicidad de terceros. ¿Qué principio se ve comprometido?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Finalidad. ',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Veracidad. ',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Seguridad. ',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Confidencialidad.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            '¿Cuál situación muestra una falla en el acceso y circulación restringida de la información?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Actualizar datos reportados por el titular. ',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Guardar evidencia de una autorización. ',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Clasificar datos según su sensibilidad. ',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Permitir acceso general a la base de datos.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            '¿Cuál afirmación se relaciona mejor con el propósito de la Ley 1581 de 2012?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Regular únicamente archivos digitales. ',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Proteger derechos sobre datos personales. ',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Autorizar el intercambio libre de datos. ',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Exigir eliminación inmediata de bases.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto:
            'Para que una autorización de tratamiento sea válida, debe ser:',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Previa, expresa e informada. ',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'General, verbal y permanente. ',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Posterior, amplia y automática. ',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Interna, reservada y opcional.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto:
            'Una clínica almacena diagnósticos, tratamientos y resultados de exámenes de sus pacientes. ¿Qué tipo de datos administra?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Datos públicos. ',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Datos privados. ',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Datos sensibles. ',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Datos semiprivados.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto:
            'Una empresa limita el acceso a la información salarial solo al área de talento humano. ¿Qué principio está aplicando?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Veracidad. ',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Legalidad. ',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Transparencia. ',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Acceso restringido.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto: 'En el tratamiento de datos personales, el titular es:',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La persona natural dueña de los datos. ',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'La empresa que define la finalidad. ',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'El proveedor que almacena archivos. ',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'El área que consulta la información.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto:
            'Un cliente solicita corregir su número de identificación registrado de forma incorrecta. ¿Qué derecho está ejerciendo?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Derecho de supresión. ',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Derecho de rectificación. ',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Derecho de autorización. ',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Derecho de circulación.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto:
            'Una empresa decide qué datos recolecta, para qué los usa y cuánto tiempo los conserva. ¿Qué rol cumple?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Titular de los datos. ',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Titular de los datos. ',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Responsable del tratamiento. ',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Encargado del tratamiento.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 12,
          texto:
            'Una plataforma externa almacena datos de clientes siguiendo instrucciones de una empresa. Según el componente, esta plataforma actúa como:',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Titular de la información. ',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Responsable principal. ',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Autoridad de control. ',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Encargado del tratamiento.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 13,
          texto: '¿Cuál ejemplo corresponde a un dato semiprivado?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Historial crediticio. ',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Diagnóstico médico. ',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Huella dactilar. ',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Registro público.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 14,
          texto:
            'Antes de enviar mensajes comerciales a una base de clientes, la organización debe verificar principalmente:',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El tamaño de la base. ',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'El diseño del mensaje. ',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La autorización de esa finalidad. ',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'La fecha de creación del archivo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 15,
          texto:
            '¿Qué documento informa a los titulares las reglas, finalidades, derechos y procedimientos para el tratamiento de sus datos?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Registro de asistencia. ',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Política de tratamiento de datos. ',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Inventario de equipos. ',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Manual de archivo físico.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 16,
          texto:
            '¿Cuál situación puede generar incumplimiento en protección de datos personales?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Capacitar al personal autorizado. ',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Restringir accesos por perfiles. ',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Conservar soportes de autorización. ',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Usar datos para fines no informados.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 17,
          texto:
            '¿Cuál de las siguientes opciones corresponde a una medida técnica de protección?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Cifrado de información. ',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Acuerdo de confidencialidad. ',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Política institucional. ',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Capacitación al personal.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 18,
          texto:
            'Una institución educativa publica fotografías de estudiantes menores de edad. ¿Qué criterio debe considerar antes de hacerlo?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El interés publicitario. ',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La disponibilidad del archivo. ',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'El interés superior del menor. ',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'La cantidad de estudiantes.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 19,
          texto:
            '¿Cuál acción ayuda a prevenir sanciones por tratamiento inadecuado de datos personales?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Usar bases antiguas sin revisión. ',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Compartir información entre áreas. ',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Conservar datos sin finalidad vigente. ',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Revisar autorizaciones y accesos.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 20,
          texto:
            'En un diagnóstico básico de protección de datos, ¿qué debe identificarse primero?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El número de computadores disponibles. ',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Los datos tratados y su finalidad. ',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'El diseño visual de formularios. ',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La cantidad de campañas realizadas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
