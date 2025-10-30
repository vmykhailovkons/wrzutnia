import svgPaths from "./svg-apz697pscg";

function Icon() {
  return (
    <div className="absolute left-[46.63px] size-[247px] top-[88.5px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 247 247">
        <g id="Icon">
          <path d={svgPaths.p99b4b80} id="Vector" fill="#155DFC" />
          <path d={svgPaths.p14869840} id="Vector_2" fill="#155DFC" />
          <path d={svgPaths.p1d9f0d00} id="Vector_3" fill="#155DFC" />
          <path d={svgPaths.p127b7280} id="Vector_4" stroke="#155DFC" strokeLinecap="round" strokeLinejoin="round" strokeWidth="20.5833" />
          <path d="M216.125 216.125V216.227" id="Vector_5" stroke="#155DFC" strokeLinecap="round" strokeLinejoin="round" strokeWidth="20.5833" />
          <path d={svgPaths.p2f0fe600} id="Vector_6" stroke="#155DFC" strokeLinecap="round" strokeLinejoin="round" strokeWidth="20.5833" />
          <path d="M30.875 123.5H30.9768" id="Vector_7" stroke="#155DFC" strokeLinecap="round" strokeLinejoin="round" strokeWidth="20.5833" />
          <path d="M123.5 30.875H123.602" id="Vector_8" stroke="#155DFC" strokeLinecap="round" strokeLinejoin="round" strokeWidth="20.5833" />
          <path d="M123.5 164.667V164.768" id="Vector_9" stroke="#155DFC" strokeLinecap="round" strokeLinejoin="round" strokeWidth="20.5833" />
          <path d="M164.666 123.5H174.958" id="Vector_10" stroke="#155DFC" strokeLinecap="round" strokeLinejoin="round" strokeWidth="20.5833" />
          <path d="M216.125 123.5V123.602" id="Vector_11" stroke="#155DFC" strokeLinecap="round" strokeLinejoin="round" strokeWidth="20.5833" />
          <path d="M123.5 216.125V205.833" id="Vector_12" stroke="#155DFC" strokeLinecap="round" strokeLinejoin="round" strokeWidth="20.5833" />
        </g>
      </svg>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="absolute h-[24px] left-[102.63px] top-[22.5px] w-[136.938px]" data-name="Paragraph1">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-[68px] not-italic text-[#314158] text-[16px] text-center text-nowrap top-0 translate-x-[-50%] whitespace-pre">Zeskanuj kod QR</p>
    </div>
  );
}

function Container() {
  return (
    <div className="h-[424px] relative shrink-0 w-[341.25px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[424px] relative w-[341.25px]">
        <Icon />
        {[...Array(2).keys()].map((_, i) => (
          <Paragraph1 key={i} />
        ))}
      </div>
    </div>
  );
}

function Container1({ onQrScan }: { onQrScan?: () => void }) {
  return (
    <div 
      className="absolute bg-blue-50 box-border content-stretch flex h-[319px] items-center justify-center left-[56px] p-[4px] rounded-[14px] top-[68px] w-[400px]" 
      data-name="Container"
    >
      <div aria-hidden="true" className="absolute border-4 border-[#2b7fff] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <Container />
    </div>
  );
}

function Button({ onClick }: { onClick?: () => void }) {
  return (
    <button onClick={onClick} className="absolute bg-white box-border content-stretch flex gap-[8px] h-[57px] items-center justify-center left-[638px] px-[25px] py-px rounded-[8px] top-[199px] w-[248px] hover:bg-gray-50 transition-colors cursor-pointer" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <p className="font-['Arial:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre">Pomiń skanowanie kodu QR</p>
    </button>
  );
}

function Paragraph2() {
  return (
    <div className="absolute h-[24px] left-[540px] top-[216px] w-[21.359px]" data-name="Paragraph3">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-[11px] not-italic text-[#314158] text-[16px] text-center text-nowrap top-0 translate-x-[-50%] whitespace-pre">lub</p>
    </div>
  );
}

function Container2({ onSkip, onQrScan }: { onSkip?: () => void; onQrScan?: () => void }) {
  return (
    <div className="absolute bg-white h-[508px] left-1/2 -translate-x-1/2 rounded-[14px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] top-1/2 -translate-y-1/2 w-[993px]" data-name="Container11">
      <Container1 onQrScan={onQrScan} />
      <Button onClick={onSkip} />
      <Paragraph2 />
    </div>
  );
}

export default function SkanowanieQr({ onSkip, onQrScan }: { onSkip?: () => void; onQrScan?: () => void }) {
  return (
    <div className="relative h-[600.297px] w-[1024.5px]" data-name="SkanowanieQr">
      <Container2 onSkip={onSkip} onQrScan={onQrScan} />
    </div>
  );
}
