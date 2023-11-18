"use client";
import Image from "next/image";
import dashboard from "@assets/Dashboard.svg";
import logo from "@assets/logo.svg";
import InfoCard from "@/components/InfoCard";
import project from "@assets/project.svg";
import issue from "@assets/issue.svg";
import communication from "@assets/communication.svg";
import create from "@assets/create.svg";
import track from "@assets/track.svg";
import OfrreCard from "@/components/OffreCard";
import SliderComponent from "@/components/LandingPage/Slider";
import avatar from "@assets/avatar.png";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function Home() {
  return (
    <main className="container mx-auto">
      <nav className="flex flex-row mx-8 justify-between items-center p-4">
        <Image src={logo} alt="logo" />
        <div className="flex mr-24 gap-8 text-mainGray2 font-normal">
          <a className="transition-all duration-700 hover:cursor-pointer hover:text-Secondary" href="#home">
            Home
          </a>
          <a className="transition-all duration-700 hover:cursor-pointer hover:text-Secondary" href="#features">
            Features
          </a>
          <a className="transition-all duration-700 hover:cursor-pointer hover:text-Secondary" href="#subscribtion">
            Subscription
          </a>
        </div>
      </nav>
      <section className="flex flex-col items-center justify-center pt-20" id="home">
        <h1 className="w-[50vw] text-5xl font-semibold text-center leading-relaxed">
          Improve your performance using{" "}
          <span className="text-Secondary">platform name</span>
        </h1>
        <p className="text-base pt-8 w-[40vw] text-center">
          Sigh view am high neat half to what. Sent late held than set why wife
          our. If an blessing
        </p>
        <Link href={'/login'} className="mt-8 bg-Secondary flex items-center font-medium gap-3 px-6 py-3 rounded-3xl text-white hover:bg-opacity-80 transition-all duration-700">
          Buy Now
          <span className="fill-white">
            <svg
              width="15"
              height="12"
              viewBox="0 0 15 12"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M8.293 0.74701C8.48053 0.559539 8.73484 0.454224 9 0.454224C9.26516 0.454224 9.51947 0.559539 9.707 0.74701L14.207 5.24701C14.3945 5.43454 14.4998 5.68885 14.4998 5.95401C14.4998 6.21917 14.3945 6.47348 14.207 6.66101L9.707 11.161C9.5184 11.3432 9.2658 11.444 9.0036 11.4417C8.7414 11.4394 8.49059 11.3342 8.30518 11.1488C8.11977 10.9634 8.0146 10.7126 8.01233 10.4504C8.01005 10.1882 8.11084 9.93561 8.293 9.74701L11 6.95401H1.5C1.23478 6.95401 0.98043 6.84865 0.792893 6.66112C0.605357 6.47358 0.5 6.21923 0.5 5.95401C0.5 5.68879 0.605357 5.43444 0.792893 5.2469C0.98043 5.05937 1.23478 4.95401 1.5 4.95401H11L8.293 2.16101C8.10553 1.97348 8.00021 1.71917 8.00021 1.45401C8.00021 1.18885 8.10553 0.934538 8.293 0.74701Z" />
            </svg>
          </span>
        </Link>
      </section>
      <section className="flex justify-center pt-16">
        <Image src={dashboard} alt="dashoard" />
      </section>
      <section className="pt-20 flex flex-col items-center justify-center" id="features">
        <h2 className="text-5xl font-semibold text-center w-[50vw] pb-8">
          Great Deals For You
        </h2>
        <p className="w-[35vw] text-lg text-center text-mainGray2 pb-12">
          The sky was cloudless and of a deep dark blue the spectaclef a deep
          dark blue
        </p>
        <div className="flex items-center justify-center gap-12 pb-16">
          <InfoCard
            description={
              "Our platform improve your performance by providing witwit"
            }
            title={"Project management"}
            icon={project}
          />
          <InfoCard
            description={
              "Our platform improve your performance by providing witwit"
            }
            title={"Good communication"}
            icon={communication}
          />
          <InfoCard
            description={
              "Our platform improve your performance by providing witwit"
            }
            title={"Easy troubleshooting"}
            icon={issue}
          />
        </div>
      </section>
      <section className="space-y-12 py-16" id="">
        <div className="flex items-center gap-16 justify-center mx-16">
          <Image alt="" src={create} />
          <div className="flex flex-col gap-8 w-[40%]">
            <div className="text-4xl font-semibold text-start">
              Create project easly
            </div>
            <p className="text-start text-mainGray2">
              Through our platform tou can easly manage tasks and see updates
              about them which ensure a good communication with your employees
              and improve your performance{" "}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-16 justify-center mx-16">
          <div className="flex flex-col gap-8 w-[40%]">
            <div className="text-4xl font-semibold text-start">
              Track Tasks workflow
            </div>
            <p className="text-start text-mainGray2">
              Through our platform tou can easly manage tasks and see updates
              about them which ensure a good communication with your employees
              and improve your performance
            </p>
          </div>
          <Image alt="" src={track} />
        </div>
      </section>
      <section className="pt-20 flex flex-col items-center justify-center" id="subscribtion">
        <h2 className="text-5xl font-semibold text-center w-[50vw] pb-8">
          Subscription
        </h2>
        <p className="w-[35vw] text-lg text-center text-mainGray2 pb-12">
          The sky was cloudless and of a deep dark blue the spectaclef a deep
          dark blue
        </p>
        <div className="flex items-center justify-center gap-12 pb-16">
          <OfrreCard
            list={["Annual supscription", "Limited features", "Maximum of 100 employees"]}
            price={"$99"}
            type={"per year"}
            title={"Standard"}
          />
          <OfrreCard
            list={["Annual supscription", "Access to all features", "Up to 500 employees"]}
            price={"$199"}
            type={"per year"}
            title={"Premuim"}
          />
          <OfrreCard
            list={["One time pay", "Unlimited employees", "Ultimate security"]}
            price={"$899"}
            type={"once"}
            title={"Ultimate"}
          />
        </div>
      </section>
      <section className="flex items-center justify-center">
        <SliderComponent
          comments={[
            {
              avatar: avatar,
              name: "Tony",
              role: "C164 CEO",
              feedback:
                "The sky was cloudless and of a deepbluef a deep dark blueThe sky was cloudless and of a deep dark blue the spectaclef a deep dark blueThe sky was cloudless and of a deepbluef a deep dark blueThe sky was cloudless ",
            },
            {
              avatar: avatar,
              name: "Alex",
              role: "Hr manager",
              feedback:
                "At first i was not sure about doign this step in my departement but dark blue the spectaclef a deep dark blueThe sky was cloudless and of a deepbluef a deep dark blueThe sky was cloudless ",
            },
            {
              avatar: avatar,
              name: "Johana",
              role: "Hr manager",
              feedback:
                "Highly recommended, At first i was not sure about doign this step in my departement but dark blue the spectaclef a deep dark",
            },
            {
              avatar: avatar,
              name: "John",
              role: "Hr manager",
              feedback:
                "Worth buying the ultimate pack ",
            },
          ]}
        />
      </section>
      <Footer/>
    </main>
  );
}
