 import Link from "next/link";

const Footer = () => {
    return (
        <footer className="bg-black">
            <div className="max-w-[1200px] py-3 md:py-10 px-2 lg:pt-20 mx-auto">
                {/* <!-- Grid --> */}
                <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-3">
                    <div className="lg:col-span-1">
                    <svg width="155" height="23" viewBox="0 0 155 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.5 2.96C6.98 2.96 8.27333 3.25333 9.38 3.84C10.4867 4.42667 11.34 5.25333 11.94 6.32C12.5533 7.37333 12.86 8.59333 12.86 9.98C12.86 11.3533 12.5533 12.5733 11.94 13.64C11.34 14.7067 10.48 15.5333 9.36 16.12C8.25333 16.7067 6.96667 17 5.5 17H0.24V2.96H5.5ZM5.28 14.04C6.57333 14.04 7.58 13.6867 8.3 12.98C9.02 12.2733 9.38 11.2733 9.38 9.98C9.38 8.68667 9.02 7.68 8.3 6.96C7.58 6.24 6.57333 5.88 5.28 5.88H3.66V14.04H5.28ZM25.2912 11.24C25.2912 11.56 25.2713 11.8933 25.2313 12.24H17.4913C17.5446 12.9333 17.7646 13.4667 18.1513 13.84C18.5513 14.2 19.0379 14.38 19.6113 14.38C20.4646 14.38 21.0579 14.02 21.3913 13.3H25.0313C24.8446 14.0333 24.5046 14.6933 24.0113 15.28C23.5313 15.8667 22.9246 16.3267 22.1913 16.66C21.4579 16.9933 20.6379 17.16 19.7313 17.16C18.6379 17.16 17.6646 16.9267 16.8113 16.46C15.9579 15.9933 15.2913 15.3267 14.8113 14.46C14.3313 13.5933 14.0913 12.58 14.0913 11.42C14.0913 10.26 14.3246 9.24667 14.7913 8.38C15.2713 7.51333 15.9379 6.84667 16.7913 6.38C17.6446 5.91333 18.6246 5.68 19.7313 5.68C20.8113 5.68 21.7713 5.90667 22.6113 6.36C23.4513 6.81333 24.1046 7.46 24.5713 8.3C25.0513 9.14 25.2912 10.12 25.2912 11.24ZM21.7913 10.34C21.7913 9.75333 21.5913 9.28667 21.1913 8.94C20.7913 8.59333 20.2913 8.42 19.6913 8.42C19.1179 8.42 18.6313 8.58667 18.2313 8.92C17.8446 9.25333 17.6046 9.72667 17.5113 10.34H21.7913ZM31.6355 17.16C30.6621 17.16 29.7955 16.9933 29.0355 16.66C28.2755 16.3267 27.6755 15.8733 27.2355 15.3C26.7955 14.7133 26.5488 14.06 26.4955 13.34H29.8755C29.9155 13.7267 30.0955 14.04 30.4155 14.28C30.7355 14.52 31.1288 14.64 31.5955 14.64C32.0221 14.64 32.3488 14.56 32.5755 14.4C32.8155 14.2267 32.9355 14.0067 32.9355 13.74C32.9355 13.42 32.7688 13.1867 32.4355 13.04C32.1021 12.88 31.5621 12.7067 30.8155 12.52C30.0155 12.3333 29.3488 12.14 28.8155 11.94C28.2821 11.7267 27.8221 11.4 27.4355 10.96C27.0488 10.5067 26.8555 9.9 26.8555 9.14C26.8555 8.5 27.0288 7.92 27.3755 7.4C27.7355 6.86667 28.2555 6.44667 28.9355 6.14C29.6288 5.83333 30.4488 5.68 31.3955 5.68C32.7955 5.68 33.8955 6.02667 34.6955 6.72C35.5088 7.41333 35.9755 8.33333 36.0955 9.48H32.9355C32.8821 9.09333 32.7088 8.78667 32.4155 8.56C32.1355 8.33333 31.7621 8.22 31.2955 8.22C30.8955 8.22 30.5888 8.3 30.3755 8.46C30.1621 8.60667 30.0555 8.81333 30.0555 9.08C30.0555 9.4 30.2221 9.64 30.5555 9.8C30.9021 9.96 31.4355 10.12 32.1555 10.28C32.9821 10.4933 33.6555 10.7067 34.1755 10.92C34.6955 11.12 35.1488 11.4533 35.5355 11.92C35.9355 12.3733 36.1421 12.9867 36.1555 13.76C36.1555 14.4133 35.9688 15 35.5955 15.52C35.2355 16.0267 34.7088 16.4267 34.0155 16.72C33.3355 17.0133 32.5421 17.16 31.6355 17.16ZM39.9678 4.68C39.3678 4.68 38.8745 4.50667 38.4878 4.16C38.1145 3.8 37.9278 3.36 37.9278 2.84C37.9278 2.30667 38.1145 1.86667 38.4878 1.52C38.8745 1.16 39.3678 0.979999 39.9678 0.979999C40.5545 0.979999 41.0345 1.16 41.4078 1.52C41.7945 1.86667 41.9878 2.30667 41.9878 2.84C41.9878 3.36 41.7945 3.8 41.4078 4.16C41.0345 4.50667 40.5545 4.68 39.9678 4.68ZM41.6678 5.84V17H38.2478V5.84H41.6678ZM48.3863 5.68C49.1729 5.68 49.8596 5.84 50.4463 6.16C51.0463 6.48 51.5063 6.9 51.8263 7.42V5.84H55.2463V16.98C55.2463 18.0067 55.0396 18.9333 54.6263 19.76C54.2263 20.6 53.6063 21.2667 52.7663 21.76C51.9396 22.2533 50.9063 22.5 49.6663 22.5C48.0129 22.5 46.6729 22.1067 45.6463 21.32C44.6196 20.5467 44.0329 19.4933 43.8863 18.16H47.2663C47.3729 18.5867 47.6263 18.92 48.0263 19.16C48.4263 19.4133 48.9196 19.54 49.5063 19.54C50.2129 19.54 50.7729 19.3333 51.1863 18.92C51.6129 18.52 51.8263 17.8733 51.8263 16.98V15.4C51.4929 15.92 51.0329 16.3467 50.4463 16.68C49.8596 17 49.1729 17.16 48.3863 17.16C47.4663 17.16 46.6329 16.9267 45.8863 16.46C45.1396 15.98 44.5463 15.3067 44.1063 14.44C43.6796 13.56 43.4663 12.5467 43.4663 11.4C43.4663 10.2533 43.6796 9.24667 44.1063 8.38C44.5463 7.51333 45.1396 6.84667 45.8863 6.38C46.6329 5.91333 47.4663 5.68 48.3863 5.68ZM51.8263 11.42C51.8263 10.5667 51.5863 9.89333 51.1063 9.4C50.6396 8.90667 50.0663 8.66 49.3863 8.66C48.7063 8.66 48.1263 8.90667 47.6463 9.4C47.1796 9.88 46.9463 10.5467 46.9463 11.4C46.9463 12.2533 47.1796 12.9333 47.6463 13.44C48.1263 13.9333 48.7063 14.18 49.3863 14.18C50.0663 14.18 50.6396 13.9333 51.1063 13.44C51.5863 12.9467 51.8263 12.2733 51.8263 11.42ZM64.5205 5.72C65.8271 5.72 66.8671 6.14667 67.6405 7C68.4271 7.84 68.8205 9 68.8205 10.48V17H65.4205V10.94C65.4205 10.1933 65.2271 9.61333 64.8405 9.2C64.4538 8.78667 63.9338 8.58 63.2805 8.58C62.6271 8.58 62.1071 8.78667 61.7205 9.2C61.3338 9.61333 61.1405 10.1933 61.1405 10.94V17H57.7205V5.84H61.1405V7.32C61.4871 6.82667 61.9538 6.44 62.5405 6.16C63.1271 5.86667 63.7871 5.72 64.5205 5.72Z" fill="#fff"/>
                        <path d="M79.937 14.52H74.697L73.857 17H70.277L75.357 2.96H79.317L84.397 17H80.777L79.937 14.52ZM79.057 11.88L77.317 6.74L75.597 11.88H79.057ZM95.2631 7.4C95.0098 6.93333 94.6431 6.58 94.1631 6.34C93.6965 6.08667 93.1431 5.96 92.5031 5.96C91.3965 5.96 90.5098 6.32667 89.8431 7.06C89.1765 7.78 88.8431 8.74667 88.8431 9.96C88.8431 11.2533 89.1898 12.2667 89.8831 13C90.5898 13.72 91.5565 14.08 92.7831 14.08C93.6231 14.08 94.3298 13.8667 94.9031 13.44C95.4898 13.0133 95.9165 12.4 96.1831 11.6H91.8431V9.08H99.2831V12.26C99.0298 13.1133 98.5965 13.9067 97.9831 14.64C97.3831 15.3733 96.6165 15.9667 95.6831 16.42C94.7498 16.8733 93.6965 17.1 92.5231 17.1C91.1365 17.1 89.8965 16.8 88.8031 16.2C87.7231 15.5867 86.8765 14.74 86.2631 13.66C85.6631 12.58 85.3631 11.3467 85.3631 9.96C85.3631 8.57333 85.6631 7.34 86.2631 6.26C86.8765 5.16667 87.7231 4.32 88.8031 3.72C89.8831 3.10667 91.1165 2.8 92.5031 2.8C94.1831 2.8 95.5965 3.20667 96.7431 4.02C97.9031 4.83333 98.6698 5.96 99.0431 7.4H95.2631ZM104.598 5.7V8.54H109.178V11.18H104.598V14.26H109.778V17H101.178V2.96H109.778V5.7H104.598ZM124.558 17H121.138L115.418 8.34V17H111.998V2.96H115.418L121.138 11.66V2.96H124.558V17ZM126.457 9.96C126.457 8.57333 126.757 7.34 127.357 6.26C127.957 5.16667 128.79 4.32 129.857 3.72C130.937 3.10667 132.157 2.8 133.517 2.8C135.184 2.8 136.61 3.24 137.797 4.12C138.984 5 139.777 6.2 140.177 7.72H136.417C136.137 7.13333 135.737 6.68667 135.217 6.38C134.71 6.07333 134.13 5.92 133.477 5.92C132.424 5.92 131.57 6.28667 130.917 7.02C130.264 7.75333 129.937 8.73333 129.937 9.96C129.937 11.1867 130.264 12.1667 130.917 12.9C131.57 13.6333 132.424 14 133.477 14C134.13 14 134.71 13.8467 135.217 13.54C135.737 13.2333 136.137 12.7867 136.417 12.2H140.177C139.777 13.72 138.984 14.92 137.797 15.8C136.61 16.6667 135.184 17.1 133.517 17.1C132.157 17.1 130.937 16.8 129.857 16.2C128.79 15.5867 127.957 14.74 127.357 13.66C126.757 12.58 126.457 11.3467 126.457 9.96ZM154.311 2.96L149.451 12.36V17H146.031V12.36L141.171 2.96H145.051L147.771 8.84L150.471 2.96H154.311Z" fill="#F55F1D"/>
                    </svg>
                    <p className="md:pr-[20%] text-sm text-gray-400 mt-4">Some footer text about the Agency. Just a little description to help people understand you better</p>
                        <div>
                            <Link href={'/'} className="inline-flex justify-center items-center gap-x-3.5 w-10 h-10 text-center text-gray-200 hover:bg-white/[.1] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-gray-900 transition">
                            <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                            </svg>
                            </Link>
                            <Link href={'/'} className="inline-flex justify-center items-center gap-x-3.5 w-10 h-10 text-center text-gray-200 hover:bg-white/[.1] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-gray-900 transition">
                            <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                            </svg>
                            </Link>
                            <Link href={'/'} className="inline-flex justify-center items-center gap-x-3.5 w-10 h-10 text-center text-gray-200 hover:bg-white/[.1] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-gray-900 transition" >
                            <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                            </svg>
                            </Link>
                        </div>
                    </div>
                    {/* <!-- End Col --> */}

                    <div className="col-span-1">
                        <h4 className="font-semibold text-gray-100">Product</h4>

                        <div className="grid mt-3 space-y-3">
                        <p><a className="inline-flex text-gray-400 gap-x-2 hover:text-gray-200" href="#">Pricing</a></p>
                        <p><a className="inline-flex text-gray-400 gap-x-2 hover:text-gray-200" href="#">Changelog</a></p>
                        <p><a className="inline-flex text-gray-400 gap-x-2 hover:text-gray-200" href="#">Docs</a></p>
                        </div>
                    </div>
                    {/* <!-- End Col --> */}

                    <div className="col-span-1">
                        <h4 className="font-semibold text-gray-100">Company</h4>

                        <div className="grid mt-3 space-y-3">
                        <p><a className="inline-flex text-gray-400 gap-x-2 hover:text-gray-200" href="#">About us</a></p>
                        <p><a className="inline-flex text-gray-400 gap-x-2 hover:text-gray-200" href="#">Blog</a></p>
                        <p><a className="inline-flex text-gray-400 gap-x-2 hover:text-gray-200" href="#">Careers</a></p>
                        <p><a className="inline-flex text-gray-400 gap-x-2 hover:text-gray-200" href="#">Customers</a></p>
                        </div>
                    </div>
                    {/* <!-- End Col --> */}
                {/* <!-- End Col --> */}
                </div>
                {/* <!-- End Grid --> */}

                <div className="grid items-center mt-6 md:mt-12">

                    <p className="text-sm text-center text-gray-400">All rights reserved by © Shohan </p>

                {/* <!-- End Col --> */}
                </div>
            </div>
        </footer>
    );
};

export default Footer;