import { OrbitingCircles } from "./OrbitingCircles";

export function FrameWorks() {
    const skills = [
        "cplusplus",
        "css3",
        "git",
        "html5",
        "javascript",
        "react",
        "tailwindcss",
        "github"
    ];

    return (
        <div className="relative flex h-[15rem] w-full flex-col items-center justify-center">
            {/* Outer Circle */}
            <OrbitingCircles
                iconSize={40}
            >
                {skills.map((skill, index) => (
                    <Icon key={index} src={`../../public/assets/logos/${skill}.svg`} />
                ))}
            </OrbitingCircles>
            {/* Inner Circle */}
            <OrbitingCircles
                iconSize={25}
                radius={100}
                reverse speed={2}
            >
                {skills.reverse().map((skill, index) => (
                    <Icon key={index} src={`../../public/assets/logos/${skill}.svg`} />
                ))}
            </OrbitingCircles>
        </div>
    );
}

const Icon = ({ src }) => (
    <img src={src} className="Rounded-sm hover:scale-110 duration-200" />
)