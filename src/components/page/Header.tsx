import { ReactComponent as Logo } from "../../assets/icons/logo.svg";

export default function Header() {
    return (
        <header className="h-20 w-full min-w-screen top-0 fixed z-50 flex items-center bg-primary">
            <Logo className="h-20 mx-2"></Logo>
            <h1 className="text-4xl font-semibold text-white"><span className="text-accent">News</span> 4 U</h1>
        </header>
    )
}
