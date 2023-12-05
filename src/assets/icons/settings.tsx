import { Ref, SVGProps, forwardRef, memo } from 'react'
const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    fill={'none'}
    height={'24'}
    ref={ref}
    viewBox={'0 0 24 24'}
    width={'24'}
    xmlns={'http://www.w3.org/2000/svg'}
    {...props}
  >
    <path
      d={
        'M12 13.5C12.8284 13.5 13.5 12.8284 13.5 12C13.5 11.1716 12.8284 10.5 12 10.5C11.1716 10.5 10.5 11.1716 10.5 12C10.5 12.8284 11.1716 13.5 12 13.5Z'
      }
      fill={'black'}
    />
    <path
      d={
        'M21.89 10.32L21.1 7.8C21.0147 7.50876 20.8716 7.23767 20.6793 7.00292C20.487 6.76817 20.2493 6.57456 19.9805 6.43364C19.7118 6.29272 19.4174 6.20737 19.1149 6.1827C18.8124 6.15802 18.5081 6.19451 18.22 6.29L17.88 6.4C17.6136 6.48805 17.3299 6.51039 17.0531 6.46511C16.7762 6.41984 16.5144 6.3083 16.29 6.14L16.18 6.06C15.961 5.89237 15.7844 5.67562 15.6646 5.42723C15.5447 5.17884 15.4849 4.90575 15.49 4.63V4.35C15.4949 3.72202 15.2503 3.11779 14.81 2.67C14.6006 2.45845 14.3514 2.29036 14.0768 2.17538C13.8023 2.0604 13.5077 2.0008 13.21 2H10.66C10.0482 2.00791 9.46425 2.25719 9.03535 2.69358C8.60645 3.12997 8.36731 3.71813 8.37 4.33V4.57C8.36904 4.86027 8.30295 5.14663 8.17661 5.40796C8.05027 5.6693 7.8669 5.89895 7.64 6.08L7.51 6.18C7.25934 6.36962 6.96617 6.49516 6.65596 6.5457C6.34575 6.59624 6.02788 6.57025 5.73 6.47C5.45642 6.37533 5.16647 6.33715 4.8777 6.35777C4.58893 6.3784 4.30735 6.4574 4.05 6.59C3.78205 6.72299 3.54434 6.90969 3.35166 7.1385C3.15898 7.36731 3.01545 7.63333 2.93 7.92L2.11 10.52C1.91984 11.1062 1.96861 11.7437 2.24571 12.2942C2.52281 12.8447 3.00587 13.2636 3.59 13.46H3.75C4.01946 13.561 4.26131 13.7241 4.45591 13.9361C4.65051 14.148 4.79238 14.4029 4.87 14.68L4.93 14.84C5.04148 15.1461 5.07876 15.4743 5.03877 15.7977C4.99879 16.121 4.88269 16.4302 4.7 16.7C4.33022 17.2036 4.17424 17.8328 4.26601 18.4508C4.35777 19.0688 4.68985 19.6256 5.19 20L7.26 21.57C7.65195 21.855 8.12544 22.0058 8.61 22C8.73969 22.0127 8.87031 22.0127 9 22C9.3001 21.9419 9.58522 21.8233 9.83796 21.6514C10.0907 21.4794 10.3058 21.2578 10.47 21L10.7 20.67C10.8613 20.4386 11.0748 20.2483 11.3232 20.1145C11.5716 19.9808 11.848 19.9073 12.13 19.9C12.4256 19.8927 12.7181 19.9604 12.9804 20.0968C13.2427 20.2332 13.4662 20.4339 13.63 20.68L13.75 20.85C13.9205 21.1037 14.1411 21.3199 14.3983 21.4852C14.6555 21.6504 14.9438 21.7613 15.2455 21.8109C15.5471 21.8606 15.8557 21.848 16.1523 21.7739C16.4489 21.6997 16.7272 21.5657 16.97 21.38L19 19.86C19.48 19.4872 19.7992 18.945 19.8921 18.3444C19.9851 17.7438 19.8448 17.1304 19.5 16.63L19.24 16.25C19.0837 16.0084 18.9813 15.736 18.9399 15.4512C18.8984 15.1664 18.919 14.8761 19 14.6C19.0826 14.3044 19.236 14.0334 19.4468 13.8104C19.6576 13.5874 19.9195 13.4191 20.21 13.32L20.41 13.25C20.9887 13.0492 21.4667 12.6312 21.7428 12.0845C22.019 11.5377 22.0718 10.905 21.89 10.32ZM12 15.5C11.3078 15.5 10.6311 15.2947 10.0555 14.9101C9.47993 14.5256 9.03133 13.9789 8.76642 13.3394C8.50151 12.6999 8.4322 11.9961 8.56725 11.3172C8.7023 10.6383 9.03564 10.0146 9.52513 9.52513C10.0146 9.03564 10.6383 8.7023 11.3172 8.56725C11.9961 8.4322 12.6999 8.50151 13.3394 8.76642C13.9789 9.03133 14.5256 9.47993 14.9101 10.0555C15.2947 10.6311 15.5 11.3078 15.5 12C15.5 12.9283 15.1313 13.8185 14.4749 14.4749C13.8185 15.1313 12.9283 15.5 12 15.5Z'
      }
      fill={'black'}
    />
  </svg>
)
const ForwardRef = forwardRef(SvgComponent)

export default memo(ForwardRef)
