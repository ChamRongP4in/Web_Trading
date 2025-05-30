import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-300 border-t border-gray-200 dark:border-gray-700 mt-10">
            <div className="max-w-screen-xl mx-auto px-4 py-8 md:flex md:items-center md:justify-between">
                {/* Left side: Logo and copyright */}
                <div className="mb-4 md:mb-0">
                    <a href="#" className="flex items-center space-x-2">
                        <img
                            src="https://cute-cute.vercel.app/image%20bbe%F0%9F%98%98%E2%9D%A4%EF%B8%8F/picicon10.jpg"
                            className="h-8"
                            alt="Logo"
                        />
                        <span className="text-lg font-semibold dark:text-white">Trading Summery</span>
                    </a>
                    <p className="text-sm mt-2">&copy; {new Date().getFullYear()} All rights reserved.</p>
                </div>


                {/* Right side: Social icons */}
                <div className="flex space-x-4">
                    <a href="#" className="hover:text-blue-500">
                        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M22 12a10 10 0 1 0-11.5 9.9v-7h-2v-3h2v-2.3c0-2 1.2-3.1 3-3.1.9 0 1.8.2 1.8.2v2h-1c-1 0-1.3.6-1.3 1.3V11h2.2l-.3 3h-1.9v7A10 10 0 0 0 22 12z" /></svg>
                    </a>
                    <a href="#" className="hover:text-blue-400">
                        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M21.8 7.5a8.4 8.4 0 0 1-2.3.6 4.1 4.1 0 0 0 1.8-2.2 8.4 8.4 0 0 1-2.6 1A4.1 4.1 0 0 0 12 9.7a11.6 11.6 0 0 1-8.5-4.3 4.1 4.1 0 0 0 1.3 5.5A4 4 0 0 1 3 10v.1a4.1 4.1 0 0 0 3.3 4 4 4 0 0 1-1.8.1 4.1 4.1 0 0 0 3.8 2.8A8.3 8.3 0 0 1 2 18.6a11.7 11.7 0 0 0 6.3 1.8c7.5 0 11.6-6.2 11.6-11.6v-.5A8.3 8.3 0 0 0 22 6.6a8.1 8.1 0 0 1-2.2.6z" /></svg>
                    </a>
                    <a href="#" className="hover:text-pink-500">
                        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 2 .3 2.6.6a5.2 5.2 0 0 1 1.9 1.9c.3.6.5 1.4.6 2.6.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.3 2-.6 2.6a5.2 5.2 0 0 1-1.9 1.9c-.6.3-1.4.5-2.6.6-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-2-.3-2.6-.6a5.2 5.2 0 0 1-1.9-1.9c-.3-.6-.5-1.4-.6-2.6-.1-1.3-.1-1.7-.1-4.9s0-3.6.1-4.9c.1-1.2.3-2 .6-2.6a5.2 5.2 0 0 1 1.9-1.9c.6-.3 1.4-.5 2.6-.6C8.4 2.2 8.8 2.2 12 2.2zm0 1.8c-3.1 0-3.4 0-4.6.1-1.1.1-1.7.2-2.1.4a3.4 3.4 0 0 0-1.2 1.2c-.2.4-.3 1-.4 2.1-.1 1.2-.1 1.5-.1 4.6s0 3.4.1 4.6c.1 1.1.2 1.7.4 2.1a3.4 3.4 0 0 0 1.2 1.2c.4.2 1 .3 2.1.4 1.2.1 1.5.1 4.6.1s3.4 0 4.6-.1c1.1-.1 1.7-.2 2.1-.4a3.4 3.4 0 0 0 1.2-1.2c.2-.4.3-1 .4-2.1.1-1.2.1-1.5.1-4.6s0-3.4-.1-4.6c-.1-1.1-.2-1.7-.4-2.1a3.4 3.4 0 0 0-1.2-1.2c-.4-.2-1-.3-2.1-.4-1.2-.1-1.5-.1-4.6-.1zm0 3.6a5.4 5.4 0 1 1 0 10.8 5.4 5.4 0 0 1 0-10.8zm0 1.8a3.6 3.6 0 1 0 0 7.2 3.6 3.6 0 0 0 0-7.2zm5.4-.9a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0z" /></svg>
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
