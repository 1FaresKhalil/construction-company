/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontSize: {
      base: ['16px', '28px'],
    },
    borderRadius: {
      'none': '0',
      'sm': '0.125rem',
      DEFAULT: '0.25rem',
      DEFAULT: '4px',
      'md': '0.375rem',
      'lg': '0.5rem',
      'full': '9999px',
      'large': '12px',
      'card':'10px',
      '5px':'5px',
    },
    container: {
      screens: {

        'sm': '640px',
        // => @media (min-width: 640px) { ... }
  
        'md': '768px',
        // => @media (min-width: 768px) { ... }
  
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
        
        'xl': '1216px',
        // => @media (min-width: 1280px) { ... }
  
        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
        }
    },
    extend: {
      screens:{
        'xxs':'425px',
        // => @media (min-width: 425px) { ... }

      'xs':'576px',
      // => @media (min-width: 576px) { ... }
      },

      gap: {
        '50px': '3.125rem',
        '30px':'30px',
      },

      padding: {
        '30px': '30px',
        '45px':'45px',
        '22px':'22px',
        '41px':'41px',
        '50px':'50px',
        '39px':'39px',
      },

      fontSize: {
        '23px': ['1.4375rem', '31.42px'],
        '13px': ['0.813rem','16.93px'],
        '40px': ['2.5rem','54.64px'],
        '16px': ['1rem','21.86px'],
        '14px': ['0.875rem','19.12px'],
        '16-24px':['1rem','24px'],
        '45px':['2.813rem','64.89px'],
        '23px':['1.438rem','33.17px'],
        '20px':['1.25rem','23.46px'],
        '18px':['1.125rem','21.11px'],
        '12px':['0.75rem','15.62px'],
        '22px':['1.375rem','28.64px'],
        '54px':['3.375rem','73px'],
        '17px':['1.063rem','23.22px'],
        '19px':['1.188rem','25.95px'],
        '72px':['4.5rem','84.46px'],
        '24px':['1.5rem','28.15px'],
    },
    colors: {
      main:'#3559C7',
      primary:'#14171F',
      secondary:'#F9995D',
      tertiary:'#292E3D',
      bg:'#FBFCFC',
      quaternary:'#FF9900',
      featuredbg:'#F1FFFF',
      grey55:'#545A58',
    },  


      fontFamily:{
        worksans:["Work Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
}
