import { SVGProps } from "react";

// SVGElement props
type TSVGElementProps = SVGProps<SVGSVGElement>;

export const Icons = {
  logo: (props: TSVGElementProps) => (
    <svg
      viewBox="0 0 26 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="6" cy="6" r="5.5" fill="#2F2B43" stroke="#FFEAEA" />
      <circle cx="20" cy="6" r="5.5" fill="#89AF93" stroke="#FFEAEA" />
      <circle cx="6" cy="20" r="5.5" fill="#F37373" stroke="#FFEAEA" />
      <circle cx="20" cy="20" r="5.5" fill="#2F2B43" stroke="#FFEAEA" />
    </svg>
  ),
  checkline: (props: TSVGElementProps) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M9.99999 15.1715L19.192 5.97852L20.607 7.39252L9.99999 17.9995L3.63599 11.6355L5.04999 10.2215L9.99999 15.1715Z"
        fill="#2F2B43"
      />
    </svg>
  ),
  arrowLeft: (props: TSVGElementProps) => (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M6.52337 9.1664H16.6667V10.8331H6.52337L10.9934 15.3031L9.81504 16.4814L3.33337 9.99973L9.81504 3.51807L10.9934 4.6964L6.52337 9.1664Z"
        fill="#2F2B43"
        fill-opacity="0.6"
      />
    </svg>
  ),
  arrowRight: (props: TSVGElementProps) => (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M13.4767 9.1664L9.00671 4.6964L10.185 3.51807L16.6667 9.99973L10.185 16.4814L9.00671 15.3031L13.4767 10.8331H3.33337V9.1664H13.4767Z"
        fill="#2F2B43"
        fill-opacity="0.6"
      />
    </svg>
  ),
  twitter: (props: TSVGElementProps) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M7.55028 21.7502C16.6047 21.7502 21.5584 14.2469 21.5584 7.74211C21.5584 7.53117 21.5537 7.31554 21.5443 7.1046C22.508 6.40771 23.3396 5.5445 24.0001 4.55554C23.1026 4.95484 22.1498 5.21563 21.174 5.32898C22.2014 4.71315 22.9707 3.74572 23.3392 2.60601C22.3727 3.1788 21.3157 3.58286 20.2136 3.80085C19.471 3.01181 18.4891 2.48936 17.4198 2.3143C16.3505 2.13923 15.2533 2.32129 14.2979 2.83234C13.3424 3.34339 12.5819 4.15495 12.134 5.14156C11.686 6.12816 11.5756 7.23486 11.8197 8.29054C9.86261 8.19233 7.94806 7.68395 6.2001 6.79834C4.45215 5.91274 2.90982 4.66968 1.67309 3.14976C1.04452 4.23349 0.852179 5.51589 1.13515 6.73634C1.41813 7.95678 2.15518 9.02369 3.19653 9.72023C2.41475 9.69541 1.6501 9.48492 0.965747 9.10617V9.1671C0.965047 10.3044 1.35822 11.4068 2.07843 12.287C2.79864 13.1672 3.80145 13.7708 4.91637 13.9952C4.19218 14.1934 3.4321 14.2222 2.69497 14.0796C3.00958 15.0577 3.6217 15.9131 4.44589 16.5266C5.27009 17.14 6.26524 17.4808 7.29247 17.5015C5.54855 18.8714 3.3943 19.6144 1.17668 19.6109C0.783409 19.6103 0.390521 19.5861 0.00012207 19.5387C2.25298 20.984 4.87365 21.7516 7.55028 21.7502Z"
        fill="#2F2B43"
        fill-opacity="0.6"
      />
    </svg>
  ),
  nextjs: (props: TSVGElementProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 0 1-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 0 0-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695.779.25 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.9-1.193-1.955-2.62l-1.919-2.592-2.404-3.558a338.739 338.739 0 0 0-2.422-3.556c-.009-.002-.018 1.579-.023 3.51-.007 3.38-.01 3.515-.052 3.595a.426.426 0 0 1-.206.214c-.075.037-.14.044-.495.044H7.81l-.108-.068a.438.438 0 0 1-.157-.171l-.05-.106.006-4.703.007-4.705.072-.092a.645.645 0 0 1 .174-.143c.096-.047.134-.051.54-.051.478 0 .558.018.682.154.035.038 1.337 1.999 2.895 4.361a10760.433 10760.433 0 0 0 4.735 7.17l1.9 2.879.096-.063a12.317 12.317 0 0 0 2.466-2.163 11.944 11.944 0 0 0 2.824-6.134c.096-.66.108-.854.108-1.748 0-.893-.012-1.088-.108-1.747-.652-4.506-3.859-8.292-8.208-9.695a12.597 12.597 0 0 0-2.499-.523A33.119 33.119 0 0 0 11.573 0zm4.069 7.217c.347 0 .408.005.486.047a.473.473 0 0 1 .237.277c.018.06.023 1.365.018 4.304l-.006 4.218-.744-1.14-.746-1.14v-3.066c0-1.982.01-3.097.023-3.15a.478.478 0 0 1 .233-.296c.096-.05.13-.054.5-.054z"
      />
    </svg>
  ),
  gitHub: (props: TSVGElementProps) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M12.0001 0C5.37252 0 0.00012207 5.3808 0.00012207 12.0204C0.00012207 17.3304 3.43812 21.8364 8.20692 23.4252C8.80692 23.5356 9.02532 23.1648 9.02532 22.8456C9.02532 22.5612 9.01572 21.804 9.00972 20.802C5.67132 21.528 4.96692 19.1904 4.96692 19.1904C4.42212 17.8008 3.63492 17.4312 3.63492 17.4312C2.54532 16.6872 3.71772 16.7016 3.71772 16.7016C4.92132 16.7856 5.55492 17.94 5.55492 17.94C6.62532 19.776 8.36412 19.2456 9.04692 18.9384C9.15732 18.162 9.46692 17.6328 9.81012 17.3328C7.14612 17.0292 4.34412 15.9972 4.34412 11.3916C4.34412 10.08 4.81212 9.006 5.57892 8.166C5.45532 7.8624 5.04372 6.6396 5.69652 4.986C5.69652 4.986 6.70452 4.662 8.99652 6.2172C9.97544 5.95022 10.9854 5.81423 12.0001 5.8128C13.0201 5.8176 14.0461 5.9508 15.0049 6.2172C17.2957 4.662 18.3013 4.9848 18.3013 4.9848C18.9565 6.6396 18.5437 7.8624 18.4213 8.166C19.1893 9.006 19.6549 10.08 19.6549 11.3916C19.6549 16.0092 16.8481 17.0256 14.1757 17.3232C14.6065 17.694 14.9893 18.4272 14.9893 19.5492C14.9893 21.1548 14.9749 22.452 14.9749 22.8456C14.9749 23.1672 15.1909 23.5416 15.8005 23.424C18.1901 22.6225 20.2673 21.0904 21.7387 19.0441C23.2101 16.9977 24.0011 14.5408 24.0001 12.0204C24.0001 5.3808 18.6265 0 12.0001 0Z"
        fill="#2F2B43"
        fill-opacity="0.6"
      />
    </svg>
  ),
  google: (props: TSVGElementProps) => (
    <svg
      aria-hidden="true"
      focusable="false"
      data-prefix="fab"
      data-icon="discord"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 488 512"
      {...props}
    >
      <path
        fill="currentColor"
        d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
      ></path>
    </svg>
  ),
  facebook: (props: TSVGElementProps) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M24.0001 12C24.0001 5.37258 18.6275 0 12.0001 0C5.3727 0 0.00012207 5.37258 0.00012207 12C0.00012207 17.9895 4.38833 22.954 10.1251 23.8542V15.4688H7.07825V12H10.1251V9.35625C10.1251 6.34875 11.9167 4.6875 14.6577 4.6875C15.9702 4.6875 17.3439 4.92188 17.3439 4.92188V7.875H15.8307C14.3401 7.875 13.8751 8.80008 13.8751 9.75V12H17.2032L16.6712 15.4688H13.8751V23.8542C19.6119 22.954 24.0001 17.9895 24.0001 12Z"
        fill="#2F2B43"
        fill-opacity="0.6"
      />
    </svg>
  ),
  discord: (props: TSVGElementProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
      <path
        fill="currentColor"
        d="M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z"
      />
    </svg>
  ),
};

