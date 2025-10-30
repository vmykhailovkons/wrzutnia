import { useState, useEffect } from 'react';
import svgPaths from '../imports/svg-866o2qg5ib';

interface EditUserScreenProps {
  userId: string;
  role: string;
  status: 'aktywny' | 'nieaktywny';
  onSave: (userId: string, role: string, status: 'aktywny' | 'nieaktywny') => void;
}

export default function EditUserScreen({ userId: initialUserId, role: initialRole, status: initialStatus, onSave }: EditUserScreenProps) {
  const [userId, setUserId] = useState(initialUserId);
  const [role, setRole] = useState(initialRole);
  const [status, setStatus] = useState(initialStatus);
  const [showRoleDropdown, setShowRoleDropdown] = useState(false);
  const [showStatusDropdown, setShowStatusDropdown] = useState(false);
  const [isShiftActive, setIsShiftActive] = useState(false);

  // Track if form has been modified
  const [hasChanges, setHasChanges] = useState(false);

  useEffect(() => {
    const changed = userId !== initialUserId || role !== initialRole || status !== initialStatus;
    setHasChanges(changed);
  }, [userId, role, status, initialUserId, initialRole, initialStatus]);

  const handleKeyPress = (key: string) => {
    if (key === '←') {
      setUserId(prev => prev.slice(0, -1));
    } else if (key === 'shift') {
      setIsShiftActive(!isShiftActive);
    } else {
      const char = isShiftActive ? key.toUpperCase() : key;
      setUserId(prev => prev + char);
      if (isShiftActive) {
        setIsShiftActive(false);
      }
    }
  };

  const roles = ['Klient', 'Kurier', 'Master'];
  const statuses: Array<{ value: 'aktywny' | 'nieaktywny'; label: string }> = [
    { value: 'aktywny', label: 'Aktywny' },
    { value: 'nieaktywny', label: 'Nie aktywny' }
  ];

  const handleSave = () => {
    if (userId && role) {
      onSave(userId, role, status);
    }
  };

  return (
    <div className="relative h-[600.297px] w-[1024.5px]" data-name="Edycja użytkownika">
      {/* White Container - Centered */}
      <div className="absolute bg-white h-[508px] left-1/2 -translate-x-1/2 rounded-[14px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] top-1/2 -translate-y-1/2 w-[993px]">
        
        {/* Header with Icon and Button */}
        <div className="absolute content-stretch flex h-[36px] items-center left-[27px] top-[27px] w-[940px]" data-name="Container">
          
          {/* Heading + Icon */}
          <div className="content-stretch flex gap-[12px] h-[32px] items-center relative shrink-0" data-name="Container">
            {/* Edit Icon */}
            <div className="relative shrink-0 size-[32px]" data-name="Icon">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
                <g id="Icon">
                  <path d={svgPaths.pec6d040} id="Vector" stroke="var(--stroke-0, #2B7FFF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
                  <path d={svgPaths.p25171400} id="Vector_2" stroke="var(--stroke-0, #2B7FFF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
                </g>
              </svg>
            </div>

            {/* Title */}
            <div className="basis-0 grow h-[32px] min-h-px min-w-px relative shrink-0" data-name="CardTitle">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[32px] items-start relative w-full">
                <p className="font-['Arial:Regular',sans-serif] leading-[32px] not-italic relative shrink-0 text-[24px] text-neutral-950 text-nowrap whitespace-pre">Edycja użytkownika</p>
              </div>
            </div>
          </div>

          <div className="flex-1" />

          {/* Zapisz Button - only show when there are changes */}
          {hasChanges && (
            <button
              type="button"
              onClick={handleSave}
              className="bg-[#00a63e] h-[40px] relative rounded-[8px] shrink-0 w-[172.734px] cursor-pointer hover:bg-[#009538] transition-colors"
              data-name="Button"
            >
              <p className="absolute font-['Arial:Regular',sans-serif] leading-[21px] left-[84px] not-italic text-[14px] text-nowrap text-white top-[9px] whitespace-pre">Zapisz</p>
            </button>
          )}
        </div>

        {/* Form Container */}
        <div className="absolute content-stretch flex flex-col gap-[24px] h-[173px] items-start left-[130px] overflow-x-clip overflow-y-auto top-[79px] w-[734px]" data-name="Container">
          
          {/* ID użytkownika */}
          <div className="h-[60px] relative shrink-0 w-full" data-name="Container">
            {/* Label */}
            <div className="absolute content-stretch flex h-[16px] items-start left-0 top-[5px] w-[94.156px]" data-name="Label">
              <p className="font-['Arial:Regular',sans-serif] leading-[21px] not-italic relative shrink-0 text-[#4a5565] text-[14px] text-nowrap whitespace-pre">ID użytkownika</p>
            </div>
            {/* Text Input */}
            <div className="absolute bg-white h-[36px] left-0 rounded-[8px] top-[24px] w-[734px]" data-name="Text Input">
              <div className="box-border content-stretch flex h-[36px] items-center overflow-clip px-[12px] py-0 relative rounded-[inherit] w-[734px]">
                <input
                  type="text"
                  value={userId}
                  onChange={(e) => setUserId(e.target.value)}
                  className="w-full bg-transparent border-none outline-none font-['Arial:Regular',sans-serif] text-[14px] text-neutral-950"
                />
              </div>
              <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[8px]" />
            </div>
          </div>

          {/* Rola */}
          <div className="h-[60px] relative shrink-0 w-full" data-name="Container">
            {/* Label */}
            <div className="absolute content-stretch flex h-[16px] items-start left-0 top-[5px] w-[28.797px]" data-name="Label">
              <p className="font-['Arial:Regular',sans-serif] leading-[21px] not-italic relative shrink-0 text-[#4a5565] text-[14px] text-nowrap whitespace-pre">Rola</p>
            </div>
            {/* Button - Dropdown */}
            <button
              onClick={() => setShowRoleDropdown(!showRoleDropdown)}
              type="button"
              className="absolute bg-white box-border content-stretch flex h-[36px] items-center justify-between left-0 px-[13px] py-px rounded-[8px] top-[24px] w-[734px] cursor-pointer hover:border-[#2B7FFF] transition-colors"
              data-name="Button"
            >
              <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[8px]" />
              {/* Text */}
              <div className="h-[21px] relative shrink-0" data-name="Text">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[21px] relative">
                  <p className="absolute font-['Arial:Regular',sans-serif] leading-[21px] left-0 not-italic text-[14px] text-nowrap top-0 whitespace-pre text-neutral-950">
                    {role}
                  </p>
                </div>
              </div>
              {/* Icon */}
              <div className="relative shrink-0 size-[16px]" data-name="Icon">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                  <g id="Icon">
                    <path d="M4 6L8 10L12 6" id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                  </g>
                </svg>
              </div>
            </button>

            {/* Dropdown Menu */}
            {showRoleDropdown && (
              <div className="absolute top-[64px] left-0 w-[734px] bg-white border border-[#d1d5dc] rounded-[8px] shadow-lg z-10">
                {roles.map((r) => (
                  <button
                    key={r}
                    type="button"
                    onClick={() => {
                      setRole(r);
                      setShowRoleDropdown(false);
                    }}
                    className="w-full px-[13px] py-[8px] text-left font-['Arial:Regular',sans-serif] text-[14px] text-neutral-950 hover:bg-gray-50 first:rounded-t-[8px] last:rounded-b-[8px]"
                  >
                    {r}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Status */}
          <div className="h-[60px] relative shrink-0 w-full" data-name="Container">
            {/* Label */}
            <div className="absolute content-stretch flex h-[16px] items-start left-0 top-[5px] w-[28.797px]" data-name="Label">
              <p className="font-['Arial:Regular',sans-serif] leading-[21px] not-italic relative shrink-0 text-[#4a5565] text-[14px] text-nowrap whitespace-pre">Status</p>
            </div>
            {/* Button - Dropdown */}
            <button
              onClick={() => setShowStatusDropdown(!showStatusDropdown)}
              type="button"
              className="absolute bg-white box-border content-stretch flex h-[36px] items-center justify-between left-0 px-[13px] py-px rounded-[8px] top-[24px] w-[734px] cursor-pointer hover:border-[#2B7FFF] transition-colors"
              data-name="Button"
            >
              <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[8px]" />
              {/* Text */}
              <div className="h-[21px] relative shrink-0" data-name="Text">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[21px] relative">
                  <p className="absolute font-['Arial:Regular',sans-serif] leading-[21px] left-0 not-italic text-[14px] text-nowrap top-0 whitespace-pre text-neutral-950">
                    {status === 'aktywny' ? 'Aktywny' : 'Nie aktywny'}
                  </p>
                </div>
              </div>
              {/* Icon */}
              <div className="relative shrink-0 size-[16px]" data-name="Icon">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                  <g id="Icon">
                    <path d="M4 6L8 10L12 6" id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
                  </g>
                </svg>
              </div>
            </button>

            {/* Dropdown Menu */}
            {showStatusDropdown && (
              <div className="absolute top-[64px] left-0 w-[734px] bg-white border border-[#d1d5dc] rounded-[8px] shadow-lg z-10">
                {statuses.map((s) => (
                  <button
                    key={s.value}
                    type="button"
                    onClick={() => {
                      setStatus(s.value);
                      setShowStatusDropdown(false);
                    }}
                    className="w-full px-[13px] py-[8px] text-left font-['Arial:Regular',sans-serif] text-[14px] text-neutral-950 hover:bg-gray-50 first:rounded-t-[8px] last:rounded-b-[8px]"
                  >
                    {s.label}
                  </button>
                ))}
              </div>
            )}
          </div>

        </div>

        {/* VirtualKeyboard950X */}
        <div className="absolute h-[200px] left-[21px] top-[271.88px] w-[950px]" data-name="VirtualKeyboard950X200">
          
          {/* Row 1 - Numbers 1-0 and Backspace */}
          <div className="absolute h-[47px] left-0 top-0 w-[950px]">
            {['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'].map((num, index) => (
              <button
                key={num}
                type="button"
                onClick={() => handleKeyPress(num)}
                className="absolute bg-gray-100 h-[47px] rounded-[8px] w-[68.5px] cursor-pointer hover:bg-gray-200 transition-colors"
                style={{ left: `${index * 72.39}px` }}
                data-name={`KeyButton${index}`}
              >
                <div className="absolute h-[47px] left-0 rounded-[8px] top-0 w-[68.5px]" data-name="Container">
                  <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[8px]" />
                </div>
                <div className="absolute h-[47px] left-0 top-0 w-[68.5px]" data-name="Container">
                  <div className="absolute h-[20px] left-[30.34px] top-[13.5px] w-[7.797px]">
                    <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-0 not-italic text-[14px] text-neutral-950 text-nowrap top-0 whitespace-pre">{num}</p>
                  </div>
                </div>
              </button>
            ))}
            {/* Backspace */}
            <button
              type="button"
              onClick={() => handleKeyPress('←')}
              className="absolute bg-gray-100 h-[47px] left-[723.91px] rounded-[8px] top-0 w-[217px] cursor-pointer hover:bg-gray-200 transition-colors"
              data-name="KeyButton30"
            >
              <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[8px]" />
              <div className="absolute h-[20px] left-[101.5px] top-[13.5px] w-[14px]">
                <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-0 not-italic text-[14px] text-neutral-950 text-nowrap top-0 whitespace-pre">←</p>
              </div>
            </button>
          </div>

          {/* Row 2 - QWERTYUIOP */}
          <div className="absolute h-[47px] left-0 top-[50px] w-[950px]">
            {['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'].map((letter, index) => (
              <button
                key={letter}
                type="button"
                onClick={() => handleKeyPress(letter)}
                className="absolute bg-gray-100 h-[47px] rounded-[8px] w-[90.438px] cursor-pointer hover:bg-gray-200 transition-colors"
                style={{ left: `${index * 95.48}px` }}
              >
                <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[8px]" />
                <div className="absolute h-[20px] left-[41.31px] top-[13.5px] w-[7.797px]">
                  <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-0 not-italic text-[14px] text-neutral-950 text-nowrap top-0 whitespace-pre">
                    {isShiftActive ? letter.toUpperCase() : letter}
                  </p>
                </div>
              </button>
            ))}
          </div>

          {/* Row 3 - ASDFGHJKL */}
          <div className="absolute h-[47px] left-[32.73px] top-[100px] w-[884.94px]">
            {['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'].map((letter, index) => (
              <button
                key={letter}
                type="button"
                onClick={() => handleKeyPress(letter)}
                className="absolute bg-gray-100 h-[47px] rounded-[8px] w-[93.469px] cursor-pointer hover:bg-gray-200 transition-colors"
                style={{ left: `${index * 97.92}px` }}
              >
                <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[8px]" />
                <div className="absolute h-[20px] left-[42.83px] top-[13.5px] w-[7.797px]">
                  <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-0 not-italic text-[14px] text-neutral-950 text-nowrap top-0 whitespace-pre">
                    {isShiftActive ? letter.toUpperCase() : letter}
                  </p>
                </div>
              </button>
            ))}
          </div>

          {/* Row 4 - Shift + ZXCVBNM */}
          <div className="absolute h-[47px] left-0 top-[150px] w-[950px]">
            {/* Shift Button */}
            <button
              type="button"
              onClick={() => handleKeyPress('shift')}
              className={`absolute h-[47px] left-0 rounded-[8px] top-0 w-[128.297px] cursor-pointer transition-colors ${
                isShiftActive ? 'bg-blue-200' : 'bg-gray-100'
              } hover:bg-blue-100`}
            >
              <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[8px]" />
              <div className="absolute h-[20px] left-[48px] top-[13.5px]">
                <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-0 not-italic text-[14px] text-neutral-950 text-nowrap top-0 whitespace-pre">shift</p>
              </div>
            </button>
            {['z', 'x', 'c', 'v', 'b', 'n', 'm'].map((letter, index) => (
              <button
                key={letter}
                type="button"
                onClick={() => handleKeyPress(letter)}
                className="absolute bg-gray-100 h-[47px] rounded-[8px] w-[98.313px] cursor-pointer hover:bg-gray-200 transition-colors"
                style={{ left: `${132.11 + index * 103.81}px` }}
              >
                <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[8px]" />
                <div className="absolute h-[20px] left-[45.25px] top-[13.5px] w-[7.797px]">
                  <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-0 not-italic text-[14px] text-neutral-950 text-nowrap top-0 whitespace-pre">
                    {isShiftActive ? letter.toUpperCase() : letter}
                  </p>
                </div>
              </button>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}
