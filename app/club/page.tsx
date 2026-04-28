"use client";

import { useEffect, useMemo, useState } from "react";

type HabitKey = "agua" | "movimiento" | "comidas" | "sueno";
type TabKey = "dashboard" | "plan" | "recetas" | "ejercicios" | "progreso";

const plan = Array.from({ length: 30 }, (_, index) => {
  const day = index + 1;

  const phase =
    day <= 14
      ? "Fase estricta"
      : day <= 21
      ? "Fase intermedia"
      : "Consolidación";

  const workouts = [
    "Rutina A · Fuerza base + caminata 20 minutos",
    "Rutina B · Cardio suave + core",
    "Caminata 30 a 40 minutos",
    "Rutina A · Fuerza base",
    "Rutina B · Cardio + movilidad",
    "Caminata activa + estiramientos",
    "Descanso activo · movilidad 10 minutos",
  ];

  const meals = [
    "Huevos con espinaca · Ensalada de pollo · Yogur con fruta · Cena liviana sin harinas",
    "Avena con frutos rojos · Bowl de lentejas · Fruta con frutos secos · Pescado con verduras",
    "Huevos con palta · Ensalada de garbanzos · Parfait de yogur · Sopa de verduras con pollo",
    "Muffins de huevo · Pollo con batata · Fruta · Zucchini relleno",
    "Huevos revueltos · Bowl de quinoa con pollo · Yogur · Pescado al horno",
    "Avena · Wok de arroz integral con proteína · Fruta · Ensalada con palta",
    "Huevos con porotos · Albóndigas magras · Yogur · Ensalada grande mixta",
  ];

  const tips = [
    "Tomá agua al levantarte y evitá gaseosas durante todo el día.",
    "Prepará una comida con anticipación para no improvisar.",
    "Si aparece ansiedad, esperá 10 minutos, tomá agua y respiraciones lentas.",
    "No busques perfección. Buscá cumplir lo básico del día.",
    "Sumá verduras en almuerzo y cena para controlar mejor el hambre.",
    "Caminá 10 minutos después de comer si tenés tiempo.",
    "Dormí mejor: bajá pantallas 30 minutos antes de acostarte.",
  ];

  return {
    day,
    phase,
    title: `Día ${day} · ${phase}`,
    food: meals[index % meals.length],
    workout: workouts[index % workouts.length],
    tip: tips[index % tips.length],
  };
});

