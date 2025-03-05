import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`



:root {
  
    --clr-my-grey-0: #2b3041;
    --clr-whatsapp-green: hsl(142, 70%, 49%);
    --clr-primary: #3e7b27;

  &, &.light-mode{
  /* Grey */
  --color-grey-0: #fff;
  --color-grey-50: #f9fafb;
  --color-grey-100: #f3f4f6;
  --color-grey-200: #e5e7eb;
  --color-grey-300: #d1d5db;
  --color-grey-400: #9ca3af;
  --color-grey-500: #6b7280;
  --color-grey-600: #4b5563;
  --color-grey-700: #374151;
  --color-grey-800: #1f2937;
  --color-grey-900: #111827;

  --color-blue-100: #e0f2fe;
  --color-blue-700: #0369a1;
  --color-green-100: #dcfce7;
  --color-green-700: #15803d;
  --color-green-800: #116233;
  --color-yellow-100: #fef9c3;
  --color-yellow-700: #a16207;
  --color-silver-100: #e5e7eb;
  --color-silver-700: #374151;
  --color-indigo-100: #e0e7ff;
  --color-indigo-700: #4338ca;

  --color-red-100: #fee2e2;
  --color-red-700: #b91c1c;
  --color-red-800: #991b1b;

  --backdrop-color: rgba(255, 255, 255, 0.1);

  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.04);
  --shadow-md: 0px 0.6rem 2.4rem rgba(0, 0, 0, 0.06);
  --shadow-lg: 0 2.4rem 3.2rem rgba(0, 0, 0, 0.12);

  --image-grayscale: 0;
  --image-opacity: 100%;
}
  &.dark-mode {
  --color-grey-0: #18212f;
  --color-grey-50: #111827;
  --color-grey-100: #1f2937;
  --color-grey-200: #374151;
  --color-grey-300: #4b5563;
  --color-grey-400: #6b7280;
  --color-grey-500: #9ca3af;
  --color-grey-600: #d1d5db;
  --color-grey-700: #e5e7eb;
  --color-grey-800: #f3f4f6;
  --color-grey-900: #f9fafb;

  --color-blue-100: #075985;
  --color-blue-700: #e0f2fe;
  --color-green-100: #166534;
  --color-green-700: #dcfce7;
  --color-yellow-100: #854d0e;
  --color-yellow-700: #fef9c3;
  --color-silver-100: #374151;
  --color-silver-700: #f3f4f6;
  --color-indigo-100: #3730a3;
  --color-indigo-700: #e0e7ff;

  --color-red-100: #fee2e2;
  --color-red-700: #b91c1c;
  --color-red-800: #991b1b;

  --backdrop-color: rgba(0, 0, 0, 0.3);

  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.4);
  --shadow-md: 0px 0.6rem 2.4rem rgba(0, 0, 0, 0.3);
  --shadow-lg: 0 2.4rem 3.2rem rgba(0, 0, 0, 0.4);

  --image-grayscale: 10%;
  --image-opacity: 90%;

  }

  /* Indigo */
  --color-brand-50: #eef2ff;
  --color-brand-100: #e0e7ff;
  --color-brand-200: #c7d2fe;
  --color-brand-500: #6366f1;
  --color-brand-600: #4f46e5;
  --color-brand-700: #4338ca;
  --color-brand-800: #3730a3;
  --color-brand-900: #312e81;

  --border-radius-tiny: 3px;
  --border-radius-sm: 5px;
  --border-radius-md: 7px;
  --border-radius-lg: 9px;

  
}

*,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;

  /* Creating animations for dark mode */
  transition: background-color 0.3s, border 0.3s;
}

html, body{
  overflow-x: hidden;
}

.test {
          width: 900px!important;
          background-color: red!important;
        }

html {
  /* font-size: 62.5%; */
}

body {
  font-family: "Roboto", serif;
  color: var(--color-grey-700);

  transition: color 0.3s, background-color 0.3s;
  min-height: 100vh;
  line-height: 1.5;
  /* font-size: 1.6rem; */
}

/* scrollbar styling */

body::-webkit-scrollbar {
  width: 1em;
}

body::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: var(--color-grey-300);
}

body::-webkit-scrollbar-thumb {
  background-color: var(--color-grey-400);
  border-radius: 1rem;
}

input,
button,
textarea,
select {
  font: inherit;
  color: inherit;
}

button {
  cursor: pointer;
}

*:disabled {
  cursor: not-allowed;
}

select:disabled,
input:disabled {
  background-color: var(--color-grey-200);
  color: var(--color-grey-500);
}

input:focus,
button:focus,
textarea:focus,
select:focus {
  outline: 2px solid var(--color-brand-600);
  outline-offset: -1px;
}

/* Parent selector, finally 😃 */
button:has(svg) {
  line-height: 0;
}

a {
  color: inherit;
  text-decoration: none;
}

ul {
  list-style: none;
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
  overflow-wrap: break-word;
  hyphens: auto;
}

img {
  max-width: 100%;

  /* For dark mode */
  filter: grayscale(var(--image-grayscale)) opacity(var(--image-opacity));
}

/*
FOR DARK MODE

--color-grey-0: #18212f;
--color-grey-50: #111827;
--color-grey-100: #1f2937;
--color-grey-200: #374151;
--color-grey-300: #4b5563;
--color-grey-400: #6b7280;
--color-grey-500: #9ca3af;
--color-grey-600: #d1d5db;
--color-grey-700: #e5e7eb;
--color-grey-800: #f3f4f6;
--color-grey-900: #f9fafb;

--color-blue-100: #075985;
--color-blue-700: #e0f2fe;
--color-green-100: #166534;
--color-green-700: #dcfce7;
--color-yellow-100: #854d0e;
--color-yellow-700: #fef9c3;
--color-silver-100: #374151;
--color-silver-700: #f3f4f6;
--color-indigo-100: #3730a3;
--color-indigo-700: #e0e7ff;

--color-red-100: #fee2e2;
--color-red-700: #b91c1c;
--color-red-800: #991b1b;

--backdrop-color: rgba(0, 0, 0, 0.3);

--shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.4);
--shadow-md: 0px 0.6rem 2.4rem rgba(0, 0, 0, 0.3);
--shadow-lg: 0 2.4rem 3.2rem rgba(0, 0, 0, 0.4);

--image-grayscale: 10%;
--image-opacity: 90%;
*/


.tabbed-active{
  background-color: var(--color-brand-600);
  color: var(--color-grey-0);
}

.custom-paragraph{
  text-align: justify;
}

.image-container{
  display: flex;
  justify-content: center;
  align-items: center;
}

.navbar-custom{
  position: relative;
  transition: all 0.3s ease;
  padding: 0;
}

.navbar-sticky {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
}

.modal-open{
  overflow: hidden;
}

.test{
  display: flex;
  flex-direction: column;
  gap: 1rem;
  position: fixed;
  bottom: 30%;
  right: 1%;
}

.contact-form-error-message{
  padding-top: 0.25rem;
  color: red;
  font-weight: 600;
}

table {
            width: 100%;
            border-collapse: collapse;
        }
        th, td {
            border: 1px solid #ddd;
            padding: 10px;
            text-align: left;
        }
        th {
            background-color: #f2f2f2;
            font-weight: bold;
        }
        td[colspan="2"] {
            background-color: #f9f9f9;
            text-align: center;
            font-size: 1.2em;
            font-weight: bold;
        }
        tr:nth-child(even) {
            background-color: #f9f9f9;
        }
        tr:hover {
            background-color: #f1f1f1;
        }

        .info-icon {
          font-size: 2rem;
        }
  .modal-backdrop{
    z-index: 5;
  }

  .modal-body-custom{
    color: black;
  }

  .modal-custom{
    padding-right: 0 !important;
  }

  /* .modal-footer-custom{
    border-top: none;
  } */

   body.modal-open{
    overflow: hidden !important;
    padding-right: 0px !important;
    margin-right: 0px !important;
   }

   .modal-form-custom{
    overflow: hidden;
   }


.modal-body-custom::-webkit-scrollbar {
  width: 0.5rem;
}
 
.modal-body-custom::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: var(--color-grey-300);
}
 
.modal-body-custom::-webkit-scrollbar-thumb {
  background-color: var(--color-grey-400);
  border-radius: 1rem;
}

.modal-header-custom{
  border: none !important;
}

.modal-dialog-consulting::-webkit-scrollbar{
  width: 0.5rem;
}

.modal-dialog-consulting::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: var(--color-grey-300);
}
 
.modal-dialog-consulting::-webkit-scrollbar-thumb {
  background-color: var(--color-grey-400);
  border-radius: 1rem;
}

.modal-services-list{
  overflow: hidden;
}

.modal-dialog-services-list::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: var(--color-grey-300);
}
 
.modal-dialog-services-list::-webkit-scrollbar-thumb {
  background-color: var(--color-grey-400);
  border-radius: 1rem;
}

.modal-dialog-services-list::-webkit-scrollbar{
  width: 0.5rem;
}

.modal-prices-list{
  overflow: hidden;
}

.modal-dialog-prices-list::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: var(--color-grey-300);
}
 
.modal-dialog-prices-list::-webkit-scrollbar-thumb {
  background-color: var(--color-grey-400);
  border-radius: 1rem;
}

.modal-dialog-prices-list::-webkit-scrollbar{
  width: 0.5rem;
}

.modal-services-form{
  overflow: hidden;
}

.modal-body-services-form::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: var(--color-grey-300);
}
 
.modal-body-services-form::-webkit-scrollbar-thumb {
  background-color: var(--color-grey-400);
  border-radius: 1rem;
}

.modal-body-services-form::-webkit-scrollbar{
  width: 0.5rem;
}

.container-services-hero-custom{
  position: relative;
  z-index: 8;
}

.forgot-password-link{
  color: var(--color-green-700) !important;
  cursor: pointer;
  text-decoration: underline;
}

.back-to-login-link{
  color: var(--color-green-700) !important;
  cursor: pointer;
  text-decoration: underline;
}

.info-reset-password{
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem;
}

.info-reset-password i{
  color: var(--color-green-700);
}

.upload-accounting-docs{
  align-items: flex-start;
}

.modal-test{
  z-index: 1000 !important;
}

/* Modal with all the prices */

.modal-all-services::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: var(--color-grey-300);
}
 
.modal-all-services::-webkit-scrollbar-thumb {
  background-color: var(--color-grey-400);
  border-radius: 1rem;
}

.modal-all-services::-webkit-scrollbar{
  width: 0.5rem;
}

.hello-world{
  z-index: 1000 !important;
}

.modal-edit-users{
  z-index: 1000 !important;
}

`;

export default GlobalStyles;
