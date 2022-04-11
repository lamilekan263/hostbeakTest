import * as React from "react"

const ShuttleSvg = (props: { isActive: boolean }) => (
    <svg width="20" height="25" viewBox="0 0 34 35" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_2_3374)">
            <path d="M33.96 3.03829C33.8863 1.68772 32.8122 0.613735 31.4617 0.540024C28.7365 0.391141 23.4038 0.535974 18.3046 3.17343C15.7051 4.51802 12.9559 6.79768 10.7619 9.4279C10.7349 9.46031 10.7086 9.49292 10.6817 9.52539L5.7026 9.91001C4.88302 9.97336 4.15301 10.4029 3.69972 11.0885L0.302779 16.2265C-0.0410064 16.7465 -0.0956587 17.3972 0.156486 17.9671C0.408697 18.5372 0.926931 18.9344 1.54285 19.0298L5.7378 19.6796C5.72299 19.7611 5.70811 19.8426 5.6945 19.9241C5.55485 20.7595 5.83163 21.6184 6.435 22.2217L12.2782 28.065C12.7785 28.5653 13.4544 28.841 14.147 28.841C14.2897 28.841 14.4331 28.8293 14.5759 28.8054C14.6574 28.7918 14.7389 28.777 14.8204 28.7621L15.4702 32.9572C15.5656 33.5731 15.9628 34.0914 16.5327 34.3435C16.7699 34.4485 17.0208 34.5002 17.2706 34.5002C17.6215 34.5002 17.9698 34.398 18.2734 34.1973L23.4114 30.8003C24.0971 30.3469 24.5266 29.6169 24.5898 28.7974L24.9744 23.8183C25.0069 23.7915 25.0396 23.7652 25.072 23.7382C27.7023 21.5442 29.982 18.795 31.3265 16.1954C33.9641 11.096 34.1087 5.76327 33.96 3.03829ZM22.3127 29.1384L17.3979 32.3879L16.7647 28.2996C18.8419 27.6888 20.8967 26.7107 22.8543 25.4003L22.6037 28.6439C22.5881 28.8462 22.482 29.0265 22.3127 29.1384ZM13.6869 26.6563L7.84361 20.8131C7.69452 20.6639 7.62559 20.4544 7.6594 20.2526C7.83311 19.2138 8.10306 18.2249 8.43721 17.2934L17.2047 26.0609C16.0859 26.4616 15.0837 26.7007 14.2474 26.8406C14.0452 26.8742 13.836 26.8054 13.6869 26.6563ZM5.85607 11.8963L9.09961 11.6457C7.78915 13.6033 6.81099 15.6581 6.20025 17.7353L2.11202 17.1021L5.36154 12.1873C5.4735 12.0179 5.65379 11.9119 5.85607 11.8963ZM23.796 22.2083C22.1868 23.5505 20.6247 24.5214 19.1849 25.2239L9.27572 15.3147C10.196 13.4351 11.3191 11.87 12.2917 10.704C14.3221 8.26991 16.8473 6.17008 19.2199 4.94289C23.8998 2.52218 28.8306 2.39183 31.3532 2.52916C31.6871 2.54735 31.9527 2.81291 31.9709 3.14687C32.1084 5.66951 31.9778 10.6002 29.5571 15.2802C28.3299 17.6527 26.2301 20.1779 23.796 22.2083Z" fill="#C4C4C4" />
            <path d="M23.2902 16.188C24.5653 16.1879 25.8409 15.7024 26.8117 14.7317C27.7525 13.791 28.2704 12.5403 28.2704 11.2101C28.2704 9.87982 27.7524 8.62912 26.8117 7.68848C24.8699 5.74656 21.7103 5.74669 19.7686 7.68848C18.8279 8.62912 18.3098 9.87982 18.3098 11.2101C18.3098 12.5403 18.8279 13.791 19.7686 14.7317C20.7396 15.7026 22.0146 16.1881 23.2902 16.188ZM21.1771 9.09708C21.7596 8.5145 22.5248 8.22324 23.29 8.22324C24.0553 8.22324 24.8205 8.5145 25.403 9.09708C25.9674 9.66147 26.2782 10.4119 26.2782 11.21C26.2782 12.0081 25.9674 12.7586 25.403 13.323C24.238 14.4881 22.3421 14.488 21.177 13.323C20.6127 12.7586 20.3018 12.0082 20.3018 11.2101C20.3018 10.4119 20.6127 9.66147 21.1771 9.09708Z" fill="#C4C4C4" />
            <path d="M1.01614 28.5193C1.27107 28.5193 1.52601 28.4221 1.72045 28.2275L4.97256 24.9754C5.36157 24.5864 5.36157 23.9557 4.97256 23.5667C4.58362 23.1777 3.95289 23.1777 3.56388 23.5667L0.311836 26.8189C-0.0771714 27.2079 -0.0771714 27.8385 0.311836 28.2275C0.506274 28.422 0.761208 28.5193 1.01614 28.5193Z" fill="#C4C4C4" />
            <path d="M7.95297 26.5471C7.56403 26.1581 6.9333 26.1581 6.54429 26.5471L0.291878 32.7996C-0.0971299 33.1886 -0.0971299 33.8193 0.291878 34.2083C0.486382 34.4028 0.741249 34.5 0.996183 34.5C1.25112 34.5 1.50605 34.4028 1.70049 34.2082L7.9529 27.9558C8.34198 27.5668 8.34198 26.9361 7.95297 26.5471Z" fill="#C4C4C4" />
            <path d="M9.52464 29.5275L6.27253 32.7796C5.88352 33.1686 5.88352 33.7993 6.27253 34.1883C6.46703 34.3828 6.72197 34.4801 6.97683 34.4801C7.2317 34.4801 7.4867 34.3829 7.68114 34.1883L10.9333 30.9362C11.3223 30.5472 11.3223 29.9165 10.9333 29.5275C10.5443 29.1385 9.91358 29.1385 9.52464 29.5275Z" fill="#C4C4C4" />
        </g>
        <defs>
            <clipPath id="clip0_2_3374">
                <rect width="34" height="34" fill="white" transform="translate(6.10352e-05 0.5)" />
            </clipPath>
        </defs>
    </svg>

)

export default ShuttleSvg
