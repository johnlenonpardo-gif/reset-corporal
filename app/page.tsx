"use client";

import type { MouseEvent } from "react";

declare global {
  interface Window {
    gtagSendEvent?: (url: string) => boolean;
  }
}

export default function ResetCorporalPage() {
  const hotmartUrl = "https://pay.hotmart.com/A104709392J";

  const handleComprar = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    if (window.gtagSendEvent) {
      window.gtagSendEvent(hotmartUrl);
    } else {
      window.location.href = hotmartUrl;
    }
  };

  const recibis = [
    "Ebook profesional en PDF",
    "100 recetas saludables detalladas",
    "Plan guiado de 30 días",
    "Rutinas de ejercicio para casa",
    "Reset Corporal Club incluido",
    "Lista de compras semanal",
    "Guía de porciones",
    "Trackers imprimibles",
    "Control de peso y medidas",
    "Consejos para ansiedad y organización",
    "Acceso inmediato por Hotmart",
  ];

  const problemas = [
    "No sabés qué comer durante la semana.",
    "Empezás motivado, pero abandonás a los pocos días.",
    "Terminás improvisando comidas rápidas y poco saludables.",
    "Te cuesta organizar compras, comidas y horarios.",
    "Querés moverte más, pero no sabés por dónde empezar.",
    "Necesitás algo simple, práctico y posible de sostener.",
  ];

  const beneficios = [
    "Más orden en tus comidas.",
    "Menos improvisación durante la semana.",
    "Recetas simples con ingredientes fáciles.",
    "Rutinas para empezar desde casa.",
    "Seguimiento diario para mantener constancia.",
    "Una guía clara para volver a enfocarte.",
  ];

  const bonos = [
    {
      titulo: "Bono 1",
      nombre: "Reset Corporal Club",
      texto: "App web para seguir el plan desde el celular, marcar hábitos y controlar tu progreso.",
    },
    {
      titulo: "Bono 2",
      nombre: "Lista de compras",
      texto: "Para organizar la semana sin perder tiempo pensando qué comprar.",
    },
    {
      titulo: "Bono 3",
      nombre: "Tracker de hábitos",
      texto: "Para marcar agua, movimiento, sueño y constancia diaria.",
    },
    {
      titulo: "Bono 4",
      nombre: "Control de medidas",
      texto: "Para registrar tu evolución sin depender solo de la balanza.",
    },
  ];

  const faqs = [
    {
      q: "¿Cómo recibo el ebook?",
      a: "Después de realizar la compra, Hotmart te da acceso digital al material.",
    },
    {
      q: "¿Es un producto físico?",
      a: "No. Es un ebook digital en PDF, pensado para leer desde el celular, tablet o computadora.",
    },
    {
      q: "¿Qué es Reset Corporal Club?",
      a: "Es una app web incluida como bonus, donde podés seguir el plan de 30 días, marcar hábitos, ver recetas, ejercicios y progreso desde el celular.",
    },
    {
      q: "¿Necesito gimnasio?",
      a: "No. El programa incluye rutinas simples para realizar en casa.",
    },
    {
      q: "¿Es para principiantes?",
      a: "Sí. Está pensado para personas que quieren empezar de forma simple y ordenada.",
    },
    {
      q: "¿Las recetas son difíciles?",
      a: "No. Las recetas están explicadas paso a paso, con ingredientes y consejos prácticos.",
    },
    {
      q: "¿Reemplaza a un nutricionista?",
      a: "No. Es una guía educativa general. No reemplaza atención médica, nutricional ni profesional.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#f7f7ef] text-[#17351f]">
      <section className="bg-[#102516] px-6 py-3 text-center text-sm font-bold text-white">
        Oferta de lanzamiento · Ebook digital + 100 recetas + Reset Corporal Club
      </section>

      <section className="relative overflow-hidden bg-gradient-to-br from-[#17351f] via-[#285c32] to-[#f0b928] text-white">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_left,_white,_transparent_35%)]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-14 md:grid-cols-2 md:py-24">
          <div>
            <p className="mb-5 inline-flex rounded-full bg-white/15 px-4 py-2 text-sm font-bold backdrop-blur">
              Acceso inmediato · Pago único · Compra protegida por Hotmart
            </p>

            <h1 className="text-4xl font-black leading-tight md:text-6xl">
              Dejá de improvisar tus comidas y empezá un plan claro de 30 días
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-white/90 md:text-xl">
              Reset Corporal 30 Días es un ebook práctico con 100 recetas
              saludables, rutinas en casa, lista de compras, trackers y acceso
              al Club para seguir tu progreso desde el celular.
            </p>

            <div className="mt-8 rounded-3xl bg-white/15 p-5 backdrop-blur">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#f0b928]">
                Precio especial de lanzamiento
              </p>

              <div className="mt-3 flex items-end gap-4">
                <p className="text-5xl font-black">USD 9,99</p>
                <p className="pb-2 text-lg text-white/70 line-through">
                  USD 19,99
                </p>
              </div>

              <p className="mt-2 text-sm text-white/80">
                Ebook completo + acceso a Reset Corporal Club incluido.
              </p>
            </div>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href={hotmartUrl}
                onClick={handleComprar}
                className="rounded-full bg-[#f0b928] px-8 py-4 text-center text-base font-black text-[#17351f] shadow-xl transition hover:scale-105 hover:bg-white"
              >
                Comprar ebook + Club
              </a>

              <a
                href="/club"
                className="rounded-full border border-white/50 px-8 py-4 text-center text-base font-bold text-white transition hover:bg-white/10"
              >
                Ver demo del Club
              </a>
            </div>

            <p className="mt-5 text-sm text-white/75">
              Material digital. No se envía producto físico.
            </p>
          </div>

          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute -left-6 -top-6 h-28 w-28 rounded-full bg-[#f0b928]/40 blur-2xl" />
              <div className="absolute -bottom-6 -right-6 h-28 w-28 rounded-full bg-white/30 blur-2xl" />

              <div className="relative rounded-[2rem] bg-white/15 p-4 shadow-2xl backdrop-blur">
                <img
                  src="/reset-corporal-cover.png"
                  alt="Portada del ebook Reset Corporal 30 Días"
                  className="h-auto w-full max-w-sm rounded-[1.5rem] object-cover shadow-2xl"
                />
              </div>

              <div className="absolute -bottom-5 left-1/2 w-[90%] -translate-x-1/2 rounded-2xl bg-white px-5 py-4 text-center text-[#17351f] shadow-xl">
                <p className="text-sm font-black">
                  100 recetas + plan + rutinas + Club
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-6 md:grid-cols-4">
          <div className="rounded-3xl bg-white p-6 text-center shadow-md">
            <p className="text-4xl font-black text-[#f0b928]">100</p>
            <p className="mt-2 font-black">Recetas</p>
          </div>

          <div className="rounded-3xl bg-white p-6 text-center shadow-md">
            <p className="text-4xl font-black text-[#f0b928]">30</p>
            <p className="mt-2 font-black">Días guiados</p>
          </div>

          <div className="rounded-3xl bg-white p-6 text-center shadow-md">
            <p className="text-4xl font-black text-[#f0b928]">Club</p>
            <p className="mt-2 font-black">App incluida</p>
          </div>

          <div className="rounded-3xl bg-white p-6 text-center shadow-md">
            <p className="text-4xl font-black text-[#f0b928]">Hoy</p>
            <p className="mt-2 font-black">Acceso inmediato</p>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#f0b928]">
              El problema
            </p>

            <h2 className="mt-3 text-3xl font-black md:text-5xl">
              Comer mejor no falla por falta de ganas. Falla por falta de plan.
            </h2>

            <p className="mt-5 text-lg leading-8 text-[#4b5b4d]">
              Cuando no tenés una guía clara, terminás improvisando. Y cuando
              improvisás, es mucho más fácil abandonar.
            </p>
          </div>

          <div className="grid gap-4">
            {problemas.map((item) => (
              <div
                key={item}
                className="rounded-2xl bg-[#f7f7ef] p-5 text-[#28452e]"
              >
                <p className="font-bold">✕ {item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#17351f] py-16 text-white">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <p className="text-sm font-black uppercase tracking-[0.2em] text-[#f0b928]">
            La solución
          </p>

          <h2 className="mx-auto mt-3 max-w-4xl text-3xl font-black md:text-5xl">
            Un ebook + una app web para que sepas qué comer, cómo organizarte y
            cómo seguir tu progreso
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/80">
            Reset Corporal 30 Días reúne recetas, planificación, ejercicios,
            seguimiento y acceso al Club en un solo sistema práctico.
          </p>

          <a
            href={hotmartUrl}
            onClick={handleComprar}
            className="mt-8 inline-flex rounded-full bg-[#f0b928] px-10 py-4 text-base font-black text-[#17351f] shadow-xl transition hover:scale-105 hover:bg-white"
          >
            Empezar ahora
          </a>
        </div>
      </section>

      <section id="contenido" className="mx-auto max-w-6xl px-6 py-16">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-black uppercase tracking-[0.2em] text-[#f0b928]">
            Qué recibís hoy
          </p>

          <h2 className="mt-3 text-3xl font-black md:text-5xl">
            Todo dentro de una oferta completa y fácil de seguir
          </h2>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {recibis.map((item) => (
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
        <div className="mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#f0b928]">
              Nuevo bonus incluido
            </p>

            <h2 className="mt-3 text-3xl font-black md:text-5xl">
              Además del ebook, accedé a Reset Corporal Club
            </h2>

            <p className="mt-5 text-lg leading-8 text-white/80">
              Con tu compra vas a poder acceder a una app web donde podés
              seguir el plan día por día, marcar tus hábitos, consultar recetas,
              ver ejercicios y controlar tu progreso desde el celular.
            </p>

            <p className="mt-5 text-lg leading-8 text-white/80">
              No es solo un PDF: es una experiencia guiada para ayudarte a
              sostener la constancia durante los 30 días.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href={hotmartUrl}
                onClick={handleComprar}
                className="rounded-full bg-[#f0b928] px-8 py-4 text-center text-base font-black text-[#17351f] shadow-xl transition hover:scale-105 hover:bg-white"
              >
                Comprar ebook + Club
              </a>

              <a
                href="/club"
                className="rounded-full border border-white/50 px-8 py-4 text-center text-base font-bold text-white transition hover:bg-white/10"
              >
                Ver demo del Club
              </a>
            </div>
          </div>

          <div className="rounded-[2rem] bg-white/10 p-8 shadow-xl backdrop-blur">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#f0b928]">
              Reset Corporal Club incluye
            </p>

            <div className="mt-6 space-y-4">
              <div className="rounded-2xl bg-white/10 p-4">
                <p className="font-black">✓ Plan diario de 30 días</p>
              </div>

              <div className="rounded-2xl bg-white/10 p-4">
                <p className="font-black">✓ Checklist de hábitos</p>
              </div>

              <div className="rounded-2xl bg-white/10 p-4">
                <p className="font-black">✓ Biblioteca de recetas</p>
              </div>

              <div className="rounded-2xl bg-white/10 p-4">
                <p className="font-black">✓ Ejercicios para casa</p>
              </div>

              <div className="rounded-2xl bg-white/10 p-4">
                <p className="font-black">✓ Control de progreso</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#f0b928]">
              Vista previa
            </p>

            <h2 className="mt-3 text-3xl font-black md:text-5xl">
              Así está organizado por dentro
            </h2>

            <p className="mt-5 text-lg leading-8 text-[#4b5b4d]">
              Un formato limpio, claro y pensado para que puedas usarlo todos
              los días.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div className="rounded-[2rem] bg-[#f7f7ef] p-6 shadow-lg">
              <p className="text-sm font-black uppercase tracking-[0.2em] text-[#285c32]">
                Receta
              </p>
              <h3 className="mt-3 text-2xl font-black">
                Bowl proteico saludable
              </h3>
              <div className="mt-5 space-y-3 text-sm text-[#4b5b4d]">
                <p>Tiempo: 20 minutos</p>
                <p>Porciones: 1</p>
                <p>
                  Incluye ingredientes, preparación paso a paso y reemplazos.
                </p>
              </div>
            </div>

            <div className="rounded-[2rem] bg-[#f7f7ef] p-6 shadow-lg">
              <p className="text-sm font-black uppercase tracking-[0.2em] text-[#285c32]">
                Rutina
              </p>
              <h3 className="mt-3 text-2xl font-black">
                Entrenamiento en casa
              </h3>
              <div className="mt-5 space-y-3 text-sm text-[#4b5b4d]">
                <p>Sentadillas, plancha, puente de glúteos y caminata.</p>
                <p>Opciones simples para empezar sin gimnasio.</p>
              </div>
            </div>

            <div className="rounded-[2rem] bg-[#f7f7ef] p-6 shadow-lg">
              <p className="text-sm font-black uppercase tracking-[0.2em] text-[#285c32]">
                Seguimiento
              </p>
              <h3 className="mt-3 text-2xl font-black">
                Trackers imprimibles
              </h3>
              <div className="mt-5 space-y-3 text-sm text-[#4b5b4d]">
                <p>Agua, sueño, movimiento, hábitos y medidas.</p>
                <p>Para ver tu constancia durante los 30 días.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f7f7ef] py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#f0b928]">
              Beneficios
            </p>

            <h2 className="mt-3 text-3xl font-black md:text-5xl">
              Lo que este sistema puede ayudarte a mejorar
            </h2>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {beneficios.map((item) => (
              <div key={item} className="rounded-3xl bg-white p-6 shadow-md">
                <p className="text-lg font-bold text-[#28452e]">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#17351f] py-16 text-white">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#f0b928]">
              Bonos incluidos
            </p>

            <h2 className="mt-3 text-3xl font-black md:text-5xl">
              Además del ebook, recibís herramientas para sostener el proceso
            </h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-4">
            {bonos.map((bono) => (
              <div key={bono.nombre} className="rounded-3xl bg-white/10 p-6">
                <p className="text-sm font-black text-[#f0b928]">
                  {bono.titulo}
                </p>
                <h3 className="mt-2 text-xl font-black">{bono.nombre}</h3>
                <p className="mt-3 text-sm leading-6 text-white/75">
                  {bono.texto}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#f0b928]">
              Oferta
            </p>

            <h2 className="mt-3 text-3xl font-black md:text-5xl">
              Empezá hoy con una guía clara, simple y práctica
            </h2>

            <p className="mt-5 text-lg leading-8 text-[#4b5b4d]">
              No necesitás esperar al lunes, pagar un gimnasio ni hacer una
              dieta imposible. Necesitás una guía organizada para empezar con
              más claridad.
            </p>
          </div>

          <div className="rounded-[2rem] bg-[#f7f7ef] p-8 shadow-xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#285c32]">
              Oferta de lanzamiento
            </p>

            <p className="mt-4 text-lg text-[#4b5b4d] line-through">
              Precio normal: USD 19,99
            </p>

            <p className="mt-2 text-6xl font-black text-[#17351f]">
              USD 9,99
            </p>

            <p className="mt-4 text-[#4b5b4d]">
              Pago único. Acceso digital inmediato por Hotmart.
            </p>

            <div className="mt-6 rounded-2xl bg-white p-5 text-left">
              <p className="font-black">Incluye:</p>
              <ul className="mt-3 space-y-2 text-sm text-[#4b5b4d]">
                <li>✓ Ebook completo en PDF</li>
                <li>✓ 100 recetas saludables</li>
                <li>✓ Plan de 30 días</li>
                <li>✓ Rutinas en casa</li>
                <li>✓ Reset Corporal Club</li>
                <li>✓ Trackers y control de medidas</li>
              </ul>
            </div>

            <a
              href={hotmartUrl}
              onClick={handleComprar}
              className="mt-8 inline-flex w-full justify-center rounded-full bg-[#285c32] px-8 py-4 text-base font-black text-white shadow-xl transition hover:scale-105 hover:bg-[#17351f]"
            >
              Comprar ebook + Club
            </a>

            <a
              href="/club"
              className="mt-4 inline-flex w-full justify-center rounded-full border border-[#285c32] px-8 py-4 text-base font-black text-[#285c32] transition hover:bg-white"
            >
              Ver demo del Club
            </a>

            <p className="mt-4 text-center text-xs text-[#6b756d]">
              El precio puede variar según moneda local, impuestos o condiciones
              de Hotmart.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#f7f7ef] py-16">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#f0b928]">
              Preguntas frecuentes
            </p>

            <h2 className="mt-3 text-3xl font-black md:text-5xl">
              Antes de comprar
            </h2>
          </div>

          <div className="mt-10 space-y-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="rounded-3xl bg-white p-6 shadow-md">
                <h3 className="text-lg font-black">{faq.q}</h3>
                <p className="mt-3 leading-7 text-[#4b5b4d]">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#17351f] px-6 py-16 text-center text-white">
        <h2 className="mx-auto max-w-3xl text-3xl font-black md:text-5xl">
          Tenés dos opciones: seguir improvisando o empezar con un plan claro
          hoy.
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/80">
          Accedé al ebook, entrá al Club y empezá tu Reset Corporal 30 Días.
        </p>

        <a
          href={hotmartUrl}
          onClick={handleComprar}
          className="mt-8 inline-flex rounded-full bg-[#f0b928] px-10 py-4 text-base font-black text-[#17351f] shadow-xl transition hover:scale-105 hover:bg-white"
        >
          Comprar ebook + Club
        </a>
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