export const Companies = {
  google: (props: TSVGElementProps) => (
    <svg
      width="76"
      height="32"
      viewBox="0 0 76 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M10.3858 12.1132V14.7217L16.6202 14.7189C16.429 16.1577 15.9438 17.211 15.2065 17.9484C14.2972 18.8577 12.8779 19.8584 10.3858 19.8584C6.5437 19.8584 3.53876 16.762 3.53876 12.9199C3.53876 9.07775 6.5437 5.98133 10.3858 5.98133C12.4593 5.98133 13.9729 6.79633 15.09 7.84417L16.9307 6.00351C15.3728 4.5149 13.2993 3.3728 10.3886 3.3728C5.12716 3.3728 0.702919 7.65844 0.702919 12.9199C0.702919 18.1813 5.12716 22.4669 10.3886 22.4669C13.2272 22.4669 15.37 21.5355 17.0471 19.7891C18.7714 18.0648 19.3064 15.6448 19.3064 13.6877C19.3064 13.1056 19.262 12.5678 19.1761 12.1132H10.3858ZM62.975 22.0929V4.07433H60.3415V22.0929H62.975ZM26.5221 22.4698C29.9207 22.4698 32.69 19.8612 32.69 16.3213C32.69 12.7564 29.9207 10.1728 26.5221 10.1728C23.1235 10.1728 20.3542 12.7564 20.3542 16.3213C20.3542 19.8612 23.1235 22.4698 26.5221 22.4698ZM26.5221 12.5956C28.3849 12.5956 29.99 14.1092 29.99 16.3213C29.99 18.5085 28.3849 20.047 26.5221 20.047C24.6592 20.047 23.0542 18.5112 23.0542 16.3213C23.0542 14.1092 24.6592 12.5956 26.5221 12.5956ZM39.8282 22.4698C43.2268 22.4698 45.9961 19.8612 45.9961 16.3213C45.9961 12.7564 43.2268 10.1728 39.8282 10.1728C36.4297 10.1728 33.6604 12.7592 33.6604 16.3213C33.6604 19.8612 36.4297 22.4698 39.8282 22.4698ZM39.8282 12.5956C41.6911 12.5956 43.2961 14.1092 43.2961 16.3213C43.2961 18.5085 41.6911 20.047 39.8282 20.047C37.9654 20.047 36.3604 18.5112 36.3604 16.3213C36.3604 14.1092 37.9654 12.5956 39.8282 12.5956ZM58.7479 10.547V21.5827C58.7479 26.1234 56.0701 27.9779 52.9044 27.9779C49.9244 27.9779 48.1308 25.9848 47.4544 24.3548L49.8052 23.3763C50.2238 24.377 51.2494 25.5579 52.9016 25.5579C54.928 25.5579 56.1837 24.3077 56.1837 21.9542V21.0699H56.0895C55.4852 21.8156 54.3209 22.467 52.8517 22.467C49.7774 22.467 46.961 19.7892 46.961 16.3435C46.961 12.8728 49.7774 10.1728 52.8517 10.1728C54.3181 10.1728 55.4824 10.8243 56.0895 11.5478H56.1837V10.547H58.7479ZM56.375 16.3435C56.375 14.1785 54.9308 12.5956 53.0929 12.5956C51.23 12.5956 49.6693 14.1785 49.6693 16.3435C49.6693 18.4863 51.23 20.047 53.0929 20.047C54.9308 20.047 56.375 18.4863 56.375 16.3435ZM73.2376 18.3449L75.3333 19.7421C74.6569 20.7428 73.0269 22.467 70.2105 22.467C66.7176 22.467 64.1091 19.767 64.1091 16.3185C64.1091 12.6622 66.7398 10.1701 69.9083 10.1701C73.099 10.1701 74.6597 12.7093 75.1697 14.0815L75.4497 14.78L67.2305 18.1842C67.8597 19.4177 68.8383 20.047 70.2105 20.047C71.5854 20.047 72.539 19.3706 73.2376 18.3449ZM66.7869 16.1328L72.2812 13.8514C71.979 13.0835 71.0698 12.5485 69.9998 12.5485C68.6276 12.5485 66.7176 13.7599 66.7869 16.1328Z"
        fill="#7A7493"
      />
    </svg>
  ),
  figma: (props: TSVGElementProps) => (
    <svg
      width="64"
      height="32"
      viewBox="0 0 64 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M0.0620117 4.58398V22.2273L2.31932 22.236V13.8345H7.74553V11.6115H2.31064V6.79815H9.38642V4.58398H0.0620117ZM13.4322 8.17216C13.8236 8.17216 14.1991 8.01541 14.4758 7.7364C14.7526 7.45738 14.9081 7.07896 14.9081 6.68438C14.9081 6.28979 14.7526 5.91137 14.4758 5.63236C14.1991 5.35335 13.8236 5.1966 13.4322 5.1966C13.0408 5.1966 12.6654 5.35335 12.3886 5.63236C12.1118 5.91137 11.9563 6.28979 11.9563 6.68438C11.9563 7.07896 12.1118 7.45738 12.3886 7.7364C12.6654 8.01541 13.0408 8.17216 13.4322 8.17216ZM12.2949 10.3863V22.236H14.5522V10.3863H12.2949Z"
        fill="#7A7493"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M22.8955 10.045C19.9089 10.045 17.8252 12.5917 17.8252 15.6198C17.8252 18.6479 19.9089 21.1946 22.8955 21.1946C24.2672 21.1946 25.3959 20.6695 26.2207 19.7943V21.3696C26.2264 21.8403 26.1395 22.3075 25.9651 22.7441C25.7906 23.1808 25.532 23.5782 25.2043 23.9135C24.8765 24.2488 24.486 24.5153 24.0555 24.6975C23.6249 24.8798 23.1628 24.9742 22.6958 24.9753C21.9752 24.9753 21.2633 24.6952 20.699 24.2927L19.5703 26.2618C20.443 26.8304 21.4518 27.1511 22.4903 27.19C23.5288 27.2288 24.5584 26.9845 25.4705 26.4826C26.3827 25.9807 27.1436 25.24 27.6729 24.3386C28.2022 23.4371 28.4804 22.4084 28.478 21.3609V10.3951H26.2207V11.454C25.3959 10.5788 24.2672 10.0537 22.8955 10.0537V10.045ZM20.0739 15.6198C20.0739 13.7382 21.4977 12.2592 23.1473 12.2592C24.7968 12.2592 26.212 13.7469 26.212 15.6198C26.212 17.5014 24.7882 18.9717 23.1473 18.9717C21.4977 18.9717 20.0739 17.5014 20.0739 15.6198Z"
        fill="#7A7493"
      />
      <path
        d="M36.5869 12.2592C35.9413 12.2707 35.3262 12.5379 34.8745 13.003C34.4228 13.4682 34.1709 14.0938 34.1733 14.7447V22.2361H31.916V10.3864H34.1733V11.4716C34.5111 11.0204 34.9497 10.656 35.4537 10.4081C35.9576 10.1602 36.5125 10.0358 37.0731 10.0451C38.6532 10.0451 39.8687 10.8327 40.5632 12.0404C40.9507 11.435 41.4811 10.9358 42.1068 10.5876C42.7325 10.2394 43.4342 10.053 44.1489 10.0451C46.7101 10.0451 48.3162 12.1279 48.3162 14.7097V22.2361H46.0763V14.7359C46.0787 14.0851 45.8268 13.4594 45.3751 12.9943C44.9234 12.5292 44.3083 12.262 43.6627 12.2505C43.0171 12.262 42.402 12.5292 41.9503 12.9943C41.4986 13.4594 41.2467 14.0851 41.2491 14.7359V22.2273H38.9918V14.7359C38.9942 14.0865 38.7435 13.4622 38.2937 12.9973C37.8439 12.5324 37.231 12.2642 36.5869 12.2505V12.2592Z"
        fill="#7A7493"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M60.3234 11.7341C59.8108 11.1953 59.1946 10.7676 58.5123 10.4772C57.8301 10.1868 57.0963 10.0397 56.3557 10.045C53.0045 10.045 50.6257 12.8981 50.6257 16.3112C50.6257 19.7243 53.0045 22.5774 56.3557 22.5774C57.0961 22.5812 57.8294 22.4334 58.5114 22.1431C59.1934 21.8527 59.8099 21.4259 60.3234 20.8883V22.2361H62.572V10.3863H60.3147V11.7341H60.3234ZM52.8743 16.3112C52.8743 14.0533 54.5933 12.2592 56.5988 12.2592C58.5957 12.2592 60.3234 14.0533 60.3234 16.3112C60.3234 18.5691 58.6044 20.3545 56.5988 20.3545C54.602 20.3545 52.8743 18.5691 52.8743 16.3112Z"
        fill="#7A7493"
      />
    </svg>
  ),
  github: (props: TSVGElementProps) => (
    <svg
      width="91"
      height="32"
      viewBox="0 0 91 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M12.088 4.18896C5.68396 4.18896 0.497009 9.37591 0.497009 15.7799C0.497009 20.9089 3.81492 25.241 8.42232 26.7768C9.00187 26.8782 9.2192 26.5305 9.2192 26.2263C9.2192 25.951 9.20471 25.0382 9.20471 24.0674C6.29248 24.6035 5.53907 23.3575 5.30725 22.7055C5.17685 22.3723 4.6118 21.3436 4.11918 21.0683C3.7135 20.851 3.13395 20.3149 4.10469 20.3004C5.01748 20.2859 5.66947 21.1407 5.8868 21.4885C6.92999 23.2416 8.59618 22.749 9.26266 22.4447C9.36409 21.6913 9.66835 21.1842 10.0016 20.8944C7.4226 20.6046 4.72771 19.6049 4.72771 15.1714C4.72771 13.9109 5.17685 12.8677 5.91578 12.0563C5.79987 11.7665 5.39418 10.5785 6.03169 8.98472C6.03169 8.98472 7.00243 8.68046 9.2192 10.1728C10.1465 9.91199 11.1317 9.7816 12.1169 9.7816C13.1022 9.7816 14.0874 9.91199 15.0147 10.1728C17.2314 8.66597 18.2022 8.98472 18.2022 8.98472C18.8397 10.5785 18.434 11.7665 18.3181 12.0563C19.057 12.8677 19.5062 13.8964 19.5062 15.1714C19.5062 19.6194 16.7968 20.6046 14.2178 20.8944C14.638 21.2566 15.0002 21.9521 15.0002 23.0387C15.0002 24.589 14.9857 25.8351 14.9857 26.2263C14.9857 26.5305 15.203 26.8927 15.7826 26.7768C18.0836 26 20.0831 24.5212 21.4996 22.5485C22.9161 20.5758 23.6783 18.2085 23.6789 15.7799C23.6789 9.37591 18.492 4.18896 12.088 4.18896Z"
        fill="#7A7493"
      />
      <path
        d="M54.5321 21.3746H54.505C54.5172 21.3746 54.5253 21.3881 54.5375 21.3894H54.5456L54.5321 21.3759V21.3746ZM54.5375 21.3894C54.4117 21.3908 54.0953 21.4571 53.7613 21.4571C52.7065 21.4571 52.3414 20.9702 52.3414 20.3347V16.1007H54.4915C54.6132 16.1007 54.7079 15.9925 54.7079 15.8438V13.5449C54.7079 13.4232 54.5997 13.315 54.4915 13.315H52.3414V10.4617C52.3414 10.3535 52.2738 10.2859 52.1521 10.2859H49.2312C49.1094 10.2859 49.0418 10.3535 49.0418 10.4617V13.3961C49.0418 13.3961 47.5679 13.7612 47.4732 13.7748C47.365 13.8018 47.2974 13.8965 47.2974 14.0047V15.8438C47.2974 15.9925 47.4056 16.1007 47.5273 16.1007H49.0283V20.5362C49.0283 23.8357 51.3272 24.1738 52.8958 24.1738C53.6125 24.1738 54.478 23.9439 54.6132 23.8763C54.6944 23.8492 54.7349 23.7546 54.7349 23.6599V21.6315C54.7368 21.574 54.7178 21.5177 54.6816 21.473C54.6453 21.4283 54.5942 21.3981 54.5375 21.3881V21.3894ZM86.581 18.4131C86.581 15.9655 85.5939 15.6409 84.5526 15.7491C83.7413 15.8032 83.0922 16.2089 83.0922 16.2089V20.9689C83.0922 20.9689 83.7548 21.4287 84.742 21.4557C86.1348 21.4963 86.581 20.9959 86.581 18.4131ZM89.8671 18.1967C89.8671 22.835 88.3661 24.1603 85.7426 24.1603C83.5249 24.1603 82.3349 23.0379 82.3349 23.0379C82.3349 23.0379 82.2808 23.6599 82.2132 23.7411C82.1726 23.8222 82.105 23.8492 82.0239 23.8492H80.0225C79.8873 23.8492 79.7656 23.7411 79.7656 23.6194L79.7926 8.59555C79.7926 8.47385 79.9008 8.36566 80.0225 8.36566H82.9029C83.0246 8.36566 83.1327 8.47385 83.1327 8.59555V13.6936C83.1327 13.6936 84.2416 12.9769 85.8643 12.9769L85.8508 12.9499C87.4736 12.9499 89.8671 13.5584 89.8671 18.1967ZM78.0752 13.315H75.2354C75.0867 13.315 75.0056 13.4232 75.0056 13.5719V20.9283C75.0056 20.9283 74.2618 21.4557 73.2476 21.4557C72.2334 21.4557 71.9359 20.9959 71.9359 19.9817V13.5584C71.9359 13.4367 71.8277 13.3285 71.706 13.3285H68.8121C68.6904 13.3285 68.5822 13.4367 68.5822 13.5584V20.4685C68.5822 23.4436 70.2455 24.1873 72.5309 24.1873C74.4106 24.1873 75.9386 23.1461 75.9386 23.1461C75.9386 23.1461 76.0062 23.6734 76.0468 23.7546C76.0739 23.8222 76.1685 23.8763 76.2632 23.8763H78.0752C78.224 23.8763 78.3051 23.7681 78.3051 23.6464L78.3322 13.5449C78.3322 13.4232 78.224 13.315 78.0752 13.315ZM46.0263 13.3015H43.1459C43.0242 13.3015 42.916 13.4232 42.916 13.5719V23.4976C42.916 23.7681 43.0918 23.8628 43.3217 23.8628H45.9181C46.1885 23.8628 46.2561 23.7411 46.2561 23.4976V13.5314C46.2561 13.4097 46.148 13.3015 46.0263 13.3015ZM44.6064 8.73078C43.5651 8.73078 42.7402 9.55567 42.7402 10.5969C42.7402 11.6382 43.5651 12.4631 44.6064 12.4631C45.6206 12.4631 46.4455 11.6382 46.4455 10.5969C46.4455 9.55567 45.6206 8.73078 44.6064 8.73078ZM66.9054 8.39271H64.0521C63.9304 8.39271 63.8222 8.50089 63.8222 8.6226V14.1534H59.3462V8.6226C59.3462 8.50089 59.238 8.39271 59.1163 8.39271H56.236C56.1142 8.39271 56.0061 8.50089 56.0061 8.6226V23.6464C56.0061 23.7681 56.1278 23.8763 56.236 23.8763H59.1163C59.238 23.8763 59.3462 23.7681 59.3462 23.6464V17.2231H63.8222L63.7952 23.6464C63.7952 23.7681 63.9034 23.8763 64.0251 23.8763H66.9054C67.0271 23.8763 67.1353 23.7681 67.1353 23.6464V8.6226C67.1353 8.50089 67.0271 8.39271 66.9054 8.39271ZM41.3879 15.0459V22.808C41.3879 22.8621 41.3744 22.9567 41.3068 22.9838C41.3068 22.9838 39.6165 24.1873 36.8308 24.1873C33.4636 24.1873 29.4744 23.1325 29.4744 16.1818C29.4744 9.23112 32.9633 7.79771 36.371 7.81123C39.319 7.81123 40.509 8.47385 40.6983 8.59555C40.7524 8.66317 40.7794 8.71726 40.7794 8.78487L40.2115 11.1919C40.2115 11.3136 40.0898 11.4624 39.941 11.4218C39.4542 11.2731 38.724 10.9756 37.0066 10.9756C35.0187 10.9756 32.8821 11.5435 32.8821 16.0196C32.8821 20.4956 34.9105 21.023 36.371 21.023C37.6151 21.023 38.0613 20.8742 38.0613 20.8742V17.764H36.0735C35.9247 17.764 35.8166 17.6558 35.8166 17.5341V15.0459C35.8166 14.9242 35.9247 14.816 36.0735 14.816H41.131C41.2798 14.816 41.3879 14.9242 41.3879 15.0459Z"
        fill="#7A7493"
      />
    </svg>
  ),
  medium: (props: TSVGElementProps) => (
    <svg
      width="72"
      height="32"
      viewBox="0 0 72 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clip-path="url(#clip0_25_70133)">
        <path
          d="M7.57441 8.53652C11.5438 8.53652 14.7769 11.7696 14.7769 15.771C14.7769 19.7724 11.5438 23.0055 7.57441 23.0055C3.60505 23.0055 0.371948 19.8044 0.371948 15.771C0.371948 11.7376 3.60505 8.53652 7.57441 8.53652ZM64.0417 8.37646V21.0528C64.0417 22.0131 64.4258 22.2692 65.1621 22.4613L65.1941 22.6213H61.1287V21.0528C60.6486 22.2052 59.6562 22.9094 58.3758 22.9094C56.199 22.9094 54.7585 20.9248 54.7585 17.9797C54.7585 16.3152 55.2387 14.9067 56.135 13.8503C56.9993 12.826 58.1837 12.2818 59.4962 12.2818C60.1364 12.2818 60.6806 12.4098 61.1287 12.6979V10.9694C61.1287 10.5852 61.0327 10.3291 60.8406 10.1371C60.5845 9.91299 60.1684 9.81696 59.5282 9.88098H59.4962V9.72092L64.0417 8.37646ZM79.471 12.3138V21.0528C79.471 22.0131 79.8551 22.2692 80.5914 22.4613V22.6213H76.526V21.0208C76.0458 22.1732 74.9895 22.9094 73.8051 22.9094C72.3966 22.9094 71.5003 22.2692 71.1481 21.0208L71.0841 20.7007C71.0201 20.3806 70.9881 20.0605 70.9881 19.7403V15.0668C70.9881 14.0424 70.764 13.7223 69.8677 13.6583H69.8357V13.4982L73.9011 12.3138V19.6763C73.9011 20.7647 74.3813 21.3729 75.2776 21.3729C75.8217 21.3729 76.2699 21.0848 76.526 20.6046V15.0668C76.526 14.0104 76.3339 13.6903 75.5977 13.6263H75.5657V13.4662L79.471 12.3138ZM50.117 12.2818C51.2053 12.2818 52.2617 12.6659 52.9659 13.3382C53.7662 14.1064 54.1824 15.2268 54.2144 16.6993V16.7313H48.1003C47.9722 18.844 49.2847 20.5726 51.0133 20.6367C52.2617 20.7327 53.3501 19.9644 53.9583 18.716L54.1183 18.78C53.7662 21.1168 52.3897 22.8774 49.9889 22.8774C47.268 22.8774 45.7315 20.6046 45.6674 17.7557V17.0194C45.7955 15.771 46.1796 14.6506 46.8518 13.8183C47.268 13.3061 47.7481 12.922 48.3243 12.6659C48.8045 12.4098 49.5088 12.2818 50.0849 12.2818H50.117ZM92.4674 12.3138C94.196 12.3138 95.2524 13.4022 95.2524 15.2588V21.2129C95.2524 21.9171 95.5725 22.2692 96.3728 22.4613H96.4048V22.6213H92.3074V15.3549C92.3074 14.2025 91.8912 13.6263 91.0269 13.6263C90.3227 13.6263 89.9706 14.1384 89.7785 14.5866C89.8105 14.8107 89.8425 15.0347 89.8425 15.2588V21.3089C89.8425 22.0451 90.0666 22.3012 90.7068 22.4613H90.7389V22.6213H86.9296V15.3549C86.9296 14.2025 86.4814 13.6263 85.6491 13.6263C84.9769 13.6263 84.6248 14.1064 84.4647 14.4906V21.3409C84.4647 22.0771 84.6888 22.3332 85.329 22.4933H85.361V22.6533H81.5517V15.0347C81.5517 14.0104 81.2956 13.6903 80.4313 13.6263H80.3993V13.4662L84.4647 12.3458V14.0424C84.8808 12.954 85.8412 12.3138 87.0576 12.3138C88.4341 12.3138 89.3944 12.986 89.7145 14.2025C90.1306 13.0501 91.187 12.3138 92.4674 12.3138ZM34.0795 9.01668L37.8888 17.9477L41.6981 9.01668H45.7955L45.7635 9.17674L45.717 9.18709C45.011 9.34798 44.6431 9.61195 44.6431 10.4892V21.3729C44.7071 22.0771 45.0912 22.3012 45.7635 22.4613H45.7955V22.6213H40.5777V22.4613H40.6097C41.2819 22.3012 41.6661 22.0771 41.7301 21.3729V10.7773L36.7044 22.5893H36.4163L31.5186 11.0974V21.1168C31.5186 22.0131 31.9027 22.2692 32.639 22.4293H32.671V22.5893H29.662V22.4293H29.694C30.4302 22.2692 30.8144 22.0131 30.8144 21.1168V10.4892C30.8144 9.59288 30.4302 9.33679 29.694 9.17674H29.662V9.01668H34.0795ZM69.0034 12.3138V21.0528L69.0039 21.1119C69.0196 22.0238 69.4029 22.2732 70.1238 22.4613L70.1558 22.6213H66.0904V15.0668C66.0904 14.0424 65.8663 13.7223 64.97 13.6583H64.938V13.4982L69.0034 12.3138ZM19.0984 8.95266C21.051 8.95266 22.6836 12.0257 22.6836 15.771C22.6836 19.5483 21.083 22.5893 19.0984 22.5893C17.1137 22.5893 15.5131 19.5483 15.5131 15.771C15.5131 11.9937 17.1137 8.95266 19.0984 8.95266ZM24.6042 9.6569C25.3405 9.6569 25.8847 12.4098 25.8847 15.771C25.8847 19.1321 25.3085 21.8851 24.6042 21.8851C23.907 21.8851 23.3353 19.1869 23.324 15.8716L23.3238 15.771C23.3238 12.4098 23.9 9.6569 24.6042 9.6569ZM59.9763 12.858C58.6959 12.858 57.8956 14.5546 57.8956 17.1795C57.8956 18.4279 58.1197 19.5163 58.5038 20.2525C58.8559 20.9568 59.3681 21.3409 59.9443 21.3409C60.5205 21.3409 60.9367 21.0848 61.1287 20.6046V13.5622C60.9046 13.1141 60.4885 12.858 59.9763 12.858ZM50.0849 12.89C48.9326 12.89 48.2603 14.2665 48.1643 16.1871V16.2191H51.6535C51.7175 14.7146 51.4614 13.7223 50.9813 13.2421C50.7252 13.0181 50.4371 12.89 50.0849 12.89ZM67.4349 8.4725C68.3632 8.4725 69.0674 9.17674 69.0674 10.1051C69.0674 11.0334 68.3632 11.7376 67.4349 11.7376C66.5066 11.7376 65.8023 11.0334 65.8023 10.1051C65.8023 9.17674 66.5066 8.4725 67.4349 8.4725Z"
          fill="#7A7493"
        />
      </g>
      <defs>
        <clipPath id="clip0_25_70133">
          <rect width="96.8" height="32" fill="white" />
        </clipPath>
      </defs>
    </svg>
  ),
};