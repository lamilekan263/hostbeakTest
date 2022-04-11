import * as React from "react"




const BankingSvg = (props:{isActive : boolean}) => (
    <svg width="20" height="25" viewBox="0 0 34 35" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M30.5956 29.4854V27.6997C30.5956 27.4745 30.5063 27.2585 30.3472 27.0992C30.1881 26.9398 29.9722 26.8501 29.747 26.8497V14.9503C29.8586 14.9503 29.9692 14.9284 30.0723 14.8856C30.1754 14.8429 30.2691 14.7803 30.348 14.7014C30.4269 14.6225 30.4895 14.5287 30.5323 14.4256C30.575 14.3225 30.5969 14.212 30.5969 14.1003V12.4003H31.8685C32.8499 12.4003 33.6759 11.7482 33.9269 10.7767C34.1812 9.78059 33.7582 8.78913 32.8731 8.30503L20.0314 1.27921C19.1022 0.767899 18.0589 0.499786 16.9983 0.499786C15.9377 0.499786 14.8944 0.767899 13.9652 1.27921L1.12879 8.30437C0.242359 8.78913 -0.181271 9.78191 0.0730396 10.7767C0.321374 11.7476 1.14739 12.4003 2.13143 12.4003H3.40099V14.1003C3.40099 14.3255 3.49035 14.5415 3.64945 14.7009C3.80856 14.8603 4.02439 14.95 4.24958 14.9503V26.8497C4.02416 26.8497 3.80799 26.9393 3.6486 27.0987C3.48921 27.2581 3.39966 27.4743 3.39966 27.6997V29.4854C2.44054 29.6826 1.57872 30.2045 0.959447 30.963C0.340177 31.7216 0.00132421 32.6705 0 33.6498L0 34.4998H33.9966V33.6498C33.9952 32.6703 33.6562 31.7213 33.0366 30.9627C32.4171 30.2041 31.555 29.6824 30.5956 29.4854ZM5.09816 28.5498H10.197V29.3998H5.10082L5.09816 28.5498ZM11.0469 26.8497V14.9503C11.1585 14.9503 11.269 14.9284 11.3722 14.8856C11.4753 14.8429 11.569 14.7803 11.6479 14.7014C11.7268 14.6225 11.7894 14.5287 11.8321 14.4256C11.8748 14.3225 11.8968 14.212 11.8968 14.1003V12.4003H12.7487V14.1003C12.7487 14.212 12.7707 14.3225 12.8134 14.4256C12.8561 14.5287 12.9187 14.6225 12.9977 14.7014C13.0766 14.7803 13.1703 14.8429 13.2734 14.8856C13.3765 14.9284 13.487 14.9503 13.5986 14.9503V26.8497C13.3732 26.8497 13.1571 26.9393 12.9977 27.0987C12.8383 27.2581 12.7487 27.4743 12.7487 27.6997V29.3998H11.8988V27.6997C11.8988 27.4744 11.8094 27.2583 11.6501 27.0989C11.4909 26.9396 11.2749 26.8499 11.0496 26.8497H11.0469ZM15.2965 26.8497V14.9503H18.6961V26.8497H15.2965ZM19.548 13.2497H14.4486V12.3997H19.548V13.2497ZM14.4486 28.5498H19.548V29.3998H14.4486V28.5498ZM20.3973 26.8497V14.9503C20.5089 14.9503 20.6194 14.9284 20.7225 14.8856C20.8257 14.8429 20.9194 14.7803 20.9983 14.7014C21.0772 14.6225 21.1398 14.5287 21.1825 14.4256C21.2252 14.3225 21.2472 14.212 21.2472 14.1003V12.4003H22.0971V14.1003C22.0971 14.212 22.1191 14.3225 22.1618 14.4256C22.2045 14.5287 22.2671 14.6225 22.3461 14.7014C22.425 14.7803 22.5187 14.8429 22.6218 14.8856C22.7249 14.9284 22.8354 14.9503 22.947 14.9503V26.8497C22.7216 26.8497 22.5055 26.9393 22.3461 27.0987C22.1867 27.2581 22.0971 27.4743 22.0971 27.6997V29.3998H21.2479V27.6997C21.2479 27.4743 21.1583 27.2581 20.9989 27.0987C20.8396 26.9393 20.6234 26.8497 20.398 26.8497H20.3973ZM23.797 28.5498H28.8958V29.3998H23.797V28.5498ZM28.0465 26.8497H24.6469V14.9503H28.0465V26.8497ZM28.8965 13.2497H23.797V12.3997H28.8958L28.8965 13.2497ZM2.12877 10.7003C1.84989 10.7003 1.75295 10.4845 1.71975 10.3557C1.69651 10.2654 1.64472 9.95723 1.94285 9.79652L14.7812 2.7707C15.4604 2.39657 16.2232 2.20037 16.9986 2.20037C17.774 2.20037 18.5369 2.39657 19.2161 2.7707L32.0538 9.79652C32.3519 9.95922 32.3001 10.2654 32.2769 10.3557C32.2443 10.4845 32.1441 10.7003 31.8678 10.7003H2.12877ZM10.1996 12.4003V13.2497H5.10082V12.3997L10.1996 12.4003ZM5.95007 14.9503H9.34973V26.8497H5.95007V14.9503ZM1.84657 32.7998C2.02278 32.3031 2.34832 31.8731 2.77854 31.5687C3.20876 31.2643 3.7226 31.1005 4.24958 31.0998H29.747C30.2741 31.1004 30.7881 31.2641 31.2185 31.5685C31.6488 31.8729 31.9745 32.303 32.1507 32.7998H1.84657ZM16.9983 8.99964C17.5026 8.99964 17.9956 8.85009 18.4149 8.56989C18.8342 8.28969 19.161 7.89143 19.354 7.42548C19.5469 6.95952 19.5974 6.4468 19.4991 5.95215C19.4007 5.45749 19.1578 5.00312 18.8012 4.6465C18.4447 4.28987 17.9903 4.04701 17.4957 3.94861C17.0011 3.85022 16.4885 3.90072 16.0226 4.09372C15.5567 4.28673 15.1584 4.61357 14.8783 5.03292C14.5981 5.45227 14.4486 5.94528 14.4486 6.44963C14.4493 7.12572 14.7181 7.77392 15.1961 8.25199C15.6742 8.73005 16.3223 8.99894 16.9983 8.99964ZM16.9983 5.59963C17.1664 5.59963 17.3307 5.64948 17.4705 5.74288C17.6103 5.83628 17.7192 5.96903 17.7835 6.12435C17.8479 6.27966 17.8647 6.45057 17.8319 6.61546C17.7991 6.78034 17.7181 6.9318 17.5993 7.05067C17.4804 7.16955 17.329 7.2505 17.1641 7.2833C16.9992 7.3161 16.8284 7.29927 16.6731 7.23493C16.5178 7.1706 16.385 7.06165 16.2916 6.92187C16.1982 6.78208 16.1484 6.61774 16.1484 6.44963C16.1487 6.22436 16.2384 6.00843 16.3978 5.84921C16.5571 5.68998 16.7731 5.60046 16.9983 5.60029V5.59963Z" fill="#BFBFBF" />
    </svg>

)

export default BankingSvg
