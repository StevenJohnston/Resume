import Project from "@/app/_components/Project"

interface WealthsimpleProjectsProps {
  isPdf?: boolean
}
export default function WealthsimpleProjects({ isPdf }: WealthsimpleProjectsProps) {
  const listClasses = isPdf ? 'text-[10px]' : 'text-sm pl-3'

  return (
    <>
      <Project
        title="LogChopper"
        link="https://github.com/StevenJohnston/LogChopper"
        tight={isPdf}
      >
        <div className={`${listClasses}`}>
          <ul className="list-disc leading-tight">
            <li>Progressive Web App aimed to assist with tuning Engine Control Units supported by <a className="text-blue-600 hover:text-blue-800" href="https://www.tactrix.com/index.php?option=com_content&view=category&layout=blog&id=36&Itemid=57">EcuFlash</a></li>
            <li>Initially a CLI tool to filter (chop) .csv (log) records, later converted into a client side Next.js App Router web application</li>
            <li>Harnesses Web Workers to relieve main event loop while processing 10k+ log records</li>
          </ul>
        </div>
      </Project>
      <Project
        title="Crypto Tulips"
        link="https://github.com/StevenJohnston/py-crypto-tulips"
        tight={isPdf}
      >
        <div className={`${listClasses}`}>
          <ul className="list-disc leading-tight">
            <li>Created a cryptocurrency from the ground up using the ecdsa python package</li>
            <li>Implemented bleeding edge proof of stake protocol (2017)</li>
          </ul>
        </div>
      </Project >
      <Project
        title="Short Term Crypto Client/Server"
        link="https://github.com/StevenJohnston/ShortTermCryptoClient"
        tight={isPdf}
      >
        <div className={`${listClasses}`}>
          <ul className="list-disc leading-tight">
            <li>Designed a website similar to CoinMarketCap with the ability to view customizable price change intervals utilizing websockets</li>
          </ul>
        </div>
      </Project >
    </>
  )
}