const recipes = [
  {
    title: "Bowl proteico de pollo",
    category: "Almuerzo",
    time: "20 min",
    difficulty: "Fácil",
    ingredients: "Pollo grillado, arroz integral, tomate, zanahoria, hojas verdes y aceite de oliva.",
    steps: "Cociná el pollo a la plancha, armá una base de verduras, agregá arroz integral y terminá con limón y oliva.",
    tip: "Ideal para el almuerzo porque combina proteína, fibra y carbohidrato controlado.",
  },
  {
    title: "Huevos revueltos con espinaca",
    category: "Desayuno",
    time: "10 min",
    difficulty: "Fácil",
    ingredients: "2 o 3 huevos, espinaca, tomate, sal, pimienta y una cucharadita de aceite.",
    steps: "Salteá la espinaca, agregá los huevos batidos y revolvé a fuego bajo hasta lograr textura cremosa.",
    tip: "Sumá una fruta si necesitás más energía por la mañana.",
  },
  {
    title: "Ensalada completa con atún",
    category: "Cena",
    time: "12 min",
    difficulty: "Fácil",
    ingredients: "Atún, huevo duro, hojas verdes, zanahoria, tomate, pepino, limón y oliva.",
    steps: "Cortá las verduras, agregá atún y huevo duro. Condimentá con limón, sal y aceite de oliva.",
    tip: "Buena opción para cenar liviano sin harinas.",
  },
  {
    title: "Avena nocturna con frutos rojos",
    category: "Desayuno",
    time: "5 min + reposo",
    difficulty: "Fácil",
    ingredients: "Avena, yogur natural, frutos rojos, canela y semillas.",
    steps: "Mezclá todo en un frasco, dejalo en la heladera durante la noche y consumilo frío.",
    tip: "Preparala la noche anterior para evitar improvisar el desayuno.",
  },
  {
    title: "Sopa de verduras con pollo",
    category: "Cena",
    time: "25 min",
    difficulty: "Fácil",
    ingredients: "Pollo, zanahoria, cebolla, zapallito, caldo, perejil, sal y pimienta.",
    steps: "Herví las verduras, agregá pollo en cubos y cociná hasta que esté tierno. Terminá con perejil.",
    tip: "Prepará doble porción y guardá para el día siguiente.",
  },
  {
    title: "Pollo con batata y ensalada",
    category: "Almuerzo",
    time: "25 min",
    difficulty: "Media",
    ingredients: "Pechuga de pollo, batata, hojas verdes, tomate, limón y condimentos.",
    steps: "Horneá la batata, cociná el pollo a la plancha y serví con ensalada fresca.",
    tip: "Usá esta receta en días de entrenamiento o caminata larga.",
  },
  {
    title: "Muffins de huevo con verduras",
    category: "Desayuno",
    time: "25 min",
    difficulty: "Fácil",
    ingredients: "Huevos, morrón, espinaca, cebolla, sal y pimienta.",
    steps: "Batí los huevos, mezclá con verduras picadas y horneá en moldes durante 15 a 18 minutos.",
    tip: "Se pueden guardar en heladera hasta 3 días.",
  },
  {
    title: "Yogur con fruta y frutos secos",
    category: "Merienda",
    time: "5 min",
    difficulty: "Fácil",
    ingredients: "Yogur natural, fruta fresca, canela y un puñado pequeño de frutos secos.",
    steps: "Serví el yogur, agregá fruta cortada, canela y frutos secos medidos.",
    tip: "No uses puñados grandes de frutos secos si buscás bajar grasa.",
  },
  {
    title: "Wok de arroz integral con verduras",
    category: "Almuerzo",
    time: "20 min",
    difficulty: "Media",
    ingredients: "Arroz integral cocido, pollo o huevo, zanahoria, cebolla, brócoli y especias.",
    steps: "Salteá las verduras, sumá la proteína y agregá el arroz ya cocido al final.",
    tip: "Reducí la porción de arroz en días sin entrenamiento.",
  },
  {
    title: "Zucchini relleno",
    category: "Cena",
    time: "30 min",
    difficulty: "Media",
    ingredients: "Zucchini, carne magra o lentejas, cebolla, salsa de tomate y condimentos.",
    steps: "Ahuecá el zucchini, cociná el relleno, completá las mitades y horneá hasta dorar.",
    tip: "Excelente cena sin harinas para la fase estricta.",
  },
  {
    title: "Ensalada de garbanzos",
    category: "Almuerzo",
    time: "12 min",
    difficulty: "Fácil",
    ingredients: "Garbanzos, pepino, tomate, cebolla, limón, oliva y huevo duro opcional.",
    steps: "Enjuagá los garbanzos, cortá las verduras, mezclá todo y condimentá.",
    tip: "Buena opción vegetal, práctica y saciante.",
  },
  {
    title: "Pescado al horno con verduras",
    category: "Cena",
    time: "25 min",
    difficulty: "Fácil",
    ingredients: "Filet de pescado, brócoli, zanahoria, limón, ajo, sal y pimienta.",
    steps: "Horneá las verduras 10 minutos, agregá el pescado y cociná 12 a 15 minutos más.",
    tip: "Cena liviana, alta en proteína y fácil de digerir.",
  },
];

