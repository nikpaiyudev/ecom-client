import Image from "next/image";
import Input from "./Input";

const Footer = () => {

    const FooterItem = ({ title, children }: { title: string, children: JSX.Element }) => {
        return (
            <div className="flex flex-col">
                <span className="text-xl text-white font-medium mb-10">{title}</span>
                {children}
            </div>
        );
    };

    return (
        <footer className="w-full bg-black text-white py-20">
            <div className="container grid grid-cols-5 gap-4 m-auto">
                <FooterItem title="Exclusive">
                    <div className="flex flex-col">
                        <span className="text-lg">Subscribe</span>
                        <div className="mt-10 flex gap-4 flex-col">
                            <span>Get 10% off your first order</span>
                            <input placeholder="Enter your email" className="border border-white h-[50px] bg-transparent p-3 w-[250px]" />
                        </div>

                    </div>
                </FooterItem>
                <FooterItem title="Support">
                    <div className="flex flex-col gap-5">
                        <span>111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</span>
                        <span>exclusive@gmail.com</span>
                        <span>+88015-88888-9999</span>
                    </div>
                </FooterItem>
                <FooterItem title="Account">
                    <ul className="flex flex-col gap-5">
                        <li>My Account</li>
                        <li>Login / Register</li>
                        <li>Cart</li>
                        <li>Wishlist</li>
                        <li>Shop</li>
                    </ul>
                </FooterItem>
                <FooterItem title="Quick Link">
                    <ul className="flex flex-col gap-5">
                        <li>Privacy Policy</li>
                        <li>Terms Of Use</li>
                        <li>FAQ</li>
                        <li>Contact</li>
                    </ul>
                </FooterItem>
                <FooterItem title="Download App">
                    <div className="flex flex-col gap-5">
                        <span>Save $3 with App New User Only</span>
                        <div className="flex gap-4">
                            <div className="flex">
                                <Image src={'/assets/icon/qrcode.png'} alt={'Qr Code'} width={76} height={76} />
                            </div>
                            <div className="flex flex-col gap-4">
                                <Image src={'/assets/icon/app-store.png'} alt={'App Store'} width={110} height={40} />
                                <Image src={'/assets/icon/google-play.png'} alt={'Google Play'} width={110} height={40} />
                            </div>
                        </div>
                        <div className="flex gap-8 mt-2">
                            <Image src={'/assets/icon/facebook.svg'} alt={'Facebook'} width={24} height={24} />
                            <Image src={'/assets/icon/twitter.svg'} alt={'Twitter'} width={24} height={24} />
                            <Image src={'/assets/icon/instagram.svg'} alt={'Instagram'} width={24} height={24} />
                            <Image src={'/assets/icon/linkedln.svg'} alt={'Linkedln'} width={24} height={24} />
                        </div>
                    </div>
                </FooterItem>
            </div>
        </footer>
    );
};

export default Footer;