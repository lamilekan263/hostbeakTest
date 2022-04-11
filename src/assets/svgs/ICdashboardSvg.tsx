import * as React from "react"

const ICdashboard = (props: { isActive: boolean }) => {

    return (
        <svg width="20" height="25" viewBox="0 0 34 35" fill={`${props.isActive ? "bg-red-900" : "none"}`} xmlns="http://www.w3.org/2000/svg">
            <rect width="34" height="34" transform="translate(6.10352e-05 0.5)" fill="none" />
            <path fillRule="evenodd" clipRule="evenodd" d="M18.4167 30.25C18.4167 31.0334 19.05 31.6667 19.8334 31.6667H24.0834C25.5865 31.6667 27.0272 31.0703 28.0897 30.0078C29.1522 28.9453 29.7501 27.5031 29.7501 26C29.7501 25.1868 29.7501 24.5833 29.7501 24.5833C29.7501 23.8013 29.1154 23.1667 28.3334 23.1667H19.8334C19.05 23.1667 18.4167 23.8013 18.4167 24.5833V30.25ZM14.1667 31.6667C14.9487 31.6667 15.5834 31.0334 15.5834 30.25V16.0833C15.5834 15.3013 14.9487 14.6667 14.1667 14.6667H5.66673C4.88331 14.6667 4.25006 15.3013 4.25006 16.0833V26C4.25006 27.5031 4.84647 28.9453 5.90897 30.0078C6.97147 31.0703 8.41364 31.6667 9.91673 31.6667H14.1667ZM26.9167 26H21.2501V28.8333H24.0834C24.8342 28.8333 25.5553 28.5358 26.0866 28.0046C26.6178 27.4733 26.9167 26.7523 26.9167 26ZM12.7501 28.8333V17.5H7.08339V26C7.08339 26.7523 7.38089 27.4733 7.91356 28.0046C8.44481 28.5358 9.16448 28.8333 9.91673 28.8333H12.7501ZM19.8334 3.33334C19.05 3.33334 18.4167 3.96801 18.4167 4.75001V18.9167C18.4167 19.7001 19.05 20.3333 19.8334 20.3333H28.3334C29.1154 20.3333 29.7501 19.7001 29.7501 18.9167V9.00001C29.7501 7.49834 29.1522 6.05617 28.0897 4.99367C27.0272 3.93117 25.5865 3.33334 24.0834 3.33334H19.8334ZM21.2501 6.16668V17.5H26.9167V9.00001C26.9167 8.24918 26.6178 7.52809 26.0866 6.99684C25.5553 6.46559 24.8342 6.16668 24.0834 6.16668H21.2501ZM15.5834 4.75001C15.5834 3.96801 14.9487 3.33334 14.1667 3.33334H9.91673C8.41364 3.33334 6.97147 3.93117 5.90897 4.99367C4.84647 6.05617 4.25006 7.49834 4.25006 9.00001V10.4167C4.25006 11.2001 4.88331 11.8333 5.66673 11.8333H14.1667C14.9487 11.8333 15.5834 11.2001 15.5834 10.4167V4.75001ZM12.7501 6.16668H9.91673C9.16448 6.16668 8.44481 6.46559 7.91356 6.99684C7.38089 7.52809 7.08339 8.24918 7.08339 9.00001H12.7501V6.16668Z" fill="#BFBFBF" />
        </svg>)

}

export default ICdashboard
