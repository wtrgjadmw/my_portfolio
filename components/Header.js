import GithubIcon from "./svgs/GithubIcon";
import TerminalIcon from "./svgs/TerminalIcon";
import TwitterIcon from "./svgs/TwitterIcon";

export default function Header() {
  return(
    <header className="h-12 shadow py-3">
      <div className="container mx-auto px-6">
        <div className="flex justify-between">
          <div className="flex">
            <TerminalIcon/>
            <div className="mx-3 font-architects text-lg">MOMOKO FUKUDA</div>
          </div>
          <div className="flex">
            <a href="https://twitter.com/wtrgjadmw">
              <TwitterIcon className="mx-3 cursor-pointer"/>
            </a>
            <a href="https://github.com/wtrgjadmw">
              <GithubIcon className="mx-3 cursor-pointer"/>
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}