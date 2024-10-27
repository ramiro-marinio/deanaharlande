export const getDarkMode = ()=>{
    return (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches);
}