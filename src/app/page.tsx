"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import TextPlugin from "gsap/dist/TextPlugin";
import Image from "next/image";
import { useState } from "react";
import { Offcanvas } from "react-bootstrap";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
gsap.registerPlugin(ScrollTrigger, TextPlugin);
gsap.registerPlugin(TextPlugin);

export default function Home() {
  const [offcanvasToggle, setOffcanvasToggle] = useState(false);
  const team = [0, 1, 2, 3, 4, 5, 6];

  useGSAP(() => {
    gsap
      .timeline({ stagger: 0.3 })
      .fromTo(
        ".Title",
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.5 },
      )
      .fromTo(
        ".Subtitle",
        { opacity: 0, x: 50 },
        { opacity: 1, x: 0, duration: 1 },
      );
    gsap.to(".Paragraph", {
      duration: 2,
      color: "white",
      text: "Fundada em 1980, a Transterra Terraplenagem e pavimentação, está a mais de 40 anos executando a infraestrutura para grandes negócios(...)",
      ease: "none",
      scrollTrigger: {
        trigger: ".History",
        start: "top 80%",
        end: "80% 80%",
        scrub: 1,
      },
    });
    gsap.fromTo(
      ".teamCard",
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: {
          amount: 5,
        },
        scrollTrigger: {
          trigger: ".teamCard",
          start: "top 80%",
          end: "bottom 60%",
          scrub: 1,
        },
      },
    );
    gsap.to(".Rounded", {
      height: 50,
      scrollTrigger: {
        trigger: ".BigNumbers",
        start: "top 90%",
        end: "center center",
        scrub: 1,
      },
    });
    gsap.to(".Rounded2", {
      height: 50,
      scrollTrigger: {
        trigger: ".History",
        start: "top 90%",
        end: "center center",
        scrub: 1,
      },
    });
    gsap
      .timeline({ stagger: 0.3 })
      .fromTo(
        ".TeamTitle",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          scrollTrigger: {
            trigger: ".TeamTitle",
            start: "top 90%",
            end: "bottom 90%",
            scrub: 1,
          },
        },
      )
      .fromTo(
        ".TeamSubtitle",
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          scrollTrigger: {
            trigger: ".TeamSubtitle",
            start: "top 90%",
            end: "bottom 90%",
            scrub: 1,
          },
        },
      );
    gsap.fromTo(
      ".service1",
      {
        opacity: 0,
        x: -100,
        scale: 0.9,
      },
      {
        opacity: 1,
        x: 0,
        scale: 1,
        scrollTrigger: {
          trigger: ".service1",
          start: "top 90%",
          end: "bottom 90%",
          scrub: 1,
        },
      },
    );
    gsap.fromTo(
      ".service2",
      {
        opacity: 0,
        x: 100,
        scale: 0.9,
      },
      {
        opacity: 1,
        x: 0,
        scale: 1,
        scrollTrigger: {
          trigger: ".service2",
          start: "top 90%",
          end: "bottom 90%",
          scrub: 1,
        },
      },
    );
    gsap.fromTo(
      ".singleLetters",
      {
        opacity: 0,
      },
      {
        opacity: 1,
        stagger: 0.5,
        scrollTrigger: {
          trigger: ".singleLetters",
          start: "top 90%",
          end: "bottom 90%",
          scrub: 1,
        },
      },
    );
  });

  useGSAP(() => {
    let mm = gsap.matchMedia();
    mm.add("(max-width: 768px)", () => {
      gsap.fromTo(
        ".scrollTractor",
        {
          x: -200,
        },
        {
          x: "100vw",
          stagger: 0.2,
          scrollTrigger: {
            trigger: ".mobileScroll",
            start: "center 80%",
            end: "bottom 80%",
            scrub: 1,
          },
        },
      );
      gsap
        .timeline()
        .fromTo(
          ".Number",
          {
            opacity: 0,
            y: 50,
          },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            stagger: {
              amount: 1.5,
            },
            scrollTrigger: {
              trigger: ".BigNumbers",
              start: "top center",
              end: "bottom 70%",
              scrub: 1,
            },
          },
        )
        .fromTo(
          ".NumberDescription",
          {
            opacity: 0,
            x: -50,
          },

          {
            opacity: 1,
            x: 0,
            duration: 2,
            stagger: {
              amount: 3,
            },
            ease: "none",
            scrollTrigger: {
              trigger: ".BigNumbers",
              start: "top 40%",
              end: "bottom 90%",
              scrub: 1,
            },
          },
        );
      gsap.to(".Rounded3", {
        height: 50,
        scrollTrigger: {
          trigger: ".Footer",
          start: "top 90%",
          end: "center center",
          scrub: 1,
        },
      });
    }).add("(min-width: 768px)", () => {
      gsap.fromTo(
        ".scrollTractor",
        {
          x: -200,
          y: 250,
        },
        {
          x: "100vw",
          transform: "translateZ(2)",
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: ".BigNumbers",
            start: "top bottom",
            end: "bottom center",
            scrub: 1,
          },
        },
      );
      gsap
        .timeline()
        .fromTo(
          ".Number",
          {
            opacity: 0,
            y: 50,
          },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            stagger: {
              amount: 1.5,
            },
            scrollTrigger: {
              trigger: ".BigNumbers",
              start: "top center",
              end: "bottom 90%",
              scrub: 1,
            },
          },
        )
        .fromTo(
          ".NumberDescription",
          {
            opacity: 0,
            x: -50,
          },

          {
            opacity: 1,
            x: 0,
            duration: 2,
            stagger: {
              amount: 3,
            },
            ease: "none",
            scrollTrigger: {
              trigger: ".BigNumbers",
              start: "top 45%",
              end: "bottom 90%",
              scrub: 1,
            },
          },
        );
      gsap.to(".Rounded3", {
        height: 200,
        scrollTrigger: {
          trigger: ".Footer",
          start: "top 90%",
          end: "center center",
          scrub: 1,
        },
      });
    });
  });

  const redirect = (url: string) => {
    if (url === "https://www.instagram.com/transterrasinop/") {
      if (
        confirm(
          "Você será redirecionado para o Instagram da Transterra. Deseja continuar?",
        )
      ) {
        window.open(url, "_blank");
      } else {
        return;
      }
    }
    if (
      confirm(
        "Você será redirecionado para o Facebook da Transterra. Deseja continuar?",
      )
    ) {
      window.open(url, "_blank");
    } else {
      return;
    }
  };

  return (
    <main className="max-w-screen h-full min-h-screen w-full overflow-x-hidden bg-primary">
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
          <Image
            src="/tractor.svg"
            alt="logo"
            width={200}
            height={80}
            className="m-auto block w-40 object-contain md:hidden md:h-[70%]"
          />
          <div className="absolute z-10 hidden h-20 w-full items-center justify-around md:flex">
            <Image
              src="/tractor.svg"
              alt="logo"
              width={200}
              height={80}
              className="hidden w-40 object-contain md:block md:h-[70%]"
            />
            <div className="hidden items-center gap-4 text-secondary md:flex">
              <span className="hover:to-invisible cursor-pointer rounded-xl bg-[length:200%] px-2  py-1 font-bold transition duration-200 ease-in-out hover:animate-bgSweep hover:bg-gradient-to-r hover:from-secondary hover:to-80% hover:text-primary">
                BEM VINDO
              </span>
              <span className="hover:to-invisible cursor-pointer rounded-xl bg-[length:200%] px-2 py-1 font-bold transition duration-200 ease-in-out hover:animate-bgSweep hover:bg-gradient-to-r hover:from-secondary hover:to-80% hover:text-primary">
                SOBRE NÓS
              </span>
              <span className="hover:to-invisible cursor-pointer rounded-xl bg-[length:200%] px-2 py-1 font-bold transition duration-200 ease-in-out hover:animate-bgSweep hover:bg-gradient-to-r hover:from-secondary hover:to-80% hover:text-primary">
                SERVIÇOS
              </span>
              <span className="hover:to-invisible ml-4 cursor-pointer rounded-xl bg-[length:200%] px-2 py-1 font-bold transition duration-200 ease-in-out hover:animate-bgSweep hover:bg-gradient-to-r hover:from-secondary hover:to-80% hover:text-primary">
                CONTATOS
              </span>
            </div>
            <div className="hidden gap-2 md:flex">
              <Image
                src="/Icons/facebook.svg"
                alt="logo"
                width={30}
                height={30}
                className="cursor-pointer rounded-full transition duration-200 hover:scale-125 hover:border hover:border-secondary"
                onClick={() =>
                  redirect("https://www.facebook.com/transterrasinop/")
                }
              />
              <Image
                src="/Icons/instagram.svg"
                alt="logo"
                width={30}
                height={30}
                className="cursor-pointer rounded-lg transition duration-200 hover:scale-125 hover:border hover:border-secondary"
                onClick={() =>
                  redirect("https://www.instagram.com/transterrasinop/")
                }
              />
            </div>
          </div>
        </header>
        <Offcanvas
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
          <Offcanvas.Body className="flex flex-col p-4 text-white">
            <Offcanvas.Header className="flex w-full">
              <Image
                src="/Icons/close.svg"
                alt="logo"
                width={20}
                height={20}
                onClick={() => setOffcanvasToggle(!offcanvasToggle)}
              />
            </Offcanvas.Header>
            <div className="mt-20 flex flex-col gap-4">
              <span className="px-2 py-1 hover:border-b hover:border-secondary hover:text-secondary">
                BEM VINDO
              </span>
              <span className="px-2 py-1 hover:border-b hover:border-secondary hover:text-secondary">
                SOBRE NÓS
              </span>
              <span className="px-2 py-1 hover:border-b hover:border-secondary hover:text-secondary">
                SERVIÇOS
              </span>
              <span className="px-2 py-1 hover:border-b hover:border-secondary hover:text-secondary">
                CONTATOS
              </span>
            </div>
          </Offcanvas.Body>
        </Offcanvas>
      </>

      <section className="Hero h-full w-full text-white">
        <div className="flex min-h-screen flex-col items-center justify-center">
          <video
            autoPlay
            loop
            muted
            className="absolute h-full w-full object-cover opacity-10"
          >
            <source src="/backgroundVideo.mp4" type="video/mp4" />
          </video>
          <div className="absolute flex max-w-[80%] flex-col items-center justify-between gap-20 text-center xl:max-w-[60%]">
            <div className="flex flex-col">
              <span className="Title text-2xl opacity-0 sm:text-3xl lg:text-4xl xl:text-6xl">
                Tecnologia, Segurança, <br />
                Qualidade e Durabilidade
              </span>
              <span className="Subtitle opacity-0">
                São alguns de nossos diferenciais
              </span>
            </div>
            <div className="flex flex-col gap-4 md:max-w-[80%] md:flex-row">
              <button className="group flex items-center justify-center gap-2 rounded-lg border border-secondary bg-secondary to-40% p-3 font-medium text-primary transition duration-200 hover:border hover:border-secondary hover:bg-transparent hover:text-secondary">
                <svg
                  width="23"
                  height="24"
                  viewBox="0 0 23 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="group-hover:animate-phoneRinging"
                >
                  <path
                    className="transition duration-200 group-hover:fill-secondary group-hover:stroke-transparent"
                    d="M2.875 5C2.875 3.89543 3.73312 3 4.79167 3H7.93427C8.34677 3 8.71298 3.27543 8.84343 3.68377L10.2788 8.17721C10.4296 8.64932 10.2248 9.16531 9.79826 9.38787L7.63505 10.5165C8.69136 12.9612 10.5788 14.9308 12.9217 16.033L14.0033 13.7757C14.2166 13.3306 14.7111 13.1169 15.1635 13.2743L19.4697 14.7721C19.861 14.9082 20.125 15.2903 20.125 15.7208V19C20.125 20.1046 19.2669 21 18.2083 21H17.25C9.31091 21 2.875 14.2843 2.875 6V5Z"
                    stroke="#122235"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                Falar com Time Comercial
              </button>
              <button className="group flex items-center justify-center gap-2 rounded-lg border border-white bg-white p-3 font-medium text-primary transition duration-200 hover:border hover:border-white hover:bg-transparent hover:text-white">
                <svg
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className=""
                >
                  <path
                    className="transition duration-200 group-hover:stroke-white"
                    d="M4.56543 19V5C4.56543 3.89543 5.46086 3 6.56543 3H19.9654C20.2968 3 20.5654 3.26863 20.5654 3.6V16.7143"
                    stroke="#122235"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  />
                  <path
                    className="transition duration-200 group-hover:animate-bookNote group-hover:stroke-white"
                    d="M8.56543 3V11L11.0654 9.4L13.5654 11V3"
                    stroke="#122235"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    className="transition duration-200 group-hover:stroke-white"
                    d="M6.56543 17H20.5654"
                    stroke="#122235"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  />
                  <path
                    className="transition duration-200 group-hover:stroke-white"
                    d="M6.56543 21H20.5654"
                    stroke="#122235"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  />
                  <path
                    className="transition duration-200 group-hover:stroke-white"
                    d="M6.56543 21C5.46086 21 4.56543 20.1046 4.56543 19C4.56543 17.8954 5.46086 17 6.56543 17"
                    stroke="#122235"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                Conheça nossa História
              </button>
            </div>
          </div>
        </div>
      </section>

      <div className="Rounded absolute h-1 w-full -translate-y-1/2 rounded-[1000%] bg-primary" />
      <Image
        src="/tractor.svg"
        alt="logo"
        width={125}
        height={60}
        className="scrollTractor hidden md:block"
      />
      <div className="mobileScroll absolute flex h-[60vh] min-w-[98vw] flex-col justify-center gap-12 overflow-hidden pt-60 md:hidden">
        <Image
          src="/tractor.svg"
          alt="logo"
          width={125}
          height={60}
          className="scrollTractor"
        />
        <Image
          src="/tractor.svg"
          alt="logo"
          width={125}
          height={60}
          className="scrollTractor scrollTractor2"
        />
        <Image
          src="/tractor.svg"
          alt="logo"
          width={125}
          height={60}
          className="scrollTractor scrollTractor3"
        />
      </div>
      <section className="BigNumbers h-full w-full text-secondary">
        <div className="flex flex-col items-center justify-center px-4 py-28 text-center">
          <span className="text-4xl font-semibold">
            Números que nos{" "}
            <span className="text-4xl text-white">
              <span className="singleLetters">O</span>
              <span className="singleLetters">r</span>
              <span className="singleLetters">g</span>
              <span className="singleLetters">u</span>
              <span className="singleLetters">l</span>
              <span className="singleLetters">h</span>
              <span className="singleLetters">a</span>
              <span className="singleLetters">m</span>
              <span className="singleLetters">o</span>
              <span className="singleLetters">s</span>
            </span>
          </span>
          <div className="mt-10 flex flex-col items-center justify-between gap-10 text-center lg:flex-row">
            <div className="flex flex-col gap-2">
              <span className="Number flex self-center text-4xl font-bold">
                10 <span className="text-white">+</span>
              </span>
              <span className="NumberDescription text-sm">
                Anos de Experiência
              </span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="Number flex gap-2 self-center text-4xl font-bold">
                7 Milhões <span className="text-white"> m²</span>
              </span>
              <span className="NumberDescription text-sm">
                de pavimentação asfáltica
              </span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="Number flex self-center text-4xl font-bold">
                50 <span className="text-white">+</span>
              </span>
              <span className="NumberDescription text-sm">
                Parceiros e Colaboradores
              </span>
            </div>
          </div>
        </div>
      </section>
      <div className="Rounded absolute h-1 w-full -translate-y-1/2 rounded-[1000%] bg-primary" />

      <section className="Services h-full w-full">
        <div className="flex flex-col items-center justify-center gap-8 bg-tertiary px-4 py-20 lg:flex-row">
          <div className="service1 group flex h-64 w-64 cursor-pointer overflow-hidden rounded-lg border border-secondary text-secondary md:h-80 md:w-80 lg:h-96 lg:w-96">
            <Image
              src="/background_2.svg"
              width={500}
              height={500}
              alt=""
              className="h-full w-full rounded-lg object-cover opacity-60 transition duration-200 group-hover:scale-110 group-hover:opacity-20"
            />
            <div className="absolute flex h-64 w-64 flex-col justify-center gap-4 px-8 py-2 md:h-80 md:w-80 lg:h-96 lg:w-96">
              <span className="text-xl md:text-2xl lg:text-3xl">
                Equipamentos para Locação
              </span>
              <span className="text-xs md:text-sm lg:text-base">
                Conheça nossos Equipamentos para locação e obtenha o melhor para
                sua execução.
              </span>
              <button className="group flex w-max items-center justify-center gap-2 rounded-lg border border-white bg-white to-40% px-3 py-2 text-[10px] font-medium text-primary transition duration-200 group-hover:border group-hover:bg-transparent group-hover:text-white lg:text-sm">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 31 31"
                  fill="none"
                  className="group-hover:animate-truck"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    className="group-hover:fill-white"
                    d="M12.0391 23.8306C12.0391 25.0773 11.0284 26.0879 9.78174 26.0879C8.53505 26.0879 7.52441 25.0773 7.52441 23.8306C7.52441 22.5839 8.53505 21.5732 9.78174 21.5732C11.0284 21.5732 12.0391 22.5839 12.0391 23.8306Z"
                    fill="#122235"
                  />
                  <path
                    className="group-hover:fill-white"
                    d="M22.5732 23.8306C22.5732 25.0773 21.5626 26.0879 20.3159 26.0879C19.0692 26.0879 18.0586 25.0773 18.0586 23.8306C18.0586 22.5839 19.0692 21.5732 20.3159 21.5732C21.5626 21.5732 22.5732 22.5839 22.5732 23.8306Z"
                    fill="#122235"
                  />
                  <path
                    className="group-hover:fill-white"
                    d="M4.51465 5.01953C3.68352 5.01953 3.00977 5.69329 3.00977 6.52441V21.5732C3.00977 22.4044 3.68352 23.0781 4.51465 23.0781H6.09479C6.44337 21.3609 7.96161 20.0684 9.78174 20.0684C11.6019 20.0684 13.1201 21.3609 13.4687 23.0781H15.0488C15.88 23.0781 16.5537 22.4044 16.5537 21.5732V6.52441C16.5537 5.69329 15.88 5.01953 15.0488 5.01953H4.51465Z"
                    fill="#122235"
                  />
                  <path
                    className="group-hover:fill-white"
                    d="M21.0684 9.53418C20.2372 9.53418 19.5635 10.2079 19.5635 11.0391V20.1436C19.8066 20.0943 20.0582 20.0684 20.3159 20.0684C22.136 20.0684 23.6543 21.3609 24.0029 23.0781H25.583C26.4141 23.0781 27.0879 22.4044 27.0879 21.5732V14.0488C27.0879 13.6497 26.9293 13.2669 26.6471 12.9847L23.6374 9.97495C23.3551 9.69273 22.9724 9.53418 22.5732 9.53418H21.0684Z"
                    fill="#122235"
                  />
                </svg>
                Ver Equipamentos em Carteira
              </button>
            </div>
          </div>
          <div className="service2 group flex h-64 w-64 cursor-pointer overflow-hidden rounded-lg border border-white text-white md:h-80 md:w-80 lg:h-96 lg:w-96">
            <Image
              src="/background_1.svg"
              width={500}
              height={500}
              alt=""
              className="h-full w-full rounded-lg object-cover opacity-60 transition duration-200 group-hover:scale-110 group-hover:opacity-20"
            />
            <div className="absolute flex h-64 w-64 flex-col justify-center gap-4 px-8 py-2 md:h-80 md:w-80 lg:h-96 lg:w-96">
              <span className="text-xl md:text-2xl lg:text-3xl">
                Todos os Serviços que Prestamos
              </span>
              <span className="text-xs md:text-sm lg:text-base">
                Conheça agora os Serviços que orgulhosamente prestamos há +40
                anos no Mato Grosso.
              </span>
              <button className="group flex w-max items-center justify-center gap-2 rounded-lg border border-secondary bg-secondary to-40% px-3 py-2 text-[10px] font-medium text-primary transition duration-200 group-hover:border group-hover:border-secondary group-hover:bg-transparent group-hover:text-secondary lg:text-sm">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 29 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="group-hover:animate-clipboard"
                >
                  <path
                    className="group-hover:fill-secondary"
                    d="M13.1888 2.96582C12.4271 2.96582 11.8096 3.5833 11.8096 4.34499C11.8096 5.10668 12.4271 5.72416 13.1888 5.72416H15.9472C16.7088 5.72416 17.3263 5.10668 17.3263 4.34499C17.3263 3.5833 16.7088 2.96582 15.9472 2.96582H13.1888Z"
                    fill="#21272A"
                  />
                  <path
                    className="group-hover:fill-secondary"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M6.29297 7.10333C6.29297 5.57994 7.52792 4.34499 9.05131 4.34499C9.05131 6.63007 10.9037 8.48249 13.1888 8.48249H15.9472C18.2322 8.48249 20.0847 6.63007 20.0847 4.34499C21.608 4.34499 22.843 5.57994 22.843 7.10333V22.2742C22.843 23.7976 21.608 25.0325 20.0847 25.0325H9.05131C7.52792 25.0325 6.29297 23.7976 6.29297 22.2742V7.10333ZM10.4305 12.62C9.66878 12.62 9.05131 13.2375 9.05131 13.9992C9.05131 14.7609 9.66878 15.3783 10.4305 15.3783H10.4443C11.206 15.3783 11.8234 14.7609 11.8234 13.9992C11.8234 13.2375 11.206 12.62 10.4443 12.62H10.4305ZM14.568 12.62C13.8063 12.62 13.1888 13.2375 13.1888 13.9992C13.1888 14.7609 13.8063 15.3783 14.568 15.3783H18.7055C19.4672 15.3783 20.0847 14.7609 20.0847 13.9992C20.0847 13.2375 19.4672 12.62 18.7055 12.62H14.568ZM10.4305 18.1367C9.66878 18.1367 9.05131 18.7542 9.05131 19.5158C9.05131 20.2775 9.66878 20.895 10.4305 20.895H10.4443C11.206 20.895 11.8234 20.2775 11.8234 19.5158C11.8234 18.7542 11.206 18.1367 10.4443 18.1367H10.4305ZM14.568 18.1367C13.8063 18.1367 13.1888 18.7542 13.1888 19.5158C13.1888 20.2775 13.8063 20.895 14.568 20.895H18.7055C19.4672 20.895 20.0847 20.2775 20.0847 19.5158C20.0847 18.7542 19.4672 18.1367 18.7055 18.1367H14.568Z"
                    fill="#21272A"
                  />
                </svg>
                Conheça nossos Serviços agora
              </button>
            </div>
          </div>
        </div>
      </section>

      <div className="Rounded2 absolute h-1 w-full -translate-y-1/2 rounded-[1000%] bg-primary" />
      <section className="History h-full w-full">
        <Image
          src="tractorBase.svg"
          alt=""
          width={300}
          height={100}
          className="absolute"
        />
        <div className="flex min-h-96 flex-col items-center justify-center gap-4 px-4 py-20 lg:flex-row lg:px-20 xl:px-40">
          <div className="flex flex-col lg:max-w-[50%]">
            <Image
              src="/Icons/quotes.svg"
              alt=""
              width={50}
              height={50}
              className="absolute"
            />
            <span className="Paragraph text-invisible p-4 text-lg md:text-xl xl:text-3xl"></span>
            <span className="px-4 text-xs font-semibold text-secondary sm:text-sm md:text-base">
              Nome do Dono,
            </span>
            <span className="px-4 text-xs font-extralight text-secondary sm:text-sm md:text-base">
              Dono e Fundador.
            </span>
          </div>
          <button className="text[10px]s group flex items-center justify-center gap-2 rounded-lg border border-secondary bg-secondary to-40% px-3 py-2 font-medium text-primary transition duration-200 hover:border hover:border-secondary hover:bg-transparent hover:text-secondary lg:text-sm">
            Conheça nossos Serviços agora
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="group-hover:animate-arrow"
            >
              <path
                className="transition duration-200 group-hover:stroke-secondary"
                d="M14.4297 5.92969L20.4997 11.9997L14.4297 18.0697"
                stroke="#292D32"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                className="transition duration-200 group-hover:stroke-secondary"
                d="M3.5 12H20.33"
                stroke="#292D32"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
      </section>
      <div className="Rounded2 absolute h-1 w-full -translate-y-1/2 rounded-[1000%] bg-primary" />

      <section className="Team h-full w-full text-white">
        <div className=" flex flex-col items-center gap-4 bg-tertiary px-4 pb-28 text-center lg:min-h-screen">
          <div className="h-40 w-40">
            <Image
              src="tractor.svg"
              alt=""
              width={250}
              height={250}
              className="h-full w-full overflow-hidden"
            />
          </div>
          <span className="TeamTitle text-xl font-bold sm:text-2xl lg:text-3xl xl:text-4xl">
            Entre em contato com Nosso Time
          </span>
          <span className="TeamSubtitle max-w-[80%] text-xs sm:max-w-[65%] sm:text-sm lg:max-w-[40%] xl:max-w-[30%] xl:text-base">
            Lorem ipsum dolor sit amet consectetur adipiscing elit semper dalar
            elementum tempus hac tellus libero accumsan.{" "}
          </span>
          <div className="hidden h-full flex-wrap justify-center gap-4 lg:flex xl:max-w-[64rem]">
            {team.map((item) => (
              <div
                key={item}
                className="lg:w-54 teamCard group flex cursor-pointer overflow-hidden rounded-lg border lg:h-72 xl:h-80 xl:w-60"
              >
                <Image
                  src="/profile.jpeg"
                  width={500}
                  height={500}
                  alt=""
                  className="h-full w-full rounded-lg object-cover opacity-100 transition duration-200 group-hover:scale-105 group-hover:opacity-60"
                />
                <div className="lg:w-54 absolute flex flex-col items-center justify-end gap-4 p-2 lg:h-72 xl:h-80 xl:w-60">
                  <div className="relative flex w-full flex-col items-center bg-transparent p-2">
                    {/* <div className="absolute h-12 w-full rounded-lg bg-primary opacity-90 blur-[1px] backdrop-filter" /> */}
                    <span className="z-10 text-lg text-white transition duration-200 group-hover:text-white lg:text-base">
                      Nome do Colaborador
                    </span>
                    <div className="z-10 flex gap-2 text-xs">
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
                      className="h-full w-full rounded-lg object-cover opacity-100 transition duration-200 group-hover:scale-105 group-hover:opacity-60"
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

      <div className="Rounded3 absolute z-10 h-1 w-full -translate-y-1/2 rounded-[1000%] bg-primary" />
      <footer className="Footer h-full w-full text-white">
        <div className="flex h-full w-full flex-col items-center justify-around p-4 pb-12 md:flex-row">
          <div className="z-20 flex flex-col gap-2">
            <div className="flex items-center gap-2 text-sm font-bold">
              <Image
                src="/Icons/community.svg"
                alt=""
                width={50}
                height={50}
                className="h-8 w-8"
              />
              Nos siga nas Redes Sociais
            </div>
            <div className="flex items-center justify-center gap-2">
              <Image
                src="/Icons/facebook.svg"
                alt="logo"
                width={20}
                height={20}
                className="cursor-pointer rounded-full transition duration-200 hover:scale-125 hover:border hover:border-secondary"
                onClick={() =>
                  redirect("https://www.facebook.com/transterrasinop/")
                }
              />
              <Image
                src="/Icons/instagram.svg"
                alt="logo"
                width={20}
                height={20}
                className="cursor-pointer rounded-lg transition duration-200 hover:scale-125 hover:border hover:border-secondary"
                onClick={() =>
                  redirect("https://www.instagram.com/transterrasinop/")
                }
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
