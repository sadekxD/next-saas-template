import Image from "next/image";

export default function Demo() {
  return (
    <section>
      <div className="container">
        <svg
          viewBox="0 0 1200 44"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            d="M0 12C0 5.37258 5.37258 0 12 0H1188C1194.63 0 1200 5.37258 1200 12V44H0V12Z"
            fill="#2F2B43"
          />
          <rect x="16" y="16" width="12" height="12" rx="6" fill="white" />
          <rect x="36" y="16" width="12" height="12" rx="6" fill="white" />
          <rect x="56" y="16" width="12" height="12" rx="6" fill="white" />
          <path
            d="M1177.17 21.1667V16.1667H1178.83V21.1667H1183.83V22.8334H1178.83V27.8334H1177.17V22.8334H1172.17V21.1667H1177.17Z"
            fill="white"
          />
        </svg>
        <div className="relative">
          <Image
            src="/dashboard.png"
            alt="dashboard"
            width={1200}
            height={740}
            objectFit="contain"
          />

          <button className="flex items-center justify-center absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 w-20 h-20 backdrop-blur-[10px] rounded-full shadow-sm">
            <svg
              width="22"
              height="26"
              viewBox="0 0 22 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21 11.2679C22.3333 12.0378 22.3333 13.9622 21 14.7321L3 25.1244C1.66666 25.8942 -1.22094e-06 24.9319 -1.15364e-06 23.3923L-2.4512e-07 2.60769C-1.77822e-07 1.06809 1.66667 0.105843 3 0.875644L21 11.2679Z"
                fill="white"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