const exercises = [
  {
    title: "Sentadillas",
    zone: "Piernas y glúteos",
    level: "Principiante",
    reps: "3 series de 12 repeticiones",
    rest: "60 segundos",
    technique: "Mantené la espalda recta, bajá controlado y empujá desde los talones.",
    mistake: "No lleves las rodillas hacia adentro.",
  },
  {
    title: "Flexiones",
    zone: "Pecho, hombros y brazos",
    level: "Principiante / intermedio",
    reps: "3 series de 8 repeticiones",
    rest: "60 segundos",
    technique: "Bajá con control. Podés apoyar rodillas si estás empezando.",
    mistake: "No dejes caer la cadera.",
  },
  {
    title: "Plancha",
    zone: "Core",
    level: "Principiante",
    reps: "3 series de 25 segundos",
    rest: "45 segundos",
    technique: "Contraé abdomen y glúteos. Mantené el cuerpo alineado.",
    mistake: "No levantes demasiado la cadera.",
  },
  {
    title: "Puente de glúteos",
    zone: "Glúteos y posterior",
    level: "Principiante",
    reps: "3 series de 12 repeticiones",
    rest: "45 segundos",
    technique: "Subí la cadera apretando glúteos y bajá lento.",
    mistake: "No arquees de más la espalda baja.",
  },
  {
    title: "Estocadas",
    zone: "Piernas y equilibrio",
    level: "Intermedio",
    reps: "3 series de 10 por pierna",
    rest: "60 segundos",
    technique: "Dá un paso largo y bajá con el torso firme.",
    mistake: "No golpees la rodilla contra el suelo.",
  },
  {
    title: "Caminata activa",
    zone: "Cardio suave",
    level: "Todos los niveles",
    reps: "30 a 40 minutos",
    rest: "Sin descanso",
    technique: "Ritmo cómodo pero constante. Respiración controlada.",
    mistake: "No camines mirando todo el tiempo el celular.",
  },
];

