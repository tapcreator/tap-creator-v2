'use client'
import Typewriter from 'typewriter-effect'

export default function TypewriterComponent() {
  return (
    <h2 className="text-5xl tracking-wider font-bold text-center leading-relaxed text-zinc-700 pt-5">
      <Typewriter
        options={{
          delay: 200,
          deleteSpeed: 125,
          autoStart: true,
          loop: true,
        }}
        onInit={(typewriter) => {
          typewriter
            .typeString("Tap Creator")
            .callFunction(() => {
              console.log("String typed out!");
            })
            .pauseFor(3500)
            .deleteAll()
            .typeString("Full Stack Developer")
            .pauseFor(3500)
            .deleteAll()
            .typeString("Programmer")
            .pauseFor(3500)
            .deleteAll()
            .typeString("Freelancer")
            .pauseFor(3500)
            .deleteAll()
            .typeString("...")
            .pauseFor(3500)
            .deleteAll()
            .callFunction(() => {
              console.log("All strings were deleted");
            })
            .start();
        }}
      />
    </h2>
  )
}