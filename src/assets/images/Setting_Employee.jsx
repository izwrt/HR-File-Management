// const Setting_Emp = () => {
//   return (
//       <svg
//           width="24"
//           height="24"
//           viewBox="0 0 24 24"
//           fill="none"
//           xmlns="http://www.w3.org/2000/svg"
//           className="transition ease-in-out delay-100 hover:scale-125 nav-hoverx"

//       >
//           <path d="M20.1 9.2214C18.29 9.2214 17.55 7.9414 18.45 6.3714C18.97 5.4614 18.66 4.3014 17.75 3.7814L16.02 2.7914C15.23 2.3214 14.21 2.6014 13.74 3.3914L13.63 3.5814C12.73 5.1514 11.25 5.1514 10.34 3.5814L10.23 3.3914C9.78 2.6014 8.76 2.3214 7.97 2.7914L6.24 3.7814C5.33 4.3014 5.02 5.4714 5.54 6.3814C6.45 7.9414 5.71 9.2214 3.9 9.2214C2.86 9.2214 2 10.0714 2 11.1214V12.8814C2 13.9214 2.85 14.7814 3.9 14.7814C5.71 14.7814 6.45 16.0614 5.54 17.6314C5.02 18.5414 5.33 19.7014 6.24 20.2214L7.97 21.2114C8.76 21.6814 9.78 21.4014 10.25 20.6114L10.36 20.4214C11.26 18.8514 12.74 18.8514 13.65 20.4214L13.76 20.6114C14.23 21.4014 15.25 21.6814 16.04 21.2114L17.77 20.2214C18.68 19.7014 18.99 18.5314 18.47 17.6314C17.56 16.0614 18.3 14.7814 20.11 14.7814C21.15 14.7814 22.01 13.9314 22.01 12.8814V11.1214C22 10.0814 21.15 9.2214 20.1 9.2214ZM12 15.2514C10.21 15.2514 8.75 13.7914 8.75 12.0014C8.75 10.2114 10.21 8.7514 12 8.7514C13.79 8.7514 15.25 10.2114 15.25 12.0014C15.25 13.7914 13.79 15.2514 12 15.2514Z" ></path>
//       </svg>
//   );
// };

// export default Setting;

