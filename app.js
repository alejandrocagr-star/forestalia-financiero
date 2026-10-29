
const casos = [
  {
    titulo: "Caso 1. ¿Autorizarías este pago?",
    pregunta: "Un proveedor solicita el pago inmediato de una factura relacionada con un proyecto. La operación es urgente, pero falta una de las autorizaciones establecidas en el procedimiento interno. El responsable del proyecto insiste en que se tramite para evitar retrasos. ¿Qué debería hacer el departamento financiero?",
    opciones: [
      "A. Tramitar el pago y regularizar la autorización posteriormente.",
      "B. Solicitar una confirmación verbal del responsable del proyecto.",
      "C. Mantener el pago pendiente hasta completar las autorizaciones exigidas.",
      "D. Dividir el pago en dos operaciones para facilitar su tramitación."
    ],
    correcta: 2,
    explicaciones: [
      "La urgencia no justifica realizar pagos sin cumplir los controles establecidos.",
      "Una confirmación verbal no sustituye las autorizaciones formales exigidas.",
      "CORRECTA. Deben verificarse las autorizaciones y dejar evidencia antes de ejecutar el pago.",
      "Fraccionar pagos para evitar controles supone un riesgo adicional de incumplimiento."
    ]
  },
  {
    titulo: "Caso 2. Financiación con una contraparte",
    pregunta: "Durante una operación de financiación estructurada, se propone incorporar una nueva entidad intermediaria. La operación presenta condiciones económicas favorables, pero todavía no se ha completado la revisión de la contraparte. ¿Cuál es la actuación más adecuada?",
    opciones: [
      "A. Completar la diligencia debida antes de formalizar la operación.",
      "B. Formalizar la financiación y revisar la contraparte durante el primer año.",
      "C. Aceptar la operación si el intermediario aporta referencias comerciales.",
      "D. Delegar toda la responsabilidad de comprobación en la entidad financiadora."
    ],
    correcta: 0,
    explicaciones: [
      "CORRECTA. Es necesario verificar la identidad, integridad y riesgos de la contraparte antes de asumir compromisos.",
      "La revisión posterior puede dejar a la organización expuesta a riesgos ya materializados.",
      "Las referencias comerciales no sustituyen una diligencia debida adecuada.",
      "La participación de otras entidades no elimina las responsabilidades propias de Forestalia."
    ]
  },
  {
    titulo: "Caso 3. Cambio de cuenta bancaria",
    pregunta: "El departamento de Tesorería recibe un correo aparentemente enviado por un proveedor habitual solicitando modificar su cuenta bancaria. El mensaje utiliza su imagen corporativa y pide que el siguiente pago se realice a la nueva cuenta. ¿Qué actuación resulta más adecuada?",
    opciones: [
      "A. Actualizar la cuenta porque el correo procede aparentemente del proveedor.",
      "B. Realizar una transferencia de prueba para comprobar que la cuenta funciona.",
      "C. Solicitar una segunda confirmación respondiendo al mismo correo.",
      "D. Verificar el cambio mediante un canal independiente y aplicar el procedimiento de validación."
    ],
    correcta: 3,
    explicaciones: [
      "La apariencia del correo no garantiza que la solicitud sea auténtica.",
      "Una transferencia de prueba también puede provocar una pérdida económica.",
      "Responder al mismo correo no resulta suficiente si la cuenta de origen está comprometida.",
      "CORRECTA. La comprobación independiente y la trazabilidad reducen el riesgo de fraude."
    ]
  },
  {
    titulo: "Caso 4. Previsiones financieras",
    pregunta: "Durante la elaboración de las previsiones financieras de un proyecto, un responsable solicita modificar determinados importes para presentar una rentabilidad superior a la estimada. Argumenta que los resultados probablemente mejorarán en los próximos meses. ¿Qué debería hacer el equipo financiero?",
    opciones: [
      "A. Ajustar las cifras porque las previsiones no son resultados definitivos.",
      "B. Mantener hipótesis justificadas y documentar cualquier modificación.",
      "C. Incorporar los cambios si permiten mejorar las posibilidades de financiación.",
      "D. Modificar las cifras y revisar las diferencias al cierre del ejercicio."
    ],
    correcta: 1,
    explicaciones: [
      "Las previsiones deben basarse en criterios razonables, no en resultados deseados.",
      "CORRECTA. Las hipótesis y cambios deben estar fundamentados, ser verificables y mantener su trazabilidad.",
      "La necesidad de financiación no justifica presentar información potencialmente engañosa.",
      "Una revisión posterior no corrige el riesgo de haber utilizado información injustificada."
    ]
  },
  {
    titulo: "Caso 5. Transferencia a un tercero",
    pregunta: "Se recibe una solicitud para realizar una transferencia a una sociedad que no figura como contraparte habitual. La documentación presenta inconsistencias y la operación debe ejecutarse con urgencia. ¿Cómo debería actuar Tesorería?",
    opciones: [
      "A. Ejecutar la transferencia si existe disponibilidad de fondos.",
      "B. Solicitar una declaración del beneficiario y continuar automáticamente.",
      "C. Detener temporalmente la operación y trasladar las alertas para su revisión.",
      "D. Realizar el pago por un importe inferior para reducir el riesgo."
    ],
    correcta: 2,
    explicaciones: [
      "La disponibilidad de fondos no acredita la legitimidad de una operación.",
      "Una declaración no resuelve por sí sola las inconsistencias detectadas.",
      "CORRECTA. Deben revisarse las alertas y aplicarse los controles de diligencia debida y prevención correspondientes.",
      "Reducir el importe no elimina el riesgo y puede dificultar la detección de operaciones irregulares."
    ]
  },
  {
    titulo: "Caso 6. Factura de intermediación",
    pregunta: "Un intermediario presenta una factura por servicios de asesoramiento relacionados con una operación financiera. La descripción es genérica, no se identifican entregables y el importe es elevado. El responsable de la operación solicita su pago inmediato. ¿Qué actuación es más adecuada?",
    opciones: [
      "A. Solicitar evidencias del servicio, verificar su justificación y aplicar los controles de aprobación.",
      "B. Pagar la factura porque existe una relación comercial previa.",
      "C. Autorizar el pago si el intermediario garantiza que los servicios se realizaron.",
      "D. Registrar el gasto y revisar la documentación en la siguiente auditoría."
    ],
    correcta: 0,
    explicaciones: [
      "CORRECTA. La prestación efectiva, proporcionalidad y legitimidad del servicio deben poder acreditarse.",
      "Una relación comercial anterior no sustituye la comprobación de cada operación.",
      "La declaración del intermediario no es suficiente si faltan evidencias objetivas.",
      "La revisión posterior puede detectar el problema cuando el pago ya se haya realizado."
    ]
  },
  {
    titulo: "Caso 7. Información financiera confidencial",
    pregunta: "Un empleado recibe una petición para enviar documentación financiera de un proyecto a una dirección de correo externa. La persona solicitante afirma colaborar con una entidad interesada en financiar la operación, pero no consta autorización para compartir los documentos. ¿Qué debería hacer?",
    opciones: [
      "A. Enviar la documentación eliminando únicamente los nombres de los empleados.",
      "B. Compartirla si la entidad manifiesta que mantendrá la confidencialidad.",
      "C. Remitir primero los documentos y solicitar después la autorización.",
      "D. Verificar la legitimidad de la solicitud y obtener las autorizaciones necesarias antes del envío."
    ],
    correcta: 3,
    explicaciones: [
      "Eliminar nombres no garantiza que desaparezcan los riesgos de confidencialidad.",
      "Una manifestación informal no sustituye los controles de acceso y divulgación.",
      "La autorización posterior no evita una posible divulgación indebida.",
      "CORRECTA. Debe comprobarse la necesidad, legitimidad y autorización de la comunicación."
    ]
  },
  {
    titulo: "Caso 8. Operación con controles incompletos",
    pregunta: "Una operación financiera está próxima a formalizarse. Durante la revisión final se detecta que falta documentación justificativa y que determinados controles de aprobación no se han completado. La dirección del proyecto insiste en mantener la fecha prevista. ¿Qué debería hacer el equipo financiero?",
    opciones: [
      "A. Formalizar la operación y completar los controles después.",
      "B. Comunicar las deficiencias y completar los controles necesarios antes de formalizar.",
      "C. Continuar si la operación cuenta con una valoración económica favorable.",
      "D. Solicitar una autorización verbal excepcional sin dejar constancia."
    ],
    correcta: 1,
    explicaciones: [
      "Formalizar sin controles suficientes puede generar riesgos financieros y de cumplimiento.",
      "CORRECTA. Las deficiencias deben comunicarse y resolverse antes de asumir compromisos, conforme al procedimiento aplicable.",
      "Una valoración económica positiva no elimina los riesgos legales y de cumplimiento.",
      "Las excepciones deben estar justificadas, autorizadas formalmente y documentadas."
    ]
  },
  {
    titulo: "Caso 9. Sospecha de fraude financiero",
    pregunta: "Durante una revisión de pagos se detectan varias facturas con conceptos similares, importes próximos a los límites de autorización y un mismo beneficiario. No existe evidencia concluyente de fraude, pero sí indicios que requieren análisis. ¿Qué actuación resulta más adecuada?",
    opciones: [
      "A. Esperar a disponer de pruebas definitivas antes de comunicar la situación.",
      "B. Contactar directamente con el beneficiario y advertirle de la sospecha.",
      "C. Registrar los indicios, preservar las evidencias y comunicar la situación por los canales establecidos.",
      "D. Eliminar las operaciones sospechosas del informe hasta aclarar los hechos."
    ],
    correcta: 2,
    explicaciones: [
      "No es necesario disponer de pruebas concluyentes para comunicar indicios razonables.",
      "Advertir al beneficiario sin seguir el procedimiento podría comprometer una investigación.",
      "CORRECTA. La trazabilidad, preservación de evidencias y comunicación interna permiten gestionar adecuadamente los indicios.",
      "Ocultar operaciones compromete la integridad de los registros y dificulta su revisión."
    ]
  }
];

