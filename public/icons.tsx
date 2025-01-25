export const HomeIcon = ({ isActive, theme }: { isActive: boolean, theme: string }) => {
    const getStyle = () => {
        if (theme === 'dark') {
            return isActive ? 'black' : '#DADADA70';
        }
        return isActive ? 'black' : '#DADADA70';
    };

    return (
        <svg width="20" height="20" viewBox="0 0 18 20" stroke={getStyle()} fill="transparent">
            <path d="M1.5 7.49999L9 1.66666L16.5 7.49999V16.6667C16.5 17.1087 16.3244 17.5326 16.0118 17.8452C15.6993 18.1577 15.2754 18.3333 14.8333 18.3333H3.16667C2.72464 18.3333 2.30072 18.1577 1.98816 17.8452C1.67559 17.5326 1.5 17.1087 1.5 16.6667V7.49999Z" stroke-width="2.1875" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M6.5 18.3333V10H11.5V18.3333" stroke-width="2.1875" stroke-linecap="round" stroke-linejoin="round" />
        </svg>

    )
}



export const PopularIcon = ({ isActive, theme }: { isActive: boolean, theme: string }) => {
    const getStyle = () => {
        if (theme === 'dark') {
            return isActive ? 'black' : '#DADADA70';
        }
        return isActive ? 'black' : '#DADADA70';
    };

    return (
        <svg width="20" height="20" viewBox="0 0 17 20" stroke={getStyle()} fill="transparent">
            <path d="M7.55492 1.07536C7.47214 1.02604 7.37752 1 7.2811 1C7.18467 1 7.09006 1.02604 7.00729 1.07536C6.93901 1.12932 6.89294 1.20638 6.8778 1.29194C6.86267 1.37751 6.87951 1.46564 6.92514 1.53965C8.60909 4.44827 8.96504 8.40837 6.66502 10.5933C5.78009 9.85152 5.07755 8.91719 4.61144 7.86216C3.76088 8.33334 3.05599 9.02792 2.57328 9.87051C2.09057 10.7131 1.84848 11.6715 1.87332 12.6416C1.90805 13.4968 2.11392 14.3364 2.47882 15.1112C2.84372 15.8859 3.36029 16.5798 3.99812 17.1524C4.63595 17.725 5.38216 18.1645 6.19284 18.4452C7.00353 18.7258 7.86229 18.8419 8.71861 18.7866C13.127 18.7866 15.4133 16.0555 15.5639 12.6416C15.7419 8.54493 12.8258 3.50605 7.55492 1.07536Z" stroke-opacity="1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>

    )
}

export const LikeIcon = ({ isActive }: {
    isActive: boolean;
}) => {
    return (
        <svg width="20" height="20" viewBox="0 0 20 20"
            className="transition-colors duration-200"
            fill={`${isActive
                ? 'red'
                : 'transparent'
                }`}
            stroke={
                isActive ? "transparent" : "white"
            }
            >
            <path
                d="M10.006 17.6894L2.18543 10.6057C-2.06487 6.35538 4.18306 -1.80518 10.006 4.79693C15.8288 -1.80518 22.0485 6.38372 17.8265 10.6057L10.006 17.6894Z"

            />
        </svg>
    );
};