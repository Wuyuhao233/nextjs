import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

export type Props = {
    children: JSX.Element;
};
export default function Layout({ children }: Props) {
    return (
        <div>
            <NavBar />
            <main>{children}</main>
            <Footer />
        </div>
    );
}