let indiceActual = 0;
let seleccion = null;
let puntuacion = 0;

const letras = ["A", "B", "C", "D"];

const pantallas = {
  inicio: document.getElementById("welcomeScreen"),
  pregunta: document.getElementById("quizScreen"),
  resolucion: document.getElementById("resolutionScreen"),
  final: document.getElementById("finalScreen")
};

function mostrarPantalla(nombre) {
  Object.values(pantallas).forEach(pantalla => {
    pantalla.classList.remove("active");
  });

  pantallas[nombre].classList.add("active");
  window.scrollTo(0, 0);
}

function comenzar() {
  indiceActual = 0;
  seleccion = null;
  puntuacion = 0;
  mostrarPregunta();
}

function mostrarPregunta() {
  const caso = casos[indiceActual];
  seleccion = null;

  document.getElementById("caseCounter").textContent =
    `CASO PRÁCTICO ${indiceActual + 1} DE ${casos.length}`;

  document.getElementById("scoreCounter").textContent =
    `PUNTUACIÓN: ${puntuacion}`;

  document.getElementById("progressBar").style.width =
    `${((indiceActual + 1) / casos.length) * 100}%`;

  document.getElementById("questionTitle").textContent = caso.titulo;
  document.getElementById("questionText").textContent = caso.pregunta;

  const contenedor = document.getElementById("answersContainer");
  contenedor.innerHTML = "";

  caso.opciones.forEach((opcion, indice) => {
    const boton = document.createElement("button");
    boton.className = "answer";
    boton.textContent = opcion;

    boton.addEventListener("click", () => {
      seleccion = indice;

      contenedor.querySelectorAll(".answer").forEach(elemento => {
        elemento.classList.remove("selected");
      });

      boton.classList.add("selected");
      document.getElementById("checkBtn").disabled = false;
    });

    contenedor.appendChild(boton);
  });

  document.getElementById("checkBtn").disabled = true;
  mostrarPantalla("pregunta");
}

