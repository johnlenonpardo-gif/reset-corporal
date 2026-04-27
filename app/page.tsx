"use client";

declare global {
  interface Window {
    gtagSendEvent?: (url: string) => boolean;
  }
}

export default function ResetCorporalPage() {
  const hotmartUrl = "https://go.hotmart.com/A104709392J?dp=1&redirectionUrl=https%3A%2F%2Fhotmart.com%2Fes%2Fmarketplace%2Fproductos%2Freset-corporal-30-dias%2FA104709392J";

  const handleComprar = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    if (window.gtagSendEvent) {
      window.gtagSendEvent(hotmartUrl);
    } else {
      window.location.href = hotmartUrl;
    }
  };

  const includes = [
    "Libro digital completo en formato PDF",
    "Plan alimenticio diario por 30 días",
    "100 recetas saludables bien detalladas",
    "Ingredientes y preparación paso a paso",
    "Rutina de ejercicio progresiva en casa",
    "Biblioteca de ejercicios explicados",
    "Lista de compras organizada",
    "Checklist semanal para preparar tus comidas",
    "Tracker de hábitos, agua, sueño y movimiento",
    "Control de peso y medidas",
    "Consejos para ansiedad, sustituciones y organización",
  ];

  const phases = [
    {
      title: "Días 1 al 14",
      subtitle: "Fase estricta",
      text: "Cena sin harinas, cero ultraprocesados y foco total en ordenar tus comidas.",
    },
    {
      title: "Días 15 al 21",
      subtitle: "Fase intermedia",
      text: "Carbohidratos en la cena solo si hubo actividad fuerte o entrenamiento completo.",
    },
    {
      title: "Días 22 al 30",
      subtitle: "Consolidación",
      text: "Una comida libre por semana, manteniendo proteína, verduras, agua y movimiento.",
    },
  ];

  const benefits = [
    "Ordenar tus comidas sin complicarte.",
    "Reducir ultraprocesados, alcohol y gaseosas.",
    "Incorporar proteína, verduras y agua todos los días.",
    "Empezar a entrenar con rutinas simples.",
    "Medir tu progreso con tablas imprimibles.",
    "Construir hábitos sostenibles después de los 30 días.",
  ];

  return (
    <main className="min-h-screen bg-[#f7f7ef] text-[#17351f]">
      <section className="relative overflow-hidden bg-gradient-to-br from-[#17351f] via-[#285c32] to-[#f0b928] text-white">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_left,_white,_transparent_35%)]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-6 py-16 md:grid-cols-2 md:py-24">
          <div>
            <p className="mb-4 inline-flex rounded-full bg-white/15 px-4 py-2 text-sm font-semibold backdrop-blur">
              Guía digital + alimentación + entrenamiento
            </p>

            <h1 className="text-4xl font-black leading-tight md:text-6xl">
              Reset Corporal 30 Días
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-white/90 md:text-xl">
              Un libro digital completo para ordenar tu alimentación, sumar
              movimiento diario y construir hábitos saludables con un plan claro
              de 30 días.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href={hotmartUrl}
                onClick={handleComprar}
                className="rounded-full bg-[#f0b928] px-8 py-4 text-center text-base font-black text-[#17351f] shadow-xl transition hover:scale-105 hover:bg-white"
              >
                Comprar ahora
              </a>

              <a
                href="#incluye"
                className="rounded-full border border-white/50 px-8 py-4 text-center text-base font-bold text-white transition hover:bg-white/10"
              >
                Ver qué incluye
              </a>
            </div>

            <p className="mt-5 text-sm text-white/75">
              Acceso digital inmediato por Hotmart.
            </p>
          </div>

          <div className="flex justify-center">
            <div className="rounded-[2rem] bg-white/15 p-4 shadow-2xl backdrop-blur">
              <img
                src="/reset-corporal-cover.png"
                alt="Portada del libro Reset Corporal 30 Días"
                className="h-auto w-full max-w-sm rounded-[1.5rem] object-cover shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="rounded-3xl bg-white p-8 shadow-lg">
            <p className="text-4xl font-black text-[#f0b928]">30</p>
            <h3 className="mt-3 text-xl font-black">Días guiados</h3>
            <p className="mt-3 text-[#4b5b4d]">
              Cada día tiene comidas, movimiento y una regla simple para seguir
              avanzando.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow-lg">
            <p className="text-4xl font-black text-[#f0b928]">100</p>
            <h3 className="mt-3 text-xl font-black">Recetas detalladas</h3>
            <p className="mt-3 text-[#4b5b4d]">
              Opciones saludables con ingredientes, preparación, consejos y
              reemplazos.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow-lg">
            <p className="text-4xl font-black text-[#f0b928]">100%</p>
            <h3 className="mt-3 text-xl font-black">Digital</h3>
            <p className="mt-3 text-[#4b5b4d]">
              Comprás por Hotmart y accedés al material de forma online.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#f0b928]">
              El problema
            </p>

            <h2 className="mt-3 text-3xl font-black md:text-4xl">
              ¿Te cuesta saber qué comer, cómo organizarte y cómo empezar a
              moverte?
            </h2>
          </div>

          <div className="rounded-3xl bg-[#f7f7ef] p-8 text-lg leading-8 text-[#4b5b4d]">
            Muchas personas intentan cambiar sus hábitos, pero abandonan porque
            no tienen un plan claro. Este reset te ordena el camino con comidas
            simples, entrenamiento progresivo y seguimiento diario.
          </div>
        </div>
      </section>

      <section id="incluye" className="mx-auto max-w-6xl px-6 py-16">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-black uppercase tracking-[0.2em] text-[#f0b928]">
            Qué recibís
          </p>

          <h2 className="mt-3 text-3xl font-black md:text-4xl">
            Todo lo que necesitás para empezar tu cambio durante 30 días
          </h2>

          <p className="mt-5 text-lg leading-8 text-[#4b5b4d]">
            Un material completo, ordenado y práctico para tener una guía clara
            de alimentación, recetas, entrenamiento y seguimiento.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {includes.map((item) => (
            <div
              key={item}
              className="flex items-start gap-4 rounded-2xl bg-white p-5 shadow-md"
            >
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#285c32] text-sm font-black text-white">
                ✓
              </span>
              <p className="font-semibold text-[#28452e]">{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#17351f] py-16 text-white">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#f0b928]">
              Cómo funciona
            </p>

            <h2 className="mt-3 text-3xl font-black md:text-4xl">
              Un método simple dividido en 3 fases
            </h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {phases.map((phase) => (
              <div
                key={phase.title}
                className="rounded-3xl bg-white/10 p-7 backdrop-blur"
              >
                <p className="text-sm font-bold text-[#f0b928]">
                  {phase.title}
                </p>

                <h3 className="mt-2 text-2xl font-black">
                  {phase.subtitle}
                </h3>

                <p className="mt-4 leading-7 text-white/80">{phase.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-2 md:items-center">
        <div className="rounded-[2rem] bg-white p-8 shadow-xl">
          <h2 className="text-3xl font-black">¿Para quién es?</h2>

          <ul className="mt-6 space-y-4 text-[#4b5b4d]">
            <li>• Para personas que quieren ordenar su alimentación.</li>
            <li>• Para quienes quieren bajar grasa y sentirse menos inflamados.</li>
            <li>• Para quienes necesitan una guía simple sin dietas extremas.</li>
            <li>• Para principiantes que quieren moverse desde casa.</li>
            <li>• Para quienes buscan constancia, no perfección.</li>
            <li>• Para quienes quieren recetas prácticas y bien explicadas.</li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-black uppercase tracking-[0.2em] text-[#f0b928]">
            Resultado esperado
          </p>

          <h2 className="mt-3 text-3xl font-black md:text-4xl">
            Más orden, más energía y mejores hábitos
          </h2>

          <p className="mt-5 text-lg leading-8 text-[#4b5b4d]">
            El objetivo no es hacer una dieta imposible. El objetivo es ayudarte
            a recuperar el control de tus comidas, sumar movimiento diario y
            construir una base saludable para sostener en el tiempo.
          </p>
        </div>
      </section>

      <section className="bg-[#f7f7ef] py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#f0b928]">
              Beneficios
            </p>

            <h2 className="mt-3 text-3xl font-black md:text-4xl">
              Qué podés lograr con este programa
            </h2>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map((item) => (
              <div key={item} className="rounded-3xl bg-white p-6 shadow-md">
                <p className="text-lg font-bold text-[#28452e]">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="text-sm font-black uppercase tracking-[0.2em] text-[#f0b928]">
            Oferta de lanzamiento
          </p>

          <h2 className="mt-3 text-4xl font-black md:text-5xl">
            Accedé hoy a Reset Corporal 30 Días
          </h2>

          <p className="mt-5 text-lg leading-8 text-[#4b5b4d]">
            Libro digital completo con plan de 30 días, 100 recetas detalladas,
            rutinas de ejercicio, trackers y consejos prácticos.
          </p>

          <div className="mx-auto mt-8 max-w-md rounded-[2rem] bg-[#f7f7ef] p-8 shadow-xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#285c32]">
              Precio especial
            </p>

            <p className="mt-4 text-5xl font-black text-[#17351f]">
              USD 9,99
            </p>

            <p className="mt-3 text-sm text-[#4b5b4d]">
              Pago único. Acceso digital inmediato por Hotmart.
            </p>

            <a
              href={hotmartUrl}
              onClick={handleComprar}
              className="mt-8 inline-flex w-full justify-center rounded-full bg-[#285c32] px-8 py-4 text-base font-black text-white shadow-xl transition hover:scale-105 hover:bg-[#17351f]"
            >
              Comprar ahora
            </a>
          </div>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-6 text-[#6b756d]">
            El precio puede variar según promociones, moneda local, impuestos o
            condiciones de Hotmart.
          </p>
        </div>
      </section>

      <footer className="bg-[#102516] px-6 py-10 text-center text-sm leading-7 text-white/70">
        <p>Reset Corporal 30 Días © John Pardo</p>

        <p className="mx-auto mt-4 max-w-3xl">
          Aviso importante: este material es una guía general de alimentación y
          entrenamiento. No reemplaza atención médica, nutricional ni profesional.
          Si tenés alguna lesión, enfermedad o condición médica, consultá con un
          profesional antes de comenzar.
        </p>
      </footer>
    </main>
  );
}