function Setting_Employee() {
  return (
    <>
      <svg
        width="95"
        height="95"
        viewBox="0 0 95 95"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="relative"
      >
        <circle cx="47.5" cy="47.5" r="47.5" fill="#D9D9D9" />
      </svg>

      <svg
        width="69"
        height="64"
        viewBox="0 0 69 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        className="absolute"
      >
        <rect width="69" height="64" fill="url(#pattern0_36_1723)" />
        <defs>
          <pattern
            id="pattern0_36_1723"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use
              xlinkHref="#image0_36_1723"
              transform="matrix(0.010306 0 0 0.0111111 0.0362319 0)"
            />
          </pattern>
          <image
            id="image0_36_1723"
            width="90"
            height="90"
            xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAAD3UlEQVR4nO2czY8VRRTFS0YTYKngxhjBcecKDMaEBBMjRGPc+jEILknwL8DNk5Um5MXFMF3nVM/LLBAWvVeXmuBXxI+AwQEV41ZFwBAJilrm5pVkUJjw5r2uqqm+v+Qkk3kvXX1Paqrv3LrVxiiKoiiKoiiKoiijU9f1QwBeIXmM5BcAfiH5R9B5+V34bD/J6RUM0V16vd6dzrndJD8i6UcRgA9JzjRNM5U6jqwB8BTJb0Y1+CY6Q3JX6niyg+R6kvMTMPi/M9z1+/11qePLgqqq7iX5+aRNXqITg8Fgo+ky1dDkMy2afH0p6azZHC4Xbc7k/83shYWFtaZrsIU1+TbWbJguQXJXbJOX6GnTlTyZk0nhVqrFTuTZAF5KaPK/esGUDoCPMzD6A1N67YLpTZaH4t/Ouc2mVDAsEPlMtM+UCoeVNp/JrH7LlAqALzMy+jNTKhzWkHMx+idTKgB+T23wEl01pcL05t4gUyrMwFw1mmr0xICu0XGgZh1xgObRcSB5NPUDcImOmFLhsNHFZ6Kiax3TUjlLbbLcg7V2kykZrqADqQUdN6VDcia10c6550zpNE0zFamX41Y63Yk9Q8FauzPhbH7CdAkALoHRleka/X5/nXQPRTT5k052KgnSDxdpvV4kucF0mcFgsBHAp23O5M42ON5sGZG+uDbW5M4uF8tB8snwZz6uwac7l12MStM0U9baF6WbaJR/18N3jwN4vtfrrUkdx6rCObdZij/SgxF6qc/L5kHYQPhZWgbCZ/uKr10oiqIoiqIoiqIoynjMzc3d75x7uC0f5doyhuki1tpHSb5B8lQoCskbZQ5Mshgk1wLwari2FJ1Oknyd5DZTMhw2zxwE8O0yVbj36rp+ZNyx5BoA3l9mHDm5+1pVVQ+aEgiz6lmS75L8a4SS5zsAdowyw+W7JB8PY91u3Vru6W2Sz6zK0mo47/0ygLNjFvB/DGXQPVVVbZF9P5J3BcnPW621e6V5Ug7/jDnWolxL7t3kjvf+DnnxFIDvW9iW8pF0TjYeJBaTI865x2QjNAOj/CQUzqzn8+CUzU/JIAD8mdocTl6yhgvrk2cSJL/KwBDfsk4le4FheMJncxKW7Uv2K3fENnkbycsZBO8j6zdr7fYoJs/Ozt4zgVTKr1ZJ7HVd39260ST7qYNlerMPxTA65YunfA4C8HUMo6+kDpTpdbl1owH8kEGgPrG+a91okoczCNQn1putG22tvY/khQyC9Yl0KdpGQjjs82sGQfuYAnAxejuwdHoCmAtZyLXUJrA9XQsxHp6fn38gqsmKoiiKoiiKoiiKoigmT/4BNyL+E/BtqMcAAAAASUVORK5CYII="
          />
        </defs>
      </svg>
      <svg
        width="43"
        height="31"
        viewBox="0 0 43 31"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        className="absolute top-16 left-16"
      >
        <rect width="43" height="31" fill="url(#pattern0_36_1722)" />
        <defs>
          <pattern
            id="pattern0_36_1722"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use
              xlinkHref="#image0_36_1722"
              transform="matrix(0.00801034 0 0 0.0111111 0.139535 0)"
            />
          </pattern>
          <image
            id="image0_36_1722"
            width="90"
            height="90"
            xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFNklEQVR4nO2cz4scRRTHSw/+iCKIhxgVPcjGg/grIVFBgwb9QwRBCbiezCoeNupRN0lnh67vt3pkYY8raiSEEPCuqxDXqLl5inowP2EFV1cz8uhaWZaZnu6u7umu3vrCg4Vtano+8/pVvVevWqmgoKCgoKCgoKCgoKCgoKCgoKCgoKAsLSws3EbyTZLLAP4gOQjGgWXxNcnpKIpudfIiY8wDAL4PYDnOuVaEVWlPDpBZ5OldKeXZNlyEMMH8DAC8UQb0cgDNQo4G4KsyoFcDaBZ9olfLgA5hg8UZBNCcjOME0AygB02HKQB/Ajiutd6/uLh4hxjJp0lGJNeCR7MSyBeTJHl81COvtX5Crgmhg26enAV5M+y8nh1iNIeCPl5gFXYigGY5j5aYnBe0MeaZAJrlQPd6vTvzgpZrA2jWDzqKorsCaIbQ0XaL8no0gPng0SwNek2WbuMgG2OeBPBXAE2ntfTFLNgCmeQvecdTRdWCx3owQZNk5IQs4WSCFAPwrISLvJ7cKGgAv5J8Wzxm4wtYD3mH5G8tAFy5NQG6T3JHxvg7AHzcNBjfQR8p8DlHmobjJWgAs0U/C8BM04C8Al0Gctdgq6KaJOQuwVZFVVdMbkPMBnCD5DkAhuQhAAeMMbuTJNkpjUODweCmOI7v7vf7D5F8DsArtkz6Lcl/mwJdGeQ6YVu4XwJ4vd/v36dKan5+/h6SrwH4ZpKgK4dcA+w1WUYaYx5VFcvuvMSbk5rCg9QSjyYP+xOSD6qaJWEHwBfegnaA/bPW+mU1YZF8yVvQRVcjAE7JRKZ8UZtA5/FsO9m9KysGlUPSYkvyRZLvk/wcwAWSV0n+bWOu/P2T/d97WusXnBvOfQCdBdtCPqRyKEmSvXZZd71oSAJwjan2qC6DHgbbQn5VjZHAIXnWcXLdbGekEqm6CnoI7A9Uhubm5m6XLSsA/1QIecPWSR6TJEd1EfQm2CdnZ2dvViMUx/EjJM/XAHirrWitp1QXQYuWlpZuUSNkmxQvTwDyhl0q0pDjFegxkJs4sbBaGLavoOM0XEzSk4d59lSnQS+kR/a+axDyhp2XSbizoJk2jpeCI0kKgLdI7rJ2uOgO+JbxjnYSNMk9jku4wxVvRKznac7xEfRZx8d919Yxe73evY5jnu4U6CRJ9joCGfldXMaUrDWO46c6Axpp7aJ1oK3pToCO0irc9RaDvpqVWHkD2hhzsAIYdYKWEHLAe9BM68mtBp25t+oLaNi9ujaDBvCZqvmXrMyMMbtHgL5QJBmp6PdVRZIaAD96AzpJkp0j7vNymWSkKuVMai55AzoasV+XM02uzJNLJjVr3rwYJXIA7dKZNE5a6/tdQS93JXQAmKkLtJxocA0d003DZbWT4UyVni1jyZjOk6HNuFZaBPrgCIc4WcX4ozjUvrwTyUvzWgR7etg9SnOLB6DH946LZ8v73ORVY01OkADMsPuTDiKvU3BfFKWOcK2toAFcySwq+ST4XCb1SUzbvVpZ+K+kbaxNInnGBcqwpV/OZCQL9CnVNZn06PO6A5SZksnIKJN7eUx1USSPOYD+P6kpkoxkjPeh6vjb28+5xmtXk/du526g8VVa6ympLTQI+XeSD6vtIK31/qaaHEnuU9tJJPdZ75qUJ1+Rl6mo7SidhpFJ1GrObZtwMabD9KjL0i/DZMyPnI5WdE06PU582h4ucg0TNyQZ6ew6uQpJLxwA2HOEheOw1C46l1arGiUVNSlfSnOLFOZlF0S2xWziIomKbJH9QPJTucYY87xLFe4/u0kvEZGrJyoAAAAASUVORK5CYII="
          />
        </defs>
      </svg>
    </>
  );
}

export default Setting_Employee;