function comprobarRespuesta() {
  if (seleccion === null) return;

  const caso = casos[indiceActual];
  const acierto = seleccion === caso.correcta;

  if (acierto) {
    puntuacion++;
  }

  const badge = document.getElementById("resultBadge");

  badge.textContent = acierto
    ? "¡RESPUESTA CORRECTA!"
    : "RESPUESTA INCORRECTA";

  badge.className = acierto
    ? "result-badge success"
    : "result-badge error";

  document.getElementById("resolutionTitle").textContent =
    `${caso.titulo} - Resolución`;

  document.getElementById("resolutionIntro").textContent =
    `La respuesta correcta es la opción ${letras[caso.correcta]}.`;

  const contenedor = document.getElementById("explanationsContainer");
  contenedor.innerHTML = "";

  caso.explicaciones.forEach((explicacion, indice) => {
    const esCorrecta = indice === caso.correcta;

    const bloque = document.createElement("div");
    bloque.className = esCorrecta
      ? "explanation correct"
      : "explanation incorrect";

    const encabezado = document.createElement("strong");
    encabezado.textContent =
      `OPCIÓN ${letras[indice]} - ${esCorrecta ? "CORRECTA" : "INCORRECTA"}`;

    const texto = document.createElement("span");
    texto.textContent = explicacion.replace(/^CORRECTA\.\s*/, "");

    bloque.appendChild(encabezado);
    bloque.appendChild(texto);
    contenedor.appendChild(bloque);
  });

  document.getElementById("nextBtn").textContent =
    indiceActual === casos.length - 1
      ? "VER RESULTADO FINAL"
      : "SIGUIENTE CASO";

  mostrarPantalla("resolucion");
}

function siguienteCaso() {
  indiceActual++;

  if (indiceActual >= casos.length) {
    mostrarResultadoFinal();
  } else {
    mostrarPregunta();
  }
}

function mostrarResultadoFinal() {
  document.getElementById("finalScore").textContent =
    `${puntuacion} / ${casos.length}`;

  let mensaje;

  if (puntuacion === casos.length) {
    mensaje = "¡Excelente! Has identificado correctamente todos los riesgos.";
  } else if (puntuacion >= 7) {
    mensaje = "¡Muy buen resultado! Has demostrado un buen conocimiento de los controles de cumplimiento.";
  } else if (puntuacion >= 5) {
    mensaje = "Buen trabajo. Repasar algunos casos te ayudará a reforzar los conocimientos.";
  } else {
    mensaje = "Has completado el reto. Repasar las resoluciones te ayudará a mejorar.";
  }

  document.getElementById("finalMessage").textContent = mensaje;
  mostrarPantalla("final");
}

document.getElementById("startBtn").addEventListener("click", comenzar);

document.getElementById("checkBtn").addEventListener(
  "click",
  comprobarRespuesta
);

document.getElementById("nextBtn").addEventListener(
  "click",
  siguienteCaso
);

document.getElementById("restartBtn").addEventListener(
  "click",
  comenzar
);

document.getElementById("quizHomeBtn").addEventListener(
  "click",
  () => mostrarPantalla("inicio")
);

document.getElementById("resolutionHomeBtn").addEventListener(
  "click",
  () => mostrarPantalla("inicio")
);