export default function ClubPage() {
  const [activeTab, setActiveTab] = useState<TabKey>("dashboard");
  const [currentDay, setCurrentDay] = useState(1);
  const [habits, setHabits] = useState<Record<HabitKey, boolean>>({
    agua: false,
    movimiento: false,
    comidas: false,
    sueno: false,
  });
  const [weight, setWeight] = useState("");
  const [waist, setWaist] = useState("");
  const [energy, setEnergy] = useState("3");
  const [note, setNote] = useState("");

  useEffect(() => {
    const savedDay = localStorage.getItem("reset-current-day");
    const savedHabits = localStorage.getItem("reset-habits");
    const savedWeight = localStorage.getItem("reset-weight");
    const savedWaist = localStorage.getItem("reset-waist");
    const savedEnergy = localStorage.getItem("reset-energy");
    const savedNote = localStorage.getItem("reset-note");

    if (savedDay) setCurrentDay(Number(savedDay));
    if (savedHabits) setHabits(JSON.parse(savedHabits));
    if (savedWeight) setWeight(savedWeight);
    if (savedWaist) setWaist(savedWaist);
    if (savedEnergy) setEnergy(savedEnergy);
    if (savedNote) setNote(savedNote);
  }, []);

  useEffect(() => {
    localStorage.setItem("reset-current-day", String(currentDay));
    localStorage.setItem("reset-habits", JSON.stringify(habits));
    localStorage.setItem("reset-weight", weight);
    localStorage.setItem("reset-waist", waist);
    localStorage.setItem("reset-energy", energy);
    localStorage.setItem("reset-note", note);
  }, [currentDay, habits, weight, waist, energy, note]);

  const today = plan.find((item) => item.day === currentDay) || plan[0];

  const completed = Object.values(habits).filter(Boolean).length;
  const progress = Math.round((completed / 4) * 100);

  const recipeOfDay = useMemo(() => recipes[(currentDay - 1) % recipes.length], [currentDay]);
  const exerciseOfDay = useMemo(() => exercises[(currentDay - 1) % exercises.length], [currentDay]);

  const toggleHabit = (key: HabitKey) => {
    setHabits((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <main className="min-h-screen bg-[#f7f7ef] text-[#17351f]">
      <header className="bg-gradient-to-br from-[#17351f] via-[#285c32] to-[#f0b928] px-6 py-10 text-white">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.2em] text-[#f0b928]">
                Reset Corporal Club
              </p>

              <h1 className="mt-3 text-4xl font-black md:text-6xl">
                Tu app diaria de hábitos saludables
              </h1>

              <p className="mt-5 max-w-2xl text-lg leading-8 text-white/85">
                Plan de 30 días, recetas, rutinas, checklist y progreso para acompañarte desde el celular.
              </p>
            </div>

            <a
              href="/"
              className="rounded-full bg-white px-6 py-3 text-center text-sm font-black text-[#17351f] shadow-lg transition hover:scale-105"
            >
              Volver a la página de venta
            </a>
          </div>
        </div>
      </header>

      <nav className="sticky top-0 z-20 border-b bg-white/90 px-4 py-3 backdrop-blur">
        <div className="mx-auto flex max-w-6xl gap-2 overflow-x-auto">
          {[
            ["dashboard", "Hoy"],
            ["plan", "Plan 30 días"],
            ["recetas", "Recetas"],
            ["ejercicios", "Ejercicios"],
            ["progreso", "Progreso"],
          ].map(([key, label]) => (
            <button
              key={key}
              onClick={() => setActiveTab(key as TabKey)}
              className={`whitespace-nowrap rounded-full px-5 py-2 text-sm font-black transition ${
                activeTab === key
                  ? "bg-[#285c32] text-white"
                  : "bg-[#f7f7ef] text-[#285c32]"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </nav>

      <section className="mx-auto max-w-6xl px-6 py-10">
        {activeTab === "dashboard" && (
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <div className="rounded-[2rem] bg-white p-8 shadow-xl">
                <p className="text-sm font-black uppercase tracking-[0.2em] text-[#f0b928]">
                  Día {today.day} de 30 · {today.phase}
                </p>

                <h2 className="mt-3 text-3xl font-black">{today.title}</h2>

                <div className="mt-6 grid gap-4 md:grid-cols-3">
                  <div className="rounded-3xl bg-[#f7f7ef] p-5">
                    <p className="font-black">Comidas sugeridas</p>
                    <p className="mt-2 text-sm leading-6 text-[#4b5b4d]">
                      {today.food}
                    </p>
                  </div>

                  <div className="rounded-3xl bg-[#f7f7ef] p-5">
                    <p className="font-black">Rutina del día</p>
                    <p className="mt-2 text-sm leading-6 text-[#4b5b4d]">
                      {today.workout}
                    </p>
                  </div>

                  <div className="rounded-3xl bg-[#f7f7ef] p-5">
                    <p className="font-black">Consejo del día</p>
                    <p className="mt-2 text-sm leading-6 text-[#4b5b4d]">
                      {today.tip}
                    </p>
                  </div>
                </div>

                <div className="mt-8 grid gap-4 md:grid-cols-2">
                  <div className="rounded-3xl border border-[#e7e2c7] p-5">
                    <p className="text-sm font-black uppercase tracking-[0.15em] text-[#f0b928]">
                      Receta recomendada
                    </p>
                    <h3 className="mt-2 text-2xl font-black">{recipeOfDay.title}</h3>
                    <p className="mt-2 text-sm font-bold text-[#285c32]">
                      {recipeOfDay.category} · {recipeOfDay.time}
                    </p>
                    <p className="mt-3 text-sm leading-6 text-[#4b5b4d]">
                      {recipeOfDay.tip}
                    </p>
                  </div>

                  <div className="rounded-3xl border border-[#e7e2c7] p-5">
                    <p className="text-sm font-black uppercase tracking-[0.15em] text-[#f0b928]">
                      Ejercicio destacado
                    </p>
                    <h3 className="mt-2 text-2xl font-black">{exerciseOfDay.title}</h3>
                    <p className="mt-2 text-sm font-bold text-[#285c32]">
                      {exerciseOfDay.zone} · {exerciseOfDay.level}
                    </p>
                    <p className="mt-3 text-sm leading-6 text-[#4b5b4d]">
                      {exerciseOfDay.reps}
                    </p>
                  </div>
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                  {plan.map((item) => (
                    <button
                      key={item.day}
                      onClick={() => setCurrentDay(item.day)}
                      className={`rounded-full px-4 py-2 text-sm font-black ${
                        currentDay === item.day
                          ? "bg-[#285c32] text-white"
                          : "bg-[#f7f7ef] text-[#285c32]"
                      }`}
                    >
                      {item.day}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="rounded-[2rem] bg-[#17351f] p-8 text-white shadow-xl">
              <p className="text-sm font-black uppercase tracking-[0.2em] text-[#f0b928]">
                Checklist de hoy
              </p>

              <h3 className="mt-3 text-3xl font-black">{progress}% completo</h3>

              <div className="mt-6 h-3 rounded-full bg-white/20">
                <div
                  className="h-3 rounded-full bg-[#f0b928]"
                  style={{ width: `${progress}%` }}
                />
              </div>

              <div className="mt-6 space-y-3">
                {[
                  ["agua", "Tomé 2 litros de agua"],
                  ["movimiento", "Hice movimiento"],
                  ["comidas", "Cumplí mis comidas"],
                  ["sueno", "Dormí 7 horas"],
                ].map(([key, label]) => (
                  <button
                    key={key}
                    onClick={() => toggleHabit(key as HabitKey)}
                    className={`w-full rounded-2xl px-4 py-3 text-left font-bold transition ${
                      habits[key as HabitKey]
                        ? "bg-[#f0b928] text-[#17351f]"
                        : "bg-white/10 text-white"
                    }`}
                  >
                    {habits[key as HabitKey] ? "✓" : "○"} {label}
                  </button>
                ))}
              </div>

              <p className="mt-6 text-sm leading-6 text-white/70">
                Tu progreso queda guardado en este navegador. En la próxima versión sumamos login.
              </p>
            </div>
          </div>
        )}

        {activeTab === "plan" && (
          <div>
            <h2 className="text-3xl font-black md:text-5xl">Plan completo de 30 días</h2>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-[#4b5b4d]">
              Seleccioná el día que querés revisar. Cada día tiene comidas sugeridas, rutina y consejo.
            </p>

            <div className="mt-8 grid gap-5 md:grid-cols-2">
              {plan.map((item) => (
                <div key={item.day} className="rounded-3xl bg-white p-6 shadow-md">
                  <p className="text-sm font-black text-[#f0b928]">
                    Día {item.day} · {item.phase}
                  </p>
                  <h3 className="mt-2 text-2xl font-black">{item.title}</h3>
                  <p className="mt-4 text-sm leading-6 text-[#4b5b4d]">
                    {item.food}
                  </p>
                  <p className="mt-3 text-sm font-bold text-[#285c32]">
                    {item.workout}
                  </p>
                  <button
                    onClick={() => {
                      setCurrentDay(item.day);
                      setActiveTab("dashboard");
                    }}
                    className="mt-5 rounded-full bg-[#285c32] px-5 py-3 text-sm font-black text-white"
                  >
                    Usar este día
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "recetas" && (
          <div>
            <h2 className="text-3xl font-black md:text-5xl">Biblioteca de recetas</h2>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-[#4b5b4d]">
              Primera carga de recetas. Después podemos pasar las 100 recetas completas del ebook.
            </p>

            <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {recipes.map((recipe) => (
                <div
                  key={recipe.title}
                  className="rounded-[2rem] bg-white p-6 shadow-md"
                >
                  <p className="text-sm font-black uppercase tracking-[0.15em] text-[#f0b928]">
                    {recipe.category}
                  </p>
                  <h3 className="mt-3 text-2xl font-black">{recipe.title}</h3>
                  <p className="mt-2 text-sm font-bold text-[#285c32]">
                    {recipe.time} · {recipe.difficulty}
                  </p>
                  <p className="mt-4 text-sm font-black">Ingredientes</p>
                  <p className="mt-2 text-sm leading-6 text-[#4b5b4d]">
                    {recipe.ingredients}
                  </p>
                  <p className="mt-4 text-sm font-black">Preparación</p>
                  <p className="mt-2 text-sm leading-6 text-[#4b5b4d]">
                    {recipe.steps}
                  </p>
                  <p className="mt-4 rounded-2xl bg-[#f7f7ef] p-4 text-sm leading-6 text-[#4b5b4d]">
                    Consejo: {recipe.tip}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "ejercicios" && (
          <div>
            <h2 className="text-3xl font-black md:text-5xl">Biblioteca de ejercicios</h2>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-[#4b5b4d]">
              Ejercicios simples para entrenar desde casa con técnica y errores comunes.
            </p>

            <div className="mt-8 grid gap-5 md:grid-cols-2">
              {exercises.map((exercise) => (
                <div
                  key={exercise.title}
                  className="rounded-[2rem] bg-white p-6 shadow-md"
                >
                  <h3 className="text-2xl font-black">{exercise.title}</h3>
                  <p className="mt-2 font-bold text-[#285c32]">
                    {exercise.zone} · {exercise.level}
                  </p>
                  <p className="mt-4 text-sm font-black">Trabajo</p>
                  <p className="mt-2 leading-7 text-[#4b5b4d]">{exercise.reps}</p>
                  <p className="mt-3 text-sm font-bold text-[#285c32]">
                    Descanso: {exercise.rest}
                  </p>
                  <p className="mt-4 text-sm font-black">Técnica</p>
                  <p className="mt-2 leading-7 text-[#4b5b4d]">{exercise.technique}</p>
                  <p className="mt-4 rounded-2xl bg-[#f7f7ef] p-4 text-sm leading-6 text-[#4b5b4d]">
                    Error común: {exercise.mistake}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "progreso" && (
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-[2rem] bg-white p-8 shadow-xl">
              <p className="text-sm font-black uppercase tracking-[0.2em] text-[#f0b928]">
                Progreso del día
              </p>

              <h2 className="mt-3 text-5xl font-black">{progress}%</h2>

              <p className="mt-4 leading-7 text-[#4b5b4d]">
                Marcá tus hábitos diarios para mantener constancia.
              </p>

              <div className="mt-6 grid gap-4">
                <label className="block">
                  <span className="text-sm font-black">Peso actual</span>
                  <input
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    placeholder="Ej: 82 kg"
                    className="mt-2 w-full rounded-2xl border border-[#d8d2b7] bg-[#f7f7ef] px-4 py-3 outline-none"
                  />
                </label>

                <label className="block">
                  <span className="text-sm font-black">Cintura</span>
                  <input
                    value={waist}
                    onChange={(e) => setWaist(e.target.value)}
                    placeholder="Ej: 92 cm"
                    className="mt-2 w-full rounded-2xl border border-[#d8d2b7] bg-[#f7f7ef] px-4 py-3 outline-none"
                  />
                </label>

                <label className="block">
                  <span className="text-sm font-black">Energía del día</span>
                  <select
                    value={energy}
                    onChange={(e) => setEnergy(e.target.value)}
                    className="mt-2 w-full rounded-2xl border border-[#d8d2b7] bg-[#f7f7ef] px-4 py-3 outline-none"
                  >
                    <option value="1">1 · Muy baja</option>
                    <option value="2">2 · Baja</option>
                    <option value="3">3 · Normal</option>
                    <option value="4">4 · Buena</option>
                    <option value="5">5 · Excelente</option>
                  </select>
                </label>
              </div>
            </div>

            <div className="rounded-[2rem] bg-white p-8 shadow-xl">
              <p className="text-sm font-black uppercase tracking-[0.2em] text-[#f0b928]">
                Nota del día
              </p>

              <h2 className="mt-3 text-3xl font-black">Registro personal</h2>

              <textarea
                value={note}
                onChange={(e) => setNote(e.target.value)}
                placeholder="Ej: Hoy cumplí el agua, caminé 30 minutos y cené liviano."
                className="mt-6 min-h-48 w-full rounded-3xl border border-[#d8d2b7] bg-[#f7f7ef] p-5 outline-none"
              />

              <p className="mt-4 text-sm leading-6 text-[#4b5b4d]">
                En la próxima etapa agregamos login, historial semanal, gráficos y entrenador virtual con IA.
              </p>
            </div>
          </div>
        )}
      </section>
    </main>
  );
}