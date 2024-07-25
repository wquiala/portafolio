import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./shadcn/Acordion";

export function Experiencia() {
  return (
    <div className="flex flex-col gap-7 mt-7 text-zinc-200">
      <h1 className="font-extrabold text-4xl  text-blue-400">
        Experiencia laboral
      </h1>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem
          value="item-1"
          className="animate-revealCar1 transition-all"
          style={{
            animationTimeline: "view()",
            animationRange: "entry 20% cover 50%",
          }}
        >
          <AccordionTrigger className="text-xl">
            Software developer. Szkłoland (Olsztyn, Polonia). 2022 - 2023.
          </AccordionTrigger>
          <AccordionContent className="flex flex-col text-lg px-6">
            <p>Funciones:</p>
            <span>- Ingeniero de software.</span>
            <span>- Desarrollo de software.</span>
            <span>- Test unitarios.</span>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          value="item-2"
          style={{
            animationTimeline: "view()",
            animationRange: "entry 20% cover 50%",
          }}
          className="animate-revealCar1 transition-all"
        >
          <AccordionTrigger className="text-xl">
            Programador de equipos de cómputo. Autónomo (Santiago de Cuba,
            Cuba). 2014-2022.
          </AccordionTrigger>
          <AccordionContent className="flex flex-col text-lg px-6">
            <p>Funciones:</p>
            <span>
              - Diseño y programación de sistemas informáticos: Desarrollo web.
            </span>
            <span>- Diseño y gestión de Bases de Datos.</span>
            <span>- Gestión de proyectos.</span>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          value="item-3"
          style={{
            animationTimeline: "view()",
            animationRange: "entry 20% cover 50%",
          }}
          className="animate-revealCar1 transition-all"
        >
          <AccordionTrigger className="text-xl">
            Profesor Universitario. Universidad de Oriente, Departamento de
            Ingeniería Informática (Cuba). 2017-2022.
          </AccordionTrigger>
          <AccordionContent className="flex flex-col text-lg px-6">
            <p>Funciones:</p>
            <span>- Preparar materiales docentes.</span>
            <span>- Impartir docencia.</span>
            <span>- Dirigir proyectos.</span>
            <span>- Atención a estudiantes.</span>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          value="item-5"
          style={{
            animationTimeline: "view()",
            animationRange: "entry 20% cover 50%",
          }}
          className="animate-revealCar1 transition-all"
        >
          <AccordionTrigger className="text-xl">
            Reparador de artículos electrónicos. Autónomo. (Santiago de Cuba,
            Cuba). 2014-2022.
          </AccordionTrigger>
          <AccordionContent className="flex flex-col text-lg px-6">
            <p>Funciones:</p>
            <span>
              - Reparador de software, firmware y hardware de sistemas
              informáticos
            </span>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          value="item-4"
          style={{
            animationTimeline: "view()",
            animationRange: "entry 20% cover 50%",
          }}
          className="animate-revealCar1 transition-all"
        >
          <AccordionTrigger className="text-xl">
            Profesor de Bachillerato. Centro Mixto “Mariana Grajales” (Cuba).
            2014-2017.
          </AccordionTrigger>
          <AccordionContent className="flex flex-col text-lg px-6">
            <p>Funciones:</p>
            <span>- Impartir docencia</span>
            <span>- Atención a estudiantes</span>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
