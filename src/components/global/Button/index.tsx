import Image from "next/image";

interface ButtonProps {
  children: React.ReactNode;
  bg: "primary" | "secondary" | "white";
  color: "primary" | "secondary";
  icon?: string;
  text?: string;
  height?: string;
}

export function GlobalButton({ children, bg, color, icon, text, height }: ButtonProps) {
  return (
    <button
      className={`rounded-lg ${bg === "primary" ? "bg-primary" : bg === "secondary" ? "bg-secondary" : "bg-white"} ${color === "primary" ? "text-primary" : "text-secondary"} ${text ? `text-${text}` : ""} ${height ? `h-${height}` : ""} flex items-center justify-center gap-2 p-3 font-medium`}
    >
      {icon ? <Image src={icon} alt="icon" width={20} height={20} /> : null}
      {children}
    </button>
  );
}
