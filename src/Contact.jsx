import React from 'react'

const Contact = () => {

  const date = new Date();
  const year = date.getFullYear();

  return (
    <div className='contact_main'>
      <div>
        <span><svg width="71" height="76" viewBox="0 0 31 36" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 20.5714C0 24.6633 1.63303 28.5877 4.53984 31.4811C7.44666 34.3745 11.3891 36 15.5 36C15.5 27.4286 8.55944 20.5714 0 20.5714ZM15.5 7.71429C16.6419 7.71429 17.737 8.16582 18.5445 8.96954C19.3519 9.77327 19.8056 10.8634 19.8056 12C19.8056 13.1366 19.3519 14.2267 18.5445 15.0305C17.737 15.8342 16.6419 16.2857 15.5 16.2857C14.3581 16.2857 13.263 15.8342 12.4555 15.0305C11.6481 14.2267 11.1944 13.1366 11.1944 12C11.1944 10.8634 11.6481 9.77327 12.4555 8.96954C13.263 8.16582 14.3581 7.71429 15.5 7.71429ZM4.47778 15.8571C4.47778 16.9938 4.9314 18.0839 5.73885 18.8876C6.54629 19.6913 7.64143 20.1429 8.78333 20.1429C9.69611 20.1429 10.54 19.8514 11.1944 19.3886V19.7143C11.1944 20.8509 11.6481 21.941 12.4555 22.7447C13.263 23.5485 14.3581 24 15.5 24C16.6419 24 17.737 23.5485 18.5445 22.7447C19.3519 21.941 19.8056 20.8509 19.8056 19.7143V19.3886C20.46 19.8514 21.3039 20.1429 22.2167 20.1429C23.3586 20.1429 24.4537 19.6913 25.2612 18.8876C26.0686 18.0839 26.5222 16.9938 26.5222 15.8571C26.5222 14.1429 25.5061 12.6857 24.0594 12C25.5061 11.3143 26.5222 9.84 26.5222 8.14286C26.5222 7.00622 26.0686 5.91613 25.2612 5.1124C24.4537 4.30867 23.3586 3.85714 22.2167 3.85714C21.3039 3.85714 20.46 4.13143 19.8056 4.61143V4.28571C19.8056 3.14907 19.3519 2.05898 18.5445 1.25526C17.737 0.451529 16.6419 0 15.5 0C14.3581 0 13.263 0.451529 12.4555 1.25526C11.6481 2.05898 11.1944 3.14907 11.1944 4.28571V4.61143C10.54 4.13143 9.69611 3.85714 8.78333 3.85714C7.64143 3.85714 6.54629 4.30867 5.73885 5.1124C4.9314 5.91613 4.47778 7.00622 4.47778 8.14286C4.47778 9.84 5.49389 11.3143 6.94056 12C5.49389 12.6857 4.47778 14.1429 4.47778 15.8571ZM15.5 36C19.6109 36 23.5533 34.3745 26.4602 31.4811C29.367 28.5877 31 24.6633 31 20.5714C22.3889 20.5714 15.5 27.4286 15.5 36Z"
            fill="#6D965E" />
        </svg></span>

        <h2>Copyright © {year}</h2>
      </div>

      <div id='links'>
        <a href='https://www.youtube.com/' target='xyz'><svg className='cSvg' xmlns="http://www.w3.org/2000/svg" width="30" height="24" viewBox="0 0 20 14" fill="none">
          <path d="M8 10L13.19 7L8 4V10ZM19.56 2.17C19.69 2.64 19.78 3.27 19.84 4.07C19.91 4.87 19.94 5.56 19.94 6.16L20 7C20 9.19 19.84 10.8 19.56 11.83C19.31 12.73 18.73 13.31 17.83 13.56C17.36 13.69 16.5 13.78 15.18 13.84C13.88 13.91 12.69 13.94 11.59 13.94L10 14C5.81 14 3.2 13.84 2.17 13.56C1.27 13.31 0.69 12.73 0.44 11.83C0.31 11.36 0.22 10.73 0.16 9.93C0.0900001 9.13 0.0599999 8.44 0.0599999 7.84L0 7C0 4.81 0.16 3.2 0.44 2.17C0.69 1.27 1.27 0.69 2.17 0.44C2.64 0.31 3.5 0.22 4.82 0.16C6.12 0.0899998 7.31 0.0599999 8.41 0.0599999L10 0C14.19 0 16.8 0.16 17.83 0.44C18.73 0.69 19.31 1.27 19.56 2.17Z" fill="#253528" />
        </svg></a>
        <a href='https://www.youtube.com/' target='xyz'><svg className='cSvg' xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 20 20" fill="none">
          <path d="M20 10C20 4.48 15.52 0 10 0C4.48 0 0 4.48 0 10C0 14.84 3.44 18.87 8 19.8V13H6V10H8V7.5C8 5.57 9.57 4 11.5 4H14V7H12C11.45 7 11 7.45 11 8V10H14V13H11V19.95C16.05 19.45 20 15.19 20 10Z" fill="#253528" />
        </svg></a>
        <a href='https://www.youtube.com/' target='xyz'><svg className='cSvg' xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 20 20" fill="none">
          <path d="M11.0286 0C12.1536 0.003 12.7246 0.009 13.2176 0.023L13.4116 0.03C13.6356 0.038 13.8566 0.0479999 14.1236 0.0599999C15.1876 0.11 15.9136 0.278 16.5506 0.525C17.2106 0.779 17.7666 1.123 18.3226 1.678C18.8311 2.1779 19.2245 2.78259 19.4756 3.45C19.7226 4.087 19.8906 4.813 19.9406 5.878C19.9526 6.144 19.9626 6.365 19.9706 6.59L19.9766 6.784C19.9916 7.276 19.9976 7.847 19.9996 8.972L20.0006 9.718V11.028C20.003 11.7574 19.9954 12.4868 19.9776 13.216L19.9716 13.41C19.9636 13.635 19.9536 13.856 19.9416 14.122C19.8916 15.187 19.7216 15.912 19.4756 16.55C19.2253 17.2178 18.8317 17.8226 18.3226 18.322C17.8225 18.8303 17.2179 19.2238 16.5506 19.475C15.9136 19.722 15.1876 19.89 14.1236 19.94C13.8863 19.9512 13.649 19.9612 13.4116 19.97L13.2176 19.976C12.7246 19.99 12.1536 19.997 11.0286 19.999L10.2826 20H8.97358C8.24384 20.0025 7.5141 19.9948 6.78458 19.977L6.59058 19.971C6.35319 19.962 6.11585 19.9517 5.87858 19.94C4.81458 19.89 4.08858 19.722 3.45058 19.475C2.78325 19.2244 2.17879 18.8308 1.67958 18.322C1.17062 17.8223 0.776801 17.2176 0.525577 16.55C0.278577 15.913 0.110577 15.187 0.0605769 14.122C0.0494358 13.8847 0.0394357 13.6474 0.030577 13.41L0.0255771 13.216C0.00714914 12.4868 -0.00118508 11.7574 0.000577001 11.028V8.972C-0.00221397 8.2426 0.00512015 7.5132 0.0225771 6.784L0.029577 6.59C0.037577 6.365 0.047577 6.144 0.059577 5.878C0.109577 4.813 0.277577 4.088 0.524577 3.45C0.775691 2.7819 1.1703 2.17702 1.68058 1.678C2.17967 1.16947 2.78372 0.775987 3.45058 0.525C4.08858 0.278 4.81358 0.11 5.87858 0.0599999C6.14458 0.0479999 6.36658 0.038 6.59058 0.03L6.78458 0.0239999C7.51377 0.00623271 8.24317 -0.0014347 8.97258 0.000999928L11.0286 0ZM10.0006 5C8.67449 5 7.40272 5.52678 6.46504 6.46447C5.52736 7.40215 5.00058 8.67392 5.00058 10C5.00058 11.3261 5.52736 12.5979 6.46504 13.5355C7.40272 14.4732 8.67449 15 10.0006 15C11.3267 15 12.5984 14.4732 13.5361 13.5355C14.4738 12.5979 15.0006 11.3261 15.0006 10C15.0006 8.67392 14.4738 7.40215 13.5361 6.46447C12.5984 5.52678 11.3267 5 10.0006 5ZM10.0006 7C10.3945 6.99993 10.7847 7.07747 11.1487 7.22817C11.5127 7.37887 11.8434 7.5998 12.122 7.87833C12.4007 8.15686 12.6217 8.48754 12.7725 8.85149C12.9233 9.21544 13.001 9.60553 13.0011 9.9995C13.0011 10.3935 12.9236 10.7836 12.7729 11.1476C12.6222 11.5116 12.4013 11.8423 12.1228 12.121C11.8442 12.3996 11.5135 12.6206 11.1496 12.7714C10.7856 12.9223 10.3955 12.9999 10.0016 13C9.20593 13 8.44287 12.6839 7.88026 12.1213C7.31765 11.5587 7.00158 10.7956 7.00158 10C7.00158 9.20435 7.31765 8.44129 7.88026 7.87868C8.44287 7.31607 9.20593 7 10.0016 7M15.2516 3.5C14.9201 3.5 14.6021 3.6317 14.3677 3.86612C14.1333 4.10054 14.0016 4.41848 14.0016 4.75C14.0016 5.08152 14.1333 5.39946 14.3677 5.63388C14.6021 5.8683 14.9201 6 15.2516 6C15.5831 6 15.901 5.8683 16.1355 5.63388C16.3699 5.39946 16.5016 5.08152 16.5016 4.75C16.5016 4.41848 16.3699 4.10054 16.1355 3.86612C15.901 3.6317 15.5831 3.5 15.2516 3.5Z"
            fill="#253528" />
        </svg></a>
        <a href='https://www.youtube.com/' target='xyz'><svg className='cSvg' xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 20 20" fill="none">
          <path d="M10 0C15.523 0 20 4.477 20 10C20 15.523 15.523 20 10 20C8.23279 20.00296.49667 19.5352 4.97001 18.645L0.00401407 20L1.35601 15.032C0.465107 13.5049 -0.00293838 11.768 1.38802e-05 10C1.38802e-05 4.477 4.47701 0 10 0ZM6.59201 5.3L6.39201 5.308C6.26254 5.31589 6.13599 5.3499 6.02001 5.408C5.91153 5.46943 5.81251 5.54622 5.72601 5.636C5.60601 5.749 5.53801 5.847 5.46501 5.942C5.09514 6.4229 4.89599 7.01331 4.89901 7.62C4.90101 8.11 5.02901 8.587 5.22901 9.033C5.63801 9.935 6.31101 10.89 7.19901 11.775C7.41301 11.988 7.62301 12.202 7.84901 12.401C8.9524 13.3725 10.2673 14.073 11.689 14.447L12.257 14.534C12.442 14.544 12.627 14.53 12.813 14.521C13.1043 14.506 13.3886 14.4271 13.646 14.29C13.777 14.2225 13.9048 14.1491 14.029 14.07C14.029 14.07 14.072 14.042 14.154 13.98C14.289 13.88 14.372 13.809 14.484 13.692C14.567 13.606 14.639 13.505 14.694 13.39C14.772 13.227 14.85 12.916 14.882 12.657C14.906 12.459 14.899 12.351 14.896 12.284C14.892 12.177 14.803 12.066 14.706 12.019L14.124 11.758C14.124 11.758 13.254 11.379 12.722 11.137C12.6663 11.1127 12.6067 11.0988 12.546 11.096C12.4776 11.089 12.4085 11.0967 12.3433 11.1186C12.2781 11.1405 12.2183 11.1761 12.168 11.223C12.163 11.221 12.096 11.278 11.373 12.154C11.3315 12.2098 11.2744 12.2519 11.2088 12.2751C11.1433 12.2982 11.0723 12.3013 11.005 12.284C10.9399 12.2665 10.876 12.2445 10.814 12.218C10.69 12.166 10.647 12.146 10.562 12.11C9.98808 11.8595 9.4567 11.5211 8.98701 11.107C8.86101 10.997 8.74401 10.877 8.62401 10.761C8.2306 10.3842 7.88774 9.95801 7.60401 9.493L7.54501 9.398C7.50264 9.33416 7.46837 9.2653 7.44301 9.193C7.40501 9.046 7.50401 8.928 7.50401 8.928C7.50401 8.928 7.74701 8.662 7.86001 8.518C7.97001 8.378 8.06301 8.242 8.12301 8.145C8.24101 7.955 8.27801 7.76 8.21601 7.609C7.93601 6.925 7.64601 6.244 7.34801 5.568C7.28901 5.434 7.11401 5.338 6.95501 5.319C6.90101 5.313 6.84701 5.307 6.79301 5.303C6.65872 5.29633 6.52415 5.29766 6.39001 5.307L6.59201 5.3Z" fill="#253528" />
        </svg></a>
      </div>
    </div>
  )
}

export default Contact;