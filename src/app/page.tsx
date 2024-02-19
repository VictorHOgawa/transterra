"use client";
import { GlobalButton } from "@/components/global/Button";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import { useState } from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
gsap.registerPlugin(ScrollTrigger);
export default function Home() {
  const [offcanvasToggle, setOffcanvasToggle] = useState(false);
  const team = [0, 1, 2, 3, 4, 5, 6];

  useGSAP(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".BigNumbers",
          start: "top 80%",
          end: "top 80%",
          scrub: true,
          markers: true,
        },
      })
      .to(".scroll", {
        opacity: 1,
      })
      .fromTo(
        ".scroll",
        {
          y: 0,
        },
        {
          x: "100vw",
          y: 250,
          ease: "none",
          scrollTrigger: {
            trigger: ".BigNumbers",
            start: "top 80%",
            end: "bottom center",
            scrub: true,
            markers: true,
          },
        },
        0,
      );
  });

  return (
    <main className="bg-primary max-w-screen h-full min-h-screen w-full overflow-hidden">
      <>
        <header className="Header absolute z-10 flex h-20 w-full items-center md:justify-around">
          <Image
            src="Icons/offcanvas.svg"
            alt="logo"
            width={30}
            height={30}
            className="ml-10 md:hidden"
            onClick={() => setOffcanvasToggle(!offcanvasToggle)}
          />
          <div className="absolute z-10 hidden h-20 w-full items-center justify-around md:flex">
            <Image
              src="/tractor.svg"
              alt="logo"
              width={200}
              height={80}
              className="w-40 object-contain md:h-[70%]"
            />
            <div className="text-secondary flex gap-4">
              <span className="hover:bg-secondary hover:text-primary rounded px-2 py-1">
                BEM VINDO
              </span>
              <span className="hover:bg-secondary hover:text-primary rounded px-2 py-1">
                SOBRE NÓS
              </span>
              <span className="hover:bg-secondary hover:text-primary rounded px-2 py-1">
                SERVIÇOS
              </span>
              <span className="hover:bg-secondary hover:text-primary ml-4 rounded px-2 py-1">
                CONTATOS
              </span>
            </div>
            <div className="flex gap-2">
              <Image
                src="/Icons/facebook.svg"
                alt="logo"
                width={30}
                height={30}
              />
              <Image
                src="/Icons/instagram.svg"
                alt="logo"
                width={30}
                height={30}
              />
            </div>
          </div>
        </header>
        {/* <Offcanvas
          style={{
            backgroundColor: "#122235",
            width: "100vw",
            height: "100vh",
            border: 0,
            position: "absolute",
            top: 0,
            zIndex: 20,
          }}
          show={offcanvasToggle}
          onHide={() => setOffcanvasToggle(!offcanvasToggle)}
        >
          <Offcanvas.Body className="flex flex-col p-4">
            <Offcanvas.Header className="flex w-full">
              <Image
                src="/Icons/close.svg"
                alt="logo"
                width={20}
                height={20}
                onClick={() => setOffcanvasToggle(!offcanvasToggle)}
              />
              <Image
                src="tractor.svg"
                alt="logo"
                width={125}
                height={60}
                className="m-auto w-28 object-contain"
              />
            </Offcanvas.Header>
            <div className="mt-20 flex flex-col gap-4">
              <span className="hover:text-secondary hover:border-secondary px-2 py-1 hover:border-b">
                BEM VINDO
              </span>
              <span className="hover:text-secondary hover:border-secondary px-2 py-1 hover:border-b">
                SOBRE NÓS
              </span>
              <span className="hover:text-secondary hover:border-secondary px-2 py-1 hover:border-b">
                SERVIÇOS
              </span>
              <span className="hover:text-secondary hover:border-secondary px-2 py-1 hover:border-b">
                CONTATOS
              </span>
            </div>
          </Offcanvas.Body>
        </Offcanvas> */}
      </>
      <section className="Hero h-full w-full">
        <div className="flex min-h-screen flex-col items-center justify-center">
          <video
            autoPlay
            loop
            muted
            className="absolute h-full w-full object-cover opacity-10"
          >
            <source src="/backgroundVideo.mp4" type="video/mp4"></source>
          </video>
          <div className="absolute flex max-w-[80%] flex-col items-center justify-between gap-20 text-center xl:max-w-[60%]">
            <div className="flex flex-col">
              <span className="text-2xl sm:text-3xl lg:text-4xl  xl:text-6xl">
                Tecnologia, Segurança, Qualidade e Durabilidade
              </span>
              <span>São alguns de nossos diferenciais</span>
            </div>
            <div className="flex flex-col gap-4 md:max-w-[80%] md:flex-row">
              <GlobalButton
                bg="secondary"
                color="primary"
                children="Falar com Time Comercial"
                icon="/Icons/phone.svg"
              />
              <GlobalButton
                bg="white"
                color="primary"
                children="Conheça nossa História"
                icon="/Icons/book.svg"
              />
            </div>
          </div>
        </div>
      </section>
      <Image
        src="/tractor.svg"
        alt="logo"
        width={200}
        height={80}
        className="scroll absolute z-10 opacity-0"
      />
      <section className="BigNumbers text-secondary h-full w-full">
        <div className="flex flex-col items-center justify-center px-4 py-28 text-center">
          <span className="text-4xl font-semibold">
            Números que nos{" "}
            <span className="text-4xl text-white">orgulhamos</span>
          </span>
          <div className="mt-10 flex flex-col items-center justify-between gap-10 text-center lg:flex-row">
            <div className="flex flex-col gap-2">
              <span className="flex self-center text-4xl font-bold">
                10 <span className="text-white">+</span>
              </span>
              <span className="text-sm">Anos de Experiência</span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="flex gap-2 self-center text-4xl font-bold">
                7 Milhões <span className="text-white"> m²</span>
              </span>
              <span className="text-sm">de pavimentação asfáltica</span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="flex self-center text-4xl font-bold">
                50 <span className="text-white">+</span>
              </span>
              <span className="text-sm">Parceiros e Colaboradores</span>
            </div>
          </div>
        </div>
      </section>
      <section className="Services h-full w-full">
        <div className="bg-tertiary flex flex-col items-center justify-center gap-8 px-4 py-20 lg:flex-row">
          <div className="border-secondary text-secondary group flex h-64 w-64 cursor-pointer overflow-hidden rounded-lg border md:h-80 md:w-80 lg:h-96 lg:w-96">
            <Image
              src="/background_1.jpeg"
              width={500}
              height={500}
              alt=""
              className="h-full w-full rounded-lg object-cover opacity-40 transition duration-200 group-hover:scale-105 group-hover:opacity-20"
            />
            <div className="absolute flex h-64 w-64 flex-col items-center justify-center gap-4 p-2 md:h-80 md:w-80 lg:h-96 lg:w-96">
              <span className="text-xl md:text-2xl lg:text-3xl">
                Equipamentos para Locação
              </span>
              <span className="text-xs md:text-sm lg:text-base">
                Conheça nossos Equipamentos para locação e obtenha o melhor para
                sua execução.
              </span>
              <GlobalButton
                bg="white"
                color="primary"
                children="Ver Equipamentos em Carteira"
                icon="/Icons/truck.svg"
                text="xs"
              />
            </div>
          </div>
          <div className="group flex h-64 w-64 cursor-pointer overflow-hidden rounded-lg border border-white text-white md:h-80 md:w-80 lg:h-96 lg:w-96">
            <Image
              src="/background_2.jpeg"
              width={500}
              height={500}
              alt=""
              className="h-full w-full rounded-lg object-cover opacity-40 transition duration-200 group-hover:scale-105 group-hover:opacity-20"
            />
            <div className="absolute flex h-64 w-64 flex-col items-center justify-center gap-4 p-2 md:h-80 md:w-80 lg:h-96 lg:w-96">
              <span className="text-xl md:text-2xl lg:text-3xl">
                Equipamentos para Locação
              </span>
              <span className="text-xs md:text-sm lg:text-base">
                Conheça nossos Equipamentos para locação e obtenha o melhor para
                sua execução.
              </span>
              <GlobalButton
                bg="secondary"
                color="primary"
                children="Connheça nossos Serviços agora"
                icon="/Icons/clipboard.svg"
                text="xs"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="History h-full w-full">
        <div className="flex flex-col items-center justify-around gap-4 px-4 py-20 lg:flex-row lg:px-20 xl:px-40">
          <div className="flex flex-col lg:max-w-[50%]">
            <Image
              src="/Icons/quotes.svg"
              alt=""
              width={50}
              height={50}
              className="absolute"
            />
            <span className="p-4 text-lg md:text-xl xl:text-3xl">
              Fundada em 1980, a Transterra Terraplenagem e pavimentação, está a
              mais de 40 anos executando a infraestrutura para grandes
              negócios(...)
            </span>
            <span className="text-secondary px-4 text-xs font-semibold sm:text-sm md:text-base">
              Nome do Dono,
            </span>
            <span className="text-secondary px-4 text-xs font-extralight sm:text-sm md:text-base">
              Dono e Fundador.
            </span>
          </div>
          <GlobalButton
            bg="secondary"
            color="primary"
            children="Conheça nossos Serviços agora"
            height="max"
            text="xs"
          />
        </div>
      </section>
      <section className="Team h-full w-full">
        <div className="bg-tertiary flex min-h-screen flex-col items-center gap-4 px-4 pb-20 text-center">
          <div className="h-40 w-40">
            <Image
              src="tractor.svg"
              alt=""
              width={250}
              height={250}
              className="h-full w-full overflow-hidden"
            />
          </div>
          <span className="text-xl font-bold sm:text-2xl lg:text-3xl xl:text-4xl">
            Entre em contato com Nosso Time
          </span>
          <span className="max-w-[80%] text-xs sm:max-w-[65%] sm:text-sm lg:max-w-[40%] xl:max-w-[30%] xl:text-base">
            Lorem ipsum dolor sit amet consectetur adipiscing elit semper dalar
            elementum tempus hac tellus libero accumsan.{" "}
          </span>
          <div className="hidden h-full flex-wrap justify-center gap-4 lg:flex xl:max-w-[64rem]">
            {team.map((item) => (
              <div
                key={item}
                className="lg:w-54 group flex cursor-pointer overflow-hidden rounded-lg border lg:h-72 xl:h-80 xl:w-60"
              >
                <Image
                  src="/profile.jpeg"
                  width={500}
                  height={500}
                  alt=""
                  className="h-full w-full rounded-lg object-cover opacity-80 transition duration-200 group-hover:scale-105 group-hover:opacity-60"
                />
                <div className="lg:w-54 absolute flex flex-col items-center justify-end gap-4 p-2 lg:h-72 xl:h-80 xl:w-60">
                  <span className="text-lg lg:text-base">
                    Nome do Colaborador
                  </span>
                  <div className="flex gap-2 text-xs">
                    <Image
                      src="/Icons/whatsapp.svg"
                      alt=""
                      width={20}
                      height={20}
                    />
                    (66) 9 9999-9999
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex h-64 w-full lg:hidden">
            <Swiper
              slidesPerView={1.2}
              breakpoints={{
                320: {
                  slidesPerView: 1.2,
                },
                390: {
                  slidesPerView: 1.5,
                },
                425: {
                  slidesPerView: 1.7,
                },
                550: {
                  slidesPerView: 2.1,
                },
                768: {
                  slidesPerView: 3.1,
                },
              }}
            >
              {team.map((item) => (
                <SwiperSlide key={item}>
                  <div className="group flex h-64 w-52 cursor-pointer overflow-hidden rounded-lg border">
                    <Image
                      src="/profile.jpeg"
                      width={500}
                      height={500}
                      alt=""
                      className="h-full w-full rounded-lg object-cover opacity-40 transition duration-200 group-hover:scale-105 group-hover:opacity-20"
                    />
                    <div className="absolute flex h-64 w-52 flex-col items-center justify-end gap-4 p-2">
                      <span className="text-lg lg:text-base">
                        Nome do Colaborador
                      </span>
                      <div className="flex gap-2 text-xs">
                        <Image
                          src="/Icons/whatsapp.svg"
                          alt=""
                          width={20}
                          height={20}
                        />
                        (66) 9 9999-9999
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
      <footer className="Footer h-full w-full">
        <div className="flex h-full w-full flex-col items-center justify-around p-4 md:flex-row">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 text-sm">
              <Image
                src="/Icons/community.svg"
                alt=""
                width={50}
                height={50}
                className="h-8 w-8"
              />
              Nos siga nas Redes Sociais
            </div>
            <div className="flex items-center justify-center gap-2 md:justify-normal">
              <Image
                src="/Icons/instagram.svg"
                alt=""
                width={50}
                height={50}
                className="h-5 w-5"
              />
              <Image
                src="/Icons/facebook.svg"
                alt=""
                width={50}
                height={50}
                className="h-5 w-5"
              />
            </div>
          </div>
          <div className="hidden flex-col items-center gap-2 text-center lg:flex">
            <Image
              src="tractor.svg"
              alt=""
              width={1000}
              height={500}
              className="h-16 w-40"
            />
            <span className="text-xs text-white opacity-70">
              Copyright © 2023 BRIX Templates | All Rights Reserved
            </span>
          </div>
          <Image src="/logo_ex.svg" alt="" width={300} height={300} />
          <div className="flex flex-col items-center gap-2 text-center lg:hidden">
            <Image
              src="tractor.svg"
              alt=""
              width={1000}
              height={500}
              className="h-16 w-40"
            />
            <span className="text-xs text-white opacity-70">
              Copyright © 2023 BRIX Templates | All Rights Reserved
            </span>
          </div>
        </div>
      </footer>
    </main>
  );
}
