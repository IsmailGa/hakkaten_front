export const HomeIcon = ({ isActive, theme }: { isActive?: boolean, theme?: string }) => {
    const getStyle = () => {
        if (theme === 'dark') {
            return isActive ? 'black' : '#DADADA70';
        }
        return isActive ? 'black' : '#00000080';
    };

    return (
        <svg width="20" height="20" viewBox="0 0 18 20" stroke={getStyle()} fill="transparent">
            <path d="M1.5 7.49999L9 1.66666L16.5 7.49999V16.6667C16.5 17.1087 16.3244 17.5326 16.0118 17.8452C15.6993 18.1577 15.2754 18.3333 14.8333 18.3333H3.16667C2.72464 18.3333 2.30072 18.1577 1.98816 17.8452C1.67559 17.5326 1.5 17.1087 1.5 16.6667V7.49999Z" stroke-width="2.1875" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M6.5 18.3333V10H11.5V18.3333" stroke-width="2.1875" stroke-linecap="round" stroke-linejoin="round" />
        </svg>

    )
}



export const PopularIcon = ({ isActive, theme }: { isActive?: boolean, theme?: string }) => {
    const getStyle = () => {
        if (theme === 'dark') {
            return isActive ? 'black' : '#DADADA70';
        }
        return isActive ? 'black' : '#00000080';
    };

    return (
        <svg width="20" height="20" viewBox="0 0 17 20" stroke={getStyle()} fill="transparent">
            <path d="M7.55492 1.07536C7.47214 1.02604 7.37752 1 7.2811 1C7.18467 1 7.09006 1.02604 7.00729 1.07536C6.93901 1.12932 6.89294 1.20638 6.8778 1.29194C6.86267 1.37751 6.87951 1.46564 6.92514 1.53965C8.60909 4.44827 8.96504 8.40837 6.66502 10.5933C5.78009 9.85152 5.07755 8.91719 4.61144 7.86216C3.76088 8.33334 3.05599 9.02792 2.57328 9.87051C2.09057 10.7131 1.84848 11.6715 1.87332 12.6416C1.90805 13.4968 2.11392 14.3364 2.47882 15.1112C2.84372 15.8859 3.36029 16.5798 3.99812 17.1524C4.63595 17.725 5.38216 18.1645 6.19284 18.4452C7.00353 18.7258 7.86229 18.8419 8.71861 18.7866C13.127 18.7866 15.4133 16.0555 15.5639 12.6416C15.7419 8.54493 12.8258 3.50605 7.55492 1.07536Z" stroke-opacity="1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>

    )
}

export const LikeIcon = ({ theme, isActive }: {
    theme?: string,
    isActive?: boolean,
}) => {
    const getStyle = () => {
        if (theme === 'dark') {
            return isActive ? 'red' : 'transparent';
        }
        return isActive ? 'red' : 'transparent';
    };

    return (
        <svg width="20" height="20" viewBox="0 0 20 20"
            className="transition-colors duration-200"
            fill={getStyle()}
            stroke={
                theme === "dark" ? isActive ? "transparent" : "#fff" : isActive ? "transparent" : "black"
            }
        >
            <path
                d="M10.006 17.6894L2.18543 10.6057C-2.06487 6.35538 4.18306 -1.80518 10.006 4.79693C15.8288 -1.80518 22.0485 6.38372 17.8265 10.6057L10.006 17.6894Z"

            />
        </svg>
    );
};

export const LogoIcon = ({ theme }: { theme?: string }) => {
    return (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M0.5 4.21687C0.5 2.15234 2.12947 0.5 4.11359 0.5H15.3966C17.3807 0.5 19.0102 2.15234 19.0102 4.21687V15.7831C19.0102 17.8477 17.3807 19.5 15.3966 19.5H4.11359C2.12947 19.5 0.5 17.8477 0.5 15.7831V4.21687Z" stroke={theme === "dark" ? "#9B9C9C" : "black"} />
            <path d="M8.65284 3.05363C9.03148 2.00469 10.4787 2.00469 10.8574 3.05362L12.2023 6.77953C12.3214 7.10931 12.575 7.36932 12.8967 7.49135L16.5314 8.87006C17.5546 9.2582 17.5546 10.7418 16.5314 11.1299L12.8967 12.5087C12.575 12.6307 12.3214 12.8907 12.2023 13.2205L10.8574 16.9464C10.4787 17.9953 9.03148 17.9953 8.65284 16.9464L7.3079 13.2205C7.18886 12.8907 6.93521 12.6307 6.61351 12.5087L2.97886 11.1299C1.95561 10.7418 1.95561 9.2582 2.97886 8.87006L6.61351 7.49135C6.93521 7.36932 7.18886 7.10931 7.3079 6.77953L8.65284 3.05363Z" fill={theme === "dark" ? "#9B9C9C" : "black"} />
            <path d="M3.33557 7.50539C2.63873 6.64478 3.36236 5.35994 4.43784 5.54827L8.25801 6.21723C8.59613 6.27644 8.94262 6.18127 9.20656 5.95668L12.1886 3.41931C13.0282 2.70497 14.2815 3.44677 14.0978 4.54925L13.4453 8.46533C13.3875 8.81195 13.4803 9.16713 13.6994 9.4377L16.1746 12.4947C16.8715 13.3553 16.1479 14.6401 15.0724 14.4518L11.2522 13.7828C10.9141 13.7236 10.5676 13.8188 10.3037 14.0434L7.32157 16.5807C6.48204 17.2951 5.22868 16.5533 5.41239 15.4508L6.06496 11.5347C6.12272 11.1881 6.02988 10.8329 5.8108 10.5623L3.33557 7.50539Z" fill={theme === "dark" ? "#9B9C9C" : "black"} />
        </svg>

    )
}

export const InfoIcon = ({ theme }: { theme?: string }) => {
    return (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_159_150)">
                <path d="M10.0001 19.2857C15.1285 19.2857 19.2858 15.1284 19.2858 9.99999C19.2858 4.87164 15.1285 0.714279 10.0001 0.714279C4.87171 0.714279 0.714355 4.87164 0.714355 9.99999C0.714355 15.1284 4.87171 19.2857 10.0001 19.2857Z" stroke="#DADADA" stroke-opacity="0.7" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M7.85718 14.2857H12.1429" stroke="#DADADA" stroke-opacity="0.7" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M10.0001 14.2857V9.28571H8.57153" stroke="#DADADA" stroke-opacity="0.7" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M9.99997 6.07142C9.80272 6.07142 9.64282 5.91152 9.64282 5.71427C9.64282 5.51703 9.80272 5.35713 9.99997 5.35713" stroke="#DADADA" stroke-opacity="0.7" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M10 6.07142C10.1972 6.07142 10.3571 5.91152 10.3571 5.71427C10.3571 5.51703 10.1972 5.35713 10 5.35713" stroke="#DADADA" stroke-opacity="0.7" stroke-linecap="round" stroke-linejoin="round" />
            </g>
            <defs>
                <clipPath id="clip0_159_150">
                    <rect width="20" height="20" fill="white" />
                </clipPath>
            </defs>
        </svg>
    )
}