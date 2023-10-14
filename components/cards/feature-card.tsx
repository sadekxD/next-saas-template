interface CardProps {
  title: string;
  description: string;
}

export default function FeatureCard({ title, description }: CardProps) {
  return (
    <div className="flex-1 border rounded-3xl md:rounded-[32px] bg-white p-6 md:p-12 flex flex-col gap-2 md:gap-4">
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 19.2C0 12.4794 0 9.11905 1.30792 6.55211C2.4584 4.29417 4.29417 2.4584 6.55211 1.30792C9.11905 0 12.4794 0 19.2 0H28.8C35.5206 0 38.8809 0 41.4479 1.30792C43.7058 2.4584 45.5416 4.29417 46.6921 6.55211C48 9.11905 48 12.4794 48 19.2V28.8C48 35.5206 48 38.8809 46.6921 41.4479C45.5416 43.7058 43.7058 45.5416 41.4479 46.6921C38.8809 48 35.5206 48 28.8 48H19.2C12.4794 48 9.11905 48 6.55211 46.6921C4.29417 45.5416 2.4584 43.7058 1.30792 41.4479C0 38.8809 0 35.5206 0 28.8V19.2Z"
          fill="url(#paint0_linear_25_57854)"
        />
        <g filter="url(#filter0_d_25_57854)">
          <path
            d="M24 39C24.3463 39 24.6453 38.8846 24.8972 38.6537C25.149 38.4334 25.3012 38.1343 25.3536 37.7566C25.6159 35.7733 25.9098 34.1049 26.235 32.7513C26.5603 31.3977 26.9853 30.2854 27.51 29.4145C28.0346 28.5435 28.7219 27.851 29.5719 27.3368C30.4323 26.8122 31.5236 26.4082 32.8458 26.1249C34.1784 25.8311 35.8048 25.574 37.7251 25.3536C38.0923 25.3116 38.3966 25.1647 38.638 24.9129C38.8793 24.6506 39 24.3463 39 24C39 23.6432 38.8793 23.3389 38.638 23.0871C38.3966 22.8248 38.0923 22.6726 37.7251 22.6306C35.8048 22.4103 34.1836 22.1532 32.8615 21.8594C31.5498 21.5551 30.4638 21.1459 29.6034 20.6317C28.7534 20.1175 28.0661 19.4302 27.5414 18.5698C27.0168 17.6988 26.5918 16.5866 26.2665 15.2329C25.9412 13.8793 25.6369 12.2109 25.3536 10.2277C25.3012 9.86044 25.149 9.56663 24.8972 9.34627C24.6453 9.11542 24.3463 9 24 9C23.6537 9 23.3547 9.11542 23.1028 9.34627C22.8615 9.56663 22.7093 9.86044 22.6464 10.2277C22.3736 12.2214 22.0745 13.8951 21.7492 15.2487C21.4344 16.6023 21.0147 17.7146 20.49 18.5855C19.9654 19.4565 19.2781 20.149 18.4281 20.6632C17.5782 21.1773 16.4869 21.5813 15.1543 21.8751C13.8321 22.1689 12.2057 22.4208 10.2749 22.6306C9.90766 22.6726 9.60336 22.8248 9.36201 23.0871C9.12067 23.3389 9 23.6432 9 24C9 24.3463 9.11542 24.6506 9.34627 24.9129C9.58762 25.1647 9.89717 25.3116 10.2749 25.3536C11.8804 25.574 13.2707 25.8101 14.446 26.0619C15.6212 26.3033 16.6233 26.6076 17.4523 26.9748C18.2812 27.3316 18.9738 27.788 19.5299 28.3442C20.086 28.9003 20.553 29.5981 20.9307 30.4376C21.3085 31.277 21.6285 32.2949 21.8909 33.4911C22.1532 34.6873 22.405 36.1144 22.6464 37.7723C22.7093 38.1396 22.8667 38.4334 23.1186 38.6537C23.3704 38.8846 23.6642 39 24 39Z"
            fill="url(#paint1_linear_25_57854)"
            shape-rendering="crispEdges"
          />
        </g>
        <defs>
          <filter
            id="filter0_d_25_57854"
            x="8.5"
            y="8.75"
            width="31"
            height="31"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="0.25" />
            <feGaussianBlur stdDeviation="0.25" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_25_57854"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_25_57854"
              result="shape"
            />
          </filter>
          <linearGradient
            id="paint0_linear_25_57854"
            x1="24"
            y1="0"
            x2="24"
            y2="48"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#CD4FF2" />
            <stop offset="1" stop-color="#5F4AFF" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_25_57854"
            x1="24"
            y1="9"
            x2="24"
            y2="39"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="white" />
            <stop offset="1" stop-color="white" stop-opacity="0.7" />
          </linearGradient>
        </defs>
      </svg>
      <h3 className="text-lg md:text-2xl font-semibold whitespace-nowrap">
        {title}
      </h3>
      <p className="text-[15px] md:text-base leading-6 text-ghost">
        {description}
      </p>
    </div>
  );
}
